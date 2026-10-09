import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export const Toast = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-date-brown text-salt px-4 py-3 rounded-xl shadow-warm-lg border border-honey-gold/30 animate-bounce duration-300 max-w-sm"
    >
      <CheckCircle2 className="w-5 h-5 text-honey-gold flex-shrink-0" />
      <span className="text-sm font-medium leading-snug">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="p-1 rounded-lg hover:bg-white/10 text-salt/70 hover:text-salt transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
