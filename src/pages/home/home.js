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

const paragraphs = [
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor lobortis gravida. Duis efficitur velit nibh, vel vulputate neque posuere pharetra. Donec vitae semper elit. In in tortor scelerisque orci dapibus finibus vel interdum est. Mauris porta nunc aliquam posuere malesuada. Morbi eget condimentum metus, non porta magna. Sed id erat in nunc ultrices imperdiet. Aliquam ornare tellus mattis erat efficitur ultricies. Vivamus nisl dui, elementum et ultrices nec, fermentum non mauris. Curabitur dapibus mollis est ut imperdiet. Pellentesque in viverra erat.`,
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor lobortis gravida. Duis efficitur velit nibh, vel vulputate neque posuere pharetra. Donec vitae semper elit. In in tortor scelerisque orci dapibus finibus vel interdum est. Mauris porta nunc aliquam posuere malesuada. Morbi eget condimentum metus, non porta magna. Sed id erat in nunc ultrices imperdiet. Aliquam ornare tellus mattis erat efficitur ultricies. Vivamus nisl dui, elementum et ultrices nec, fermentum non mauris. Curabitur dapibus mollis est ut imperdiet. Pellentesque in viverra erat.`,
]


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
					imgPosition="right"
					image={image}
					imageHeight="500"
					chipWidth="200px"
				/>
				<LeftRight
					title="Continue to Grow Business."
					subtitle={subtitle}
					chipText="Why choose us"
					chipColor="white"
					list={leftRightContainerList}
					imgPosition="left"
					image={image}
					ImageminHeight="50vh"
					paragraphs={paragraphs}
				/>
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