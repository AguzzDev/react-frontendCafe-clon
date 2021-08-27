import React from 'react'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

import mentorship from "../../assets/mentorship.jpg"
import { Footer } from '../Footer/Footer'
import { EmpiezoMentoriaScreen } from './EmpiezoMentoriaScreen'
import { MentoresMentoriaScreen } from './MentoresMentoriaScreen'

export const MentoriaScreen = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mentorías - FrontendCafé</title>
            </Helmet>

            <div className="w-full">
                <div className="flex flex-col lg:flex-row mx-auto w-9/12 py-32">
                    <img style={{ height: "330px" }} src={mentorship} className="rounded"></img>
                    <div className="flex flex-col justify-center mb-10 lg:px-12">
                        <h1 className="text-4xl md:text-5xl mb-6 font-bold text-gray-800 mt-5 lg:mt-0">Programa de mentorías </h1>
                        <p className="leading-7 mt-2 text-md font-small text-gray-700 font-small">Iniciarnos en el mundo de la tecnología puede resultar abrumador o verse como un desafío. Eso nos puede llevar a preguntarnos por dónde comenzar y qué elegir de todo lo que abarca el rubro de IT.</p>
                        <p className="leading-7 mt-5 ml-1 text-md font-small text-gray-700">El programa de mentorías de FrontendCafé busca servirte de guía en este camino, conectándote con profesionales y referentes capacitados en los múltiples y diversos temas que engloba el universo de las tecnologías de la información.</p>
                        <div className="flex flex-row mt-5">
                            <Link to="/docs/guia-para-realizar-mentorias">
                                <button
                                    className="w-6/6 py-2 px-4 ml-1 md:text-lg font-medium text-white bg-green-500 rounded focus:outline-none hover:bg-green-600">
                                    Reglas
                                </button>
                            </Link>
                            <Link to="/docs/codigo-de-conducta">
                                <button
                                    className="w-6/6 py-2 px-4 md:text-lg font-medium ml-5 bg-gray-200 rounded focus:outline-none hover:bg-gray-300">
                                    Código de conducta
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <EmpiezoMentoriaScreen />
                <MentoresMentoriaScreen />
                <Footer />
            </div>
        </>
    )
}
