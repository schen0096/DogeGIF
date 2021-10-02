import { useState, useEffect } from 'react'

function ShowOneDogGif({ dogID }){

    const [image, setImage] = useState('')

    useEffect(() => {
        fetch(`/dog_gifs/${dogID}`)
        .then((r) => r.json())
        .then((data)=>setImage(data.img))
    }
    );

    // console.log(dogGifs)
    // console.log(img)
    
    return(
        <img src={image} alt='dog'/>
        // <h1>This is running</h1>
    )
}

export default ShowOneDogGif