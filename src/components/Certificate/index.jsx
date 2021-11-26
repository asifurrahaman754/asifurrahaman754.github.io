import { FaAward } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./_style.scss";
import { certificates } from "../../data";

export default function Certificate() {
  return (
    <div className="certificate_container">
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
          />
        ))}
      </div>
    </div>
  );
}
