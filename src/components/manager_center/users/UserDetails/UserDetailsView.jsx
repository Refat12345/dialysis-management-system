
import NationalInformation from "./NationalInformation";
import ContactInformation from "./ContactInformation";
import { dataContact ,dataLocation} from "../../../../data/data";
function UserDetailsView() {
  return (
    // <div className="flex-grow mr-40 ml-8 h-full mt-5 bg-cardDetailsColor ">
    <div>
      <h3 dir="rtl" className="-mt-12 pb-6 text-2xl text-blue-700">تفاصيل الحساب</h3>
      <div className="grid grid-cols-2 gap-4 p-4">
        <NationalInformation/>
        <ContactInformation data={dataContact} />
        <ContactInformation data={dataLocation} />
      </div>
    </div>
  );
}

export default UserDetailsView;
