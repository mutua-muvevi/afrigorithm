import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { connect } from "react-redux";

const StyledWrapper = styled(Box)(({ theme }) => ({

}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "100px",
	paddingBottom: "100px"
}));

const StyledTagGrid = styled(Stack)(({ theme }) => ({
	border: `1px solid ${theme.palette.primary.main}`,
	borderRadius: theme.shape.borderRadius,
	padding:"5px"
}));

const SingleNewsBody = ({news}) => {
	return (
		<StyledWrapper>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<Stack direction="column" spacing={3}>
						{
							news.mainParagraphs ? news.mainParagraphs.map((paragraph, i) => (
								<Typography variant="h6" textAlign="justify" key={i}>
									{paragraph}
								</Typography>
							)) : ""
						}
					</Stack>

					<div>SingleNewsBody</div>

					<Stack direction = "column" spacing={1.5}>
						<Typography variant="subtitle1">
							Tags : 
						</Typography>
						<div>
							<Grid container spacing={3}>
								{
									news.tags ? news.tags.map((tag, i) => (
										<Grid item xs={12} sm={6} md={3} lg={2.4} key={i}>
											<StyledTagGrid justifyContent="center" alignItems="center">
												<Typography variant="body1" textAlign="center">
													{tag}
												</Typography>
											</StyledTagGrid>
										</Grid>
									)) : ""
								}
							</Grid>
						</div>
					</Stack>

				</Stack>
			</StyledContainer>
		</StyledWrapper>
	)
}

const mapStateToProps = ({news}) => ({
	news: news.news
})

export default connect(mapStateToProps)(SingleNewsBody)