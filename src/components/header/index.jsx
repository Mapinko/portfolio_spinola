import { Container, LeftContainer } from "../../style/globalStyle";
import { HeaderStyle } from "./style";

import Nav from "../nav";

const Header = () => {
	return (
		<>
			<Nav />
			<LeftContainer>
				<Container>
					<HeaderStyle>
						<span></span>
						<h1>Mari Spinola</h1>
					</HeaderStyle>
				</Container>
			</LeftContainer>
		</>
	);
};

export default Header;
