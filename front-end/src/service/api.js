import axios from 'axios';

const baseUrl= 'http://localhost:3001/words';

export const getWords = async (id)=>{
    id = id || '';
    return await axios.get(`${baseUrl}/${id}`);
}

export const addWords = async (word)=>{
    return await axios.post(`${baseUrl}/add`, word);
}

export const deleteWords = async (id)=>{
    return await axios.delete(`${baseUrl}/${id}`)
}
export const editWords = async (id, word)=>{
    return await axios.put(`${baseUrl}/${id}`, word)
}