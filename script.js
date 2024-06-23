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

    console.log(personagens)
    // console.log(pagina)

    const nomeFiltrado = document.getElementById('input-name').value
    const btnGo = document.getElementById('btnSearch');
    const conter = document.getElementById('container');

    
    

    const personagemFiltrado = personagens.filter((item) => {
        return item.name.includes(nomeFiltrado);
    });

    personagemFiltrado.map((item)=>{
        // console.log(item.image);
    })

    

  

    
    const percorrerPersonag = personagens.map((itens) => {

        console.log(itens)

        const div = document.createElement('div')
        div.style.border = "1px solid black"

        const name = document.createElement('h2')

        const img = document.createElement('img')

        // descrição
        const desc = document.createElement('p')

        name.innerText = itens.name
        img.src = itens.image 
        desc.innerHTML = `
        <span>Gênero:</span> ${itens.gender} <br>
        <span>Origem:</span> ${itens.origin.name} <br>
        <span>Espécie:</span> ${itens.species} <br>
        <span>Status:</span> ${itens.status} <br>


        `

        conter.appendChild(div)
        div.appendChild(name)
        div.appendChild(img)
        div.appendChild(desc)
        
    })


    
}

printPersonagem()

