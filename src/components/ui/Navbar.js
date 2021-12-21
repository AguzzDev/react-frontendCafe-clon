import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Link
} from 'react-router-dom'
import { Squeeze as Hamburger } from 'hamburger-react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import '../../styles/index.css'

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
    <>
      <header className='hidden lg:flex w-screen p-1 shadow-md'>
        <nav className='flex items-center justify-between w-11/12 xl:w-3/4 mx-auto'>
          <div className='flex flex-row  items-center'>
            <Link to='/'>
              <img src='https://cdn.sanity.io/images/0mjeop5f/production/d9800e6d32de33d7539652677d0bfee09696428b-920x147.svg' className='h-12 p-2 text-white rounded-full' alt='Logo FrontendCafe' />
            </Link>
          </div>
          <div className='flex flex-row items-center text-sm space-x-2 lg:space-x-5'>
            <NavLink to='/mentorias' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium  text-center  hover:text-gray-800'>Mentorías</NavLink>
            <NavLink to='/ingles' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium  text-center  hover:text-gray-800'>Inglés</NavLink>
            <NavLink to='/proyectos' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium  text-center  hover:text-gray-800'>Proyectos</NavLink>
            <NavLink to='/reactivistas' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium  text-center  hover:text-gray-800'>Reactivistas</NavLink>
            <NavLink to='/eventos' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium  text-center  hover:text-gray-800'>Eventos</NavLink>
            <NavLink to='/comunidad' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium  text-center  hover:text-gray-800'>Comunidad</NavLink>
            <NavLink to='/equipo' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium  text-center  hover:text-gray-800'>Equipo</NavLink>
            <a target='_blank' className='bg-indigo-400 rounded text-white font-medium  md:w-auto hover:bg-indigo-500 py-2 pl-5 pr-5 whitespace-nowrap' style={{ transition: 'all .15s ease' }} href='https://discord.gg/frontendcafe' rel='noreferrer'>Sumate a Discord</a>
          </div>
        </nav>
      </header>

      
      {/* Mobile */}
      <header className='flex lg:hidden w-screen p-1 shadow-md'>
        <nav className='flex items-center justify-between w-11/12 xl:w-3/4 mx-auto'>
          <div className='flex flex-row  items-center'>
            <Link to='/'>
              <img src='https://cdn.sanity.io/images/0mjeop5f/production/d9800e6d32de33d7539652677d0bfee09696428b-920x147.svg' className='h-12 p-2 text-white rounded-full' alt='Logo FrontendCafe' />
            </Link>
          </div>
          <div />
        </nav>

        <Dropdown isOpen={openDropdown} toggle={handleDropdown}>
          <DropdownToggle>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </DropdownToggle>

          <DropdownMenu className='absolute top-14 left-0 w-full flex flex-col space-y-3 bg-white z-50 shadow-md pb-5 transition duration-300 ease-in-out'>
            <DropdownItem><NavLink to='/mentorias' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium text-sm  text-center  hover:text-gray-800'>Mentorías</NavLink></DropdownItem>
            <DropdownItem><NavLink to='/ingles' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium text-sm  text-center  hover:text-gray-800'>Inglés</NavLink></DropdownItem>
            <DropdownItem><NavLink to='/proyectos' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium text-sm  text-center  hover:text-gray-800'>Proyectos</NavLink></DropdownItem>
            <DropdownItem><NavLink to='/reactivistas' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium text-sm  text-center  hover:text-gray-800'>Reactivistas</NavLink></DropdownItem>
            <DropdownItem><NavLink to='/eventos' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium text-sm  text-center  hover:text-gray-800'>Eventos</NavLink></DropdownItem>
            <DropdownItem><NavLink to='/comunidad' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium text-sm  text-center  hover:text-gray-800'>Comunidad</NavLink></DropdownItem>
            <DropdownItem><NavLink to='/equipo' activeClassName='text-gray-500 font-bold' className='text-gray-500  font-medium text-sm  text-center  hover:text-gray-800'>Equipo</NavLink></DropdownItem>
            <DropdownItem><a target='_blank' className='bg-indigo-400 rounded text-white text-center font-medium text-sm hover:bg-indigo-500 py-2 pl-5 pr-5 whitespace-nowrap w-1/6 mx-auto' style={{ transition: 'all .15s ease' }} href='https://discord.gg/frontendcafe' rel='noreferrer'>Sumate a Discord</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </header>
    </>
  )
}
