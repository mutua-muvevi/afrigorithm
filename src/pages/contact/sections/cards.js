import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { contactItems } from "./info";
import Iconify from "src/components/iconify/iconify";

const StyledWrapper = styled(Box)(({ theme }) => ({
	
}));

const StyledContainer= styled(Container)(({ theme }) => ({
	paddingBottom: "100px"
}));

const StyledIconWrapper = styled(Box)(({ theme }) => ({

}));

const ContactCards = () => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Grid container spacing={3}>
					{
						contactItems ? contactItems.map((el, i) => (
							<Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
								<Card>
									<CardContent>
										<Stack direction="column" spacing={3}>
											<Stack direction="row" justifyContent="left" spacing={3}>
												<Iconify width={45} icon={el.icon}/>

												<Stack direction="column">
													<Typography variant="h5">
														{el.title}
													</Typography>
													<Typography variant="subtitle" color="text.secondary">
														{el.title}
													</Typography>
												</Stack>
											</Stack>
											<Typography variant="body1">
												{el.text}
											</Typography>
										</Stack>
									</CardContent>
								</Card>
							</Grid>
						)) : ""
					}
				</Grid>
			</StyledContainer>
		</StyledWrapper>
	)
}

export default ContactCards