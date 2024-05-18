/* eslint-disable react/prop-types */
import { TextField } from "@radix-ui/themes";
import { bodyMeduimStyle } from "../../../utils/StyleUtils";
import { Theme } from "@radix-ui/themes";

const CustomTextField = ({
  label,
  value,
  onChange,
  size,
  placeholder,
  prefixIcon,
  suffixIcon,
  type = "text",
  required = false,
  readOnly = false,
}) => {
  return (
    <div dir="rtl">
      <label className={`${bodyMeduimStyle} font-medium`}>
        {label}
        <div className="h-1"></div>
        <Theme>
          <TextField.Root
            readOnly={readOnly}
            radius="large"
            type={type}
            required={required}
            size={size}
            className={`${bodyMeduimStyle}`}
            placeholder={placeholder}
            variant="surface"
            value={value}
            onChange={(e) => onChange(e)}
          >
            <TextField.Slot side={"left"}>
              <div className={`w-5`}>{prefixIcon}</div>
            </TextField.Slot>
            <TextField.Slot side={"right"}>
              <div className={`w-5 flex flex-col justify-center`}>
                {suffixIcon}
              </div>
            </TextField.Slot>
          </TextField.Root>
        </Theme>
      </label>
    </div>
  );
};

export default CustomTextField;
