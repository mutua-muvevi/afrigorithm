import { Box, Card, CardActionArea, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Iconify from "src/components/iconify/iconify";

import TitleSubtitle from "src/components/sections/titlesubtitle";
import ServiceList from "src/content/services";
import { truncateStr } from "src/utils/formatStrings";

const subtitle = "Embark on a transformative journey with our comprehensive suite of tech services that are meticulously crafted to drive your business forward. Our team of industry experts harnesses the power of cutting-edge technologies to deliver solutions that revolutionize the way you operate"

const StyledWrapper = styled(Box)(({ theme }) => ({
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px"
}))

const ServicesCards = () => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<TitleSubtitle
						chipText="Our services"
						title="Accelerating Your Digital Transformation"
						subtitle={subtitle}
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
			</StyledContainer>
		</StyledWrapper>
	)
}

export default ServicesCards