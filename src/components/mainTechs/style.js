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
    gap: 3rem;

    .row-direction{
        display: flex;
        gap: 4rem;
        width: 100%;
    }
`

export const FilterWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
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

    .mark {
		display: flex;
		max-width: 5%;
        width: 100%;
	}

    .text-wrapper{
        margin: 1rem 0;
    }
`

