import { Fragment } from "react"
import { useHistory } from "react-router"
// import NewGifForm from './NewGifForm'

function DogGifsContainer({ dogGif, img, setDogID }) {
  
    const history = useHistory()

    function onClickFunction(){
        history.push(`/dog_gif/${dogGif.id}`)
        setDogID(dogGif.id)
    }

    

  return (
    <Fragment>
          <img src={img} alt={dogGif.tag} onClick={onClickFunction}/>
          {/* <NewGifForm dogGif={dogGif} appOnAddDogGif={appOnAddDogGif}/> */}
    </Fragment>
    
  );
}

export default DogGifsContainer;