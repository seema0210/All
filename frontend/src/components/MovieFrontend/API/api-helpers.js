export const getAllMovies = async() => {
    const res = await fetch("http://localhost:5000/movie/getAllMovies")
    if(res.status !== 200){
        return console.log('no data found')
    }
    return res.json();
}

export const sendUserAuthRequest = async(input,signup) => {
    const data = await fetch(`http://localhost:5000/user/${signup ? "signup" : "login"}`, {
        method : "POST",
        body : JSON.stringify({
            name : signup ? input.fname : "" ,
            email : input.email,
            password : input.password
        }),
        headers : {
            "Content-type" : "application/json"
        }
    })
const finalData =  await data.json()        
if(finalData.status !== 200 ){
    console.log('not data found frontend at user auth')
}
return finalData;
}

export const sendAdminAuthRequest = async (data) => {
    const resp = await fetch(`http://localhost:5000/admin/login`, {
        method : "POST",
        body : JSON.stringify({
            email : data.email,
            password : data.password
        }),
        headers : {
            "Content-type" : "application/json"
        }
    })
   const finalData = await resp.json()
    return finalData;
}