export const getData = async()=>{
    const res = await fetch('http://localhost:5004/courses')
    const data = await res.json()
    return data[0];
}