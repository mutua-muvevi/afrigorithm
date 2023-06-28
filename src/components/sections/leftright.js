import { Box } from "@mui/material";
import { styled } from"@mui/system"

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const LeftRight = () => {
	return (
		<StyledWrapper>
			<div>Left Right</div>
		</StyledWrapper>
	)
}

export default LeftRight