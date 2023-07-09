import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1688897567/teck_background_flkexe.jpg"
const subtitle = "Accelerating digital transformation journeys for enterprises worldwide through strategic insights, seamless integration, and advanced technologies. Experience a new era of agility, productivity, and competitive advantage."

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const About = () => {
	return (
		<Page title="About us">
			<StyledWrapper>
				<ReusableBanner
					title="About Us"
					subtitle={subtitle}
					image={image}
					height="60vh"
				/>
			</StyledWrapper>
		</Page>
	)
}

export default About