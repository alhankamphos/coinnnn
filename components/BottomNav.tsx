import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Don't show nav on login or specific flow pages
  const hiddenPaths = ['/', '/login', '/transaction/', '/success'];
  if (hiddenPaths.some(path => location.pathname === path || location.pathname.startsWith('/transaction/'))) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-surface-dark/95 backdrop-blur-lg border-t border-white/10 pb-safe z-50 left-0 right-0">
      <div className="flex justify-around items-center h-16 px-2">
        <button 
          onClick={() => navigate('/home')}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors group ${isActive('/home') ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-2xl group-hover:scale-110 transition-transform ${isActive('/home') ? 'filled' : ''}`}>dashboard</span>
          <span className="text-[10px] font-medium">Muro</span>
        </button>

        <button 
          onClick={() => navigate('/activity')}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors group ${isActive('/activity') ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-2xl group-hover:scale-110 transition-transform ${isActive('/activity') ? 'filled' : ''}`}>receipt_long</span>
          <span className="text-[10px] font-medium">Actividad</span>
        </button>

        <div className="relative -top-5">
          <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-background-dark shadow-[0_0_20px_rgba(43,238,108,0.4)] transition-transform active:scale-95 hover:scale-105">
            <span className="material-symbols-outlined text-[28px]">add</span>
          </button>
        </div>

        <button 
          onClick={() => navigate('/wallet')}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors group ${isActive('/wallet') ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-2xl group-hover:scale-110 transition-transform ${isActive('/wallet') ? 'filled' : ''}`}>account_balance_wallet</span>
          <span className="text-[10px] font-medium">Billetera</span>
        </button>

        <button 
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors group ${isActive('/profile') ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
        >
          <span className={`material-symbols-outlined text-2xl group-hover:scale-110 transition-transform ${isActive('/profile') ? 'filled' : ''}`}>person</span>
          <span className="text-[10px] font-medium">Perfil</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;