import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const SelectData = ({
	className,
	placeholder,
	name,
	changeValue,
	value,
	data,
}: {
	className?: string;
	placeholder?: string;
	name: string;
	changeValue: Dispatch<SetStateAction<string>>;
	value: string;
	data: Array<string>;
}) => {
	const handleChange = (e: SelectChangeEvent) => {
		console.log(e.target.value);
		changeValue(e.target.value);
	};

	return (
		// <Select
		// 	className={className}
		// 	placeholder={placeholder}
		// 	isClearable
		// 	isSearchable
		// 	name={name}
		// 	options={data}
		// 	theme={(theme) => ({
		// 		...theme,
		// 		colors: {
		// 			...theme.colors,
		// 			primary: "black",
		// 		},
		// 	})}
		// 	styles={{
		// 		option: (styles, { isSelected, isFocused }) => {
		// 			return {
		// 				...styles,
		// 				backgroundColor: isSelected
		// 					? "#8bb2dd"
		// 					: isFocused
		// 					? "#d2e5ff"
		// 					: "white",
		// 			};
		// 		},
		// 	}}
		// />
		<FormControl className={className} size="small">
			<Select
				id={name}
				disabled={data.length === 0}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={handleChange}
			>
				{data.map((el, i) => (
					<MenuItem value={el} key={i}>
						{el}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectData;
