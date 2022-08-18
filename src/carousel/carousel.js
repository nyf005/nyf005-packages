import "./carousel.css";
import leftChevron from "../assets/icons/chevron-left.svg";
import rightChevron from "../assets/icons/chevron-right.svg";

export default function Carousel(images) {
  const imgContainer = document.createElement("div");
  imgContainer.id = "img-container";

  const leftBtn = document.createElement("div");
  leftBtn.id = "left";
  const chevronLeft = document.createElement("img");
  chevronLeft.src = leftChevron;
  leftBtn.appendChild(chevronLeft);

  const rightBtn = document.createElement("div");
  rightBtn.id = "right";
  const chevronRight = document.createElement("img");
  chevronRight.src = rightChevron;
  rightBtn.appendChild(chevronRight);

  const pictureDiv = document.createElement("div");
  pictureDiv.id = "picture";
  const picture = document.createElement("img");
  picture.src = images[0];
  pictureDiv.appendChild(picture);

  imgContainer.append(leftBtn, picture, rightBtn);

  return imgContainer;
}
