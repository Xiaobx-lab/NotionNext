const projects = [
  {
    title: 'Real-Time Financial Dialogue & Domain Knowledge Retrieval System',
    subtitle: 'Low-latency LLM interface for service robots',
    image: '/images/epowerspot-robot.png',
    imageAlt:
      'E-PowerSpot service robot showcased at the Hong Kong Autumn Electronics Fair',
    description:
      'Developed a low-latency dialogue interface for service robots, keeping response time within 500ms through engineering optimization. The system supports real-time queries for stocks, cryptocurrencies, and precious metals across major global markets, and uses historical price context with LLMs to provide trend analysis and suggestions. It also integrates hot-news retrieval and RAG over million-scale private-domain data to support scenario-specific intelligent recommendations. The project was showcased with an E-PowerSpot service robot at the 2025 Hong Kong Autumn Electronics Fair.',
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
    description:
      'Contributed to NUNA, a commercially launched AI emotion-tracking pendant, focusing on multimodal emotion algorithm development and RAG-based question-answering interface design. The product is positioned as an emotion-aware wearable, translating multimodal sensing signals into user-facing emotional insights. My work supported the core AI interaction layer by combining emotion inference, product scenario understanding, and knowledge-grounded dialogue capabilities.',
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
    description:
      'Developed a customized speech-to-text system for specific dialects and low-resource languages by adapting Whisper beyond standard fine-tuning. Since the original model did not include dedicated language tokens for some target languages, I modified the token and embedding handling logic, designed language-specific representations, and trained the adapted model for niche speech recognition scenarios. The system reduced character error rate to below 30% and achieved over 90% semantic consistency on low-resource dialect tasks.',
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
      'Developed a secure face registration and recognition system for service robot scenarios, supporting user enrollment, face feature extraction, identity matching, and recognition workflows. To improve interaction safety and reliability, the system incorporated liveness detection, user-switch detection, and session-continuity checks, helping prevent spoofing, identity mismatch, and inconsistent user states during real-time human-robot interaction.',
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
