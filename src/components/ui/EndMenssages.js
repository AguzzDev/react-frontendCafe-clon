import React from 'react'
import hearth from '../../assets/hearth.svg'

export const EndMenssages = () => {
  return (
    <div className='flex justify-center mx-auto w-10/12 md:w-full mt-40'>
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <h1 className='font-bold text-2xl md:text-3xl'>¿Estás listo para unirte?</h1>
          <img className='ml-2' src={hearth} />
        </div>
        <div className='flex justify-center mt-5 mb-24'>
          <a target='_blank' className='bg-indigo-400 rounded p-2 text-white font-medium pr-5 pl-5 md:w-auto hover:bg-indigo-500' href='https://discord.com/invite/frontendcafe' rel='noreferrer'>Sumate a Discord</a>
        </div>
      </div>
    </div>
  )
}
export const EndMenssagesTwo = () => {
  return (
    <div className='flex justify-center mx-auto w-10/12 md:w-full mt-40'>
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <h1 className='font-bold text-2xl md:text-3xl'>El siguiente puede ser el tuyo</h1>
          <img className='ml-2' src={hearth} />
        </div>
        <div className='flex justify-center mt-5 mb-24'>
          <a target='_blank' className='bg-indigo-400 rounded p-2 text-white font-medium pr-5 pl-5 md:w-auto hover:bg-indigo-500' href='https://discord.com/invite/frontendcafe' rel='noreferrer'>Sumate a Discord</a>
        </div>
      </div>
    </div>
  )
}
