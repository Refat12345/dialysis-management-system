// import React from "react";

// const RegisterCreateAccount = () => {
//   return (
//     <form
//           onSubmit={state.handleSubmit}
//           className="flex flex-col justify-center h-full space-y-4"
//         >
//           <h1
//             className={`text-center ${headlineLargeStyle} font-bold text-blue600 transition-all`}
//           >
//             {"تسجيل الدخول"}
//           </h1>
//           <div className="h-5"></div>
//           <CustomTextField
//             size="3"
//             required={true}
//             label={"الرقم الوطني"}
//             placeholder="الرقم الوطني"
//             value={state.nationaltyNumber}
//             icon={<img src={LoginUserIcon} alt="" />}
//             side="left"
//             type="number"
//             onChange={(e) => updateState({ nationaltyNumber: e.target.value })}
//           />
//           <Box height="10px" />
//           <CustomButton
//             className={`bg-bgLogin text-blue600 h-12 shadow-lg transition-all ${headlineMediumStyle}`}
//             loading={state.loading}
//             title="تسجيل الدخول"
//           />
//         </form>
//   );
// };

// export default RegisterCreateAccount;
