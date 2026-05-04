export const getData = async()=>{
    const res = await fetch('https://skillsphere-server-1.onrender.com/courses')
    const data = await res.json()
    return data;
}

export const getDataById = async(id)=>{
    const res = await fetch(`https://skillsphere-server-1.onrender.com/courses/${id}`)
    const data = await res.json()
    return data;
}
