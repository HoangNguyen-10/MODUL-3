// const root=document.getElementById('root')
const h1=document.createElement('h1')
h1.innerText='goodbye'
h1.id='heading'
h1.className='test'
Object.assign(h1.style,{
   color:'blue',
   backgroundColor:'#333'
})
console.log(h1)
root.appendChild(h1)