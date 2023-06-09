const characterInput = document.getElementById("characters")
const searchCharacters = document.getElementById("searchCharacters")
const characterList = document.getElementById("character-list")
const characterInfo = document.querySelector("div")
const daBody = document.querySelector("body")
const imgParagraph = document.getElementById("add-image-below")


searchCharacters.addEventListener("click", (event) => {
    
    
    
    let characterName = characterInput.value
    characterInput.value = ""
    
    let magicPromise = fetch(`https://hp-api.onrender.com/api/characters`) 
    //this part of the code above, I'm adding the EventListener & using the fetch function to access the API
    
    magicPromise.then(response => {
        return response.json()
    }).then(json => {
        findHPcharacter(json, characterName)
    }).catch(error => console.log('Error! This a NoNo'));
}) //Afterwards, the promise is fullfilled, the findHPcharacter will begin 


const findHPcharacter = (json, characterName) => {
    characterList.innerHTML = ""
    let put_the_ul = document.createElement("ul")
    characterList.append(put_the_ul)
    
    if(typeof characterName !== 'string'){
        window.alert(`Use letters only`)
    }
    
    let removePic = document.getElementById("daPictah")
    lowerCaseCharacterName = characterName.toLowerCase() //to make sure the search is not case-sensitive, I'm using toLowerCase() function
    
    if (removePic) {
        removePic.remove()
    }
    
    
    for (nom of json){
        
        if(nom.name.toLowerCase().includes(lowerCaseCharacterName)){
            let daName = nom.name
            let daSpecies = nom.species
            let daHouse = nom.house
            let daActor = nom.actor
            let isAwizard = nom.wizard
            let wizardPic = nom.image
            
            console.log(daName)
            console.log(daSpecies)
            console.log(daHouse)
            console.log(`Played by ${daActor}`)
            console.log(isAwizard)
            console.log(nom.image)
            
            let resultName = document.createElement("li")
            let resultSpecies = document.createElement("li")
            let resultHouse = document.createElement("li")
            let resultActor = document.createElement("li")
            let resultWizard = document.createElement("li")
            let imgElement = document.createElement("img")
            
            
            imgElement.id = "daPictah"
            
            
            imgElement.setAttribute(`src`, wizardPic)
            imgElement.setAttribute(`alt`, daName)
            imgParagraph.append(imgElement)
            
            const belowUl = document.querySelector("ul") //I will use this for the Houses
            
            resultName.textContent = daName
            resultSpecies.innerHTML = daSpecies
            resultHouse.innerHTML = daHouse
            resultActor.innerHTML = `Played by ${daActor}`


            if(isAwizard === true){
                resultWizard.innerHTML = 'Wizard'
            } else {
                resultWizard.innerHTML = 'Not a Wizard'
            }
            
            
            belowUl.append(resultName)
            belowUl.append(resultSpecies)
            belowUl.append(resultHouse)
            belowUl.append(resultActor)
            belowUl.append(resultWizard) //PART 2


            if(daHouse === "Gryffindor"){
                belowUl.setAttribute('id','gryffindor')
            }
                        
            if(daHouse === "Ravenclaw"){
                belowUl.setAttribute('id','ravenclaw')
            }
                        
            if(daHouse === "Slytherin"){
                belowUl.setAttribute('id','slytherin')
            }
                        
            if(daHouse === "Hufflepuff"){
                belowUl.setAttribute('id','hufflepuff')
            }
                        
        }
    }
    }