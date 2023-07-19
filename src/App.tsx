import ListOfTabs from "./components/ListOfTabs";
import MainParams from "./components/MainParams";
import Optional from "./components/Optional";
import RegistrationAndAdministration from "./components/RegistrationAndAdministration";

import GeneralLayout from "./Core/GeneralLayout";

function App() {
	return (
		<GeneralLayout>
			<MainParams />
			<Optional />
			<RegistrationAndAdministration />
			<ListOfTabs />
		</GeneralLayout>
	);
}

export default App;
