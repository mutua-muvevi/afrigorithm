import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Legal = () => {
	return (
		<Page title="Our Legal">
			<StyledWrapper>
				<div>Legal</div>
			</StyledWrapper>
		</Page>
	)
}

export default Legal