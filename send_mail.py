import smtplib
from email.message import EmailMessage
import ssl
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Email credentials
sender_email = os.getenv("SENDER_EMAIL")
app_password = os.getenv("APP_PASSWORD")
receiver_email = os.getenv("RECEIVER_EMAIL")  # Replace with your email

def send_email():
    # Create the email
    msg = EmailMessage()
    msg['Subject'] = "✅ Appointment Confirmed | Health is Wealth - Online Doctor Consultation"
    msg['From'] = f"Health is Wealth <{sender_email}>"
    msg['To'] = receiver_email

    # Plain text fallback
    msg.set_content("Appointment confirmed. Please view in HTML format to see full details.")

    # HTML content
    msg.add_alternative(f"""
    <html>
      <body style="font-family: 'Segoe UI', sans-serif; margin: 0; padding: 0; background-color: #f4f6f8;">
        <div style="max-width: 650px; margin: 40px auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); overflow: hidden;">
          <div style="padding: 30px;">
            <h1 style="color: #00a859; margin-bottom: 10px;">Appointment Confirmed</h1>
            <p style="font-size: 16px; color: #333;">Hello,</p>
            <p style="font-size: 16px; color: #333;">
              Thank you for scheduling your online doctor consultation with <strong>Health is Wealth</strong>. Your appointment has been confirmed successfully.
            </p>
            <div style="background-color: #f0f8f5; padding: 15px 20px; border-left: 4px solid #00a859; margin: 20px 0; border-radius: 6px;">
              <p style="margin: 0; font-size: 15px; color: #333;"><strong>Consultation Type:</strong> Online Doctor Consultation</p>
              <p style="margin: 0; font-size: 15px; color: #333;"><strong>Status:</strong> Confirmed</p>
              <p style="margin: 0; font-size: 15px; color: #333;"><strong>Platform:</strong> Health is Wealth Virtual Portal</p>
              <p style="margin: 0; font-size: 15px; color: #333;"><strong>Appointment Date and time :</strong> 2025-04-20 10:00 AM</p>
              <p style="margin: 0; font-size: 15px; color: #333;"><strong>Meeting Link:</strong> <a href="http://localhost:5173/video-consult" target="_blank">click here</a></p>
            </div>
            <p style="font-size: 15px; color: #555;">
              A confirmation message has been sent to your registered contact. You will receive a reminder closer to your scheduled time.
            </p>
            <p style="margin-top: 30px; font-size: 14px; color: #888;">
              Stay healthy,<br/>
              <strong>Team Health is Wealth</strong>
            </p>
          </div>
          <div style="background-color: #00a859; color: #ffffff; text-align: center; padding: 20px; font-size: 13px;">
            © 2025 Health is Wealth | www.healthiswealth.in<br/>
            24x7 Support: support@healthiswealth.in | +91-9193369369
          </div>
        </div>
      </body>
    </html>
    """, subtype='html')

    # Send the email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
        smtp.login(sender_email, app_password)
        smtp.send_message(msg)

    print("✅ Professional email sent successfully!")
