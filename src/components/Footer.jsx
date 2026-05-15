export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Satish Paidikondala. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
