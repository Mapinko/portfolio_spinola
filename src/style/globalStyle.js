import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
	:root{
		--black: #0d0d0d;
		--yellow: #ECCE32;
	}

	* {
		box-sizing: border-box;
		margin:0;
		padding:0;
	}
	body{
          width: 100vw;
          height: 100vh;
          background: linear-gradient(180deg, #56ABBF 0%, #A198D9 23.6%, #E9C9F2 48.25%, #A2ABD4 75.32%, #EBEBED 100%);
	}
	h1{
		font-family: "Ultra";
	}
	h2 {
		font-family: "Pacifico", cursive;
	}
	p{
		font-family: 'Baloo 2', cursive;
	}
	button{
		cursor:pointer;

		background: var(--yellow);
		border: 0 none;
		border-radius: 30px;
	}
	ul, ol, li{
		list-style:none;
	}
	img{
		max-width: 100%;
	}
`;

export const Container = styled.div`
	max-width: 1360px;
	width: 100%;

	padding: 2rem;
`;
