import { FaAward } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./_style.scss";
import { certificates } from "../../data";
import Modal from "./Modal";
import { useState } from "react";

export default function Certificate() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalImg, setmodalImg] = useState("");

  const openModal = img => {
    setmodalOpen(true);
    setmodalImg(img);
  };

  return (
    <div className="certificate_container">
      {modalOpen && <Modal img={modalImg} setmodalOpen={setmodalOpen} />}

      <h3 className="header">
        <span>
          <FaAward />
        </span>{" "}
        Certificate
      </h3>

      <div className="cer_wrapper">
        {certificates.map((img, i) => (
          <LazyLoadImage
            key={i}
            alt={img.name}
            title={img.name}
            src={img.img}
            className="certificate"
            onClick={() => openModal(img.img)}
          />
        ))}
      </div>
    </div>
  );
}
