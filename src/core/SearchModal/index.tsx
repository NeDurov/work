import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import SearchTable from "./components/SearchTable";
import Input from "@core/Input";
import { Box, Divider, Stack, styled, Typography } from "@mui/material";
import translateKeys from "../../utils/translateKeys";

const BoxContainer = styled(Box)({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	backgroundColor: "white",
	maxHeight: "50vh",
	overflow: "hidden",
	padding: 10,
});

const SearchModal = ({
	data,
}: {
	data: Array<{ shortName: string; [key: string]: string }>;
}) => {
	const [item, setItem] = useState("");
	const [open, setOpen] = useState(false);
	const [filter, setFilter] = useState<(typeof data)[0]>({ shortName: "" });

	const [filterData, setFilterData] = useState(data || []);
	const [keys, _] = useState<Array<string>>(Object.keys(data[0]));
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (value === "") setFilterData(data);
		setFilter((oldFilter) => ({ ...oldFilter, [name]: value }));
	};

	useEffect(() => setFilterData(data), [open]);

	useEffect(() => {
		let filteredData = data;

		for (const key in filter) {
			if (filter[key] === "") continue;

			filteredData = filteredData.filter((item, i, arr) =>
				item[key].includes(filter[key])
			);
		}
		setFilterData(filteredData);
	}, [filter]);

	return (
		<>
			<Input
				fullWidth
				size="small"
				InputProps={{
					readOnly: true,
				}}
				onClick={handleOpen}
				value={item}
			/>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-header"
				aria-describedby="modal-description"
			>
				<BoxContainer>
					<Stack
						direction={"row"}
						spacing={2}
						divider={<Divider orientation="vertical" flexItem />}
						id="modal-header"
					>
						{keys.map((key, i) => {
							return key === "name" ? (
								""
							) : (
								<Stack
									key={i}
									direction={"row"}
									alignItems={"center"}
									spacing={1}
								>
									<Typography
										overflow={"visible"}
										noWrap
										variant="body2"
									>
										{translateKeys(key)}
									</Typography>
									<Input
										size="small"
										type="text"
										onChange={handleChange}
									/>
								</Stack>
							);
						})}
					</Stack>
					<SearchTable
						id="modal-description"
						keys={keys}
						data={filterData || []}
						selectEl={setItem}
						closeModal={setOpen}
					/>
				</BoxContainer>
			</Modal>
		</>
	);
};

export default SearchModal;
