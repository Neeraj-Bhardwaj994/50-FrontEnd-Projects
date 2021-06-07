const loadtext = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let loading = 0

let int = setInterval(blur, 30) 

function blur(){
    loading++
    if(loading > 99)
    {
        clearInterval(int)
    }

    loadtext.innerText = `${loading}%`
    loadtext.style.opacity = scale(loading, 0,100,1,0)
    bg.style.filter = `blur(${scale(loading, 0,100,30,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
