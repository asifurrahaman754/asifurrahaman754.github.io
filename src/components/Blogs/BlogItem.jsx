import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function BlogItem({ item }) {
  const [imageDidNotLoad, setimageDidNotLoad] = useState(false);
  const { title, guid, thumbnail, pubDate, description } = item;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  //remove all the html tag
  const blogDesc = description.replace(/<[^>]*>/g, "");

  const getDate = pubdate => {
    const dateObj = new Date(pubdate);
    let month = monthNames[dateObj.getMonth() - 1];
    let date = dateObj.getDate();
    let year = dateObj.getFullYear();

    return `${date} ${month}, ${year}`;
  };

  return (
    <article className="Blog">
      <div
        style={{ backgroundImage: `url('${thumbnail}')` }}
        className="blog_thubmnail"
      ></div>

      <h3 className="blog_title">{title}</h3>
      <span className="pub_date">{getDate(pubDate)}</span>
      <p className="blog_Details">{blogDesc.substring(0, 100) + "..."}</p>
      <a target="_blank" href={guid} className="blog_link">
        learn more{" "}
        <span className="learnMore_icon">
          <FiExternalLink />
        </span>
      </a>
    </article>
  );
}
