import { BarChart3, CreditCard, FileText, Menu, MessageSquare, Users } from 'lucide-react';
import React, { useState } from 'react';

// Components
import Analytics from './components/Analytics';
import ChatbotResponses from './components/ChatbotResponses';
import ContentManagement from './components/ContentManagement';
import Sidebar from './components/Sidebar';
import SubscriptionDetails from './components/SubscriptionDetails';
import UserManagement from './components/UserManagement';

function App() {
  const [activeSection, setActiveSection] = useState('users');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'chatbot', label: 'Chatbot Responses', icon: MessageSquare },
    { id: 'content', label: 'Content Management', icon: FileText },
    { id: 'subscriptions', label: 'Subscription Details', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return <UserManagement />;
      case 'chatbot':
        return <ChatbotResponses />;
      case 'content':
        return <ContentManagement />;
      case 'subscriptions':
        return <SubscriptionDetails />;
      case 'analytics':
        return <Analytics />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="lg:hidden p-4 bg-white shadow-sm">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="flex">
        <Sidebar
          navItems={navItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
