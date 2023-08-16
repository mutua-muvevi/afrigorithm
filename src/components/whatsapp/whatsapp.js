import React from "react";

import {Stack, Tooltip } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import { bgBlur } from "src/utils/cssStyles";
import { IconButtonAnimate } from "src/components/animate"
import Iconify from "../iconify/iconify";


const Whatsapp = ({children}) => {
	const theme = useTheme();

	const handleWhatsappClick = () => {
		const phoneNumber = "+254796788681";
		const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

		window.open(whatsappLink, "_blank");
	};

	const handleCalls = () => {
		const phoneNumber = "+254796788681";
		const callLink = `tel:${phoneNumber}`;

		window.location.href = callLink;
	}

	return (
		<React.Fragment>
			{children}

			<Stack
				sx={{
					p: 0.5,
					left: 24,
					bottom: 24,
					zIndex: 999,
					position: "fixed",
					borderRadius: "5px",
					boxShadow: `-12px 12px 32px -4px ${alpha(
						theme.palette.mode === "light"
							? theme.palette.grey[600]
							: theme.palette.common.black,
						0.36
					)}`,
					...bgBlur({ color: theme.palette.background.default }),
				}}
			>
				<Tooltip title="Call on WhatsApp">
					<IconButtonAnimate
						onClick={handleCalls}
						sx={{ p: 1, backgroundColor: theme.palette.primary.main }}
					>
						<Iconify icon="fluent:call-12-filled" sx={{color: "#ffffff"}} />
					</IconButtonAnimate>
				</Tooltip>

				<Tooltip title="Lets chat">
					<IconButtonAnimate
						color="primary"
						onClick={handleWhatsappClick}
						sx={{ p: 1.25 }}
					>
						<Iconify icon="logos:whatsapp-icon"/>
					</IconButtonAnimate>
				</Tooltip>
			</Stack>
		</React.Fragment>
	)
}

export default Whatsapp