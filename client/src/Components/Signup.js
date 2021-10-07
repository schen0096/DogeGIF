import { useState } from "react"
import { useHistory } from "react-router"


function Signup({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState([])
	const [showPassword, setShowPassword] = useState(false)

	const history = useHistory()

	function handleSubmit(e) {
	e.preventDefault();
	fetch("/signup", {
		method: "POST",
		headers: {
		"Content-Type": "application/json",
		},
		body: JSON.stringify({ 
				username,
				password
			}),
	})
		.then((r) => r.json())
		.then((data) => {
		if(data.errors) 
			setErrors(data.errors)
		else 
			onLogin(data)
			history.push(`/dog_gif`)
			});
	}

	function togglePassword(){
		setShowPassword(!showPassword)
	}

	return (
			<div>
			{errors?errors.map(e => <div style={{ color: "red" }} >{e}</div>):null}
			<form onSubmit={handleSubmit} class="ui large form">
				<div class="ui stacked secondary  segment">
					<div class="field">
						<div class="ui left icon input">
							<i class="user icon"></i>
								<input
									type="text"
									value={username}
									placeholder={"username"}
									onChange={(e) => setUsername(e.target.value)}
								/>
						</div>
					</div>
					<div class="field">
						<div class="ui left icon input">
							<i class="lock icon"></i>
								<input
									type={showPassword ? "text" : "password"}
									value={password}
									placeholder={"password"}
									onChange={(e) => setPassword(e.target.value)}
								/>		
								<button 
									onClick={togglePassword}
									type="button"
									class="ui icon button">
									<i class={showPassword ?  "eye icon" : "eye slash icon" }></i>
								</button>			
						</div>
					</div>
					<button class="ui fluid large teal submit button"
						type="submit"
					>
						Sign Up
					</button>
				</div>
			</form>
			</div>
	);
	}

	export default Signup