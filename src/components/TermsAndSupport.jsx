import React from 'react';
import { HelpCircle, Phone } from 'lucide-react';

const TermsAndSupport = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-white/80 text-sm">
      <div className="flex items-center gap-2">
        <HelpCircle className="w-4 h-4" />
        <p>
          By connecting, you agree to our acceptable use policy and privacy terms.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <a href="#support" className="inline-flex items-center gap-1 hover:text-white transition">
          <Phone className="w-4 h-4" />
          Support
        </a>
        <span className="opacity-40">•</span>
        <a href="#help" className="hover:text-white transition">Help</a>
        <span className="opacity-40">•</span>
        <a href="#terms" className="hover:text-white transition">Terms</a>
      </div>
    </div>
  );
};

export default TermsAndSupport;
