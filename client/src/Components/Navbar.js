import { Fragment } from "react"
import { Link } from 'react-router-dom'

function Navbar({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }
  

  return (
    <header style={{ backgroundColor: "Gainsboro", 'paddingTop':20, 'paddingBottom':20 }} >
			<Fragment>
				<span style={{ 'paddingLeft':15, 'paddingRight':15, fontSize:30 }} ><b><Link to='/dog_gif'>DogeGIF</Link></b></span>
				{ user ? 
					<Fragment>
						<span style={{ float: "right", 'paddingRight':15 }} >
							<span style={{'paddingLeft':15, 'paddingRight':15}}>Welcome, {user.username}</span>
							<button onClick={handleLogout}>Logout</button>
						</span>
						<Link to="/new" style={{'paddingLeft':15, 'paddingRight':15}} >Add New GIF</Link>					
					</Fragment>
				:
					null
				}
			</Fragment>
    </header>
  );
}

export default Navbar