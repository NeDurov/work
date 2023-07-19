import { useState } from "react";

import { TableCell, TableRow, Checkbox, IconButton } from "@mui/material";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CollapseForInfosystem from "../CollapseForInfosystem";

import { unitsData } from "@data/unitsData.json";
import { typeOfInfosystems, infosystems } from "@data/infosystem.json";
import { dataForPlanSystem } from "@data/planSystem.json";
import { dataForFactSystem } from "@data/factSystem.json";
import { dataForVariantResult } from "@data/variantResult.json";

import "dayjs/locale/ru";
import { ruRU } from "@mui/x-date-pickers/locales";
import SelectData from "@core/Select";
import Input from "@core/Input";
import SearchModal from "@core/SearchModal";

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

	const [dateStart, setDateStart] = useState(null);
	const [dateEnd, setDateEnd] = useState(null);

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
					<SelectData
						className="w-20"
						name={"type-of-infosystem"}
						data={typeOfInfosystems}
						value={typeOfInfosystem}
						changeValue={setTypeOfInfosystem}
					/>
				</TableCell>
				<TableCell align="right">
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
					<Input type="text" size="small" />
				</TableCell>
				<TableCell align="center" padding="none">
					<Checkbox checked={plan} onChange={() => setPlan(!plan)} />
				</TableCell>
				<TableCell align="center" padding="none">
					<Checkbox
						checked={planPer}
						onChange={() => setPlanPer(!planPer)}
					/>
				</TableCell>
				<TableCell align="right">
					<SearchModal data={dataForPlanSystem} />
				</TableCell>
				<TableCell align="center" padding="none">
					<Checkbox checked={fact} onChange={() => setFact(!fact)} />
				</TableCell>
				<TableCell align="center" padding="none">
					<Checkbox
						checked={factPer}
						onChange={() => setFactPer(!factPer)}
					/>
				</TableCell>
				<TableCell align="right">
					<SearchModal data={dataForFactSystem} />
				</TableCell>
				<TableCell align="right">
					<SearchModal data={dataForVariantResult} />
				</TableCell>
				<TableCell align="right">{rowData.formula}</TableCell>
				<TableCell align="right">
					<LocalizationProvider
						dateAdapter={AdapterDayjs}
						adapterLocale="ru"
						localeText={
							ruRU.components.MuiLocalizationProvider.defaultProps
								.localeText
						}
					>
						<DatePicker
							value={dateStart}
							onChange={(newValue) => setDateStart(newValue)}
							renderInput={(params) => (
								<Input
									size="small"
									style={{ width: "150px" }}
									{...params}
									inputProps={{
										...params.inputProps,
										placeholder: "дд.мм.гггг",
									}}
								/>
							)}
						/>
					</LocalizationProvider>
				</TableCell>
				<TableCell align="right">
					<LocalizationProvider
						dateAdapter={AdapterDayjs}
						adapterLocale="ru"
						localeText={
							ruRU.components.MuiLocalizationProvider.defaultProps
								.localeText
						}
					>
						<DatePicker
							value={dateEnd}
							onChange={(newValue) => setDateEnd(newValue)}
							renderInput={(params) => (
								<Input
									size="small"
									style={{ width: "150px" }}
									{...params}
									inputProps={{
										...params.inputProps,
										placeholder: "дд.мм.гггг",
									}}
								/>
							)}
						/>
					</LocalizationProvider>
				</TableCell>
				<TableCell align="right">
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
