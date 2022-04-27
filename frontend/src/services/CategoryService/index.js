import axios from "axios";
import { API_URL } from "../config";


const getAllCategories = async() => { 
  try{
    const result = await axios.get(API_URL+'/categories');
    console.log(result);
    return result.data;
  }catch(e){
    return e.response.data;
  }
}

const getCategory = async (id=1) => {
  try{
    const result = await axios.get(API_URL+'/categories/'+id);
    return result.data;
  }catch(e){
    console.log(e);
    return e.response.data;
  }
}
const createCategory = async (formData = {}) => {
  try{
    const result = await axios.post(API_URL+'/categories',formData);
    return result.data;
  }catch(e){
    console.log(e);
    return e.response.data;
  }
}
const updateCategory =async (formData={}) => {
  try{
    const result = await axios.put(API_URL+'/categories',formData);
    return result.data;
  }catch(e){
    console.log(e);
    return e.response.data;
  }

}
const deleteLink = async (id="1") => {
  try{
    const result = await axios.delete(API_URL+'/categories/'+id);
    return result.data;
  }catch(e){
    console.log(e);
    return e.response.data;
  }

}

const linkService =
  {getLink,createLink,updateLink,deleteLink,getAllLink,deleteLink}


export default linkService;