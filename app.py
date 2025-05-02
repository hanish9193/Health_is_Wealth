from flask import Flask, request, jsonify
from flask_cors import CORS
from send_mail import send_email  # make sure this file is named send_mail.py

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return "✅ Flask backend is running!"

@app.route("/send-email", methods=["POST"])
def trigger_email():
    try:
        send_email()
        return jsonify({"message": "✅ Email sent successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Or another port if 5000 is in use

