import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-64px)] px-6'>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className='text-center max-w-3xl w-full'
      >
        <h2 className='text-4xl font-bold mb-4'>Suleyman UNVER</h2>
        <p className='text-lg'>Junior IT & Cybersecurity | Réseaux, Support Technique, Sécurité</p>
      </motion.div>
    </div>
  )
}
