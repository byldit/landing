import styled from "styled-components";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import LazyImage from "./LazyImage";

const StyledImage = styled(LazyImage)`
  &&& {
    margin: auto;
    width: 400px;
    max-height: 400px;
    margin: auto;
    @media (min-width: 1300px) {
      width: 600px;
      max-height: 600px;
    }
    @media (max-width: 420px) {
      width: 300px;
      max-height: 300px;
    }
  }
`;

const StyledWrapperBox = styled(Box)`
  &&& {
    @media (min-width: 992px) {
      &:nth-child(odd) {
        text-align: right;
      }
      &:nth-child(even) {
        text-align: left;
      }
    }
  }
`;

const articleContent = [
  {
    id: 1,
    title: 'Article Title 1',
    text: `Text 1.`,
    imgSrc: '/static/images/some_svg.svg',
  },
];

const Article = () => (
  <Grid
    container
    justify="center"
  >
    {articleContent.map(({id, title, text, imgSrc}, index) => {
      return (
        <StyledWrapperBox
          key={id}
          m={2}
          pt={6}
          pb={6}
        >
          <Grid
            container
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box px={8}>
                <Typography variant="h4">{title}</Typography>
                <Typography>
                  {text}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box px={4} py={4}>
                  <StyledImage src={imgSrc} />
                </Box>
            </Grid>
          </Grid> 
        </StyledWrapperBox>
      );
    })}
      
  </Grid>
);

export default Article;
