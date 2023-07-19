import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import Row from "./components/Row";

const data = {
	type: "XXX",
	infoSystem: "XXX",
	dispName: "XXX",
	plan: "XXX",
	planPer: "XXX",
	pervoistochnikForPlan: "XXX",
	fact: "XXX",
	factPer: "XXX",
	pervoistochnikForFact: "XXX",
	variant: "XXX",
	formula: "XXX",
	from: "XXX",
	to: "XXX",
	unitsOfMeasurement: "XXX",
};

const arr = Array(10).fill(data);

const InfoSystems = () => {
	return (
		<TableContainer>
			<Table aria-label="caption table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell align="right">Тип инфосистемы</TableCell>
						<TableCell align="right">Инфосистема</TableCell>
						<TableCell align="right">Диспетчерское имя</TableCell>
						<TableCell align="center">План</TableCell>
						<TableCell align="center">Период</TableCell>
						<TableCell align="right">
							Система первоисточник для плана
						</TableCell>
						<TableCell align="center">Факт</TableCell>
						<TableCell align="center">Период</TableCell>
						<TableCell align="right">
							Система первоисточник для факта
						</TableCell>
						<TableCell align="right">Вариант расчета</TableCell>
						<TableCell align="center">Формула</TableCell>
						<TableCell align="center">С</TableCell>
						<TableCell align="center">По</TableCell>
						<TableCell align="center">Ед. изм.</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{arr.map((row, i) => (
						<Row key={i} rowData={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default InfoSystems;
