import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import SearchTable from "./SearchTable";
import translateKeys from "../../utils/translateKeys";

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
			<input
				readOnly
				onClick={handleOpen}
				type="text"
				id="unit"
				name="unit"
				className="w-full p-2 border border-gray-300 rounded"
				value={item}
			/>
			<Modal open={open} onClose={handleClose}>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8/12 bg-white rounded shadow-lg p-4 h-3/6 overflow-y-scroll overflow-x-hidden">
					<div className="flex flex-row items-center justify-around">
						{keys.map((key, i) => {
							return key === "name" ? (
								""
							) : (
								<div key={i}>
									<label
										htmlFor={key}
									>{`Поиск по полю "${translateKeys(
										key
									)}": `}</label>
									<input
										type="text"
										id={key}
										name={key}
										className="border border-gray-300 p-2 rounded"
										onChange={handleChange}
									/>
								</div>
							);
						})}
					</div>
					<SearchTable
						keys={keys}
						data={filterData || []}
						selectEl={setItem}
						closeModal={setOpen}
					/>
				</div>
			</Modal>
		</>
	);
};

export default SearchModal;
