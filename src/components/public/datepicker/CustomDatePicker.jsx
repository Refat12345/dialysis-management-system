import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { bodyMeduimStyle } from "../../../utils/StyleUtils";
import { styled } from "@mui/material/styles";
import "dayjs/locale/ar";
// import TextField from "@mui/material/TextField";
// eslint-disable-next-line react/prop-types
const CustomDatePicker = ({ label, onSelect, date }) => {

  return (
    <label dir="rtl" className={`font-medium ${bodyMeduimStyle} w-full`}>
      {label}:<div className="h-1"></div>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ar">
        <StyledDatePicker
          className="w-full"
          orientation="landscape"
          value={date}
          onChange={(newValue) => onSelect(newValue)}
      
          // renderInput={(params) => <TextField {...params} />}
          format="YYYY MMMM DD"
        />
      </LocalizationProvider>
    </label>
  );
};

const StyledDatePicker = styled(DatePicker)(() => ({
  //Style the input element where the selected date is displayed.
  "& .MuiInputBase-root": {
    borderRadius: "8px",
    backgroundColor: "#fff",
    height: "40px",
    fontSize: "16px",
    direction: "ltr",
    outlineStyle: 10,
  },
  // Style the selected date value.
  "& .MuiInputBase-input": {
    color: "black",
    fontWeight: "600",
    textAlign: "right",
    direction: "rtl",
  },
  // Style the hint text (placeholder text).
  "& .MuiInputBase-input::placeholder": {
    textAlign: "right",
    fontWeight: "500",
    fontSize: "16px",
    direction: "rtl",
  },
  //Style the calendar pop-up that appears when you click on the date picker input field
  "& .MuiPaper-root": {
    borderRadius: "8px",
    direction: "rtl",
  },
  "& .MuiOutlinedInput-root": {
    padding: "0 15px",
  },

  "@media screen and (max-width: 768px)": {
    "& .MuiInputBase-input": {
      // Adjust styles for selected date on smaller screens
      fontSize: "14px",
      fontWeight: "400",
    },
    "& .MuiInputBase-input::placeholder": {
      // Adjust styles for placeholder text on smaller screens
      fontSize: "14px",
      fontWeight: "400",
    },
  },
}));

export default CustomDatePicker;