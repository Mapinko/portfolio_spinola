import { Container, SideContainer } from "../../style/globalStyle";
import ContentLeft from "./contentLeft";
import ContentRight from "./contentRight";

const Main = () => {
	return (
			<Container >
				<div className="flex-container">
					<SideContainer>
						<ContentLeft />
					</SideContainer>
					<SideContainer>
						<ContentRight />
					</SideContainer>
				</div>
			</Container>


	);
};
export default Main;
