import React from 'react'
import { Helmet } from 'react-helmet'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import validator from 'validator'

import { uiCloseModal, uiOpenModal, formRemoveError, formSetError, sendForm } from '../../actions/ui'
import { useDispatch, useSelector } from 'react-redux'
import { customStyles } from '../../helper/customStyles'
import { useForm } from '../../hooks/useForm'

import '../../styles/modal.css'

export const ReactivistasScreen = () => {
  const dispatch = useDispatch()
  const { modalOpen, msgError } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    nick: '',
    user: '',
    theme: '',
    study: '',
    meeting: '',
    studyplan: '',
    date: ''
  })
  const { nick, user, theme, study, meeting, studyplan, date } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      dispatch(sendForm(nick, user, theme, study, meeting, studyplan, date))
    }
  }
  const isFormValid = () => {
    if (validator.isEmpty(nick) && validator.isEmpty(user) && validator.isEmpty(theme) && validator.isEmpty(study) && validator.isEmpty(meeting) && validator.isEmpty(studyplan) && validator.isEmpty(date)) {
      dispatch(formSetError('Llene el formulario'))
      return false
    } else if (validator.isEmpty(nick)) {
      dispatch(formSetError('Ingrese un nombre'))
      return false
    } else if (validator.isEmpty(user)) {
      dispatch(formSetError('Ingrese un usuario de Discord'))
      return false
    } else if (validator.isEmpty(theme)) {
      dispatch(formSetError('Ingrese un tema'))
      return false
    } else if (validator.isEmpty(study)) {
      dispatch(formSetError('Ingrese el material de estudio'))
      return false
    } else if (validator.isEmpty(meeting)) {
      dispatch(formSetError('Ingrese el estilo de reuniones'))
      return false
    } else if (validator.isEmpty(studyplan)) {
      dispatch(formSetError('Ingrese un plan de estudio'))
      return false
    } else if (validator.isEmpty(date)) {
      dispatch(formSetError('Ingrese una fecha'))
    } else if (nick.trim().length >= 30) {
      dispatch(formSetError('Nombre muy largo'))
      return false
    } else if (theme.trim().length >= 35) {
      dispatch(formSetError('Tema muy largo'))
      return false
    } else if (meeting.length >= 250 && studyplan.length >= 250) {
      dispatch(formSetError('Maximo 250 caracteres'))
      return false
    }
    dispatch(formRemoveError())
    return true
  }

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
        <title>Iniciativas - FrontendCafé</title>
      </Helmet>

      <div className='w-9/12 mx-auto'>
        <div className='flex flex-col mx-auto mt-20'>
          <div className='flex flex-row'>
            <h1 className='font-bold text-5xl text-gray-800 mr-2'>Reactivistas</h1>
          </div>
          <div className='flex flex-col w-full lg:w-7/12 mt-5'>
            <p className='font-small text-lg'>Reactivistas es una iniciativa que promueve el estudio de React en grupos auto-organizados por integrantes de la comunidad.<br />
              Si participas podrás intercambiar ideas con tus pares y acceder a las Office Hours, que son reuniones con nuestro staff exponer tus dudas y realizar consultas.
            </p>
          </div>
          <div className='mt-3'>
            <Link to='/docs/guia-reactivistas'>
              <button
                className='font-xs text-md text-green-500 focus:outline-none'
              >Conocé más sobre la iniciativa
                <i class='fas fa-external-link-alt ml-1' />
              </button>
            </Link>
          </div>
          <div className='flex flex-col mt-16'>
            <h1 className='font-bold text-2xl text-black mr-2'>Súmate a los grupos que estan comenzando</h1>
          </div>
          <div className='flex flex-col mt-20'>
            <h1 className='font-bold text-2xl text-black mr-2'>Dale vida a un nuevo grupo</h1>
          </div>
          <div className='flex flex-col w-28 focus:outline-none'>
            <button
              className='flex mr-2 mt-2 justify-center text-blue-400 focus:outline-none'
              onClick={handleClickOpen}
            >Ver requisitos
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
                  <h1 className='p-5'>Requisitos para iniciar un nuevo grupo</h1>
                </div>
                <div className='flex flex-col w-11/12'>
                  <div className='py-5 pl-7 tracking-tight'>
                    <p className='text-sm font-normal mt-2'>✔️ Un nombre (puede ser cualquier nombre)</p>
                    <p className='text-sm font-normal mt-2'>✔️ Un tema y su correspondiente material de estudio (curso, libro,documentación, etc)</p>
                    <p className='text-sm font-normal mt-2'>✔️ Un representante de grupo</p>
                    <p className='text-sm font-normal mt-2'>✔️ Una definición en cuanto a la dinámica de encuentro de los participantes ( periodicidad, día, hora)</p>
                    <p className='text-sm font-normal mt-2'>✔️ Un plan, con su respectivo bosquejo, de entre 4 y 16 semanas</p>
                    <h1 className='text-lg font-semibold mt-2'>Observaciones</h1>
                    <p className='text-sm font-normal mt-2'>✔️ Un plan, con su respectivo bosquejo, de entre 4 y 16 semanas</p>
                    <p className='text-sm font-normal mt-2'>✔️ La organización de Reactivistas revisará las solicitudes y aprobará toda aquella que cuente con los requisitos solicitados.</p>
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
        <div className='flex mx-auto my-10 bg-gray-100 rounded-xl shadow-xl'>
          <form
            className='mx-auto my-6 w-11/12'
            onSubmit={handleSubmit}
          >
            {
                            msgError &&
                            (
                              <div className='flex mx-auto w-5/12 bg-gray-500 rounded-xl py-2'>
                                <h1 className='mx-auto font-medium text-md text-white'>{msgError}</h1>
                              </div>
                            )
                        }
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5 md:p-10'>
              <div className='flex flex-col mb-4'>
                <label className='font-medium text-md'>Nombre del grupo*</label>
                <input
                  autoComplete='off'
                  className='px-2 p-1 mt-1 rounded focus:outline-none'
                  placeholder='Nombre del grupo'
                  name='nick'
                  value={nick}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className='font-medium text-md'>User de Discord*</label>
                <input
                  autoComplete='off'
                  className='px-2 p-1 mt-1 rounded focus:outline-none'
                  placeholder='Ingresa tu nombre de usuario de Discord'
                  name='user'
                  value={user}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className='font-medium text-md'>Tema*</label>
                <input
                  autoComplete='off'
                  className='px-2 p-1 mt-1 rounded focus:outline-none'
                  placeholder='Ingresa el tema'
                  name='theme'
                  value={theme}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className='font-medium text-md'>Material de estudio*</label>
                <input
                  autoComplete='off'
                  className='px-2 p-1 mt-1 rounded focus:outline-none'
                  placeholder='Ingresa un link al material de estudio seleccionado'
                  name='study'
                  value={study}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className='font-medium text-md'>Estilo de reuniones*</label>
                <textarea
                  className='px-2 p-1 mt-1 rounded focus:outline-none'
                  placeholder='Ingresa la dinamica que se va a utilizar en su grupo de estudio'
                  name='meeting'
                  value={meeting}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className='font-medium text-md'>Plan de estudio*</label>
                <textarea
                  className='px-2 p-1 mt-1 rounded focus:outline-none'
                  placeholder='Nombre del grupo'
                  name='studyplan'
                  value={studyplan}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mb-4'>
                <label className='font-medium text-md'>Fecha tentativa de inicio*</label>
                <input
                  autoComplete='off'
                  type='date'
                  className='px-2 p-1 mt-1 rounded focus:outline-none'
                  placeholder='Nombre del grupo'
                  name='date'
                  value={date}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mb-4 mt-8'>
                <div className='flex justify-end'>
                  <button
                    className='bg-green-500 w-3/6 rounded-lg py-2 text-white font-semibold lg:text-lg focus:outline-none'
                  >
                                      Enviar propuesta
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
