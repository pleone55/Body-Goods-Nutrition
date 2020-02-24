import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
// import { ReactComponent as Logo} from './crown.svg'

import './Header.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <img src="https://www.mybodygoods.com/wp-content/uploads/2019/11/cropped-Favicon-1-180x180.png" alt="logo" className='logo'/>
        </Link>
        <div className='options'>
            <Link to="/shop" className='option'>
                SHOP
            </Link>
            <Link to="/contact" className='option'>
                CONTACT
            </Link>
            {currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            : (<Link className='option' to='/signin'>SIGN IN</Link>)}
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropDown/>
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);