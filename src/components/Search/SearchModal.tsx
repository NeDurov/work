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
	const [keys, setKeys] = useState<Array<string>>(Object.keys(data[0]));
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const key = e.target.name;
		const value = e.target.value;
		setFilter((oldFilter) => ({ ...oldFilter, [key]: value }));
	};

	useEffect(() => {
		Object.keys(filter).forEach((key, i) => {
			if (i === 0) setFilterData(data);

			if (filter[key] !== "") {
				setFilterData((oldFilterData) =>
					oldFilterData.filter((el) => el[key].includes(filter[key]))
				);
			}
			if (filter[key] === "") {
				setFilterData((oldData) => [...oldData]);
			}
		});
	}, [filter]);

	return (
		<div className="col-span-2">
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
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8/12 bg-white rounded shadow-lg p-4">
					<div className="flex flex-row items-center justify-around">
						{keys.map((key, i) => {
							return (
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
		</div>
	);
};

export default SearchModal;
