import { ButtonContainer } from "../button/style";
import { Navegation } from "./style";

import { Container } from "../../style/globalStyle";
import Button from "../button";

const Nav = () => {
	return (
		<Container margin="0 auto">
			<Navegation>
				<ButtonContainer>
				<a href='#ABOUTME--SECTION'>
					<Button>about me</Button>
				</a>
				</ButtonContainer>
				<ButtonContainer>
				<a href='#PROJECTS--SECTION'>
					<Button>projects</Button>
				</a>

				</ButtonContainer>
			</Navegation>
		</Container>
	);
};

export default Nav;
