import { Grid, TextFieldProps } from "@mui/material";
import Input from "../Input";

type GridInputData = TextFieldProps & {
	xs?: number;
};

const GridInputData = ({ xs = 8, ...propsForInput }: GridInputData) => {
	return (
		<Grid item xs={xs}>
			<Input size="small" {...propsForInput} />
		</Grid>
	);
};

export default GridInputData;
