import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar component that acts as a container for the main navigation.
 * It sets the width and background color for the sidebar area.
 */
const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 border-r bg-sidebar">
      {/* SidebarNav contains the actual navigation links and logic */}
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
