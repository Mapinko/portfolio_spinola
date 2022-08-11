import Header from "./components/header";
import Main from "./components/main";
import { GlobalStyle } from "./style/globalStyle";

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />

			<Main />
		</>
	);
}

export default App;
