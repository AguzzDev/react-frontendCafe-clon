import React, { useState } from 'react'
import data from "../../data/data"

export const MentoresMentoriaScreen = () => {
    const dataMentoria = data.dataMentoria.[0]
    const [select, setSelect] = useState("op0")

    const handleInputChange = (e) => {
        const selected = e.target.value
        setSelect(selected)

    }
    return (
        <div className="w-full">
            <div className="flex flex-col w-9/12 mx-auto py-10 md:py-32">
                <div>
                    <h1 className="text-3xl mb-1 font-medium text-green-500">Mentores</h1>
                    <h2 className="text-sm ml-2 uppercase mb-1 font-medium text-gray-800">Especialidades</h2>
                    <select
                        onChange={handleInputChange}
                        value={select}
                        className="p-1 rounded-md border border-gray-400 hover:border-gray-500">
                        <option value="op0">--</option>
                        <option value="op1">Diseño UX-UI </option>
                        <option value="op2">Backend</option>
                        <option value="op3">Product management</option>
                        <option value="op4">Inglés</option>
                        <option value="op5">Entrepreneurship</option>
                        <option value="op6">Analítica web / App </option>
                        <option value="op7">Frontend </option>
                        <option value="op8">Git </option>
                        <option value="op9">Data science / Data engineer </option>
                        <option value="op10">Diseño y arquitectura de software </option>
                        <option value="op11">Soft skills</option>
                        <option value="op12">Orientacion / CV </option>
                        <option value="op13">Intro a la programación</option>
                    </select>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-6  mt-5">

                        {/* {dataMentoria.map(dataM => (
                            <div className="flex flex-row border border-gray-300 shadow-xl rounded-xl">
                                <div className="flex flex-col p-5 pt-8 border-r border-gray-300 items-center">
                                    <img style={{ height: "100px", width: "100px", borderRadius: "50%" }} src={dataM.foto} className="object-cover" />
                                    <a target="blank_" href={dataM.redes[0]} style={{ height: "30px", width: "30px", borderRadius: "50%", marginRight: "5px" }} className="bg-blue-600 cursor-pointer mt-2">
                                        <div style={{ marginLeft: "8.5px", marginTop: "3.5px" }} ><i class="fab fa-linkedin-in text-white"></i> </div>
                                    </a>
                                    <a target="blank_" href={dataM.redes[1]} style={{ height: "30px", width: "30px", borderRadius: "50%", marginRight: "5px" }} className="bg-blue-600 cursor-pointer mt-2">
                                        <div style={{ marginLeft: "8.5px", marginTop: "3.5px" }} ><i class="fab fa-linkedin-in text-white"></i> </div>
                                    </a>
                                    <a target="blank_" href={dataM.redes[2]} style={{ height: "30px", width: "30px", borderRadius: "50%", marginRight: "5px" }} className="bg-blue-600 cursor-pointer mt-2">
                                        <div style={{ marginLeft: "8.5px", marginTop: "3.5px" }} ><i class="fab fa-linkedin-in text-white"></i> </div>
                                    </a>
                                </div>
                                <div className="flex flex-col w-10/12 p-5">
                                    <div className="flex flex-col md:flex-row justify-between items-center">
                                        <h1 className="text-2xl mb-5 font-semibold text-green-900">{dataM.nombre}</h1>
                                        <a href={dataM.contacto} className="uppercase rounded-md text-sm py-1 pl-5 pr-5 mb-4 text-white bg-green-500 hover:bg-green-600">contactame</a>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-800 leading-5">{dataM.sobremi}</p>
                                </div>
                            </div>
                        ))} */}
                    </div>


                </div >
            </div >
        </div >
    )
}











