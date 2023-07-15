import { Box, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

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

const QuotationForm = () => {
	
	const submitHandler = (values, { resetForm }) => {
		alert(JSON.stringify(values));
		resetForm();
	};

	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={4}>
					<Formik
						initialValues={{
							...INITIAL_FORM_STATE,
						}}
						validationSchema={FORM_VALIDATION}
						onSubmit={submitHandler}
					>
						
					</Formik>
				</Stack>
			</Container>
		</StyledWrapper>
	);
};

export default QuotationForm;
