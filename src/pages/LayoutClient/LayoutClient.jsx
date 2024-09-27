
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../context/Context";
import './index.css'
const LayoutClient = () => {
    const { notFount, setNotFount, testt, setTestt } = useContext(MyContext)

    const navigate = useNavigate()
    const [preguntas, setPreguntas] = useState(JSON.parse(localStorage.getItem('Test')))
    const { codigo } = useParams()

    useEffect(() => {
        const prueva = preguntas.find((item) => item.codigo == codigo)
        if (!prueva) {
            setNotFount(true)
        } else {
            setTestt(prueva)
        }
    })

    const start = () => {
        navigate(`/game/${codigo}/start`)
    }

    return (
        <>
            {
                notFount && (
                    <h1>Testt no encontrado!</h1>
                )
            }
            {!notFount && (<div className=" js d-flex flex-column align-items-center justify-content-center">
                <h1 className="jsx" >Welcome to hahoot Chango!</h1>
                <h2>The autor game is: {testt?.autor}</h2>
                <h3>Time to take testt: {`${testt?.time} Minutos`}</h3>
                <h4>Total questions in Test: {testt.preguntas?.length}</h4>
                <Button className="p-3" onClick={() => start()} variant="danger">start</Button>
            </div>)}
        </>
    );
}

export default LayoutClient;
