import axios from 'axios';
import { API_URL } from "../config";


const getAllLink = async(filters) => { 
 
  try{
    const result = await axios.get(API_URL+'/links',{
      params:{
        ...filters
      }
    });
    return result.data;
  }catch(e){
    console.log(e)
    return e.response.data;
  }
}

const getLink = async (id=1) => {
  try{
    const result = await axios.get(API_URL+'/links/'+id);
    return result.data;
  }catch(e){
    console.log(e);
    return e.response.data;
  }
}

const createLink = async (formData = {}) => {
  try{
    const result = await axios.post(API_URL+'/links',formData);
    return result.data;
  }catch(e){
    console.log(e);
    return e.response.data;
  }
}
const updateLink =async (formData={}) => {
  try{
    const result = await axios.put(API_URL+'/links',formData);
    return result.data;
  }catch(e){
    console.log(e);
    return e.response.data;
  }

}
const deleteLink = async (id="1") => {
  try{
    const result = await axios.delete(API_URL+'/links/'+id);
    return result.data;
  }catch(e){
    console.log(e);
    return e.response.data;
  }

}

const linkService =
  {getLink,createLink,updateLink,deleteLink,getAllLink,deleteLink}


export default linkService;