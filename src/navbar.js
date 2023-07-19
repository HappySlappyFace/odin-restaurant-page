import { $content, createHtmlElement } from "./index.js";
import "./style.css";
import Logo from "./img/logo.png";

function render() {
  const navbarItems = ["Menu", "Book", "Contact", "Github"];
  const $header = document.createElement("header");
  const $ul = document.createElement("ul");
  $ul.setAttribute("id", "headerNavbar");

  const $li = createHtmlElement("li", null, null, null);
  const $img = new Image();
  $img.id = "headerNavbarImg";
  $img.src = Logo;
  $img.dataset.target = "Home";
  $li.appendChild($img);
  $li.classList.add("headerNavbarChild");

  $ul.appendChild($li);

  navbarItems.forEach((item) => {
    const $li = createHtmlElement("li", null, null, item);
    $li.dataset.target = item;
    $li.classList.add("headerNavbarChild");
    $ul.appendChild($li);
  });

  $header.appendChild($ul);
  $content.appendChild($header);
}
export { render as createNavbar };
