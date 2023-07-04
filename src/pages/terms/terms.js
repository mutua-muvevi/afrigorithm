import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const TermsOfService = () => {
	return (
		<Page title="Terms Of Service">
			<StyledWrapper>
				<div>Terms Of Service</div>
			</StyledWrapper>
		</Page>
	)
}

export default TermsOfService