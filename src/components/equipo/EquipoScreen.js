import React from 'react'
import { Helmet } from 'react-helmet'

import { Footer } from '../Footer/Footer'
import data from '../../data/data'

export const EquipoScreen = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Nuestro equipo - FrontendCafé</title>
      </Helmet>

      <div className='w-full'>
        <div className='w-9/12 mx-auto mt-20'>
          <div className='flex justify-center'>
            <h1 className='font-bold text-5xl text-gray-800'>Conoce nuestro equipo</h1>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20 mt-28 mb-28'>
            {data.dataEquipo.map(({ nombre, imagen }) => (
              <a key={nombre} className='transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer'>
                <img className='mx-auto' style={{ borderRadius: '50%', height: '125px' }} src={imagen} />
                <h1 className='flex justify-center font-medium text-gray-800 text-md mt-2'>{nombre}</h1>
              </a>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
