const showLoader = () => {
  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("loader-details").classList.add("hidden");
};

const hideLoader = () => {
  document.getElementById("loader").classList.add("hidden");
  document.getElementById("loader-details").classList.remove("hidden");
};

function removeActiveClass() {
  const btnActive = document.getElementsByClassName("active");
  for (let btn of btnActive) {
    btn.classList.remove("active");
  }
}