
import axios from './axios';

export default async (emailId, password) => {
    const{ data } = await axios ({
        headers:{
            "Content-Type": "application/json",
        },
        url:'/login',
        method: 'POST',
        data: JSON.stringify({emailId,password})
    })
    return data;
}
