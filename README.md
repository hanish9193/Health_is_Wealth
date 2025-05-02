
# Health is Wealth - AI-Powered Symptom Checker

![Health is Wealth](public/lovable-uploads/c808a9f5-1247-4c90-b078-8686326fc23a.png)

## Project Overview

Health is Wealth is a modern, futuristic web application that uses artificial intelligence to help users identify potential health issues based on their symptoms. The application features a sleek glassmorphic UI with interactive 3D models and a responsive design that works on all devices.

## Features

- **AI-Powered Symptom Analysis**: Describe your symptoms and get intelligent insights
- **Interactive 3D Brain Model**: Visualize health information through an engaging 3D model
- **Telemedicine Integration**: Book video consultations with healthcare professionals
- **Personalized Health Dashboard**: Track your health history and follow-ups
- **Responsive Design**: Seamless experience across all devices

## Technology Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS with custom glassmorphic components
- **UI Components**: shadcn/ui for consistent design patterns
- **3D Visualization**: Spline for interactive 3D brain models
- **State Management**: React Query for efficient data fetching
- **Animations**: Custom animations for enhanced user experience

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```sh
git clone https://github.com/your-username/health-is-wealth.git
cd health-is-wealth
```

2. Install dependencies
```sh
npm install
# or
yarn install
```

3. Start the development server
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment

### GitHub Repository Setup

1. Create a new repository on GitHub named "health-is-wealth"
2. Initialize your local repository and connect it to GitHub:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/health-is-wealth.git
git push -u origin main
```

### Deploy to Vercel or Netlify

For quick and easy deployment:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel or Netlify
3. The site will automatically deploy and update with each push to the main branch

## Project Structure

```
src/
├── components/        # UI components
│   ├── MedicalModel.tsx  # 3D brain model visualization
│   ├── HeroSection.tsx   # Main landing section
│   ├── SymptomChecker.tsx # AI symptom analysis component
│   └── ...
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Page components
├── App.tsx            # Main application component
└── main.tsx           # Entry point
```

## Design Approach

The application uses a modern glassmorphic design approach with:
- Frosted glass containers with subtle transparency
- Soft gradient backgrounds and overlays
- Interactive 3D brain model as the centerpiece
- Subtle animations and hover effects
- Fully responsive layouts for all devices
- Accessibility considerations for all users

## Future Enhancements

- Integration with medical databases for more accurate symptom analysis
- User authentication and personalized health profiles
- Integration with wearable health devices for real-time monitoring
- Multi-language support for global accessibility
- Expanded 3D models for different body systems

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- 3D brain model provided by Spline
- Medical information is for demonstration purposes only
