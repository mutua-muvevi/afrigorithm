import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const FAQ = () => {
	return (
		<Page title="FAQ">
			<StyledWrapper>
				<div>FAQ</div>
			</StyledWrapper>
		</Page>
	)
}

export default FAQ