import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
	:root{
		--black: #0d0d0d;
		--yellow: #ECCE32;
		--lightpink: #E9C9F2;
	}

	* {
		
		box-sizing: border-box;
		margin:0;
		padding:0;
	}
	body{
		overflow-x: hidden;
        width: 100%;
        height: 100%;

		background: rgb(86,172,191);
		background: -moz-linear-gradient(180deg, rgba(86,172,191,1) 0%, rgba(179,148,224,1) 35%, rgba(233,201,242,1) 56%, rgba(162,171,212,1) 82%, rgba(238,238,238,1) 100%);
		background: -webkit-linear-gradient(180deg, rgba(86,172,191,1) 0%, rgba(179,148,224,1) 35%, rgba(233,201,242,1) 56%, rgba(162,171,212,1) 82%, rgba(238,238,238,1) 100%);
		background: linear-gradient(180deg, rgba(86,172,191,1) 0%, rgba(179,148,224,1) 35%, rgba(233,201,242,1) 56%, rgba(162,171,212,1) 82%, rgba(238,238,238,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#56acbf",endColorstr="#eeeeee",GradientType=1);
}
	h1, .title-section, h3{
		font-family: "Ultra";
	}
	
	.title-section{
		text-align: center;
		font-size: 2.3rem;
	}

	.title-section::before{
		content: "<";
	}
	
	.title-section::after{
		content: "/>";
	}

	h2 {
		font-family: "Pacifico", cursive;
	}
	li, p{
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

	margin: ${(props) => props.margin};
	padding: 1em 2rem;
`;

export const SideContainer = styled.div`
	width: 50%;
`;
