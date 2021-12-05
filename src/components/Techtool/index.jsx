import { LazyLoadImage } from "react-lazy-load-image-component";
import { tools } from "../../data";
import "./_style.scss";

export default function Techtool() {
  return (
    <div id="techTools" className="techTool_container">
      <h3 className="techtool_header">Work with</h3>
      <div className="techTools_wrap">
        {tools.map((item, i) => (
          <LazyLoadImage
            key={i}
            alt={item.alt}
            src={item.path}
            title={item.alt}
            className="tool_image"
          />
        ))}
      </div>
    </div>
  );
}
