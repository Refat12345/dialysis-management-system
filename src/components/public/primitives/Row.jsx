/* eslint-disable react/prop-types */
const Row = ({
  children,
  mainAxisAlignment = "justify-start",
  crossAxisAlignment = "items-start",
  reverse = false,
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } ${mainAxisAlignment} ${crossAxisAlignment} w-full
    `}
    >
      {children}
    </div>
  );
};

export default Row;
