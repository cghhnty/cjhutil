var util = {};
util.ntoCh = function(num){
    if(typeof num !='number') return;
    var str =num+'',
        arr =["零","一","二","三","四","五","六","七","八","九"],
        result ='';
    for(var j=0;j<str.length;j++){
        if(str.charAt(j)=='.'){
            continue;
        }else{
            result+=arr[parseInt(str.charAt(j))];
        }
    }
    return result;
}

module.exports= util;