import { useState } from 'react';
import { Container, SideContainer } from "../../style/globalStyle";
import Button from '../button';
import { ButtonContainer } from '../button/style';
import Topics from '../topics';
import { FilterWrapper, LeftWrapperTechs, TechListWrapper } from './style';
import AllTechList from './techsList/allTechs';
import BackEndList from './techsList/backEnd';
import FrontEndList from './techsList/frontEnd';

const MainTechs = () => {

	const [isAllActive, setAllActive] = useState(true)
	const [isFrontActive, setFrontActive] = useState(false)
	const [isBackActive, setBackActive] = useState(false)

	function handleClickAll() {

		setAllActive(true)
		setFrontActive(false)
		setBackActive(false)

		console.log(`All:${isAllActive}`);
		console.log(`Front:${isFrontActive}`);
		console.log(`Back:${isBackActive}`);
	}
	
	function handleClickFront() {
		setAllActive(false)
		setFrontActive(true)
		setBackActive(false)

		console.log(`All:${isAllActive}`);
		console.log(`Front:${isFrontActive}`);
		console.log(`Back:${isBackActive}`);
	}
	function handleClickBack() {
		setAllActive(false)
		setFrontActive(false)
		setBackActive(true)

		console.log(`All:${isAllActive}`);
		console.log(`Front:${isFrontActive}`);
		console.log(`Back:${isBackActive}`);
	}
	
	return (
		<Container>
			<div className="flex-container">
				<SideContainer>
				<LeftWrapperTechs>
				<div className='title-wrap'>
					<h2 className='title-section'> Technologies </h2>
				</div>

				<FilterWrapper>
						<ButtonContainer width={190}>
							<Button width={190} click={handleClickAll}>all</Button>
						</ButtonContainer>
						<ButtonContainer width={190}>
							<Button click={handleClickFront} width={190}>front-end</Button>
						</ButtonContainer>
						<ButtonContainer width={190}>
							<Button click={handleClickBack} width={190}>back-end</Button>
						</ButtonContainer>
				</FilterWrapper>
					{
						isAllActive && (
							<TechListWrapper>
							<div className="title-tech">
								<Topics borderRadius={"30px"} width={"70"} showCircles={true} shadow={true}>All Techs</Topics>
							</div>
								<AllTechList/>
							</TechListWrapper>
						)
					}
					{
						isFrontActive && (
							<TechListWrapper>
								<div className="title-tech">
									<Topics borderRadius={"30px"} width={"70"} showCircles={true} shadow={true}>Front-End</Topics>
								</div>
								<FrontEndList />
							</TechListWrapper>
							)
					}
					{
						isBackActive && ( 
							<TechListWrapper>
							<div className="title-tech">
								<Topics  borderRadius={"30px"} width={"70"} showCircles={true}  shadow={true}>Back-End</Topics>
							</div>
								<BackEndList />
							</TechListWrapper>
							)
					}
				</LeftWrapperTechs>
				</SideContainer>
				<SideContainer>
				
				</SideContainer>
			</div>
		</Container>
	);
};
export default MainTechs;