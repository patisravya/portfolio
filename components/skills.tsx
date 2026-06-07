export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python', 'JavaScript', 'PHP'],
    },
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      category: 'Backend & DB',
      skills: ['PHP', 'REST API', 'MySQL'],
    },
    {
      category: 'Concepts & Tools',
      skills: ['AI & IoT', 'Agile & Product Thinking', 'Git & Github'],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/40">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent text-2xl font-bold">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Arsenal</h2>
        </div>
        <div className="h-1 w-12 bg-accent rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex px-4 py-2 rounded-lg bg-background border border-accent/30 text-sm text-foreground hover:border-accent/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
