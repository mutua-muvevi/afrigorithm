import {
	Box,
	Button,
	Container,
	Grid,
	Stack,
	Typography,
	Zoom,
} from "@mui/material";
import { styled } from "@mui/system";

import { footerItems } from "./info";

const StyledFooter = styled(Box)(({ theme }) => ({
	minHeight: "50vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	backgroundColor: theme.palette.primary.main,
}));

const StyledContainer = styled(Container)(({ theme }) => ({}));

const StyledGrid = styled(Grid)(({ theme }) => ({}));

const StyledGridItem = styled(Grid)(({ theme }) => ({}));

const StyledGridStack = styled(Stack)(({ theme }) => ({}));

const styledLogo = {
	height: "30%",
	width: "30%",
};

const StyledBottomFooter = styled(Stack)(({ theme }) => ({
	backgroundColor: theme.palette.primary.halfOpacity,
	paddingTop: "20px",
	paddingBottom: "20px",
}));

const { pages, support } = footerItems

const Footer = () => {
	return (
		<div>
			<StyledFooter>
				<StyledContainer maxWidth="xl">
					<StyledGrid container spacing={3}>
						<StyledGridItem
							item
							xs={12}
							sm={6}
							md={6}
							lg={3}
							xl={3}
						>
							<StyledGridStack
								spacing={1}
								direction="column"
								alignItems="flex-start"
							>
								<img
									src={footerItems.logoSection.logo.src}
									alt={footerItems.logoSection.logo.alt}
									style={styledLogo}
								/>
								<Typography variant="h3">
									{footerItems.logoSection.title}
								</Typography>
								<Typography variant="body1">
									{footerItems.logoSection.text}
								</Typography>
							</StyledGridStack>
						</StyledGridItem>

						<StyledGridItem
							item
							xs={12}
							sm={6}
							md={6}
							lg={3}
							xl={3}
						>
							<StyledGridStack
								spacing={1}
								direction="column"
								alignItems="flex-start"
							></StyledGridStack>
						</StyledGridItem>

						<StyledGridItem
							item
							xs={12}
							sm={6}
							md={6}
							lg={3}
							xl={3}
						>
							<StyledGridStack
								spacing={1}
								direction="column"
								alignItems="flex-start"
							>
								<Typography variant="h5">
									{footerItems.support.title}
								</Typography>
								{
									footerItems.support.items.map((el) => (
										<Stack direction="column" spacing={1}>
											<Stack direction="row" spacing={2}>
												
											</Stack>
										</Stack>
									))
								}
							</StyledGridStack>
						</StyledGridItem>

						<StyledGridItem
							item
							xs={12}
							sm={6}
							md={6}
							lg={3}
							xl={3}
						>
							<StyledGridStack
								spacing={1}
								direction="column"
								alignItems="flex-start"
							></StyledGridStack>
						</StyledGridItem>
					</StyledGrid>
				</StyledContainer>
			</StyledFooter>

			<StyledBottomFooter
				direction="row"
				alignItems="center"
				justifyContent="center"
			>
				<Typography variant="subtitle1">
					Afrigorithm Ltd © 2022 All rights reserved
				</Typography>
			</StyledBottomFooter>
		</div>
	);
};

export default Footer;
