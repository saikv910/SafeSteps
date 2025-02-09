import { Plus, Save } from 'lucide-react';
import React, { useState } from 'react';

const initialResponses = [
  {
    id: 1,
    category: 'FAQs',
    question: 'How do I start using SafeSteps?',
    answer: 'Simply send a message to our WhatsApp number to begin your health journey.',
  },
  {
    id: 2,
    category: 'Educational',
    question: 'What are the benefits of daily exercise?',
    answer: 'Regular exercise improves cardiovascular health, mental wellbeing, and overall fitness.',
  },
];

function ChatbotResponses() {
  const [responses, setResponses] = useState(initialResponses);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'FAQs', 'Educational'];

  const filteredResponses = selectedCategory === 'all'
    ? responses
    : responses.filter(response => response.category === selectedCategory);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Chatbot Responses</h2>
        <p className="text-gray-600">Manage automated responses and educational content.</p>
      </div>

      <div className="flex gap-4 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category
                ? 'bg-pink-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 px-4 py-2 mb-6 bg-pink-600 text-white rounded-md hover:bg-pink-700">
        <Plus size={20} />
        <span>Add New Response</span>
      </button>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredResponses.map((response) => (
          <div key={response.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-1 text-sm rounded-full bg-pink-100 text-pink-800">
                {response.category}
              </span>
              <button className="text-pink-600 hover:text-pink-800">
                <Save size={20} />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={2}
                defaultValue={response.question}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={4}
                defaultValue={response.answer}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatbotResponses;
