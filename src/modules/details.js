import { HTTP } from 'utils/http';
import config from 'utils/config';

class DetailModule extends HTTP {
    getDetail(field,id) {
        return new Promise((resolve, reject) => {
            this.axiosPost({
                url: config.API.GET_DETAIL,
                data: { field,id },
                success(res) {
                    resolve({ data:res.data, status: 0 });
                },
                error(error) {
                    reject({ error,status: -1 })
                }
            })
        })
    }
}
export { DetailModule }