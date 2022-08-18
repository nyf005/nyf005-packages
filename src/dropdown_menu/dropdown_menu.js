import Dropdown from "../dropdown/dropdown";
import "./dropdown_menu.css";

export default function DropdownMenu(items) {
  const dropdownMenu = Dropdown(items[0].name, items);
  dropdownMenu.classList.remove("dropdown");
  dropdownMenu.classList.add("dropdown-menu");

  const title = dropdownMenu.childNodes[0].childNodes[0];

  const elements = dropdownMenu.childNodes[1].childNodes;
  let lastIndex = 0;
  elements[lastIndex].style.display = "none";
  elements.forEach((element, index) => {
    element.classList.add("dropdown-menu-item");

    // Add event listner on click
    element.addEventListener("click", () => {
      elements[lastIndex].style.display = "block";
      elements[index].style.display = "none";
      lastIndex = index;
      title.textContent = element.textContent;
    });
  });

  return dropdownMenu;
}
