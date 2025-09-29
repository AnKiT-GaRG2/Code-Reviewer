<div align="center">

# 🔍⚡ AI Code Reviewer

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![Google AI](https://img.shields.io/badge/Google-Gemini%202.0-orange.svg)](https://ai.google.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)

*An intelligent AI-powered code review platform that provides expert-level feedback using Google's Gemini 2.0 Flash model*

![Code Reviewer Banner](https://via.placeholder.com/800x200/667eea/ffffff?text=🔍+AI+Code+Reviewer+⚡)

</div>

---

## 📖 **Table of Contents**

- [🎯 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [📋 Prerequisites](#-prerequisites)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Configuration](#️-configuration)
- [💻 Usage Guide](#-usage-guide)
- [🔧 API Documentation](#-api-documentation)
- [📁 Project Structure](#-project-structure)
- [🎨 UI Components](#-ui-components)
- [🔮 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 **Project Overview**

**AI Code Reviewer** is a modern web application that leverages **Google's Gemini 2.0 Flash** AI model to provide comprehensive code reviews. Acting as a senior developer with 7+ years of experience, it analyzes your code for:

- 🎯 **Code Quality & Best Practices**
- 🚀 **Performance Optimization**
- 🔒 **Security Vulnerabilities**
- 🧹 **Code Maintainability**
- 📏 **Industry Standards Compliance**

### 🌟 **Why Choose AI Code Reviewer?**

| Benefit | Description |
|---------|-------------|
| ⚡ **Instant Reviews** | Get expert feedback in seconds, not hours |
| 🎓 **Learning Tool** | Improve your coding skills with detailed explanations |
| 🔧 **Best Practices** | Learn industry-standard coding practices |
| 🎯 **Precise Feedback** | Specific, actionable suggestions for improvement |
| 💰 **Cost-Effective** | Free alternative to expensive code review services |

---

## ✨ **Key Features**

<div align="center">

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Powered Analysis** | Advanced code review using Google Gemini 2.0 Flash |
| 💻 **Real-time Code Editor** | Syntax highlighting with Prism.js integration |
| 📝 **Markdown Reviews** | Beautiful, formatted review output with code examples |
| 🔄 **Instant Feedback** | Get reviews with a single click |
| 🎨 **Modern UI** | Clean, responsive interface built with React |
| 🔒 **Secure API** | Protected endpoints with CORS configuration |
| 📱 **Responsive Design** | Works seamlessly on desktop and mobile |
| ⚡ **Fast Performance** | Optimized with Vite for lightning-fast development |

</div>

---

## 🛠️ **Tech Stack**

### **Frontend**
<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | UI Framework | 19.0.0 |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | Build Tool | Latest |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Programming Language | ES6+ |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) | HTTP Client | 1.7.9 |
| ![Prism](https://img.shields.io/badge/Prism.js-000000?style=for-the-badge&logo=prismjs&logoColor=white) | Syntax Highlighting | 1.29.0 |

</div>

### **Backend**
<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | Runtime Environment | Latest |
| ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white) | Web Framework | 4.21.2 |
| ![Google AI](https://img.shields.io/badge/Google%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white) | AI Integration | Gemini 2.0 |
| ![CORS](https://img.shields.io/badge/CORS-000000?style=for-the-badge&logo=cors&logoColor=white) | Cross-Origin Resource Sharing | 2.8.5 |

</div>

---

## 🏗️ **Architecture**

```
Frontend (React + Vite)
       ↓
   HTTP Request
       ↓
Backend (Express.js)
       ↓
   Google Gemini API
       ↓
   AI Code Analysis
       ↓
Formatted Review Response
```

---

## 📋 **Prerequisites**

### 🔧 **System Requirements**

- **Node.js**: Version 16.0 or higher
- **npm**: Version 7.0 or higher (or yarn)
- **Google AI API Key**: Required for Gemini integration

### 🔑 **Required API Keys**

- **Google Gemini API Key**: Get it from [Google AI Studio](https://makersuite.google.com/)

---

## 🚀 **Quick Start**

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/your-username/code-reviewer.git
cd code-reviewer
```

### 2️⃣ **Backend Setup**

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
echo "GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here" > .env

# Start the backend server
npm start
```

### 3️⃣ **Frontend Setup**

```bash
# Open new terminal and navigate to frontend
cd frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_BACKEND_URL=http://localhost:3000" > .env

# Start the development server
npm run dev
```

### 4️⃣ **Access the Application**

Open your browser and navigate to:
- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:3000`

---

## ⚙️ **Configuration**

### 🔧 **Backend Configuration (.env)**

```env
# Google AI Configuration
GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here

# Server Configuration (optional)
PORT=3000
NODE_ENV=development
```

### 🎨 **Frontend Configuration (.env)**

```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:3000

# Development Configuration (optional)
VITE_DEV_MODE=true
```

### 🌐 **CORS Configuration**

The backend is configured to accept requests from:
- `https://code-reviewer-frontend-mu.vercel.app` (Production)
- `localhost` (Development)

To modify allowed origins, update the `allowedOrigins` array in `backend/src/app.js`.

---

## 💻 **Usage Guide**

### 🔥 **Getting Started**

1. **📝 Write Your Code**: Use the built-in code editor on the left side
2. **🔍 Click Review**: Hit the "Review" button to analyze your code
3. **📊 Get Feedback**: View comprehensive AI-generated review on the right

### 💡 **Example Code Review**

**Input Code:**
```javascript
function fetchData() {
    let data = fetch('/api/data').then(response => response.json());
    return data;
}
```

**AI Review Output:**
```markdown
❌ **Issues Found:**
• Missing error handling for failed API calls
• Incorrect async/await usage
• No response status validation

✅ **Recommended Fix:**
```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch data:", error);
        return null;
    }
}
```

💡 **Improvements:**
• ✔ Proper async/await implementation
• ✔ Comprehensive error handling
• ✔ Status code validation
```

---

## 🔧 **API Documentation**

### 📡 **Endpoints**

#### **POST** `/ai/get-review`

Get AI-powered code review for submitted code.

**Request Body:**
```json
{
    "code": "your_code_here"
}
```

**Response:**
```json
{
    "review": "markdown_formatted_review"
}
```

**Example Usage:**
```javascript
const response = await fetch('/ai/get-review', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        code: 'function example() { return "Hello World"; }'
    })
});

const review = await response.text();
```

---

## 📁 **Project Structure**

```
📂 code-reviewer/
├── 📂 backend/
│   ├── 📄 server.js                 # 🚀 Main server entry point
│   ├── 📄 package.json              # 📦 Backend dependencies
│   └── 📂 src/
│       ├── 📄 app.js                # ⚙️ Express app configuration
│       ├── 📂 controllers/
│       │   └── 📄 ai.controller.js  # 🎮 AI review controller
│       ├── 📂 routes/
│       │   └── 📄 ai.routes.js      # 🛣️ API routes definition
│       └── 📂 services/
│           └── 📄 ai.services.js    # 🤖 Google AI integration
│
├── 📂 frontend/
│   ├── 📄 index.html               # 🌐 Main HTML template
│   ├── 📄 package.json             # 📦 Frontend dependencies
│   ├── 📄 vite.config.js           # ⚡ Vite configuration
│   └── 📂 src/
│       ├── 📄 main.jsx             # 🎯 Application entry point
│       ├── 📄 App.jsx              # 🏠 Main App component
│       ├── 📄 App.css              # 🎨 Application styles
│       ├── 📄 index.css            # 🎨 Global styles
│       └── 📂 assets/
│           └── 📄 react.svg        # 🖼️ React logo
│
├── 📄 README.md                    # 📖 Project documentation
└── 📄 .gitignore                   # 🚫 Git ignore rules
```

---

## 🎨 **UI Components**

### 🖥️ **Main Interface**

The application features a **split-screen layout**:

| Section | Description | Technologies |
|---------|-------------|--------------|
| **Left Panel** | Code Editor with syntax highlighting | `react-simple-code-editor` + `prismjs` |
| **Right Panel** | AI review output with markdown rendering | `react-markdown` + `rehype-highlight` |
| **Review Button** | Triggers AI analysis | Custom React component |

### 🎯 **Key Features**

- **📝 Syntax Highlighting**: JavaScript code highlighting with Prism.js
- **🎨 Dark Theme**: Professional dark theme for better coding experience
- **📱 Responsive**: Adapts to different screen sizes
- **⚡ Real-time**: Instant feedback without page reloads

---

## 🔮 **Future Enhancements**

### 🎯 **Planned Features**

- [ ] 🌐 **Multi-language Support**: Python, Java, C++, TypeScript
- [ ] 💾 **Code History**: Save and manage previous reviews
- [ ] 👥 **User Authentication**: Personal dashboards and preferences
- [ ] 📊 **Analytics Dashboard**: Code quality metrics and trends
- [ ] 🔗 **GitHub Integration**: Direct repository analysis
- [ ] 🎨 **Custom Themes**: Multiple UI themes and color schemes
- [ ] 📱 **Mobile App**: Native mobile applications
- [ ] 🔧 **Custom Rules**: User-defined code review criteria
- [ ] 📈 **Batch Processing**: Analyze multiple files simultaneously
- [ ] 🤝 **Team Collaboration**: Share reviews and collaborate on improvements

### 🚀 **Technical Improvements**

- [ ] ⚡ **Performance Optimization**: Caching and response optimization
- [ ] 🧪 **Testing Suite**: Comprehensive unit and integration tests
- [ ] 🐳 **Docker Support**: Containerized deployment
- [ ] ☁️ **Cloud Deployment**: AWS/GCP deployment guides
- [ ] 📊 **Monitoring**: Application performance monitoring
- [ ] 🔒 **Enhanced Security**: Advanced security measures

---

## 🤝 **Contributing**

We welcome contributions from the community! Here's how you can help:

### 🌟 **Ways to Contribute**

1. **🐛 Bug Reports**: Found a bug? [Open an issue](../../issues/new)
2. **💡 Feature Requests**: Have an idea? [Suggest a feature](../../issues/new)
3. **🔧 Code Contributions**: Submit pull requests
4. **📝 Documentation**: Improve our documentation
5. **🧪 Testing**: Help us add test coverage

### 📝 **Development Workflow**

```bash
# Fork the repository
git clone https://github.com/your-username/code-reviewer.git

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
git add .
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Create a Pull Request
```

### 🔧 **Development Setup**

```bash
# Install all dependencies
npm run install-all

# Start both frontend and backend in development mode
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Feel free to use, modify, and distribute! 🎉
```

---

<div align="center">

### 🌟 **Star this repository if you found it helpful!**

![Footer](https://via.placeholder.com/800x100/667eea/ffffff?text=Happy+Coding!+🚀)

**Made with ❤️ by the Code Review Team**

---

*💡 Have questions? Found a bug? Want to contribute? Feel free to reach out!*

[![GitHub Issues](https://img.shields.io/github/issues/your-username/code-reviewer.svg)](../../issues)
[![GitHub Stars](https://img.shields.io/github/stars/your-username/code-reviewer.svg?style=social&label=Star)](../../stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/your-username/code-reviewer.svg?style=social&label=Fork)](../../network)

### 🔗 **Quick Links**

[🚀 Demo](https://code-reviewer-frontend-mu.vercel.app) • [📚 Documentation](../../wiki) • [🐛 Report Bug](../../issues/new) • [💡 Request Feature](../../issues/new)

</div>
