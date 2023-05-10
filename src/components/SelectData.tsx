import Select from "react-select";

const SelectData = ({
	className,
	placeholder,
	name,
	data,
}: {
	className: string;
	placeholder: string;
	name: string;
	data: Array<{ value: string; label: string }>;
}) => {
	return (
		<Select
			className={className}
			placeholder={placeholder}
			isClearable
			isSearchable
			name={name}
			options={data}
			theme={(theme) => ({
				...theme,
				colors: {
					...theme.colors,
					primary: "black",
				},
			})}
			styles={{
				option: (styles, { isSelected, isFocused }) => {
					return {
						...styles,
						backgroundColor: isSelected
							? "#8bb2dd"
							: isFocused
							? "#d2e5ff"
							: "white",
					};
				},
			}}
		/>
	);
};

export default SelectData;
