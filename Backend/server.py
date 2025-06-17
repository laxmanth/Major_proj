# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import subprocess

# app = Flask(__name__)
# CORS(app)

# @app.route('/run-sqli', methods=['POST'])
# def run_sqli():
#     url = request.json.get('url')
#     if not url:
#         return jsonify({"error": "No URL provided"}), 400

#     try:
#         result = subprocess.run(['python', './sql.py', url], capture_output=True, text=True, check=True)
#         return jsonify({"output": result.stdout})
#     except subprocess.CalledProcessError as e:
#         return jsonify({"error": "Script failed", "details": e.stderr}), 500

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import re

app = Flask(__name__)
CORS(app, resources={
    r"/run-sqli": {
        "origins": ["http://localhost:3000"],
        "methods": ["POST"],
        "allow_headers": ["Content-Type"]
    }
})

@app.route('/run-sqli', methods=['POST'])
def run_sqli():
    if not request.json or 'url' not in request.json:
        return jsonify({"error": "No URL provided"}), 400
        
    url = request.json['url'].strip()
    if not re.match(r'^https?://', url, re.I):
        return jsonify({"error": "Invalid URL format"}), 400

    try:
        result = subprocess.run(
            ['python', 'sql.py', url],
            capture_output=True,
            text=True,
            timeout=30
        )
        
        output = result.stdout.strip()
        if result.returncode != 0:
            return jsonify({
                "error": "Scan failed",
                "details": result.stderr.strip() or "Unknown error"
            }), 400
            
        return jsonify({
            "output": output,
            "status": "success"
        })
    except subprocess.TimeoutExpired:
        return jsonify({
            "error": "Scan timed out",
            "details": "The scan took too long to complete"
        }), 408
    except Exception as e:
        return jsonify({
            "error": "Server error",
            "details": str(e)
        }), 500

@app.route('/run-xss', methods=['POST'])
def run_xss():
    if not request.json or 'url' not in request.json:
        return jsonify({"error": "No URL provided"}), 400
        
    url = request.json['url'].strip()
    if not re.match(r'^https?://', url, re.I):
        return jsonify({"error": "Invalid URL format"}), 400

    try:
        result = subprocess.run(
            ['python', 'xss.py', url],
            capture_output=True,
            text=True,
            timeout=30
        )
        
        if result.returncode != 0:
            return jsonify({
                "error": "Scan failed",
                "details": result.stderr.strip() or "Unknown error"
            }), 400
            
        # Parse the output from xss.py
        output = result.stdout.strip().lower()
        vulnerable = "vulnerability found" in output
        
        return jsonify({
            "vulnerable": vulnerable,
            "output": output,
            "payload": "<script>alert('xss')</script>",  # Example payload
            "status": "success"
        })
    except subprocess.TimeoutExpired:
        return jsonify({
            "error": "Scan timed out",
            "details": "The scan took too long to complete"
        }), 408
    except Exception as e:
        return jsonify({
            "error": "Server error",
            "details": str(e)
        }), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)