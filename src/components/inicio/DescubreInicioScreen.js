import React from 'react'
import { Link } from "react-router-dom"

export const DescubreInicioScreen = () => {
    return (
        <>
            <div className="hidden md:flex flex-col mb-12 items-center justify-center md:mt-28">
                <div className="flex flex-col items-center md:text-center  w-10/12">
                    <h1 className="mb-8 text-gray-800 font-bold text-4xl md:text-5xl">¡Descubre lo que tenemos para ti!</h1>
                    <h2 className="text-left md:text-lg leading-relaxed text-gray-900 sm:w-5/6 mb-10 md:mb-0">En FrontendCafé con la participación de la comunidad creamos diferentes actividades para mejorar nuestras habilidades tanto profesionales como comunidad.</h2>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:my-24 md:w-5/6 space-y-4 md:space-y-0 md:space-x-5 w-full">

                    <div className="flex-col w-11/12 sm:w-5/6 shadow-xl rounded-3xl bg-white mx-auto" style={{ height: "550px" }}>
                        <div className="flex items-center" style={{ height: "20%" }}>
                            <div style={{ height: "80px", width: "8px" }} className="bg-blue-600 rounded-sm"> </div>
                            <div className="flex items-center">
                                <span className="text-3xl mx-2">📘</span>
                                <h1 className="mb-4 w-6/6 text-left text-gray-800 font-bold md:text-4xl text-2xl">Mentorias</h1>
                            </div>
                        </div>
                        <div className="p-5 h-full">
                            <div style={{ height: "60%" }}>
                                <p className="ml-2 leading-7 text-gray-900 font-small">Conectate con profesionales y  referentes capacitados en los multiples y diversos temas que engloba el universo de la tecnologia de la informacion, para guiarte en este desafiante camino, no tiene costo alguno, solo ganas de aprender y muy buena onda.</p>
                            </div>
                            <div style={{ height: "20%" }}>
                                <Link to="/mentorias">
                                    <button className="mt-5 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-blue-600">Quiero participar</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col w-11/12 sm:w-5/6 shadow-xl rounded-3xl bg-white mx-auto" style={{ height: "550px" }}>
                        <div className="flex items-center" style={{ height: "20%" }}>
                            <div style={{ height: "80px", width: "8px" }} className="bg-pink-600 rounded-sm"> </div>
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mx-2">🌎</span>
                                <h1 className="text-left text-gray-800 font-bold md:text-4xl text-2xl">Practica de ingles</h1>
                            </div>
                        </div>
                        <div className="p-5 h-full">
                            <div style={{ height: "60%" }}>
                                <p className="ml-2 leading-7 text-gray-900 font-small">Nos divertimos charlando con el objetivo de perder el miedo a hablar en ingles en Publico.<br />Mejorando la comunicacion y la confianza, divirtiendonos y conectandonos.</p>
                            </div>
                            <div style={{ height: "20%" }}>
                                <Link to="/ingles">
                                    <button className="mt-5 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-pink-600">Proximos eventos</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col w-11/12 sm:w-5/6 shadow-xl rounded-3xl bg-white mx-auto" style={{ height: "550px" }}>
                        <div className="flex items-center" style={{ height: "20%" }}>
                            <div style={{ height: "80px", width: "8px" }} className="bg-green-600 rounded-sm"> </div>
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mx-2">✨</span>
                                <h1 className="text-left text-gray-800 font-bold md:text-4xl text-2xl">Proyectos CMYK</h1>
                            </div>
                        </div>
                        <div className="p-5 h-full">
                            <div style={{ height: "60%" }}>
                                <p className="ml-2 leading-7 text-gray-900 font-small">Proyectos colaborativos realizados por miembros de FrontendCafe con el objetivo de ganar experiencia en un entorno profesional.</p>
                            </div>
                            <div style={{ height: "20%" }}>
                                <Link to="/proyectos">
                                    <button className="mt-5 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-green-600">Conocelos aqui</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Mobile */}
            <div className="flex md:hidden flex-col mb-12 items-center justify-center md:mt-28">
                <div className="flex flex-col items-center md:text-center  w-10/12">
                    <h1 className="mb-8 text-gray-800 font-bold text-4xl md:text-5xl">¡Descubre lo que tenemos para ti!</h1>
                    <h2 className="text-left md:text-lg leading-relaxed text-gray-900 sm:w-5/6 mb-10 md:mb-0">En FrontendCafé con la participación de la comunidad creamos diferentes actividades para mejorar nuestras habilidades tanto profesionales como comunidad.</h2>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:my-24 md:w-5/6 space-y-4 md:space-y-0 md:space-x-5 w-full">

                    <div className="flex-col w-11/12 sm:w-5/6 shadow-xl rounded-3xl bg-white mx-auto">
                        <div className="flex items-center">
                            <div style={{ height: "80px", width: "8px" }} className="bg-blue-600 rounded-sm"> </div>
                            <div className="flex items-center">
                                <span className="text-3xl mx-2">📘</span>
                                <h1 className="mb-4 w-6/6 text-left text-gray-800 font-bold md:text-4xl text-2xl">Mentorias</h1>
                            </div>
                        </div>
                        <div className="p-5">
                            <div>
                                <p className="ml-2 leading-7 text-gray-900 font-small">Conectate con profesionales y  referentes capacitados en los multiples y diversos temas que engloba el universo de la tecnologia de la informacion, para guiarte en este desafiante camino, no tiene costo alguno, solo ganas de aprender y muy buena onda.</p>
                            </div>
                            <div style={{ height: "20%" }}>
                                <Link to="/mentorias">
                                    <button className="mt-5 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-blue-600">Quiero participar</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col w-11/12 sm:w-5/6 shadow-xl rounded-3xl bg-white mx-auto">
                        <div className="flex items-center">
                            <div style={{ height: "80px", width: "8px" }} className="bg-pink-600 rounded-sm"> </div>
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mx-2">🌎</span>
                                <h1 className="text-left text-gray-800 font-bold md:text-4xl text-2xl">Practica de ingles</h1>
                            </div>
                        </div>
                        <div className="p-5">
                            <div>
                                <p className="ml-2 leading-7 text-gray-900 font-small">Nos divertimos charlando con el objetivo de perder el miedo a hablar en ingles en Publico.<br />Mejorando la comunicacion y la confianza, divirtiendonos y conectandonos.</p>
                            </div>
                            <div style={{ height: "20%" }}>
                                <Link to="/ingles">
                                    <button className="mt-5 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-pink-600">Proximos eventos</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col w-11/12 sm:w-5/6 shadow-xl rounded-3xl bg-white mx-auto">
                        <div className="flex items-center">
                            <div style={{ height: "80px", width: "8px" }} className="bg-green-600 rounded-sm"> </div>
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mx-2">✨</span>
                                <h1 className="text-left text-gray-800 font-bold md:text-4xl text-2xl">Proyectos CMYK</h1>
                            </div>
                        </div>
                        <div className="p-5">
                            <div>
                                <p className="ml-2 leading-7 text-gray-900 font-small">Proyectos colaborativos realizados por miembros de FrontendCafe con el objetivo de ganar experiencia en un entorno profesional.</p>
                            </div>
                            <div style={{ height: "20%" }}>
                                <Link to="/proyectos">
                                    <button className="mt-5 text-white font-medium p-1 pr-5 pl-5 rounded focus:outline-none bg-green-600">Conocelos aqui</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
