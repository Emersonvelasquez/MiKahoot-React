import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export const MyContext = createContext()

export const Context = ({children}) => {

    //MostrarPreguntas
    const [test, setTest] = useState()
    const [count, setCount] = useState(0)
    const [respuestaCorrectas, setRespuestaCorrectas] = useState(0)
    const [respuestasincorrectas, setRespuestasincorrectas] = useState(0)
    const [finish, setFinish] = useState(false)
    const aumentar = (value) => {
        if (test.preguntas.length - 1 > count) {
            setCount(count + 1)
        } else {
            setFinish(true)
        }

        if (test.preguntas[count].respuestaCorrecta == value) {
            setRespuestaCorrectas(respuestaCorrectas + 1)
        } else {
            setRespuestasincorrectas(respuestasincorrectas + 1)
        }
    }

    //Temporizador
    const [hours , setHours] = useState(0)
    const [minutes , setMinutos] = useState(0)
    const [seconds , setSegundos] = useState(59)

    //CreateTest
    const { control, reset, setValue, getValues, register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            pregunta: "",
            pregunta1: "",
            pregunta2: "",
            pregunta3: "",
            pregunta4: "",
            respuestaCorrecta: "",
            autor: "",
            time: "",
            nombretest: "",
        }
    })
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [preguntas, setPreguntas] = useState([])
    const [activate, setActivate] = useState({
        pregunta1: true,
        pregunta2: true,
        pregunta3: true,
        pregunta4: true
    })
    const handleClose = () => {
        setShow(false)
        setActivate({
            pregunta1: true,
            pregunta2: true,
            pregunta3: true,
            pregunta4: true,
        })
        reset({
            pregunta: '',
            pregunta1: '',
            pregunta2: '',
            pregunta3: '',
            pregunta4: '',
            respuestaCorrecta: ''
        })
    };

    const actuzalizarRespuestaCorrecta = (name) => {
        setValue('respuestaCorrecta', getValues(name))
    }
    const onChangeText = (event, onChange, name) => {
        if (event.target.value != '') {
            activate[name] = false
            setActivate({ ...activate })
        } else {
            activate[name] = true
            setActivate({ ...activate })
        }
        onChange(event.target.value)
    }

    const handEliminar = (e) => {
        const nuex = preguntas.filter((item) => item.pregunta != e)
        setPreguntas(nuex)
    }

    const onSubmit = (data) => {
        if (getValues('respuestaCorrecta')) {
            const { autor, time, nombretest, ...datafilter } = data
            setPreguntas([...preguntas, datafilter])
            handleClose()
        }
    }

    //Layouadmin
    const nuevo = JSON.parse(localStorage.getItem('Test'))
    const CopyLink = (code) => {
        navigator.clipboard.writeText(`${window.location}game/${code}`);
    }

    //LayoutClient
    const [notFount, setNotFount] = useState(false)
    const [testt, setTestt] = useState({})

    //StartGame
    const[countt , setCountt] = useState(5)
    const [showw , setShoww] = useState(true)
    useEffect(()=>{
        function myCallback(){
            setCountt(countt-1)
        }
        if(countt > 0){
            var intervalID = setInterval(myCallback, 1000)
            setTimeout(()=>{
                clearInterval(intervalID)
            },1000)
        }else{
            setShoww(false)
        }
    } , [countt])

    
    return (
        <>
        <MyContext.Provider value={{
            test, setTest ,count, setCount , respuestaCorrectas, setRespuestaCorrectas,
            respuestasincorrectas, setRespuestasincorrectas , finish, setFinish ,hours ,
            setHours , minutes , setMinutos , seconds , setSegundos , show, setShow , handleShow , 
            preguntas, setPreguntas , activate, setActivate , control, reset, setValue, getValues, register, handleSubmit, formState: { errors },
            handleClose ,handEliminar , onSubmit , nuevo , CopyLink , notFount, setNotFount , testt, setTestt ,
            countt , setCountt , showw , setShoww , aumentar , onChangeText , actuzalizarRespuestaCorrecta
            
        }}>
            {children}
        </MyContext.Provider>
        </>
    );
}

