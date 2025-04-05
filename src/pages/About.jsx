import { motion } from 'framer-motion'
import { technos } from '../data/technos'

export default function About() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-64px)] px-6'>
      <div className='text-center max-w-5xl w-full'>
        <h2 className='text-3xl font-bold mb-4 text-white'>À propos de moi</h2>

        <p className='mb-6 text-white text-lg font-medium'>
          Technicien informatique passionné par la cybersécurité, les réseaux et l’infrastructure IT. Expérience en support technique,
          mise en place de labs, et outils comme Proxmox, Wazuh, OPNsense.
        </p>

        <h3 className='text-xl font-semibold mb-4 text-white'>Technologies utilisées :</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
          {technos.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className='group bg-gray-800 dark:bg-gray-700 rounded-xl p-4 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className='h-12 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110'
              />
              <h4 className='font-semibold text-white'>{tech.name}</h4>
              <p className='text-sm text-gray-300'>{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
