import React from 'react'
import Image from 'next/image';
import IMGMario from '../../IMG/Super Mario Bros O Filme.png'

function Mario() {
  return (
    <div>

        <Image 
                 src={IMGMario}
                 alt='IMG'
                 className='w-[100%] h-[500px]'
         />
      

      <h1>Em construção</h1>
    </div>
  )
}

export default Mario
