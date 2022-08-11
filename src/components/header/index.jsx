import { Container } from "../../style/globalStyle";
import { HeaderStyle } from "./style";

import Nav from "../nav";

const Header = () => {
	return (
		<Container>
			<Nav />
			<HeaderStyle>
				<span></span>
				<h1>Mari Spinola</h1>
			</HeaderStyle>
		</Container>
	);
};

export default Header;
