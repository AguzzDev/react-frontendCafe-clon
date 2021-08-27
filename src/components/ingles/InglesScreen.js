import React from 'react'
import { Helmet } from "react-helmet"
import { Footer } from '../Footer/Footer'
import "../../styles/index.css"

import englishTalk from "../../assets/english-talk.svg"
import masuno from "../../assets/masuno.svg"
import evento1 from "../../assets/evento1.png"
import evento2 from "../../assets/evento2.png"
import evento3 from "../../assets/evento3.png"
import { EndMenssages } from '../ui/EndMenssages'

export const InglesScreen = () => {
    return (

        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Inglés - FrontendCafé</title>
            </Helmet>

            <div className="w-9/12 md:w-3/4 xl:w-9/12 mx-auto mt-10">
                <div className="flex flex-col lg:flex-row justify-center">
                    <div className="flex flex-col justify-center xl:py-10 pb-5 lg:pr-12 w-full lg:w-3/6 xl:w-5/12">
                        <h1 className="text-4xl font-bold text-gray-800">Práctica de inglés 🌎</h1>
                        <p className="mt-2">Nos divertimos charlando con el objetivo de perder el miedo a hablar en inglés en público. Mejorando la comunicación y la confianza, divirtiéndonos y conectándonos.</p>
                        <p className="mt-5 ml-1">✔️ Puedes ingresar desde cualquier nivel<br />✔️ Son encuentros online gratis<br />✔️ No necesitas inscribirte<br />✔️ Sucede desde el mismo canal de discord</p>
                    </div>
                    <div className="w-full lg:w-3/6 xl:w-7/12">
                        <img src={englishTalk} className="rounded object-cover w-full"></img>
                    </div>
                </div>
                <div className="flex justify-center mt-10 mx-16">
                    <h1 className="text-4xl font-bold text-gray-800 mr-4">Próximos Eventos</h1>
                    <img className="" src={masuno}></img>
                </div>

                <div className="hidden xl:flex flex-col justify-between my-12">
                    <div className="flex mx-auto">
                        <div className="flex-col mx-2 shadow-2xl w-2/6 rounded bg-white-900">
                            <img style={{ width: "500px" }} src={evento1}></img>
                            <div className="p-5">
                                <h3 className="text-xs tracking-wide text-green-500">Práctica de inglés</h3>
                                <h1 className="mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 ">COFFEE & TALK</h1>
                                <h3 className="mb-2 mt-2 ml-1 text-md font-small text-gray-600">Jun 15 - 19:00 hrs (horario local)</h3>
                                <p className="text-md mb-5 text-gray-900 font-small">👋<b>Todos los martes</b> realizamos una práctica abierta de conversación en inglés</p>
                                <p className="text-md mb-5 text-gray-900 font-small">⌚ <b>El horario se muestra según tu ubicación.</b></p>
                                <p className="text-md mb-5 text-gray-900 font-small">👉Es requerimiento <b>excluyente desmutear el mic y animarse a hablar</b> para lograr un intercambio entre les participantes.</p>
                                <p className="text-md mb-5  text-gray-900 font-small">🌟 ¡El evento es <b>gratis!</b></p>
                                <button className="mb-4 mt-4 text-white font-medium p-2 pr-5 pl-5 rounded focus:outline-none bg-indigo-500">Añadir a mi calendario</button>
                            </div>
                        </div>
                        <div className="flex-col mx-2 shadow-2xl w-2/6 rounded bg-white-900">
                            <img style={{ width: "500px" }} src={evento2}></img>
                            <div className="p-5">
                                <h3 className="text-xs tracking-wide text-green-500">Práctica de inglés</h3>
                                <h1 className="mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 ">COFFEE & TALK</h1>
                                <h3 className="mb-2 mt-2 ml-1 text-md font-small text-gray-600">Jun 22 - 19:00 hrs (horario local)</h3>
                                <p className="text-md mb-5 text-gray-900 font-small">👋<b>Todos los martes</b> realizamos una práctica abierta de conversación en inglés</p>
                                <p className="text-md mb-5 text-gray-900 font-small">⌚ <b>El horario se muestra según tu ubicación.</b></p>
                                <p className="text-md mb-5 text-gray-900 font-small">👉Es requerimiento <b>excluyente desmutear el mic y animarse a hablar</b> para lograr un intercambio entre les participantes.</p>
                                <p className="text-md mb-5  text-gray-900 font-small">🌟 ¡El evento es <b>gratis!</b></p>
                                <button className="mb-4 mt-4 text-white font-medium p-2 pr-5 pl-5 rounded focus:outline-none bg-indigo-500">Añadir a mi calendario</button>
                            </div>
                        </div>
                        <div className="flex-col mx-2 shadow-2xl w-2/6 rounded bg-white-900">
                            <img style={{ width: "500px" }} src={evento3}></img>
                            <div className="p-5">
                                <h3 className="text-xs tracking-wide text-green-500">Práctica de inglés</h3>
                                <h1 className="mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 ">COFFEE & TALK</h1>
                                <h3 className="mb-2 mt-2 ml-1 text-md font-small text-gray-600">Jun 29 - 19:00 hrs (horario local)</h3>
                                <p className="text-md mb-5 text-gray-900 font-small">👋<b>Todos los martes</b> realizamos una práctica abierta de conversación en inglés</p>
                                <p className="text-md mb-5 text-gray-900 font-small">⌚ <b>El horario se muestra según tu ubicación.</b></p>
                                <p className="text-md mb-5 text-gray-900 font-small">👉Es requerimiento <b>excluyente desmutear el mic y animarse a hablar</b> para lograr un intercambio entre les participantes.</p>
                                <p className="text-md mb-5  text-gray-900 font-small">🌟 ¡El evento es <b>gratis!</b></p>
                                <button className="mb-4 mt-4 text-white font-medium p-2 pr-5 pl-5 rounded focus:outline-none bg-indigo-500">Añadir a mi calendario</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex xl:hidden flex-col my-12 mx-auto">
                    <div className="flex flex-row mx-auto">
                        <div className="flex-col mx-2 shadow-2xl w-3/6 rounded bg-white-900">
                            <img style={{ width: "500px" }} src={evento1}></img>
                            <div className="p-5">
                                <h3 className="text-xs tracking-wide text-green-500">Práctica de inglés</h3>
                                <h1 className="mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 ">COFFEE & TALK</h1>
                                <h3 className="mb-2 mt-2 ml-1 text-md font-small text-gray-600">Jun 15 - 19:00 hrs (horario local)</h3>
                                <p className="text-md mb-5 text-gray-900 font-small">👋<b>Todos los martes</b> realizamos una práctica abierta de conversación en inglés</p>
                                <p className="text-md mb-5 text-gray-900 font-small">⌚ <b>El horario se muestra según tu ubicación.</b></p>
                                <p className="text-md mb-5 text-gray-900 font-small">👉Es requerimiento <b>excluyente desmutear el mic y animarse a hablar</b> para lograr un intercambio entre les participantes.</p>
                                <p className="text-md mb-5  text-gray-900 font-small">🌟 ¡El evento es <b>gratis!</b></p>
                                <button className="mb-4 mt-4 text-white font-medium p-2 pr-5 pl-5 rounded focus:outline-none bg-indigo-500">Añadir a mi calendario</button>
                            </div>
                        </div>
                        <div className="flex-col mx-2 shadow-2xl w-3/6 rounded bg-white-900">
                            <img style={{ width: "500px" }} src={evento2}></img>
                            <div className="p-5">
                                <h3 className="text-xs tracking-wide text-green-500">Práctica de inglés</h3>
                                <h1 className="mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 ">COFFEE & TALK</h1>
                                <h3 className="mb-2 mt-2 ml-1 text-md font-small text-gray-600">Jun 22 - 19:00 hrs (horario local)</h3>
                                <p className="text-md mb-5 text-gray-900 font-small">👋<b>Todos los martes</b> realizamos una práctica abierta de conversación en inglés</p>
                                <p className="text-md mb-5 text-gray-900 font-small">⌚ <b>El horario se muestra según tu ubicación.</b></p>
                                <p className="text-md mb-5 text-gray-900 font-small">👉Es requerimiento <b>excluyente desmutear el mic y animarse a hablar</b> para lograr un intercambio entre les participantes.</p>
                                <p className="text-md mb-5  text-gray-900 font-small">🌟 ¡El evento es <b>gratis!</b></p>
                                <button className="mb-4 mt-4 text-white font-medium p-2 pr-5 pl-5 rounded focus:outline-none bg-indigo-500">Añadir a mi calendario</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col my-2 shadow-2xl w-3/6 rounded bg-white-900">
                        <img style={{ width: "500px" }} src={evento3}></img>
                        <div className="p-5">
                            <h3 className="text-xs tracking-wide text-green-500">Práctica de inglés</h3>
                            <h1 className="mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 ">COFFEE & TALK</h1>
                            <h3 className="mb-2 mt-2 ml-1 text-md font-small text-gray-600">Jun 29 - 19:00 hrs (horario local)</h3>
                            <p className="text-md mb-5 text-gray-900 font-small">👋<b>Todos los martes</b> realizamos una práctica abierta de conversación en inglés</p>
                            <p className="text-md mb-5 text-gray-900 font-small">⌚ <b>El horario se muestra según tu ubicación.</b></p>
                            <p className="text-md mb-5 text-gray-900 font-small">👉Es requerimiento <b>excluyente desmutear el mic y animarse a hablar</b> para lograr un intercambio entre les participantes.</p>
                            <p className="text-md mb-5  text-gray-900 font-small">🌟 ¡El evento es <b>gratis!</b></p>
                            <button className="mb-4 mt-4 text-white font-medium p-2 pr-5 pl-5 rounded focus:outline-none bg-indigo-500">Añadir a mi calendario</button>
                        </div>
                    </div>
                </div>

                <div className="flex md:hidden my-12 mx-auto">
                    <div className="flex flex-col mx-auto">
                        <div className="flex-col my-2 shadow-2xl rounded bg-white-900">
                            <img style={{ width: "500px" }} src={evento1}></img>
                            <div className="p-5">
                                <h3 className="text-xs tracking-wide text-green-500">Práctica de inglés</h3>
                                <h1 className="mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 ">COFFEE & TALK</h1>
                                <h3 className="mb-2 mt-2 ml-1 text-md font-small text-gray-600">Jun 15 - 19:00 hrs (horario local)</h3>
                                <p className="text-md mb-5 text-gray-900 font-small">👋<b>Todos los martes</b> realizamos una práctica abierta de conversación en inglés</p>
                                <p className="text-md mb-5 text-gray-900 font-small">⌚ <b>El horario se muestra según tu ubicación.</b></p>
                                <p className="text-md mb-5 text-gray-900 font-small">👉Es requerimiento <b>excluyente desmutear el mic y animarse a hablar</b> para lograr un intercambio entre les participantes.</p>
                                <p className="text-md mb-5  text-gray-900 font-small">🌟 ¡El evento es <b>gratis!</b></p>
                                <button className="mb-4 mt-4 text-white font-medium p-2 pr-5 pl-5 rounded focus:outline-none bg-indigo-500">Añadir a mi calendario</button>
                            </div>
                        </div>
                        <div className="flex-col my-2 shadow-2xl rounded bg-white-900">
                            <img style={{ width: "500px" }} src={evento2}></img>
                            <div className="p-5">
                                <h3 className="text-xs tracking-wide text-green-500">Práctica de inglés</h3>
                                <h1 className="mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 ">COFFEE & TALK</h1>
                                <h3 className="mb-2 mt-2 ml-1 text-md font-small text-gray-600">Jun 22 - 19:00 hrs (horario local)</h3>
                                <p className="text-md mb-5 text-gray-900 font-small">👋<b>Todos los martes</b> realizamos una práctica abierta de conversación en inglés</p>
                                <p className="text-md mb-5 text-gray-900 font-small">⌚ <b>El horario se muestra según tu ubicación.</b></p>
                                <p className="text-md mb-5 text-gray-900 font-small">👉Es requerimiento <b>excluyente desmutear el mic y animarse a hablar</b> para lograr un intercambio entre les participantes.</p>
                                <p className="text-md mb-5  text-gray-900 font-small">🌟 ¡El evento es <b>gratis!</b></p>
                                <button className="mb-4 mt-4 text-white font-medium p-2 pr-5 pl-5 rounded focus:outline-none bg-indigo-500">Añadir a mi calendario</button>
                            </div>
                        </div>
                        <div className="flex-col my-2 shadow-2xl rounded bg-white-900">
                            <img style={{ width: "500px" }} src={evento3}></img>
                            <div className="p-5">
                                <h3 className="text-xs tracking-wide text-green-500">Práctica de inglés</h3>
                                <h1 className="mb-2 mt-2 ml-1 text-xl font-medium text-gray-800 ">COFFEE & TALK</h1>
                                <h3 className="mb-2 mt-2 ml-1 text-md font-small text-gray-600">Jun 29 - 19:00 hrs (horario local)</h3>
                                <p className="text-md mb-5 text-gray-900 font-small">👋<b>Todos los martes</b> realizamos una práctica abierta de conversación en inglés</p>
                                <p className="text-md mb-5 text-gray-900 font-small">⌚ <b>El horario se muestra según tu ubicación.</b></p>
                                <p className="text-md mb-5 text-gray-900 font-small">👉Es requerimiento <b>excluyente desmutear el mic y animarse a hablar</b> para lograr un intercambio entre les participantes.</p>
                                <p className="text-md mb-5  text-gray-900 font-small">🌟 ¡El evento es <b>gratis!</b></p>
                                <button className="mb-4 mt-4 text-white font-medium p-2 pr-5 pl-5 rounded focus:outline-none bg-indigo-500">Añadir a mi calendario</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
            <EndMenssages />
            <Footer />
        </>
    )
}

