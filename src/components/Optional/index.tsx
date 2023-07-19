import GridInputData from "@core/GridInputData";
import LabelForInputData from "@core/LabelForInputData";
import LayoutWithTitle from "@core/LayoutWithTitle";

const Optional = () => {
	return (
		<LayoutWithTitle title="Дополнительно">
			<LabelForInputData
				xs={12}
				textAlign="left"
				nameForInput="Примечание"
			/>
			<GridInputData
				rows={10}
				hiddenLabel
				fullWidth
				multiline
				placeholder="Примечание"
				xs={12}
			/>
		</LayoutWithTitle>
	);
};

export default Optional;
