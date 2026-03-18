import React from 'react';
import './index.css';

function App() {
  return (
    <div className="text-on-surface selection:bg-primary selection:text-white">
      {/* Full-width Background Header Section */}
      <header className="relative w-full h-[85vh] overflow-hidden">
        {/* Background blur for desktop */}
        <div 
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center opacity-40 blur-2xl scale-110" 
          style={{backgroundImage: "url('https://i.imgur.com/znueKhq.jpeg')"}}
        ></div>
        <img 
          alt="Retrato editorial profissional de Luana Dias" 
          className="absolute inset-0 w-full h-full object-cover md:object-contain object-top md:object-center z-0 relative" 
          src="https://i.imgur.com/znueKhq.jpeg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-4xl mx-auto left-1/2 -translate-x-1/2 text-on-primary-container">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-secondary mb-2 font-bold">Especialista Previdenciária</p>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight mb-2">Luana Dias</h1>
          <p className="font-headline italic text-xl md:text-2xl opacity-90">Autoridade em Estratégia Jurídica</p>
        </div>
      </header>
      <main className="py-8 px-4 max-w-4xl mx-auto">
        {/* Updated Consultation Block */}
        <section className="mb-8">
          <div className="bg-surface-container p-8 md:p-12 rounded-xl editorial-shadow border border-outline-variant floating-effect flex flex-col justify-between matte-surface">
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-4">gavel</span>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary leading-tight">Construindo justiça por meio da advocacia intencional.</h2>
            </div>
            <div className="mt-6">
              <p className="text-sm font-body text-on-surface/70 leading-relaxed italic">"A intersecção entre empatia e rigor técnico jurídico."</p>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-[1px] flex-1 bg-outline-variant"></span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">OAB/RO nº 15293</span>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Block: Free Classes Group */}
        <section className="mb-8">
          <a className="block group relative overflow-hidden rounded-xl editorial-shadow bg-primary p-10 md:p-14 text-center md:text-left floating-effect" href="https://chat.whatsapp.com/DCVYQYc8ykz8IJA9VFFjXv" target="_blank" rel="noopener noreferrer">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary text-primary text-[10px] uppercase tracking-widest font-bold rounded-full mb-6">Acesso Exclusivo</span>
                <h3 className="text-3xl md:text-4xl font-headline text-on-primary-container mb-4 leading-tight">Grupo de Aulas Gratuitas: Metodologia de Serviço</h3>
                <p className="text-on-primary-container/80 font-body leading-relaxed max-w-sm">Junte-se a um grupo de elite focado em dominar as nuances estratégicas da entrega jurídica no Direito Previdenciário.</p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-20 h-20 rounded-full border-2 border-secondary flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">arrow_forward</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(166,137,102,0.15),transparent)] pointer-events-none"></div>
          </a>
        </section>
        {/* Bento Grid: Secondary Links */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a href="https://wa.me/556992915832" target="_blank" rel="noopener noreferrer" className="bg-surface-container-high rounded-xl p-8 editorial-shadow hover:bg-surface-container-highest transition-colors duration-300 flex flex-col justify-between min-h-[300px] cursor-pointer group floating-effect border border-outline-variant">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary text-3xl">auto_stories</span>
              <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
            </div>
            <div className="mt-6">
              <h3 className="text-3xl font-headline font-bold text-primary mb-3">Consultoria Previdenciária</h3>
              <p className="text-base text-on-surface/70 font-body leading-relaxed mb-6">Mapeamento estratégico personalizado para casos complexos de aposentadoria e benefícios.</p>
              <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest">
                <span>Solicitar Consultoria</span>
                <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
              </div>
            </div>
          </a>
          <a href="https://wa.me/556992915832" target="_blank" rel="noopener noreferrer" className="relative rounded-xl overflow-hidden editorial-shadow min-h-[300px] group cursor-pointer floating-effect border border-outline-variant">
            <img alt="Textura luxuosa de mármore burgundy e detalhes dourados" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBziwOva7JOWb5PptlO5DSqkYnR0WhWogEviP3orXr1eCXSZ6dzfsmlG2rxz88h8DaKQHuSFo6H75rBtYfv87x6j_4GUF4uMGIS0fV5lRKRrAtVNTCr46ZtSly30uPP5a6oBVgeuCbXFPkXX5hXugqmRkRfB7fvP0zRIdAldZIEaw2JuaICCOBPf3As8YREIcfvgNQkAv6t0V78i9JA7vobQ-HdVRtmUEHklT8muD8Pg6G6eqM07KScgZqgpeUmojcAC154GqvAGVD4"/>
            <div className="absolute inset-0 bg-primary/85 backdrop-blur-[1px]"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-secondary text-3xl">calendar_month</span>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
              </div>
              <div className="mt-6">
                <h3 className="text-3xl font-headline font-bold text-on-primary-container mb-3">Agendar Atendimento</h3>
                <p className="text-base text-on-primary-container/80 font-body leading-relaxed mb-6">Reserve uma consulta privada para discutir os detalhes do seu caso.</p>
                <div className="flex items-center text-secondary font-bold text-xs uppercase tracking-widest">
                  <span>Ver Horários Disponíveis</span>
                  <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                </div>
              </div>
            </div>
          </a>
        </section>
        {/* Social Moodboard Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 bg-surface-container-low p-6 rounded-xl editorial-shadow flex flex-col justify-center border border-outline-variant matte-surface">
            <h4 className="text-lg font-headline italic text-primary mb-1">Diário &amp; Insights</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface/40 font-bold">Acompanhe a Prática Profissional</p>
          </div>
          <a className="aspect-square bg-surface-container rounded-xl editorial-shadow flex flex-col items-center justify-center group hover:bg-primary transition-all duration-500 floating-effect border border-outline-variant" href="https://wa.me/556992915832" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mb-2 group-hover:text-on-primary-container text-primary transition-colors">
              <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.22.576 4.3 1.583 6.096L.48 24l6.027-1.55c1.724.954 3.712 1.503 5.82 1.503 6.646 0 12.032-5.386 12.032-12.032C24.36 5.385 18.976 0 12.031 0zm0 21.954c-1.85 0-3.606-.484-5.148-1.344l-.369-.205-3.82.981.996-3.705-.226-.38c-.933-1.574-1.425-3.41-1.425-5.342 0-5.545 4.512-10.057 10.057-10.057 5.546 0 10.058 4.512 10.058 10.057 0 5.545-4.512 10.057-10.057 10.057zm5.526-7.553c-.303-.152-1.794-.886-2.07-.988-.276-.102-.477-.152-.678.151-.201.303-.779.988-.954 1.19-.176.202-.352.227-.655.075-1.472-.74-2.584-1.373-3.626-2.583-.267-.309-.115-.506.036-.656.136-.135.303-.353.454-.53.151-.176.201-.303.302-.505.101-.202.05-.38-.025-.53-.075-.152-.678-1.636-.928-2.242-.243-.591-.49-.51-.678-.52h-.578c-.201 0-.528.076-.804.379-.276.303-1.055 1.03-1.055 2.511 0 1.48 1.08 2.912 1.231 3.114.151.202 2.126 3.243 5.148 4.546 1.8.775 2.477.893 3.328.75 1-.168 2.18-.887 2.484-1.745.303-.859.303-1.594.212-1.745-.09-.152-.34-.241-.643-.393z"/>
            </svg>
            <span className="text-[9px] uppercase tracking-widest font-bold text-primary/60 group-hover:text-on-primary-container/60">WhatsApp</span>
          </a>
          <a className="aspect-square bg-surface-container rounded-xl editorial-shadow flex flex-col items-center justify-center group hover:bg-primary transition-all duration-500 floating-effect border border-outline-variant" href="https://www.linkedin.com/in/luana-dias-02a582106?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-3xl mb-2">work</span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-primary/60 group-hover:text-on-primary-container/60">LinkedIn</span>
          </a>
          <a className="aspect-square bg-surface-container rounded-xl editorial-shadow flex flex-col items-center justify-center group hover:bg-primary transition-all duration-500 floating-effect border border-outline-variant" href="mailto:contatoluanadias@gmail.com" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-3xl mb-2">mail</span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-primary/60 group-hover:text-on-primary-container/60">E-mail</span>
          </a>
          <a className="aspect-square bg-surface-container rounded-xl editorial-shadow flex flex-col items-center justify-center group hover:bg-primary transition-all duration-500 floating-effect border border-outline-variant" href="https://www.tiktok.com/@draluadias" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mb-2 group-hover:text-on-primary-container text-primary transition-colors">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.26-1.17 4.41-2.95 5.84-1.77 1.42-4.14 2.15-6.4 1.95-3.03-.27-5.69-2.38-6.68-5.26-.5-1.44-.55-3.05-.15-4.52.34-1.28 1.03-2.47 1.94-3.4 2.05-2.07 5.25-2.82 8.01-1.76v4.06c-2.39-.77-5.07-.1-6.46 1.83-.82 1.13-1.01 2.67-.5 3.96.48 1.21 1.63 2.19 2.9 2.53 1.93.51 4.13-.3 5.11-2.01.4-.7.54-1.53.53-2.34-.02-5.78-.01-11.57-.01-17.35l.06-.3z"/>
            </svg>
            <span className="text-[9px] uppercase tracking-widest font-bold text-primary/60 group-hover:text-on-primary-container/60">TikTok</span>
          </a>
          <div className="col-span-2 md:col-span-2 relative h-40 rounded-xl overflow-hidden editorial-shadow group border border-outline-variant">
            <img alt="Close-up de uma coleção clássica de livros jurídicos" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcQAAgEA3msv2gMKFh-drd41RUIkv2wRR4-u8zyqCct3n8lEUNYsoJ9PYabX7jZSGVF5AET3qs43RkdUHkLKetUnHJTSCw3mCrsmXrrmKb0uLBktHMl4UpvfEOs-I9CgX2J7m69s_Oz7Blt6hKYctEj41dkyMkmGj3HsZDJmVk99CDM3zJmIbNDhhR5kKjcycoHnAg_-GDAZH6C4I7KCht9zuU6veyFvEpaJHSISrE5lpNmeesW1BTn2Y06vjIU8d6bdUf2oRSiTzI"/>
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
        </section>
      </main>
      <footer className="pb-16 text-center">
        <div className="inline-block py-2 px-8 border border-outline-variant bg-surface-container-low rounded-full editorial-shadow">
          <p className="text-[10px] uppercase tracking-[0.4em] font-body text-primary/60 font-medium">© 2026 Luana Dias • Excelência Jurídica • OAB/RO nº 15293</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
