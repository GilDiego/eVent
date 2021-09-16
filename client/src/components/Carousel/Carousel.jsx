import React, { useEffect, useRef } from "react";
import styles from './Carousel.module.css'
//import {ReactComponent as Left} from '../../Utilities/left.svg'
import left from '../../utilities/left.svg'
//import {ReactComponent as Right} from '../../Utilities/right.svg'
import right from '../../utilities/right.svg'
//import styled from 'styled-components';
import Slide from "./Slide";
import FakeDB from '../../FakeDB/FakeDB'




const Carousel = ()=>{
    const slideShow = useRef(null);
    const intervaloSlideShow = useRef(null);

    const next = ()=>{
        if(slideShow.current.children.length > 0){// comprobamos si el slide tiene elementos
            const firstElement = slideShow.current.children[0]// obtengo el primer elemento
            slideShow.current.style.transition = `800ms ease-out all`
            const sizeSlide = slideShow.current.children[0].offsetWidth;
            slideShow.current.style.transform = `translateX(-${sizeSlide}px)`

            const transi = ()=>{
                slideShow.current.style.transition='none';
                slideShow.current.style.transform=`translateX(0px)`;
                //primer elemento al final
                slideShow.current.appendChild(firstElement)
                slideShow.current.removeEventListener('transitionend', transi)
            }
            //eventlistener para cuando termine la animacion
            slideShow.current.addEventListener('transitionend', transi)
        } 
    }
    
    const previous = ()=>{
        if(slideShow.current.children.length > 0){
            const endElement = slideShow.current.children[slideShow.current.children.length-1]
            slideShow.current.insertBefore(endElement, slideShow.current.firstChild)

            slideShow.current.style.transition='none';
            const sizeSlide = slideShow.current.children[0].offsetWidth;
            slideShow.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(()=>{
                slideShow.current.style.transition = `800ms ease-out all`;
                slideShow.current.style.transform = `translateX(0)`;
            },30)
        }
    }

    useEffect(()=>{
        intervaloSlideShow.current = setInterval(() => {
            next();
        }, 5000);

        slideShow.current.addEventListener('mouseenter',()=>{
            clearInterval(intervaloSlideShow.current)
        });

        slideShow.current.addEventListener('mouseleave',()=>{
            intervaloSlideShow.current = setInterval(() => {
                next();
            }, 5000);
        });


    },[])
    console.log(FakeDB.length)
    return(
        // <ContMain>
        //     <ContSlideShow>
        //         {FakeDB.map(e=><Slide img={e.img} name={e.name} date={e.date} place={e.place}/>)}<Slide />
        //     </ContSlideShow>
        //     <Control>
        //         <Btn>
        //             <Left />
        //         </Btn>
        //         <Btn>
        //             <Right />
        //         </Btn>
        //     </Control>
        // </ContMain>
        <div className={styles.contMain}>
            <div className={styles.contSlideShow} ref={slideShow}>
                {FakeDB.map(e=><Slide img={e.img} name={e.name} date={e.date} place={e.place}/>)}
            </div>
            <div className={styles.control}>
                <button className={styles.left} onClick={previous}>
                    <img src={left} alt="" />
                </button>
                <button className={styles.right} onClick={next}>
                    <img src={right} alt="" />
                </button>
                
            </div>
        </div>
    )
}

// const div = styled.div`
//     position: relative;
//     min-width: 100%;
//     max-height: 500px;
//     border-bottom: var(--Black) solid 1px;
// `;

// const div = styled.div`
//     display:flex;
//     flex-wrap: nowrap;
// `;

// const div = styled.div`
//     position:absolute;
//     top:0;
//     z-index:20;
//     width:100%;
//     height:100%;
// `;

// const buttom = styled.button`

// `;



export default Carousel