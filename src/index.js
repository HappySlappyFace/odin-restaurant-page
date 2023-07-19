import { createNavbar } from "./navbar";
import { createFooter } from "./footer";
import "./style.css";
const $content = document.getElementById("content");

function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((clase) => element.classList.add(clase));
  if (content) element.textContent = content;
  return element;
}
function home() {
  $content.innerHTML = "";
  createNavbar();
  createFooter();
}

document.addEventListener("click", (e) => {
  const target = e.target.dataset.target;
  //   console.log("wtf", event.target.dataset.target);
  if (target === "Home") home();
  if (target === "Menu") menu();
  if (target === "Book") book();
  if (target === "Contact") contact();
});
home();
export { createHtmlElement, $content };
