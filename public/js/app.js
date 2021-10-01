const newDay = new Date()
const result = document.querySelector('.timer')
const date_2137 = new Date(newDay.getFullYear(), newDay.getMonth(), newDay.getDate(), 21, 37)
const hours_2137 = date_2137.getHours(), minutes_2137 = date_2137.getMinutes()
let is = true

const timer = async (i = 1) => {
    let hours = new Date().getHours(),
        minutes = new Date().getMinutes()
    
    if(hours < 10) hours = '0' + hours
    if(minutes < 10) minutes = '0' + minutes

    if(hours == hours_2137 && minutes == minutes_2137 && is){
        const {musicPath} = await fetch("/config.json").then(res => res.json())
        const {data} = await fetch("/new", {
            method: 'POST',
            body:'',
            headers: {
                'Content-Type': 'application/json'
            },
            keepalive: true
        }).then(res => res.json())

        const audio = document.createElement('audio')
        audio.src = musicPath
        audio.autoplay = true
        audio.loop = 'inflite'

        document.body.appendChild(audio)
        is = false
        alert("Zjedz kremówkę!!!\n\n" + `
            Ostatni 2137: ${JSON.stringify(data.lastData2137)},
            Ostatnie wejście na strone: ${JSON.stringify(data.lastDataView)}
        `)
    } else if((hours !== hours_2137 || minutes !== minutes_2137) && is == false){ 
        is = true
        result.classList.remove('active')
        document.body.lastChild.remove()
    }
    else if(hours == hours_2137 && minutes == minutes_2137)
        result.classList.toggle("active")
    

    result.innerHTML = `${hours} <span>:</span> ${minutes} `
    setTimeout('timer()',500)
}

window.onload = timer