import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-custom/5 via-transparent to-secondary-custom/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high-custom border border-outline-variant-custom/50">
            <div className="w-2 h-2 rounded-full bg-primary-custom animate-pulse"></div>
            <span className="text-xs font-label uppercase tracking-widest text-primary-custom">Available for new projects</span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface-custom leading-[1.1]">
            Emanuel <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-custom via-secondary-custom to-tertiary-custom">Santana</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-on-surface-variant-custom max-w-xl font-light leading-relaxed">
           Fullstack Engineer with 10+ years of experience building scalable systems and AI-driven solutions, combining React, Node.js, Go, and Java with RAG, LLMs, and orchestration to solve real business problems.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-br from-primary-custom to-primary-dim-custom text-on-primary-custom px-8 py-4 rounded-full font-headline font-bold text-lg shadow-lg shadow-primary-custom/20 hover:scale-105 transition-transform">
              Download Resume
            </button>
            <button className="px-8 py-4 rounded-full font-headline font-bold text-lg border border-outline-variant-custom hover:bg-surface-container-high-custom transition-colors text-on-surface-custom">
              View My Work
            </button>
          </div>
        </div>
        
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-custom to-secondary-custom rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-outline-variant-custom/30 p-4 overflow-hidden bg-[#0d1320]/60 backdrop-blur-xl">
              <Image
                src="https://storage.rxresu.me/clp9fy7vb98iw9huni1lrshme/pictures/clp9fy7vb98iw9huni1lrshme.jpg"
                alt="Emanuel Santana Portrait"
                fill
                className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-surface-container-highest-custom p-4 rounded-2xl border border-outline-variant-custom/30 shadow-xl">
              <svg className="text-primary-custom text-4xl" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
