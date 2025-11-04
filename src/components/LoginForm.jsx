import React, { useState } from 'react';
import { User, Lock, Key, Eye, EyeOff, Shield, ArrowRight } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder, value, onChange, name }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="h-5 w-5 text-white/70" />
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 backdrop-blur"
      autoComplete="off"
    />
  </div>
);

const LoginForm = ({ onSubmit }) => {
  const [mode, setMode] = useState('user'); // 'user' | 'voucher'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [voucher, setVoucher] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) return;

    if (mode === 'user') {
      onSubmit?.({ username, password });
    } else {
      onSubmit?.({ voucher });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2 p-1 rounded-xl bg-white/10 border border-white/20">
        <button
          type="button"
          onClick={() => setMode('user')}
          className={`flex-1 py-2 rounded-lg transition ${
            mode === 'user' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white'
          }`}
        >
          Username
        </button>
        <button
          type="button"
          onClick={() => setMode('voucher')}
          className={`flex-1 py-2 rounded-lg transition ${
            mode === 'voucher' ? 'bg-white/20 text-white' : 'text-white/70 hover:text-white'
          }`}
        >
          Voucher
        </button>
      </div>

      {mode === 'user' ? (
        <>
          <Input
            icon={User}
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="relative">
            <Input
              icon={Lock}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/70 hover:text-white"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </>
      ) : (
        <Input
          icon={Key}
          name="voucher"
          placeholder="Enter voucher code"
          value={voucher}
          onChange={(e) => setVoucher(e.target.value)}
        />
      )}

      <label className="flex items-center gap-2 text-white/80 text-sm select-none">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="accent-white/90"
        />
        I agree to the hotspot terms and acceptable use policy
      </label>

      <button
        type="submit"
        disabled={!agree || (mode === 'user' ? !(username && password) : !voucher)}
        className="w-full group relative inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white border border-white/20 transition"
      >
        <Shield className="w-5 h-5" />
        Connect
        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
      </button>
    </form>
  );
};

export default LoginForm;
