import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
	SelectProps,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

interface SelectDataProps extends SelectProps<string> {
	changeValue: Dispatch<SetStateAction<string>>;
	data: Array<string>;
}

const SelectData = ({
	placeholder,
	changeValue,
	value,
	data,
}: SelectDataProps) => {
	const handleChange = (e: SelectChangeEvent) => {
		changeValue(e.target.value);
	};

	return (
		<FormControl fullWidth size="small">
			<Select
				disabled={data.length === 0}
				placeholder={placeholder}
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
