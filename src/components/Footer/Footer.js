import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className='hidden sm:flex bg-black'>
        <div className='mx-auto md:w-5/6 lg:w-3/4'>
          <div className='flex flex-col p-8 md:p-16  text-white'>
            <div className='w-2/4'><img className='h-12' style={{ borderRadius: '50%' }} src='/assets/logo-square.png' /></div>
            <div className='flex space-x-5 justify-between mt-5 font-medium w-full'>
              <div>
                <h1>Unete a Discord</h1>
                <h2>Mentorias</h2>
              </div>
              <div>
                <h2>Proyectos CMYK</h2>
                <h2>Practicas de ingles</h2>
              </div>
              <div className='flex flex-col'>
                <h1 className='mb-2 font-medium'>Encuéntranos en</h1>
                <div className='flex flex-row'>
                  <a target='_blank' className='w-6 h-6' href='https://twitter.com/FrontEndCafe' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='twitter' class='svg-inline--fa fa-twitter fa-w-16 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' /></svg></a>
                  <a target='_blank' className='w-6 h-6 ml-3' href='https://github.com/frontendcafe' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='github-alt' class='svg-inline--fa fa-github-alt fa-w-15 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 512'><path fill='currentColor' d='M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z' /></svg></a>
                  <a target='_blank' className='w-6 h-6 ml-3' href='https://www.youtube.com/channel/UCUdXQMrVjrMMWG5NOZFpHqQ' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='youtube' class='svg-inline--fa fa-youtube fa-w-18 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path fill='currentColor' d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' /></svg></a>
                  <a target='_blank' className='w-6 h-6 ml-3' href='https://www.linkedin.com/company/frontendcafe/' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='linkedin' class='svg-inline--fa fa-linkedin fa-w-14 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' /></svg></a>
                  <a target='_blank' className='w-6 h-6 ml-3' href='https://www.twitch.tv/frontendcafe' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='twitch' class='svg-inline--fa fa-twitch fa-w-16 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z' /></svg></a>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center mt-8 text-white'>
              <h2 className='text-sm'>© FrontendCafe2021</h2>
              <img className='hidden sm:flex' src='/assets/vercel.svg' alt='Powered by Vercel' />
            </div>
          </div>
        </div>
      </footer>
      {/* Mobile */}
      <footer className='flex sm:hidden bg-black'>
        <div className='mx-auto w-full md:w-3/4'>
          <div className='flex p-8 md:p-16 justify-between text-white flex-col md:flex-row'>
            <div>
              <img className='h-12' style={{ borderRadius: '50%' }} src='/assets/logo-square.png' />
              <div className='flex flex-col sm:flex-row justify-between mt-5'>
                <div className='flex flex-col space-y-2 font-medium'>
                  <h1>Unete a Discord</h1>
                  <h2>Mentorias</h2>
                  <h2>Proyectos CMYK</h2>
                  <h2>Practicas de ingles</h2>
                </div>
              </div>
              <div className='flex flex-col'>
                <h1 className='mt-5 mb-2 font-medium'>Encuéntranos en</h1>
                <div className='flex flex-row'>
                  <a target='_blank' className='w-6 h-6' href='https://twitter.com/FrontEndCafe' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='twitter' class='svg-inline--fa fa-twitter fa-w-16 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' /></svg></a>
                  <a target='_blank' className='w-6 h-6 ml-3' href='https://github.com/frontendcafe' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='github-alt' class='svg-inline--fa fa-github-alt fa-w-15 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 512'><path fill='currentColor' d='M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z' /></svg></a>
                  <a target='_blank' className='w-6 h-6 ml-3' href='https://www.youtube.com/channel/UCUdXQMrVjrMMWG5NOZFpHqQ' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='youtube' class='svg-inline--fa fa-youtube fa-w-18 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path fill='currentColor' d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' /></svg></a>
                  <a target='_blank' className='w-6 h-6 ml-3' href='https://www.linkedin.com/company/frontendcafe/' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='linkedin' class='svg-inline--fa fa-linkedin fa-w-14 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' /></svg></a>
                  <a target='_blank' className='w-6 h-6 ml-3' href='https://www.twitch.tv/frontendcafe' rel='noreferrer'><svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='twitch' class='svg-inline--fa fa-twitch fa-w-16 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z' /></svg></a>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center mt-8 text-white'>
              <h2 className='text-sm'>© FrontendCafe2021</h2>
              <img className='hidden sm:flex' src='/assets/vercel.svg' alt='Powered by Vercel' />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
