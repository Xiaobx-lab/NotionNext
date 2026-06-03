const projects = [
  {
    title: 'Real-Time Financial Dialogue & Domain Knowledge Retrieval System',
    subtitle: 'Low-latency LLM interface for service robots',
    image: '/images/epowerspot-robot.png',
    imageAlt:
      'E-PowerSpot service robot showcased at the Hong Kong Autumn Electronics Fair',
    description: (
      <>
        Built a <strong>sub-500ms</strong> <strong>LLM</strong> dialogue
        interface for service robots, supporting real-time financial queries,
        market-context analysis, hot-news retrieval, and <strong>RAG</strong>{' '}
        over <strong>million-scale</strong> private-domain data. Showcased with
        an E-PowerSpot service robot at the{' '}
        <strong>2025 Hong Kong Autumn Electronics Fair</strong>.
      </>
    ),
    tech: [
      'LLM',
      'RAG',
      'Domain Knowledge Retrieval',
      'Real-Time Data',
      'Financial QA',
      'Market Analysis',
      'Service Robot'
    ]
  },
  {
    title: 'NUNA AI Emotion-Tracking Pendant',
    subtitle:
      'Multimodal emotion AI for a commercially launched wearable product',
    image: '/images/nana.jpg',
    imageAlt: 'NUNA AI emotion-tracking pendant',
    description: (
      <>
        Contributed to NUNA, a <strong>commercially launched</strong> AI
        emotion-tracking pendant, by developing multimodal emotion algorithms
        and a RAG-based QA interface. Supported the core AI interaction layer
        for emotion-aware insights and knowledge-grounded dialogue.
      </>
    ),
    links: [
      {
        label: 'Product',
        href: 'https://www.thingx.ai/pages/nuna'
      }
    ],
    tech: [
      'Multimodal AI',
      'Emotion Recognition',
      'Wearable AI',
      'RAG',
      'LLM',
      'Knowledge Retrieval',
      'Product AI'
    ]
  },
  {
    title: 'Multimodal Perception System for Service Robots',
    subtitle:
      'Speech recognition and identity-aware vision for human-robot interaction',
    image: '/images/multimodal-robot.png',
    imageAlt: 'Multimodal perception system for service robots',
    description: (
      <>
        Built multimodal perception modules for service robots, including
        Whisper-based low-resource dialect ASR and secure face registration. The
        ASR module reduced CER <strong>below 30%</strong> with{' '}
        <strong>over 90%</strong> semantic consistency, while the vision module
        added liveness, user-switch, and session-continuity checks.
      </>
    ),
    tech: [
      'Multimodal AI',
      'Whisper',
      'ASR',
      'Face Recognition',
      'Liveness Detection',
      'Service Robot',
      'Human-Robot Interaction'
    ]
  },
  {
    title: 'Single UHD Image Dehazing via Interpretable Pyramid Network',
    subtitle: '1st-author Q2 paper on interpretable image restoration',
    image: '/images/dehazeNet.png',
    imageAlt: 'Interpretable pyramid network for UHD image dehazing',
    description: (
      <>
        Published as <strong>1st author</strong> in{' '}
        <strong>Signal Processing (Q2)</strong>, proposing an interpretable
        pyramid network based on Taylor&apos;s theorem for UHD image dehazing.
        Shared weight tensors reduce model complexity and deliver a{' '}
        <strong>35% performance improvement</strong> on public datasets.
      </>
    ),
    links: [
      {
        label: 'Paper',
        href: 'https://www.sciencedirect.com/science/article/abs/pii/S0165168423002992'
      },
      {
        label: 'Code',
        href: 'https://github.com/Xiaobx-lab/LapDehaze'
      }
    ],
    tech: [
      'Image Dehazing',
      'UHD Image Restoration',
      'Interpretable AI',
      'Pyramid Network',
      'Taylor Theorem',
      'Computer Vision'
    ]
  }
]

const ProjectShowcase = () => {
  return (
    <section className='space-y-6 px-2'>
      {projects.map(project => (
        <article
          key={project.title}
          className='overflow-hidden border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray shadow-md md:min-h-[360px]'>
          <div className='grid h-full gap-0 md:grid-cols-[minmax(220px,38%)_1fr]'>
            <div className='h-56 md:h-full min-h-56 overflow-hidden bg-gray-100 dark:bg-gray-800'>
              <img
                src={project.image}
                alt={project.imageAlt}
                className='h-full w-full object-cover object-center'
              />
            </div>

            <div className='flex h-full flex-col justify-between p-6'>
              <div className='space-y-2.5'>
                <div>
                  <h2 className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>
                    {project.title}
                  </h2>
                  <p className='mt-1.5 text-base text-gray-600 dark:text-gray-300'>
                    {project.subtitle}
                  </p>
                </div>

                <p className='leading-6 text-gray-700 dark:text-gray-300'>
                  {project.description}
                </p>
              </div>

              {project.links && (
                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.links.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      className='rounded-full border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 duration-150 hover:border-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:border-gray-400 dark:hover:bg-gray-800'>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <div className='mt-5 flex flex-wrap gap-1.5'>
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
