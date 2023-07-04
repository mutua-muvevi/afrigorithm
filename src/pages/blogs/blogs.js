import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Blogs = () => {
	return (
		<Page title="Blogs">
			<StyledWrapper>
				<div>Blogs</div>
			</StyledWrapper>
		</Page>
	)
}

export default Blogs