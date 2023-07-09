import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "src/components/sections/titlesubtitle";
import { founders } from "./info";

const subtitle = "Meet our Visionaries, the Driving Force Behind our Tech Revolution. With a shared passion for innovation and a relentless pursuit of excellence, our founders are redefining the possibilities of technology.";

const StyledWrapper = styled(Box)(({ theme }) => ({

}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const Founders = () => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Grid container spacing={3}>
					<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
						<Stack direction="column" spacing={3}>
							<TitleSubtitle
								chipText="Meet our Founders"
								title="Igniting a Tech Revolution"
								subtitle={subtitle}
							/>
						</Stack>
					</Grid>
					{
						founders.map((el, i) => (
							<Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={i}>
								<Card>
									<CardActionArea>
										<CardMedia
											component="img"
											src={el.image}
											alt={el.fullname}
											height={350}
										/>


										<CardContent>
											<Stack direction="column" spacing={3}>
												<Stack direction="column" spacing={1}>
													<Typography variant="h5">
														{el.fullname}
													</Typography>
													<Typography variant="subtitle1" color="text.secondary">
														{el.profession}
													</Typography>
												</Stack>
												<Typography variant="body1">
													{el.bio}
												</Typography>
											</Stack>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						))
					}
				</Grid>
			</StyledContainer>
		</StyledWrapper>
	)
}

export default Founders