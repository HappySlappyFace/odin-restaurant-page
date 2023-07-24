import { $content, createHtmlElement } from "./index.js";
import "./style.css";
import Img1 from "./img/book.jpg";

function render() {
  const $section1 = createHtmlElement("div", null, ["section2"], null);
  const $h1Book = createHtmlElement("h1", "section2Title", null, "Book");
  const $imgBook = new Image();
  $imgBook.src = Img1;
  $imgBook.setAttribute("id", "bookImg");
  const $h3section2 = createHtmlElement(
    "h3",
    "section2Text",
    null,
    "Just a french guy cooking, my personal cookbook. By buying this book not only you support me but you gain extra knowledge i have learned thoughout the years as a chef! You can buy it on Amazon via this button!"
  );
  const buyButton = createHtmlElement("button", "buyButton", null, "Buy now!");

  buyButton.addEventListener("click", () => {
    window.open(
      "https://www.amazon.com/Just-French-Guy-Cooking-Recipes/dp/1787132234"
    );
  });

  $section1.appendChild($h1Book);
  $section1.appendChild($imgBook);
  $section1.appendChild($h3section2);
  $section1.appendChild(buyButton);
  $content.appendChild($section1);
}
export { render as createBook };
