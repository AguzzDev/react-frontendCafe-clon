import React from 'react'

export const EmpiezoMentoriaScreen = () => {
  return (
    <div className='w-full pb-20 bg-blue-200 bg-opacity-50'>
      <div className='flex justify-center'>
        <div className='flex flex-col w-9/12 md:w-2/4'>
          <h1 className='flex justify-center text-2xl font-medium mt-36'>¿Por dónde empiezo? 🤔</h1>
          <p className='mt-5'>El procedimiento para sumarte a las mentorías de FrontendCafé consta de tres simples pasos, resumidos en <b>encontrar</b> tu mentor, <b>coordinar</b> un encuentro y <b>prepararte</b> para la mentoría.</p>
          <div style={{ height: '5px', width: '100px' }} className='mx-auto mt-12 bg-blue-600 rounded bg-opacity-70' />
        </div>
      </div>
      <div className='grid w-9/12 grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 md:w-10/12'>
        <div className='flex flex-col items-center justify-center transition duration-500 ease-in-out transform scale-100 cursor-pointer hover:scale-110'>
          <img style={{ height: '250px' }} src='/assets/engines-bro.svg' className='mx-auto' />
          <div className='flex flex-col mx-auto md:w-4/6'>
            <h1 className='font-medium'>Paso 1: Encontrá tu mentor 🔍👀</h1>
            <p className='text-gray-600'>El primer paso es encontrar un mentor cuyo perfil se ajuste a tus intereses y sientas que pueda ayudarte en lo que necesites.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center ml-10 mr-10 transition duration-500 ease-in-out transform scale-100 cursor-pointer hover:scale-110'>
          <img style={{ height: '250px' }} src='/assets/schedule-bro.svg' className='mx-auto' />
          <div className='flex flex-col mx-auto md:w-4/6'>
            <h1 className='mb-2 font-medium'>Paso 2: Coordiná un encuentro 📅✔️</h1>
            <p className='text-gray-600 '>Luego, deberás contactar a los mentores a través de sus agendas virtuales y reservar una fecha y hora entre las disponibles. Al concertar el encuentro, podés enviar un adelanto de las dudas que buscás resolver.</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center transition duration-500 ease-in-out transform scale-100 cursor-pointer hover:scale-110'>
          <img style={{ height: '250px' }} src='/assets/reading-bro.svg' className='mx-auto' />
          <div className='flex flex-col mx-auto md:w-4/6'>
            <h1 className='mb-2 font-medium'>Paso 3: Preparate para la mentoría 📝⏳</h1>
            <p className='text-gray-600 '>Mientras esperás que llegue la fecha acordada, podés enviar consultas a tu mentor para ayudar a prepararnos mejor y aprovechar el tiempo al máximo.<br />¡Recordá ser puntual! ⌚</p>
          </div>
        </div>
      </div>
    </div>
  )
}
