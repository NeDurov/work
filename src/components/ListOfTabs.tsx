import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const ListOfTabs = () => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<div className="row-start-2 col-span-3 ">
			<Tabs
				className="w-full h-full"
				selectedIndex={tabIndex}
				onSelect={(index) => setTabIndex(index)}
			>
				<TabList className="flex flex-row">
					<Tab>Инфосистемы</Tab>
					<Tab>Аналитики</Tab>
					<Tab>Время жизни</Tab>
					<Tab>Классификация</Tab>
					<Tab>Группы</Tab>
					<Tab>Бурение</Tab>
					<Tab>Затраты</Tab>
					<Tab>Энергетика</Tab>
					<Tab>Услуги ПХД</Tab>
					<Tab>Имущество</Tab>
					<Tab>IT</Tab>
					<Tab>Прочее</Tab>
					<Tab>Конфигурации</Tab>
				</TabList>
				<TabPanel>
					<div>
						assdffffffffffffffffffffffffffffffffffffffffffffffffffffd
					</div>
				</TabPanel>
				<TabPanel>
					<div>zxc</div>
				</TabPanel>
				<TabPanel>
					<div>asd</div>
				</TabPanel>
				<TabPanel>
					<div>zxc</div>
				</TabPanel>
				<TabPanel>
					<div>asd</div>
				</TabPanel>
				<TabPanel>
					<div>zxc</div>
				</TabPanel>
				<TabPanel>
					<div>asd</div>
				</TabPanel>
				<TabPanel>
					<div>zxc</div>
				</TabPanel>
				<TabPanel>
					<div>asd</div>
				</TabPanel>
				<TabPanel>
					<div>zxc</div>
				</TabPanel>
				<TabPanel>
					<div>asd</div>
				</TabPanel>
				<TabPanel>
					<div>zxc</div>
				</TabPanel>
				<TabPanel>
					<div>asd</div>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ListOfTabs;
