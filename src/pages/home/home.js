import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import Banner from "./sections/banner";
import HomeProject from "./sections/projects";
import LeftRight from "src/components/sections/leftright";
import HomeTestimonial from "./sections/testimonial";
import HomeServices from "./sections/service";
import BusinessType from "./sections/businesstype";
import Subscribe from "src/components/sections/subscribe";
import ContactForm from "src/components/sections/contactform";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Home = () => {
	return (
		<Page title="Homepage">
			<StyledWrapper>
				<Banner/>
				<HomeProject/>
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