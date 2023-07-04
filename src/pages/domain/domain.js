import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Domain = () => {
	return (
		<Page title="Our Domain">
			<StyledWrapper>
				<div>Domain</div>
			</StyledWrapper>
		</Page>
	)
}

export default Domain