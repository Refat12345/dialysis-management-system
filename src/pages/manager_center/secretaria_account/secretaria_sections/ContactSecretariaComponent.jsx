/* eslint-disable react/prop-types */
import { TrashIcon } from "../../../../assets";
import { Row } from "../../../../components/index";
import CustomTextField from "../../../../components/public/textfield/CustomTextField";
import SelectedTextFeild from "../../../../components/public/textfield/SelectedTextFeild";

const ContactSecretariaComponent = ({
  filterUse,
  filterType,
  selectUse,
  useValue,
  typeValue,
  selectType,
  value,
  onChange,
  onRemove,
  showDeleteButton,
  firstLabel,
  secondLabel,
}) => {
  function getTextFieldType() {
    switch (typeValue) {
      case "الهاتف":
        return {
          placeholder: "e.g. 0999-999-999",
          type: "tel",
        };
      case "البريد الالكتروني":
        return {
          placeholder: "e.g. example@gmail.com",
          type: "email",
        };
      case "المدينة":
        return {
          placeholder: "العنوان مفصلاً",
          type: "text",
        };
    }
    return {
      placeholder: "",
      type: "text",
    };
  }

  return (
    <Row
      dir="rtl"
      mainAxisAlignment="justify-evenly"
      crossAxisAlignment="items-center"
    >
      <div className="w-1/3">
        <SelectedTextFeild
          label={firstLabel}
          activeLabel={false}
          value={useValue || firstLabel}
          filter={filterUse}
          onSelect={(val) => selectUse(val)}
        />
      </div>
      <div className="w-1/3 mr-4">
        <SelectedTextFeild
          label={secondLabel}
          activeLabel={false}
          value={typeValue || secondLabel}
          filter={filterType}
          onSelect={(val) => selectType(val)}
        />
      </div>
      <div dir="rtl" className="w-1/3 mr-4">
        <CustomTextField
          size="3"
          required={true}
          label=""
          placeholder={getTextFieldType().placeholder}
          value={value}
          // prefixIcon={<img src={LoginUserIcon} alt="" />}
          type={getTextFieldType().type}
          onChange={(e) => onChange(e)}
        />
      </div>
      {showDeleteButton && (
        <button
          className="lg:w-10 md:w-9 w-8 h-10 flex justify-center items-center bg-white rounded-lg border border-gray-300 mr-2 mt-1 hover:bg-gray-200"
          onClick={(e) => onRemove(e)}
        >
          <img src={TrashIcon} alt="trash icon" />
        </button>
      )}
    </Row>
  );
};

export default ContactSecretariaComponent;
