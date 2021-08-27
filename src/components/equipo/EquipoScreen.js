import React from 'react'
import { Helmet } from "react-helmet"

import equipo1 from "../../assets/equipo/equipo1.png"
import equipo2 from "../../assets/equipo/equipo2.png"
import equipo3 from "../../assets/equipo/equipo3.png"
import equipo4 from "../../assets/equipo/equipo4.jpg"
import equipo5 from "../../assets/equipo/equipo5.jpg"
import equipo6 from "../../assets/equipo/equipo6.png"
import equipo7 from "../../assets/equipo/equipo7.png"
import equipo8 from "../../assets/equipo/equipo8.png"
import equipo9 from "../../assets/equipo/equipo9.png"
import equipo10 from "../../assets/equipo/equipo10.png"
import equipo11 from "../../assets/equipo/equipo11.png"
import equipo12 from "../../assets/equipo/equipo12.png"
import equipo13 from "../../assets/equipo/equipo13.png"
import equipo14 from "../../assets/equipo/equipo14.png"
import equipo15 from "../../assets/equipo/equipo15.png"
import equipo16 from "../../assets/equipo/equipo16.png"
import equipo17 from "../../assets/equipo/equipo17.jpg"
import equipo18 from "../../assets/equipo/equipo18.png"
import equipo19 from "../../assets/equipo/equipo19.png"
import equipo20 from "../../assets/equipo/equipo20.png"
import equipo21 from "../../assets/equipo/equipo21.png"
import equipo22 from "../../assets/equipo/equipo22.png"
import equipo23 from "../../assets/equipo/equipo23.jpg"
import equipo24 from "../../assets/equipo/equipo24.png"
import equipo25 from "../../assets/equipo/equipo25.png"
import equipo26 from "../../assets/equipo/equipo26.png"
import equipo27 from "../../assets/equipo/equipo27.jpg"
import equipo28 from "../../assets/equipo/equipo28.png"
import { Footer } from '../Footer/Footer'

export const EquipoScreen = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nuestro equipo - FrontendCafé</title>
            </Helmet>

            <div className="w-full">
                <div className="w-9/12 mx-auto mt-20">
                    <div className="flex justify-center">
                        <h1 className="font-bold text-5xl text-gray-800">Conoce nuestro equipo</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20 mt-28 mb-28">
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo1}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Francisco Peralta</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo2}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Andrés Di Croche</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo3}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Agustina Marijanovic</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo4}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Hernan Case </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo5}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Manuel Obre</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo6}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Federico Minaya</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo7}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Naryie Vásquez </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo8}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Amilcar Rey </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo9}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Javier Rodriguez</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo10}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Ramiro Olivencia</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo11}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Martin Bavio</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo12}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Anahi Gaetan </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo13}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Constanza A. </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo14}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Sebastián Córdoba</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo15}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Juan Esteban Millán</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo16}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Juan Pablo Romero</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo17}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Diego Brunetto </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo18}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Ezequiel Castellanos</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo19}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Verónica García</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo20}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Stefania Tarditi</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo21}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Julieta García </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo22}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Jonathan Hacklife</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo23}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Matías Serafini </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo24}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Juan Bilardi </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo25}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Gabriel La Torre</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo26}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Jorge Marreno </h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo27}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Sebastian Gonzales</h1>
                        </a>
                        <a className="transition duration-500 ease-in-out transform scale-100 hover:scale-110 cursor-pointer">
                            <img className="mx-auto" style={{ borderRadius: "50%", height: "125px" }} src={equipo28}></img>
                            <h1 className="flex justify-center font-medium text-gray-800 text-md mt-2">Giancarlo Brusca</h1>
                        </a>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}
