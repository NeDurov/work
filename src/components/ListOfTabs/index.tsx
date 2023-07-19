import { useState } from "react";
import InfoSystems from "./Tabs/InfoSystems";
import { Tabs, Tab, styled, Stack } from "@mui/material";
import CustomTabPanel from "./components/CustomTabPanel";

const ContainerForTabs = styled(Stack)({
	width: "100%",
	marginLeft: "2rem",
	marginTop: "1rem",
});

const ListOfTabs = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<ContainerForTabs>
			<Tabs value={value} onChange={handleChange}>
				<Tab label={"Инфосистемы"} />
				<Tab label={"Аналитики"} />
				<Tab label={"Время жизни"} />
				<Tab label={"Классификация"} />
				<Tab label={"Группы"} />
				<Tab label={"Бурение"} />
				<Tab label={"Затраты"} />
				<Tab label={"Энергетика"} />
				<Tab label={"Услуги ПХД"} />
				<Tab label={"Имущество"} />
				<Tab label={"IT"} />
				<Tab label={"Прочее"} />
				<Tab label={"Конфигурации"} />
			</Tabs>
			<CustomTabPanel value={value} index={0}>
				<InfoSystems />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<div>zxc</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={2}>
				<div>asd</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={3}>
				<div>zxc</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={4}>
				<div>asd</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={5}>
				<div>zxc</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={6}>
				<div>asd</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={7}>
				<div>zxc</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={8}>
				<div>asd</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={9}>
				<div>zxc</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={10}>
				<div>asd</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={11}>
				<div>zxc</div>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={12}>
				<div>asd</div>
			</CustomTabPanel>
		</ContainerForTabs>
	);
};

export default ListOfTabs;
