'use client'
import { useState, useRef, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 10); // Changed from 30 to 10 for faster typing
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  // Add instant display for long responses
  if (text.length > 500) {
    return <div className="whitespace-pre-wrap">{text}</div>;
  }

  return <div className="whitespace-pre-wrap">{displayText}</div>;
};

const Message = ({ type, content }) => (
  <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
    <div className={`max-w-[80%] rounded-2xl p-4 ${
      type === 'user' 
        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
        : 'bg-white/80 backdrop-blur-sm shadow-lg'
    }`}>
      {type === 'ai' ? (
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm flex-shrink-0">
            AI
          </div>
          <div className="flex-1 text-gray-800">
            <TypingEffect text={content} />
          </div>
        </div>
      ) : (
        <div className="text-white">{content}</div>
      )}
    </div>
  </div>
);

const AIMentor = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const API_KEY = 'AIzaSyBK5XNmFOJ6JjUdKGsJvuwFQOrUtQhr318';
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are an IIT-JEE expert mentor. Please provide a detailed explanation for this IIT-JEE related question: ${userMessage}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      // Handle the response from free Gemini model
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I couldn't generate a response. Please try again.";
      
      setMessages(prev => [...prev, { type: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: "I apologize, but I'm having trouble connecting right now. Please try again. This is using the free Gemini API which has a limit of 60 requests per minute." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#f8f1ff] to-[#fff1f9] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-violet-200/30 to-fuchsia-200/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-3xl animate-float-delayed" />
        
        {/* Floating Formulas */}
        <div className="absolute top-1/4 left-1/4 text-violet-800/40 text-2xl font-mono rotate-12 animate-float">E = mc²</div>
        <div className="absolute bottom-1/3 right-1/4 text-purple-800/40 text-2xl font-mono -rotate-12 animate-float-delayed">F = ma</div>
        <div className="absolute top-1/3 right-1/3 text-blue-800/40 text-2xl font-mono rotate-45 animate-float">∫ dx</div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            🚀 IIT JEE AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
              Mentor
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Get instant answers for Physics, Chemistry, and Math questions
          </p>
        </div>

        {/* Chat Interface */}
        <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6">
          {/* Messages Container */}
          <div 
            ref={chatContainerRef}
            className="mb-6 h-[400px] overflow-y-auto custom-scrollbar"
          >
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                Ask any IIT-JEE related question to get started!
              </div>
            ) : (
              messages.map((message, index) => (
                <Message key={index} {...message} />
              ))
            )}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm">
                      AI
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex text-gray-900 flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your IIT JEE question here..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Thinking...' : 'Ask Question'}
            </button>
          </form>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700 shadow-sm">
            ⚡ Instant Responses
          </div>
          <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700 shadow-sm">
            📚 Expert Knowledge
          </div>
          <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700 shadow-sm">
            🎯 Detailed Explanations
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMentor; 