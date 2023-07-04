import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from"@mui/system"

import TitleSubtitle from "./titlesubtitle";

const textGridBackground = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687993748/images/techbackground_hkdzmn.jpg"

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const StyledTextGrid = styled(Grid)(({ theme }) => ({
	color: "#ffffff",
	paddingRight: "30px",
	backgroundImage: `linear-gradient(to bottom, rgba(19, 102, 255, 0.5), rgba(19, 102, 255, 0.6)), url(${textGridBackground})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "60vh",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center"
}))

const LeftRight = ({
	title,
	subtitle,
	chipText,
	chipWidth,
	chipColor,
	list,
	paragraphs,
	imgPosition,
	image,
}) => {
	const StyledImageGrid = styled(Grid)(({ theme }) => ({
		backgroundImage: `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat"
	}))

	const ImageSection = (
		<StyledImageGrid item xs={12} sm={12} md={12} lg={6} xl={6}>

		</StyledImageGrid>
	);

	const TextSection = (
		<StyledTextGrid item xs={12} sm={12} md={12} lg={6} xl={6}>
			<Stack direction="column" spacing={2}>
				<TitleSubtitle
					title={title}
					subtitle={subtitle}
					chipText={chipText}
					chipWidth={chipWidth}
					chipColor={chipColor}
				/>
				{
					paragraphs ? paragraphs.map((par, i) => (
						<Typography variant="body2" key={i}>
							{par}
						</Typography>
					)) : ""
				}
			</Stack>
		</StyledTextGrid>
	)

	return (
		<StyledWrapper>
			<Grid container spacing={3}>
				{imgPosition === "left"
					? [ImageSection, TextSection]
					: [TextSection, ImageSection]
				}
			</Grid>
		</StyledWrapper>
	)
}

export default LeftRight