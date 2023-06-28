import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import Banner from "./sections/banner";
import LeftRight from "src/components/sections/leftright";
import HomeTestimonial from "./sections/testimonial";
import HomeServices from "./sections/service";
import BusinessType from "./sections/businesstype";
import Subscribe from "src/components/sections/subscribe";
import ContactForm from "src/components/sections/contactform";
import LeftRightContainered from "src/components/sections/leftrightcontainered";

import { leftRightContainerList } from "./info"

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687988001/images/tablet_ifczul.jpg";
const subtitle= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor lobortis gravida. Duis efficitur velit nibh, vel vulputate neque posuere pharetra.`

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Home = () => {
	return (
		<Page title="Homepage">
			<StyledWrapper>
				<Banner/>
				<LeftRightContainered
					title="Continue to Grow Business."
					subtitle={subtitle}
					chipText="Business Type"
					list={leftRightContainerList}
					imgPosition="left"
					image={image}
					imageHeight="500"
					chipWidth="200px"
				/>
				<LeftRight/>
				<LeftRight/>
				<HomeServices/>
				<BusinessType/>
				<Subscribe/>
				<HomeTestimonial/>
				<ContactForm/>
			</StyledWrapper>
		</Page>
	)
}

export default Home