const projects = [
  {
    title: 'Real-Time Financial Dialogue Interface',
    subtitle: 'Low-latency LLM + RAG dialogue backend for service robots',
    image: '/images/bg.png',
    imageAlt: 'Real-time financial dialogue interface preview',
    description:
      'A real-time financial intelligence interface that combines retrieval, market data lookup, and dialogue orchestration for service robot scenarios.',
    highlights: [

    ],
    tech: ['LLM', 'RAG', 'Real-Time Data', 'Financial QA', 'Service Robot']
  },
  {
    title: 'Financial Intelligence Knowledge System',
    subtitle: 'Private structured knowledge base for domain-specific AI agents',
    image: '/images/bg.png',
    imageAlt: 'Financial intelligence knowledge system preview',
    description:
      'A domain knowledge system designed to support financial question answering, market context retrieval, and business-facing AI workflows.',
    highlights: [
    ],
    tech: ['Knowledge Base', 'Vector Search', 'RAG', 'Finance', 'AI Agent']
  },
  {
    title: 'Multimodal Service Robot AI Stack',
    subtitle: 'Speech, vision, and digital-human interaction for embodied AI',
    image: '/images/bg.png',
    imageAlt: 'Multimodal service robot AI stack preview',
    description:
      'An applied AI stack for service robots, covering speech recognition, face recognition, digital human interaction, and real-time dialogue.',
    highlights: [
    ],
    tech: ['Speech Recognition', 'Face Recognition', 'Digital Human', 'Robotics']
  }
]

const ProjectShowcase = () => {
  return (
    <section className='space-y-6 px-2'>
      {projects.map(project => (
        <article
          key={project.title}
          className='overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray shadow-md'>
          <div className='grid gap-0 md:grid-cols-[minmax(220px,38%)_1fr]'>
            <div className='h-56 md:h-full min-h-56 overflow-hidden bg-gray-100 dark:bg-gray-800'>
              <img
                src={project.image}
                alt={project.imageAlt}
                className='h-full w-full object-cover object-center'
              />
            </div>

            <div className='p-6'>
              <div className='space-y-3'>
                <div>
                  <h2 className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>
                    {project.title}
                  </h2>
                  <p className='mt-2 text-base text-gray-600 dark:text-gray-300'>
                    {project.subtitle}
                  </p>
                </div>

                <p className='leading-7 text-gray-700 dark:text-gray-300'>
                  {project.description}
                </p>
              </div>

              <div className='mt-6'>
                <h3 className='text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                  Highlights
                </h3>
                <ul className='mt-3 space-y-2 text-gray-700 dark:text-gray-300'>
                  {project.highlights.map(item => (
                    <li key={item} className='flex gap-3'>
                      <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-6 flex flex-wrap gap-2'>
                {project.tech.map(item => (
                  <span
                    key={item}
                    className='rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default ProjectShowcase
