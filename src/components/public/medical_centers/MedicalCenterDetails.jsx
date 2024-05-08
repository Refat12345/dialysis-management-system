/* eslint-disable react/prop-types */


const MedicalCenterDetails= ({title,content}) => {
    const contents = Object.values(content)
  return (
    <div dir ="rtl" className='flex flex-col'>
        <div className='self-center'>
            <p>
                {contents[0]}
            </p>
        </div>
        <div>
            <p>{title[0]}</p>
            <p>{contents[1]}</p>
        </div>
        <div>
            <p>{title[1]}</p>
            <p>{contents[2]}</p>
            
        </div>
        <div>
            <p>{title[2]}</p>
            <p>{contents[3]}</p>
        </div>
    </div>
  )
}

export default MedicalCenterDetails
