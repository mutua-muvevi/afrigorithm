import React from "react";

import { Box, Tooltip } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import { bgBlur } from "src/utils/cssStyles";
import { IconButtonAnimate } from "src/components/animate"
import Iconify from "../iconify/iconify";


const Whatsapp = ({children}) => {
	const theme = useTheme();

	const handleWhatsappClick = () => {
		// Replace the phone number with the desired number
		const phoneNumber = "254799756331";
		
		// Create the WhatsApp API link
		const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

		// Open the link in a new tab
		window.open(whatsappLink, "_blank");
	}

	return (
		<React.Fragment>
			{children}

			<Box
				sx={{
					p: 0.5,
					left: 24,
					bottom: 24,
					zIndex: 999,
					position: "fixed",
					borderRadius: "50%",
					boxShadow: `-12px 12px 32px -4px ${alpha(
						theme.palette.mode === "light"
							? theme.palette.grey[600]
							: theme.palette.common.black,
						0.36
					)}`,
					...bgBlur({ color: theme.palette.background.default }),
				}}
			>

				<Tooltip title="Lets chat">
					<IconButtonAnimate
						color="primary"
						onClick={handleWhatsappClick}
						sx={{ p: 1.25 }}
					>
						<Iconify icon="logos:whatsapp-icon"/>
					</IconButtonAnimate>
				</Tooltip>
			</Box>
		</React.Fragment>
	)
}

export default Whatsapp