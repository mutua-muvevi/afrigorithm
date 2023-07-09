import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import useTypewriter from "src/hooks/useTypewriter";
import { bannerCards } from "./info";

const Image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687983038/images/techbackground_f8nfzu.jpg";
const subtitle = "At the forefront of technological advancements, we engineer solutions that shape industries, revolutionize processes, and foster innovation. Discover how our expertise and passion drive the digital evolution.";

const StyledWrapper = styled(Box)(({ theme }) => ({
	minHeight: "70vh",
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${Image})`,
	backgroundSize: "cover",
	backgroundAttachment: "fixed",
	backgroundPosition: "center",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "70px",
	minHeight: "70vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-end",
}));

const Banner = () => {
	const words = [
		"Saas Web Application",
		"Mobile Application Both Android and IOS",
		"Desktop Application",
		"Machine Learning & AI projects",
		"Cloud Computing systems",
		"Database Management Systems",
		"Strong Network Systems"
	];
	const typing = useTypewriter(words);

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
				
					<Typography variant="h2" sx={{color: "#ffffff"}}>
						We develop & maintain : {typing}
					</Typography>

					<Typography variant="h6" sx={{ color: "#ffffff" }}>
						{subtitle}
					</Typography>

					<div>
						<Grid container spacing={3}>
							{
								bannerCards.map((el, i) => (
									<Grid item xs={6} sm={6} md={6} lg={3} xl={3} key={i}>
										<Card>
											<CardContent>
												<Stack direction="column" spacing={1.5}>
													<Typography variant="h3">
														0{1 + i}
													</Typography>

													<Typography vartiant="h5">
														{el.title}
													</Typography>

													<Typography vartiant="body2">
														{el.text}
													</Typography>
												</Stack>
											</CardContent>
										</Card>
									</Grid>
								))
							}
						</Grid>
					</div>
				</Stack>

			</StyledContainer>
		</StyledWrapper>
	);
};

export default Banner;
