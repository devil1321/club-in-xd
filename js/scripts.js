// feature carousel start
const featureItems = document.querySelectorAll('.feature__event')
const featurePrev = document.querySelector('.feature__prev')
const featureNext = document.querySelector('.feature__next')
let featureIndex = 0
let time = 0
let translate = 0
let transition = 1
console.log(featureItems)
const featureNextSlide = () =>{
    let items = featureItems[featureIndex].querySelectorAll('.feature__item')
    translate-=120
    items.forEach(item =>{
        item.style.transition = `all 1s ease-in-out`
    })
    items.forEach(item =>{
        setTimeout(()=>{
            item.style.transform= `translateX(${translate}%)`
            item.style.opacity = 0
        },time+=200)
    })
    let newItems = featureItems[featureIndex+1].querySelectorAll('.feature__item')
    newItems.forEach(item =>{
        item.style.opacity = 0
        item.style.transition = `all ${transition}s ease-in-out`
    })
    transition += 0.5
    setTimeout(()=>{
        newItems.forEach(item =>{
            setTimeout(()=>{
                item.style.transform= `translateX(${translate}%)`
                item.style.opacity = 1
            },time+=200)
        })
        time = 0
    },200)
    transiton = 0
    featureIndex++
}
const featurePrevSlide = () =>{
    let items = featureItems[featureIndex].querySelectorAll('.feature__item')
    translate+=120
    transition -= 0.5
    items.forEach(item =>{
        item.style.transition = `all 1s ease-in-out`
    })
    items.forEach(item =>{
        setTimeout(()=>{
            item.style.transform= `translateX(${translate}%)`
            item.style.opacity = 0
        },time+=200)
    })
    let newItems = featureItems[featureIndex-1].querySelectorAll('.feature__item')
    newItems.forEach(item =>{
        item.style.opacity = 0
        item.style.transition = `all ${transition}s ease-in-out`
    })
    setTimeout(()=>{
        newItems.forEach(item =>{
            setTimeout(()=>{
                item.style.transform= `translateX(${translate}%)`
                item.style.opacity = 1
            },time+=200)
        })
        time = 0
    },200)
    transiton = 0
    featureIndex--
}

featureNext.addEventListener('click',()=>{featureNextSlide()})
featurePrev.addEventListener('click',()=>{featurePrevSlide()})
// feature carousel end


// carousel artists start
const carouselArtist = document.querySelector('.artist__carousel')
const carouselItems= document.querySelectorAll('.artist__carousel-item')
const carouselActiveDots = document.querySelectorAll('.dot')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let index = 0
let margin = 0
let active = 3
const setActive = (position) =>{
    carouselActiveDots.forEach(dot =>{
        dot.classList.remove('artist__active')
    })
    carouselActiveDots[position].classList.add('artist__active')
}
const carouselArtistsNext = (increase) =>{
    if(index < 3){
        margin-=405
        carouselArtist.style.transform =`translateX(${margin}px)`;
        active++
        setActive(active)
    }else if(index === 3){
        margin = 0
        index = -1
        active = 3
        setActive(active)
        carouselArtist.style.transform =`translateX(${margin}px)`;
    }
    index++
   
}
const carouselArtistsPrev = (increase) =>{
    if(index > -3){
        margin+=405
        carouselArtist.style.transform =`translateX(${margin}px)`;
        active--
        setActive(active)
    }else if(index === -3){
        margin = 0
        index = 1
        active = 3
        setActive(active)
        carouselArtist.style.transform =`translateX(${margin}px)`;
    }
    index--
}

next.addEventListener('click',() => {carouselArtistsNext(carouselItems.length)})
prev.addEventListener('click',() => {carouselArtistsPrev(carouselItems.length)})
// carousel artists end
