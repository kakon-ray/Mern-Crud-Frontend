import axios from 'axios';

class Post{
    create(formdata){
        const url = 'http://localhost:8000/api/update-post';

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        }
        return axios.post(url,formdata,config)
    }
}

export default new Post();