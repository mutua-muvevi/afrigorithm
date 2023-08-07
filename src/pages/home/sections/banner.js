import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import useTypewriter from "src/hooks/useTypewriter";
import { bannerCards } from "./info";

const Image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687983038/images/techbackground_f8nfzu.jpg";
const subtitle = "Discover the edge of innovation with our comprehensive digital solutions, expertly designed to propel your business forward. Our seasoned team harnesses the power of the latest technologies, delivering bespoke applications tailored to your specific needs, and ensuring data security at every step. With us, you're not just choosing a service, you're embracing a partnership committed to your growth and success. Let us help you navigate the digital landscape, turning challenges into opportunities, and driving your vision to reality with unmatched precision and excellence.";

const StyledWrapper = styled(Box)(({ theme }) => ({
	minHeight: "75vh",
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
		"Startup Saas Applications",
		"Custom Web Applications",
		"Mobile Application Both Android and IOS",
		"Custom Desktop Application",
		"Machine Learning & AI projects",
		"Cloud Computing Systems and Operations",
		"Database Management Systems and Operations",
		"Cybersecurity and Digital Forensics"
	];
	const typing = useTypewriter(words);

	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5} justifyContent="flex-end">
				
					<Typography variant="h2" sx={{color: "#ffffff"}}>
						We Build & Maintain : {typing}
					</Typography>

					<Typography variant="h6" sx={{ color: "#ffffff" }}>
						{subtitle}
					</Typography>

					<div>
						<Grid container spacing={3}>
							{
								bannerCards.map((el, i) => (
									<Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={i}>
										<Card>
											<CardContent>
												<Stack direction="column" spacing={1.5}>
													<Typography variant="h3">
														0{1 + i}
													</Typography>

													<Typography variant="h5">
														{el.title}
													</Typography>

													<Typography variant="body1" textAlign="justify">
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
