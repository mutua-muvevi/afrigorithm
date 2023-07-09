import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ReusableBanner from "src/components/sections/banner";
import LeftRightList from "src/components/sections/leftrightlist";

import Page from "src/components/ui/Page";
import { leftRightList } from "./info";
import Variety from "./sections/variety";
import MisionStatements from "./sections/statements";
import Subscribe from "src/components/sections/subscribe";
import Founders from "./sections/founder";

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
				<LeftRightList
					title="Continue to Grow Business."
					subtitle={subtitle}
					chipText="Business Type"
					list={leftRightList}
					imgPosition="right"
					image={image}
					imageHeight="500"
					chipWidth="200px"
				/>
				<Variety/>
				<MisionStatements/>
				<Subscribe/>
				<Founders/>
			</StyledWrapper>
		</Page>
	)
}

export default About