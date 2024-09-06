import React from 'react';
import { Metadata } from 'next';
import { LoggingProvider } from './components/LoggingProvider';
import Sidebar from './components/Sidebar';
import TopBar from './components/Topbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Social Update',
  description: 'Create and manage your social media content',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <LoggingProvider>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
              <TopBar />
              <main className="flex-grow p-6">
                {children}
              </main>
            </div>
          </div>
        </LoggingProvider>
      </body>
    </html>
  );
}
