import { ButtonStyle } from "./style";

const Button = ({ children, width, click}) => {
	return <ButtonStyle width={width} onClick={click}>{children}</ButtonStyle>;
};

export default Button;
