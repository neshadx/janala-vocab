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


const loadBtnCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/levels/all"
  );

  const data = await response.json();
  displayBtnCategory(data.data);
};

const loadLessonCategory = (id) => {
  showLoader();

  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      removeActiveClass();
      const clickBtn = document.getElementById(`btn-${id}`);
      clickBtn.classList.add("active");
      displayLesson(data.data);
    });
};
