import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "./titlesubtitle";
import BlogList from "src/content/blogs";
import { truncateStr } from "src/utils/formatStrings";

const subtitle = "Explore a variety of subjects, including tech trends, lifestyle hacks, career advice, and more. Fuel your intellectual growth, one blog at a time, and let your newfound knowledge inspire your personal and professional journey."

const StyledWrapper = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}))

const StyledCard = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	minHeight: 450
}))

const StyledCardContent = styled(CardActionArea)(({ theme }) => ({
	height: "100%"
}))

const ReusableNewsCards = () => {
	return (
		<StyledWrapper maxWidth="xl">
			<Stack direction="column" spacing={5} justifyContent="center">
				<TitleSubtitle
					title="Insights Unleashed: Unlocking Knowledge and Inspiration"
					subtitle={subtitle}
					chipText="Blogs and Articles"
					alignItems="center"
				/>
				<div>
					<Grid container spacing={3}>
						{
							BlogList.map((el, i) => (
								<Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
									<StyledCard raised>
										<StyledCardContent>
											<CardMedia
												component="img"
												src={el.thumbnail}
												alt={`${el.title} : Afrigorithm Blog thumbnail`}
												height={250}
											/>
											<CardContent>
												<Stack direction="column" spacing={3}>
													<Typography variant="h6">
														{ truncateStr(el.title, 55) }
													</Typography>
													<Typography variant="body1" textAlign="justify">
														{truncateStr(el.mainParagraphs[0], 100)}
													</Typography>
												</Stack>
											</CardContent>
										</StyledCardContent>
									</StyledCard>
								</Grid>
							))
						}
					</Grid>
				</div>
			</Stack>
		</StyledWrapper>
	)
}

export default ReusableNewsCards