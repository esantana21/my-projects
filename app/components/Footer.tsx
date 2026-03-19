export function Footer() {
  return (
    <footer className="w-full bg-surface-custom border-t border-outline-custom/15 font-headline text-[10px] tracking-[0.1em] uppercase">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full py-12 px-8 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <div className="text-primary-custom font-bold text-base mb-1">EMANUEL SANTANA</div>
          <p className="text-on-surface-variant-custom opacity-80">© 2024 EMANUEL SANTANA // MIDNIGHT PROTOCOL</p>
        </div>
        
        <div className="flex gap-10">
          <a className="text-on-surface-variant-custom hover:text-primary-custom transition-opacity opacity-80 hover:opacity-100" href="https://github.com/esantana21" target="_blank" rel="noopener noreferrer">Github</a>
          <a className="text-on-surface-variant-custom hover:text-primary-custom transition-opacity opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/esantana21/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-on-surface-variant-custom hover:text-primary-custom transition-opacity opacity-80 hover:opacity-100" href="https://github.com/esantana21/my-projects" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </footer>
  );
}
