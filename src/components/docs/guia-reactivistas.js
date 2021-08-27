import React from 'react'
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Footer } from '../Footer/Footer'

import "../../styles/marker.css"

export const guiareactivistas = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Guía Reactivistas - FrontendCafé</title>
            </Helmet>

            <div className="sm:pt-10 pb-24 bg-indigo-100">
                <div className="flex flex-col mx-auto w-9/12 bg-white rounded-xl shadow-xl">
                    <div className="p-5 border-b border-gray-200">
                        <h1 className="text-2xl font-semibold text-green-500">Guía Reactivistas</h1>
                    </div>
                    <div className="ml-10 mr-10 mt-6 tracking-tight">
                        <h1 className="text-4xl font-bold text-green-500 mb-4">Reactivistas</h1>
                        <p className="text-gray-700">Un grupo de <i>Reactivistas</i> será un grupo de estudio reducido (entre 4 y 10 personas) que seguirán en conjunto un <b>Material de Estudio</b> previamente definido, con el fin de aprender React.<br />Podrán proponerse grupos de nivel inicial o grupos para profundizar en temas de niveles intermedios o avanzados.</p>
                        <div>
                            <h1 className="text-4xl font-normal text-green-500 mb-4 mt-4">¿Por qué te proponemos un grupo de estudio?</h1>
                            <ul className="text-gray-700 leading-7">
                                <li>Es mejor aprender en grupo que hacerlo individualmente.</li>
                                <li>Podrás hacer nuevas amistades con otros estudiantes.</li>
                                <li>Tendrás un lugar donde reunirte virtualmente (dentro del <Link to="/inicio" className="text-green-500 underline font-semibold">Discord de FrontendCafé</Link>)</li>
                                <li>Podrás intercambiar ideas con miembros de la comunidad, ¡actualmente somos +8500 y todos estamos aprendiendo algo!</li>
                                <li>Podrás acceder a las <b>Office Hours</b>, reuniones cada 15 días con el equipo de coordinación de Reactivistas para exponer tus dudas y realizar consultas.</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-4xl font-normal text-green-500 mb-4 mt-4">¿Cómo unirte a un Grupo de Estudio?</h1>
                            <ul className="text-gray-700 leading-7">
                                <li>Entra a la <Link to="/reactivistas" className="text-green-500 underline font-semibold">web de Reactivistas</Link> y busca si ya existe un grupo que proponga un tema y material de estudio de tu interés, y a su vez que se reúnan en un horario que adapte a tu agenda.</li>
                                <li>Si encontraste un grupo adecuado, unete a él dentro de la misma web brindanos tu <span className="underline font-semibold">usuario de Discord</span>.</li>
                                <li>Si no encontraste ningún grupo te interese o que se adapte a tus horarios, <b>podrás proponer tu propio grupo nuevo.</b></li>
                            </ul>
                            <div>
                                <h1 className="text-4xl font-normal text-green-500 mb-4 mt-4">¿Cómo crear un Grupo de Estudio nuevo?</h1>
                                <ul className="text-gray-700 leading-7">
                                    <li>En la misma <Link to="/reactivistas" className="text-green-500 underline font-semibold">web de Reactivistas</Link> podrás completar el <b>formulario de propuesta de nuevo grupo</b>, ahí mismo se encuentran los requisitos para hacerlo.</li>
                                    <li>Luego la propuesta será revisada por nuestro Equipo de Coordinadores.</li>
                                    <li>Si está todo bien, el grupo será aprobado y se mostrará en la lista de grupos activos de la web para que puedan unirse más personas.</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="text-4xl font-normal text-green-500 mb-4 mt-4">Representante del Grupo</h1>
                                <p className="text-gray-700">La persona que crea el grupo es el Representante del mismo. Será responsable de armar un cronograma de cuándo y cómo interactuará el Equipo (<b>Estilo de Reuniones + Plan de Estudio</b>). Deberá dirigir las reuniones y garantizar que se estén logrando los objetivos propuestos. <br /><i>Este rol puede rotar de miembro en caso de que todos los demás estén de acuerdo con eso.</i></p>
                            </div>
                            <div>
                                <h1 className="text-4xl font-normal text-green-500 mb-4 mt-4">Ejemplo de Estilo de Reunión</h1>
                                <ul className="text-gray-700 leading-7">
                                    <li>Bienvenida.</li>
                                    <li>Revisar las tareas propuestas la reunión anterior.</li>
                                    <li>Discutir aprendizajes relevantes de los últimos ejercicios.</li>
                                    <li>Realizar alguna <b>actividad de aprendizaje</b>.</li>
                                    <li>Recolectar preguntas que surjan.</li>
                                    <li>Determinar tareas para la próxima reunión.</li>
                                    <p><i>Alguien debería tomar notas de las preguntas para llevarlas a la próxima Office Hour con el Equipo de Coordinadores.</i></p>
                                </ul>
                            </div>
                            <div className="mb-10">
                                <h1 className="text-4xl font-normal text-green-500 mb-4 mt-4">Ejemplos de Actividades de Aprendizaje</h1>
                                <p className="text-gray-700">Una <span className="underline">actividad de aprendizaje</span> puede ser algo que se haga en conjunto durante la reunión o algo propuesto para realizar como tarea individualmente.</p>
                                <ul className="text-gray-700 leading-7">
                                    <li>Ver un video</li>
                                    <li>Leer una publicación de Blog</li>
                                    <li>Demostración de código en vivo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

