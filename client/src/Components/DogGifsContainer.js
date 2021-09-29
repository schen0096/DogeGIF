import { Fragment } from "react"
// import NewGifForm from './NewGifForm'

function DogGifsContainer({ dogGif }) {

  const imageArray = []
  imageArray.push(dogGif.img)
  console.log(imageArray)

  return (
    <Fragment>
          {/* <img src={img} /> */}
          {/* <NewGifForm dogGif={dogGif} appOnAddDogGif={appOnAddDogGif}/> */}
    </Fragment>
  );
}

export default DogGifsContainer;