import { Box, Chip, Stack, Typography } from "@mui/material";
import { styled } from"@mui/system"

const StyledWrapper = styled(Stack)(({ theme }) => ({

}))

const TitleSubtitle = ({ title, chipText, chipColor, subtitle, chipWidth }) => {
	
	const StyledBoxChip = styled(Stack)(({ theme }) => ({
		backgroundColor: chipColor && chipColor === "white" ? "#ffffff" : theme.palette.primary.main,
		color: chipColor && chipColor === "white" ?  theme.palette.primary.main : "#ffffff",
		borderRadius: theme.shape.borderRadius,
		width: chipWidth ? chipWidth : "200px",
		padding: "10px"
	}));

	return (
		<StyledWrapper spacing={1.5}>
			<StyledBoxChip justifyContent="center" alignItems="center">
				<Typography variant="h5" sx={{textTransform: "uppercase"}}>
					{chipText}
				</Typography>
			</StyledBoxChip>
			
			<Typography variant="h3">
				{title}
			</Typography>

			<Typography variant="h6">
				{subtitle}
			</Typography>

		</StyledWrapper>
	)
}

export default TitleSubtitle