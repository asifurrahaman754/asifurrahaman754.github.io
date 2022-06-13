import Navbar from "../../components/Navbar";
import "./_Notfound.scss";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="notFound-wrapper">
        <p className="message big">404</p>
        <p className="message">page not found, try a different path</p>
        <img
          src="/assets/img/meme.jpg"
          alt="meme of an indian businessmen"
          title="meme of an indian businessmen"
        />
      </div>
    </>
  );
}
