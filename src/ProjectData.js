const netflix = "NETFLIX Clone";
const youtube = "YouTube Clone";
const AiNews = "AI News App";
const covid = "Covid Tracker";

const Data = [
  {
    id: netflix.split(" ").join("-"),
    title: netflix,
    subtitle: "This is a netflix clone designed using a movie API",
    live: "https://netflix-clone754.netlify.app/",
    images: [
      "/assets/img/Projects/netflix-clone/netflix.png",
      "/assets/img/Projects/netflix-clone/netflix2.png",
      "/assets/img/Projects/netflix-clone/netflix3.png",
      "/assets/img/Projects/netflix-clone/netflix4.png",
    ],
    descripion:
      "At the time I was still using BackboneJS for the client side routing, although the views were renderd directly in the Microsoft C# MVC's back-end. The client side javascript was entirely modularized with RequireJS, which is awesome for code maintainance and scalability.",
    tools: ["React js", "Sass", "Firebase"],
  },
  {
    id: youtube.split(" ").join("-"),
    title: youtube,
    subtitle:
      "This is a fully functional YouTube clone created with the original YouTube API",
    live: "https://yt-clone754.netlify.app",
    images: [
      "/assets/img/Projects/youtube/youtube.png",
      "/assets/img/Projects/youtube/yt2.png",
      "/assets/img/Projects/youtube/yt3.png",
      "/assets/img/Projects/youtube/yt4.png",
    ],
    descripion:
      "At the time I was still using BackboneJS for the client side routing, although the views were renderd directly in the Microsoft C# MVC's back-end. The client side javascript was entirely modularized with RequireJS, which is awesome for code maintainance and scalability.",
    tools: ["React js", "Sass", "bootstrap", "Firebase"],
  },
  {
    id: AiNews.split(" ").join("-"),
    title: AiNews,
    subtitle:
      "This is a News app powered by a voice assistant. You can say the specific commands to get the news and the app will do that for you",
    live: "https://newswithalan.netlify.app/",
    images: [
      "/assets/img/Projects/youtube/youtube.png",
      "/assets/img/Projects/youtube/yt2.png",
      "/assets/img/Projects/youtube/yt3.png",
      "/assets/img/Projects/youtube/yt4.png",
    ],
    descripion:
      "At the time I was still using BackboneJS for the client side routing, although the views were renderd directly in the Microsoft C# MVC's back-end. The client side javascript was entirely modularized with RequireJS, which is awesome for code maintainance and scalability.",
    tools: ["React js", "Sass", "bootstrap", "Firebase"],
  },
  {
    id: covid.split(" ").join("-"),
    title: covid,
    subtitle:
      "This is a Covid Tracker app where user can see the covid info from anywhere in the world in real time.",
    live: "https://covid-tracker754.netlify.app/",
    images: [
      "/assets/img/Projects/Covid/covid.png",
      "/assets/img/Projects/Covid/covid2.jpg",
    ],
    descripion:
      "At the time I was still using BackboneJS for the client side routing, although the views were renderd directly in the Microsoft C# MVC's back-end. The client side javascript was entirely modularized with RequireJS, which is awesome for code maintainance and scalability.",
    tools: ["React js", "Sass", "bootstrap", "Firebase"],
  },
];

export default Data;
