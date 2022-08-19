import "./carousel.css";
import leftChevron from "../assets/icons/chevron-left.svg";
import rightChevron from "../assets/icons/chevron-right.svg";

export default function Carousel(images) {
  const imgContainer = document.createElement("div");
  imgContainer.id = "img-container";

  const leftBtn = document.createElement("button");
  leftBtn.id = "left";
  const chevronLeft = document.createElement("img");
  chevronLeft.src = leftChevron;
  leftBtn.appendChild(chevronLeft);

  const rightBtn = document.createElement("button");
  rightBtn.id = "right";
  const chevronRight = document.createElement("img");
  chevronRight.src = rightChevron;
  rightBtn.appendChild(chevronRight);

  const pictureDiv = document.createElement("div");
  pictureDiv.id = "picture";
  const picture = document.createElement("img");
  picture.src = images[0];

  const dots = document.createElement("div");
  dots.id = "dots";

  images.forEach((_, index) => {
    let dot = new Dot(index);
    console.log(dot);
    dots.appendChild(dot);
  });

  pictureDiv.append(picture, dots);

  imgContainer.append(leftBtn, pictureDiv, rightBtn);

  return imgContainer;
}

function Dot(index) {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.setAttribute("data-img", index);

  return dot;
}
