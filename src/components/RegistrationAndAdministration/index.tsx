import { dataForSelect } from "../../data/ownerData.json";

import { useState } from "react";
import { Grid } from "@mui/material";
import SelectData from "@core/Select";
import LayoutWithTitle from "@core/LayoutWithTitle";
import LabelForInputData from "@core/LabelForInputData";
import GridInputData from "@core/GridInputData";

const RegistrationAndAdministration = () => {
	const [owner, setOwner] = useState("");

	return (
		<LayoutWithTitle title="Регистрация и администрирование показателя">
			<LabelForInputData nameForInput="Создал/изменил" />
			<GridInputData hiddenLabel fullWidth />

			<LabelForInputData nameForInput="Дата создания/изменения" />
			<GridInputData hiddenLabel fullWidth />

			<LabelForInputData nameForInput="Согласовали" />
			<GridInputData hiddenLabel fullWidth />

			<LabelForInputData nameForInput="Дата согласования" />
			<GridInputData hiddenLabel fullWidth />

			<LabelForInputData nameForInput="№ последней заявки" />
			<GridInputData hiddenLabel fullWidth />

			<LabelForInputData nameForInput="Владелец" />
			<Grid item xs={8}>
				<SelectData
					placeholder={"Владелец"}
					data={dataForSelect}
					value={owner}
					changeValue={setOwner}
				/>
			</Grid>
		</LayoutWithTitle>
	);
};

export default RegistrationAndAdministration;
