

class Pokemon{
    constructor(){
        this.limit=100
        this.offset=0
        this.urlNext=''
        this.urlPrevious=''
        this.pokemonList=[]
        this.pokemonListTable=document.querySelector('.pokemon-table')
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
     let htmls =''
     this.pokemonList.forEach((pokemonItem,i)=>{
        htmls+=`<tr>
        <td>${i+1}</td>
        <td>${pokemonItem.name}</td>
        <td><a href="${pokemonItem.url}">click</a></td>
    </tr>`
     })
     this.pokemonListTable.innerHTML=htmls
   }
    
   handlePaginations(){
    this.nextBtn.onclick=()=>{
        if(this.urlNext){
            this.offset+=this.limit
            this.callAPI()
        }
    }

    this.preBtn.onclick=()=>{

        if(this.urlPrevious){
            this.offset-=this.limit
            this.callAPI()
        }
    }
   }

   handleDataFromAPI(res){
    let{previous,next,results}=res.data
    this.urlNext=next
    this.urlPrevious=previous
    this.pokemonList=results
   
    this.preBtn.classList.toggle(!this.urlPrevious)
    this.nextBtn.classList.toggle(!this.urlNext)
    this.displayPokemonList()
   }

   callAPI(){
    this.getData().then(res=>this.handleDataFromAPI(res))
   }
   init(){
    this.callAPI()
    this.handlePaginations()
   }
}

const po= new Pokemon()
po.init()