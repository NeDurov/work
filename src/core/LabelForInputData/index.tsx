import { Grid, Typography } from "@mui/material";

export interface LabelForInputDataProps {
	nameForInput: string;
	xs?: number;
	textAlign?: "center" | "left" | "right";
}

const LabelForInputData = ({
	nameForInput,
	xs = 4,
	textAlign = "right",
}: LabelForInputDataProps) => {
	return (
		<Grid item xs={xs} textAlign={textAlign}>
			<Typography variant="body2">{nameForInput + ":"}</Typography>
		</Grid>
	);
};

export default LabelForInputData;
