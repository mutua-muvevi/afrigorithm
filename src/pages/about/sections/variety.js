import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "src/components/sections/titlesubtitle";
import { varietyInfo } from "./info";
import Iconify from "src/components/iconify/iconify";
import { truncateStr } from "src/utils/formatStrings";

const subtitle =
	"Harness the Power of Innovative Software Solutions. From Building to Maintenance, Debugging to Enhancement, Optimization to Innovation - We Drive Your Success. Experience Growth, Efficiency, and Transformation with Tailor-Made Technologies. Count on Our Expertise in Resolving Complex Issues and Unleashing Performance Potential. Stay Ahead of the Competition and Embrace Digital Transformation with Our Forward-Thinking Approach.";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "70px",
	paddingBottom: "70px",
}));

const Variety = () => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<TitleSubtitle
						title="Empowering Business Success through Comprehensive Software Solutions"
						subtitle={subtitle}
						chipText="In a nutshell"
						alignItems="center"
					/>

					<div>
						<Grid container spacing={3}>
							{varietyInfo.map((el, i) => (
								<Grid
									item
									key={i}
									xs={12}
									sm={6}
									md={6}
									lg={4}
									xl={4}
								>
									<Card>
										<CardActionArea>
											<CardContent
												sx={{ minHeight: 240 }}
											>
												<Stack
													direction="column"
													spacing={3}
												>
													<Stack
														direction="row"
														justifyContent="left"
														spacing={3}
													>
														<Iconify
															icon={el.icon}
															width={50}
														/>
														<Stack direction="column">
															<Typography variant="h5">
																{el.title}
															</Typography>
															<Typography
																variant="subtitle2"
																color="text.secondary"
															>
																{el.subtitle}
															</Typography>
														</Stack>
													</Stack>
													<Typography variant="body1">
														{truncateStr(
															el.mainText,
															190
														)}
													</Typography>
												</Stack>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>
							))}
						</Grid>
					</div>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	);
};

export default Variety;
