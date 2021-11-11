// import { useState } from "react"
import { useHistory } from "react-router"
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import 'react-slideshow-image/dist/styles.css'
// import styled from "styled-components";

function DogGifsContainer({ dogGifs, dogGif, img, index, setDogID }) {

    const history = useHistory()

//     const Container = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding-top:1em;
//   `;

    function onClickFunction(){
        history.push(`/dog_gif/${dogGif.id}`)
        setDogID(dogGif.id)
    }

    // const [current, setCurrent] = useState(0);
    // const length = dogGifs.length;

    // const addIndex = index + 1

    // const subIndex = index - 1

    // function nextSlide(){
    //     setCurrent(current === length - 1 ? 0 : current + 1);
        
    // }

    // function prevSlide(){
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    
    // }

    // if (!Array.isArray(dogGifs) || dogGifs.length <= 0) {
    //     return null;
    // }

    // console.log(index)
    // console.log(current)

    return (
        <>
              <img src={img} alt={dogGif.tag} onClick={onClickFunction}/>
        </>
        // <Container>
        //     <section className='slider'>
        //         <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        //         <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        //             {index === current ? (
        //                 <img src={img} alt={dogGif.tag} className='image' onClick={onClickFunction} />
        //             )
        //             : null }
        //     </section>
        // </Container>

        
    );
}

export default DogGifsContainer;