import { useState } from 'react' 
import { useHistory } from 'react-router'
import { Form, TextArea, Button } from 'semantic-ui-react'

function NewGifForm({ appOnAddDogGif }) {

    const [img, setImg] = useState("");
    const [tag, setTag] = useState("");

    const history = useHistory()

    function handleNewImg(e) {
      e.preventDefault();
      setImg(e.target.value);
    }

    function handleNewTag(e) {
        e.preventDefault();
        setTag(e.target.value);
    }

    function returnToHome(){
        history.push('/dog_gif')
    }
  
    function submitGif(e) {
      e.preventDefault();
      fetch('/dog_gifs', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img,
          tag
        }),
      })
      .then((resp) => resp.json())
      .then((data) => {
        appOnAddDogGif(data)
        setImg('')
        setTag('')
        returnToHome()
      });
    }
    
    return (
      <>
        <Form style={{ 'width': '700px' }} onSubmit={submitGif}>
          <TextArea 
            placeholder="Add a New GIF"
            value={img} 
            name="img"
            onChange={handleNewImg}
          />
          <TextArea
            placeholder="Image Tag"
            value={tag}
            name="tag"
            onChange={handleNewTag}
            />
          <div style={{ height: 7 }} />
          <Button floated="right" primary type='submit'>Add New Gif</Button>
        </Form>
      </>
    )
  }

  export default NewGifForm;