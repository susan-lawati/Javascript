const arrayImage = ['2.jpg','bike1.jpeg','bike2.webp','bike3.jpg','2.jpg','bike1.jpeg']
const arrayLength = arrayImage.length

let i = 0
const demoFunction=()=>{
    i++
    // if(i>4){
    //     i=0 
    // }
    i=i%arrayLength
    document.querySelector('img').src = `photos/${arrayImage[i]}`
}
let set = setInterval(demoFunction, 2000)

document.querySelector('.container .right').addEventListener('click',()=>{
    i++
    // if(i>4){
    //     i=0 
    // }
    i=i%arrayLength
    document.querySelector('img').src = `photos/${arrayImage[i]}`
} )


document.querySelector('.container .left').addEventListener('click',()=>{
    i--
    if(i<0){
        i=4 
    }
    document.querySelector('img').src = `photos/${arrayImage[i]}`
} )

document.querySelector('.container').addEventListener('mouseover',()=>{
    clearInterval(set)
})

document.querySelector('.container').addEventListener('mouseout', ()=>{
    const set = setInterval(demoFunction, 2000)
})