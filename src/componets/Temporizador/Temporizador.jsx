import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/Context";

const Temporizador = ({time , setFinish}) => {

    const {hours , setHours , minutes , setMinutos , seconds , setSegundos } = useContext(MyContext)

useEffect(()=>{
    const horas = parseInt(time / 60)
    const minutos = time - (horas * 60)
    setHours(minutos == 0 ? horas -1 : horas)
    setMinutos(minutos == 0 ? 59 : minutos - 1)

}, [time])

useEffect(()=>{
    function play(){
        setSegundos(seconds-1)
    }
    if(seconds > 0){
        var intervalID = setInterval(play, 1000)
        setTimeout(()=>{
            clearInterval(intervalID)
        },1000)
    }else if (minutes > 0){
        setMinutos(minutes -1)
        setSegundos( 59 )
    }else if (hours > 0){
        setHours(hours -1 )
        setMinutos(59)
        setSegundos(59)
    }else{
        setFinish(true)
    }
} , [seconds])

    return (
        <>
        <h2>{`${hours}: ${minutes}: ${seconds} `}</h2>
        </>
    );
}

export default Temporizador;