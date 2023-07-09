import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "src/components/sections/titlesubtitle";
import Iconify from "../iconify/iconify";

const subtitle = "Your Comprehensive FAQ Resource for Clear and Concise Information. In our FAQ section, we've curated a collection of the most frequently asked questions to provide you with quick and reliable answers. Whether you have inquiries about our products, services, or processes, we've got you covered. Our goal is to ensure that you have all the information you need at your fingertips, empowering you to make informed decisions with confidence."

const helpList = [
	{
		icon: "fluent:document-text-20-filled",
		title: "Documentation",
		mainText:
			"Elit at imperdiet dui accumsan sit. Sem nulla pharetra diam sit amet nisl.",
		items: [
			{
				icon: "fa-solid:file-pdf",
				text: "Download PDF Documents",
			},
			{
				icon: "fa-solid:file-pdf",
				text: "Download PDF Documents",
			},
			{
				icon: "fa-solid:file-pdf",
				text: "Download PDF Documents",
			},
		],
	},
	{
		icon: "clarity:flow-chart-solid",
		title: "Work flow",
		mainText:
			"Elit at imperdiet dui accumsan sit. Sem nulla pharetra diam sit amet nisl.",
		items: [
			{
				icon: "fa-solid:file-pdf",
				text: "Download PDF Documents",
			},
			{
				icon: "fa-solid:file-pdf",
				text: "Download PDF Documents",
			},
			{
				icon: "fa-solid:file-pdf",
				text: "Download PDF Documents",
			},
		],
	},
	{
		icon: "ri:admin-fill",
		title: "For Clients",
		mainText:
			"Elit at imperdiet dui accumsan sit. Sem nulla pharetra diam sit amet nisl.",
		items: [
			{
				icon: "fa-solid:file-pdf",
				text: "Download PDF Documents",
			},
			{
				icon: "fa-solid:file-pdf",
				text: "Download PDF Documents",
			},
			{
				icon: "fa-solid:file-pdf",
				text: "Download PDF Documents",
			},
		],
	},
];

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px",
}));

const Help = () => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<TitleSubtitle
						chipText="Need Help"
						title="We are here to help you"
						subtitle={subtitle}
						alignItems="center"
					/>

					<div>
						<Grid container spacing={3}>
							{helpList.map((el, i) => (
								<Grid
									item
									xs={12}
									sm={12}
									md={12}
									lg={4}
									xl={4}
								>
									<Card>
										<CardContent>
											<Stack direction="column" spacing={2}>
												<Iconify icon={el.icon} width={50}/>
												<Typography variant="h5">
													{el.title}
												</Typography>
												<Typography variant="body1" color="text.secondary" textAlign="justify">
													{el.mainText}
												</Typography>

												<Stack direction="column" spacing={1.5}>
													{
														el.items.map((item, index) => (
															<Stack direction="row" spacing={3} justifyContent="left" key={index}>
																<Iconify icon={item.icon}/>
																<Typography variant="body1" color="text.secondary" textAlign="justify">
																	{item.text}
																</Typography>
															</Stack>
														))
													}
												</Stack>
											</Stack>
										</CardContent>
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

export default Help;
