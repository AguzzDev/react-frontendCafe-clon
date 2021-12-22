import React from 'react'
import { Helmet } from 'react-helmet'

import { Footer } from '../Footer/Footer'
export const EventosScreen = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Eventos - FrontendCafé</title>
      </Helmet>

      <div className='w-full'>
        <div className='flex flex-col mx-auto w-9/12 mt-12'>
          <div>
            <h1 className='text-4xl font-bold text-gray-800'>Próximos eventos 📅</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-20 xl:gap-y-28 mt-8'>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/imageneseventos1.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Grupo de estudio</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>Dev Tools study group</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Jun 8 - 19:00</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Nos enfocamos en las principales herramientas para la organización y puesta en marcha de proyectos tecnológicos.<br />Entre ellas git, git-flow, docker, deploys, testing, entre otras.</p>
                <button className='mb-4 mt-4 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-indigo-500 hover:bg-indigo-600'>Añadir a mi calendario</button>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/imageneseventos2.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Grupo de estudio</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>Coffice Hours</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Jun 9 - 18:00</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Sesiones de consulta y debate relacionadas con el desarrollo de software en general, pero enfocadas principalmente hacia los estándares web y frameworks de JS.</p>
                <button className='mb-4 mt-10 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-indigo-500 hover:bg-indigo-600'>Añadir a mi calendario</button>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/imageneseventos3.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Grupo de estudio</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>Interview Prep study group</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Jun 10 - 18:30</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Hacemos un challenge de código cada 15 días y ponemos en común nuestras dudas y soluciones. Utilizamos sitios como Hackerrank, Codewars y Testdome.</p>
                <button className='mb-4 mt-10 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-indigo-500 hover:bg-indigo-600'>Añadir a mi calendario</button>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/imageneseventos4.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Grupo de estudio</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>PHP study group</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Jun 10 - 19:00</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Grupo de estudio de PHP, donde exploramos la buenas prácticas, patrones de diseño, frameworks, proponemos retos y proyectos para ser desarrollados entre los participantes.</p>
                <button className='mb-4 mt-4 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-indigo-500 hover:bg-indigo-600'>Añadir a mi calendario</button>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/imageneseventos5.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Grupo de estudio</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>Py study group</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Jun 11 - 19:00</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Grupo de estudio de lenguaje Python. Realizamos actividades variadas para desarrollo, que pueden ser: web, desktop, algoritmos y demás.</p>
                <button className='mb-4 mt-4 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-indigo-500 hover:bg-indigo-600'>Añadir a mi calendario</button>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/imageneseventos6.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Grupo de estudio</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>JS study group</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Jun 14 - 19:00</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Cada 15 días elegimos un desafío para resolver. Durante la semana intercambiamos dudas por escrito y los lunes nos reunimos en una llamada para compartir los resultados.</p>
                <button className='mb-4 mt-4 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-indigo-500 hover:bg-indigo-600'>Añadir a mi calendario</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-20'>
            <h1 className='text-4xl font-bold text-gray-800'>Revive nuestros eventos ⏯️</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-20 xl:gap-y-28 mt-8'>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/grabacion1.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Encuentros</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>Presentación CMYK 3.0</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>May 7 - 00:00</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Presentación de proyectos colaborativos realizados por miembros de la comunidad con el objetivo de ganar experiencia en un entorno profesional.</p>
                <a target='blank_' href='https://www.youtube.com/watch?v=5Ykdu-njQwM&t=1s'><button className='mb-4 mt-8 text-white font-small p-1 pr-5 pl-5 rounded focus:outline-none bg-pink-500 hover:bg-pink-600'>Ver grabación</button></a>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/grabacion2.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Encuentros</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>Shit happens</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Oct 28 - 18:30</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Charla con Martín Bavio (@marbiano) sobre procesos de búsqueda para grandes compañías, y cómo enfrentar un NO como respuesta.</p>
                <a target='blank_' href='https://www.youtube.com/watch?v=c-xgJID8MtU&feature=youtu.be'><button className='mb-4 mt-8 text-white font-small p-1 pr-5 pl-5 rounded focus:outline-none bg-pink-500 hover:bg-pink-600'>Ver grabación</button></a>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/grabacion3.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Encuentros</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>IT Recruiters & Beers</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Oct 19 - 18:30</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Sesión de preguntas y respuestas con Paula Levy (@paurrhh) y Alan Gosiker (@alangosiker), dos selectores de personal especializados en tecnología.</p>
                <a target='blank_' href='https://www.youtube.com/watch?v=QY7HsFq5wVY'><button className='mb-4 mt-8 text-white font-small p-1 pr-5 pl-5 rounded focus:outline-none bg-pink-500 hover:bg-pink-600'>Ver grabación</button></a>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/grabacion4.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Encuentros</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>Chilling with Florin Pop</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Sep 27 - 14:00</h3>
                <p className='text-md mb-5 text-gray-900 font-small'><b>English listening practice.</b> We shared coffee with Florin Pop and chatted about his career, and different topics related to the tech industry around the world.</p>
                <a target='blank_' href='https://www.youtube.com/watch?v=ru0dyksGl1U&feature=youtu.be'><button className='mb-4 mt-8 text-white font-small p-1 pr-5 pl-5 rounded focus:outline-none bg-pink-500 hover:bg-pink-600'>Ver grabación</button></a>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg'>
              <img style={{ width: '500px' }} src='/assets/grabacion5.png' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Encuentros</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>After de emigrantes</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Sep 25 - 18:30</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>Pat Ferraggi, Full Stack Developer argentino radicado en Bélgica nos contó sobre su experiencia emigrando y su visión respecto a la industria del desarrollo en Europa. ✈️</p>
                <a target='blank_' href='https://www.youtube.com/watch?v=ZmQwgCmN_BU&feature=youtu.be'><button className='mb-4 mt-8 text-white font-small p-1 pr-5 pl-5 rounded focus:outline-none bg-pink-500 hover:bg-pink-600'>Ver grabación</button></a>
              </div>
            </div>
            <div className='rounded overflow-hidden flex flex-col md:mt:16 shadow-lg mb-28'>
              <img style={{ width: '500px' }} src='/assets/grabacion6.jpg' />
              <div className='p-5'>
                <h3 className='text-xs tracking-wide text-green-500'>Encuentros</h3>
                <h1 className='mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 '>¿Por qué y cómo diseñar la recolección de datos?</h1>
                <h3 className='mb-2 mt-2 ml-1 text-md font-small text-gray-600'>Aug 27 - 20:30</h3>
                <p className='text-md mb-5 text-gray-900 font-small'>#FECSession donde <a target='_blank' className='text-green-500 underline' href='https://twitter.com/LazioB' rel='noreferrer'>Ezequiel Boehler</a> nos cuenta por qué está bueno diseñar la recolección de datos desde el comienzo del desarrollo de un producto web y cómo podemos arrancar.</p>
                <a target='blank_' href='https://www.youtube.com/watch?v=iemntvomOXI'><button className='mb-4 mt-1 text-white font-small p-1 pr-5 pl-5 rounded focus:outline-none bg-pink-500 hover:bg-pink-600'>Ver grabación</button></a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
