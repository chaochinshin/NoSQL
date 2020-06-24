init();

var newbutton = document.querySelector ("#newbutton");

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}
async function handleFormSubmit(event) {
  event.preventDefault();
  console.log("createWorkout")
  const workout = await API.createWorkout();
  console.log(workout._id)
  location = "/exercise?id=" + workout._id
}
if (newbutton) {
  newbutton.addEventListener("click", handleFormSubmit);
}
