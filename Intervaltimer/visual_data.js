let add = document.getElementById("starter")
add.addEventListener("click", starter);

let clearer = document.getElementById("clear")
clearer.addEventListener("click", clear_input)
let ul = document.querySelector(".box");

function starter(){
        let array = document.getElementById("array").value;
        let antal = array.split(",").length;
        let items = array.split(",").map((item) => Number(item));
        const selectElement = document.getElementById("structure");
        const selectedValue = selectElement.value;
        if (selectedValue === "array") {
            selected_array(antal, items);
        }
        if(selectedValue ==="yeet"){
            console.log("yeet")
        }
      }
      
function selected_array(antal, items) {
  // clear existing balls
  ul.innerHTML = "";
  const fragment = new DocumentFragment();
  for (let i = 0; i < antal; i++) {
    const li = document.createElement("div");
    li.id = "r" + 1;
    li.className = "balls";
    li.textContent = items[i];
    fragment.append(li);
  }
  
  ul.append(fragment);
}

function clear_input() {
  ul.innerHTML = "";
}
