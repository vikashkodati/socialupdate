'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLogger } from './LoggingProvider';

const Sidebar: React.FC = () => {
  const logger = useLogger();
  const pathname = usePathname();

  React.useEffect(() => {
    logger.info('Sidebar component mounted');
  }, [logger]);

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="bg-blue-600 text-white w-64 p-6">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className={`block p-2 rounded ${isActive('/') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
            >
              Create
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={`block p-2 rounded ${isActive('/dashboard') ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
