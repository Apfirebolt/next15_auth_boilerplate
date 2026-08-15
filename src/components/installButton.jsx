// src/components/CopyInstallButton.jsx
'use client';

import { useState } from 'react';
import { HiOutlineCheck, HiOutlineSquare2Stack } from 'react-icons/hi2';

export default function CopyInstallButton({ cmd = 'npx create-next-auth-app@latest' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex w-full items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2 font-mono text-xs text-neutral-700 sm:w-auto dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
      <span>{cmd}</span>
      <button
        onClick={handleCopy}
        aria-label="Copy install command"
        className="text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
      >
        {copied ? (
          <HiOutlineCheck className="h-4 w-4 text-emerald-500" />
        ) : (
          <HiOutlineSquare2Stack className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}