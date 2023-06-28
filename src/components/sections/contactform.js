import { Box } from "@mui/material";
import { styled } from"@mui/system"

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const ContactForm = () => {
	return (
		<StyledWrapper>
			<div>Contact form</div>
		</StyledWrapper>
	)
}

export default ContactForm