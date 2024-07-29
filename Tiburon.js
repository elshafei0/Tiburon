// ----------------for old photo
const right_topBtn = document.getElementById("right-top");
const left_topBtn = document.getElementById("left-top");
const slides_old = document.querySelector(".imgs_old");
let currentIndex_top = 0;
left_topBtn.addEventListener("click", () => {
  currentIndex_top =
    currentIndex_top == 0
      ? slides_old.children.length - 1
      : (currentIndex_top - 1) % slides_old.children.length;
  slides_old.style.transform = `translateX(-${currentIndex_top * 100}%)`;
});
right_topBtn.addEventListener("click", () => {
  currentIndex_top =
    currentIndex_top == 15
      ? slides_old.children.length - 1
      : (currentIndex_top + 1) % slides_old.children.length;
  slides_old.style.transform = `translateX(-${currentIndex_top * 100}%)`;
});
// ----------------for new photo

const right_bottomBtn = document.getElementById("right-bottom");
const left_bottomBtn = document.getElementById("left-bottom");
const slides_new = document.querySelector(".imgs_new");
let currentIndex_bottom = 0;
left_bottomBtn.addEventListener("click", () => {
  currentIndex_bottom =
    currentIndex_bottom == 0
      ? slides_new.children.length - 1
      : (currentIndex_bottom - 1) % slides_new.children.length;
  slides_new.style.transform = `translateX(-${currentIndex_bottom * 100}%)`;
});
right_bottomBtn.addEventListener("click", () => {
  currentIndex_bottom =
    currentIndex_bottom == 16
      ? slides_new.children.length - 1
      : (currentIndex_bottom + 1) % slides_new.children.length;
  slides_new.style.transform = `translateX(-${currentIndex_bottom * 100}%)`;
});
// ----------------for new photo
const right_motoBtn = document.getElementById("right-moto");
const left_motoBtn = document.getElementById("left-moto");
const slides_moto = document.querySelector(".imgs_moto");
let currentIndex_moto = 0;
left_motoBtn.addEventListener("click", () => {
  currentIndex_moto =
    currentIndex_moto == 0
      ? slides_moto.children.length - 1
      : (currentIndex_moto - 1) % slides_moto.children.length;
  slides_moto.style.transform = `translateX(-${currentIndex_moto * 100}%)`;
});

// for Motors
right_motoBtn.addEventListener("click", () => {
  currentIndex_moto =
    currentIndex_moto == 10
      ? slides_moto.children.length - 1
      : (currentIndex_moto + 1) % slides_moto.children.length;
  slides_moto.style.transform = `translateX(-${currentIndex_moto * 100}%)`;
});
