//移动端
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
// 初始化fastclick
window.addEventListener('load',function(){
    FastClick.attach(document.body);
},false);
document.addEventListener('touchmove',function(e){
    if(e.touches.length > 1){
        e.preventDefault();
    }
},false)