import { SubtopicStyle } from "./style";

const Subtopics = ({ children }) => {
	return (
		<SubtopicStyle>
			<h3>{children}</h3>
		</SubtopicStyle>
	);
};
export default Subtopics;
