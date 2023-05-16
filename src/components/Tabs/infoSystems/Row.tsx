import { useState } from "react";

import {
	TableCell,
	TableRow,
	Checkbox,
	IconButton,
	Collapse,
} from "@mui/material";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import CollapseForInfosystem from "./CollapseForInfosystem";

interface Props {
	rowData: {
		type: string;
		infoSystem: string;
		dispName: string;
		plan: string;
		planPer: string;
		pervoistochnikForPlan: string;
		fact: string;
		factPer: string;
		pervoistochnikForFact: string;
		variant: string;
		formula: string;
		from: string;
		to: string;
		unitsOfMeasurement: string;
	};
}

const Row = ({ rowData }: Props) => {
	const [plan, setPlan] = useState(false);
	const [planPer, setPlanPer] = useState(false);
	const [fact, setFact] = useState(false);
	const [factPer, setFactPer] = useState(false);
	const [open, setOpen] = useState(false);
	return (
		<>
			<TableRow>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					</IconButton>
				</TableCell>
				<TableCell align="right">{rowData.type}</TableCell>
				<TableCell align="right">{rowData.infoSystem}</TableCell>
				<TableCell align="right">{rowData.dispName}</TableCell>
				<TableCell align="right">
					{/* {row.plan} */}
					<Checkbox checked={plan} onChange={() => setPlan(!plan)} />
				</TableCell>
				<TableCell align="right">
					{/* {row.planPer} */}
					<Checkbox
						checked={planPer}
						onChange={() => setPlanPer(!planPer)}
					/>
				</TableCell>
				<TableCell align="right">
					{rowData.pervoistochnikForPlan}
				</TableCell>
				<TableCell align="right">
					{/* {row.fact} */}
					<Checkbox checked={fact} onChange={() => setFact(!fact)} />
				</TableCell>
				<TableCell align="right">
					{/* {row.factPer} */}
					<Checkbox
						checked={factPer}
						onChange={() => setFactPer(!factPer)}
					/>
				</TableCell>
				<TableCell align="right">
					{rowData.pervoistochnikForFact}
				</TableCell>
				<TableCell align="right">{rowData.variant}</TableCell>
				<TableCell align="right">{rowData.formula}</TableCell>
				<TableCell align="right">{rowData.from}</TableCell>
				<TableCell align="right">{rowData.to}</TableCell>
				<TableCell align="right">
					{rowData.unitsOfMeasurement}
				</TableCell>
			</TableRow>
			<CollapseForInfosystem open={open} />
		</>
	);
};
export default Row;
