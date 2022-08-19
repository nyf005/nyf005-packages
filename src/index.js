import Dropdown from "./dropdown/dropdown.js";
import DropdownMenu from "./dropdown_menu/dropdown_menu";
import Carousel from "./carousel/carousel.js";

const content = document.getElementById("content");

const carousel = Carousel([
  "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
]);

content.appendChild(carousel);
export { Dropdown, DropdownMenu, Carousel };

// Dropdown  and Dropdown-menu tests

// const items = [
//   {
//     name: "item 1",
//     to: "#",
//   },
//   {
//     name: "item 2",
//     to: "#",
//   },
//   {
//     name: "item 3",
//     to: "#",
//   },
//   {
//     name: "item 4",
//     to: "#",
//   },
// ];
// content.appendChild(Dropdown("Test", items));
// content.appendChild(DropdownMenu(items));
