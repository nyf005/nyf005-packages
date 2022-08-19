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
  leftBtn.addEventListener("click", () => {
    showPrevOrNext(images, "previous");
  });

  const rightBtn = document.createElement("button");
  rightBtn.id = "right";
  const chevronRight = document.createElement("img");
  chevronRight.src = rightChevron;
  rightBtn.appendChild(chevronRight);
  rightBtn.addEventListener("click", () => {
    showPrevOrNext(images, "next");
  });

  const pictureDiv = document.createElement("div");
  pictureDiv.id = "picture";

  const dots = document.createElement("div");
  dots.id = "dots";

  images.forEach((_, index) => {
    const dot = Dot(index);
    dot.addEventListener("click", () => {
      dotDisplay(images, dot.getAttribute("data-img"));
    });
    dots.appendChild(dot);
  });

  //   Default Image
  const img = generateImage(images[0], 0);
  pictureDiv.append(img);
  dots.childNodes[0].classList.add("fill");

  pictureDiv.append(dots);

  imgContainer.append(leftBtn, pictureDiv, rightBtn);

  return imgContainer;
}

function Dot(index) {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.setAttribute("data-img", index);

  return dot;
}

function generateImage(source, index) {
  const img = document.createElement("img");
  img.src = source;
  img.setAttribute("data-index", index);

  return img;
}

function showPrevOrNext(images, direction) {
  // Get the current picture
  const pictureDiv = document.getElementById("picture");
  const currentPicture = document.querySelector("#picture img");
  const currentIndex = Number(currentPicture.getAttribute("data-index"));
  const nextIndex = direction == "next" ? currentIndex + 1 : currentIndex - 1;
  const dots = document.getElementsByClassName("dot");

  // Create a new picture
  if (nextIndex < images.length && nextIndex > -1) {
    const newPicture = generateImage(images[nextIndex], nextIndex);
    pictureDiv.replaceChild(newPicture, currentPicture);
    dots[currentIndex].classList.remove("fill");
    dots[nextIndex].classList.add("fill");
  }
}

function dotDisplay(images, indexToDisplay) {
  const pictureDiv = document.getElementById("picture");
  const currentPicture = document.querySelector("#picture img");
  const currentIndex = Number(currentPicture.getAttribute("data-index"));
  const dots = document.getElementsByClassName("dot");

  const newPicture = generateImage(images[indexToDisplay], indexToDisplay);
  pictureDiv.replaceChild(newPicture, currentPicture);
  dots[currentIndex].classList.remove("fill");
  dots[indexToDisplay].classList.add("fill");
}
