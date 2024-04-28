import PieChart from "../../../components/medical_center/dashboard/PieChart"
const objectOne = {
  title:"نسب أسباب القصور الكلوي",
  colors: ['#31357e','#4849e3','#c8d5fd'],
  medicines:["داء السكري","ضعط دم",'أمراض قلبية']
}
const objectTwo = {
  title:"نسب استهلاك الأدوية",
  colors: ['#c9a05b', '#ddc994', '#a43939'],
  medicines:["ايبوتين","هيبارين",'حديد']
}

const PieCharts = () => {
  return (
    <>
        <div className="ml-14 mt-12">
            <div className="shadow-lg  ">
              <PieChart obj={objectOne}/>
            </div>
            <div className="shadow-lg mt-10">
              <PieChart obj ={objectTwo} />
            </div>
        </div>
    </>
  )
}
export default PieCharts