import Header from "./components/header";
import Main from "./components/main";
import { MainContainer } from './components/main/style';
import MainTechs from './components/mainTechs';
import { GlobalStyle } from "./style/globalStyle";

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />

			<MainContainer>
				<Main />
                <MainTechs/>
			</MainContainer>

		</>
	);
}

export default App;
