const cheerio=require('cheerio');
var olddata=["www.com","facebook.com"];
//Parsing the whole html    
function parser(datahtml){
    var newdata=[];
    const $ =cheerio.load(datahtml);
    $('a').each((index,element)=>{
    const href=$(element).attr('href');
    newdata.push(href);
    
});
    return newdata;
};
htmldata="<html><a href='www.com'>hello</a><a href='guhan.com'></a></html>";
//This Part compares the new data and old data and results the change that has happend
function compareweb(o,n){
    var changed=[];
    for(w=0;w<n.length;w++){
        if(!o.includes(n[w])){
            changed.push(n[w]);
        }
    };
    return changed;
}
console.log(compareweb(olddata,parser(htmldata)));
