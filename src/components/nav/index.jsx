import { ButtonContainer } from "../button/style";
import { Navegation } from "./style";

import Button from "../button";

const Nav = () => {
	return (
		<Navegation>
			<ButtonContainer>
				<Button>about me</Button>
			</ButtonContainer>
			<ButtonContainer>
				<Button>projects</Button>
			</ButtonContainer>
		</Navegation>
	);
};

export default Nav;
