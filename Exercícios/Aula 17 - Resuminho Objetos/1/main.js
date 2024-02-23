function Person(name, rounds){
    this.name = name;
    this.rounds = rounds;
}

let round = 1;
let count = 0;

const people = [
    new Person("Bruna", 1),
    new Person("Daniela", 1),
    new Person("Eduardo", 1),
    new Person("Franklyn", 1),
    new Person("George", 1),
    new Person("Gian", 1),
    new Person("Guilherme Barcelos", 1),
    new Person("Joao Luft", 1),
    new Person("Joao Krampe", 1),
    new Person("Murilo", 1),
    new Person("Pedro", 1),
    new Person("Raul", 1),
    new Person("Victor", 1),
    new Person("Guilherme Filheiro", 1),
    new Person("Julia", 1),
]

people.forEach(function(person){
    let container = document.getElementById("container_a_sortear");
    let div = document.createElement('div');
    div.classList.add("div_person")
    let p_name = document.createElement('p');
    p_name.classList.add("p_person")
    p_name.textContent = person.name;

    let p_rounds = document.createElement('p');
    p_rounds.classList.add("p_person");
    p_rounds.id = `rounds_${person.name}`;
    p_rounds.textContent = (person.rounds - 1) + "x";

    div.appendChild(p_name);
    div.appendChild(p_rounds);
    container.appendChild(div);
})

function sort() {
    count++;
    const canSort = people.filter(person => person.rounds === round);
    var indiceAleatorio = Math.floor(Math.random() * canSort.length);

    const person = canSort[indiceAleatorio];
    person.rounds += 1;
   
    if(count == people.length) {
        round += 1;
        count = 0;
        console.log("+ 1 round")
    }

    drawRound();
    drawPerson(person);
}


function drawPerson(person) {
    console.log(person);
    let chosen = document.getElementById("chosen");
    chosen.textContent = `${person.name}`;

    let personRound = document.getElementById("rounds_" + person.name)
    personRound.textContent = `${person.rounds - 1}x`;
}

function drawRound() {
    let time = document.getElementById("round");

    time.textContent = `Rodada ${round}x`;
}

function reset() {
    people.forEach(function(person) {
        person.rounds = 1;
        drawPerson(person);
    })
    round = 1;
    drawRound();

    let chosen = document.getElementById("chosen");
    chosen.textContent = "Clique em sortear para sortear um participante!";
}