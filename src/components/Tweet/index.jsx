import "./_style.scss";

export default function Tweet() {
  return (
    <div className="tweet">
      <h3 className="tweet-header">
        <span className="tweet-header-title">Tweets</span>
        <span className="tweet-header-subtitle">
          &nbsp; - i share tips about development on twitter
        </span>
      </h3>
      <div className="tweet-wrap">
        <div className="tweet-content">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              From knowing zero in PHP and MySQL to building a fully functioning
              library management system😍.
              <br />
              This is a college project and it was great learning. I think the
              best learning is to learn by doing 🔥
              <br />
              <br />
              project GitHub link:{" "}
              <a href="https://t.co/6gQLsn1ffm">https://t.co/6gQLsn1ffm</a>{" "}
              <a href="https://t.co/gntjPv3wSR">pic.twitter.com/gntjPv3wSR</a>
            </p>
            <a href="https://twitter.com/asifur754/status/1520053704673488897?ref_src=twsrc%5Etfw">
              April 29, 2022
            </a>
          </blockquote>{" "}
        </div>
        <div className="tweet-content">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Let&#39;s know the difference between &quot;Hot reloading&quot;
              and &quot;Live reloading&quot;😀
            </p>
            &mdash; Asifur Rahaman (@asifur754){" "}
            <a href="https://twitter.com/asifur754/status/1528749553838530560?ref_src=twsrc%5Etfw">
              May 23, 2022
            </a>
          </blockquote>
        </div>

        <div className="tweet-content">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              <a href="https://twitter.com/hashtag/tip_of_the_day?src=hash&amp;ref_src=twsrc%5Etfw">
                #tip_of_the_day
              </a>
              <br />
              we all know about HTML input[type=&#39;number&#39;] tag. But do
              you know you can&#39;t give float value to a default input[ type=
              &quot;number&quot;], because of the &quot;step&quot; attribute.
              <br />
              <br />
              what is &quot;step&quot; attribute? 👇🧵
            </p>
            &mdash; Asifur Rahaman (@asifur754){" "}
            <a href="https://twitter.com/asifur754/status/1524650548099616769?ref_src=twsrc%5Etfw">
              May 12, 2022
            </a>
          </blockquote>{" "}
        </div>
        <div className="tweet-content">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              ✨PHP_TRICK✨
              <br />
              👉Autoload-method
              <br />
              <br />
              If you ever used PHP you absolutely faced this problem. We
              separate our code into different files so that our files stay
              readable and maintainable. But there is a catch
              <br />
              <br />
              👇🧵
            </p>
            &mdash; Asifur Rahaman (@asifur754){" "}
            <a href="https://twitter.com/asifur754/status/1531291685329596416?ref_src=twsrc%5Etfw">
              May 30, 2022
            </a>
          </blockquote>{" "}
        </div>
      </div>
    </div>
  );
}
