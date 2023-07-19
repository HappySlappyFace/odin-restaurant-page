import { $content, createHtmlElement } from "./index.js";
import "./style.css";
import Img1 from "./img/AlexTheFrench.jpg";
import Img2 from "./img/chefImg.jpg";

function render() {
  const $section1 = createHtmlElement("div", null, ["section1"], null);
  const img = new Image();
  img.src = Img1;
  img.id = "section1Background";
  $section1.appendChild(img);
  const $h1 = createHtmlElement(
    "h1",
    "section1Title",
    null,
    "Salut! I'm Alex, aka \"French Guy Cooking.\" Passionate about cuisine, I'm here to bring a world of international flavors to your kitchen. Let's embark on a culinary adventure together and explore the art of cooking, with a global twist!"
  );
  $section1.appendChild($h1);

  const $section2 = createHtmlElement("div", null, ["section2"], null);
  const img2 = new Image();
  img2.src = Img2;
  img2.classList.add("indexSection2");
  $section2.appendChild(img2);

  $content.appendChild($section1);
  $content.appendChild($section2);
}
export { render as createHome };
