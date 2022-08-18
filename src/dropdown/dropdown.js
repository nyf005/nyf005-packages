import "../css/style.css";
import "./dropdown.css";
import chevronDown from "../assets/icons/chevron-down.svg";

export default function Dropdown(elementName, items) {
  const dropdown = document.createElement("div");
  dropdown.className = "dropdown";

  const element = document.createElement("div");
  element.classList.add("element");

  const p = document.createElement("p");
  p.textContent = elementName;

  const icon = document.createElement("img");
  icon.src = chevronDown;
  icon.setAttribute("alt", "chevron-down");
  icon.classList.add("element-icon");

  element.append(p, icon);

  const elementItems = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    let elementItem = document.createElement("a");
    elementItem.textContent = item.name;
    elementItem.href = item.to;
    li.appendChild(elementItem);
    elementItems.appendChild(li);
  });

  dropdown.append(element, elementItems);

  elementItems.addEventListener("mouseover", () => {
    element.classList.add("active");
  });

  elementItems.addEventListener("mouseout", () => {
    element.classList.remove("active");
  });
  return dropdown;
}
