import React, { useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";

import { DescubreInicioScreen } from "./DescubreInicioScreen";
import { EndMenssages } from "../ui/EndMenssages";
import { Footer } from "../Footer/Footer";

export const InicioScreen = () => {
  const names = [
    "Aprendemos",
    "Compartimos",
    "Ayudamos",
    "Creamos",
    "Incluímos",
  ];
  const [newName, setnewName] = useState(names[0]);

  const shuffle = () => {
    let interval;

    interval = setInterval(() => {
      const index = Math.floor(Math.random() * names.length);
      console.log(index);
      setnewName(names[index]);
    }, 3000);

    return () => clearInterval(interval);
  };

  useEffect(() => shuffle(), []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - FrontendCafé</title>
      </Helmet>

      <div
        style={{ height: "500px", width: "100%" }}
        className="relative bg-white bg-opacity-0 mt-5"
      >
        <img
          className="absolute object-cover h-full top-0 2xl:right-48 opacity-25 md:opacity-100 z-0"
          src="https://cdn.sanity.io/images/0mjeop5f/production/8c78642f8a1fa1ed9af834adb7f1fcc53eed1d76-5120x2000.png?w=1280"
        />
        <div className="flex items-center bg-cover bg-center justify-between h-full w-9/12 mx-auto">
          <div className="w-auto md:w-1/3 z-10">
            <div className="hidden md:flex flex-col relative xl:ml-40">
              <svg
                style={{ left: "-4rem" }}
                className="absolute md:top-0"
                width="48"
                height="50"
                viewBox="0 0 48 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.37774 43.4236H36.4338L34.9983 38.9494C35.2112 39.128 47.3125 49.1131 47.3125 49.1131V5.43703C47.1691 2.72211 44.7409 0.415039 41.7308 0.415039L6.38828 0.421126C3.38036 0.421126 0.939453 2.73226 0.939453 5.44717V38.3995C0.939453 41.2626 3.37614 43.4236 6.37774 43.4236ZM28.6115 11.9463L28.5419 11.9707L28.5672 11.9463H28.6115ZM12.5264 14.5213C16.3901 11.8144 19.9714 11.9443 19.9714 11.9443L20.2601 12.2182C15.5322 13.3038 13.3885 15.3369 13.3885 15.3369C13.6077 15.2923 23.1542 9.9903 34.7222 15.4709C34.7222 15.4709 32.5743 13.5696 28.1372 12.3522L28.5293 11.9808C29.1427 11.9829 32.3888 12.0924 35.8626 14.5375C35.8626 14.5375 39.7495 20.9291 39.7495 28.7817C39.6209 28.6315 37.3381 32.1621 31.4634 32.2839C31.4634 32.2839 30.4685 31.2003 29.7603 30.2548C33.1961 29.3052 34.4819 27.406 34.4819 27.406C27.7936 31.4601 21.9317 30.827 14.9188 28.0877C14.8535 28.0877 14.824 28.0593 14.7902 28.0269V28.0147C14.7565 27.9842 14.727 27.9538 14.6617 27.9538H14.5352C14.1052 27.6819 13.8185 27.548 13.8185 27.548C13.8185 27.548 15.1022 29.4472 18.401 30.3968C17.5347 31.3485 16.6768 32.43 16.6768 32.43C10.8043 32.2961 8.66267 28.7654 8.66267 28.7654C8.66267 20.9007 12.5264 14.5213 12.5264 14.5213Z"
                  fill="#5C6BC0"
                />
                <path
                  d="M28.9926 26.3282C30.4913 26.3282 31.7117 25.1108 31.7117 23.6092C31.7117 22.1179 30.4976 20.9004 28.9926 20.9004V20.9065C27.5002 20.9065 26.2777 22.1199 26.2734 23.6214C26.2734 25.1108 27.4939 26.3282 28.9926 26.3282Z"
                  fill="#5C6BC0"
                />
                <path
                  d="M19.2582 26.3282C20.7569 26.3282 21.9773 25.1108 21.9773 23.6092C21.9773 22.1179 20.7653 20.9004 19.2666 20.9004L19.2582 20.9065C17.7595 20.9065 16.5391 22.1199 16.5391 23.6214C16.5391 25.1108 17.7595 26.3282 19.2582 26.3282Z"
                  fill="#5C6BC0"
                />
              </svg>
              <div className="text-4xl font-bold">
                <span
                  className="inline-block px-2 py-2 text-indigo-500 bg-indigo-100 border-2 border-dashed border-indigo-500"
                  style={{ opacity: "1", transform: "none" }}
                >
                  {newName}
                </span>
                <span className="z-10"> en </span>
                <div
                  style={{ width: "min-content" }}
                  className="mt-2 px-2 py-2 bg-yellow-400  border-2 border-dashed border-yellow-600"
                >
                  FrontendCafé
                </div>
              </div>
            </div>
            <div className="flex flex-col transform translate-x-10 sm:-translate-x-38 md:hidden relative xl:ml-40">
              <svg
                style={{ left: "-4rem" }}
                className="absolute md:top-0"
                width="48"
                height="50"
                viewBox="0 0 48 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.37774 43.4236H36.4338L34.9983 38.9494C35.2112 39.128 47.3125 49.1131 47.3125 49.1131V5.43703C47.1691 2.72211 44.7409 0.415039 41.7308 0.415039L6.38828 0.421126C3.38036 0.421126 0.939453 2.73226 0.939453 5.44717V38.3995C0.939453 41.2626 3.37614 43.4236 6.37774 43.4236ZM28.6115 11.9463L28.5419 11.9707L28.5672 11.9463H28.6115ZM12.5264 14.5213C16.3901 11.8144 19.9714 11.9443 19.9714 11.9443L20.2601 12.2182C15.5322 13.3038 13.3885 15.3369 13.3885 15.3369C13.6077 15.2923 23.1542 9.9903 34.7222 15.4709C34.7222 15.4709 32.5743 13.5696 28.1372 12.3522L28.5293 11.9808C29.1427 11.9829 32.3888 12.0924 35.8626 14.5375C35.8626 14.5375 39.7495 20.9291 39.7495 28.7817C39.6209 28.6315 37.3381 32.1621 31.4634 32.2839C31.4634 32.2839 30.4685 31.2003 29.7603 30.2548C33.1961 29.3052 34.4819 27.406 34.4819 27.406C27.7936 31.4601 21.9317 30.827 14.9188 28.0877C14.8535 28.0877 14.824 28.0593 14.7902 28.0269V28.0147C14.7565 27.9842 14.727 27.9538 14.6617 27.9538H14.5352C14.1052 27.6819 13.8185 27.548 13.8185 27.548C13.8185 27.548 15.1022 29.4472 18.401 30.3968C17.5347 31.3485 16.6768 32.43 16.6768 32.43C10.8043 32.2961 8.66267 28.7654 8.66267 28.7654C8.66267 20.9007 12.5264 14.5213 12.5264 14.5213Z"
                  fill="#5C6BC0"
                />
                <path
                  d="M28.9926 26.3282C30.4913 26.3282 31.7117 25.1108 31.7117 23.6092C31.7117 22.1179 30.4976 20.9004 28.9926 20.9004V20.9065C27.5002 20.9065 26.2777 22.1199 26.2734 23.6214C26.2734 25.1108 27.4939 26.3282 28.9926 26.3282Z"
                  fill="#5C6BC0"
                />
                <path
                  d="M19.2582 26.3282C20.7569 26.3282 21.9773 25.1108 21.9773 23.6092C21.9773 22.1179 20.7653 20.9004 19.2666 20.9004L19.2582 20.9065C17.7595 20.9065 16.5391 22.1199 16.5391 23.6214C16.5391 25.1108 17.7595 26.3282 19.2582 26.3282Z"
                  fill="#5C6BC0"
                />
              </svg>
              <div className="text-2xl sm:text-4xl font-bold">
                <span
                  className="inline-block px-2 py-2 text-indigo-500 bg-indigo-100 border-2 border-dashed border-indigo-500"
                  style={{ opacity: "1", transform: "none" }}
                />
                <span className="z-10"> en </span>
                <div
                  style={{ width: "min-content" }}
                  className="mt-2 px-2 py-2 bg-yellow-400  border-2 border-dashed border-yellow-600"
                >
                  FrontendCafé
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:grid md:grid-cols-2 md:grid-rows-3 md:gap-10">
            <div className="row-start-1 col-start-2">
              <div className="flex justify-center items-center relative w-24 lg:w-32 h-20 lg:h-24 rounded-lg bg-green-500">
                <div
                  style={{ transform: "rotate(-15deg)" }}
                  className="z-10 absolute top-0 left-0 w-24 lg:w-32 h-20 lg:h-24 rounded-lg bg-green-400"
                />
                <div className="z-20 text-white font-bold text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl">+18</p>
                  <p className="text-md">Proyectos</p>
                </div>
              </div>
            </div>
            <div className="row-start-2 col-start-1">
              <div className="flex justify-center items-center relative w-24 lg:w-32 h-20 lg:h-24 rounded-lg bg-yellow-400">
                <div
                  style={{ transform: "rotate(-15deg)" }}
                  className="z-10 absolute top-0 left-0 w-24 lg:w-32 h-20 lg:h-24 rounded-lg bg-yellow-500"
                />
                <div className="z-20 text-white font-bold text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl">+10K</p>
                  <p className="text-md">Miembros</p>
                </div>
              </div>
            </div>
            <div className="row-start-3 col-start-2">
              <div className="flex justify-center items-center relative w-24 lg:w-32 h-20 lg:h-24 rounded-lg bg-green-500">
                <div
                  style={{ transform: "rotate(-15deg)" }}
                  className="z-10 absolute top-0 left-0 w-24 lg:w-32 h-20 lg:h-24 rounded-lg bg-green-400"
                />
                <div className="z-20 text-white font-bold text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl">+26M</p>
                  <p className="text-md">Mensajes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DescubreInicioScreen />
        <EndMenssages />
        <Footer />
      </div>
    </>
  );
};
