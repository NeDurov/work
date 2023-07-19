import { Grid, Typography, styled } from "@mui/material";
import { blue } from "@mui/material/colors";

interface LayoutWithTitleProps {
	children: React.ReactNode;
	title: string;
}

const DivContainer = styled("div")({
	border: "4px solid",
	borderRadius: "5px",
	borderColor: blue[200],
	width: "100%",
});

const ChildrenGridContainer = styled(Grid)({
	padding: "5px",
	alignItems: "center",
});

const GridTypographyContainer = styled(Grid)({
	backgroundColor: blue[200],
});

const LayoutWithTitle = ({ children, title }: LayoutWithTitleProps) => {
	return (
		<Grid container item xs={4}>
			<DivContainer>
				<GridTypographyContainer container item xs={12}>
					<Typography variant="subtitle1">{title}</Typography>
				</GridTypographyContainer>
				<ChildrenGridContainer
					columnSpacing={1}
					rowSpacing={1}
					container
					xs={12}
					item
				>
					{children}
				</ChildrenGridContainer>
			</DivContainer>
		</Grid>
	);
};

export default LayoutWithTitle;
