import { FileText, Image, Plus, Video } from 'lucide-react';
import React, { useState } from 'react';

const initialContent = [
  {
    id: 1,
    title: 'Getting Started Guide',
    type: 'document',
    lastModified: '2024-03-10',
  },
  {
    id: 2,
    title: 'Exercise Tutorial',
    type: 'video',
    lastModified: '2024-03-09',
  },
  {
    id: 3,
    title: 'Healthy Diet Infographic',
    type: 'image',
    lastModified: '2024-03-08',
  },
];

function ContentManagement() {
  const [content] = useState(initialContent);
  const [selectedType, setSelectedType] = useState('all');

  const getIcon = (type) => {
    switch (type) {
      case 'document':
        return <FileText className="text-blue-600" />;
      case 'image':
        return <Image className="text-green-600" />;
      case 'video':
        return <Video className="text-red-600" />;
      default:
        return <FileText />;
    }
  };

  const filteredContent = selectedType === 'all'
    ? content
    : content.filter(item => item.type === selectedType);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Content Management</h2>
        <p className="text-gray-600">Manage educational content and resources.</p>
      </div>

      <div className="flex gap-4 mb-6">
        {['all', 'document', 'image', 'video'].map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-md ${
              selectedType === type
                ? 'bg-pink-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 px-4 py-2 mb-6 bg-pink-600 text-white rounded-md hover:bg-pink-700">
        <Plus size={20} />
        <span>Upload Content</span>
      </button>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredContent.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              {getIcon(item.type)}
              <h3 className="font-medium text-gray-800">{item.title}</h3>
            </div>
            <div className="text-sm text-gray-500">
              Last modified: {item.lastModified}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="text-pink-600 hover:text-pink-800 text-sm">Edit</button>
              <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentManagement;
