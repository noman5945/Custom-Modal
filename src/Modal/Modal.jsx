import React, { useEffect } from "react";
import "../Modal/Modal.css";

const Modal = ({ open, children, closeFunction }) => {
  //close on click outside of modal
  useEffect(() => {
    document.addEventListener("mousedown", closeFunction);
  });
  if (!open) {
    return null;
  }
  return (
    <>
      <div className="background-shadow" />
      <div className="modal-body">
        {children}
        <button onClick={closeFunction}>close</button>
      </div>
    </>
  );
};

export default Modal;
