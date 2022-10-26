import styled, { css } from "styled-components";

export const TopicsStyle = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	
	width: ${(props) => props.width ? props.width : 100}%;
	height: 60px;
	padding: 0 1em;
	
	background-color: var(--lightpink);
	box-shadow: ${(props) => props.shadow && css`7px 8px 4px 1px rgba(0, 0, 0, 0.25)`};

	border-radius: ${(props) => props.borderRadius ? 
	props.borderRadius : 
	css`0 30px 30px 0`};

	@media(max-width: 920px) {
		border-radius: 30px
	}

	.topic_content {
		padding-right: 2em;
		width: 100%;
		text-align: center;
	}

`;
