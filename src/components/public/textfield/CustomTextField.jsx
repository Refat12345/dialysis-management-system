/* eslint-disable react/prop-types */
import { TextField } from "@radix-ui/themes";
import { bodyMeduimStyle } from "../../../utils/StyleUtils";

const CustomTextField = ({
  label,
  value,
  onChange,
  size,
  placeholder,
  icon,
  side = "left",
  type = "text",
  required = false,
}) => {
  return (
    <div dir="rtl">
      <label className={`${bodyMeduimStyle}`}>
        {label}
        <div className="h-1"></div>
        <TextField.Root
          type={type}
          required={required}
          size={size}
          className={`${bodyMeduimStyle}`}
          placeholder={placeholder}
          variant="surface"
          value={value}
          onChange={(e) => onChange(e)}
        >
          <TextField.Slot side={side}>
            <div className={`w-5`}>{icon}</div>
          </TextField.Slot>
        </TextField.Root>
      </label>
    </div>
  );
};

export default CustomTextField;
