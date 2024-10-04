// import {characters} from './data.js';
import people from "./data.js";

const log = console.log;
log(people);

function addContent() {
    document.querySelector("main").innerHTML = people
    .map(function (person) {
        return `<section class="highlight" data-ref="${person.uuid}">
        <h2>${person.name}</h2><p>${person.role} - ${person.personality}</p>`;
})
.join('')
//loop through people
//for each object create an HTML string
//join all HTML strings together
//set the ones string as the innerHTML
}
function addContent2(){
    const chunk = document.createDocumentFragment();
    people.forEach(function(person){
        const section = document.createElement("section");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        section.className = "highlight";
        section.setAttribute("data-ref", person.uuid);
        h2.textContent = person.name;
        p.textContent = `${person.role} - ${person.personality}`;

        section.append(h2, p);
        chunk.append(section);
    });
    document.querySelector("main").append(chunk);
}

function clearContent() {
    document.querySelector("main").innerHTML = '';
}

clearContent();
addContent();
clearContent();
addContent2();