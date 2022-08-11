import { List, ListContainer } from "./style";

import topicMark from "../../assets/topic_mark.svg";
const TextElements = ({ children }) => {
	return (
		<ListContainer>
			<span>
				<img src={topicMark} alt="" />
			</span>
			<List>
				<li>{children}</li>
			</List>
		</ListContainer>
	);
};

export default TextElements;
