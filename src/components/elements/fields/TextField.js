import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import CustomTextField from './common/CustomTextField';

const TextField = ({id, className, name, ...props}) => (
  <Field
    id={id}
    className={className}
    name={name}
    component={CustomTextField}
    {...props}
  />
);

TextField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  className: '',
};

export default TextField;