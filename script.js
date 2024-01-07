const shareBtn = document.querySelector(".user-share");
const shareBox = document.querySelector(".share-box");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
  shareBox.classList.toggle("view");
});
