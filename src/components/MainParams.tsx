import SearchModal from "./Search/SearchModal";

const data = [
	{
		id: "IND000",
		shortName: "Объем учетной добычи нефти",
	},
	{
		id: "IND001",
		shortName: "Эксплуатационные затраты на добычу газа",
	},
	{
		id: "IND002",
		shortName: "Объем вал нефти и газа",
	},
	{
		id: "IND003",
		shortName: "Норматив КВ в НПС_автодороги",
	},
	{
		id: "IND004",
		shortName: "Норматив КВ в НПС_телемеханика и связь",
	},
	{
		id: "IND005",
		shortName: "Норматив КВ в НПС_электроснабжение",
	},
];

const MainParams = () => {
	return (
		<div className="border-4 border-main-blue rounded">
			<h2 className="text-lg font-bold  p-0.5 bg-main-blue">
				Основные параметры
			</h2>
			<div className="grid gap-2 p-2">
				<div className="grid gap-4 items-center  grid-cols-3">
					<label
						className="text-right col-span-1"
						htmlFor="technical-key"
					>
						Технический ключ:
					</label>
					<input
						disabled
						type="text"
						id="technical-key"
						name="technical-key"
						className="border border-gray-300 p-2 rounded col-span-2"
						value={Date.now()}
					/>
				</div>
				<div className="grid gap-4 items-center grid-cols-3">
					<label className="text-right" htmlFor="indicator-code">
						Код показателя:
					</label>
					<input
						disabled
						type="text"
						id="indicator-code"
						name="indicator-code"
						className="border border-gray-300 p-2 rounded col-span-2"
						value={Date.now() + 124124313451}
					/>
				</div>
				<div className="grid gap-4 items-center grid-cols-3">
					<label className="text-right" htmlFor="full-name">
						Полное имя:
					</label>
					<input
						type="text"
						id="full-name"
						name="full-name"
						className="border border-gray-300 p-2 rounded col-span-2"
					/>
				</div>
				<div className="grid gap-4 items-center grid-cols-3">
					<label
						className="text-right"
						htmlFor="units-of-measurement"
					>
						Краткое имя:
					</label>
					<input
						type="text"
						id="units-of-measurement"
						name="units-of-measurement"
						className="border border-gray-300 p-2 rounded col-span-2"
					/>
				</div>
				<div className="grid gap-4 items-center grid-cols-3 ">
					<label
						className="text-right"
						htmlFor="units-of-measurement"
					>
						Ед. изм:
					</label>
					<SearchModal data={data} />
				</div>
				<div className="grid gap-4 items-center grid-cols-3">
					<label className="text-right" htmlFor="paired-indicator">
						Парный показатель:
					</label>
					<input
						type="text"
						id="paired-indicator"
						name="paired-indicator"
						className="border border-gray-300 p-2 rounded col-span-2"
					/>
				</div>
			</div>
		</div>
	);
};

export default MainParams;
