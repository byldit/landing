import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import styled from "styled-components";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import CenterContent from "../components/containers/CenterContent";
import Email from "../components/elements/fields/Email";

import { newsletterDetails } from "../store/models/newsletter";

import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './../components/elements/theme';

const StyledAlert = styled(Alert)`
  &&& {
    margin: 8px 0;
    max-width: 400px;
    text-align: center;
  }
`;

const StyledForm = styled.form`
  width: 100%;
`;

const EmailContainer = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0 0 16px;

  @media (min-width: 600px) {
    width: calc(100% - 126px);
    padding: 0 16px 16px;
  }
`;

const Container = styled.div`
  margin: 8px auto 0;
  max-width: 400px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    max-width: 126px;
  }
`;

const NewsletterForm = ({
  alertType,
  error,
  handleSubmit,
  submitting,
  submitSucceeded,
}) => {
  const theme = useTheme();

  console.log(theme.palette.primary.main);
  const { value } = useDarkMode(true);
  return (
    <ThemeProvider theme={ darkTheme }>
      <>
      {!submitSucceeded ? (
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <Grid
            container
            alignItems="center"
            justify="center"    
            direction="row"
          >
            <Grid item xs={12}>
              <Container>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                >
                  <EmailContainer>
                    <Fade in timeout={1000}>
                      <Email />
                    </Fade>
                  </EmailContainer>
                  <ButtonContainer>
                    <Fade in timeout={1000}>
                      <Button
                        fullWidth
                        color="primary"
                        disabled={submitting}
                        onClick={handleSubmit}
                        type="submit"
                        variant="contained"
                      >
                        Get Updates
                      </Button>
                    </Fade>
                  </ButtonContainer>
                </Grid>
              </Container>
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                >
                  <StyledAlert variant="outlined" severity={alertType}>
                    {error}
                  </StyledAlert>
                </Grid>
              </Grid>
            )}
          </Grid>
        </StyledForm>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CenterContent>
              <Box my={2} width={1}>
                <Typography variant='h5'>You have signed up for some awesome news!</Typography>
              </Box>
            </CenterContent>
          </Grid>
        </Grid>
      )}
    </>
    </ThemeProvider>
  );
};



NewsletterForm.propTypes = {
  alertType: PropTypes.string,
  error: PropTypes.any,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  submitSucceeded: PropTypes.bool,
};

NewsletterForm.defaultProps = {
  alertType: "error",
  error: undefined,
  submitting: false,
  submitSucceeded: false,
};

const mapStateToProps = (state) => ({
  alertType: newsletterDetails(state, "alertType"),
});

export default reduxForm({
  form: "newsletter",
  onSubmit: (values, dispatch) =>
    dispatch.newsletter.handleNewsletterSubmit(values),
})(connect(mapStateToProps, null)(NewsletterForm));
