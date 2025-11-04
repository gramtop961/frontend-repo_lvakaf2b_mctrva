import React from 'react';
import { Wifi } from 'lucide-react';

const HeaderBrand = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-xl bg-white/10 backdrop-blur border border-white/20 shadow-inner">
        <Wifi className="w-6 h-6 text-white" />
      </div>
      <div>
        <h1 className="text-white text-xl font-semibold tracking-wide">Hotspot Captive Portal</h1>
        <p className="text-white/70 text-sm">Secure access to the network</p>
      </div>
    </div>
  );
};

export default HeaderBrand;
