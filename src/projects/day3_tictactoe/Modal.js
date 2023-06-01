import React, { useEffect } from 'react';

const Modal = ({modalContent,setModalContent}) => {


  var modalStyle = {
    backgroundColor: modalContent.color,
    color: "#E6E6E6",
    position: "absolute",
    top: "1rem",
    left: "50%",
    borderRadius: "1rem",
    transform: "translateX(-50%)",
    display: "inline-block",
    width: "max-content",
    padding: "5px 100px",

  }

  useEffect(()=>{
    setTimeout(()=>{
           setModalContent({visible:false,text:"", color:""})
    },3000)
  })


  return <div className="modal" style={modalStyle}>
    <p>{modalContent.text}</p>
  </div>;
};

export default Modal;

