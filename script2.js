const dropdown = document.getElementById("dropdown")
const description = document.getElementById("description")
const belowUl = document.querySelector("ul")


fetch("https://hp-api.onrender.com/api/spells")
  .then(response => response.json())
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
})






















// let demSpells = fetch(`https://hp-api.onrender.com/api/spells`)

// demSpells.then(response => {
//     return response.json()
// }).then(json => {
//     listOfspells(json)
// })

// let listOfspells = (json) => {
//     for (let i =0; i <json.length; i++){
//         let spell_options = document.createElement("option")
//         spell_options.value = json[i].name
//         spell_options.textContent = json[i].name;
//         theDropdown.add(spell_options)
//     }
// }



// dropdown.addEventListener("change", function() {
//     let selectedOption = dropdown.options[dropdown.selectedIndex];
//     description.textContent = selectedOption.value;
//   });




















// const chosenSpell = document.getElementById("spells-to-pick")

// chosenSpell.addEventListener("change",(event, json) =>{

//         // console.log(event.target.value)

//         for (let key in json){
//             if(event.target.value === json){
        
//                 let daSpell = spel.name
//                 let describeSpell = spel.description
        
//                 console.log(daSpell)
//                 console.log(describeSpell)}

                // let resultSpellName = document.createElement("li")
                // let resultSpellInfo = document.createElement("li")
                
                
                // resultSpellName.innerHTML = `<strong>Spell</strong>: ${spel.name}`
                // //             resultSpellInfo.innerHTML = `<strong>What it does</strong>: ${describeSpell}`
                
                // belowUl.append(resultSpellName)
                // //             belowUl.append(resultSpellInfo)
            // }})
    
        // const selectedSpell = (json, targetedSpell) => {
        //         // spellList.innerHTML = ""
                
        //         let selectedOption = theDropdown.options[theDropdown.selectedIndex].value;
        
        
        
                    
                
    // })






// })








//     [
//         {
//             "id": "c76a2922-ba4c-4278-baab-44defb631236",
//             "name": "Aberto",
//             "description": "Opens locked doors"
//         },
//         {
//             "id": "06485500-d023-4799-93fd-77f2c3341aa3",
//             "name": "Accio",
//             "description": "Summons objects"
//         },
//         {
//             "id": "acbc0ae1-12e1-4813-b51e-09d22de40475",
//             "name": "Aguamenti",
//             "description": "Summons water"
//         },
//         {
//             "id": "c9d2f389-a419-4f7e-8d3d-254959638019",
//             "name": "Alohomora",
//             "description": "Unlocks objects"
//         },
//         {
//             "id": "018429a5-15d5-41af-bf8f-98a966733d77",
//             "name": "Anapneo",
//             "description": "Clears someone's airway"
//         }
//   