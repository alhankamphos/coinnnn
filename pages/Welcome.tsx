import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark text-white font-display">
      {/* Abstract Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[80%] h-[60%] rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -left-[20%] w-[70%] h-[50%] rounded-full bg-primary/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full w-full max-w-md mx-auto px-6 pb-8 pt-12">
        <div className="flex-1 flex flex-col justify-center items-center gap-8 mt-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative w-24 h-24 rounded-full bg-surface-dark/60 backdrop-blur-md flex items-center justify-center border border-primary/20 shadow-2xl">
              <span className="material-symbols-outlined text-5xl text-primary filled">currency_exchange</span>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-sm">Coinnet</h1>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full mt-4 mb-2"></div>
          </div>

          <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10"></div>
            <div className="w-full h-full bg-cover bg-center opacity-80" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3rHWWuCKqLyXKqQAhXkxX-mzC_S5QlIzaivAK7g4W-LPXLGswc6l2iB2Ifcjty3zymWk8dT3vIsCotoXHuFkdZSU97Pw5XgcoQu9h14ZM8sl7HFoA7jDlKpoqXjD_DvnezXQsuaRjz1RogOhcogdrztIMEEKcGPrs3ZJEnA3PPHger6uQPEyWsdl5ZdCCqr3JPRFDspwPW8VMQDIqTdBDR3v5jlFuiwDvfCRskvfB_QF8-L-Ow6-9ti26r74DlFafONJVlHbVodqE')"}}></div>
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
              <span className="material-symbols-outlined text-primary text-sm">security</span>
              <span className="text-xs font-medium text-gray-200">SINPE Móvil Seguro</span>
            </div>
          </div>
        </div>

        <div className="mt-auto w-full">
          <div className="bg-surface-dark/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/5">
            <div className="mb-8 text-center">
              <p className="text-gray-300 text-base font-normal leading-relaxed">
                Tu puente entre el efectivo y <span className="text-white font-semibold">SINPE Móvil</span>. 
                Rápido, seguro y sin complicaciones.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => navigate('/login')}
                className="relative w-full group overflow-hidden rounded-xl bg-primary h-14 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
              >
                <span className="relative flex items-center justify-center gap-2 text-background-dark text-[17px] font-bold tracking-wide">
                  Iniciar sesión
                  <span className="material-symbols-outlined text-[20px] font-bold">arrow_forward</span>
                </span>
              </button>
              <button className="w-full bg-white/5 backdrop-blur-sm border border-primary/30 rounded-xl h-14 flex items-center justify-center gap-2 text-white text-[17px] font-semibold tracking-wide hover:bg-white/10 active:scale-[0.98] transition-all">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;