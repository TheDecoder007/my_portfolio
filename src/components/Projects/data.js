// import Video3 from "../../assets/videos/sandstormVid.mp4";

export const projects = [
  {
    title: "weTravelToo",
    description: "Full MERN stack, react-bootstrap",
    line: "A complete remake of weTravel from scratch, using the full MERN stack, and improving the UI.",
    img: require("../../assets/photos/weTravelToo.png"),
    alt: "Screenshot of weTravelToo",
    website: "https://we-travel-too.herokuapp.com/",
    repo: "https://github.com/TheDecoder007/weTravelToo",
  },
  {
    title: "SandStorm HQ",
    description: "TypeScript, Node, JavaScript",
    line: "Lead developer on virtual HQ for Sandstorm.co. Repository is private, but can provide references. Sign in as Guest to see the build.",
    vid: (
      <video autoPlay loop muted id="video" className="headerVid">
        <source src="../../assets/videos/sandstormVid.mp4" type="video/mp4" />
      </video>
    ),
    alt: "Screenshots of SandStorm HQ",
    website:
      "https://play.decentraland.org/?position=50%2C-84&realm=artemis&island=I4ozf",
    repo: "https://github.com/last-slice/sandstorm-hq/tree/dev",
  },
  {
    title: "Last Slice Collective",
    description: "Javascript, Node, Typescript, DCL SDK",
    line: "A full cycle web3 development studio, that onboards and builds experiences in the Metaverse for high-profile clients around the world.",
    img: require("../../assets/photos/lastslice-pic.png"),
    alt: "Screenshots of the Last Slice site",
    website: "https://LastSlice.org",
    repo: "https://LastSlice.org",
  },
  {
    title: "weTravel",
    description: "Javascript, Handlebars, Cloudinary, Sequelize, Express",
    line: "A travel blog site where users can login and create blogs, upload photos, and comment on other blogs.",
    img: require("../../assets/photos/weTravel.png"),
    alt: "Screenshots of the weTravel site",
    website: "https://we-travel.herokuapp.com/",
    repo: "https://github.com/TheDecoder007/weTravel",
  },
  {
    title: "Decentraland",
    description: "Javascript, Node, Typescript, DCL SDK",
    line: "A Metaverse where building anything is possible, using the SDK. This link is to my personal project, where I test and implement techniques for advanced builds.",
    img: require("../../assets/photos/Voicebox.png"),
    alt: "Screenshots of Decentraland",
    website:
      "https://play.decentraland.org/?position=142%2C106&realm=unicorn&island=I59kf",
    repo: "https://github.com/TheDecoder007/VoiceBox_Lawn",
  },
  {
    title: "entertainMe",
    description: "Javascript, jQuery, Bulma",
    line: "An entertainment search site using IMDB API to pull movie info, image, and rating and displays as a card.",
    img: require("../../assets/photos/entertainme.png"),
    alt: "Screenshots of the entertainMe site",
    website: "https://vertis-z.github.io/entertain-me/",
    repo: "https://github.com/Vertis-Z/entertain-me",
  },
  {
    title: "Weather Dashboard",
    description: "HTML, CSS, Javascript, Bulma, Weather API",
    line: "An app to get local weather reports. Current, 5 day, and recent serches saved.",
    img: require("../../assets/photos/Weather-app.png"),
    alt: "Screenshots of the Weather Dashboard site",
    website: "https://thedecoder007.github.io/weather-dashboard/",
    repo: "https://github.com/TheDecoder007/weather-dashboard",
  },
  {
    title: "My First Portfolio",
    description: "HTML, CSS",
    line: "My first portfolio page built after 4 weeks in class. How far I've come!",
    img: require("../../assets/photos/first-portfolio.png"),
    alt: "Screenshots of my first portfolio",
    website: "https://thedecoder007.github.io/challenge-two/",
    repo: "https://github.com/TheDecoder007/challenge-two",
  },
  {
    title: "Photo-port",
    description: "React, Javascript",
    line: "A class module using React to build a website that conditionally renders pages.",
    img: require("../../assets/photos/photo-port.png"),
    alt: "Screenshots of the Photo-port site",
    website: "https://github.com/TheDecoder007/photo-port",
    repo: "https://github.com/TheDecoder007/photo-port",
  },
  {
    title: "Quiz-Challenge",
    description: "HTML, CSS, Javascript",
    line: "A fun quiz to test your wits, with a timer, and button color displays right or wrong answers.",
    img: require("../../assets/photos/quizPic.png"),
    alt: "Screenshots of the quiz challenge",
    website: " https://github.com/TheDecoder007/quiz-challenge",
    repo: "https://thedecoder007.github.io/quiz-challenge/",
  },
];
