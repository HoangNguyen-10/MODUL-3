let search = document.querySelector('.search')
let city = document.querySelector('.city')
let country = document.querySelector('.country')
let shortDesc = document.querySelector('.short-desc')
let visibility = document.querySelector('.visibility span')
let wind = document.querySelector('.wind span')
let sun = document.querySelector('.sun span')
let value = document.querySelector('.value')
let time = document.querySelector('.time')
let content = document.querySelector('.content')
let body = document.querySelector('body')

async function changeWeatherUI(capitalSearch) {
    // let capitalSearch = search.value.trim()
    // search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=cb8d857e9528680474d1a7a90b239fba`
    let data = await fetch(apiURL).then(res => res.json())
    console.log(data)
    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round((data.main.temp - 273.15))
        value.innerText =temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')

       body.setAttribute('class','hot')
       if(temp<=25){
       body.setAttribute('class','cool')
       }
       if(temp<=22){
        body.setAttribute('class','warm')
        }
        if(temp<=19){
            body.setAttribute('class','cold')
            }
    } else {
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function (e) {
   if(e.code==='Enter'){
    let capitalSearch = search.value.trim()
    changeWeatherUI(capitalSearch)

   }
})
changeWeatherUI('ha noi')

