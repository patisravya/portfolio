export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineering Job Simulation',
      company: 'Forage',
      period: '2026',
      responsibilities: [
        'Project Setup and Configuration',
        'Apache Kafka Integration',
        'REST API Development',
      ],
    },
    {
      role: 'Product Management Job Simulation',
      company: 'Forage',
      period: '2025',
      responsibilities: [
        'KPI Analysis and Performance Metrics',
        'Product Roadmaps and Planning',
        'Data-Driven Decision Making',
      ],
    },
    {
      role: 'Software Engineering Job Simulation',
      company: 'Forage',
      period: '2025',
      responsibilities: [
        'Software Architecture Design',
        'Programming and Unit Testing',
        'Agile Development Workflows',
      ],
    },
    {
      role: 'Data Analytics Job Simulation',
      company: 'Deloitte / Forage',
      period: '2025',
      responsibilities: [
        'Data Analysis',
        'Forensic Technology Techniques',
      ],
    },
    {
      role: 'Technology Job Simulation',
      company: 'Deloitte / Forage',
      period: '2025',
      responsibilities: [
        'Structured Coding Exercises',
        'Software Development aligned with Industry Standards',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-card/40">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-2xl font-bold">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience & Simulations</h2>
        </div>
        <div className="h-1 w-12 bg-accent rounded-full mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 pb-8 border-l border-accent/30"
            >
              <div className="absolute -left-4 -top-2 h-6 w-6 rounded-full bg-accent border-4 border-background"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground md:text-right mt-1 md:mt-0">{exp.period}</p>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
