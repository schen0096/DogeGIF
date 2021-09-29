import { useState, useEffect, Fragment } from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from './Components/LoginContainer'
import DogGifsContainer from './Components/DogGifsContainer'
import CommentsContainer from "./Components/CommentsContainer"
import NewGifForm from './Components/NewGifForm'
import Navbar from "./Components/Navbar"

function App() {
  const [user, setUser] = useState(null)
  const [dogGifs, setDogGifs] = useState([])
  const [comments, setComments] = useState([])

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
    setDogGifs([data, ...dogGifs])
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
             	<Route exact path ="/">
                <>
                  {dogGifs.map((dogGif)=> <DogGifsContainer dogGif={dogGif}/>)}
                  <CommentsContainer user={user} comments={comments} setComments={setComments} appOnDeleteComment={appOnDeleteComment} appOnAddComment={appOnAddComment} appOnEditComment={appOnEditComment} dogGifs={dogGifs} />
                </>
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
