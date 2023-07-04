import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Careers = () => {
	return (
		<Page title="Careers">
			<StyledWrapper>
				<div>Careers</div>
			</StyledWrapper>
		</Page>
	)
}

export default Careers