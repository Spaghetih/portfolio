export default function Projects() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-64px)] px-6'>
      <div className='text-center max-w-3xl w-full'>
        <h2 className='text-3xl font-bold mb-4'>Projets</h2>
        <ul className='space-y-4 text-left'>
          <li className='border p-4 rounded bg-gray-800 text-white'>
            <strong>Lab Active Directory + OPNsense + Wazuh</strong>
            <p className='text-sm opacity-80'>Infrastructure de test complète avec pare-feu, SIEM, et domaine Windows pour la supervision et la gestion réseau.</p>
          </li>
          <li className='border p-4 rounded bg-gray-800 text-white'>
            <strong>Déploiement de Wazuh (Debian et CentOS)</strong>
            <p className='text-sm opacity-80'>Installation manuelle, configuration des agents, et intégration des logs réseau dans un environnement sécurisé.</p>
          </li>
          <li className='border p-4 rounded bg-gray-800 text-white'>
            <strong>Infrastructure virtuelle avec Proxmox</strong>
            <p className='text-sm opacity-80'>Mise en place d’un environnement virtualisé pour simuler différents cas d’usage IT et sécurité.</p>
          </li>
          <li className='border p-4 rounded bg-gray-800 text-white'>
            <strong>Site vitrine "S-Info"</strong>
            <p className='text-sm opacity-80'>Site React/Tailwind avec système de réservation/devis pour prestations informatiques locales.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}