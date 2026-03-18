import React from 'react';
import './App.css';
import {
  Gavel,
  ArrowRight,
  Copy,
  Calendar,
  MessageCircle,
  Camera,
  Briefcase,
  Mail,
  Plus
} from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
          alt="Luana Dias Placeholder" 
          className="hero-image"
        />
        <div className="header-text">
          <div className="header-overline">Especialista Previdenciária</div>
          <h1 className="header-title serif">Luana Dias</h1>
          <div className="header-subtitle serif">Autoridade em Estratégia Jurídica</div>
        </div>
      </header>

      {/* Section 1: Intro */}
      <section className="section">
        <Gavel className="section-icon section-icon-maroon" />
        <h2 className="section-title serif">Construindo justiça por meio da advocacia intencional.</h2>
        <p className="section-quote">"A intersecção entre empatia e rigor técnico jurídico."</p>
        <div className="divider" />
        <div className="since-badge">DESDE 2010</div>
      </section>

      {/* Section 2: Group Class */}
      <section className="section-maroon section-maroon-textured">
        <div className="badge">ACESSO EXCLUSIVO</div>
        <h2 className="section-title serif" style={{ marginBottom: '0.5rem' }}>
          Grupo de Aulas Gratuitas:<br/>Metodologia de Serviço
        </h2>
        <p className="section-text">
          Junte-se a um grupo de elite focado em dominar as nuances estratégicas da entrega jurídica.
        </p>
        <button className="icon-button" aria-label="Join Group">
          <ArrowRight size={24} />
        </button>
      </section>

      {/* Section 3: Consultancy */}
      <section className="section">
        <Copy className="section-icon section-icon-maroon" />
        <h2 className="section-title serif">Consultoria Previdenciária</h2>
        <p className="section-text">
          Mapeamento estratégico personalizado para casos complexos de aposentadoria e benefícios.
        </p>
        <a className="action-link action-link-maroon">
          SOLICITAR CONSULTORIA <ArrowRight size={16} />
        </a>
      </section>

      {/* Section 4: Schedule */}
      <section className="section-maroon section-maroon-textured">
        <Calendar className="section-icon section-icon-white" />
        <h2 className="section-title serif" style={{ marginBottom: '0.5rem' }}>Agendar<br/>Atendimento</h2>
        <p className="section-text">
          Reserve uma consulta privada para discutir os detalhes do seu caso.
        </p>
        <a className="action-link action-link-white">
          VER HORÁRIOS DISPONÍVEIS <Plus size={16} />
        </a>
      </section>

      {/* Section 5: Diary & Insights */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="section-head-center">
          <h2 className="section-title serif" style={{ fontStyle: 'italic', marginBottom: '0.25rem' }}>
            Diário & Insights
          </h2>
          <div className="header-overline" style={{ color: 'var(--color-maroon)' }}>
            ACOMPANHE A PRÁTICA PROFISSIONAL
          </div>
        </div>

        <div className="grid-2x2">
          <a href="#" className="grid-card">
            <MessageCircle className="grid-card-icon" />
            <span className="grid-card-text">WHATSAPP</span>
          </a>
          <a href="#" className="grid-card">
            <Camera className="grid-card-icon" />
            <span className="grid-card-text">INSTAGRAM</span>
          </a>
          <a href="#" className="grid-card">
            <Briefcase className="grid-card-icon" />
            <span className="grid-card-text">LINKEDIN</span>
          </a>
          <a href="#" className="grid-card">
            <Mail className="grid-card-icon" />
            <span className="grid-card-text">E-MAIL</span>
          </a>
        </div>
      </section>

      {/* Bottom Image */}
      <img 
        src="https://images.unsplash.com/photo-1505664177941-8f553018255d?q=80&w=800&auto=format&fit=crop" 
        alt="Law Books" 
        className="footer-image"
      />

      {/* Footer */}
      <footer className="footer">
        © 2026 LUANA DIAS • EXCELÊNCIA JURÍDICA
      </footer>
    </div>
  );
}

export default App;
