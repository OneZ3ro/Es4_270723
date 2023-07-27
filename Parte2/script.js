const parola = document.querySelector(".parole");
const arr = document.querySelectorAll("i");
arr[0].style.display = "none";
arr[1].style.display = "none";
arr[2].style.display = "none";

const showI = () => {
  if (
    arr[0].style.display === "none" &&
    arr[1].style.display === "none" &&
    arr[2].style.display === "none"
  ) {
    arr[0].style.display = "inline-block";
    arr[0].classList.add("display-showI");
  } else if (
    arr[0].style.display === "inline-block" &&
    arr[1].style.display === "none" &&
    arr[2].style.display === "none"
  ) {
    arr[0].style.display = "none";
    arr[1].style.display = "inline-block";
    arr[1].classList.add("display-showI");
  } else if (
    arr[0].style.display === "none" &&
    arr[1].style.display === "inline-block" &&
    arr[2].style.display === "none"
  ) {
    arr[1].style.display = "none";
    arr[2].style.display = "inline-block";
    arr[2].classList.add("display-showI");
  } else if (
    arr[0].style.display === "none" &&
    arr[1].style.display === "none" &&
    arr[2].style.display === "inline-block"
  ) {
    arr[2].style.display = "none";
    arr[0].style.display = "inline-block";
    arr[0].classList.add("display-showI");
  }
};
showI();
parola.onclick = showI;

// const arrI = [];

//   for (let i = 0; i < arr.length; i++) {
//     arrI.push(arr[i].innerText);
//   }

//   console.log(arrI);
