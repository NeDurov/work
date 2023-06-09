import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import translateKeys from "../../utils/translateKeys";

const SearchTable = ({
	keys,
	data,
	selectEl,
	closeModal,
}: {
	keys: Array<string>;
	data: Array<{ shortName: string; [key: string]: string }>;
	selectEl: Dispatch<SetStateAction<string>>;
	closeModal: Dispatch<SetStateAction<boolean>>;
}) => {
	const handleClick = (shortName: string) => {
		selectEl(shortName);
		closeModal(false);
	};

	return (
		<TableContainer className="mt-2" component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						{keys.map((cell, i) => (
							<TableCell key={i} align="left">
								{translateKeys(cell)}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((el) => {
						return (
							<TableRow
								onClick={() => {
									handleClick(el.shortName);
								}}
								key={el.id}
							>
								{(
									Object.keys(el) as Array<keyof typeof el>
								).map((cell, i) => (
									<TableCell key={i}>{el[cell]}</TableCell>
								))}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SearchTable;
