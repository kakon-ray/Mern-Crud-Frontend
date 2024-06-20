import axios from 'axios';

class Post{
    create(formdata){
        const url = 'http://192.168.5.239:8000/api/create-post';

        const config = {
            headers:{
                'Content-type':'multipart/form-data'
            }
        }
        return axios.post(url,formdata,config)
    }
}

export default new Post();