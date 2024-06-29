/* eslint-disable react/prop-types */
import { useState } from "react";
import ic from "./../assets/icons/addPrespiction.svg";
import PublicHeader from "./manager_center/secretary/PublicHeader";
import ii from "./../assets/icons/dialysisNeed.svg";
import s1 from "./../assets/icons/s1.svg";
import s2 from "./../assets/icons/s2.svg";
import s3 from "./../assets/icons/s3.svg";
import s4 from "./../assets/icons/s4.svg";
import s5 from "./../assets/icons/s5.svg";
 
import CustomButton from "./public/button/CustomButton";
import { PlusIcon } from "@heroicons/react/20/solid";
import * as Dialog from "@radix-ui/react-dialog";
import { useAssignMaterialToUserMutation } from "../services/secretariat/AssignMaterialToUserCenterSlice";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  bodyMeduimStyle,
  bodySmallStyle,
  heightSmall,
} from "../utils/StyleUtils";

const Card = ({
  icon,
  label,
  onCheck,
  isChecked,
  onSelect,
  selectedVascularAccess,
}) => {
  return (
    <div className="flex items-center p-4 m-2 bg-white rounded-lg shadow-lg">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onCheck}
        className="form-checkbox h-5 w-5 ml-2"
      />
      {label === "وصل وعائي" && isChecked ? (
        <select
          onChange={onSelect}
          className="ml-4 flex-grow"
          value={selectedVascularAccess}
        >
          <option value="">اختر...</option>
          <option value="فيستولا">فيستولا</option>
          <option value="وصل وريدي">وصل وريدي</option>
        </select>
      ) : (
        <span className="ml-4 text-sm flex-grow">{label}</span>
      )}
      <img src={icon} alt={label} className="w-12 h-12" />
    </div>
  );
};

const AssignMaterialToUserCenter = () => {
  const [assignMaterialToUser, { isLoading, isError }] =
    useAssignMaterialToUserMutation();

  const [cardsData, setCardsData] = useState([
    {
      icon: s1,
      label: "الايبوتين",
      isChecked: false,
      selectedVascularAccess: "",
    },
    {
      icon: s2,
      label: "الهيبارين",
      isChecked: false,
      selectedVascularAccess: "",
    },
    { icon: s3, label: "الحديد", isChecked: false, selectedVascularAccess: "" },
    {
      icon: s4,
      label: "وصل وعائي",
      isChecked: false,
      selectedVascularAccess: "",
    },
    { icon: s3, label: "ابر", isChecked: false, selectedVascularAccess: "" },
    { icon: s1, label: "فلتر", isChecked: false, selectedVascularAccess: "" },
    { icon: s2, label: "الدارة", isChecked: false, selectedVascularAccess: "" },
    { icon: s5, label: "الحمض", isChecked: false, selectedVascularAccess: "" },
    {
      icon: s4,
      label: "البيكربونات",
      isChecked: false,
      selectedVascularAccess: "",
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const [quantities, setQuantities] = useState({}); // حالة لتتبع الكميات

  const handleQuantityChange = (materialName, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [materialName]: quantity,
    }));
  };

  const handleCheck = (index) => {
    const newCardsData = [...cardsData];
    newCardsData[index].isChecked = !newCardsData[index].isChecked;
    setCardsData(newCardsData);
  };

  const handleSelect = (event, index) => {
    const newCardsData = [...cardsData];
    newCardsData[index].selectedVascularAccess = event.target.value;
    setCardsData(newCardsData);
  };

  const handleButtonClick = () => {
    const selected = cardsData.filter((item) => item.isChecked);
    setSelectedItems(selected);
  };

  const handleCloseDialog = () => {
    setSelectedItems([]);
  };


  const handleSubmit = async () => {
    const isAllQuantitiesProvided = selectedItems.every(
      (item) => quantities[item.label]
    );

    if (!isAllQuantitiesProvided) {
      alert("يرجى إدخال الكميات لجميع المواد المختارة.");
      return;
    }

    const medicalRecord = {
      userID: 15,
      centerID: 5,
      materials: selectedItems.map((item) => ({
        materialName:
          item.label === "وصل وعائي" ? item.selectedVascularAccess : item.label,
        quantity: quantities[item.label],
      })),
    };

    try {
      const result = await assignMaterialToUser(medicalRecord).unwrap();
      toast.success("تم إرسال  البيانات بنجاح!");
      handleCloseDialog();

    } catch (error) {
      toast.error("حدث خطأ أثناء إرسال البيانات ");
    }
  };

  return (
    <div className="flex-grow mr-56" dir="rtl">
      <PublicHeader icon={ii} title={"لوازم جلسة الغسيل"} />

      <div className="grid grid-cols-3 gap-4">
        {cardsData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            label={item.label}
            isChecked={item.isChecked}
            onCheck={() => handleCheck(index)}
            onSelect={(event) => handleSelect(event, index)}
            selectedVascularAccess={item.selectedVascularAccess}
          />
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <CustomButton
          variant="solid"
          onClick={handleButtonClick}
          className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
          title={
            <div className="flex items-center justify-center">
              <span className={`${bodySmallStyle}`}>ادخال الكمية المصروفة</span>
              <div className="lg:w-2 md:w-2 w-1"></div>
              <PlusIcon className={`${heightSmall}`} />
            </div>
          }
          radius="full"
        />
      </div>
      <Dialog.Root open={selectedItems.length > 0}>
        <Dialog.Trigger asChild />
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-md shadow-lg">
          <Dialog.Title>إدخال الكميات</Dialog.Title>
          <Dialog.Description>
            الرجاء إدخال الكميات للعناصر المختارة:
          </Dialog.Description>
          {selectedItems.map((item, index) => (
            <div key={index} className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                {item.label}
              </label>
              <input
                type="number"
                placeholder="الكمية"
                value={quantities[item.label] || ""}
                onChange={(e) =>
                  handleQuantityChange(item.label, e.target.value)
                }
                className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}

          <div className="mt-4">
            <CustomButton
              variant="solid"
              onClick={handleSubmit}
              className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
              title="تأكيد"
              radius="full"
            />
            <CustomButton
              variant="solid"
              onClick={handleCloseDialog}
              className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
              title="إلغاء"
              radius="full"
            />
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default AssignMaterialToUserCenter;
