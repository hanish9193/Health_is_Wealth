import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variables
API_KEY = os.getenv("GEMINI_API_KEY")

# Configure the Gemini API
genai.configure(api_key=API_KEY)


def get_gemini_response(prompt):
    # Add system-level instructions
    system_instruction = "You are a creative and thoughtful storyteller. Always write in a clear and imaginative tone."

    # Initialize the model with instructions
    model = genai.GenerativeModel(
        model_name='gemini-1.5-pro',
        system_instruction=system_instruction
    )
    
    # Generate response
    response = model.generate_content(prompt)

    # Extract and return the text from the response parts
    return ''.join([part.text for part in response.parts if hasattr(part, 'text')])


# Example usage
prompt = "Tell me a short story about a robot learning to paint."
response = get_gemini_response(prompt)
print(response)
