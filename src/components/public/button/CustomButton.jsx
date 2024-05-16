/* eslint-disable react/prop-types */
import { Button } from "@radix-ui/themes";
import { Theme } from "@radix-ui/themes";

const CustomButton = ({
  variant = "soft",
  onClick,
  title,
  loading = false,
  ...props
}) => {
  return (
    <Theme className="inline">
      <Button
        size="3"
        variant={variant}
        loading={loading}
        onClick={onClick}
        {...props}
      >
        {title}
      </Button>
    </Theme>
  );
};

export default CustomButton;
