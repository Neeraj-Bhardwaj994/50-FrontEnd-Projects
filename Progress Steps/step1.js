const progress = document.querySelector('#progress')
const prevbtn = document.querySelector('#prev')
const nextbtn = document.querySelector('#next')
const words = document.querySelectorAll('.circle')

let currentActive = 1;

prevbtn.addEventListener('click' , () => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1

    }
    update()
})

nextbtn.addEventListener('click' , () => {
    currentActive++

    if(currentActive > words.length){
        currentActive = words.length

    }
    update()
})

function update(){
    words.forEach((word,idx) => {
        if(idx < currentActive){
            word.classList.add('active')
        }
        else{
            word.classList.remove('active')
        }
        
    })

    actives = document.querySelectorAll(".active")

    progress.style.width = (actives.length - 1) / (words.length - 1) * 100 + '%'

    if(currentActive === 1){
        prevbtn.disabled = true;
    }
    else if (currentActive === words.length){
        nextbtn.disabled = true;
    }
    else{
        prevbtn.disabled = false;
        nextbtn.disabled = false;

    }
}
