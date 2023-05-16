import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import Row from "./Row";

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
		<TableContainer className="overflow-y-scroll overflow-x-hidden h-full">
			<Table aria-label="caption table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell align="right">Тип инфосистемы</TableCell>
						<TableCell align="right">Инфосистема</TableCell>
						<TableCell align="right">Диспетчерское имя</TableCell>
						<TableCell align="right">План</TableCell>
						<TableCell align="right">Период</TableCell>
						<TableCell align="right">
							Система первоисточник для плана
						</TableCell>
						<TableCell align="right">Факт</TableCell>
						<TableCell align="right">Период</TableCell>
						<TableCell align="right">
							Система первоисточник для факта
						</TableCell>
						<TableCell align="right">Вариант расчета</TableCell>
						<TableCell align="right">Формула</TableCell>
						<TableCell align="right">С</TableCell>
						<TableCell align="right">По</TableCell>
						<TableCell align="right">Ед. изм.</TableCell>
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
