import { Box, Button, Card, CardActionArea, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Iconify from "src/components/iconify/iconify";
import TitleSubtitle from "src/components/sections/titlesubtitle";
import ServiceList from "src/content/services";
import { selectService } from "src/redux/services/action";
import { truncateStr } from "src/utils/formatStrings";

const subtitle = "Embark on a transformative journey with our comprehensive suite of tech services that are meticulously crafted to drive your business forward. Our team of industry experts harnesses the power of cutting-edge technologies to deliver solutions that revolutionize the way you operate"

const StyledWrapper = styled(Box)(({ theme }) => ({
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px"
}));


const StyledButton = styled(Button)(({ theme }) => ({
	padding: "10px"
}))

const ServicesCards = ({selectService}) => {

	const navigate= useNavigate()
	
	const selectServiceHandler = (service) => {
		selectService(service)
		navigate("/landing/service/single")
	}

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
								ServiceList.map((service, i) => (
									<Grid item key={i} xs={12} sm={6} md={6} lg={4} xl={4}>
										<Card>
											<CardActionArea onClick={() => selectServiceHandler(service)}>
												<CardContent>
													<Stack direction="column" spacing={3}>
														<Stack direction="row" justifyContent="left" spacing={3}>
															<Iconify icon={service.icon} width={50}/>
															<Stack direction="column">
																<Typography variant="h5">
																	{service.title}
																</Typography>
																<Typography variant="subtitle2" color="text.secondary">
																	{service.subtitle}
																</Typography>
															</Stack>
														</Stack>
														<Typography variant="body1">
															{truncateStr(service.mainText, 200)}
														</Typography>
													</Stack>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
								))
							}
							<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
								<Stack>
									<StyledButton variant="contained" color="primary" endIcon={<Iconify icon="bi:chat-right-quote-fill"/>}>
										<Typography variant="h5">
											Request Service Now
										</Typography>
									</StyledButton>
								</Stack>
							</Grid>
						</Grid>
					</div>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	)
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
	selectService : (service) => dispatch(selectService(service))
})
export default connect(mapStateToProps, mapDispatchToProps)(ServicesCards)