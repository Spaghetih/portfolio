export default function Certifications() {
  const certifications = [
    {
      logo: '/logos/tryhackme.png',
      title: 'TryHackMe – Pre Security',
      date: 'Janvier 2025',
      desc: 'Bases de la cybersécurité, réseaux, OSI, Linux, Windows, attaques web.',
      link: '/certificats/tryhackme.pdf'
    },
    {
      logo: '/logos/cisco.png',
      title: 'Cisco – Introduction à la Cybersécurité',
      date: 'Avril 2025',
      desc: 'Menaces, attaques courantes, protection réseau, principes fondamentaux.',
      link: '/certificats/cisco-cybersecurite.pdf'
    },
    {
      logo: '/logos/cisco.png',
      title: 'Cisco – Équipements réseau et Configuration de base',
      date: 'Mars 2025',
      desc: 'Commutation, adressage IP, configuration initiale d’équipements.',
      link: '/certificats/cisco-equipements.pdf'
    },
    {
      logo: '/logos/cisco.png',
      title: 'Cisco – Notions de base sur les réseaux',
      date: 'Mars 2025',
      desc: 'OSI, modèles de communication, concepts fondamentaux de réseau.',
      link: '/certificats/cisco-reseaux.pdf'
    },
    {
      logo: '/logos/cisco.png',
      title: 'Cisco – Les bases du matériel informatique',
      date: 'Mars 2025',
      desc: 'Architecture PC, composants, maintenance, support matériel.',
      link: '/certificats/cisco-hardware.pdf'
    },
    {
      logo: '/logos/cisco.png',
      title: 'Cisco – Examen Network Technician Career Path',
      date: 'Mars 2025',
      desc: 'Validation des connaissances réseau fondamentales et matérielles.',
      link: '/certificats/cisco-examen.pdf'
    }
  ]

  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-64px)] px-6'>
      <div className='max-w-4xl w-full'>
        <h2 className='text-3xl font-bold mb-8 text-center text-white'>Certifications</h2>
        <div className='grid sm:grid-cols-2 gap-6'>
          {certifications.map((cert, i) => (
            <div key={i} className='bg-gray-800 border border-gray-700 rounded-xl p-5 flex items-start gap-4 shadow hover:shadow-lg transition-shadow'>
              <img src={cert.logo} alt='Logo' className='h-14 w-14 object-contain' />
              <div>
                <h3 className='text-white font-semibold text-lg'>{cert.title}</h3>
                <p className='text-gray-400 text-sm italic mb-1'>{cert.date}</p>
                <p className='text-gray-300 text-sm mb-2'>{cert.desc}</p>
                <a
                  href={cert.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition'
                >
                  Voir le certificat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
