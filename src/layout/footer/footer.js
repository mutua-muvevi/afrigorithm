import { Link } from "react-router-dom";
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

import { MdOutlineArrowForwardIos } from "react-icons/md";
import SocialMediaIcons from "src/components/sections/socialmedia";


const StyledFooter = styled(Box)(({ theme }) => ({
	paddingTop: "70px",
	paddingBottom: "70px",
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

const styledLink = {
	color: "inherit",
	textDecoration: "none"
}

const styledIcons = {

}

const StyledBottomFooter = styled(Stack)(({ theme }) => ({
	backgroundColor: theme.palette.primary.halfOpacity,
	paddingTop: "20px",
	paddingBottom: "20px",
}));

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
								<Typography variant="body2">
									{footerItems.logoSection.text}
								</Typography>

								<Stack direction="row" alignItems="center" justifyContent="left" spacing={2}>
									{
										SocialMediaIcons.map((icon, i) => (
											<a href={icon.link} target="_blank" rel="noreferrer" key={i} style={styledLink}>
												{icon.icon}
											</a>
										))
									}
								</Stack>
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
							>
								<Typography variant="h5">
									{footerItems.pages.title}
								</Typography>
								{
									footerItems.pages.items.map((el, i) => (
										<Link style={styledLink} key={i} to={el.link}>
											<Stack direction="column" spacing={1}>
												<Stack direction="row"  alignItems="center" spacing={2}>
													<MdOutlineArrowForwardIos style={styledIcons}/>
													<Typography variant="body2">
														{el.label}
													</Typography>
												</Stack>
											</Stack>
										</Link>
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
							>
								<Typography variant="h5">
									{footerItems.support.title}
								</Typography>
								{
									footerItems.support.items.map((el, i) => (
										<Link style={styledLink} to={el.link} key={i}>
											<Stack direction="column" spacing={1}>
												<Stack direction="row"  alignItems="center" spacing={2}>
													<MdOutlineArrowForwardIos style={styledIcons}/>
													<Typography variant="body2">
														{el.label}
													</Typography>
												</Stack>
											</Stack>
										</Link>
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
							>
								<Typography variant="h5">
									{footerItems.getInTouch.title}
								</Typography>
								{
									footerItems.getInTouch.items.map((el, i) => (
										<Stack direction="row"  alignItems="center" spacing={2} key={i}>
											{el.icon}
											<Typography variant="body2">
												{el.label}
											</Typography>
										</Stack>
									))
								}

							</StyledGridStack>
						</StyledGridItem>
					</StyledGrid>
				</StyledContainer>
			</StyledFooter>

			<StyledBottomFooter
				direction="row"  alignItems="center"
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
