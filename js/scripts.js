// feature carousel start
const featureItems = document.querySelectorAll('.feature__event')
const featurePrev = document.querySelector('.feature__prev')
const featureNext = document.querySelector('.feature__next')
let featureIndex = 0
let time = 0
let translate = 0
let transition = 1
let carPrev = true
let carNext = true
const featureSlide = (next,prev) =>{
    let items = featureItems[featureIndex].querySelectorAll('.feature__item')
    let newItems;
    if(next && featureIndex < 2){
        translate-=120
    }
    if(prev && featureIndex > 0){
        newItems = featureItems[featureIndex-1].querySelectorAll('.feature__item')
        translate+=120
        transition -= 0.5
    }
    if(next && featureIndex < 2 || prev && featureIndex > 0) {
        items.forEach(item =>{
            item.style.transition = `all 1s ease-in-out`
        })
        items.forEach(item =>{
            setTimeout(()=>{
                item.style.transform= `translateX(${translate}%)`
                item.style.opacity = 0
            },time+=200)
        })
    }
    if(next && featureIndex <= 2){
        newItems = featureItems[featureIndex+1].querySelectorAll('.feature__item')
    }
    if(next && featureIndex < 2 || prev && featureIndex > 0){
        newItems.forEach(item =>{
            item.style.opacity = 0
            item.style.transition = `all ${transition}s ease-in-out`
        })
    }
    if(next && featureIndex < 2){
        transition += 0.5
    }
    if(next && featureIndex < 2 || prev && featureIndex > 0){
        setTimeout(()=>{
            newItems.forEach(item =>{
                setTimeout(()=>{
                    item.style.transform= `translateX(${translate}%)`
                    item.style.opacity = 1
                },time+=200)
            })
            time = 0
        },200)
    }
    transiton = 0
    if(next && featureIndex < 2){
        featureIndex++
    }
    if(prev && featureIndex > 0){
        featureIndex--
    }
}

featureNext.addEventListener('click',()=>{featureSlide(carNext,false)})
featurePrev.addEventListener('click',()=>{featureSlide(false,carPrev)})
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
