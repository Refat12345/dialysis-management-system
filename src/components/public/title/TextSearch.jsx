/* eslint-disable react/prop-types */

const TextSearch = ({text}) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className="font-bold text-2xl mr-48">{text}</p>
  </div>
  )
}

export default TextSearch