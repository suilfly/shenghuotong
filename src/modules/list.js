import { HTTP } from 'utils/http';
import config from 'utils/config'
class ListModule extends HTTP {
    getListDatas(cityId, field) {
        return new Promise((resolve, reject) => {
            this.axiosPost({
                url: config.API.GET_LIST_DATAS,
                data: {
                    cityId,
                    field
                },
                success(res) {
                    resolve({ data: res.data, status: 0 });
                },
                error(err) {
                    resolve({ error: err, status: -1 })
                }
            })
        })
    }
}
export { ListModule }