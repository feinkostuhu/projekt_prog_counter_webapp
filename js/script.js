document.addEventListener("alpine:init", () => {
  Alpine.store("data", {
    topic: "Alpine Tailwind Starter",
    count: 0,
  });
});

const data = () => Alpine.store("data")

function inc(){
data().count += 1;  
}

function dec(){
  data().count -= 1;  
  }

  function addTen(){
    data().count += 10;  
    }

    function subTen(){
      data().count -= 10;  
      }
  
