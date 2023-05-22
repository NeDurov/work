import { useState } from "react";

import {
	TableCell,
	TableRow,
	Checkbox,
	IconButton,
	ThemeProvider,
	createTheme,
} from "@mui/material";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CollapseForInfosystem from "./CollapseForInfosystem";
import SearchModal from "../../Search/SearchModal";
import SelectData from "../../SelectData";

import { unitsData } from "../../../data/unitsData.json";
import { typeOfInfosystems, infosystems } from "../../../data/infosystem.json";
import { dataForPlanSystem } from "../../../data/planSystem.json";
import { dataForFactSystem } from "../../../data/factSystem.json";
import { dataForVariantResult } from "../../../data/variantResult.json";

import "dayjs/locale/ru";
import { ruRU } from "@mui/x-date-pickers/locales";

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

	const [typeOfInfosystem, setTypeOfInfosystem] = useState<string>("");
	const [infosystem, setInfosystem] = useState("");

	const [planSystem, setPlanSystem] = useState("");
	const [factSystem, setFactSystem] = useState("");
	const [variantResult, setVariantResult] = useState("");

	// const theme = createTheme(ruRU);

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
				<TableCell align="right">
					{/* {rowData.type} */}
					<SelectData
						className="w-20"
						name={"type-of-infosystem"}
						data={typeOfInfosystems}
						value={typeOfInfosystem}
						changeValue={setTypeOfInfosystem}
					/>
				</TableCell>
				<TableCell align="right">
					{/* {rowData.infoSystem} */}
					<SelectData
						className="w-28"
						name={"infosystem"}
						data={
							typeOfInfosystem != ""
								? infosystems[
										typeOfInfosystem as
											| keyof typeof infosystems
								  ]
								: []
						}
						value={infosystem}
						changeValue={setInfosystem}
					/>
				</TableCell>
				<TableCell align="right">
					{/* {rowData.dispName} */}
					<input
						type="text"
						// id="dispatchName"
						// name="dispatchName"
						className="border border-gray-300 p-2 rounded col-span-2"
					/>
				</TableCell>
				<TableCell align="center" padding="none">
					{/* {row.plan} */}
					<Checkbox checked={plan} onChange={() => setPlan(!plan)} />
				</TableCell>
				<TableCell align="center" padding="none">
					{/* {row.planPer} */}
					<Checkbox
						checked={planPer}
						onChange={() => setPlanPer(!planPer)}
					/>
				</TableCell>
				<TableCell align="right">
					{/* {rowData.pervoistochnikForPlan} */}
					{/* <SelectData
						className="w-36"
						name={"pervoistochnik-for-plan"}
						data={dataForPlanSystem}
						value={planSystem}
						changeValue={setPlanSystem}
					/> */}
					<SearchModal data={dataForPlanSystem} />
				</TableCell>
				<TableCell align="center" padding="none">
					{/* {row.fact} */}
					<Checkbox checked={fact} onChange={() => setFact(!fact)} />
				</TableCell>
				<TableCell align="center" padding="none">
					{/* {row.factPer} */}
					<Checkbox
						checked={factPer}
						onChange={() => setFactPer(!factPer)}
					/>
				</TableCell>
				<TableCell align="right">
					{/* {rowData.pervoistochnikForFact} */}
					{/* <SelectData
						className="w-36"
						name={"pervoistochnik-for-fact"}
						data={dataForFactSystem}
						value={factSystem}
						changeValue={setFactSystem}
					/> */}
					<SearchModal data={dataForFactSystem} />
				</TableCell>
				<TableCell align="right">
					{/* {rowData.variant} */}
					{/* <ThemeProvider theme={}> */}
					{/* <SelectData
						className="w-36"
						name={"variant-result"}
						data={dataForVariantResult}
						value={variantResult}
						changeValue={setVariantResult}
					/> */}
					<SearchModal data={dataForVariantResult} />

					{/* </ThemeProvider> */}
				</TableCell>
				<TableCell align="right">{rowData.formula}</TableCell>
				<TableCell align="right">
					{/* {rowData.from} */}
					<LocalizationProvider
						dateAdapter={AdapterDayjs}
						adapterLocale="ru"
						localeText={
							ruRU.components.MuiLocalizationProvider.defaultProps
								.localeText
						}
					>
						<DatePicker
							localeText={{ clearButtonLabel: "Vider" }}
							className="w-40"
							slotProps={{ textField: { size: "small" } }}
						/>
					</LocalizationProvider>
				</TableCell>
				<TableCell align="right">
					{/* {rowData.to} */}
					<LocalizationProvider
						dateAdapter={AdapterDayjs}
						adapterLocale="ru"
						localeText={
							ruRU.components.MuiLocalizationProvider.defaultProps
								.localeText
						}
					>
						<DatePicker
							slotProps={{ textField: { size: "small" } }}
							className="w-40"
						/>
					</LocalizationProvider>
				</TableCell>
				<TableCell align="right">
					{/* {rowData.unitsOfMeasurement} */}
					<div className="w-28">
						<SearchModal data={unitsData} />
					</div>
				</TableCell>
			</TableRow>
			<CollapseForInfosystem open={open} />
		</>
	);
};
export default Row;
