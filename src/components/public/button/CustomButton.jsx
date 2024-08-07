/* eslint-disable react/prop-types */
import { Button } from "@radix-ui/themes";
import { Theme } from "@radix-ui/themes";

// const CustomButton = ({
//   variant = "soft",
//   onClick,
//   title,
//   loading = false,
//   ...props
// }) => {
//   return (
//     <Theme className="inline bg-transparent">
//       <Button
//         size="3"
//         variant={variant}
//         loading={loading}
//         onClick={onClick}
//         {...props}
//       >
//         {title}
//       </Button>
//     </Theme>
//   );
// };
const CustomButton = ({
  variant = "soft",
  onClick,
  title,
  loading = false,
  ...props
}) => {
  return (
    <Theme className="inline bg-transparent">
      <Button
        size="3"
        variant={variant}
        loading={loading}
        onClick={onClick}
        disabled={loading} // تعطيل الزر أثناء التحميل
        {...props}
      >
        {loading ? "جارٍ الحفظ..." : title}
      </Button>
    </Theme>
  );
};

export default CustomButton;
