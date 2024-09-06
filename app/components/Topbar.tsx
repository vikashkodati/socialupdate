'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useLogger } from './LoggingProvider';

const TopBar: React.FC = () => {
  const logger = useLogger();
  const pathname = usePathname();

  React.useEffect(() => {
    logger.info('TopBar component mounted');
  }, [logger]);

  const getScreenName = () => {
    switch (pathname) {
      case '/':
        return 'Create';
      case '/dashboard':
        return 'Dashboard';
      default:
        return 'Social Update';
    }
  };

  return (
    <header className="bg-white shadow-md p-4">
      <h1 className="text-2xl font-bold text-gray-800">{getScreenName()}</h1>
    </header>
  );
};

export default TopBar;
