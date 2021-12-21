import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'
import { Helmet } from 'react-helmet'

import hearth from '../../assets/hearth.svg'
import { uiCloseModal, uiOpenModal } from '../../actions/ui'
import { TrabajosProyectosScreen } from './TrabajosProyectosScreen'
import { Footer } from '../Footer/Footer'
import { EndMenssagesTwo } from '../ui/EndMenssages'
import '../../styles/modal.css'
import { customStyles } from '../../helper/customStyles'

Modal.setAppElement('#root')

export const ProyectosScreen = () => {
  const dispatch = useDispatch()
  const { modalOpen } = useSelector(state => state.ui)

  const handleClickOpen = (e) => {
    dispatch(uiOpenModal())
  }
  const handleClickClose = (e) => {
    dispatch(uiCloseModal())
  }
  const closeModal = () => {
    dispatch(uiCloseModal())
  }

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Proyectos CMYK - FrontendCafé</title>
      </Helmet>

      <div className='w-full'>
        <div className='flex flex-col mx-auto w-9/12 md:w-8/12 my-20 pl-5'>
          <div className='flex flex-row'>
            <h1 className='font-bold text-5xl text-gray-800 mr-2'>Proyectos CMYK</h1>
            <img style={{ height: '50px' }} className='mt-1' src={hearth} />
          </div>
          <div className='flex flex-col lg:w-8/12 mt-5'>
            <p className='font-small text-lg'>Desde FrontendCafé impulsamos el desarrollo de proyectos colaborativos realizados por miembros de la comunidad con el objetivo de ganar experiencia en un entorno profesional. Aquí conocerás los diferentes proyectos que los equipos CMYK crearon y desarrollaron dentro la comunidad.</p>
          </div>
          <div className='mt-3'>
            <button
              className='font-xs text-md text-green-500 focus:outline-none'
              onClick={handleClickOpen}
            >Conocé más sobre la iniciativa
              <i class='fas fa-external-link-alt ml-1' />
            </button>
            <Modal
              isOpen={modalOpen}
              closeTimeoutMS={200}
              onRequestClose={closeModal}
              style={customStyles}
              overlayClassName='modal-fondo'
            >
              <div className='w-full'>
                <div className='text-green-500 text-3xl font-semibold border-b border-gray-300'>
                  <h1 className='p-5'>Iniciativa CMYK</h1>
                </div>
                <div className='flex flex-col w-11/12'>
                  <div className='py-5 pl-7 tracking-tight'>
                    <p className='text-sm font-normal mt-2'>✔️ La iniciativa CMYK promueve el desarrollo de proyectos colaborativos con el objetivo de ganar experiencia en un entorno profesional.</p>
                    <p className='text-sm font-normal mt-2'>✔️ Los participantes tienen acceso a un workshop de Github y acompañamiento de nuestro staff quienes estarán disponibles para contestar tus dudas y ayudarte para cumplir los objetivos.</p>
                    <p className='text-sm font-normal mt-2'>✔️ Los proyectos tienen una duración de tres semanas y la próxima inscripción será a mediados de 2021.</p>
                    <p className='text-sm font-normal mt-2'>✔️ La inscripciones se realizan dentro de Discord, si quieres participar debes ser miembro de la comunidad y prestar atención a los anuncios.</p>
                    <p className='text-sm font-normal mt-2'>✔️ La actividad es gratuita.</p>
                  </div>
                </div>
                <div className='flex justify-end border-t p-5 border-gray-300'>
                  <button
                    className='font-bold text-sm mr-5 text-green-500 focus:outline-none'
                    onClick={handleClickClose}
                  >CERRAR
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <TrabajosProyectosScreen />
        <EndMenssagesTwo />
        <Footer />
      </div>
    </>
  )
}
