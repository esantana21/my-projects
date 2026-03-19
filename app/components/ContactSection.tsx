export function ContactSection() {
  return (
    <section className="py-24 bg-surface-container-low-custom relative overflow-hidden" id="contact">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-custom/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary-custom/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 text-on-surface-custom">
          Ready to Build Something <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-custom to-secondary-custom">Extraordinary?</span>
        </h2>
        
        <p className="text-on-surface-variant-custom text-lg mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        
        <div className="bg-[#0d1320]/60 backdrop-blur-xl p-1 rounded-[2.5rem] inline-flex mb-12">
          <div className="bg-surface-container-high-custom px-10 py-6 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 border border-outline-variant-custom/20">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant-custom mb-1">Email Me</span>
              <a className="text-xl md:text-2xl font-headline font-bold text-on-surface-custom hover:text-primary-custom transition-colors" href="mailto:emanuelsantana50@gmail.com">
                emanuelsantana50@gmail.com
              </a>
            </div>
            
            <div className="w-px h-12 bg-outline-variant-custom/30 hidden md:block"></div>
            
            <div className="flex flex-col items-center md:items-start">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant-custom mb-1">Location</span>
              <span className="text-xl font-headline font-bold text-on-surface-custom">Dominican Republic</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-6">
          <a className="w-12 h-12 rounded-full border border-outline-variant-custom/30 flex items-center justify-center text-on-surface-custom hover:bg-primary-custom hover:text-on-primary-custom transition-all hover:scale-110" href="#">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a className="w-12 h-12 rounded-full border border-outline-variant-custom/30 flex items-center justify-center text-on-surface-custom hover:bg-primary-custom hover:text-on-primary-custom transition-all hover:scale-110" href="#">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          </a>
          <a className="w-12 h-12 rounded-full border border-outline-variant-custom/30 flex items-center justify-center text-on-surface-custom hover:bg-primary-custom hover:text-on-primary-custom transition-all hover:scale-110" href="#">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
