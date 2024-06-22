const url = "https://rickandmortyapi.com/api/character";


// async function loadData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.log(data)

//     // const personagens = data.results;


//     // for (let index = 0; index < personagens.length; index++) {
//     //     const element = personagens[index];
//     //     console.log(element.name)
        
//     // }

//     printPersonagem()
    
// }

// loadData()

async function printPersonagem() {

    const response = await fetch(url);
    const data = await response.json();
    const personagens = data.results

    let container = document.getElementById('container')

    personagens.map((itens) => {

        const div = document.createElement('div')
        const p = document.createElement('p')
        const img = document.createElement('img')
        p.innerText = itens.name
        img.innerText = 
        div.appendChild(p)
        div.appendChild(img)

        container.appendChild(div)
        
    })

    
}

printPersonagem()