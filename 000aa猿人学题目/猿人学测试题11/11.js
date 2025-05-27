setTimeout = function (){}
window = {}
window.addEventListener = '1'
document = {}
document.addEventListener = function (a,b,c){
    b()
}
document.createElement = function () {
    return {
        firstChild: {
            href:'http://www.python-spider.com/'
        }
    }
}


__zx



function zx(){
    return document.cookie
}

