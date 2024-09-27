import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const InputRespuesta = ({nameRadio , name,  onChangeTwo , onChange , inpuRef , activate }) => {
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control 
                onChange={onChange}
                name={name}
                ref={inpuRef}
                aria-label="Text input with Radio" 
                />
                <InputGroup.Radio disabled={activate}  name={nameRadio} onChange={onChangeTwo} aria-label="Radio for following text input" />
            </InputGroup>
        </>
    );
}

export default InputRespuesta;
