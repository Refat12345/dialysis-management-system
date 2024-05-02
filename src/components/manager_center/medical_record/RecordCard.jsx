/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const RecordCard = () => {
    const dataOne = {
        name : "saria",
        long:"177",
        we:"200"
    }
    const keys = Object.keys(dataOne);
  return (
            <div className=' bg-white rounded-lg mx-10 '>
                {keys.map((key,index)=>{
                    return <>
                            <div className="">
                                <span>
                                {key}
                                </span>
                                <span>
                                    
                                </span>
                            </div>
                    </>
                })}
            </div>  
  )
}

export default RecordCard