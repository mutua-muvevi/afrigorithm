import { Box, Button, Container, Grid, Stack, Typography, Zoom } from "@mui/material";
import { styled } from "@mui/system";


const StyledFooter = styled(Box)(({ theme }) => ({
	minHeight: "50vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	backgroundColor: theme.palette.primary.main
}));

const StyledContainer = styled(Container)(({ theme }) => ({

}));

const StyledBottomFooter = styled(Stack)(({ theme }) => ({
	backgroundColor: theme.palette.primary.halfOpacity,
	paddingTop: "20px",
	paddingBottom: "20px",
}))

const Footer = () => {

	return (
		<div>
			<StyledFooter>
				<StyledContainer maxWidth="xl">
					
				</StyledContainer>
			</StyledFooter>

			<StyledBottomFooter direction="row" alignItems="center" justifyContent="center">
				<Typography variant="subtitle1">
					Afrigorithm Ltd © 2022 All rights reserved
				</Typography>
			</StyledBottomFooter>
		</div>
	)
}

export default Footer