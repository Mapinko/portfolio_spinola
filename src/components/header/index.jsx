import { Container, SideContainer } from "../../style/globalStyle";
import { HeaderStyle } from "./style";

import Nav from "../nav";

const Header = () => {
	return (
		<>
			<Nav />
			<SideContainer>
				<Container>
					<HeaderStyle>
						<span></span>
						<h1>Mari Spinola</h1>
					</HeaderStyle>
				</Container>
			</SideContainer>
		</>
	);
};

export default Header;
