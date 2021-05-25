import PropTypes from  'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { select } from '../../store';

const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  &&& {
    color: white;
  }
`;

const CartButton = ({ totalItems }) => (
  <IconButton>
    <Badge color="error" badgeContent={totalItems} aria-label="add to shopping cart">
      <StyledShoppingCartIcon />
    </Badge>
  </IconButton>     
);

const mapStateToProps = select(models => ({
  totalItems: models.cart.totalItems,
}));

CartButton.propTypes = {
  totalItems: PropTypes.number,
};

CartButton.defaultProps = {
  totalItems: 0,
};

export default connect(
  mapStateToProps
)(CartButton);
