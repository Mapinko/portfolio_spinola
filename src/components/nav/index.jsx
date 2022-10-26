import { ButtonContainer } from "../button/style";
import { Navegation } from "./style";

import { Container } from "../../style/globalStyle";
import Button from "../button";

const Nav = () => {
	return (
		<Container margin="0 auto">
			<Navegation>
				<ButtonContainer>
					<a href='#TECHS--SECTION'>
						<Button>technologies</Button>
					</a>
				</ButtonContainer>
				<ButtonContainer className='ABOUTME--NAV'>
					<a href='#ABOUTME--SECTION' className='ABOUTME--NAV'>
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
