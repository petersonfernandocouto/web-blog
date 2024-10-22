import React from 'react'
import Image from 'next/image'
import RedDead from '../IMG/Redeadimg.jpg'

const HomePage = () => {
  return (
    <div>
      <a href='#'>
        <Image 
          src={RedDead} 
          alt='RedDead2' 
          style={{ height: 'auto', maxHeight: '450px' }} // Ajuste a altura máxima
          className='object-cover' // Use object-cover para manter a proporção
        />
      </a>
    </div>
  )
}

export default HomePage
