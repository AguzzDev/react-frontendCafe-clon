import React from 'react'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Footer } from '../Footer/Footer'

export const guiamentorias = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Guía para participar en el programa de mentorías - FrontendCafé</title>
            </Helmet>

            <div className="sm:pt-10 pb-24 bg-indigo-100">
                <div className="flex flex-col mx-auto w-9/12 bg-white rounded-xl shadow-xl">
                    <div className="p-5 border-b border-gray-200">
                        <h1 className="text-2xl font-semibold text-green-500">Guía para participar en el programa de mentorías</h1>
                    </div>
                    <div className="ml-10 mr-10 mt-6 tracking-tight">
                        <h1 className="text-2xl text-green-500 mb-2">Dónde se realizan las mentorías?</h1>
                        <ul className="text-gray-700 leading-7">
                            <li><b>Las mentorías se realizan dentro del Discord de FrontendCafé, si no has registrado en dicha plataforma, la mentoría no se llevará a cabo.</b></li>
                            <li>El canal para realizar la mentoría será visible para el mentoreado en el día y horario de la mentoría, cualquier consulta puedes realizarla en el canal llamado <b>#consultas-mentorias</b></li>
                        </ul>
                        <div>
                            <h1 className="text-2xl font-normal text-green-500 mb-2 mt-2">Requisitos para participar</h1>
                            <ul className="text-gray-700 leading-7">
                                <li><b>Brindar datos de contacto</b> como Linkedin, nombre, apellido. No podrá haber participantes anónimos en ninguna de las partes.</li>
                                <li><b>Aceptar y cumplir el código de conducta de <Link to="/docs/codigo-de-conducta" className="text-green-500 underline">FrontendCafé</Link>.</b></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-2xl font-normal text-green-500 mb-2 mt-2">IMPORTANTE</h1>
                            <p className="text-gray-700"><b>Comprometerse a asistir.</b></p>
                            <ul className="text-gray-700 leading-7">
                                <li>En caso de no poder, comunicate con la mayor anticipación posible. Si no se puede comunicar de antemano, deberá justificarse la ausencia.</li>
                                <li>Una (1) falta sin justificar finaliza el proceso de mentoría.</li>
                                <li>Revisa tema de Non-Disclosure Agreement en tu trabajos a la hora de compartir código.</li>
                            </ul>
                            <div>
                                <h1 className="text-2xl font-normal text-green-500 mb-2 mt-2">Antes de la mentoría debes:</h1>
                                <ul className="text-gray-700 leading-7">
                                    <li><b>Preparar dudas con anticipación.</b></li>
                                    <li>Si la mentoría implica código, prepara el mismo en un editor colaborativo como codepen, o un repositorio actualizado y listo para ser compartido.</li>
                                </ul>
                            </div>
                            <div>
                                <div className="mb-10">
                                    <h1 className="text-2xl font-normal text-green-500 mb-2 mt-2">Aclaraciones</h1>
                                    <ul className="text-gray-700 leading-7">
                                        <li><b>Las mentorías</b> que se dan dentro de FrontendCafé son de <b>carácter gratuito</b>.</li>
                                        <li><b>No se requiere ningún nivel para anotarse</b>, puede anotarse alguien que no sabe nada, o alguien que sabe un poco y necesita ayuda en algo particular.</li>
                                        <li><b>El alcance de las mentorías va a variar</b>, dependiendo del tema, la idea es que sea sesiones únicas, o dos sesiones.</li>
                                        <li>No estamos ofreciendo mentorías extendidas en el tiempo, la idea es ayudarte a destrabar un problema si es código, o a hacer el cv, y ver cosas puntuales referidas a cada tiempo, las mentorías no son clases ni cursos.</li>
                                        <li>Puedes anotarse en más de una categoría.</li>
                                        <li><b>FrontendCafé no se hace responsable de cualquier uso, comunicación y/o acción que se realice fuera de las salas asignadas.</b></li>
                                        <li>Queda prohibido el ofrecimiento de servicios que se encuentre por fuera de los términos y condiciones explicitados en el presente documento -ya sean iguales o similares al presente- en nombre de FrontendCafé.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

