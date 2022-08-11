import { Container } from "../../style/globalStyle";
import { Button, ButtonContainer } from "../button/style";
import { Nav } from "./style";

const Header = () => {
	return (
		<Container>
			<Nav>
				<ButtonContainer>
					<Button>about me</Button>
				</ButtonContainer>
				<ButtonContainer>
					<Button>projects</Button>
				</ButtonContainer>
			</Nav>
		</Container>
	);
};

export default Header;
