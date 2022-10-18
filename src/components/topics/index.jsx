import circles from "../../assets/circles.svg";

import { TopicsStyle } from "./style";

const Topics = ({ children, borderRadius, width, showCircles, shadow}) => {
	return (
		<TopicsStyle borderRadius={borderRadius} width={width} shadow={shadow}>
			<img src={circles} alt="" />
			<div className="topic_content">
				<h2>{children}</h2>
			</div>
			{
				showCircles &&
			<img src={circles} alt="" />
			}
		</TopicsStyle>
	);
};

export default Topics;
