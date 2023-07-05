import { Box, Button, Container, FormGroup, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../formui/textfield/textfield";

const Image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687991987/images/tech_imrfwj.jpg";
const Person ="https://res.cloudinary.com/dbj0t0zym/image/upload/v1687987718/images/whyus_uw0loc.jpg";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod purus a turpis pretium volutpat. Aliquam erat volutpat. In dignissim vitae tortor nec suscipit. Nullam dictum viverra arcu, eu vestibulum mi bibendum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; "

const INITIAL_FORM_STATE = {
	email: "",
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string()
		.email("Please use a valid email")
		.min(5, "Too short email")
		.max(80, "Too long email")
		.required("Please add an email"),
});

const StyledWrapper = styled(Container)(({ theme }) => ({
	minHeight: "25vh",
	paddingTop: "50px",
	paddingBottom: "50px",
	borderRadius: theme.shape.borderRadius,
	backgroundImage: `linear-gradient(to bottom, rgba(19, 102, 255, 0.4), rgba(19, 102, 255, 0.5)), url(${Image})`,
	backgroundSize: "cover"
}));

const StyledButton = styled(Button)(({ theme }) => ({
	color: "#ffffff",
	borderColor: "#ffffff",
	width: "200px",
	borderRadius: "5px"
}))

const imageStyle = {
	width: "350px"
}

const Subscribe = () => {
	const submitHandler = (values, { resetForm }) => {
		alert(JSON.stringify(values));
		resetForm();
	};

	return (
		<StyledWrapper maxWidth="xl">
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
					<Stack direction="column" justifyContent="center" sx={{ height: "100%"}}>
						<Formik
							initialValues={{
								...INITIAL_FORM_STATE,
							}}
							validationSchema={FORM_VALIDATION}
							onSubmit={submitHandler}
						>
							<Form>
								<Stack direction="column"  spacing={3}>
									<Typography variant="h2" color="text.primary">
										Join us & feel Technology Progress now!​
									</Typography>

									<Typography variant="subtitle1">
										{description}
									</Typography>

									<Stack spacing={3} direction="row" alignItems="center" justifyContent="left">
										<TextfieldWrapper
											name="email"
											variant="standard"
											size="small"
											placeholder="Enter your email to subscribe"
										/>
										<StyledButton variant="outlined" type="submit">
											Join us
										</StyledButton>

									</Stack>
								</Stack>
							</Form>
						</Formik>
					</Stack>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
					<Stack
						justifyContent="center"
						alignItems="center"
					>
						<img src={Person} alt="Subscribe to Afrogorithm Mail List" style={imageStyle}/>
					</Stack>
				</Grid>
			</Grid>
		</StyledWrapper>
	);
};

export default Subscribe;
