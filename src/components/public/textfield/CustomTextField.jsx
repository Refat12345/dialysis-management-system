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
            {prefixIcon != undefined &&
            <TextField.Slot side={"left"}>
            <div
              className={`${
                prefixIcon ? "lg:w-5 w-4" : ""
              } flex flex-col justify-center`}
            >
              {prefixIcon}
            </div>
          </TextField.Slot>}
            {suffixIcon != undefined &&
            <TextField.Slot side={"right"}>
            <div
              className={`${
                suffixIcon ? "lg:w-5 w-4" : ""
              } flex flex-col justify-center`}
            >
              {suffixIcon}
            </div>
          </TextField.Slot>}
          </TextField.Root>
        </Theme>
      </label>
    </div>
  );
};

export default CustomTextField;
