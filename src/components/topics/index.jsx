import circles from "../../assets/circles.svg";

import { TopicsStyle } from "./style";

const Topics = ({ children }) => {
	return (
		<TopicsStyle>
			<img src={circles} alt="" />
			<div className="topic_content">
				<h2>{children}</h2>
			</div>
		</TopicsStyle>
	);
};

export default Topics;
