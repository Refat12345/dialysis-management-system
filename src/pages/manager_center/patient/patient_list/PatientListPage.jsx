import { PaginationComponent } from "../../../../components";
import { patientData } from "./../../../../data/data";
import { Table } from "../../../../components/manager_center/patient/Patient";
import { usePatient } from "./PaitientListState";
import LoadingComponent from "../../../../components/public/LoadingComponent ";
const PatientListPage = () => {
  const { patientData, isLoading, isSuccess } = usePatient();
  console.log("patientData in PatientListPage:", patientData);

  if (isLoading) return <LoadingComponent />;
  if (!patientData) return <div>No data available</div>;

  const flattenedData = patientData.flat();

  return (
    <>
      {isSuccess && !isLoading && (
        <div className="flex-grow mr-56 ">
          <PaginationComponent
            data={flattenedData}
            RenderComponent={Table}
            itemsPerPage={3}
          />
        </div>
      )}
    </>
  );
};

export default PatientListPage;
