import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const About = () => {
	return (
		<Page title="About us">
			<StyledWrapper>
				<div>About</div>
			</StyledWrapper>
		</Page>
	)
}

export default About