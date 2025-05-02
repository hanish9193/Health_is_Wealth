import React, { useState } from "react";
import { Send, Mic, RefreshCw, ArrowRight, InfoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import MedicalModel from "./MedicalModel";
import { toast } from "@/hooks/use-toast";

// Predefined symptom tags
const symptomTags = [
  "Fever",
  "Headache",
  "Fatigue",
  "Cough",
  "Sore Throat",
  "Shortness of Breath",
  "Chest Pain",
  "Abdominal Pain",
  "Nausea",
  "Dizziness",
  "Joint Pain",
  "Muscle Pain",
  "Skin Rash",
];

// Mock AI responses for demo
const mockResponses = [
  {
    condition: "Common Cold",
    explanation:
      "Your symptoms suggest you may have a common cold, which is a viral infection affecting the upper respiratory tract.",
    severity: "Mild",
    recommendations: [
      "Rest",
      "Stay hydrated",
      "Over-the-counter cold medications",
    ],
    selfCare: true,
    seeDoctor: false,
    emoji: "🧊",
  },
  {
    condition: "Migraine",
    explanation:
      "Your symptoms align with migraine headache, a neurological condition that can cause severe headache pain, sensitivity to light and sound, and nausea.",
    severity: "Moderate",
    recommendations: [
      "Rest in dark room",
      "Over-the-counter pain relievers",
      "Cold compress",
    ],
    selfCare: true,
    seeDoctor: false,
    emoji: "🧠",
  },
  {
    condition: "Flu (Influenza)",
    explanation:
      "Your symptoms match influenza, a viral infection that attacks your respiratory system.",
    severity: "Moderate",
    recommendations: [
      "Rest",
      "Stay hydrated",
      "Over-the-counter fever reducers",
      "Monitor symptoms",
    ],
    selfCare: true,
    seeDoctor: true,
    emoji: "🤒",
  },
];

// Function to parse Gemini API response
const parseGeminiResponse = (responseText) => {
  // Initialize the structure that matches your UI expectations
  const parsedResponse = {
    condition: "",
    explanation: "",
    severity: "",
    recommendations: [],
    selfCare: false,
    seeDoctor: false,
    emoji: "",
  };

  // Extract condition and emoji
  const conditionMatch = responseText.match(/what might be: (.*?)$/m);
  if (conditionMatch && conditionMatch[1]) {
    const conditionText = conditionMatch[1];
    // Extract emoji if present
    const emojiMatch = conditionText.match(/([\u{1F300}-\u{1F6FF}])/u);
    if (emojiMatch) {
      parsedResponse.emoji = emojiMatch[1];
      // Remove emoji from condition
      parsedResponse.condition = conditionText
        .replace(emojiMatch[1], "")
        .trim();
    } else {
      parsedResponse.condition = conditionText.trim();
    }
  }

  // Extract severity
  const severityMatch = responseText.match(
    /seriousness: (Mild|Moderate|Severe)/i
  );
  if (severityMatch) {
    parsedResponse.severity = severityMatch[1];
  }

  // Extract explanation
  const explanationMatch = responseText.match(
    /explanation: (.*?)(?=\nRecommendations:)/s
  );
  if (explanationMatch) {
    parsedResponse.explanation = explanationMatch[1].trim();
  }

  // Extract recommendations
  const recommendationsSection = responseText.match(
    /Recommendations:(.*?)(?=\n\d\.|\n$)/s
  );
  if (recommendationsSection) {
    const recommendations = recommendationsSection[1].match(/- (.*?)$/gm);
    if (recommendations) {
      parsedResponse.recommendations = recommendations.map((rec) =>
        rec.replace(/- /, "").trim()
      );
    }
  }

  // Determine selfCare and seeDoctor based on recommendations content
  const recommendationsText = parsedResponse.recommendations
    .join(" ")
    .toLowerCase();
  parsedResponse.seeDoctor =
    recommendationsText.includes("doctor") ||
    recommendationsText.includes("medical") ||
    parsedResponse.severity === "Severe" ||
    parsedResponse.severity === "Moderate";
  parsedResponse.selfCare =
    recommendationsText.includes("rest") ||
    recommendationsText.includes("hydration") ||
    recommendationsText.includes("monitor");

  return parsedResponse;
};

const SymptomChecker = () => {
  const [inputText, setInputText] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [aiResponse, setAiResponse] = useState<
    (typeof mockResponses)[0] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);

  const handleSymptomTag = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      // Play a soft click sound effect for feedback
      if (selectedSymptoms.length < 5) {
        toast({
          title: "Symptom Added",
          description: `Added ${symptom} to your symptoms list`,
          duration: 1500,
        });
      }
    }
  };

  const handleSubmit = async () => {
    if (inputText.trim() === "" && selectedSymptoms.length === 0) {
      toast({
        variant: "destructive",
        title: "No symptoms provided",
        description: "Please describe or select at least one symptom",
      });
      return;
    }

    setIsLoading(true);
    setAiResponse(null);

    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_input: inputText || "",
          user_selection: selectedSymptoms,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from backend");
      }

      const data = await response.json();
      console.log("Raw API Response:", data);

      // Check if response is in the format you shared
      if (data.response) {
        // Extract the response text
        const responseText = data.response;
        console.log("Extracted Response Text:", responseText);

        // Parse the response text
        const parsedData = parseGeminiResponse(responseText);
        console.log("Parsed Response:", parsedData);
        setAiResponse(parsedData);
      } else if (data.rawText) {
        // Alternative format
        const parsedData = parseGeminiResponse(data.rawText);
        console.log("Parsed Response:", parsedData);
        setAiResponse(parsedData);
      } else if (typeof data === "string") {
        // If the backend returns just the raw text string
        const parsedData = parseGeminiResponse(data);
        console.log("Parsed Response:", parsedData);
        setAiResponse(parsedData);
      } else {
        // If the backend already returns a structured response
        console.log("Structured API Response:", data);
        setAiResponse(data);
      }
    } catch (error) {
      console.error("API Error:", error);
      toast({
        variant: "destructive",
        title: "Server Error",
        description: "Failed to fetch analysis from the backend",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetChecker = () => {
    setInputText("");
    setSelectedSymptoms([]);
    setAiResponse(null);
  };

  const simulateVoiceInput = () => {
    setVoiceActive(true);
    toast({
      title: "Voice Recognition Active",
      description: "Please speak your symptoms...",
    });

    // Simulate voice recognition
    setTimeout(() => {
      setInputText("I have a headache, fever, and feel tired");
      setVoiceActive(false);
      toast({
        title: "Voice Captured",
        description: "Your spoken symptoms have been recorded",
      });
    }, 2000);
  };

  return (
    <section id="symptom-checker" className="py-20 px-4 relative">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-health-subtle/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-health-light/30 to-transparent"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-health-primary via-health-secondary to-health-primary bg-clip-text text-transparent animate-gradient-background bg-300%">
              AI Symptom Checker
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-health-primary to-health-secondary rounded-full"></div>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Describe your symptoms or select from common options below for an
            AI-powered assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 3D Model Section - Improved */}
          <div className="glass-card h-[500px] relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
            <div className="absolute top-4 left-4 glass px-3 py-1 text-xs font-medium z-20 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Interactive Model
            </div>
            <div className="h-full w-full">
              <MedicalModel />
            </div>
          </div>

          {/* Symptom Checker Section - Enhanced */}
          <div className="glass-card transform transition-all duration-500 hover:shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Select Symptoms</h3>
              <button
                onClick={resetChecker}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-foreground/70"
                aria-label="Reset"
              >
                <RefreshCw size={16} />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {symptomTags.map((symptom) => (
                <button
                  key={symptom}
                  className={cn(
                    "symptom-tag relative overflow-hidden",
                    selectedSymptoms.includes(symptom) &&
                      "bg-health-primary text-white"
                  )}
                  onClick={() => handleSymptomTag(symptom)}
                >
                  {symptom}
                  {selectedSymptoms.includes(symptom) && (
                    <span className="absolute inset-0 bg-white/20 animate-pulse-once"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Describe your symptoms in detail..."
                className="input-glass w-full pr-20"
              />
              <button
                className={cn(
                  "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors",
                  voiceActive
                    ? "bg-health-primary text-white animate-pulse"
                    : "bg-health-primary/20 text-health-primary hover:bg-health-primary hover:text-white"
                )}
                onClick={simulateVoiceInput}
                aria-label="Voice input"
              >
                <Mic size={20} />
              </button>
            </div>

            <button
              className={cn(
                "gradient-button w-full flex items-center justify-center gap-2",
                (isLoading ||
                  (inputText.trim() === "" && selectedSymptoms.length === 0)) &&
                  "opacity-70 cursor-not-allowed"
              )}
              onClick={handleSubmit}
              disabled={
                isLoading ||
                (inputText.trim() === "" && selectedSymptoms.length === 0)
              }
            >
              {isLoading ? (
                <>
                  <RefreshCw size={20} className="animate-spin" />
                  Analyzing Symptoms...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Check Symptoms
                </>
              )}
            </button>
          </div>
        </div>

        {/* AI Response Section - Enhanced */}
        {aiResponse && (
          <div className="glass-card animate-fade-in mt-8 relative overflow-hidden whitespace-pre-wrap">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-health-primary/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-health-secondary/5 rounded-full blur-xl"></div>

            <div className="flex items-start justify-between mb-4 relative z-10">
              <h3 className="text-xl font-bold flex items-center gap-2">
                {aiResponse?.emoji} {aiResponse?.condition}
                <span
                  className={cn(
                    "text-xs py-1 px-3 rounded-full",
                    aiResponse?.severity === "Mild"
                      ? "bg-green-500/20 text-green-700"
                      : aiResponse?.severity === "Moderate"
                      ? "bg-yellow-500/20 text-yellow-700"
                      : "bg-red-500/20 text-red-700"
                  )}
                >
                  {aiResponse?.severity}
                </span>
              </h3>
              <button
                onClick={resetChecker}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Reset checker"
              >
                <RefreshCw size={16} />
              </button>
            </div>

            {/* Explanation */}
            {aiResponse?.explanation && (
              <div className="mb-4 relative z-10 text-foreground/80">
                <p>{aiResponse.explanation}</p>
              </div>
            )}

            {/* Recommendations */}
            {aiResponse?.recommendations && (
              <div className="mb-4 relative z-10">
                <h4 className="font-medium mb-2 flex items-center gap-1">
                  <InfoIcon size={16} className="text-health-primary" />
                  Recommendations:
                </h4>
                <ul className="list-disc list-inside text-foreground/80 space-y-1">
                  {aiResponse.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-health-primary/70 rounded-full inline-block"></span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-6 relative z-10">
              {aiResponse?.seeDoctor ? (
                <a
                  href="#telemedicine"
                  className="gradient-button text-center flex items-center justify-center gap-1"
                >
                  Book Doctor Consultation
                  <ArrowRight size={16} />
                </a>
              ) : (
                <button className="subtle-button flex items-center justify-center gap-1">
                  See Self-Care Options
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SymptomChecker;
