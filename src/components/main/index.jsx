import { Container, SideContainer } from "../../style/globalStyle";
import ContentLeft from "./contentLeft";
import ContentRight from "./contentRight";

const Main = () => {
	return (
			<Container >
				<div className="flex-container" >
					<SideContainer ResponsiveWidth={"100%"} Align={"center"} >
						<ContentLeft />
					</SideContainer>
					<SideContainer ResponsiveWidth={"0"}>
						<ContentRight />
					</SideContainer>
				</div>
			</Container>


	);
};
export default Main;
