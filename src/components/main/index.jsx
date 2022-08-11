import { Container, LeftContainer } from "../../style/globalStyle";
import ContentLeft from "./contentLeft";
import { MainContainer } from "./style";

const Main = () => {
	return (
		<MainContainer>
			<Container>
				<LeftContainer>
					<ContentLeft />
				</LeftContainer>
			</Container>
		</MainContainer>
	);
};
export default Main;
