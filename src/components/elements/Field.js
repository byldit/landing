import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

const StyledContainer = styled.div`
  padding: 8px 0;
`;

const Field = ({className, error, label, required, ...props}) => {
  return (
    <StyledContainer className={className}>
      <TextField
        className={className}
        error={error}
        label={label}
        required={required}
        helperText={error && `${label} is required.`}
        {...props}
      />
    </StyledContainer>
  );
};

Field.propTypes = {
  error: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
};

Field.defaultProps = {
  error: false,
  className: '',
  label: '',
  required: false,
};

export default Field;