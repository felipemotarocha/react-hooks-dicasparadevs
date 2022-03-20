import { useLayoutEffect, useRef, useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);

  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (!popup.current || !button.current) return;

    const { bottom } = button.current.getBoundingClientRect();

    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Toggle Modal
      </button>

      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          Hello from modal!
        </div>
      )}
    </>
  );
};

export default Modal;
