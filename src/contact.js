import { $content, createHtmlElement } from "./index.js";
import "./style.css";
import Img1 from "./img/ramenShot.jpg";

function render() {
  const $section1 = createHtmlElement("div", null, ["section1"], null);
  const $img = new Image();
  $img.src = Img1;
  $img.id = "section1Background";
  $section1.appendChild($img);
  const $h1 = createHtmlElement("h1", "section1Title", null, "Contact me!");
  $section1.appendChild($h1);

  const $section2 = createHtmlElement("div", null, ["section2"], null);
  const $h2 = createHtmlElement("h2", "section2Title", null, "Social Media");

  const $twitterLogo = new Image();
  $twitterLogo.src = "https://img.icons8.com/fluent/48/000000/twitter.png";
  $twitterLogo.classList.add("contactLogo");
  $twitterLogo.addEventListener("click", () => {
    window.open("https://twitter.com/frenchguycookin");
  });
  const $h3 = createHtmlElement(
    "h3",
    "section2Text",
    ["contactLogos"],
    "@FrenchGuyCookin"
  );
  $h3.appendChild($twitterLogo);

  const $youtubeLogo = new Image();
  $youtubeLogo.src = "https://img.icons8.com/fluent/48/000000/youtube-play.png";
  $youtubeLogo.classList.add("contactLogo");
  $youtubeLogo.addEventListener("click", () => {
    window.open("https://www.youtube.com/channel/UCPzFLpOblZEaIx2lpym1l1A");
  });
  const $h4 = createHtmlElement(
    "h3",
    "section2Text",
    ["contactLogos"],
    "@FrenchGuyCooking"
  );
  $h4.appendChild($youtubeLogo);

  const $instagramLogo = new Image();
  $instagramLogo.src =
    "https://img.icons8.com/fluent/48/000000/instagram-new.png";
  $instagramLogo.classList.add("contactLogo");
  $instagramLogo.addEventListener("click", () => {
    window.open("https://www.instagram.com/frenchguycooking/");
  });
  const $h5 = createHtmlElement(
    "h3",
    "section2Text",
    ["contactLogos"],
    "@frenchguycooking"
  );
  $h5.appendChild($instagramLogo);

  $section2.appendChild($h2);
  $section2.appendChild($h3);
  $section2.appendChild($h4);
  $section2.appendChild($h5);
  $content.appendChild($section1);
  $content.appendChild($section2);
  // $content.appendChild();
}
export { render as createContact };
