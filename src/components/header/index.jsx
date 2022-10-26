import { Container, SideContainer } from "../../style/globalStyle";
import { HeaderStyle } from "./style";

import Nav from "../nav";

const Header = () => {
	return (
		<header>
			<Nav />
			<SideContainer ResponsiveWidth={"100%"}>
				<Container>
					<HeaderStyle>
						<span></span>
						<h1>Mari Spinola</h1>
					</HeaderStyle>
				</Container>
			</SideContainer>
		</header>
	);
};

export default Header;
