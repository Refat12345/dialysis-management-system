import { Box } from "@radix-ui/themes";
import { SupportLifeImg } from "../../../assets/index";
const SupportLifeLogo = () => {
  return (
    <div className="flex justify-center items-center bg-bgLogin h-full">
      <Box className="lg:w-[350px] lg:h-[380px] md:w-[280px] md:h-[300px] w-[200px] h-[220px]">
        <img className="" src={SupportLifeImg} alt="" />
      </Box>
    </div>
  );
};

export default SupportLifeLogo;
