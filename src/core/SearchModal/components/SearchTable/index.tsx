import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	styled,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import translateKeys from "../../../../utils/translateKeys";

const SearchTable = ({
	keys,
	data,
	selectEl,
	closeModal,
	id,
}: {
	keys: Array<string>;
	data: Array<{ shortName: string; [key: string]: string }>;
	selectEl: Dispatch<SetStateAction<string>>;
	closeModal: Dispatch<SetStateAction<boolean>>;
	id: string;
}) => {
	const handleClick = (shortName: string) => {
		selectEl(shortName);
		closeModal(false);
	};

	const TableContainerWithMargin = styled(TableContainer)({
		marginTop: 5,
		maxHeight: "45vh",
		overflowY: "scroll",
	});

	const TableBodyWithScroll = styled(TableBody)({
		overflowY: "scroll",
	});

	return (
		<TableContainerWithMargin id={id}>
			<Table stickyHeader>
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
		</TableContainerWithMargin>
	);
};

export default SearchTable;
