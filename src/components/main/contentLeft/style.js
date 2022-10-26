import styled from "styled-components";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding-bottom: 5vh;
`;

export const SocialWapper = styled.div`
	display: flex;
	flex-direction: ;
	align-items: flex-end;
	flex-wrap: wrap;
	gap: 1rem;

	.links {
		padding: .2rem;
		display: flex;
		flex-direction: column;
		gap: 5px;

		margin: 0 auto;

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
		img{
			width: 100%;
		}
	}
`;
