import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-24">
      <header className="sticky top-0 z-20 bg-background-dark/90 backdrop-blur-md border-b border-white/5 p-4 flex items-center justify-center">
        <h2 className="text-lg font-bold">Mi Perfil</h2>
      </header>

      <div className="flex flex-col items-center pt-6 pb-6 px-4">
        <div className="relative group">
          <div className="bg-center bg-no-repeat bg-cover rounded-full h-28 w-28 shadow-md border-4 border-surface-dark" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD94Wk_5uYtkCLOIz7zjztMWrWPKpEL4cmwQC8_Wl0d_yx0X-UA2Cds5kbiip2-0c20wr106TGjeawaEELus6E9fn0xbGDpz7E5JSM2x-XFhjlLTOQ_-N39x0XuOfXpL0xc57a8rZmwzykkj79kYiROmgMhFCgttcavUF5nwbbsMxY_3TQRlzXZKx_A0UWUbLJ8IEhvK7duiH8EaB6CfsyUznwMB4RnuuAvayJKgpBp0jHv6JYrV8ITxhdoh9YHZp6cnRbCX02YIGDc')"}}></div>
          <button className="absolute bottom-0 right-0 bg-surface-dark rounded-full p-2 border border-slate-700 text-white">
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
          </button>
        </div>
        <div className="mt-4 flex flex-col items-center gap-1">
          <h1 className="text-2xl font-bold">Carlos Rodríguez</h1>
          <div className="flex items-center gap-1 text-sm font-medium text-gray-400">
            <span className="material-symbols-outlined text-yellow-500 text-[18px] filled">star</span>
            <span className="text-white font-bold">4.9</span>
            <span>(120 transacciones)</span>
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-[16px] filled">verified</span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Verificado Nivel 2</span>
          </div>
        </div>
      </div>

      <div className="mt-2 px-4 space-y-6">
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-4">Información</h3>
          <div className="bg-surface-dark rounded-2xl border border-white/5 overflow-hidden divide-y divide-white/5">
            <div className="flex items-center gap-4 px-4 py-3.5">
              <div className="flex items-center justify-center rounded-lg bg-green-900/30 text-green-400 shrink-0 size-9">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">WhatsApp</p>
                <p className="text-sm text-gray-400">+506 8888-9999</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-3.5">
              <div className="flex items-center justify-center rounded-lg bg-blue-900/30 text-blue-400 shrink-0 size-9">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">Correo</p>
                <p className="text-sm text-gray-400 truncate">carlos@ejemplo.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">edit</span>
            Editar Perfil
          </button>
          <button 
            onClick={() => navigate('/')}
            className="w-full text-red-400 hover:bg-red-900/10 font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;