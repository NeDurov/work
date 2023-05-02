import ListOfTabs from "./components/ListOfTabs";
import MainParams from "./components/MainParams";
import Optional from "./components/Optional";
import RegistrationAndAdministration from "./components/RegistrationAndAdministration";

function App() {
	return (
		<div className="max-w-full grid grid-cols-3 grid-rows-2 gap-8 m-8">
			<MainParams />

			<Optional />

			<RegistrationAndAdministration />

			<ListOfTabs />
		</div>
	);
}

export default App;
