import { useState, useEffect, Fragment } from "react"
import { useHistory } from "react-router"
import { Switch, Route } from "react-router-dom";
import LoginContainer from './Components/LoginContainer'
import DogGifsContainer from './Components/DogGifsContainer'
import ShowOneDogGif from "./Components/ShowOneDogGif";
import CommentsContainer from "./Components/CommentsContainer"
import NewGifForm from './Components/NewGifForm'
import Navbar from "./Components/Navbar"
import SignupContainer from "./Components/SignupContainer";
import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function App() {

  const storedValueAsNumber = Number(localStorage.getItem("dogID"))

  const history = useHistory()

  const [user, setUser] = useState(null)
  const [dogGifs, setDogGifs] = useState([])
  const [comments, setComments] = useState([])
  const [dogID, setDogID] = useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0)

  // CHECKS TO SEE IF A USER IS ALREADY LOGGED IN
  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setUser(data)
            fetchingDogGifs()
            fetchingComments()
        });
      }
      else {}
    });
  }, []);

  // Saves state for dogID on refresh
  useEffect(() => {
    localStorage.setItem("dogID", String(dogID))
  }, [dogID])

  // FETCHES ALL DOG GIFS
  function fetchingDogGifs(){
    fetch("/dog_gifs")
    .then((r) => r.json())
    .then((data) => setDogGifs(data))
  }
  
  // FETCHES ALL COMMENTS
  function fetchingComments(){
    fetch("/comments")
    .then((r) => r.json())
    .then((data) => setComments(data))
  }

  function onLogin(newUser) {
    setUser(newUser)
    fetchingComments()
    fetchingDogGifs()
  }

  function onLogout() {
    setUser(null)
    history.push("/")
  }

  function appOnDeleteComment(data) {
    let newArr = comments.filter(comment => comment.id !== data)
    setComments(newArr)
  }

  function appOnAddComment(data) {
    setComments([data, ...comments])
  }

  function appOnAddDogGif(data) {
    setDogGifs([ data, ...dogGifs ])
  }

  function appOnEditComment(data) {
    let editedCommentArr = comments.filter(comment => parseInt(comment.id) !== parseInt(data.id))
    setComments([data, ...editedCommentArr])
  }

  const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top:1em;
  `;

  const CommentStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  `;

  function nextSlide(){
    setDogID(dogID+1)
    history.push(`/dog_gif/${dogID}`)
  }

  function prevSlide(){
    setDogID(dogID-1)
    history.push(`/dog_gif/${dogID}`)
  }

  return (
    <Fragment>
      <Navbar onLogout={onLogout} user={user} />
      {user && fetchingComments ? (
            <Switch>
              <Route exact path = "/dog_gif/:id">
                <Container>
                  <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                  <ShowOneDogGif dogID={dogID} />
                  <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                </Container>
                <CommentStyle>
                  <CommentsContainer user={user} comments={comments} setComments={setComments} appOnDeleteComment={appOnDeleteComment} appOnAddComment={appOnAddComment} appOnEditComment={appOnEditComment} dogID={dogID} />
                </CommentStyle>
              </Route>
             	<Route exact path ="/dog_gif">
                  {dogGifs.map((dogGif)=> <DogGifsContainer key={dogGif.id} index={dogGif.id} dogGif={dogGif} img={dogGif.img} setDogID={setDogID} dogGifs={dogGifs}/>)}
 	            </Route>
              <Route exact path ="/new">
                  <NewGifForm appOnAddDogGif={appOnAddDogGif}/>
              </Route>
          </Switch>
      ) : (
        <Switch>
          <Route exact path ="/">
            <LoginContainer onLogin={onLogin} />
          </Route>
          <Route exact path = "/signup">
            <SignupContainer onLogin={onLogin} />
          </Route>
        </Switch>
        )}

    </Fragment>
  );
}

export default App;
