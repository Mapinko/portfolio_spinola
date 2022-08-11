import { ButtonContainer } from "../button/style";
import { Navegation } from "./style";

import { Container } from "../../style/globalStyle";
import Button from "../button";

const Nav = () => {
	return (
		<Container margin="0 auto">
			<Navegation>
				<ButtonContainer>
					<Button>about me</Button>
				</ButtonContainer>
				<ButtonContainer>
					<Button>projects</Button>
				</ButtonContainer>
			</Navegation>
		</Container>
	);
};

export default Nav;
