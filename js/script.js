document.addEventListener("alpine:init", () => {
  const storedCount = localStorage.getItem('count');
  const initCount = storedCount ? parseInt(storedCount) : 0;

  Alpine.store("data", {
    topic: "Alpine Tailwind Starter",
    count: initCount,
    inputPoints: 0,
    color: "weiß"
  });
});

const data = () => Alpine.store("data")

function inc() {
  data().count += 1;
  saveCountToLocalStorage();
}

function dec() {
  data().count -= 1;
  saveCountToLocalStorage();
}

function addTen() {
  data().count += 10;
  saveCountToLocalStorage();
}

function subTen() {
  data().count -= 10;
  saveCountToLocalStorage();
  console.log("uhu");
}


function addUserInput() {
  data().count += data().inputPoints;
  saveCountToLocalStorage();
}

function subUserInput() {
  data().count -= data().inputPoints;
  saveCountToLocalStorage();
}

function saveCountToLocalStorage() {
  const storedCount = localStorage.getItem('count');
  localStorage.setItem('count', data().count);
  console.log("foo");
  console.log(storedCount);
}

function resetCounter() {
  data().count = 0;
}
