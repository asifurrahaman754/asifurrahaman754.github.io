import { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Section } from "react-scroll-section";

import BlogItem from "./BlogItem";
import "./_style.scss";

export default function Blogs() {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@asifurrahaman754"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data.items.slice(0, 3)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Section id="blog" className="Blog_container">
      <div className="container_heading">
        <h3 className="blogSec_tit">
          <span className="blog">Blog</span>
          <span className="blog_sub_title">&nbsp; - i write sometimes</span>
        </h3>

        <Link to="/blogs" className="right_arrow">
          <BsChevronRight />
        </Link>
      </div>

      <div className="article_wrap">
        {Blogs.map((item, i) => (
          <BlogItem key={i} item={item} />
        ))}
      </div>
    </Section>
  );
}
