<div align="center">

# 🚀 CommuteCast

### AI-Powered News Summarizer for Your Daily Commute

[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini_API-1.40.0-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

*Convert lengthy news articles into crystal-clear, structured summaries in seconds*

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Screenshots](#-screenshots)

</div>

---

## 📖 About

**CommuteCast** is a modern, lightweight web application that transforms long-form news articles into concise, actionable summaries. Built with React, TypeScript, and powered by Google's Gemini AI, it delivers professional-grade summaries optimized for quick consumption during your daily commute.

Whether you're a busy professional, student, or news enthusiast, CommuteCast helps you stay informed without the time commitment.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 Smart Summarization
- **Instant AI Processing** via Google Gemini Flash Pro
- **Customizable Length** - Short, Medium, or Long summaries
- **Tone Selection** - Professional, Casual, or Enthusiastic
- **Structured Output** - Clear bullet points for easy scanning

</td>
<td width="50%">

### 💎 User Experience
- **Modern Glass-Morphism UI** with smooth animations
- **Real-time Briefing History** with timestamps
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Zero Config** - Just paste and generate
- **Clear All** - One-click history management

</td>
</tr>
</table>

---

## 🛠 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 19.2.4 |
| **TypeScript** | Type Safety | 5.8.2 |
| **Vite** | Build Tool & Dev Server | 6.2.0 |
| **Google Gemini API** | AI Summarization Engine | 1.40.0 |
| **Tailwind CSS** | Styling via CDN | 3.x |
| **Inter Font** | Typography | Latest |

### Architecture Highlights

- **Component-Based Architecture** - Modular React components
- **Type-Safe Development** - Full TypeScript implementation
- **Environment Variables** - Secure API key management
- **Modern ES2022** - Latest JavaScript features
- **Fast Refresh** - Instant feedback during development

---

## 📁 Project Structure

```
commutecast/
├── App.tsx                    # Main application component
├── index.tsx                  # React entry point
├── index.html                 # HTML template
├── types.ts                   # TypeScript type definitions
├── components/
│   ├── ArticleInput.tsx       # Input form component
│   └── BriefingCard.tsx       # Summary display component
├── services/
│   └── geminiService.ts       # Google Gemini API integration
├── package.json               # Dependencies
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
└── .env.local                # API key (not committed)
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**
- **Google Gemini API Key** ([Get one free](https://ai.google.dev/))

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarshaBR66/CommuteCast.git
   cd CommuteCast/commutecast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   
   Create a `.env.local` file in the root directory:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```
   
   > 🔑 **Get your API key:** Visit [Google AI Studio](https://ai.google.dev/) → API Keys → Create API Key

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🎮 Usage

### Basic Workflow

1. **Paste Article** - Copy any long news article into the input field
2. **Select Preferences** - Choose summary length (Short/Medium/Long) and tone
3. **Generate** - Click the generate button
4. **Read Summary** - Get instant, structured bullet points
5. **Review History** - All summaries saved in "Your Fresh Briefings"

### Summary Length Options

| Length | Description | Best For |
|--------|-------------|----------|
| **Short** | Quick overview with key points | Headlines & rapid updates |
| **Medium** | Balanced detail and brevity | Daily news consumption |
| **Long** | Comprehensive with context | In-depth understanding |

### Tone Options

- **Professional** - Formal, business-appropriate language
- **Casual** - Conversational, easy-to-read style
- **Enthusiastic** - Engaging, energetic delivery

---

## ⚙️ Configuration

### Environment Variables

The app uses Vite's environment variable system:

```typescript
// vite.config.ts
define: {
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

### API Integration

The Gemini service is configured in `services/geminiService.ts`:
- **Model:** Gemini Flash Pro
- **Latency:** ~1.2s average response time
- **Error Handling:** Built-in retry logic and user feedback

---

## 🏗️ Build & Deploy

### Production Build

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

- **Vercel** - Zero-config deployment for Vite apps
- **Netlify** - Drag-and-drop or Git integration
- **GitHub Pages** - Free static hosting
- **Google Cloud Run** - Containerized deployment

> ⚠️ **Remember:** Set `GEMINI_API_KEY` as an environment variable in your hosting platform

---

## 📸 Screenshots

<div align="center">

### Application Interface

<table>
<tr>
<td width="50%">
<img src="https://github.com/user-attachments/assets/b01fab9b-bfcd-466a-98b8-e950294d1917" alt="CommuteCast Home" width="100%"/>
<p align="center"><em>Clean input interface with glass-morphism design</em></p>
</td>
<td width="50%">
<img src="https://github.com/user-attachments/assets/eb67dd50-55ab-436b-9b61-cac584929d4f" alt="Summary Options" width="100%"/>
<p align="center"><em>Customizable length and tone settings</em></p>
</td>
</tr>
<tr>
<td width="50%">
<img src="https://github.com/user-attachments/assets/2fb4b78c-e954-47bb-85cc-10ab873ff235" alt="Generated Summary" width="100%"/>
<p align="center"><em>Structured AI-generated summary</em></p>
</td>
<td width="50%">
<img src="https://github.com/user-attachments/assets/8dd31916-a3af-4039-b359-76633eab9cf0" alt="Briefing History" width="100%"/>
<p align="center"><em>Timestamped briefing history</em></p>
</td>
</tr>
</table>

</div>

---

## 🎯 Use Cases

| User Profile | Use Case |
|--------------|----------|
| 📚 **Students** | Summarize research articles and current affairs |
| 💼 **Professionals** | Quick morning news briefings before meetings |
| 🚗 **Commuters** | Digest articles during transit |
| 📝 **Content Creators** | Research and content ideation |
| 🎓 **Educators** | Prepare discussion materials efficiently |
| 📰 **News Enthusiasts** | Stay updated across multiple topics |

---

## 🔮 Future Enhancements

- [ ] 🎙️ **Text-to-Speech** - Listen to summaries while driving
- [ ] 📄 **PDF Export** - Download summaries as formatted documents
- [ ] 🌙 **Dark Mode** - Eye-friendly night reading
- [ ] 🌍 **Multi-language Support** - Summarize in different languages
- [ ] 🔗 **URL Auto-fetch** - Paste link instead of full text
- [ ] 💾 **Cloud Sync** - Save summaries across devices
- [ ] 📊 **Analytics Dashboard** - Track reading time saved
- [ ] 🎨 **Custom Themes** - Personalize UI appearance
- [ ] 🔔 **Browser Extension** - Summarize from any webpage
- [ ] 📱 **Mobile App** - Native iOS/Android versions

---

## 🐛 Troubleshooting

### Common Issues

**API Key Error**
```
❌ Failed to generate summary. Please check your API key or input.
```
**Solution:** Verify your `GEMINI_API_KEY` in `.env.local` is correct and has billing enabled.

**Port Already in Use**
```
❌ Port 3000 is already in use
```
**Solution:** Change port in `vite.config.ts` or kill the process using port 3000.

**Dependencies Not Installing**
```
❌ npm install fails
```
**Solution:** Delete `node_modules` and `package-lock.json`, then run `npm install` again.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing TypeScript patterns
- Maintain component modularity
- Add types for all new features
- Test across different browsers
- Update documentation for new features

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Google AI Studio** - For the powerful Gemini API
- **Vercel** - For Vite and React ecosystem
- **Tailwind CSS** - For the utility-first CSS framework
- **Inter Font** - For beautiful typography

---

## 👨‍💻 Author

**Harsha BR**

Developed as a practical demonstration of integrating Google's Gemini AI into a modern React application. This project showcases how generative AI can meaningfully improve daily information consumption workflows.

---

<div align="center">

### ⭐ Show Your Support

If CommuteCast helped you save time, give it a star!

[![GitHub stars](https://img.shields.io/github/stars/HarshaBR66/CommuteCast?style=social)](https://github.com/HarshaBR66/CommuteCast)

**[⭐ Star this repo](https://github.com/HarshaBR66/CommuteCast)** • **[🐛 Report Bug](https://github.com/HarshaBR66/CommuteCast/issues)** • **[💡 Request Feature](https://github.com/HarshaBR66/CommuteCast/issues)**

---

**View in AI Studio:** [Launch App](https://ai.studio/apps/drive/11TvBtlHyUoFd1SkHyx3Dlxe9G-L8N1oR)

Made with ❤️ and ☕ | Powered by Google Gemini Flash Pro

**EST. 2026 • COMMUTECAST**

</div>
