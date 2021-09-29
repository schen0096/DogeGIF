import {useState} from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

function NewCommentForm({ user, onAddComment }) {
  const [comment, setComment] = useState("");

  function handleNewComment(e) {
    e.preventDefault();
    setComment(e.target.value);
  }

  function submitJib(e) {
    e.preventDefault();
    fetch('/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        user_id: user.id
      }),
    })
    .then((resp) => resp.json())
    .then((data) => {
      onAddComment(data)
      setComment('')
    });
  }
  
  return (
    <>
      <Form style={{ 'width': '700px' }} onSubmit={submitJib}>
        <TextArea 
          placeholder="Add Your Comment!"
          value={comment} 
          name="comment"
          onChange={handleNewComment}
        />
        <div style={{ height: 7 }} />
        <Button floated="right" primary type='submit'>Add</Button>
      </Form>
    </>
  )
}

export default NewCommentForm;