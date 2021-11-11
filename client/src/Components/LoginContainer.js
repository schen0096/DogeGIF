import styled from "styled-components"
import LoginForm from './LoginForm'


function LoginContainer({ onLogin }) {

	const Container = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top:1em;
  	`;

	return (
		<Container>    
			<h2 class="ui image header">Log-in to your account</h2>
				<div class="content">
					<LoginForm onLogin={onLogin} />
				</div>
			<div class="ui message">
				Don't Have An Account? <a href="/signup">Sign Up</a>
			</div>
		</Container>
	) 
}

export default LoginContainer





