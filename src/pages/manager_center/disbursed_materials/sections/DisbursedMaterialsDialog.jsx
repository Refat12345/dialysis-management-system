/* eslint-disable react/prop-types */

const DisbursedMaterialsDialog = ({data}) => {
  return (
    <div dir="rtl" className="w-[400px]">
        <div className="font-bold text-xl flex justify-center text-titleColor mb-4">الأدوية المصروفة</div>
        <div>
            {data.disbursedMaterials.map((element,index)=>{
              return <div className="flex" key={index}>
                  <p className=" font-bold text-lg  "> {element.materialName} :  </p>
                  
                  <p className="font-bold text-titleColor self-center pr-2">  {element.quantity} </p>
          
              </div>
            })}
        </div>
    </div>
  )
}

export default DisbursedMaterialsDialog