import React from 'react'

export const TrabajosProyectosScreen = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 md:gap-y-20 relative'>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#F06746' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo1.jpg' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>Frontend Sunrise Café</h1>
              <p className='pl-4 pb-4'>Punto de venta para una cafetería que además de rico café y pastelería, ofrece merchandising de FrontendCafé</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://cmyksunrise.web.app/?page=home' className='mb-1 mt-6 mx-2 font-semibold text-gray-900 hover:underline '>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-sunrise/' className='mx-2 font-semibold text-gray-900 hover:underline '>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mb:16' style={{ backgroundColor: '#E03B88' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo2.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-white'>Rose weather</h1>
              <p className='pl-4 pb-4 text-white'>Pronósticos de varias ciudades del mundo con una interfaz personalizada según tu geolocalización.</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm text-white'>
              <a target='blank_' href='https://roseweather.netlify.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-white'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-rose' className='mx-2 hover:underline font-semibold text-white'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#06C7C0' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo3.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>BurgerQuiz</h1>
              <p className='pl-4 pb-4'>Una deliciosa y rica web de hamburguesas ¡Ingresa y descubre la tuya!</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://burger-quiz.vercel.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/JaviCeRodriguez/BurgerQuiz' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#39C280' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo4.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>MornMeet training</h1>
              <p className='pl-4 pb-4'>Webpage para organizar grupos de entrenamiento, en los que te puedes registrar.</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://mornmeet-training.netlify.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-morning' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#008E75' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo5.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>CMYK panel</h1>
              <p className='pl-4 pb-4'>Una herramienta para gestión automatizada de los proyectos CMYK. De la comunidad para la comunidad 🤍</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://cmyk-panel-test.vercel.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-forest' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#FFD33C' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo6.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>Cripto Calculator</h1>
              <p className='pl-4 pb-4'>Calculadora de criptomonedas. ¡Haz las cuentas más rápido!</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://criptocalculator-seven.vercel.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/panchocorderos/criptocalculator' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#F28482' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo7.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>Marvel Store</h1>
              <p className='pl-4 pb-4'>Una aplicación web para comprar comics de Marvel. Podrás ingresar con tu usuario y llenar tu carrito 🦸</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://marvel-store.vercel.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-sunset' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#1E62FD' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo8.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>song𝓢hare</h1>
              <p className='pl-4 pb-4'>nicia sesión con Spotify, recomienda playlists y descubre lo que la comunidad recomienda.</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://azureapp-f72fb.web.app/login' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-azure' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#124E78' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo9.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>Night</h1>
              <p className='pl-4 pb-4'>Aplicación web para reservar entradas a eventos tanto presenciales como online.</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://cmyk-night.netlify.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-night' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#DA2FD0' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo10.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>Code In Magenta</h1>
              <p className='pl-4 pb-4'>Cursos, eventos y recursos para programadores que inician, así como para aquellos más experimentados.</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://magentateam.github.io/landingOng/public/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/magentateam/landingOng' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#242424' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo11.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>Pokedéx</h1>
              <p className='pl-4 pb-4'>¡Encuentra tu Pokémon por su tipo, debilidad, habilidad y demás datos!</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://key.vercel.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/narvmtz/PokedexFEC' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#7899D4' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo12.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>Evening tours</h1>
              <p className='pl-4 pb-4'>Proyecto web para reservar tours países. Muestra una descripción, itinerario y formulario para reservarlo.</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://evening.netlify.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-evening' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#830AA0' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo13.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>MAJAC</h1>
              <p className='pl-4 pb-4'>Un buscador de museos que están en la ciudad de Buenos Aires.</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://majac.netlify.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-grape' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#5DD0A7' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo14.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>Coffeenerd</h1>
              <p className='pl-4 pb-4'>Una web con recursos e información para la gente que inicia en IT.</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://frontendcafe.github.io/cmyk-mint/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-mint' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
        <div className='max-w-md rounded overflow-hidden flex flex-col md:mt:16' style={{ backgroundColor: '#FF9143' }}>
          <div className='flex flex-col w-full'>
            <img style={{ height: '160px' }} className='object-cover' src='/assets/trabajos/trabajo15.png' />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-3/4'>
              <h1 className='p-4 text-2xl font-semibold text-gray-900'>Tiger movies</h1>
              <p className='pl-4 pb-4'>Conoce las pelis populares y en cartelera, sus reseñas y trailers.</p>
            </div>
            <div className='flex flex-col w-1/4 h-28 border-l-2 my-auto rounded-sm border-gray-800'>
              <a target='blank_' href='https://cmyk-tiger.netlify.app/' className='mb-1 hover:underline mt-6 mx-2 font-semibold text-gray-900'>DEMO</a>
              <a target='blank_' href='https://github.com/frontendcafe/cmyk-tiger' className='mx-2 hover:underline font-semibold text-gray-900'>GITHUB</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
