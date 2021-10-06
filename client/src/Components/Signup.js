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
			<form onSubmit={handleSubmit}>
		<div style={{ paddingTop: 10 }} />
				<input
					type="text"
					value={username}
					placeholder={"username"}
					onChange={(e) => setUsername(e.target.value)}
				/>
		<div style={{ paddingTop: 10 }} />
				<input
					type={showPassword ? "text" : "password"}
					value={password}
					placeholder={"password"}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button 
					onClick={togglePassword}
					type="button">
					Show Password
				</button>
		<div style={{ paddingTop: 10 }} />
				<button type="submit">Signup</button>
			</form>
		</div>
	);
	}

	export default Signup