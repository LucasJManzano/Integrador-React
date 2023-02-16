import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({text, active}) => {
  return (
    <li className="scroll-to-section">
      <Link to={`/${text.toLowerCase()}`} className={active !== undefined? 'active': null}>
        { text }
      </Link>
    </li>
  );
};

Button.propTypes = {
    text: PropTypes.string,
    active: PropTypes.bool
}

Button.defaultProps = {
    active: true
}

export default Button;