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

 
const displayBtnCategory = (lessons) => {
  lessons.forEach((element) => {
    const lessonBtnContainer = document.getElementById("Lesson-btn");

    const lessonBtnDiv = document.createElement("div");
    lessonBtnDiv.innerHTML = `
        <button id="btn-${element.level_no}" onclick ="loadLessonCategory(${element.level_no})"
        class="btn btn-sm text-[#422AD5] text-base btn-outline font-semibold hover:bg-[#422AD5] hover:text-white"><span><i class="fa-solid fa-book-open">
        </i></span>Lesson -${element.level_no} </button>
        `;
    lessonBtnContainer.append(lessonBtnDiv);
  });
};
