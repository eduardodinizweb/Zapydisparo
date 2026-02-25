import { motion } from 'motion/react';
import React from 'react';

const BackgroundMessages = () => {
  const particles = React.useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 20 + 100, // Start below the screen
      endX: Math.random() * 100,
      endY: -20, // End above the screen
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 15,
      scale: Math.random() * 0.6 + 0.4,
      opacity: Math.random() * 0.15 + 0.05,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: `${p.startX}vw`, y: `${p.startY}vh`, opacity: 0, scale: p.scale }}
          animate={{ 
            x: `${p.endX}vw`, 
            y: `${p.endY}vh`, 
            opacity: [0, p.opacity, p.opacity, 0] 
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute text-whatsapp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      href="https://wa.me/5598988556774?text=%23ZapyDisparo%20-%20Eu%20quero%20contratar"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-50 w-14 h-14 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  );
};

const SmartphoneSimulation = () => {
  return (
    <div className="relative w-[280px] h-[580px] rounded-[3rem] border-[8px] border-zinc-800 bg-black overflow-hidden shadow-2xl shadow-whatsapp/20">
      {/* Header */}
      <div className="absolute top-0 w-full h-16 bg-zinc-900/80 backdrop-blur-md border-b border-white/10 flex items-center px-6 z-10">
        <div className="w-8 h-8 rounded-full bg-whatsapp/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
        </div>
        <div className="ml-3">
          <div className="text-xs font-mono text-white">ZapyBot_v2</div>
          <div className="text-[10px] text-whatsapp">Online</div>
        </div>
      </div>
      
      {/* Messages */}
      <div className="absolute top-20 w-full px-4 flex flex-col gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="self-end bg-whatsapp text-black px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] text-sm"
        >
          Campanha "Black Friday" iniciada 🚀
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="self-start bg-zinc-800 text-white px-4 py-2 rounded-2xl rounded-tl-sm max-w-[85%] text-sm"
        >
          Processando 5.000 contatos... ⏳
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="self-start bg-zinc-800 text-white px-4 py-2 rounded-2xl rounded-tl-sm max-w-[85%] text-sm"
        >
          Gerando variações com IA para evitar banimento 🧠✨
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5 }}
          className="self-end bg-whatsapp text-black px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] text-sm flex flex-col gap-2"
        >
          <span>Oferta exclusiva liberada! 🎉</span>
          <div className="bg-black/20 text-white rounded-lg p-2 text-center font-bold text-xs">
            VER OFERTA
          </div>
        </motion.div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 w-full h-20 bg-zinc-900/80 backdrop-blur-md border-t border-white/10 flex items-center px-4 gap-2">
        <div className="flex-1 h-10 rounded-full bg-zinc-800 border border-white/5 px-4 flex items-center">
          <span className="text-xs text-zinc-500 font-mono">Automated sending...</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-6 md:top-6 md:bottom-auto left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between"
    >
      <div className="font-sans font-bold text-white tracking-tight flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
        ZapyDisparo
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
        <a href="#features" className="hover:text-white transition-colors">Recursos</a>
        <a href="#protocol" className="hover:text-white transition-colors">Anti-Ban</a>
      </div>
      <a 
        href="https://wa.me/5598988556774?text=%23ZapyDisparo%20-%20Eu%20quero%20contratar" 
        target="_blank" 
        rel="noreferrer"
        className="bg-whatsapp text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-whatsapp-dark transition-colors"
      >
        CONTRATAR
      </a>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center pt-32 pb-32 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614064641936-732759ba8a15?auto=format&fit=crop&q=80" 
          alt="Abstract dark tech" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-3xl w-full flex flex-col">
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
            className="flex flex-col"
          >
            <span className="font-sans font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tight text-white">
              Transmissão
            </span>
            <span className="font-serif italic text-[clamp(3.5rem,10vw,8rem)] leading-[0.8] text-whatsapp pr-4">
              em Massa.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
            className="mt-8 text-zinc-400 text-[clamp(1rem,2vw,1.25rem)] max-w-xl font-light"
          >
            Alcance milhares de clientes no WhatsApp com automação inteligente, variações de IA anti-ban e escala invisível.
          </motion.p>
          
          <motion.div
            initial={{ y: 60, opacity: 0, rotate: 5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
            className="md:hidden relative mt-12 self-center shrink-0"
          >
            <div className="absolute -inset-10 bg-whatsapp/10 blur-[100px] rounded-full" />
            <SmartphoneSimulation />
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
            className="mt-12 md:hidden w-full"
          >
             <a 
              href="https://wa.me/5598988556774?text=%23ZapyDisparo%20-%20Eu%20quero%20contratar" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center w-full px-8 py-4 font-bold text-white bg-whatsapp rounded-full"
            >
              CONTRATAR AGORA
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 60, opacity: 0, rotate: 5 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
          className="hidden md:block relative shrink-0"
        >
          <div className="absolute -inset-10 bg-whatsapp/10 blur-[100px] rounded-full" />
          <SmartphoneSimulation />
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 md:px-12 lg:px-24 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-mono text-xs text-whatsapp tracking-widest uppercase mb-4">Artefatos Funcionais</h2>
          <p className="font-sans font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight max-w-2xl">
            Engenharia de conversão projetada para <span className="text-whatsapp">escala extrema.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Diagnostic Shuffler */}
          <div className="h-[400px] rounded-3xl bg-zinc-900/50 border border-white/5 p-8 relative overflow-hidden group backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-whatsapp to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-sans font-semibold text-xl mb-2">Variações com IA</h3>
            <p className="text-zinc-500 text-sm mb-8">Evite banimentos com mensagens únicas geradas dinamicamente.</p>
            
            <div className="relative h-48 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    scale: [1, 0.95, 1],
                    zIndex: [3, 2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 1,
                    ease: "easeInOut"
                  }}
                  className="absolute w-full max-w-[240px] bg-zinc-800 border border-white/10 rounded-xl p-4 shadow-xl"
                  style={{ top: i * 10 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-whatsapp" />
                    <div className="text-[10px] font-mono text-zinc-400">VAR_0{i+1}</div>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded w-full mb-2" />
                  <div className="h-2 bg-zinc-700 rounded w-4/5" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Telemetry Typewriter */}
          <div className="h-[400px] rounded-3xl bg-zinc-900/50 border border-white/5 p-8 relative overflow-hidden group backdrop-blur-xl">
            <h3 className="font-sans font-semibold text-xl mb-2">Telemetria em Tempo Real</h3>
            <p className="text-zinc-500 text-sm mb-8">Acompanhe o status de cada disparo instantaneamente.</p>
            
            <div className="bg-black border border-white/10 rounded-xl p-4 h-48 font-mono text-xs text-whatsapp overflow-hidden relative">
              <motion.div
                animate={{ y: [0, -100] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-2"
              >
                <p>{">"} [SYS] Inicializando cluster...</p>
                <p>{">"} [NET] Conectado ao gateway WA</p>
                <p>{">"} [MSG] Disparo #492 enviado (200 OK)</p>
                <p>{">"} [MSG] Disparo #493 enviado (200 OK)</p>
                <p>{">"} [AI] Mutação de texto aplicada</p>
                <p>{">"} [MSG] Disparo #494 enviado (200 OK)</p>
                <p>{">"} [SYS] Aguardando delay randômico...</p>
                <p>{">"} [MSG] Disparo #495 enviado (200 OK)</p>
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>

          {/* Protocol Scheduler */}
          <div className="h-[400px] rounded-3xl bg-zinc-900/50 border border-white/5 p-8 relative overflow-hidden group backdrop-blur-xl">
            <h3 className="font-sans font-semibold text-xl mb-2">Agendamento Tático</h3>
            <p className="text-zinc-500 text-sm mb-8">Programe campanhas para os horários de maior conversão.</p>
            
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['D','S','T','Q','Q','S','S'].map((d, i) => (
                <div key={i} className="text-center text-[10px] text-zinc-500 font-mono">{d}</div>
              ))}
              {Array.from({length: 14}).map((_, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: '#25D366' }}
                  className={`aspect-square rounded-md border border-white/5 ${i === 8 ? 'bg-whatsapp' : 'bg-zinc-800'}`}
                />
              ))}
            </div>
            
            <motion.div 
              animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 right-12"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80" 
          alt="Abstract texture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm text-zinc-400 mb-4">A maioria foca em:</p>
          <h2 className="font-sans font-medium text-[clamp(1.5rem,3vw,2.5rem)] text-zinc-500">
            Envios manuais lentos, bloqueios constantes e perda de leads.
          </h2>
        </motion.div>

        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-whatsapp to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-sm text-whatsapp mb-4">Nós focamos em:</p>
          <h2 className="font-serif italic text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-white">
            Automação inteligente, <span className="text-whatsapp">variações com IA</span> e escala invisível.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-sans font-bold text-[clamp(2rem,4vw,3.5rem)]">
            A assimetria da <span className="text-whatsapp">Vantagem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Manual */}
          <div className="rounded-3xl border border-white/10 bg-zinc-900/30 p-8 md:p-12">
            <h3 className="font-mono text-zinc-500 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Método Tradicional
            </h3>
            <ul className="space-y-6">
              {[
                "Envio manual, um por um",
                "Risco altíssimo de banimento",
                "Mensagens idênticas (Spam flag)",
                "Sem botões interativos",
                "Horas de trabalho desperdiçadas"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-zinc-400">
                  <svg className="w-6 h-6 text-zinc-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ZapyDisparo */}
          <div className="rounded-3xl border border-whatsapp/30 bg-whatsapp/5 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-whatsapp/10 blur-[100px] rounded-full" />
            <h3 className="font-mono text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
              ZapyDisparo
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                "Disparo em massa automatizado",
                "Algoritmo Anti-Ban avançado",
                "Variações de texto geradas por IA",
                "Mensagens com botões e listas",
                "Escala infinita com zero esforço"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white">
                  <svg className="w-6 h-6 text-whatsapp shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Protocol = () => {
  return (
    <section id="protocol" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-24">
          <h2 className="font-sans font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight">
            O Protocolo <span className="text-whatsapp">Anti-Ban</span>
          </h2>
        </div>

        <div className="space-y-24">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            className="sticky top-24 h-[60vh] min-h-[400px] rounded-[2rem] bg-zinc-900 border border-white/10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden"
          >
            <div className="flex-1 z-10">
              <div className="font-mono text-xs text-whatsapp mb-4">FASE 01</div>
              <h3 className="font-serif text-4xl md:text-5xl mb-6">Inteligência Artificial</h3>
              <p className="text-zinc-400 text-lg">
                Nossa IA reescreve sua mensagem original em dezenas de variações semânticas. O WhatsApp nunca detecta um padrão de repetição, eliminando a principal causa de banimentos.
              </p>
            </div>
            <div className="flex-1 relative w-full h-full min-h-[200px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-whatsapp/20 to-transparent blur-3xl rounded-full" />
              <svg viewBox="0 0 100 100" className="w-48 h-48 animate-[spin_20s_linear_infinite]">
                <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" stroke="#25D366" strokeWidth="1" />
                <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" fill="none" stroke="#25D366" strokeWidth="0.5" strokeDasharray="4 4" />
              </svg>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            className="sticky top-32 h-[60vh] min-h-[400px] rounded-[2rem] bg-zinc-950 border border-white/10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden shadow-2xl shadow-black"
          >
            <div className="flex-1 z-10">
              <div className="font-mono text-xs text-whatsapp mb-4">FASE 02</div>
              <h3 className="font-serif text-4xl md:text-5xl mb-6">Delay Humanizado</h3>
              <p className="text-zinc-400 text-lg">
                Simulamos o comportamento humano com pausas randômicas entre os envios e digitação em tempo real. Para a rede, você é apenas uma pessoa muito rápida.
              </p>
            </div>
            <div className="flex-1 relative w-full h-full min-h-[200px] flex items-center justify-center">
              <div className="w-full h-32 flex items-center gap-2">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ['20%', '100%', '20%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                    className="flex-1 bg-whatsapp/50 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            className="sticky top-40 h-[60vh] min-h-[400px] rounded-[2rem] bg-black border border-whatsapp/30 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden shadow-2xl shadow-black"
          >
            <div className="flex-1 z-10">
              <div className="font-mono text-xs text-whatsapp mb-4">FASE 03</div>
              <h3 className="font-serif text-4xl md:text-5xl mb-6">Botões Interativos</h3>
              <p className="text-zinc-400 text-lg">
                Aumente a conversão em até 300% enviando mensagens com botões de ação nativos do WhatsApp. Respostas rápidas e links diretos com um clique.
              </p>
            </div>
            <div className="flex-1 relative w-full h-full min-h-[200px] flex items-center justify-center">
               <div className="flex flex-col gap-4 w-full max-w-xs">
                 <div className="bg-whatsapp text-black p-4 rounded-2xl rounded-tr-sm font-medium">
                   Escolha uma opção abaixo:
                 </div>
                 <div className="bg-zinc-800 text-whatsapp p-3 rounded-xl text-center border border-whatsapp/30 font-bold hover:bg-whatsapp hover:text-black transition-colors cursor-pointer">
                   Sim, eu quero!
                 </div>
                 <div className="bg-zinc-800 text-white p-3 rounded-xl text-center border border-white/10 font-bold hover:bg-zinc-700 transition-colors cursor-pointer">
                   Saber mais
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 px-6 rounded-t-[4rem] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-whatsapp/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-serif italic text-5xl md:text-7xl mb-8 text-white">Pronto para escalar?</h2>
        <a 
          href="https://wa.me/5598988556774?text=%23ZapyDisparo%20-%20Eu%20quero%20contratar" 
          target="_blank" 
          rel="noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-whatsapp rounded-full overflow-hidden mb-24"
        >
          <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative flex items-center gap-2">
            CONTRATAR AGORA
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </span>
        </a>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500 font-mono">
          <div>© 2026 ZapyDisparo. Todos os direitos reservados a eCriativos.</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
            Sistemas Operacionais
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-whatsapp selection:text-black pb-24 md:pb-0 relative">
      <BackgroundMessages />
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Comparison />
      <Protocol />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
