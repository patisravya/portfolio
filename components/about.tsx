export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-accent text-2xl font-bold">01.</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hello! I&apos;m Pati Sravya, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I am passionate about technology, problem-solving, and building innovative software solutions.
              </p>

              <p>
                My interests include Full Stack Development, Artificial Intelligence, Web Technologies, Product Management, and Software Engineering. Through academic projects, internships, and self-learning, I have developed strong technical, analytical, and teamwork skills.
              </p>

              <p>
                I am committed to continuously learning new technologies and aspire to create impactful digital products while growing into a skilled software professional.
              </p>
            </div>
          </div>

          <div className="bg-card/60 border border-accent/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Profile Highlights</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl">👤</div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-lg font-semibold text-foreground">Fresher</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl">🎓</div>
                <div>
                  <p className="text-sm text-muted-foreground">Degree</p>
                  <p className="text-lg font-semibold text-foreground">B.Tech CSE</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl">📊</div>
                <div>
                  <p className="text-sm text-muted-foreground">CGPA</p>
                  <p className="text-lg font-semibold text-foreground">7.0/10</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl">🎯</div>
                <div>
                  <p className="text-sm text-muted-foreground">Graduation</p>
                  <p className="text-lg font-semibold text-foreground">2027</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent text-2xl">⭐</div>
                <div>
                  <p className="text-sm text-muted-foreground">Traits</p>
                  <p className="text-lg font-semibold text-foreground">Fast Learner, Team Player</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
