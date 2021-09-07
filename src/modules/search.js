import { HTTP } from 'utils/http';
import config from 'utils/config'
class SearchModule extends HTTP {
    searchAction(keyword,cityId){
        return new Promise((resolve,reject)=>{
            this.axiosPost({
                url: config.API.SEARCH_ACTION,
                data: {
                    cityId,
                    keyword
                },
                success(res) {
                    resolve({ data: res.data, status: 0 });
                },
                error(err) {
                    resolve({ error: err, status: -1 })
                }
            })
        });
    }
}
export { SearchModule }