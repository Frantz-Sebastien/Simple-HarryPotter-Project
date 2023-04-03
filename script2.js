const dropdown = document.getElementById("dropdown")
const description = document.getElementById("description")
const belowUl = document.querySelector("ul")


let hexPromise = fetch("https://hp-api.onrender.com/api/spells")

    hexPromise.then(response => response.json())
        .then(data => {
            for (let spell of data) {
            let option = document.createElement("option")
            option.textContent = spell.name;
            option.value = spell.description;
        dropdown.appendChild(option);
    }
  })


dropdown.addEventListener("change", function() {
  let selectedOption = dropdown.options[dropdown.selectedIndex]
  description.textContent = selectedOption.value

  if(selectedOption.value.toLowerCase().includes("unforgivable")){
    window.alert("This is an Unforgivable Curse! Proceed with caution!")
  }
})