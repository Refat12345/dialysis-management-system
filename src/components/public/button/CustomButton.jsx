/* eslint-disable react/prop-types */
import { Button } from "@radix-ui/themes";

const CustomButton = ({
  variant = "soft",
  onClick,
  title,
  loading = false,
  ...props
}) => {
  return (
    <Button variant={variant} loading={loading} onClick={onClick} {...props}>
      {title}
    </Button>
  );
};

export default CustomButton;
