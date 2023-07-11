import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import ReusableBanner from "src/components/sections/banner";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1689116307/blogs_uoga2t.jpg";
const subtitle =  "Welcome to 'Afrigorithm Insights', your resource for understanding the intricate choreography of technology in today's ever-evolving digital landscape. Here we chronicle our ongoing innovations, exploring the interface of technology and industry, be it healthcare, education, or beyond. Our timely updates shed light on the latest tech trends, our pioneering research, and the revolutionary solutions we deliver. Through these insights, we invite you into our commitment to progress and excellence. Engage with 'Afrigorithm Insights' - illuminate your path to digital transformation."

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const News = () => {
	return (
		<Page title="News Articles">
			<StyledWrapper>
				<ReusableBanner
					title="News Articles"
					subtitle={subtitle}
					image={image}
					height="60vh"
				/>
			</StyledWrapper>
		</Page>
	)
}

export default News