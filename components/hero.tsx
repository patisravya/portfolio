import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card/20 py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hello, I&apos;m <span className="text-accent">Pati Sravya</span>
          </h1>
          
          <p className="text-balance text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Artificial Intelligence & Machine Learning undergraduate passionate about Full Stack Development, Software Engineering, and building technology solutions that solve real-world problems. Focused on creating scalable web applications, exploring AI innovations, and continuously learning emerging technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-accent/30 text-foreground hover:border-accent/60 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground mb-4">Featured Technologies</p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'JavaScript', 'PHP', 'HTML5', 'CSS3', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex px-3 py-1.5 rounded-full bg-card border border-border/30 text-sm text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
