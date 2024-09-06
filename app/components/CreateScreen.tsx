'use client';

import React, { useState } from 'react';
import { useLogger } from './LoggingProvider';

const CreateScreen: React.FC = () => {
  const logger = useLogger();
  const [content, setContent] = useState('');
  const [platforms, setPlatforms] = useState({
    linkedin: false,
    twitter: false,
    facebook: false,
  });

  React.useEffect(() => {
    logger.info('CreateScreen component mounted');
  }, [logger]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePlatformChange = (platform: keyof typeof platforms) => {
    setPlatforms(prev => ({ ...prev, [platform]: !prev[platform] }));
  };

  const handleGenerateContent = () => {
    logger.info('Generate content button clicked', { content, platforms });
    // TODO: Implement content generation logic
  };

  return (
    <div className="max-w-2xl mx-auto">
      <textarea
        className="w-full h-40 p-4 border border-gray-300 rounded-md resize-none"
        placeholder="Enter your original content here..."
        value={content}
        onChange={handleContentChange}
      />
      <div className="mt-4 space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={platforms.linkedin}
            onChange={() => handlePlatformChange('linkedin')}
            className="mr-2"
          />
          LinkedIn
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={platforms.twitter}
            onChange={() => handlePlatformChange('twitter')}
            className="mr-2"
          />
          Twitter
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={platforms.facebook}
            onChange={() => handlePlatformChange('facebook')}
            className="mr-2"
          />
          Facebook
        </label>
      </div>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={handleGenerateContent}
      >
        Generate Content
      </button>
    </div>
  );
};

export default CreateScreen;
