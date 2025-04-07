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


const loadLessonDetails = (wordId) => {
  const url = `https://openapi.programming-hero.com/api/word/${wordId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayLessonDetails(data.data));
};

const displayLessonDetails = (wordDetails) => {
  document.getElementById("word_details").showModal();
  const wordContainerDetails = document.getElementById("wordContainer-details");
  wordContainerDetails.innerHTML = `
           <h1 class="text-2xl font-semibold font-hind-siliguri">${
             wordDetails.word
           }<span>(</span><span><i
                        class="fa-solid fa-microphone"></i>:
                    ${wordDetails.pronunciation}</span><span>)</span>
            </h1>
            <div>
                <h2 class="text-lg font-semibold">Meaning</h2>
                <p class="text-lg font-semibold font-hind-siliguri">${
                  wordDetails.meaning
                    ? `${wordDetails.meaning}`
                    : `অর্থ পাওয়া যায়নি `
                }</p>
            </div>
            <div>
                <h2 class="text-lg font-semibold">Example</h2>
                <p class="text-lg font-medium">${wordDetails.sentence}</p>
            </div>
             <div>
                <h2 class="text-lg font-semibold font-hind-siliguri">সমার্থক শব্দ গুলো</h2>
                <div class="space-x-3 space-y-2 ">
                    <div class="space-x-3 space-y-2">
  ${wordDetails.synonyms && wordDetails.synonyms.length > 0
    ? wordDetails.synonyms.map(synonym => synonym ? `<button class="btn">${synonym}</button>` : "").join("")
    : ""}
</div>

                </div>
            </div>
  `;
};