import React from 'react';

function Sidebar({
  navItems,
  activeSection,
  setActiveSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <aside
      className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        fixed lg:relative
        w-64 h-screen
        bg-white shadow-lg
        transition-transform duration-300 ease-in-out
        z-50
      `}
    >
      {/* Logo */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-pink-600">SafeSteps</h1>
        <p className="text-sm text-gray-600">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-md
                transition-colors duration-200
                ${
                  activeSection === item.id
                    ? 'bg-pink-100 text-pink-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
