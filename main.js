console.log('testing')

const appendFact = (data) =>{
    let container = document.getElementById("fact-container");

    let newDiv = document.createElement("div");
    newDiv.className="factDiv";

    let factP = document.createElement("p");
    factP.appendChild(document.createTextNode(data['text']));
    factP.className = "fact";

    let sourceP = document.createElement("p");
    sourceP.appendChild(document.createTextNode("- " + data['source']));
    sourceP.className = "source";

    newDiv.appendChild(factP);
    newDiv.appendChild(sourceP);

    container.appendChild(newDiv);
}

const handleClick= () =>{
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    .then((response)=>response.json())
    .then((data)=>{
        appendFact(data);
    })
    .catch((err)=>{
        console.log(err.message);
        alert("Error")
    })
}