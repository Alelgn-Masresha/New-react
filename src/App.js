import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Destinations from "./Components/Destinations";
import image1 from "./img/logo.png";
import image2 from "./img/logo2.png";
import gonder from "./img/gonder.jpg";
import axum from "./img/axum.jpg";

// slide image
const images = [
  {
    head: "Gonder city",
    para: "Get amazed by the architecture and constraction of a castle built by hand and use eages as a concret",
    image: gonder,
  },
  {
    head: "Axum",
    para: "Ancient kingdom of Axum's roun that lived for centuries as a reminder of how advanced Axum civilization was.",
    image: axum,
  },
];

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Destinations>{images}</Destinations>
    </>
  );
}

export default App;
