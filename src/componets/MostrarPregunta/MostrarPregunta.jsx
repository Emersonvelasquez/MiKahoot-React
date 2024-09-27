import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Temporizador from "../Temporizador/Temporizador";
import { MyContext } from "../../context/Context";
import './index.css'
const MostrarPregunta = () => {

    const { test, setTest, count, setCount, respuestaCorrectas, setRespuestaCorrectas,
        respuestasincorrectas, setRespuestasincorrectas, finish, setFinish, aumentar
    } = useContext(MyContext)

    const { codigo } = useParams()

    const [preguntas, setPreguntas] = useState(JSON.parse(localStorage.getItem('Test')))

    useEffect(() => {
        const prueba = preguntas.find((item) => item.codigo == codigo)
        setTest(prueba)
    }, [])

    return (
        <>

            {
                finish && (
                    <div className="card bg bg-black  text-center d-flex">
                        <div className="tools">
                            <div className="circle">
                                <span className="red box"></span>
                            </div>
                            <div className="circle">
                                <span className="yellow box"></span>
                            </div>
                            <div className="circle">
                                <span className="green box"></span>
                            </div>
                        </div>
                        <div className="cont">
                            <div className="texto">Respuesta Correcta {respuestaCorrectas}</div>
                            <div className="texto">Respuesta incorrectas {respuestasincorrectas}</div>
                        </div>
                        <div className="card__content">
                        </div>
                    </div>
                )
            }
            {
                !finish && (
                    <Container>
                        <Temporizador time={test?.time} setFinish={setFinish} />
                        <h1 className="text-center">{test?.preguntas[count]?.pregunta}</h1>
                        <Row className="text-center gap-4">
                            <Col className="d-flex justify-content-center gap-4" md={12}>
                                <Button onClick={() => aumentar(test?.preguntas[count]?.pregunta1)} variant="primary" size="lg" style={{ width: '400px', height: '200px' }}>{test?.preguntas[count]?.pregunta1}</Button>
                                <Button onClick={() => aumentar(test?.preguntas[count]?.pregunta2)} variant="danger" size="lg" style={{ width: '400px', height: '200px' }}>{test?.preguntas[count]?.pregunta2}</Button>
                            </Col>
                            <Col className="d-flex justify-content-center gap-4" md={12}>
                                <Button onClick={() => aumentar(test?.preguntas[count]?.pregunta3)} variant="warning" size="lg" style={{ width: '400px',height: '200px' }}>{test?.preguntas[count]?.pregunta3}</Button>
                                <Button onClick={() => aumentar(test?.preguntas[count]?.pregunta4)} variant="info" size="lg" style={{ width: '400px', height: '200px'}}>{test?.preguntas[count]?.pregunta4}</Button>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </>
    );
}

export default MostrarPregunta;