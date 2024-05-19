import { Row } from "../../../components";
import SecretaryAccountHeader from "../../../components/manager_center/secretary/SecretaryAccountHeader";
import { useCreateSecretaryAccountState } from "./CreateSecretariaAccountState";
import { UserNumberIcon, LoginUserIcon } from "../../../assets/index";
import CustomTextField from "../../../components/public/textfield/CustomTextField";
import SelectedTextFeild from "../../../components/public/textfield/SelectedTextFeild";
import { heightSmall } from "../../../utils/StyleUtils";
import CustomDatePicker from "../../../components/public/datepicker/CustomDatePicker";

const CreateSecretariaAccountPage = () => {
  const { state, updateState } = useCreateSecretaryAccountState();
  const genderFilter = {
    array: ["أنثى", "ذكر"],
    title: "الجنس",
  };

  return (
    <div dir="rtl" className="w-full flex flex-col lg:mr-48 md:mr-48">
      <SecretaryAccountHeader />
      <div className="bg-bgDashboard h-screen lg:pt-4 md:pt-4 pt-2 lg:pl-10 md:pl-8 pl-4 transition-all">
        <Row mainAxisAlignment="justify-evenly">
          <div className="w-1/2 mr-4">
            <CustomTextField
              size="3"
              required={true}
              label={"اسم المستخدم:"}
              placeholder="اسم المستخدم"
              value={state.username}
              prefixIcon={<img src={LoginUserIcon} alt="" />}
              type="text"
              onChange={(e) =>
                updateState({
                  username: e.target.value,
                })
              }
            />
          </div>
          <div className="w-1/2 mr-4">
            <CustomTextField
              size="3"
              required={true}
              label={"الرقم الوطني:"}
              placeholder="الرقم الوطني"
              value={state.nationaltyNumber}
              prefixIcon={<img src={UserNumberIcon} alt="" />}
              type="number"
              onChange={(e) =>
                updateState({
                  nationaltyNumber: e.target.value,
                })
              }
            />
          </div>
        </Row>
        <div className={`${heightSmall}`}></div>
        <Row mainAxisAlignment="justify-evenly">
          <div className="w-1/2 mr-4">
            <SelectedTextFeild
              label={genderFilter.title}
              value={state.genderValue === "" ? "الجنس" : state.genderValue}
              filter={genderFilter.array}
              onSelect={(val) => state.selectGender(val)}
            />
          </div>
          <div className="w-1/2 mr-4">
            <CustomDatePicker
              label="تاريخ الميلاد"
              date={state.birthdate}
              onSelect={(val) => {
                updateState({ birthDate: val });
              }}
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default CreateSecretariaAccountPage;
