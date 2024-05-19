/* eslint-disable react/prop-types */
const Column = ({
  children,
  mainAxisAlignment = "justify-start",
  crossAxisAlignment = "items-start",
  reverse = false,
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-col-reverse" : "flex-col"
      } ${mainAxisAlignment} ${crossAxisAlignment}
    `}
    >
      {children}
    </div>
  );
};

export default Column;
