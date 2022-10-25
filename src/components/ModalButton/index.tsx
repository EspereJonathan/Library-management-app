import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Input from '../Styled-Input';
import "./index.scss";
import { IModal } from '../../model/model';


//React-bootstrap. Modals Available at: https://react-bootstrap.github.io/components/modal/ [Accessed: 1 January 2020].

const ModalButton:React.FC<IModal> = ({property, input1, input2, 
input0, inputType0, InputPh0, input3, inputType1, inputType2, inputType3, TypeofSelect,
InputPh1, InputPh2, InputPh3, handleChange, handleSubmit, SelectRequireBool,
selectDisplay, selectValue1, selectValue2, handleSelectChange, initialiseState
}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false); initialiseState()}
  const handleShow = () => {setShow(true); initialiseState()}

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        {`${property}`}
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${property}`}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
              <Input name={`${input0}`} type={inputType0} onChange={handleChange} placeholder ={`${InputPh0}`} required />
              <Input name={`${input1}`} type={inputType1} onChange={handleChange} placeholder ={`${InputPh1}`} required />
              <Input name={`${input2}`} type={inputType2} onChange={handleChange} placeholder ={`${InputPh2}`} required />
              <Input name={`${input3}`} type={inputType3} onChange={handleChange} placeholder ={`${InputPh3}`} required />
              {TypeofSelect}
              <select required={SelectRequireBool} onChange={handleSelectChange} style={{display:selectDisplay}}>
                <option></option>
                <option value={selectValue1} >{selectValue1}</option>
                <option value={selectValue2} >{selectValue2}</option>
              </select>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" type='submit'>
            Submit
          </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalButton;
