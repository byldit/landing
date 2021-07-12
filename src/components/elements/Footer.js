import styled from "styled-components";

import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

import CenterContent from "../containers/CenterContent";

import { WEBSITE_NAME } from "../../constants/constants";

import { darkTheme, lightTheme } from './theme';

const CustomFooter = styled.footer`
  height: 80px;
  padding: 30px;
`;

const Footer = () => (
  <Box width={1}>
    <CustomFooter>
      <CenterContent>
        <Box color="white">
          <Typography>
            Copyright © {WEBSITE_NAME} {new Date().getFullYear()}
          </Typography>
        </Box>
      </CenterContent>
    </CustomFooter>
  </Box>
);

export default Footer;
