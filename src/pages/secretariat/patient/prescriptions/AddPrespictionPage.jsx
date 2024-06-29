import AddPrescription from '../../../../components/addPrescription/AddPrescription'
import AddPrescriptionState from '../../../../components/addPrescription/AddPrescriptionState'
import { useParams } from 'react-router-dom';

function AddPrespictionPage() {
    let { patientName } = useParams();

  return (
    <div className="w-full flex flex-col md:mr-48 bg-addPaitentInfoPage">
        <AddPrescriptionState userId={patientName}>
        <AddPrescription/>
        </AddPrescriptionState>
    </div>
  )
}

export default AddPrespictionPage
