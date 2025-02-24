'use client'

import { useState } from 'react';
import { jsPDF } from 'jspdf';

const QuestionGenerator = () => {
  const [subject, setSubject] = useState('Physics');
  const [difficulty, setDifficulty] = useState('Easy');
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateQuestions = async (e) => {
    e.preventDefault();
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
              text: `Generate 10 unique IIT-JEE ${subject} questions.
                     Difficulty Level: ${difficulty}
                     Important Instructions:
                     1. Generate only numbered questions (1-10)
                     2. Questions should be precise and clear
                     3. Questions should match the ${difficulty} difficulty level
                     4. Focus on important IIT-JEE topics in ${subject}
                     5. Each question should be in a new line starting with its number
                     Format the output as a numbered list only.`
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
      const generatedQuestions = data.candidates?.[0]?.content?.parts?.[0]?.text || "Failed to generate questions. Please try again.";
      
      // Split the response into an array of questions
      const questionArray = generatedQuestions.split('\n').filter(q => q.trim());
      setQuestions(questionArray);
    } catch (error) {
      console.error('Error:', error);
      setQuestions(['Error generating questions. Please try again.']);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(`IIT-JEE ${subject} Questions (${difficulty})`, 20, 20);
    
    // Add questions
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    let yPosition = 40;
    
    questions.forEach((question, index) => {
      const lines = doc.splitTextToSize(question, 170);
      doc.text(lines, 20, yPosition);
      yPosition += 10 * lines.length;
      
      // Add new page if needed
      if (yPosition > 280) {
        doc.addPage();
        yPosition = 20;
      }
    });
    
    // Save PDF
    doc.save(`IIT-JEE-${subject}-${difficulty}-Questions.pdf`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#f1f1ff] to-[#fff1f9]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              IIT-JEE Question{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                Generator
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Generate custom practice questions based on subject and difficulty
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
            <form onSubmit={handleGenerateQuestions} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Subject Selection */}
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Mathematics">Mathematics</option>
                  </select>
                </div>

                {/* Difficulty Selection */}
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>

              {/* Generate Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? 'Generating...' : 'Generate Questions'}
                </button>
              </div>
            </form>
          </div>

          {/* Questions Display */}
          {questions.length > 0 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Generated Questions
                </h3>
                <button
                  onClick={handleExportPDF}
                  className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Export to PDF
                </button>
              </div>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <p className="text-gray-800">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700 shadow-sm">
              🎯 Custom Difficulty Levels
            </div>
            <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700 shadow-sm">
              📝 Export to PDF
            </div>
            <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700 shadow-sm">
              🚀 Instant Generation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionGenerator; 