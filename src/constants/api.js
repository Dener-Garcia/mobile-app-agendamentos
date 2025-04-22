
const urlLogin = "http://144.22.160.3:3003/users/login"
const urlCreateAccount = "http://144.22.160.3:3003/users/register"
const urlGetDoctors = "http://144.22.160.3:3003/doctors"
const urlDoctorServices = "http://144.22.160.3:3003/doctors/"
const urlUserAppointment = "http://144.22.160.3:3003/appointments/"
const urlUserProfile = "http://144.22.160.3:3003/users/profile"

const api = async (route) => {
    try {
        const response = await fetch(`${baseUrl}${route}`)
        const data = await response.json()
        console.log("dentro api", data)
        return data
    } catch (error) {
        console.log("Error ao buscar dados api", error.message)
    }

}

export {
    api,
    urlLogin,
    urlCreateAccount,
    urlGetDoctors,
    urlDoctorServices,
    urlUserAppointment,
    urlUserProfile,
    
}