import Dropdown from "./dropdown/dropdown";

const content = document.getElementById("content");

const items = [
  {
    name: "item 1",
    to: "#",
  },
  {
    name: "item 2",
    to: "#",
  },
  {
    name: "item 3",
    to: "#",
  },
  {
    name: "item 4",
    to: "#",
  },
];
content.appendChild(Dropdown("Test", items));

export { Dropdown };
