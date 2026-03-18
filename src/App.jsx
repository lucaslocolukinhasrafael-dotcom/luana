import React from 'react';
import './index.css';

function App() {
  return (
    <div className="text-on-surface selection:bg-primary selection:text-white">
      {/* Full-width Background Header Section */}
      <header className="relative w-full h-[85vh] overflow-hidden">
        <img 
          alt="Retrato editorial profissional de Luana Dias" 
          className="absolute inset-0 w-full h-full object-cover object-top" 
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
                <p className="text-on-primary-container/80 font-body leading-relaxed max-w-sm">Junte-se a um grupo de elite focado em dominar as nuances estratégicas da entrega jurídica.</p>
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
          <div className="bg-surface-container-high rounded-xl p-8 editorial-shadow hover:bg-surface-container-highest transition-colors duration-300 flex flex-col justify-between min-h-[300px] cursor-pointer group floating-effect border border-outline-variant">
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
          </div>
          <div className="relative rounded-xl overflow-hidden editorial-shadow min-h-[300px] group cursor-pointer floating-effect border border-outline-variant">
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
          </div>
        </section>
        {/* Social Moodboard Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 bg-surface-container-low p-6 rounded-xl editorial-shadow flex flex-col justify-center border border-outline-variant matte-surface">
            <h4 className="text-lg font-headline italic text-primary mb-1">Diário &amp; Insights</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface/40 font-bold">Acompanhe a Prática Profissional</p>
          </div>
          <a className="aspect-square bg-surface-container rounded-xl editorial-shadow flex flex-col items-center justify-center group hover:bg-primary transition-all duration-500 floating-effect border border-outline-variant" href="https://wa.me/556992915832" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-3xl mb-2">chat</span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-primary/60 group-hover:text-on-primary-container/60">WhatsApp</span>
          </a>
          <a className="aspect-square bg-surface-container rounded-xl editorial-shadow flex flex-col items-center justify-center group hover:bg-primary transition-all duration-500 floating-effect border border-outline-variant" href="#">
            <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container text-3xl mb-2">work</span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-primary/60 group-hover:text-on-primary-container/60">LinkedIn</span>
          </a>
          <div className="col-span-2 md:col-span-4 relative h-40 rounded-xl overflow-hidden editorial-shadow group border border-outline-variant">
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
