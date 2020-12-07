const canvas = document.querySelector('#canvas')
const blackBtn = document.querySelector('.black')
const resetBtn = document.querySelector('.reset')
const rgbBtn = document.querySelector('.rgb')
const colorWell = document.querySelector('#col')
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]

const divColor = null
CreateGrid(16)

function CreateGrid(num){
    const div = document.querySelectorAll('#canvas div')
    canvas.style.gridTemplateColumns = `repeat(${num},1fr)`
    canvas.style.gridTemplateRows = `repeat(${num},1fr)`
    canvas.setAttribute('gridTemplateRows', num)
    for (let i=0; i<num*num; i++){
        const div = document.createElement('div')
        canvas.appendChild(div)
    }    
}

function RemoveAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

function SetSquareColor(divColor){
    const div = document.querySelectorAll('#canvas div')
    div.forEach(el => el.addEventListener('mouseenter', ()=>{
        el.style.backgroundColor = divColor
     }))
     console.log(div.length)
}


function Reset(){
    const div = document.querySelectorAll('#canvas div')
    for(let i=0; i<div.length; i++){
        div[i].style.backgroundColor = 'white'
    }
}

resetBtn.addEventListener('click', Reset)

blackBtn.addEventListener('click', ()=>{
    SetSquareColor('black')
})

rgbBtn.addEventListener('click', ()=>{
    const div = document.querySelectorAll('#canvas div')
    div.forEach(el => el.addEventListener('mouseenter', ()=>{
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
     }))
})

colorWell.addEventListener("click", updateFirst, false);
colorWell.addEventListener("input", updateFirst, false);
function updateFirst(event) {
    document.querySelectorAll('#canvas div').forEach(el => el.addEventListener('mouseenter', ()=>{
        if(el){
            el.style.backgroundColor = event.target.value
        }
    }))
}

const slider = document.querySelector('#rng')
slider.addEventListener('change', ()=>{
    document.querySelector('#rngLabel').innerHTML = slider.value
    RemoveAllChildNodes(canvas)
    CreateGrid(slider.value)
    Reset()
    SetSquareColor('white')
})