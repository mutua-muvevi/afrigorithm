import { Box, Button, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../formui/textfield/textfield";
import Iconify from "../iconify/iconify";

const INITIAL_FORM_STATE = {
	fullname: "",
	telephone: "",
	email: "",
	service: "",
};

const FORM_VALIDATION = Yup.object().shape({
	fullname: Yup.string()
		.min(5, "Too short name")
		.max(100, "Too long name")
		.required("Please add your name"),
	telephone: Yup.string()
		.min(5, "Too short telephone number")
		.max(50, "Too long telephone number"),
	email: Yup.string()
		.email("Please use a valid email")
		.min(5, "Too short email")
		.max(80, "Too long email")
		.required("Please add an email"),
	service: Yup.string()
		.min(5, "Too short name")
		.max(100, "Too long name")
		.required("Please add your name"),
});

const StyledWrapper = styled(Box)(({ theme }) => ({}));


const StyledButton = styled(Button)(({ theme }) => ({
	width:"250px"
}));

const QuotationForm = () => {
	
	const submitHandler = (values, { resetForm }) => {
		alert(JSON.stringify(values));
		console.log("Values", values)
		resetForm();
	};

	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Formik
					initialValues={{
						...INITIAL_FORM_STATE,
					}}
					validationSchema={FORM_VALIDATION}
					onSubmit={submitHandler}
				>
					<Form>
						<Stack direction="column" alignItems="center" spacing={4}>
							<TextfieldWrapper name="fullname" label="Your name"  variant="filled" />
							<TextfieldWrapper name="email" label="Your Email"  variant="filled"/>
							<TextfieldWrapper name="telephone" label="Your Telephone Number"  variant="filled" />
							<TextfieldWrapper name="service" label="Service"  variant="filled"/>
							<StyledButton type="submit" variant="contained" endIcon={<Iconify icon="vaadin:paperplane"/>}>Message</StyledButton>
						</Stack>
					</Form>
				</Formik>
			</Container>
		</StyledWrapper>
	);
};

export default QuotationForm;
