const getDataFromLocalStorage=()=>{
    const storedData= localStorage.getItem('application-details')
    if(storedData){
        return JSON.parse(storedData)
    }
    return [];
}
const setDataToLocalStorage=(id)=>{
    const data = getDataFromLocalStorage()
    const exists = data.find(da=>da === id)
    if(!exists){
        data.push(id)
        localStorage.setItem('application-details',JSON.stringify(data))
    }
}
const deleteDataFromLocalStorage=(id)=>{
    const data = getDataFromLocalStorage()
    const filterData = data.filter(da=>da !== id)
    if(filterData){
        localStorage.setItem('application-details',JSON.stringify(filterData))
    }
} 
    
export {getDataFromLocalStorage,setDataToLocalStorage,deleteDataFromLocalStorage}