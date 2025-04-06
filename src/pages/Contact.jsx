import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <motion.div
      className='flex items-center justify-center min-h-[calc(100vh-64px)] px-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className='bg-gray-100 dark:bg-gray-900 text-black dark:text-white shadow-xl rounded-2xl p-6 border border-gray-300 dark:border-gray-700 max-w-3xl w-full'>
        <h2 className='text-4xl font-bold text-center mb-6'>Me contacter</h2>

        <p className='text-base mb-6 text-center'>
          Vous souhaitez me contacter pour une <strong>opportunité professionnelle</strong>,
          une <strong>collaboration</strong> ou un <strong>projet IT</strong> ?
          N’hésitez pas à me joindre directement :
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
          <a
            href='mailto:unvr.suleyman@gmail.com'
            className='flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition group'
          >
            <Mail className='text-blue-500 group-hover:scale-110 transition' />
            <div>
              <p className='text-white font-semibold'>Email</p>
              <p className='text-gray-300 text-sm'>unvr.suleyman@gmail.com</p>
            </div>
          </a>

          <a
            href='https://www.linkedin.com/in/suleyman-unver'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition group'
          >
            <Linkedin className='text-blue-400 group-hover:scale-110 transition' />
            <div>
              <p className='text-white font-semibold'>LinkedIn</p>
              <p className='text-gray-300 text-sm'>linkedin.com/in/suleyman-unver</p>
            </div>
          </a>
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
