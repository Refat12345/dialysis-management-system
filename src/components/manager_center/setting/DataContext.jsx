/* eslint-disable react/prop-types */
import  { createContext, useState } from 'react';
import patientCount from "./../../../assets/icons/medical-center/setting/patientCount.svg";
import doctorCount from "./../../../assets/icons/medical-center/setting/doctorCount.svg";
import chaiCount from "./../../../assets/icons/medical-center/setting/chaiCount.svg";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    centerName: 'حسن الطحان',
    organization: 'بسمة أمل',
    location: 'دمشق الميدان',
    centerTime: [
      {
        name: "الوردية الاولى",
        start: "8:00AM",
        end: "12:00PM"
      },
      {
        name: "الوردية الثانية",
        start: "1:00PM",
        end: "5:00PM"
      }
    ],
    statisticMedicalInfo: {
      chairCount: 200,
      patientsCount: 25,
      doctorCount: 25
    },
    cardData: [
      {
        name: "اجمالي المرضى",
        icon: patientCount, 
        statistic: 'patientsCount'
      },
      {
        name: "اجمالي الاطباء",
        icon: doctorCount, 
        statistic: 'doctorCount' 
      },
      {
        name: "اجمالي الكراسي",
        icon: chaiCount, 
        statistic: 'chairCount' 
      }
    ],
      NoteContent:"كلية مركز طبي يقع على ضفاف نهر الفرات يحده من الشمال تركيا ومن الجنوب المغرب ومن الشرق كلية الهندسة المعلوماتية ومن الغرب كلية "
    
    
  });

    

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};