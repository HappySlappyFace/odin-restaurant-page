import { $content, createHtmlElement } from "./index.js";
import "./style.css";
import RamenPic from "./img/ramenNoodles.webp";
import PastaPic from "./img/pasta.jpg";

function render() {
  const $section2 = createHtmlElement("div", null, ["section2"], null);
  const $h1Ramen = createHtmlElement("h1", "section2Title", null, "Ramen");
  const $imgRamen = new Image();
  $imgRamen.src = RamenPic;

  $imgRamen.classList.add("section2Img");
  const $h3section2 = createHtmlElement(
    "h3",
    "section2Text",
    null,
    "Perfecting ramen noodles was no easy task. I faced countless trials, experimenting with broth and tirelessly kneading dough. Join me in unraveling the secrets of homemade ramen, where passion meets obsession. Get ready to be captivated by the enchanting world of ramen!"
  );
  $section2.appendChild($h1Ramen);
  $section2.appendChild($imgRamen);
  $section2.appendChild($h3section2);

  const $h1Pasta = createHtmlElement("h1", "section2Title", null, "Pasta");
  const $imgPasta = new Image();
  $imgPasta.src = PastaPic;
  $imgPasta.classList.add("section2Img");
  const $h3section2Pasta = createHtmlElement(
    "h3",
    "section2Text",
    null,
    "Pasta is a staple in my kitchen. I love experimenting with different shapes and flavors, and I'm always on the lookout for new pasta recipes. Join me in exploring the world of pasta, where we'll learn how to make pasta from scratch and discover the secrets of the perfect sauce."
  );
  $section2.appendChild($h1Pasta);
  $section2.appendChild($imgPasta);
  $section2.appendChild($h3section2Pasta);

  $content.appendChild($section2);
}
export { render as createMenu };
