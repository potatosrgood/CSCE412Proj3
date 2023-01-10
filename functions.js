if(!(window.localStorage.getItem('num')==0 || window.localStorage.getItem('num')==1)){
    window.localStorage.setItem('num', 1);
}
var current = document.getElementsByTagName('link');
if(window.localStorage.getItem('num')==0){
    current[0].href='style.css';
}else{
    current[0].href='style2.css';
}

function toggleCSSFile(){
    var current = document.getElementsByTagName('link');

    if(window.localStorage.getItem('num')==0){
        current[0].href='style2.css';
        window.localStorage.setItem('num', 1);
    }else{
        current[0].href='style.css';
        window.localStorage.setItem('num', 0);
    }
    
}