import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Footer } from '../Footer/Footer'

export const codigodeconducta = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Código de conducta - FrontendCafé</title>
      </Helmet>

      <div className='sm:pt-10 pb-24 bg-indigo-100'>
        <div className='flex flex-col mx-auto w-9/12 bg-white rounded-xl shadow-xl'>
          <div className='p-5 border-b border-gray-200'>
            <h1 className='text-2xl font-semibold text-green-500'>Código de conducta</h1>
          </div>
          <div className='ml-10 mr-10 mt-6 tracking-tight'>
            <p className='text-gray-700'><b>Creemos que una comunidad es sana cuando los miembros contribuyen de una manera respetuosa, por lo tanto cuando participás en FEC debés respetar a los demás miembros de la comunidad y sus derechos.</b></p>
            <p className='text-gray-700 mt-6'>Quienes formamos parte de Frontend Café nos comprometemos a mantener un ambiente confortable y seguro para todas las personas dentro de la comunidad, independientemente de su identidad y expresión de género, orientación sexual, etnia, nacionalidad, religión (o falta de la misma), posición socioeconómica o cualquier otra característica personal.<br />Ayúdanos a crear ambientes positivos, respetando distintos puntos de vista y experiencias, aceptando las críticas constructivas, mostrando empatía hacia quienes participan de las actividades.</p>
            <div>
              <h1 className='text-2xl font-normal text-green-500 mb-5 mt-5'>Está terminantemente prohibido el acoso.</h1>
              <p className='text-gray-700'>Por acoso entendemos la comunicación ofensiva, las imágenes sexuales, el uso de lenguaje sexualizado, la intimidación deliberada, acecho, acoso fotográfico, interrupción sostenida de conversaciones, insultos, comentarios degradantes, ataques personales, chistes discriminatorios y atención sexual no deseada.<br /><b>No toleramos el comportamiento abusivo.</b></p>
            </div>
            <div>
              <h1 className='text-2xl font-normal text-green-500 mb-2 mt-5'>Otras acciones a evitar:</h1>
              <h2 className='text-gray-700 text-lg'>DISCRIMINACIÓN E INTOLERANCIA</h2>
              <ul className='text-gray-700 leading-7'>
                <li>Promocionar el odio, insultos o símbolos nacionalistas o contenido que represente dicho odio.</li>
                <li>Xenofobia, racismo, sexismo o discriminación por género, intolerancia religiosa.</li>
              </ul>
              <h2 className='text-gray-700 text-lg'>AMENAZAS</h2>
              <ul className='text-gray-700 leading-7'>
                <li>Participar, diseñar o enviar amenazas de violencia para otro usuario. TROLEO</li>
                <li>Publicar spam, ridiculizar o crear incomodidad en los foros.Usar frases, imágenes o frases sin sentido de forma excesiva para causar confusión o desconcierto en los hilos.</li>
              </ul>
              <h2 className='text-gray-700 text-lg'>VIOLENCIA Y SEXUALIDAD</h2>
              <ul className='text-gray-700 leading-7'>
                <li>Hacer referencia a actos sexuales extremos o violentos.</li>
                <li>Hacer referencia a eventos o acciones violentas.</li>
                <li>Divulgar o hacer referencia a pornografía.</li>
              </ul>
            </div>
            <div className='mt-4 text-gray-700 text-lg'>
              <h2>DUPLICACIÓN DE CUENTA, SUPLANTACIÓN DE IDENTIDAD Y/O DISTRIBUCIÓN DE INFORMACIÓN PERSONALATAQUES INFORMÁTICOS, CONTENIDO MALICIOSO O VIRUS</h2>
            </div>
            <div className='mb-10 mt-4 text-gray-700'>
              <p>Ante cualquier inconveniente, la organización está disponible para intermediar y resolver conflictos.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
