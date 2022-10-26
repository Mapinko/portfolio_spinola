import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding-bottom: 5vh;
`;

export const SocialWapper = styled.div`
	display: flex;
	align-items: center;

	.links {
		display: flex;
		flex-direction: column;
		gap: 5px;

		margin: 0 auto;
		width: 100%;

		a,
		p,
		img {
			color: var(--black);
			margin: 0 auto;

			font-weight: 400;
			text-decoration: none;

			transition: ease-in-out 100ms;

			&:hover > p:hover {
				font-weight: 600;
			}
		}
	}
`;
