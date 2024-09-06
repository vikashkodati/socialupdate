'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { logger } from '../lib/logger';

const LoggingContext = createContext(logger);

export const useLogger = () => useContext(LoggingContext);

export const LoggingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <LoggingContext.Provider value={logger}>
      {children}
    </LoggingContext.Provider>
  );
};
