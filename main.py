# app.py
import os
from dotenv import load_dotenv
import google.generativeai as genai
import logging
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import uvicorn

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

API_KEY = 'AIzaSyB35bwp_deve7tMjXTs0QrplrhX3bZBOF0'

genai.configure(api_key=API_KEY)

# FastAPI instance
app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request body structure
class SymptomRequest(BaseModel):
    user_input: str
    user_selection: List[str]

@app.post("/analyze")
def analyze_symptoms(request: SymptomRequest):
    try:
        logger.info(f"Received request: {request}")
        prompt = f"user selection: {tuple(request.user_selection)} \n\n User question: {request.user_input}"
        response = get_gemini_response(prompt)
        return {"response": response}
    except Exception as e:
        logger.error(f"Error while analyzing symptoms: {e}")
        raise HTTPException(status_code=500, detail=str(e))

def get_gemini_response(prompt: str) -> str:
    try:
        system_instruction = """
        You are a medical assistant specializing in preliminary symptom analysis.
        Provide helpful, informative responses about potential health concerns.
        Format your responses in a clear, organized manner. You will receive a user input
        and a user selection. The user input is a question about a medical condition
        and the user selection is a tuple of symptoms.

        Your task is to analyze the symptoms and provide a detailed response about the potential medical condition.
        Mostly, users will come to you for symptom analysis and you will provide information about how urgent or serious the condition is.

        If the condition is serious, provide a warning and suggest seeking immediate medical attention.
        If the condition is not serious, provide reassurance and suggest monitoring the symptoms.
        Use clear and concise language, and avoid medical jargon.

        If the user selection is empty, provide a general response about the symptoms.
        If the user selection is not empty, provide a detailed analysis of the symptoms.

        Format your response using this structure:

        what might be: 🧊 <Possible Condition>
        seriousness: <Mild | Moderate | Severe>
        explanation: <Short explanation about the condition and why it might be that>
        Recommendations:
        - <Recommendation 1>
        - <Recommendation 2>
        - <Recommendation 3>

        1. Introduction: Briefly introduce the symptoms and their significance.
        2. Analysis: Analyze the symptoms and their potential implications. What might the disease be and its risk.
        3. Recommendations: Provide recommendations based on the analysis.
        4. Seriousness of the condition.
        5. Conclusion: Summarize the key points and provide reassurance or a warning.
        """

        logger.info("Initializing Gemini model...")
        model = genai.GenerativeModel(
            model_name='gemini-1.5-pro',
            system_instruction=system_instruction
        )

        logger.info("Generating response from Gemini...")
        response = model.generate_content(prompt)

        response_text = ''.join([part.text for part in response.parts if hasattr(part, 'text')])
        logger.info(f"Generated response length: {len(response_text)}")
        return response_text

    except Exception as e:
        logger.error(f"Error in get_gemini_response: {str(e)}")
        raise

# Run the API with uvicorn when the script is executed
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)


# uvicorn main:app --reload
