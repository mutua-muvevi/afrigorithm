import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Iconify from "src/components/iconify/iconify";

import TitleSubtitle from "src/components/sections/titlesubtitle";
import DomainList from "src/content/domain";
import { truncateStr } from "src/utils/formatStrings";

const title =
	"Revolutionizing Multiple Industries: Pioneering IT Solutions for Growth and Success";
const subtitle =
	"Seize New Opportunities, Enhance Efficiency, and Drive Exponential Growth through our State-of-the-Art IT Solutions Crafted for Your Success";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const SlicedDomainList = DomainList.slice(0,9)

const HomeDomain = () => {
	const navigate = useNavigate();

	const goToDomain = () => {
		navigate("/landing/domain")
	}
	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<TitleSubtitle
						chipText="Our Domain"
						title={title}
						subtitle={subtitle}
						alignItems="center"
					/>

					<div>
						<Grid container spacing={3}>
							{SlicedDomainList.map((el, i) => (
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
											<CardContent sx={{minHeight: 240}}>
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
														200
													)}
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>
							))}
						</Grid>
					</div>
					<Button variant="contained" color="primary" sx={{p:2}} onClick={goToDomain}>
						Wait! There is more!!
					</Button>
				</Stack>
			</Container>
		</StyledWrapper>
	);
};

export default HomeDomain;
