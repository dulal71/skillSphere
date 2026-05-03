export const getData = async()=>{
    const res = await fetch('http://localhost:5004/courses')
    const data = await res.json()
    return data;
}
export const getDataById = async(id)=>{
    const res = await fetch(`http://localhost:5004/courses/${id}`)
    const data = await res.json()
    return data;
}
