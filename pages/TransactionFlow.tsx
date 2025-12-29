import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TransactionFlow: React.FC = () => {
  const navigate = useNavigate();
  const { step } = useParams<{ step: string }>();
  const [currentStep, setCurrentStep] = useState(step || 'review');

  useEffect(() => {
    if (step) setCurrentStep(step);
  }, [step]);

  const handleNext = (nextStep: string) => {
    navigate(`/transaction/${nextStep}`);
  };

  const renderReviewOffer = () => (
    <div className="flex-1 flex flex-col gap-6 p-4 animate-fade-in">
        {/* User Card */}
        <div className="flex items-center gap-4 bg-surface-dark p-4 rounded-xl border border-white/5 shadow-sm">
            <div className="relative shrink-0">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 border-2 border-primary/50" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCHjrl7Pv4cBn2tr2d3hffCgtVHyN8ZiyXkPb5a-NgHW8RHXTayG5VpnOnehn6oNCPEhwshhIMXxlmmn2RteFgW_F2AhyyDKxTiBMGhk-IN1O2LKCEs2w3JQu9T8KlZ3uwkhWdBkHNlxWODPTX38n27q6bn3yByjO9n26Pb6SfBQMIn36I0m4ACFyyhq1QdIo5CsSGa5bIUj2VurTxA4F30wRIzdvdFsm_iQvcQkV_jaf2d_pToHbVlmXlFZlCVwHx9WTCM-tEXqMb')"}}></div>
                <div className="absolute -bottom-1 -right-1 bg-background-dark rounded-full p-0.5 border border-background-dark">
                    <span className="material-symbols-outlined text-primary text-[18px] filled">verified</span>
                </div>
            </div>
            <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-start">
                    <p className="text-white text-lg font-bold leading-tight tracking-tight">Carlos M.</p>
                    <div className="flex items-center gap-1 bg-yellow-400/10 px-2 py-0.5 rounded-full border border-yellow-400/20">
                        <span className="text-xs font-bold text-yellow-400">4.8</span>
                        <span className="material-symbols-outlined text-[14px] text-yellow-500 filled">star</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm font-normal mt-0.5">12 transacciones exitosas</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col justify-between gap-3 rounded-xl p-5 bg-surface-dark border border-white/5">
                <div className="flex items-center gap-2 text-gray-400">
                    <div className="p-1.5 bg-white/10 rounded-lg">
                        <span className="material-symbols-outlined text-[20px]">payments</span>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider">Monto</p>
                </div>
                <p className="text-white tracking-tight text-2xl font-bold">₡25,000</p>
            </div>
            <div className="flex flex-col justify-between gap-3 rounded-xl p-5 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 relative overflow-hidden">
                <div className="flex items-center gap-2 text-primary z-10">
                    <div className="p-1.5 bg-primary/20 rounded-lg">
                        <span className="material-symbols-outlined text-[20px] filled">savings</span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider">Tu Ganancia</p>
                </div>
                <div className="z-10">
                    <p className="text-primary tracking-tight text-2xl font-bold">+ ₡1,500</p>
                    <p className="text-primary/70 text-[10px] font-medium uppercase tracking-wide mt-1">+6% COMISIÓN</p>
                </div>
            </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-surface-dark group cursor-pointer shadow-sm">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover opacity-90 group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUI73MyGkGWiNLYcAKSeMkmz7Md02pcjRQ2-zF2WaWMJLn1xq79SnfwL03bEK3YsMm6G4Tkkg5Luz8DbGp1u9BLJKB5iMAqVzaGsIw5OpPUgz8xFTYpmeAK1dG2-Q6aRRL9wx-EQBAfbJXWzRNsi24g6nZaU2UfoVeICqhP8tTHFnmiS_S6UHRhtxfMwYvQnCmlaGWJDS9cb26unMEWpNfsq9FTWTx3Z7WWbd_3zCWfQzCEd9xAGMzUkP9CPekugZe1fRqQXRyD9_K')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-background-dark shadow-lg shadow-primary/20 mt-0.5">
                        <span className="material-symbols-outlined text-2xl filled">location_on</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <p className="text-white text-base font-bold leading-tight">Mall San Pedro</p>
                        <p className="text-gray-300 text-xs font-medium">Entrada Principal, Food Court</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/95 backdrop-blur-xl border-t border-white/5 z-40 pb-8 pt-4">
            <button 
                onClick={() => handleNext('instructions')}
                className="w-full bg-primary hover:bg-primary-dark active:scale-[0.98] transition-all duration-200 text-background-dark font-bold text-lg h-14 rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_-5px_rgba(43,238,108,0.4)]"
            >
                <span>Aceptar Solicitud</span>
                <span className="material-symbols-outlined filled">check_circle</span>
            </button>
        </div>
    </div>
  );

  const renderInstructions = () => (
    <div className="flex-1 flex flex-col p-4 gap-6 animate-slide-up">
        <div className="flex flex-col items-center justify-center py-2">
            <p className="text-gray-400 text-sm font-medium mb-3">Tiempo restante para transferir</p>
            <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-dark border border-white/5 shadow-inner">
                        <p className="text-primary text-3xl font-bold tracking-tight">14</p>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">minutos</span>
                </div>
                <div className="flex h-16 items-center justify-center pb-5">
                    <span class="text-gray-600 text-2xl font-bold">:</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-dark border border-white/5 shadow-inner">
                        <p className="text-primary text-3xl font-bold tracking-tight">59</p>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">segundos</span>
                </div>
            </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 flex items-start gap-3">
            <span className="material-symbols-outlined text-yellow-500 shrink-0 text-[20px] mt-0.5">warning</span>
            <p className="text-xs text-yellow-400 leading-relaxed">
                Por seguridad, verificá que el titular de la cuenta destino sea <strong>Coinnet Custodia S.A.</strong>
            </p>
        </div>

        <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-xl bg-surface-dark p-5 shadow-sm border border-white/5">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-gray-400 text-sm font-medium">Monto exacto</p>
                    <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
                </div>
                <div className="flex items-end justify-between gap-4">
                    <p className="text-white text-3xl font-bold tracking-tight">₡25,000.00</p>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-surface-dark p-5 shadow-sm border border-white/5">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-gray-400 text-sm font-medium">Número SINPE</p>
                    <span className="material-symbols-outlined text-primary text-[20px]">smartphone</span>
                </div>
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <p className="text-white text-3xl font-bold tracking-tight tabular-nums">8888-8888</p>
                        <p className="text-xs text-gray-500 mt-1">Coinnet Custodia S.A.</p>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                </div>
            </div>
        </div>

        <div className="fixed bottom-0 w-full bg-background-dark border-t border-white/5 z-40 left-0 p-4 pb-8">
            <button 
                onClick={() => handleNext('upload')}
                className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-background-dark font-bold text-base transition-all active:scale-[0.98]"
            >
                <span className="material-symbols-outlined">check_circle</span>
                Confirmar Transferencia
            </button>
        </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20 animate-fade-in text-center">
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 ring-1 ring-primary/50 shadow-[0_0_30px_rgba(43,238,108,0.3)] mb-6">
            <span className="material-symbols-outlined text-primary text-[48px] filled">check</span>
        </div>
        <h1 className="text-white text-3xl font-bold tracking-tight mb-2">¡Transacción Exitosa!</h1>
        <p className="text-text-secondary text-base font-normal mb-8">El dinero ya fue enviado vía SINPE.</p>

        <div className="flex flex-col w-full bg-surface-dark/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl mb-6">
            <div className="flex flex-col items-center border-b border-dashed border-white/10 pb-6 mb-6">
                <span className="text-text-secondary text-sm font-medium mb-1">Monto Total</span>
                <span className="text-white text-4xl font-bold tracking-tight">₡25.000,00</span>
            </div>
            <div className="grid grid-cols-1 gap-4 text-left">
                <div className="flex justify-between items-center">
                    <span className="text-text-secondary text-sm">Ref</span>
                    <span className="text-white text-sm font-medium font-mono">#CN-882910</span>
                </div>
            </div>
        </div>

        <button 
            onClick={() => navigate('/home')}
            className="w-full h-12 bg-primary hover:bg-primary-dark text-background-dark font-bold rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-auto mb-8"
        >
            Volver al Inicio
        </button>
    </div>
  );

  return (
    <div className="bg-background-dark min-h-screen text-white font-display flex flex-col">
      <header className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-md p-4 border-b border-white/5">
        <button onClick={() => navigate(-1)} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            {currentStep === 'review' && 'Detalle de Solicitud'}
            {currentStep === 'instructions' && 'Instrucciones'}
            {currentStep === 'upload' && 'Subir Comprobante'}
            {currentStep === 'success' && '¡Éxito!'}
        </h2>
      </header>

      {currentStep === 'review' && renderReviewOffer()}
      {currentStep === 'instructions' && renderInstructions()}
      {currentStep === 'upload' && (
          // Simplified Upload state for brevity, jumps to success
          <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
              <div 
                onClick={() => handleNext('success')}
                className="w-full aspect-square max-w-xs rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition-colors"
              >
                  <span className="material-symbols-outlined text-4xl text-gray-500 mb-2">cloud_upload</span>
                  <p className="text-gray-400">Toca para simular subida</p>
              </div>
          </div>
      )}
      {currentStep === 'success' && renderSuccess()}
    </div>
  );
};

export default TransactionFlow;