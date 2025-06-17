import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import sys

def xss_scanner(url):
    try:
        response = requests.get(url, timeout=10)
    except Exception as e:
        print(f"Error fetching URL: {e}")
        return False

    soup = BeautifulSoup(response.content, "html.parser")
    forms = soup.find_all("form")
    if not forms:
        print("No forms found on the page")
        return False  # No forms to test

    payload = "<script>alert('XSS')</script>"
    for form in forms:
        action = form.attrs.get("action", "").lower()
        method = form.attrs.get("method", "get").lower()
        inputs = form.find_all("input")

        data = {}
        for input_tag in inputs:
            input_name = input_tag.attrs.get("name")
            input_type = input_tag.attrs.get("type", "text").lower()
            if input_name and input_type not in ["submit", "button"]:
                data[input_name] = payload  # Inject payload into every input

        target_url = urljoin(url, action)
        try:
            if method == "post":
                res = requests.post(target_url, data=data, timeout=10)
            else:
                res = requests.get(target_url, params=data, timeout=10)
        except Exception as e:
            print(f"Error testing form: {e}")
            continue  # Skip problematic forms

        if payload in res.text:
            print(f"[+] XSS Vulnerability Found in form at {target_url}!")
            return True  # XSS found

    print("[-] No XSS Vulnerability Found.")
    return False  # No XSS found

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Error: Please provide URL as argument")
        sys.exit(1)
    
    target_url = sys.argv[1].strip()
    if not target_url.startswith(('http://', 'https://')):
        print("Error: URL must start with http:// or https://")
        sys.exit(1)
        
    vulnerable = xss_scanner(target_url)
    if vulnerable:
        print("VULNERABLE")
    else:
        print("NOT VULNERABLE")