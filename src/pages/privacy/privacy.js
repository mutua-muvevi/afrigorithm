import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const PrivacyPolicy = () => {
	return (
		<Page title="Privacy Policy">
			<StyledWrapper>
				<div>Privacy Policy</div>
			</StyledWrapper>
		</Page>
	)
}

export default PrivacyPolicy