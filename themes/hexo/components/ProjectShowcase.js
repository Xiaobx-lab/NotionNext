const projects = [
  {
    title: 'Real-Time Financial Dialogue & Domain Knowledge Retrieval System',
    subtitle: 'Low-latency LLM interface for service robots',
    image: '/images/epowerspot-robot.png',
    imageAlt:
      'E-PowerSpot service robot showcased at the Hong Kong Autumn Electronics Fair',
    description: (
      <>
        Built a <strong>sub-500ms</strong> LLM dialogue interface for service
        robots, supporting real-time financial queries, market-context analysis,
        hot-news retrieval, and RAG over <strong>million-scale</strong>{' '}
        private-domain data. Showcased with an E-PowerSpot service robot at the{' '}
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
    title: 'Whisper Adaptation for Low-Resource Dialect ASR',
    subtitle:
      'Language-token and embedding customization for niche speech recognition',
    image: '/images/bg.png',
    imageAlt: 'Customized ASR system for low-resource dialects',
    description: (
      <>
        Adapted Whisper for low-resource dialect ASR by customizing
        language-token and embedding handling beyond standard fine-tuning.
        Reduced character error rate <strong>below 30%</strong> and achieved{' '}
        <strong>over 90%</strong> semantic consistency in niche speech
        scenarios.
      </>
    ),
    tech: [
      'Whisper',
      'ASR',
      'Speech Recognition',
      'Language Token Design',
      'Embedding Customization',
      'Model Adaptation',
      'Low-Resource Language'
    ]
  },
  {
    title: 'Secure Face Registration & Recognition System for Service Robots',
    subtitle: 'Identity verification with liveness and session-consistency checks',
    image: '/images/bg.png',
    imageAlt: 'Secure face registration and recognition system for service robots',
    description:
      'Developed a face registration and recognition system for service robots, covering user enrollment, feature extraction, and identity matching. Added liveness, user-switch, and session-continuity checks to improve interaction safety.',
    tech: [
      'Face Recognition',
      'Computer Vision',
      'Liveness Detection',
      'Identity Verification',
      'Session Consistency',
      'Service Robot'
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
