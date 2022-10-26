import { useState } from 'react';

import Button from '../button';
import TextElements from '../textElements';
import Topics from '../topics';

import AllTechList from './techsList/allTechs';
import BackEndList from './techsList/backEnd';
import FrontEndList from './techsList/frontEnd';

import { Container, SideContainer } from "../../style/globalStyle";
import { ButtonContainer } from '../button/style';
import { FilterWrapper, ParagraphWrapper, TechListWrapper, WrapperTechs } from './style';

import topicMark from "../../assets/topic_mark.svg";

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
		<Container margin={"0 auto"} id="ABOUTME--SECTION">
			<div className="flex-container">
				<SideContainer>
					<WrapperTechs>
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
					</WrapperTechs>
				</SideContainer>
				
				<SideContainer>
					<div>
						<WrapperTechs>
							<div className='title-wrap'>
								<h2 className='title-section'> Education </h2>
							</div>
							<TextElements>
								<span className='identation-span'>
									2022 - 2023
								</span>
								<span className='identation-span'>
									<b>
									Kenzie Academy Brasil
									</b>
								</span>
								<span className='identation-span'>
								2.000 hours - <b>Full Stack Development</b>
								</span>
							</TextElements>
						</WrapperTechs>
					</div>
					<div>
						<WrapperTechs>
							<div className='title-wrap'>
								<h2 className='title-section'> Curiosities </h2>
							</div>
						</WrapperTechs>
						<ParagraphWrapper>
							<span className='mark'>
								<img src={topicMark} alt="" />
							</span>
							<div className='text-wrapper'>
								<p>
									I started dancing as a child and have been able to experience different dance styles over the years such as ballet, jazz, flamenco, contemporary and hiphop. 
								</p>
								<p>
									<b>Now a days I'm part of a dance company called Kahal</b> where I practice urban dances. I can definitely say with my eyes closed that it's my <b>favorite hobby!</b>
								</p>
							</div>
						</ParagraphWrapper>
						
						<ParagraphWrapper>
							<span className='mark'>
								<img src={topicMark} alt="" />
							</span>
							<div className='text-wrapper'>
								<p>
								I got involved especially with <b>Web Design</b> because I started to play around with my illustrations and other creations through <b>Adobe's softwares!</b> Such as: <b> Photoshop, Illustrator, Premiere,</b> etc.
								</p>
							</div>
						</ParagraphWrapper>

						<ParagraphWrapper>
							<span className='mark'>
								<img src={topicMark} alt="" />
							</span>
							<div className='text-wrapper'>
								<p>
									I <b>lived 5 years</b> of my childhood in <b>Santiago Chile</b>. Until today I keep in touch with my old friends!
								</p>
								<p>
								I adore that I have this opportunity because is a way that I can practice my spanish and <b>maintain a connection with another culture.</b>
								</p>
							</div>
						</ParagraphWrapper>
					</div>
					<div>
						<WrapperTechs >
							<div className='title-wrap'>
								<h2 className='title-section'> Languages </h2>
							</div>

							<div className='row-direction'>
								<TextElements>
									<span className='identation-span'>
										English
									</span>
									<span className='identation-span'>
										<b>Advanced</b>
									</span>
								</TextElements>

								<TextElements>
									<span className='identation-span'>
										Spanish
									</span>
									<span className='identation-span'>
										<b>Advanced</b>
									</span>
								</TextElements>

								<TextElements>
									
										<span className='identation-span'>
											Portuguese
										</span>
										<span className='identation-span'>
											<b>Native</b>
										</span>
								</TextElements>
							</div>
						</WrapperTechs>
					</div>
				</SideContainer>
			</div>
		</Container>
	);
};
export default MainTechs;