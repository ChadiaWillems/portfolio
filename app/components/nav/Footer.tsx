"use client";
import React from 'react';

export default function Nav({ name }: { name: string }) {

  return (
    <footer className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto w-full">
      {/* credits */}
      <p className="text-gray-600 dark:text-gray-400" suppressHydrationWarning>
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </p>
      {/* github + linkedin links */}
        <div className="flex gap-4">
            <a href="https://github.com/ChadiaWillems" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/chadia-willems-6a83b8201/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
              LinkedIn
            </a>
        </div>
    </footer>
  );
}
