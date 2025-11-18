"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Aly's AI assistant. Ask me anything about his experience, skills, or projects! 👋",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base with responses
  const knowledgeBase = {
    skills: {
      keywords: ["skills", "tech stack", "technologies", "languages", "frameworks", "what do you know", "what can you do"],
      responses: [
        "Aly specializes in full-stack development with React, TypeScript, and Node.js. He's also experienced with PostgreSQL, AWS (S3, EC2), and the Plaid API for fintech integrations.",
        "His main tech stack includes: React, Next.js, TypeScript, Node.js, Express, PostgreSQL, SQLite, AWS, and various APIs. He's proficient in both frontend and backend development!"
      ]
    },
    experience: {
      keywords: ["experience", "work", "job", "employment", "co-op", "p&p optica", "optica", "teaching"],
      responses: [
        "Aly is currently a Software Developer Co-op at P&P Optica (May 2025 - Present) in Waterloo, ON. He's building admin dashboards with React, TypeScript, and PostgreSQL, and has optimized CSV processing to handle 50MB files in minutes instead of days!",
        "At P&P Optica, he's achieved some impressive results: 75% faster deployments (2 hours → 30 minutes) and 30% workflow improvements. He also works with AWS daily and has automated deployment scripts across 20+ facilities.",
        "He also worked as a Teaching Assistant at University of Guelph (Sep - Dec 2024), where he graded for 250+ students and ran weekly office hours."
      ]
    },
    projects: {
      keywords: ["projects", "portfolio", "pocketchange", "fitness app", "3d", "investment", "what did you build", "what have you made"],
      responses: [
        "Aly has some cool projects! 'PocketChange' is a financial tracking app with Plaid integration for bank automation. His '3D Fitness App' maps 50+ muscle groups to exercises with interactive 3D visuals. He also built an Investment Portfolio Manager in Java.",
        "Check out PocketChange - it's a full-stack FinTech app with real-time investment tracking and goal-based savings. You can try it live on his portfolio!",
        "His 3D Fitness App is really unique - click on any muscle and see recommended exercises. Perfect for fitness enthusiasts who want to learn anatomy while working out!"
      ]
    },
    education: {
      keywords: ["education", "school", "university", "degree", "student", "study", "guelph"],
      responses: [
        "Aly is studying Computer Science at the University of Guelph. He's currently seeking Summer 2026 co-op opportunities!",
        "He's a Computer Science student at University of Guelph, balancing coursework with real-world development experience at P&P Optica."
      ]
    },
    availability: {
      keywords: ["hire", "available", "hiring", "co-op", "summer", "2026", "opportunity", "work with"],
      responses: [
        "Great timing! Aly is available for Summer 2026 Co-op positions. You can reach him at asibak@uoguelph.ca or connect on LinkedIn.",
        "Yes! He's actively seeking Summer 2026 co-op opportunities. Feel free to reach out via email (asibak@uoguelph.ca) or check out his projects on GitHub!"
      ]
    },
    contact: {
      keywords: ["contact", "email", "reach", "linkedin", "github", "connect", "get in touch"],
      responses: [
        "You can reach Aly at:\n📧 Email: asibak@uoguelph.ca\n💼 LinkedIn: linkedin.com/in/aly-sibak-721b85252\n💻 GitHub: github.com/alysibak",
        "Best ways to connect: email him at asibak@uoguelph.ca or connect on LinkedIn. He's also active on GitHub where you can see his code!"
      ]
    },
    location: {
      keywords: ["location", "where", "based", "live", "city"],
      responses: [
        "Aly is based in Waterloo, Ontario, working at P&P Optica. He studies at University of Guelph.",
      ]
    },
    achievements: {
      keywords: ["achievements", "accomplishments", "proud", "best work", "results", "impact"],
      responses: [
        "Some of Aly's standout achievements: 75% faster deployment times at P&P Optica, processing 50MB CSV files in minutes (used to take days!), and 30% workflow improvements through smart automation.",
        "He's made a real impact at P&P Optica - automating deployments across 20+ facilities and building systems that serve users globally. His work directly improves efficiency for teams worldwide!"
      ]
    },
    personality: {
      keywords: ["personality", "hobbies", "interests", "fun", "about aly", "who is"],
      responses: [
        "Aly gets excited about turning complex problems into simple, elegant solutions. When he's not coding, you'll find him working out (using his own 3D fitness app to map muscle groups!) or exploring new technologies.",
        "He's passionate about building things that make a difference. Whether it's a financial tracker or a fitness app, Aly focuses on creating meaningful impact through code."
      ]
    },
    default: {
      keywords: [],
      responses: [
        "I'm not sure about that, but I can tell you about Aly's skills, experience, projects, or how to contact him. What would you like to know?",
        "Hmm, I don't have information about that. Try asking about his tech stack, work experience at P&P Optica, or his cool projects like PocketChange!",
        "I can help you learn about Aly's experience, skills, projects, or availability. What interests you most?"
      ]
    }
  };

  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Check each category
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (category === "default") continue;

      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        const responses = data.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }

    // Default response
    const defaultResponses = knowledgeBase.default.responses;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      text: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate typing
    setIsTyping(true);

    setTimeout(() => {
      const response = findResponse(inputValue);
      const botMessage = {
        type: "bot",
        text: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 1000); // Random delay between 800-1800ms
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your projects",
    "Are you available for hire?",
    "What's your experience?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-2xl hover:shadow-blue-500/50 smooth-transition hover:scale-110 flex items-center justify-center group"
          aria-label="Open AI Chat"
        >
          <FaRobot className="text-2xl md:text-3xl group-hover:rotate-12 smooth-transition" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] md:w-96 h-[600px] max-h-[calc(100vh-3rem)] glass-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <FaRobot className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Aly's AI Assistant</h3>
                <p className="text-white/80 text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white smooth-transition p-2"
              aria-label="Close chat"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.type === "user"
                      ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                      : "bg-slate-800/50 text-white/90 border border-white/10"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 border border-white/10 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-white/50 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/30 border border-white/10 text-white/70 hover:text-white hover:bg-slate-800/50 smooth-transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-800/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-400/50 smooth-transition"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
