import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * MainAppLayout defines the primary structure of the application page.
 * It uses a CSS Grid to position a fixed-width sidebar, a fixed-height header,
 * and a scrollable main content area.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      {/* 
        The Sidebar is placed in the first column and spans both rows.
        Its width is defined within the Sidebar component itself, fitting the `auto` column size.
      */}
      <div className="row-span-2">
        <Sidebar />
      </div>

      {/* 
        The Header is placed in the first row of the second column.
        Its height is defined within the Header component, fitting the `auto` row size.
      */}
      <Header />

      {/* 
        The main content area takes the remaining space in the second row, second column.
        It is scrollable for content that overflows the viewport height.
      */}
      <main className="overflow-y-auto bg-background">
        <div className="mx-auto max-w-screen-xl px-6 py-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
