import React, {Children, useEffect, useState} from 'react'
import './carousel.css'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
const Carousel = (props) => {
   const [sliderPos, setSliderPos] = useState(0)
    const {children, infinite} = props
    const widthSpan = 100.1
    const prevSlideHandler = () => {
        let newPosition = sliderPos;
        if (newPosition > 0) {
            newPosition = newPosition - 1
        }else if (infinite) {
                newPosition = children.length - 1
        }
        translateFullSlides(newPosition);
        setSliderPos(newPosition);
    }

    const jumpToSlideHandler = (id) => {
        var toTranslate = id;
        translateFullSlides(toTranslate);
        setSliderPos(id)
    }

    const nextSlideHandler = () => {
        let newPosition = sliderPos;
        if (newPosition < children.length - 1) {
            newPosition = newPosition + 1
        } else if (infinite){
            newPosition = 0
        }
        translateFullSlides(newPosition);
        setSliderPos(newPosition);
    }

    const nextClickHandler = () => {
        nextSlideHandler();
    }

    const prevClickHandler = () => {
        prevSlideHandler();
    }

    const keyPressHandler = (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            e.stopPropagation();
            prevSlideHandler();
            return;
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            e.stopPropagation();
            nextSlideHandler();
            return;
        }
        if (49 <= e.keyCode && e.keyCode <= 57) {
            const arrayPos = e.keyCode - 49;
            if (arrayPos <= children.length) {
                jumpToSlideHandler(arrayPos);
            }return;
        }
        if (e.keyCode === 48) {
            if (children.length >=10)
            jumpToSlideHandler(9)
        }
    }

    const translateFullSlides = (newPosition) => {
        let toTranslate = -widthSpan * newPosition;
        for (let i = 0; i < children.length; i++) {
            let element = document.getElementById(`carouselitem` + i);
            element.style.transform = `translateX(`+ toTranslate +`%)`;
        }
    }

    const displayItems = Children.map(children, (child, index) =>(
        <div className='carouselItem' id={`carouselitem` + index}>{child}</div>
    ))

        useEffect(()=>{
            window.addEventListener('keydown', keyPressHandler);;
            return() => {
                window.removeEventListener('keydown', keyPressHandler)
            }
        })

  return (
    <div>
        <div className='container'>
            <div className='leftArrow' onClick={prevClickHandler}><BsFillArrowLeftCircleFill size={'2rem'} /></div>
            <div className='displayFrame'>
                {displayItems}
            </div>
            <div className='rightArrow' onClick={nextClickHandler}><BsFillArrowRightCircleFill size={'2rem'} /></div>
        </div>
    </div>
  )
}

export default Carousel