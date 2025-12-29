import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/home');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-background-dark text-white font-display">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="relative z-10 flex items-center p-4 pb-2 justify-between">
        <button onClick={() => navigate('/')} className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-4 relative z-10">
        <div className="mb-8 text-center space-y-2">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight">Te damos la bienvenida</h1>
          <p className="text-text-secondary text-base font-normal">Tu dinero, sin límites ni fronteras.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-white text-sm font-medium ml-1">Correo electrónico</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors">mail</span>
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nombre@ejemplo.com"
                className="block w-full rounded-2xl border-0 py-4 pl-12 pr-4 text-white shadow-sm ring-1 ring-inset ring-white/10 bg-surface-dark placeholder:text-text-secondary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-base transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-white text-sm font-medium">Contraseña</label>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors">lock</span>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="block w-full rounded-2xl border-0 py-4 pl-12 pr-12 text-white shadow-sm ring-1 ring-inset ring-white/10 bg-surface-dark placeholder:text-text-secondary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-base transition-all"
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
              </button>
            </div>
            <div className="flex justify-end pt-1">
              <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">¿Olvidó su contraseña?</a>
            </div>
          </div>

          <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-sm text-base font-bold text-black bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-[0.98]">
            Iniciar Sesión
          </button>
        </form>

        <div className="relative mt-8 mb-6">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background-dark px-3 text-sm text-text-secondary">O continuar con</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-surface-dark px-4 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 hover:bg-white/5 transition-all">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
            </svg>
            <span className="hidden sm:inline">Google</span>
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition-all">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M16.365 1.155c0.98-1.22 2.65-2.025 2.495-0.080-1.79 0.080-3.37 1.25-3.9 2.535-0.62-0.035-1.2-0.055-1.705-0.055 0.535-1.285 1.83-2.22 3.11-2.4zM16.48 16.32c-0.275 0.36-0.61 0.72-0.965 1.070-1.135 1.135-2.375 2.275-4.225 2.275-0.915 0-1.555-0.275-2.26-0.275-0.745 0-1.48 0.295-2.295 0.295-1.785 0-3.23-1.305-4.38-3.365-2.34-4.215-0.56-10.435 4.31-10.435 1.115 0 2.14 0.75 2.835 0.75 0.66 0 1.935-0.93 3.265-0.93 0.545 0.015 2.495 0.22 3.665 1.95-0.105 0.065-2.185 1.275-2.185 3.795 0 3.025 2.645 4.04 2.68 4.055-0.020 0.065-0.42 1.45-1.375 2.87-0.45 0.655-0.93 1.32-1.465 1.95z"></path>
            </svg>
            <span className="hidden sm:inline">Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;