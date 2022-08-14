import Subtopics from "../../subtopics";
import TextElements from "../../textElements";
import Topics from "../../topics";

import email from "../../../assets/email.svg";
import instagram from "../../../assets/instagram.svg";
import linkedIn from "../../../assets/linkedin.svg";
import whatsapp from "../../../assets/whatsapp.svg";

import { SocialWapper, Wrapper } from "./style";

const ContentLeft = () => {
	const social = [
		{
			img: linkedIn,
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/mariana-spinola-federico/",
		},
		{
			img: whatsapp,
			name: "Whatsapp",
			link: "https://api.whatsapp.com/send?phone=5519982645641",
		},
		{
			img: email,
			name: "Email",
			// link: "https://is.gd/wQJN9T",
			link: "mapincosf@gmail.com",
		},
		{
			img: instagram,
			name: "Instagram",
			link: "https://www.instagram.com/map.inko/",
		},
	];

	return (
		<>
			<Wrapper>
				<Topics>hello world</Topics>
				<Subtopics> A bit about me&#33;</Subtopics>
				<TextElements>
					I’m passionate about <b>body expression and visual arts </b>
					since I was a child. Over the years I got involved with
					<b> Desing</b> and, of course,
					<b> programming</b>, let me tell you that I was
					<b> blown away</b> by every aspect&#33;
				</TextElements>
				<TextElements>
					When I started working as a designer I always felt like I
					could do more. I kept imagining how incredible it would be
					to be able tos
					<b> make applications that go beyond the visual stimulus</b>
					and people could actually interact with them.
				</TextElements>
				<TextElements>
					That way, when I had my first contact with programming,
					<b> everything fell into place</b> and I'm falling more and
					more in love with the limitless possibilities it presents
					me!
				</TextElements>
			</Wrapper>

			<Wrapper>
				<Topics>Say hi&#33;</Topics>
				<Subtopics>Don&#39;t be shy :&#41; </Subtopics>
				<TextElements>
					Now that you know a little about me, <b>lets chat&#33; </b>
					Here are some socials that we can connect, feel free to talk
					to me.
				</TextElements>
				<SocialWapper>
					{social.map((pick, index) => (
						<div className="links">
							<a href={pick.link} target="_blank">
								<img src={pick.img} alt={pick.name} />
							</a>
							<a href={pick.link} target="_blank">
								<p>{pick.name}</p>
							</a>
						</div>
					))}
				</SocialWapper>
			</Wrapper>
		</>
	);
};

export default ContentLeft;
