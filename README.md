# 🎤 VoiceProj - Voice-Activated Project Management Tool

<div align="center">

  
  **The future of project management is here - just speak your mind!**
  
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
</div>

## 🚀 What is VoiceProj?

VoiceProj revolutionizes project management by bringing **natural voice commands** to your workflow. No more clicking through endless menus or typing repetitive commands - just speak naturally and watch your projects come to life!

### ✨ Key Features

- 🎙️ **Natural Voice Commands** - Create tasks, manage projects, and navigate with your voice
- 🎨 **Neo-Brutalism Design** - Bold, accessible, and visually striking interface
- 👥 **Team Collaboration** - Share projects and collaborate with team members
- 🌍 **Multi-language Support** - Works in 25+ languages
- 📱 **Responsive Design** - Perfect on desktop, tablet, and mobile
- 🔒 **Secure & Private** - Your data stays in your browser
- ⚡ **Lightning Fast** - Built with modern web technologies
- 🎯 **Accessibility First** - Designed for users of all abilities

## 🎬 Demo

Try these voice commands:
- *"Create task: Design new homepage"*
- *"Show me all projects"*
- *"Mark task complete"*
- *"New project: Mobile App Development"*

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Neo-Brutalism design
- **Build Tool**: Vite
- **Voice Recognition**: Web Speech API
- **Speech Synthesis**: Web Speech Synthesis API
- **Icons**: Lucide React
- **Storage**: LocalStorage (client-side)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mobeen-asghar/VoiceProj.git
   cd VoiceProj
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

5. **Enable microphone permissions**
   Allow microphone access when prompted to use voice features

## 📖 Usage Guide

### Getting Started

1. **Sign Up**: Create your account on the landing page
2. **Create a Project**: Click "NEW PROJECT" or say *"Create project [name]"*
3. **Add Tasks**: Use "NEW TASK" button or voice command *"Create task [description]"*
4. **Voice Control**: Click the microphone icon and start speaking!

### Voice Commands

| Command | Action |
|---------|--------|
| `"Create task [name]"` | Creates a new task |
| `"New project [name]"` | Creates a new project |
| `"Show projects"` | Lists all projects |
| `"Mark task complete"` | Completes the first pending task |
| `"Open settings"` | Opens the settings page |
| `"Search [query]"` | Opens search with query |

### Project Structure

```
src/
├── components/          # React components
│   ├── LandingPage.tsx     # Marketing landing page
│   ├── VoiceInterface.tsx  # Voice recognition UI
│   ├── TaskCard.tsx        # Individual task display
│   ├── ProjectCard.tsx     # Project display component
│   ├── Dashboard.tsx       # Main dashboard
│   ├── Header.tsx          # Navigation header
│   ├── SettingsPage.tsx    # User settings
│   └── ...
├── contexts/           # React contexts
│   └── AuthContext.tsx    # Authentication state
├── hooks/              # Custom React hooks
│   ├── useVoiceRecognition.ts
│   └── useSpeechSynthesis.ts
├── services/           # Business logic
│   ├── authService.ts     # Authentication
│   └── dataService.ts     # Data management
├── types/              # TypeScript definitions
└── styles/             # CSS and styling
```

## 🎨 Design Philosophy

VoiceProj embraces **Neo-Brutalism** design principles:

- **Bold Typography**: Heavy, impactful fonts that demand attention
- **High Contrast**: Black borders and vibrant colors for maximum accessibility
- **Geometric Shapes**: Clean lines and sharp edges
- **Playful Interactions**: Hover effects and micro-animations
- **Accessibility First**: High contrast ratios and keyboard navigation

## 🌐 Browser Support

VoiceProj works best in modern browsers with Web Speech API support:

- ✅ Chrome 25+
- ✅ Edge 79+
- ✅ Safari 14.1+
- ✅ Firefox 49+ (limited support)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_NAME=VoiceProj
VITE_APP_VERSION=1.0.0
```

### Voice Settings

Customize voice recognition in `src/hooks/useVoiceRecognition.ts`:

```typescript
recognition.lang = 'en-US'; // Change language
recognition.continuous = true; // Continuous listening
recognition.interimResults = true; // Show interim results
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** (if applicable)
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add JSDoc comments for new functions
- Test voice commands thoroughly
- Ensure accessibility compliance

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🐛 Known Issues

- Voice recognition may not work in noisy environments
- Some browsers require HTTPS for microphone access
- Speech synthesis voices vary by operating system

## 🗺️ Roadmap

- [ ] **Real-time Collaboration** - Live project sharing
- [ ] **Mobile App** - Native iOS and Android apps
- [ ] **AI Assistant** - Smart task suggestions
- [ ] **Integrations** - Slack, Trello, GitHub connections
- [ ] **Advanced Analytics** - Project insights and reporting
- [ ] **Offline Mode** - Work without internet connection

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Web Speech API** - For making voice recognition possible
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide React** - For the beautiful icons
- **Pexels** - For the stock photography

## 📞 Support

Having issues? We're here to help!

- 📧 **Email**: support@voiceproj.com
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/mobeen-asghar/VoiceProj/issues)

## 🌟 Show Your Support

If you find VoiceProj helpful, please consider:

- ⭐ **Starring** this repository
- 🐦 **Sharing** on social media
- 🤝 **Contributing** to the project
- 💝 **Sponsoring** development

---

<div align="center">
  <strong>Made with ❤️ and 🎤 by the VoiceProj Team</strong>
  
  <br><br>
  
  **Ready to speak your projects into existence?**
  
  [Get Started](https://voiceproj.netlify.app/)
</div>