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
    let newItems;
    let items = featureItems[featureIndex].querySelectorAll('.feature__item')
    let width = featureItems[0].clientWidth + 100
    window.onresize = () =>{
        width = featureItems[0].clientWidth + 100
    }
    if(next && featureIndex < 2){
        translate-=width
    }
    if(prev && featureIndex > 0){
        newItems = featureItems[featureIndex-1].querySelectorAll('.feature__item')
        translate+=width
        transition -= 0.5
    }
    if(next && featureIndex < 2 || prev && featureIndex > 0) {
        items.forEach(item =>{
            item.style.transition = `all 1s ease-in-out`
        })
        items.forEach(item =>{
            setTimeout(()=>{
                item.style.transform= `translateX(${translate}px)`
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
                    item.style.transform= `translateX(${translate}px)`
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
const carouselArtistsNext = () =>{
    let width = carouselItems[0].clientWidth + 20
    window.onresize = () =>{
        width = carouselItems[0].clientWidth + 20
    }
    if(index < 3){
        margin-=width
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
const carouselArtistsPrev = () =>{
    let width = carouselItems[0].clientWidth + 20
    window.onresize = () =>{
        width = carouselItems[0].clientWidth + 20
    }
    if(index > -3){
        margin+=width
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
const carouselInner = document.querySelector('.artist-inner__carousel')
const carouselInnerItem = document.querySelectorAll('.artist-inner__carousel-item')
const prevInner = document.querySelector('.prev-inner')
const nextInner = document.querySelector('.next-inner')
let marginInner = 0
let innerIndex = 0

const carouselInnerNext = () =>{
    let width = carouselInnerItem[0].clientWidth + 55
    window.onresize = () =>{
        width = carouselInnerItem[0].clientWidth + 55
    }
    if(innerIndex < 3){
        marginInner-=width
        carouselInner.style.transform =`translateX(${marginInner}px)`;
    }else if(innerIndex === 3){
        marginInner = 0
        innerIndex = -1
        carouselInner.style.transform =`translateX(${marginInner}px)`;
    }
    innerIndex++
   
}
const carouselInnerPrev = () =>{
    let width = carouselInnerItem[0].clientWidth + 55
    window.onresize = () =>{
        width = carouselInnerItem[0].clientWidth + 55   
    }
    if(innerIndex > 0){
        marginInner+=width
        carouselInner.style.transform =`translateX(${marginInner}px)`;
    }else if(innerIndex === 0){
        marginInner-=width * 3
        innerIndex = 4
        carouselInner.style.transform =`translateX(${marginInner}px)`;
    }
    innerIndex--  
}

prevInner.addEventListener('click',carouselInnerPrev)
nextInner.addEventListener('click',carouselInnerNext)