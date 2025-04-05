import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div 
      className='flex items-center justify-center min-h-[calc(100vh-64px)] px-6'
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
    >
      <div className='bg-gray-100 dark:bg-gray-900 text-black dark:text-white shadow-xl rounded-2xl p-6 border border-gray-300 dark:border-gray-700 max-w-3xl w-full'>
        <h2 className='text-4xl font-bold text-center mb-6'>Me contacter</h2>
        <p className='text-base mb-4'>Vous souhaitez me contacter pour une <strong>opportunité professionnelle</strong>, une <strong>collaboration</strong> ou un <strong>projet IT</strong> ? N’hésitez pas à me joindre directement via les moyens suivants :</p>
        <div className='space-y-3 text-base'>
          <div>
            <span className='font-semibold'>Email :</span>{' '}
            <a href='mailto:unvr.suleyman@gmail.com' className='text-blue-600 underline'>
              unvr.suleyman@gmail.com
            </a>
          </div>
          <div>
            <span className='font-semibold'>LinkedIn :</span>{' '}
            <a
              href='https://www.linkedin.com/in/suleyman-unver'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline'
            >
              linkedin.com/in/suleyman-unver
            </a>
          </div>
        </div>
        <div className='mt-6 text-center'>
          <a
            href='/Suleyman_UNVER_CV.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all duration-200'
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </motion.div>
  )
}
