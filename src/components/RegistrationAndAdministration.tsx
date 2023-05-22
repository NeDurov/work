import SelectData from "./SelectData";

import { dataForSelect } from "../data/ownerData.json";
import { useState } from "react";

const RegistrationAndAdministration = () => {
	const [owner, setOwner] = useState("");

	return (
		<div className="border-4 border-main-blue rounded">
			<h2 className="text-lg font-bold  p-0.5 bg-main-blue">
				Регистрация и администрирование показателя
			</h2>
			<div className="grid gap-2 p-2">
				<div className="grid gap-4 items-center grid-cols-3">
					<label htmlFor="created-by" className="text-right block">
						Создал/изменил:
					</label>
					<input
						type="text"
						id="created-by"
						className="border border-gray-300 p-2 rounded w-full col-span-2"
					/>
				</div>
				<div className="grid gap-4 items-center grid-cols-3">
					<label htmlFor="created-date" className="text-right block">
						Дата создания/изменения:
					</label>
					<input
						type="text"
						id="created-date"
						className="border border-gray-300 p-2 rounded w-full col-span-2"
					/>
				</div>
				<div className="grid gap-4 items-center grid-cols-3">
					<label htmlFor="approved-by" className="text-right block">
						Согласовали:
					</label>
					<input
						type="text"
						id="approved-by"
						className="border border-gray-300 p-2 rounded w-full col-span-2"
					/>
				</div>
				<div className="grid gap-4 items-center grid-cols-3">
					<label htmlFor="approved-date" className="text-right block">
						Дата согласования:
					</label>
					<input
						type="text"
						id="approved-date"
						className="border border-gray-300 p-2 rounded w-full col-span-2"
					/>
				</div>
				<div className="grid gap-4 items-center grid-cols-3">
					<label
						htmlFor="last-request-number"
						className="text-right block"
					>
						№ последней заявки:
					</label>
					<input
						type="text"
						id="last-request-number"
						className="border border-gray-300 p-2 rounded w-full col-span-2"
					/>
				</div>
				<div className="grid gap-4 items-center grid-cols-3">
					<label htmlFor="owner" className="text-right block">
						Владелец:
					</label>
					{/* <input
						type="text"
						id="owner"
						className="border border-gray-300 p-2 rounded w-full col-span-2"
					/> */}
					{/* <Select
						className="col-span-2"
						placeholder="Владелец"
						isClearable
						isSearchable
						name="units-of-measurement"
						options={[
							{ value: "В", label: "Иван" },
							{ value: "П", label: "Павел" },
							{ value: "А", label: "Александр" },
							{ value: "М", label: "Михаил" },
						]}
						theme={(theme) => ({
							...theme,
							colors: {
								...theme.colors,
								primary: "black",
							},
						})}
						styles={{
							option: (styles, { isSelected }) => {
								return {
									...styles,
									backgroundColor: isSelected
										? "#8bb2dd"
										: "white",
								};
							},
						}}
					/> */}
					<SelectData
						className={"col-span-2"}
						placeholder={"Владелец"}
						name={"owner"}
						data={dataForSelect}
						value={owner}
						changeValue={setOwner}
					/>
				</div>
			</div>
		</div>
	);
};

export default RegistrationAndAdministration;
