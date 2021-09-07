import axios from 'axios';
import qs from 'qs';
class HTTP {
    axiosPost(options) {
        axios({
            url: options.url,
            method:'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify(options.data)
        }).then((res) => {

            options.success(res);
        }, (err) => {
            console.log(err);
            options.error(err);
        })
    }
}
export { HTTP }