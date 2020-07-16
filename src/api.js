import axios from 'axios';
async function Get(){
    var result=await axios.get("https://localhost:44393/api/collections");
    var breakpoint = 0;
    return result;
}

export {
    Get,
}