import { unitsData } from "@data/unitsData.json";

import { Grid } from "@mui/material";
import SearchModal from "@core/SearchModal";
import LayoutWithTitle from "@core/LayoutWithTitle";
import LabelForInputData from "@core/LabelForInputData";
import GridInputData from "@core/GridInputData";

const MainParams = () => {
	return (
		<LayoutWithTitle title="Основные параметры">
			<LabelForInputData nameForInput="Технический ключ" />
			<GridInputData disabled hiddenLabel fullWidth value={Date.now()} />
			<LabelForInputData nameForInput="Код показателя" />
			<GridInputData
				disabled
				hiddenLabel
				fullWidth
				value={Date.now() + 124124313451}
			/>

			<LabelForInputData nameForInput="Полное имя" />
			<GridInputData hiddenLabel fullWidth />
			<LabelForInputData nameForInput="Краткое имя" />
			<GridInputData hiddenLabel fullWidth />

			<LabelForInputData nameForInput="Ед. изм" />
			<Grid item xs={8}>
				<SearchModal data={unitsData} />
			</Grid>
			<LabelForInputData nameForInput="Парный показатель" />
			<GridInputData hiddenLabel fullWidth />
		</LayoutWithTitle>
	);
};

export default MainParams;
