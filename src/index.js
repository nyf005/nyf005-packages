import Dropdown from "./dropdown/dropdown.js";
import DropdownMenu from "./dropdown_menu/dropdown_menu";
import Carousel from "./carousel/carousel.js";

const content = document.getElementById("content");

const carousel = Carousel([
  "https://i.pinimg.com/736x/3d/21/0f/3d210f43d6afeeb6ff4246724f1b634b.jpg",
  "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg",
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
