import PropTypes from "prop-types"; // Import PropTypes

export const CardRow = ({ title, content }) => {
  return (
    <div className="flex flex-row-reverse justify-between my-1 px-3 py-1">
      <div className="text-base flex">:{title}</div>
      <div className="text-base font-bold">{content}</div>
      <div className="w-0"></div>
      <div className="w-0"></div>
    </div>
  );
};

export const CardHeader = ({ title, icon }) => (
  <div className="flex flex-row-reverse rounded-t-2xl items-center justify-between border-[#2E307D26] border-[1px] p-3 bg-blue400">
    <h2 className="md:text-base sm:text-sm font-semibold">{title}</h2>
    <img className="w-6" src={icon} alt="" />
  </div>
);

const GlobalInfoCard = ({ headerTitle, headerIcon, cardContent }) => {
  return (
    <div className="bg-cardColor shadow rounded-lg break-inside-avoid pb-2 mb-5">
      <CardHeader title={headerTitle} icon={headerIcon} />
      <div className="py-1">{cardContent}</div>
    </div>
  );
};

GlobalInfoCard.propTypes = {
  headerTitle: PropTypes.node.isRequired,
  headerIcon: PropTypes.node.isRequired,
  cardContent: PropTypes.node.isRequired,
};

CardHeader.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};

CardRow.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default GlobalInfoCard;
