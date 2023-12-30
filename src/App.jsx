import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const closeFunction = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal open={open} closeFunction={closeFunction}>
          This is custom modal
        </Modal>
      </div>
    </>
  );
}

export default App;
