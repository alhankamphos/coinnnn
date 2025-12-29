import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen pb-24 bg-background-dark text-white font-display">
      <header className="sticky top-0 z-40 bg-[#102216]/95 backdrop-blur-md border-b border-white/5 pt-safe-top">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-primary tracking-wider uppercase">Costa Rica</span>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              Coinnet
              <span className="material-symbols-outlined text-primary text-xl font-bold filled">currency_exchange</span>
            </h1>
          </div>
          <button className="relative rounded-full overflow-hidden h-10 w-10 border-2 border-primary/20 hover:border-primary transition-colors">
            <img alt="User" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_Pf8HkywSgL-6B_4t2GbUINSUHLqpadhl5Ux-LgFylBH_jqBzXfyKpO0Lo6u8giRPR_d8Zbf7b2ueZ86_tS9pC5u4AkZ-M3iDScV85QvI74vU75Vvi3yHVnBuQ9R3jqamqebGssW9V-URAiqjl-CUl5JdtybSe4bBtTDuTFf3goTIH7se8TTBDx1ekpeKfQuRsMXI_V4N4pRZOCmLS3y2kkhwUXQLWP3J9a4jfGuYanYTwG-qDU408lHh50zkaLbqMqIn6UZi0zVj" />
            <div className="absolute bottom-0 right-0 h-3 w-3 bg-primary rounded-full border-2 border-[#102216]"></div>
          </button>
        </div>
        <div className="flex gap-3 px-4 pb-4 pt-1 overflow-x-auto no-scrollbar snap-x">
          <button className="snap-start shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-background-dark font-semibold text-sm shadow-[0_0_15px_rgba(43,238,108,0.3)]">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Todos
          </button>
          <button className="snap-start shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-[18px] text-primary">near_me</span>
            Cerca de mí
          </button>
          <button className="snap-start shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Efectivo → SINPE
          </button>
        </div>
      </header>

      <main className="px-4 py-4 flex flex-col gap-4">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-lg font-semibold text-white/90">Solicitudes Activas</h2>
          <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">24 en tu zona</span>
        </div>

        {/* Card 1 */}
        <article className="bg-surface-dark/70 backdrop-blur-md rounded-2xl p-4 shadow-lg relative group overflow-hidden border border-white/5 animate-fade-in">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="flex items-start justify-between mb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img alt="Carlos M." className="w-12 h-12 rounded-full object-cover border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN2hoPUc3gw18tjSAses9tTOxRtg6foBBr4LCOLf2aLK9snex1xEnBL2jep3IXWz4wZsvVhcRxBtYs6tCppnlIQ0YuGpivIOiEGESEoClWsDBGpAzkNOJnrd3IoXRbk6-cLuOn0lW6taibTCzi8lWqidojnwCsVHhvhIz353fdKL4nnO37aWhye7FIBeUKA6O-h1pYE2tMe9buSHdoSEF8JD4lApw-0Rp3hAWyaL0Y9-C2PRarkMSWvMeZasEapP41Scrsgf_lb5Ug" />
                <span className="absolute -bottom-1 -right-1 bg-blue-500 text-[10px] p-[2px] rounded-full border border-[#102216]">
                  <span className="material-symbols-outlined text-white text-[12px] block filled">verified</span>
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h3 className="text-white font-bold text-base">Carlos M.</h3>
                  <div className="flex items-center bg-yellow-500/20 px-1.5 py-0.5 rounded text-yellow-400 text-xs font-bold gap-0.5">
                    <span>4.9</span>
                    <span className="material-symbols-outlined text-[10px] filled">star</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-0.5">Usuario frecuente • +150 cambios</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-400 font-medium">Hace 5 min</span>
              <span className="bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded mt-1 uppercase tracking-wider">
                SINPE <span className="mx-0.5">↔</span> EFX
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <p className="text-gray-400 text-xs uppercase tracking-wide font-medium">Monto a cambiar</p>
            <p className="text-3xl font-display font-bold text-white tracking-tight">₡10,000</p>
          </div>

          <div className="flex items-end justify-between mt-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                <span className="material-symbols-outlined text-[18px] filled">location_on</span>
                A 200m
              </div>
              <p className="text-gray-400 text-xs pl-6">Starbucks Los Yoses</p>
            </div>
            <button 
              onClick={() => navigate('/transaction/1')}
              className="bg-primary hover:bg-primary-dark text-[#102216] px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(43,238,108,0.2)] transition-all active:scale-95"
            >
              Aceptar
              <span className="material-symbols-outlined text-[18px] filled">check_circle</span>
            </button>
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-surface-dark/70 backdrop-blur-md rounded-2xl p-4 shadow-lg relative overflow-hidden border border-white/5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img alt="Ana R." className="w-12 h-12 rounded-full object-cover border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7vIwhzNGPuOVQ_t6CUZA6tw7JRuqb2N7EjhbKt2G7ahF9gT71AfEQKBZSkzwToFOX9yAZQ9uUbD6unTGLcLk4cm73vZE5hyo28s7agSIRuFBI2Zl1uOaB3rCTyDK9AWQBq7PU37pF10ef_wmVtxnnGdUfpR39Ga5Wgt11Kwz2WohUxnUtn4VHYe4h9WbDUTnHXI9Ke8q10VBlc6sTYnxmNzf7DXLli6S078vrPRfliH05wgb0KpoGCsv2_oNE-_JPJZJs-sUyUx0p" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h3 className="text-white font-bold text-base">Ana R.</h3>
                  <div className="flex items-center bg-yellow-500/20 px-1.5 py-0.5 rounded text-yellow-400 text-xs font-bold gap-0.5">
                    <span>5.0</span>
                    <span className="material-symbols-outlined text-[10px] filled">star</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-0.5">Responde rápido</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-400 font-medium">Hace 12 min</span>
              <span className="bg-white/10 border border-white/20 text-white/80 text-[10px] font-bold px-2 py-1 rounded mt-1 uppercase tracking-wider">
                EFX <span className="mx-0.5">↔</span> SINPE
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-1 mb-2">
            <p className="text-gray-400 text-xs uppercase tracking-wide font-medium">Busco efectivo</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-display font-bold text-white tracking-tight">₡50,000</p>
              <span className="text-xs text-primary font-medium bg-primary/10 px-1.5 py-0.5 rounded">Te doy SINPE</span>
            </div>
          </div>

          <div className="w-full h-24 rounded-lg bg-gray-800 mb-4 relative overflow-hidden group/map cursor-pointer border border-white/10">
            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover/map:opacity-80 transition-opacity" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIZttfeNrOFjGFrW2ahGkQhJ2BQSNslKg0U22LPKo3koDvxIeA4_XU4YtRZSuysayoSSq11NLS8AZ6o8WDl6IOy1awDCjpbLiB6fng0wCj8P-pNOYGMVy93NXsc_sWRZbOqV62N34vpzyvgE9tGiThKW1sIVCTv3aw752Z67BTGBfT5uwkDt398905B5n3EYQlkm3Vo7BVxchuoMMFy4DSGR1Ro1Zzii7630TgImjILZ5DlOOcRF7snyuW_MaJmaxp3gvWWFGU5KAu')"}}></div>
            <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px] text-primary">near_me</span>
              Parque Central (1.2km)
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex-1 bg-surface-card hover:bg-[#344b3c] text-white border border-white/10 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Chat
            </button>
            <button className="flex-1 bg-primary hover:bg-primary-dark text-[#102216] py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(43,238,108,0.2)] transition-all">
              Aceptar
            </button>
          </div>
        </article>
      </main>

      <button className="fixed bottom-24 right-4 z-30 h-14 w-14 bg-primary rounded-full shadow-[0_0_20px_rgba(43,238,108,0.5)] flex items-center justify-center text-[#102216] transition-transform active:scale-90 group hover:scale-105">
        <span className="material-symbols-outlined text-3xl transition-transform group-hover:rotate-90">add</span>
      </button>
    </div>
  );
};

export default Home;