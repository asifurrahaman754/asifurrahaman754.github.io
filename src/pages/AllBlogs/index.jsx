import { useState, useEffect } from "react";
import { SiMedium } from "react-icons/si";

import Navbar from "../../components/Navbar";
import BlogItem from "../../components/Blogs/BlogItem";
import "./_BlogStyle.scss";

export default function Blogs() {
  const [blogs, setblogs] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    setloading(true);
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@asifurrahaman754"
    )
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        seterror("");
        setblogs(data.items);
      })
      .catch((err) => {
        setloading(false);
        setblogs([]);
        seterror("404");
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        {!error && (
          <h3 className="blogPage_heading">
            Read my blogs on Medium{" "}
            <span className="medium">
              <SiMedium />
            </span>
          </h3>
        )}
        {loading && <div className="loading-spinner"></div>}
        {error && <p className="error">{error}</p>}

        <div className="blogPage_container">
          <div className="blog_wrap">
            {blogs && blogs.map((item, i) => <BlogItem key={i} item={item} />)}
          </div>
        </div>
      </main>
    </>
  );
}
