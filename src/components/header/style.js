import styled from "styled-components";

export const HeaderStyle = styled.div`
	width: 100%;
	margin: 0 auto;


	h1 {
		font-size: 9vh;

		@media(max-width: 920px) {
			& {
				text-align: center;
			}
		}
		@media(max-width: 425px) {
			& {
				font-size: 6.5vh;
			} 
		}
	}

	span {
		width: 40%;

		position: absolute;
		right: 0;
		top: 40px;

		border: 3px solid var(--black);
		border-radius: 5px;
		background-color: var(--black);
		@media(max-width: 1024px) {
			& {
				/* width: %; */
			}
		}
		@media(max-width: 920px) {
			& {
				display: none;
			}
		}
	}
`;
