// src/components/EmailPreview.jsx
import React from 'react';

export default function EmailPreview({ html }) {
  if (!html) {
    return (
      <div className="flex items-center justify-center h-full text-gray-300 italic text-sm">
        Empty content...
      </div>
    );
  }

  return (
    <div 
      className="email-content-preview prose prose-sm max-w-none w-full"
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
}