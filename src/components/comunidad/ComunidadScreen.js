import React from 'react'
import { Helmet } from 'react-helmet'

import data from '../../data/data'
import { Footer } from '../Footer/Footer'

export const ComunidadScreen = () => {
  const dataComunidad = data.dataComunidad
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Comunidad - FrontendCafé</title>
      </Helmet>

      <div className='w-full'>
        <div className='w-11/12 lg:w-9/12 mx-auto mt-20 mb-20'>
          <div className='flex justify-center'>
            <h1 className='font-bold text-5xl text-gray-800'>Conoce nuestra comunidad</h1>
          </div>
          <div className='flex flex-row justify-between mt-20'>
            <h1 className='text-green-500 bg-opacity-80 text-xl font-bold'>Últimos perfiles registrados</h1>
            <a target='blank_' href='https://docs.google.com/forms/d/e/1FAIpQLSc92aZyMrav562jR4SJjK5rugbrz_LQYx00-AlDSHmWLpzvxA/viewform'><button className='text-white text-sm bg-green-500 rounded-md px-5 py-2 bg-opacity-80 focus:outline-none'>Crea tu perfil</button></a>
          </div>
          <div className='border-b border-gray-200 mt-4' />
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-20 xl:gap-y-28 mt-8'>
            {dataComunidad.map((dataC) => {
              return (
                <div
                  key={dataC.id}
                  className='px-5 py-2  shadow-xl rounded-lg'
                  style={{ height: '400px' }}
                >
                  <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-col'>
                        <img
                            style={{ borderRadius: '50%', height: '125px', width: '125px', border: '3px solid rgba(16,185,129)' }}
                            className='object-cover'
                            src={dataC.imagen}
                          >
                          </img>
                      </div>
                    <div className='flex flex-col leading-3 mt-3 md:mt-0 md:ml-3'>
                        <h1 className='text-xl font-bold text-gray-700 tracking-tighter'>{dataC.nombre}</h1>
                        <h2 className='text-md font-small tracking-tighter'>{dataC.especialidad}</h2>
                        <h2 className='mt-1 text-xs font-medium text-gray-700'><i class='fas fa-map-marker-alt mr-1 ml-1' />{dataC.pais}</h2>
                        <h2 className='mt-2 text-md font-medium tracking-tighter text-green-500'>En búsqueda activa</h2>
                        <div className='flex flex-row mt-2'>

                            <a target='_blank' href={dataC.redes.correo} style={{ height: '26px', width: '26px', borderRadius: '50%', marginRight: '5px' }} className='bg-gray-600 cursor-pointer' rel='noreferrer'>
                                <div style={{ marginLeft: '4.5px', marginTop: '4.5px' }}>
                                    <i class='fas fa-envelope text-white' />
                                  </div>
                              </a>
                            <a target='_blank' href={dataC.redes.linkedin} style={{ height: '26px', width: '26px', borderRadius: '50%', marginRight: '5px' }} className='bg-gray-600 cursor-pointer' rel='noreferrer'>
                                <div style={{ marginLeft: '5.8px', marginTop: '4.5px' }}>
                                    <i class='fab fa-linkedin text-white' />
                                  </div>
                              </a>
                            <a target='_blank' href={dataC.redes.github} style={{ height: '26px', width: '26px', borderRadius: '50%', marginRight: '5px' }} className='bg-gray-600 cursor-pointer' rel='noreferrer'>
                                <div style={{ marginLeft: '5px', marginTop: '4.5px' }}>
                                    <i class='fab fa-github text-white' />
                                  </div>
                              </a>
                            <a target='_blank' href={dataC.redes.twitter} style={{ height: '26px', width: '26px', borderRadius: '50%', marginRight: '5px' }} className='bg-gray-600 cursor-pointer' rel='noreferrer'>
                                <div style={{ marginLeft: '5px', marginTop: '4.5px' }}>
                                    <i class='fab fa-twitter text-white' />
                                  </div>
                              </a>
                            <a target='_blank' href={dataC.redes.web} style={{ height: '26px', width: '26px', borderRadius: '50%', marginRight: '5px' }} className='bg-gray-600 cursor-pointer' rel='noreferrer'>
                                <div style={{ marginLeft: '4.5px', marginTop: '4.5px' }}>
                                    <i class='fas fa-link text-white' />
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className='flex flex-grow h-2/4 mt-4'>
                    <p className='text-sm mb-5 text-gray-800 font-small '><h1>{dataC.sobremi}</h1></p>
                  </div>
                  <div className='flex flex-row space-x-3 mr-2 mb-10'>
                    {dataC.tecnologias.map(data => (
                        <button className='font-small text-xs text-gray-700 py-1 pr-1 pl-1 rounded-md focus:outline-none border border-indigo-500 hover:bg-indigo-500 hover:text-white'>{data}</button>
                      ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
