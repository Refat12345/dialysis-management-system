import { apiSlice } from "../../apiSlice";

export const addMedicalRecord = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
    createMedicalRecord: builder.mutation({
        query: (medicalRecord) => {
            console.log('Medical Record:', medicalRecord); 
            return {
                url: 'createUser',
                method: 'POST',
                body: {
                    "fullName": "mohamad shreedeh",
                    "password": "12345678",
                    "nationalNumber": "12305136921",
                    "dateOfBirth": "1990-01-01",
                    "gender": "male",
                    "accountStatus": "active",
                    "role": "patient",
                    "centerName": "hasan altahan",
                    "verificationCode": "123456",
                    "telecom": [
                        {
                            "system": "phone",
                            "value": "024224181",
                            "use": "home"
                        }
                    ],
                    "address": {
                        "line": "omar almokhtar",
                         "use": "home",
                        "cityName": "damas",
                        "countryName": "ruhaibeh"
                       
                    }
                }
            };
        },
    }),
})
});

export const {
useCreateMedicalRecordMutation,
} = addMedicalRecord;