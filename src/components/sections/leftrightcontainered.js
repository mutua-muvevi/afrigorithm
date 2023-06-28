import {
	Box,
	Card,
	CardMedia,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import TitleSubtitle from "./titlesubtitle";

const StyledWrapper = styled(Container)(({ theme }) => ({
	paddingTop: "70px",
	paddingBottom: "70px",
}));

const StyledListIconBox = styled(Box)(({ theme }) => ({
	padding: "0",
	backgroundColor: theme.palette.primary.main,
	borderRadius: theme.shape.borderRadius,
	color: "#ffffff",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const LeftRightContainered = ({
	title,
	subtitle,
	chipText,
	chipWidth,
	list,
	paragraphs,
	imgPosition,
	image,
	imageHeight,
}) => {
	const ImageSection = (
		<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
			<Card>
				<CardMedia
					height={imageHeight}
					component="img"
					src={image}
					alt={`${title} image`}
				/>
			</Card>
		</Grid>
	);

	const TextSection = (
		<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
			<Stack direction="column" spacing={3}>
				<TitleSubtitle
					title={title}
					subtitle={subtitle}
					chipText={chipText}
					chipWidth={chipWidth}
				/>
				<Stack direction="column" spacing={1.5}>
					{paragraphs &&
						paragraphs.map((p, i) => (
							<Typography
								variant="body2"
								textAlign="justify"
								key={i}
							>
								{p}
							</Typography>
						))}
				</Stack>
				<Stack direction="column" spacing={2}>
					{list &&
						list.items.map((el, i) => (
							<Stack direction="row" spacing={2} key={i}>
								{el.icon && (
									<StyledListIconBox sx={{ width: "70px" }}>
										{el.icon}
									</StyledListIconBox>
								)}
								<Stack direction="column" spacing={1}>
									<Typography variant="h5">
										{el.title}
									</Typography>
									<Typography variant="body2">
										{el.text}
									</Typography>
								</Stack>
							</Stack>
						))}
				</Stack>
			</Stack>
		</Grid>
	);

	return (
		<StyledWrapper maxWidth="xl">
			<Grid container spacing={3}>
				{imgPosition === "left"
					? [ImageSection, TextSection]
					: [TextSection, ImageSection]}
			</Grid>
		</StyledWrapper>
	);
};

export default LeftRightContainered;
