import { VisibleIcon, NonVisibleIcon } from "../../../assets";

// eslint-disable-next-line react/prop-types
const PasswordVisibleIcon = ({ showPassword }) => {
  return <img src={showPassword ? VisibleIcon : NonVisibleIcon} alt="" />;
};

export default PasswordVisibleIcon;
