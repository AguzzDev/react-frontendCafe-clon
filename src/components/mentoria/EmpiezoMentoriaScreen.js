import React from 'react'

import empezar1 from '../../assets/engines-bro.svg'
import empezar2 from '../../assets/schedule-bro.svg'
import empezar3 from '../../assets/reading-bro.svg'

export const EmpiezoMentoriaScreen = () => {
  return (
    <div className='w-full bg-blue-200 bg-opacity-50 pb-20'>
      <div className='flex justify-center'>
        <div className='flex flex-col w-9/12 md:w-2/4'>
          <h1 className='flex justify-center text-2xl font-medium mt-36'>¿Por dónde empiezo? 🤔</h1>
          <p className='mt-5'>El procedimiento para sumarte a las mentorías de FrontendCafé consta de tres simples pasos, resumidos en <b>encontrar</b> tu mentor, <b>coordinar</b> un encuentro y <b>prepararte</b> para la mentoría.</p>
          <div style={{ height: '5px', width: '100px' }} className='mt-12 mx-auto rounded bg-blue-600 bg-opacity-70' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-9/12 md:w-10/12 mx-auto'>
        <div className='flex flex-col items-center justify-center transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer'>
          <img style={{ height: '250px' }} src={empezar2} className='mx-auto' src={empezar1} />
          <div className='flex flex-col md:w-4/6 mx-auto'>
            <h1 className='font-medium'>Paso 1: Encontrá tu mentor 🔍👀</h1>
            <p className='text-gray-600'>El primer paso es encontrar un mentor cuyo perfil se ajuste a tus intereses y sientas que pueda ayudarte en lo que necesites.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer mr-10 ml-10'>
          <img style={{ height: '250px' }} src={empezar2} className='mx-auto' />
          <div className='flex flex-col md:w-4/6 mx-auto'>
            <h1 className='font-medium mb-2'>Paso 2: Coordiná un encuentro 📅✔️</h1>
            <p className='text-gray-600 '>Luego, deberás contactar a los mentores a través de sus agendas virtuales y reservar una fecha y hora entre las disponibles. Al concertar el encuentro, podés enviar un adelanto de las dudas que buscás resolver.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer'>
          <img style={{ height: '250px' }} src={empezar2} className='mx-auto' src={empezar3} />
          <div className='flex flex-col md:w-4/6 mx-auto'>
            <h1 className='font-medium mb-2'>Paso 3: Preparate para la mentoría 📝⏳</h1>
            <p className='text-gray-600 '>Mientras esperás que llegue la fecha acordada, podés enviar consultas a tu mentor para ayudar a prepararnos mejor y aprovechar el tiempo al máximo.<br />¡Recordá ser puntual! ⌚</p>
          </div>
        </div>
      </div>
    </div>
  )
}
