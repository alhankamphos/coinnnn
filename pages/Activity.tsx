import React from 'react';

const Activity: React.FC = () => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display flex flex-col pb-24">
      <header className="sticky top-0 z-30 bg-background-dark/95 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center p-4 pb-2 justify-between">
          <h2 className="text-2xl font-bold leading-tight tracking-tight flex-1">Historial</h2>
        </div>
        <div className="px-4 pb-3">
          <div className="relative flex w-full items-center rounded-xl bg-surface-dark h-10 transition-all focus-within:ring-2 focus-within:ring-primary/50">
            <div className="absolute left-3 text-gray-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input className="w-full bg-transparent border-none text-base text-white focus:ring-0 placeholder:text-gray-500 pl-10 pr-4 h-full rounded-xl" placeholder="Buscar por nombre..." />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="flex flex-col">
          <div className="sticky top-[110px] z-10 bg-background-dark/95 backdrop-blur px-4 py-2 border-b border-white/5">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Hoy</h3>
          </div>
          
          <div className="group flex items-center gap-3 px-4 py-3 active:bg-white/5 transition-colors cursor-pointer border-b border-white/5">
            <div className="relative shrink-0">
              <div className="h-12 w-12 rounded-full bg-surface-dark bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYbT9WJDZucl5lKsCy-AhgZzCry3txO8DoBtNEqVahran1ErZVdA_YL-DLM2LODrK0HeJJIgVGXY8BSrFuS1IH8uN-HOzzWqZceprtQge9aT0V5B6WzyredbW55t-FHcPxeCGT0Xj83j9ueQtAPheEyczQxyKBoP4-B-_h0UYg5eLopfwrl1OmErpFEOq9eKaD-9aLSOkaGBI9Ep9NHOZBqwLGY8t5-7Y1j3rI3-RTOQfaseWhYufq0l4V1yBQj3AG1dWh2eLWH7EI')"}}></div>
              <div className="absolute -bottom-1 -right-1 bg-background-dark rounded-full p-[2px]">
                <div className="bg-primary rounded-full p-[2px]">
                  <span className="material-symbols-outlined text-[10px] text-background-dark font-bold block">call_received</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 min-w-0 justify-center">
              <div className="flex justify-between items-baseline mb-0.5">
                <p className="text-white text-[15px] font-semibold truncate pr-2">María Rodríguez</p>
                <p className="text-primary text-[15px] font-bold whitespace-nowrap">+ ₡25.000</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs font-normal truncate">SINPE Móvil • 14:30</p>
                <div className="flex items-center gap-1 bg-green-500/10 px-1.5 py-0.5 rounded">
                  <span className="text-[10px] font-medium text-green-500 uppercase tracking-wide">Exitoso</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky top-[110px] z-10 bg-background-dark/95 backdrop-blur px-4 py-2 border-b border-white/5 mt-2">
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider">Ayer</h3>
          </div>

          <div className="group flex items-center gap-3 px-4 py-3 active:bg-white/5 transition-colors cursor-pointer border-b border-white/5">
            <div className="relative shrink-0">
              <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-400 text-xl">account_balance</span>
              </div>
            </div>
            <div className="flex flex-col flex-1 min-w-0 justify-center">
              <div className="flex justify-between items-baseline mb-0.5">
                <p className="text-white text-[15px] font-semibold truncate pr-2">Banco Nacional</p>
                <p className="text-primary text-[15px] font-bold whitespace-nowrap">+ ₡150.000</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs font-normal truncate">Transferencia IBAN • 16:20</p>
                <span className="text-[10px] font-medium text-green-500 uppercase tracking-wide">Exitoso</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Activity;