import styled from "styled-components"
import Signup from './Signup'


function SignupContainer({ onLogin }) {

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
			    <h2 class="ui image header">Sign Up For An Account </h2>
				<div class="content">
					<Signup onLogin={onLogin} />
				</div>
                <div class="ui message">
				Already have an account? <a href="/">Log In</a>
			    </div>
		</Container>
	) 
}

export default SignupContainer