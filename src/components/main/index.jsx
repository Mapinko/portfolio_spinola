import { Container, SideContainer } from "../../style/globalStyle";
import ContentLeft from "./contentLeft";
import ContentRight from "./contentRight";
import { MainContainer } from "./style";

const Main = () => {
	return (
		<MainContainer>
			<Container>
				<div className="flex-container">
					<SideContainer>
						<ContentLeft />
					</SideContainer>
					<SideContainer>
						<ContentRight />
					</SideContainer>
				</div>
			</Container>
		</MainContainer>
	);
};
export default Main;
