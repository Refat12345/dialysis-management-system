
import { PaginationComponent } from "../../../../components";
import {patientData} from './../../../../data/data'
import { Table } from "../../../../components/manager_center/patient/Patient";
const PatientListPage = () => {
  return (
    <div className="flex-grow mr-52">
      
      <PaginationComponent data={patientData} RenderComponent={Table} itemsPerPage={8}/>

    </div>
  );
};

export default PatientListPage;
