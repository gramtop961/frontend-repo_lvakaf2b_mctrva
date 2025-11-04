import React from 'react';
import HeaderBrand from './components/HeaderBrand';
import LoginForm from './components/LoginForm';
import NetworkStatus from './components/NetworkStatus';
import TermsAndSupport from './components/TermsAndSupport';

function App() {
  const handleSubmit = (payload) => {
    // This is where you'd integrate with your MikroTik hotspot login endpoint.
    // For now, we just log the payload to show the UI flow.
    console.log('Submitting login payload:', payload);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1026] via-[#12204a] to-[#1b2b5b]" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-xl">
          {/* Glass card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 p-6 sm:p-8">
            <div className="mb-6">
              <HeaderBrand />
            </div>

            <div className="grid gap-6">
              <NetworkStatus />
              <LoginForm onSubmit={handleSubmit} />
              <TermsAndSupport />
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-6 text-center text-white/60 text-xs">
            Powered by MikroTik Hotspot • Designed with glassmorphism aesthetics
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
