// 状态保存
let cityInfo = {
    cityId:'0',
    cityName:'全部',
    field:'all'
}
// 为了避免每次刷新都显示'全部', 要把选好的选项保存到localStorage
try{
    if(localStorage.cityInfo){
        cityInfo = JSON.parse(localStorage.cityInfo);
    }
}catch(e){}
export default{
    ...cityInfo
}