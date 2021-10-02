import { useState, useEffect, Fragment } from "react"
import { Switch, Route } from "react-router-dom";
import LoginContainer from './Components/LoginContainer'
import DogGifsContainer from './Components/DogGifsContainer'
import ShowOneDogGif from "./Components/ShowOneDogGif";
import CommentsContainer from "./Components/CommentsContainer"
import NewGifForm from './Components/NewGifForm'
import Navbar from "./Components/Navbar"

function App() {

  const storedValueAsNumber = Number(localStorage.getItem("dogID"))

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
    });
  }, []);


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
  }

  function appOnDeleteComment(data) {
    let newArr = comments.filter(comment => comment.id !== data)
    setComments(newArr)
  }

  function appOnAddComment(data) {
    setComments([data, ...comments])
  }

  function appOnAddDogGif(data) {
    setDogGifs([ ...dogGifs, data ])
  }

  function appOnEditComment(data) {
    let editedCommentArr = comments.filter(comment => parseInt(comment.id) !== parseInt(data.id))
    setComments([data, ...editedCommentArr])
  }


  return (
    <Fragment>
      <Navbar onLogout={onLogout} user={user} />
      {user && fetchingComments ? (
        // <div className="main-div" >
            <Switch>
              <Route exact path = "/dog_gif/:id">
                <>
                  <ShowOneDogGif dogID={dogID} />
                  <CommentsContainer user={user} comments={comments} setComments={setComments} appOnDeleteComment={appOnDeleteComment} appOnAddComment={appOnAddComment} appOnEditComment={appOnEditComment} dogID={dogID} />
                </>
              </Route>
             	<Route exact path ="/dog_gif">
                  {dogGifs.map((dogGif)=> <DogGifsContainer key={dogGif.id} dogGif={dogGif} img={dogGif.img} setDogID={setDogID} />)}
 	            </Route>
              <Route exact path ="/new">
                  <NewGifForm appOnAddDogGif={appOnAddDogGif}/>
              </Route>

          </Switch>
        // </div>
      ) : (
        <LoginContainer onLogin={onLogin} />
        )}
    </Fragment>
  );
}

export default App;
