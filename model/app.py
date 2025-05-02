import os
from dotenv import load_dotenv
import google.generativeai as genai
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Get API key from environment variables
API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    logger.error("GEMINI_API_KEY not found in environment variables")
    raise ValueError("GEMINI_API_KEY not found in environment variables")

# Configure the Gemini API
genai.configure(api_key=API_KEY)

def analyze(text: str, symptoms: list):
    try:
        logger.info(f"Analyzing symptoms - Text: {text}, Symptoms: {symptoms}")
        user_selection = tuple(symptoms)
        prompt = f"user selection: {user_selection} \n\n User question: {text}"
        logger.info(f"Generated prompt: {prompt}")
        
        response = get_gemini_response(prompt)
        logger.info("Successfully got response from Gemini")
        return {"response": response}
    except Exception as e:
        logger.error(f"Error in analyze function: {str(e)}")
        raise

def get_gemini_response(prompt):
    try:
        # Add system-level instructions
        system_instruction = f""" 
        You are a medical assistant specializing in preliminary symptom analysis.
        Provide helpful, informative responses about potential health concerns,
        Format your responses in a clear, organized manner. you will be getting an user input
        and a user selection. The user input is a question about a medical condition
        and the user selection is a tuple of symptoms. Your task is to analyze the symptoms
        and provide a detailed response about the potential medical condition.mostly user will come to you for sysmptom analysis
        and you will be giving answer as how emergency and serious the condition is.
        If the condition is serious, provide a warning and suggest seeking immediate medical attention.
        If the condition is not serious, provide reassurance and suggest monitoring the symptoms.
        Use clear and concise language, and avoid medical jargon.
        If the user selection is empty, provide a general response about the symptoms.
        If the user selection is not empty, provide a detailed analysis of the symptoms.
        Use the following format for your response for example:

        what might be: 🧊 Common Cold
        seriousness: Mild
        explaination: Your symptoms suggest you may have a common cold, which is a viral infection affecting the upper respiratory tract.
        Recommendations:
        Rest
        Stay hydrated
        Over-the-counter cold medications
         and then include 
        1. Introduction: Briefly introduce the symptoms and their significance.
        2. Analysis: Analyze the symptoms and their potential implications. what might the disease and risk of the disease.
        3. Recommendations: Provide recommendations based on the analysis.
        4. seriousness of the condition.
        5. Conclusion: Summarize the key points and provide reassurance or a warning.
        """

        logger.info("Initializing Gemini model")
        # Initialize the model with instructions
        model = genai.GenerativeModel(
            model_name='gemini-1.5-pro',
            system_instruction=system_instruction
        )
        
        logger.info("Generating response from Gemini")
        # Generate response
        response = model.generate_content(prompt)
        logger.info("Successfully generated response")

        # Extract and return the text from the response parts
        response_text = ''.join([part.text for part in response.parts if hasattr(part, 'text')])
        logger.info(f"Response text length: {len(response_text)}")
        return response_text
    except Exception as e:
        logger.error(f"Error in get_gemini_response: {str(e)}")
        raise

# Example usage
user_input = "i been seeing these symptoms from 3 day now and it has not gone away. I am worried about my health. what should i do?"
user_selection = ("fever", "fatigue", "excessive thirst", "frequent urination")
prompt = f"user selection:{user_selection} \n\n User question: {user_input}"
response = get_gemini_response(prompt)
print(response)