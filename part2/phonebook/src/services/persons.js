import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>{
    return axios.get(baseUrl).then(response => response.data)
}

const create = newObject=> {
 return axios.post(baseUrl, newObject).then(response => response.data)
}

const deleteNumber = (id) =>{
    return axios.delete(`${baseUrl}/${id}`)
}

const updateNum = (id, newObject) => {
    const urlPeticion = `${baseUrl}/${id}`
    const up = axios.put(urlPeticion, newObject).then(response => response.data)
    return up
} 

export default {
    getAll: getAll,
    create: create,
    deleteNumber: deleteNumber,
    updateNum: updateNum

}