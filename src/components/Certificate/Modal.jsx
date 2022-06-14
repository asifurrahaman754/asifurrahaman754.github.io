import reactDom from "react-dom";
import { IoMdClose } from "react-icons/io";

export default function Modal({ img, setmodalOpen }) {
  return reactDom.createPortal(
    <>
      <div className="modal_container">
        <span onClick={() => setmodalOpen(false)} className="modal_close">
          <IoMdClose />
        </span>
        <img src={img} alt="modal" className="opended_img" />
      </div>
    </>,
    document.getElementById("modal")
  );
}
