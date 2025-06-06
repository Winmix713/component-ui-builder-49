
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopNavigation } from './TopNavigation';
import { useGlobalKeyboardShortcuts } from '@/hooks/useGlobalKeyboardShortcuts';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Enable global keyboard shortcuts
  useGlobalKeyboardShortcuts();

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Blue Grid Background */}
      <div className="grid-background" />
      
      <TopNavigation onMenuClick={handleMenuClick} />
      
      <div className="flex relative z-10">
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
        
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={handleSidebarClose}
          />
        )}
        
        {/* Main content */}
        <main className="flex-1 lg:ml-72 relative">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
