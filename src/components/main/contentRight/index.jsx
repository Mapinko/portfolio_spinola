import Profile from "../../../assets/picture.svg";
import Ticket from "../../../assets/ticket.svg";

import { ImageContainer } from "./style";

const ContentRight = () => {
	return (
		<ImageContainer>
			<img src={Profile} alt="" className="profile" />
			<img
				src={Ticket}
				alt="Welcome to my portfolio"
				className="ticket"
			/>
		</ImageContainer>
	);
};
export default ContentRight;
