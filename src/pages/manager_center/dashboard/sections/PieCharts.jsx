import PieChart from "../../../../components/manager_center/dashboard/PieChart/PieChart"
const objectOne = {
  title:"نسب أسباب القصور الكلوي",
  medicines:[{
    name:"داء السكري",
    color:"#31357e"
  },{
    name:"ضعط دم",
    color:"#4849e3"
  },{
    name:'أمراض قلبية',
    color:"#c8d5fd"
  }]
}
const objectTwo = {
  title:"نسب استهلاك الأدوية",
  medicines:[{
    name:"ايبوتين",
    color:"#c9a05b"
  },{
    name:"هيبارين",
    color:"#ddc994"
  },{
    name:"حديد",
    color:"#a43939"
  }]
}

const PieCharts = () => {
  return (
    <>
        <div className="mt-14 ml-[10%]">
            <div className="shadow-lg  ">
              <PieChart obj={objectOne}/>
            </div>
            <div className={`shadow-lg ${window.innerHeight>700 ?"mt-7":"mt-5"}`}>
              <PieChart obj ={objectTwo} />
            </div>
        </div>
    </>
  )
}
export default PieCharts

