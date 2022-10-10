const { default: axios } = require("axios")

class Pokemon{
    constructor(){
        this.limit=100
        this.offset=0
        this.nextUrl=''
        this.preUrl=''
        this.pokemonList=[]
        this.pokemonTableList=document.querySelector('.pokemon-table')
        this.nextBtn=document.querySelector('.next-btn')
        this.preBtn=document.querySelector('.pre-btn')

    }

    async getData(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon',{
            params:{
              limit:this.limit,
              offset:this.offset 
            }
        })
        .then(res=>res)
        .catch(err=>console.log(err))
        return response
    }

    displayPokemonList(){
      let  htmls=''
      this.pokemonList.forEach((pokemonItem,i)=>{
        htmls+=` <tr>
        <td>${i+1}</td>
        <td>${pokemonItem.name}</td>
        <td><a href="${pokemonItem.url}">click</a></td>
    </tr>`
      })
      this.pokemonTableList.innerHTML=htmls
    }

    handlePaginations(){
        
    }
    }
    
