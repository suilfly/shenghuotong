export default {
    formatJSON(array, key) {
        return array.filter((item) => {
            if (item[key]) {
                item[key] = item[key].split(',');
            }
            return item;
        });
    },
    JSONtoArray(str) {
        return JSON.parse(str);
    },
    strToArray(str) {
        return str.split(',');
    },
    replaceToSpace(str) {
        return str.replace(/\,/g, ' ');
    },
    trimSpace(str){
        return str.replace(/\s+/g,'');
    },
    throttle(fn,delay){
        var t = null,
            begin = new Date().getTime();
        return function(...args){
            var _this = this,
            cur = new Date().getTime();
            clearTimeout(t);
            if(cur - begin >= delay){
                fn.apply(_this,args);
                begin = cur
            }else{
                t = setTimeout(()=>{fn.apply(_this,args)},delay);
            }
        }

    }
    

}