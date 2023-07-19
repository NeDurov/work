import GridInputData from "@core/GridInputData";
import LabelForInputData from "@core/LabelForInputData";
import LayoutWithTitle from "@core/LayoutWithTitle";
import { TableRow, TableCell, Collapse, Stack } from "@mui/material";

const CollapseForInfosystem = ({ open }: { open: boolean }) => {
	return (
		<TableRow>
			<TableCell colSpan={15} padding="none">
				<Collapse
					in={open}
					timeout="auto"
					unmountOnExit
					style={{ height: "400px" }}
				>
					<Stack direction={"row"} spacing={1} padding={1}>
						<LayoutWithTitle title="Формула расчета">
							<LabelForInputData
								xs={12}
								textAlign="left"
								nameForInput="Формула"
							/>
							<GridInputData
								xs={12}
								rows={3}
								fullWidth
								multiline
							/>
							<LabelForInputData
								xs={12}
								textAlign="left"
								nameForInput="Комментарий к формуле расчета"
							/>
							<GridInputData
								xs={12}
								rows={3}
								fullWidth
								multiline
							/>
						</LayoutWithTitle>
						<LayoutWithTitle title="Комментарий к инфосистеме">
							<GridInputData
								xs={12}
								fullWidth
								multiline
								rows={10}
							/>
						</LayoutWithTitle>
					</Stack>
				</Collapse>
			</TableCell>
		</TableRow>
	);
};

export default CollapseForInfosystem;
