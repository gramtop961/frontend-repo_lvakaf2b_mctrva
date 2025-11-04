import React from 'react';
import { CheckCircle2, Globe, Shield } from 'lucide-react';

const Stat = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-xs text-white/70">{label}</span>
    <span className="text-sm font-medium text-white">{value}</span>
  </div>
);

const NetworkStatus = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-emerald-300" />
        <span className="text-sm text-white">Ready</span>
      </div>
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-sky-200" />
        <span className="text-sm text-white">Encrypted</span>
      </div>
      <div className="flex items-center gap-2">
        <Globe className="w-5 h-5 text-indigo-200" />
        <span className="text-sm text-white">Internet</span>
      </div>

      <div className="col-span-3 grid grid-cols-3 gap-4 pt-2">
        <Stat label="Signal" value="Strong" />
        <Stat label="Session" value="00:00:00" />
        <Stat label="Data" value="0 MB" />
      </div>
    </div>
  );
};

export default NetworkStatus;
