import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const UNIX_DATE = 1617163200 * 1000;
const DATE_TO_RELEASE = new Date(UNIX_DATE);

const Countdown = dynamic(() => import('react-countdown'), { ssr: false });

const getPrependNumber = (number, minimumDigits = 2) => {
  return number.toLocaleString(undefined, {minimumIntegerDigits: minimumDigits, useGrouping:false});
};

const StyledTopography = styled(Typography)`
  &&& {
    font-size: 24px;
    text-align: center;
  }
`;

const renderer = ({children, days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return (
      <>
        {children}
      </>
    );
  } else {
    // Render a countdown
    return (
      <Fade in timeout={3000}>
        <StyledTopography component="div">
          <Grid container alignItems="center" justify="center" direction="row" spacing={2}>
            <Grid item xs={12}> 
              {getPrependNumber(days)}:{getPrependNumber(hours)}:{getPrependNumber(minutes)}:{getPrependNumber(seconds)}
            </Grid>
          </Grid>
        </StyledTopography>
      </Fade>
    );
  }
};

const DateCountdown = () => {
  return (
    <Countdown
      key="countdown"
      date={DATE_TO_RELEASE}
      intervalDelay={0}
      precision={3}
      renderer={renderer}
    />
  );
};

export default DateCountdown;