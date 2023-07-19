import { Box, Grid } from "@mui/material";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box flexGrow={1}>
			<Grid container columnSpacing={3}>
				{children}
			</Grid>
		</Box>
	);
};

export default GeneralLayout;
