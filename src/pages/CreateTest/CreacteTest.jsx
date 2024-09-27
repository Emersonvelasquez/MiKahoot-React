import { useContext, useState } from 'react';
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputRespuesta from '../../componets/InputRespuesta/InputRespuesta';
import { Controller, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/Context';

const CreacteTest = () => {

    const { show  , handleShow , preguntas, setPreguntas , activate,
        control, reset, getValues, register, handleSubmit, formState: { errors },
        handleClose , handEliminar , actuzalizarRespuestaCorrecta , onChangeText , onSubmit
    } = useContext(MyContext)

    const navigate = useNavigate()
    


    const handleCreateTest = (data) => {
        const { autor, time, nombretest } = data
        if (preguntas.length <= 0) {
            alert('no tienes preguntas')
        } else {
            const guardar = {
                codigo: Math.random().toString(36).substring(2, 9),
                autor,
                time,
                nombretest,
                preguntas
            }
            const testes = JSON.parse(localStorage.getItem('Test'))
            if (testes) {
                testes.push(guardar)
                localStorage.setItem('Test', JSON.stringify(testes))
            } else {
                localStorage.setItem('Test', JSON.stringify([guardar]))
            }
            reset()
            setPreguntas([])
            navigate('/')
        }
    }

    return (
        <>
            <Container>
                <h1 className="text-center" >Crear una Evaluacion</h1>
                <Form className="mt-5">
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Nombre test</Form.Label>
                                <Form.Control {...register("nombretest", { required: 'este campo esta vacio' })} type="text" placeholder="Nombre Test" />
                                {errors.nombretest && (
                                    <p role="alert" className="text-danger">{errors.nombretest.message}</p>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Author Test</Form.Label>
                                <Form.Control {...register("autor", { required: 'este campo esta vacio' })} type="text"
                                    placeholder="Author Test"
                                />
                                {errors.autor && (
                                    <p role="alert" className="text-danger">{errors.autor.message}</p>
                                )}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>{`Duracion del test  `}
                                    <Form.Text className="text-muted">
                                        (ingrese en Minutos)
                                    </Form.Text>
                                </Form.Label>
                                <Form.Control {...register("time", { required: 'este campo esta vacio' })} type="number" placeholder="" />
                                {errors.time && (
                                    <p role="alert" className="text-danger">{errors.time.message}</p>
                                )}
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col>
                        <NavLink className='btn btn-danger' to='/' onClick={handleSubmit(handleCreateTest)}>Aguardar</NavLink>
                        <Button variant="primary" onClick={handleShow}>
                            Crear Preguntas
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Crear Tes</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>pregunta</Form.Label>
                                        <Controller
                                            name='pregunta'
                                            control={control}
                                            rules={{ required: 'este campo esta vacio' }}
                                            render={({ field }) => (
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    autoFocus
                                                    {...field}
                                                />
                                            )}
                                        />
                                        {
                                            <p role="alert" className="text-danger">{errors.pregunta?.message}</p>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Respuesta 1</Form.Label>
                                        <Controller
                                            name={'pregunta1'}
                                            control={control}
                                            rules={{ required: 'este campo esta vacio' }}
                                            render={({ field: { onChange, name, ref } }) => {
                                                return (
                                                    <InputRespuesta
                                                        activate={activate[name]}
                                                        onChange={(e) => onChangeText(e, onChange, name)}
                                                        inpuRef={ref}
                                                        control={control}
                                                        name={name}
                                                        onChangeTwo={(e) => actuzalizarRespuestaCorrecta(name)}
                                                        nameRadio='respuestaCorrecta'
                                                    />
                                                )
                                            }}
                                        />
                                        {
                                            <p role="alert" className="text-danger">{errors.pregunta1?.message}</p>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Respuesta 2</Form.Label>
                                        <Controller
                                            name={'pregunta2'}
                                            control={control}
                                            rules={{ required: 'este campo esta vacio' }}
                                            render={({ field: { onChange, name, ref } }) => {
                                                return (
                                                    <InputRespuesta
                                                        activate={activate[name]}
                                                        onChange={(e) => onChangeText(e, onChange, name)}
                                                        inpuRef={ref}
                                                        control={control}
                                                        name={name}
                                                        onChangeTwo={(e) => actuzalizarRespuestaCorrecta(name)}
                                                        nameRadio='respuestaCorrecta'
                                                    />
                                                )
                                            }}
                                        />
                                        {
                                            <p role="alert" className="text-danger">{errors.pregunta2?.message}</p>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Respuesta 3</Form.Label>
                                        <Controller
                                            name={'pregunta3'}
                                            control={control}
                                            rules={{ required: 'este campo esta vacio' }}
                                            render={({ field: { onChange, name, ref } }) => {
                                                return (
                                                    <InputRespuesta
                                                        activate={activate[name]}
                                                        onChange={(e) => onChangeText(e, onChange, name)}
                                                        inpuRef={ref}
                                                        control={control}
                                                        name={name}
                                                        onChangeTwo={(e) => actuzalizarRespuestaCorrecta(name)}
                                                        nameRadio='respuestaCorrecta'
                                                    />
                                                )
                                            }}
                                        />
                                        {
                                            <p role="alert" className="text-danger">{errors.pregunta3?.message}</p>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Respuesta 4</Form.Label>
                                        <Controller
                                            name={'pregunta4'}
                                            control={control}
                                            rules={{ required: 'este campo esta vacio' }}
                                            render={({ field: { onChange, name, ref } }) => {
                                                return (
                                                    <InputRespuesta
                                                        activate={activate[name]}
                                                        onChange={(e) => onChangeText(e, onChange, name)}
                                                        inpuRef={ref}
                                                        control={control}
                                                        name={name}
                                                        onChangeTwo={(e) => actuzalizarRespuestaCorrecta(name)}
                                                        nameRadio='respuestaCorrecta'
                                                    />
                                                )
                                            }}
                                        />
                                        {
                                            <p role="alert" className="text-danger">{errors.pregunta4?.message}</p>
                                        }
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                                    Guardar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>pregunta</th>
                                    <th>respuestas</th>
                                    <th>respuesta Correcta</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {preguntas.map((pregunta, index) => (
                                    <tr key={index}>
                                        <td>{pregunta.pregunta}</td>
                                        <td>{`${pregunta.pregunta1}  ${pregunta.pregunta2} ${pregunta.pregunta3} ${pregunta.pregunta4}`}</td>
                                        <td>{pregunta.respuestaCorrecta}</td>
                                        <td><Button onClick={(e) => handEliminar(pregunta.pregunta)} variant="danger">
                                            Eliminar
                                        </Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default CreacteTest;
