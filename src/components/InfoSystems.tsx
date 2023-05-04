import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";

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
	unitsOfMeasurement: "",
};

const arr = Array(10).fill(data);

const InfoSystems = () => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="caption table">
				<TableHead>
					<TableRow>
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
					{arr.map((row) => (
						<TableRow key={row.infoSystem}>
							<TableCell align="right">{row.type}</TableCell>
							<TableCell align="right">
								{row.infoSystem}
							</TableCell>
							<TableCell align="right">{row.dispName}</TableCell>
							<TableCell align="right">{row.plan}</TableCell>
							<TableCell align="right">{row.planPer}</TableCell>
							<TableCell align="right">
								{row.pervoistochnikForPlan}
							</TableCell>
							<TableCell align="right">{row.fact}</TableCell>
							<TableCell align="right">{row.factPer}</TableCell>
							<TableCell align="right">
								{row.pervoistochnikForFact}
							</TableCell>
							<TableCell align="right">{row.variant}</TableCell>
							<TableCell align="right">{row.formula}</TableCell>
							<TableCell align="right">{row.from}</TableCell>
							<TableCell align="right">{row.to}</TableCell>
							<TableCell align="right">
								{row.unitsOfMeasurement}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default InfoSystems;
