import { useContext, useState } from "react";
import MostrarPregunta from "../../componets/MostrarPregunta/MostrarPregunta";
import { MyContext } from "../../context/Context";
import './index.css'
const StartGame = () => {
    const { countt, showw } = useContext(MyContext)

    return (
        <>
            {
                showw && (
                    <>
                        <div className="hola">
                        <h1 className="text">Empezando...</h1>
                        <h1 className="text">{countt}</h1>
                        <div className="spinner">
                            <div className="outer">
                                <div className="inner tl"></div>
                                <div className="inner tr"></div>
                                <div className="inner br"></div>
                                <div className="inner bl"></div>
                            </div>
                        </div>
                        </div>
                    </>
                )
            }
            {
                !showw && (
                    <MostrarPregunta />
                )
            }

        </>
    );
}

export default StartGame;