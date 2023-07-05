import { Box, Card, CardActionArea, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from"@mui/system"
import Iconify from "src/components/iconify/iconify";
import TitleSubtitle from "src/components/sections/titlesubtitle";

import ServiceList from "src/content/services";
import { truncateStr } from "src/utils/formatStrings";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px"
}))

const subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod purus a turpis pretium volutpat. Aliquam erat volutpat. In dignissim vitae tortor nec suscipit."

const HomeServices = () => {
	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack diretion="column" spacing={5} alignItems="center">
					<TitleSubtitle
						title="What we offer"
						subtitle={subtitle}
						chipText="Our Services"
						alignItems="center"
					/>

					<div>
						<Grid container spacing={3}>
							{
								ServiceList.map((el, i) => (
									<Grid item key={i} xs={12} sm={6} md={6} lg={4} xl={4}>
										<Card>
											<CardActionArea>
												<CardContent>
													<Stack direction="column" spacing={3}>
														<Stack direction="row" justifyContent="left" spacing={3}>
															<Iconify icon={el.icon} width={50}/>
															<Stack direction="column">
																<Typography variant="h5">
																	{el.title}
																</Typography>
																<Typography variant="subtitle2" color="text.secondary">
																	{el.subtitle}
																</Typography>
															</Stack>
														</Stack>
														<Typography variant="body1">
															{truncateStr(el.mainText, 200)}
														</Typography>
													</Stack>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
								))
							}
						</Grid>
					</div>
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default HomeServices