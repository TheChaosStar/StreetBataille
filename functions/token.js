import Axios from "axios";

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2ODQ2OTU2MjAsImV4cCI6MTY4NDY5OTIyMCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFwaS5mciJ9.LVS2Jfj6uhavTHNhK16YFsnkLzZFnJcOww7Foq_WANXPn3e1rB228W-NV90n3ru0p3iNmoFFJ3f0-4whKDIHbz9EIXqshN-Nc9FQ1Td8M0uLQHbWwExkQoHmhk_Co1D84L-CiUlokGLVuoBatJscUxcbl9lcFP5KmiK3ZubQ_fH9-ESQPZvvgci2Sm6KNdaOeNCAOZFxHlmqGs3jWXHTd4z9Rkw4HKhiPGK78NL9gdqcRgeqpmc_pZ-TnEXigLrAXzMRWoCmvrhCp0g55ldC4eL_lV6NbJuhpPubH1t_xJyRiu9z4xPH7RgoTRtJnI8ymxQEIwa6WiUc0nTfqehVwyt3DsLBIdbWH8yzkmeI3W5UzRN2eT2wogLsMmMBE3l1D54-ytdJYCtB0MyEKMNLaa0VJwg5AxVoMmm_gVHGy8s5LwMBy4fUVvtg7qI0ivLPDpHAUYl2bfFsiC01oZAXB6Ksdw0dvieb0r9E6DceKAAkSRSDqsplyD9-nJRaPAcKPPXb_k3PUYjrzhcZCa7ptwr2p0nBwQbvrwPwteWtbn0Hs5Z1f4FX9lf9cQ1V8dAQOAdd-M5BV8XVZ14REmkdeisJYTBafP-FNq02Xw_u_YSVye7BkayxmVh31ZBNweCuLbC5wqnVPHOO04LBQS9bLzf2aXRdXK1kN4TEHuK5Cgg";

const instance = Axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'json'
    }
})

export default instance;


// export function getToken(email, password) {
//     const axios = Axios.create({
//         baseURL: "http://127.0.0.1:8000/api",
//         timeout: 1000,
//         headers: {
//             'Content-Type': 'json'
//         }
//     });

//     let jsonSend = { username: email, password: password };

//     axios.post("/login_check", jsonSend)
//         .then(res => console.log(res))
//         .catch(error => console.log(error));
// }

// export function createInstance(token) {
//     return Axios.create({
//         baseURL: 'http://localhost:8000/api',
//         timeout: 1000,
//         headers: {
//             'Authorization': 'Bearer ' + token,
//             'Content-Type': 'json'
//         }
//     });
// }