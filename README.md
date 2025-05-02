# Health is Wealth 🏥

<div align="center">


![Health is Wealth Banner](Screenshot%202025-05-02%20212515.png)

[![GitHub stars](https://img.shields.io/github/stars/username/health-is-wealth?style=social)](https://github.com/username/health-is-wealth/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/username/health-is-wealth?style=social)](https://github.com/username/health-is-wealth/network/members)
[![GitHub issues](https://img.shields.io/github/issues/username/health-is-wealth)](https://github.com/username/health-is-wealth/issues)
[![GitHub license](https://img.shields.io/github/license/username/health-is-wealth)](https://github.com/username/health-is-wealth/blob/main/LICENSE)
[![Made with Love](https://img.shields.io/badge/Made%20with-Love-red.svg)](https://github.com/username/health-is-wealth)

**Your all-in-one healthcare companion powered by AI and telehealth technology**

<p align="center">
  <a href="#key-features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

![hiw home page](Screenshot%202025-05-02%20212521.png)
![ai symptom](Screenshot%202025-05-02%20212527.png)
![appointment](Screenshot%202025-05-02%20212536.png)


</div>

## 📋 Overview

Health is Wealth revolutionizes healthcare access by combining AI-powered symptom analysis with seamless doctor consultations. Our platform bridges the gap between patients seeking immediate health insights and medical professionals providing expert care.

<p align="center">
<img src="https://via.placeholder.com/600x350/2196F3/FFFFFF/?text=AI+%2B+Telehealth" alt="AI + Telehealth" width="60%">
</p>

## ✨ Key Features
![telecommunication home](Screenshot%202025-05-02%20213028.png)

<table>
  <tr>
    <td width="50%">
      <h3>🤖 AI Symptom Analyzer</h3>
      <ul>
        <li>Gemini API integration for advanced symptom assessment</li>
        <li>Natural language processing to understand patient concerns</li>
        <li>Preliminary health insights with potential condition identification</li>
        <li>Specialist recommendation based on symptom patterns</li>
        <li>Privacy-first approach to sensitive health data</li>
      </ul>
    </td>
    <td width="50%">
      <h3>👨‍⚕️ Telehealth Consultation</h3>
      <ul>
        <li>Intuitive appointment scheduling system</li>
        <li>Automated email notifications for healthcare providers</li>
        <li>High-definition, secure video consultations</li>
        <li>Flexible scheduling with calendar integration</li>
        <li>Follow-up appointment management</li>
      </ul>
      <img src="https://via.placeholder.com/500x300/FF5722/FFFFFF/?text=Telehealth+Consultation" width="100%">
    </td>
  </tr>
</table>

## 🛠️ Technology Stack

<div align="center">
  <img src="https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react" alt="React.js">
  <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/API-Express-000000?style=for-the-badge&logo=express" alt="Express">
  <img src="https://img.shields.io/badge/AI-Gemini_API-4285F4?style=for-the-badge&logo=google" alt="Gemini API">
  <img src="https://img.shields.io/badge/Video-WebRTC-333333?style=for-the-badge&logo=webrtc" alt="WebRTC">
  <img src="https://img.shields.io/badge/Email-SMTP-4A154B?style=for-the-badge" alt="SMTP">
</div>

## ⚡ Installation

### Prerequisites
- Node.js (v16.0 or later)
- npm (v8.0 or later)
- Google Cloud account with Gemini API access
- SMTP server access for email notifications

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/health-is-wealth.git
   cd health-is-wealth
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your API keys and configuration:
   ```
   # API Keys
   GEMINI_API_KEY=your_gemini_api_key
   
   # Email Configuration
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password
   
   # Application Settings
   PORT=3000
   NODE_ENV=development
   ```

4. **Starting the application (requires 4 separate terminals)**

   **Terminal 1** - Main Website:
   ```bash
   npm run dev
   ```

   **Terminal 2** - Clone Website:
   ```bash
   cd project
   npm run dev
   ```

   **Terminal 3** - Gemini LLM Backend:
   ```bash
   uvicorn main:app --reload
   ```

   **Terminal 4** - Email Integration Backend:
   ```bash
   python app.py
   ```

5. **Access the application** by opening your browser and navigating to the URL shown in Terminal 1 after the main website starts up

> ⚠️ **Important**: All four services must be running simultaneously for the application to function properly.

## 🏗️ Architecture

<div align="center">
  <img src="https://via.placeholder.com/900x500/00BCD4/FFFFFF/?text=System+Architecture" alt="System Architecture" width="80%">
</div>

### System Components

1. **Frontend Layer**
   - React.js single-page application
   - Tailwind CSS for responsive UI
   - WebRTC integration for video calling
   - State management with Redux

2. **Backend Services**
   - Node.js/Express REST API for main website
   - FastAPI (uvicorn) for Gemini LLM integration
   - Python Flask for email notification service
   - Multi-service architecture requiring parallel execution

3. **AI Integration Layer**
   - Gemini API connector
   - Natural language processing
   - Symptom analysis engine
   - Medical recommendation system

4. **Security Layer**
   - HIPAA-compliant data handling
   - End-to-end encryption for video calls
   - Secure credential storage
   - Privacy-focused design

## 📊 User Flow

1. **Symptom Analysis**
   - User enters health symptoms in natural language
   - AI processes and analyzes the input
   - System provides preliminary insights
   - Platform suggests relevant medical specialists

2. **Doctor Consultation**
   - User selects appointment type and time slot
   - System sends notification to available healthcare providers
   - Doctor receives and confirms appointment
   - Secure video consultation takes place on platform
   - Follow-up appointment scheduling if needed

## ⚠️ Current Limitations

The database integration for healthcare provider networks is currently under development. We are actively working with medical professionals to establish proper protocols while addressing legal requirements for telemedicine services.

## 👨‍💻 Contributing

We welcome contributions to Health is Wealth! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For major changes, please open an issue first to discuss what you would like to change.

See our [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 👥 Developers

This project is created and maintained by:

- **Hanish** - *Lead Developer* - [GitHub Profile](https://github.com/hanish)
- **Shashank** - *Lead Developer* - [GitHub Profile](https://github.com/shashank)

We're passionate about revolutionizing healthcare access through technology!

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌍 Impact

Health is Wealth aims to transform healthcare accessibility by:

- Reducing barriers to medical consultation
- Providing preliminary health insights through AI
- Connecting patients with appropriate specialists
- Enabling remote healthcare in underserved areas
- Empowering users with health knowledge

## 📞 Contact & Support

<div align="center">
  <a href="mailto:contact@healthiswealth.com"><img src="https://img.shields.io/badge/Email-contact%40healthiswealth.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>
  <a href="https://twitter.com/healthiswealth"><img src="https://img.shields.io/badge/Twitter-%40healthiswealth-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
  <a href="https://discord.gg/healthiswealth"><img src="https://img.shields.io/badge/Discord-Join%20our%20server-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
</div>

---

<div align="center">
  <img src="https://via.placeholder.com/150/4CAF50/FFFFFF/?text=H%2BW" alt="Health is Wealth Icon" width="80px">
  <p><b>Health is Wealth</b> - Revolutionizing healthcare through technology</p>
  <p>Made with ❤️ by <a href="https://github.com/hanish9193">Hanish</a> and <a href="https://github.com/shashankAcharya3">Shashank</a></p>
</div>
