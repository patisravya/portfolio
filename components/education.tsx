export default function Education() {
  const educationList = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Sumathi Reddy Institute of Technology for Women',
      period: '2023 - 2027',
      details: 'CGPA: 7.0 / 10',
      icon: '🎓',
    },
    {
      degree: 'Intermediate',
      institution: 'Pre-University Education',
      period: '',
      details: 'Score: 85.1%',
      icon: '📚',
    },
  ]

  const strengths = [
    'Analytical Thinking',
    'Problem Solving',
    'Fast Learning',
    'Communication',
    'Team Collaboration',
    'Accountability',
  ]

  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-2xl font-bold">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
        </div>
        <div className="h-1 w-12 bg-accent rounded-full mb-12"></div>

        <div className="space-y-8 mb-16">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative pl-8 pb-8 border-l border-accent/30">
              <div className="absolute -left-4 -top-2 h-6 w-6 rounded-full bg-accent border-4 border-background"></div>

              <div className="flex items-start gap-4 mb-3">
                <div className="text-2xl">{edu.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-accent font-medium">{edu.institution}</p>
                  {edu.period && <p className="text-sm text-muted-foreground">{edu.period}</p>}
                  <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-accent/30 pt-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-accent text-2xl font-bold">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Strengths</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-accent flex-shrink-0"></div>
                <span className="text-foreground font-medium">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
