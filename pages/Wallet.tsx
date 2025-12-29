import React from 'react';

const Wallet: React.FC = () => {
  return (
    <div className="bg-background-dark min-h-screen text-white pb-24 font-display">
      <header className="sticky top-0 z-50 w-full bg-background-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto w-full">
          <div className="flex items-center gap-3">
            <button className="text-white p-1 rounded-full hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[28px]">menu</span>
            </button>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight">Mi Billetera</h2>
          <div className="flex items-center justify-end">
            <button className="relative flex items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-surface-dark border border-white/10">
              <img alt="User Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4qzB6XD0BAoJaCZRj_cePXsKtufBAeOCJrea5ggLF6UCiH6MOu_ftNKSpchkPOLAdbMND4LvH_GfElxIBQZkyufa9rTPWMgisMAUeV-FJzYfKm1yih-C6EwqX4_UIvEPD0QakKJNGKzoPsXyw8Zz2K2frZWBf5lDu4JZEhU4DMz7aHBxeUFcdqtWxJIw9KvkJqTNrVx_eh_YhLp1DRPD7mTwFNLYfHmZ8K3YhkywN17cWBOu3QJjaFxlXnuxiPOd4VA89yM9Ua7t7" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto flex flex-col">
        <section className="flex flex-col items-center justify-center pt-8 pb-6 px-4 animate-fade-in">
          <p className="text-gray-400 text-sm font-medium tracking-wide mb-2 uppercase">Saldo Disponible</p>
          <h1 className="text-white text-[40px] font-bold leading-none tracking-tight mb-6">
            <span className="text-gray-500 text-2xl align-top mr-1 font-medium">₡</span>45,500<span className="text-xl text-gray-500 font-medium">.00</span>
          </h1>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-xs font-semibold tracking-wide">Coinnet Activo</span>
          </div>
        </section>

        <section className="px-4 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <button className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-primary text-background-dark shadow-lg shadow-primary/20 hover:bg-primary-dark hover:scale-[1.02] transition-all duration-200 cursor-pointer h-32">
              <div className="p-3 bg-black/10 rounded-full group-hover:bg-black/20 transition-colors">
                <span className="material-symbols-outlined text-[32px]">qr_code_scanner</span>
              </div>
              <span className="text-base font-bold leading-tight">Usar Saldo</span>
            </button>
            <button className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-surface-dark border border-white/5 text-white hover:bg-white/5 hover:scale-[1.02] transition-all duration-200 cursor-pointer h-32">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-[32px] text-gray-300">account_balance</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-base font-bold leading-tight">Retirar Saldo</span>
                <span className="text-[10px] uppercase font-medium text-gray-500 mt-1 tracking-wider">SINPE Móvil</span>
              </div>
            </button>
          </div>
        </section>

        <div className="flex items-center justify-between px-6 mb-4">
          <h3 className="text-white text-lg font-bold">Movimientos Recientes</h3>
          <button className="text-primary text-sm font-semibold hover:text-primary-dark transition-colors">Ver todo</button>
        </div>

        <section className="px-4 flex flex-col gap-3">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-white/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">add_card</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold truncate">Recarga de Efectivo</p>
              <p className="text-gray-500 text-xs mt-0.5">Hoy, 10:23 AM</p>
            </div>
            <div className="text-right">
              <p className="text-primary font-bold">+ ₡10,000</p>
              <p className="text-gray-500 text-[10px] uppercase">Completado</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-white/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold truncate">Soda Tapia</p>
              <p className="text-gray-500 text-xs mt-0.5">Ayer, 1:45 PM</p>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">- ₡2,500</p>
              <p className="text-gray-500 text-[10px] uppercase">Pago QR</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Wallet;