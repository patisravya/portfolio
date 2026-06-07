import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'College Task Management System',
      description: 'Developed a role-based web application supporting Principals, HODs, Staff, and Students. The platform enables task assignment, monitoring, progress tracking, and dashboard analytics for efficient academic workflow management.',
      keyFeatures: [
        'Role-Based Authentication',
        'Task Creation & Assignment',
        'Progress Tracking',
        'Dashboard Analytics',
        'MySQL Database Integration',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: '#',
    },
    {
      title: 'Bonafide Certificate Generator',
      description: 'Developed a web-based automation system that generates bonafide certificates digitally. The application reduces manual work by enabling staff members to generate formatted certificates instantly using student records.',
      keyFeatures: [
        'Student Record Management',
        'Automated Certificate Generation',
        'Secure Data Storage',
        'Staff Dashboard',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-2xl font-bold">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
        </div>
        <div className="h-1 w-12 bg-accent rounded-full mb-12"></div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-border/30 bg-card/50 p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.keyFeatures.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/20">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
