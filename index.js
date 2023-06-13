const shareBar = document.getElementById("shareBar");
const btn = document.getElementById("btn")
const imgBtn = document.getElementById("imgBtn")
const mainWrapper = document.getElementById("mainWrapper");
const cardFooter = document.getElementById("cardFooter");
const width = window.innerWidth;
let checkActualWidth = width;

window.addEventListener('resize', function(event) {
  checkActualWidth = window.innerWidth

  if (window.innerWidth < 1000) {
    cardFooter.classList.remove("hide");
    shareBar.classList.add("hide");
  }
});
console.log(checkActualWidth);

function toggleDivs() {

    if (checkActualWidth < 1000)  {
      if (cardFooter.classList.contains("hide")) {
        cardFooter.classList.remove("hide");
        shareBar.classList.add("hide");
      } else {
        cardFooter.classList.add("hide");
        shareBar.classList.remove("hide");
      }
    } else {
      if (shareBar.classList.contains("hide")) {
        shareBar.classList.remove("hide");
      } else {
        shareBar.classList.add("hide");
      }
    }

  }

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (checkActualWidth >= 1000) {
    if (event.target !== shareBar && event.target !== btn && event.target !== imgBtn) {
      shareBar.classList.add("hide");
    }
  }
});

// When the user clicks on the modal content, prevent the modal from closing
shareBar.addEventListener("click", function(event) {
  if (checkActualWidth >= 1000) {
    event.stopPropagation();
  }
}); 