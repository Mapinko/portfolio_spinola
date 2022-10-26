import styled from 'styled-components';

export const WrapperTechs = styled.section`
    .title-wrap{
        width: 100%;
    }

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: ${(props) => props.direction ? props.direction : "column"};
    gap:  ${(props) => props.Gap ? props.Gap : "3rem"};

    #wrapper-languages{
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;

        width: 90%;
        margin: 0 auto;
        @media (max-width: 425px){
            flex-direction: column;
            gap: 1rem;
        }
    }
`

export const FilterWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`

export const TechListWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: wrap;


    .title-tech{
        width: 100%;
        margin: 0 auto 3rem ;
    }       
`

export const ParagraphWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: ${(props) => props.FlexDirection};
    @media(max-width: 920px) {
        & {
            text-align: center
        }
    }
    .mark {
		display: flex;
		max-width: 5%;
        width: 100%;

        @media(max-width: 920px) {
            & {
                display: none
            }
        }
	}

    .text-wrapper{
        margin: 1rem 0;
    }

    .identation-span{
		display: block;
		@media(max-width: 920px) {
			text-align: center;
		}
	}
`

