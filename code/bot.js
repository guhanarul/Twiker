//dependencies:
const https=require('https');
const fls=require('fs');
const cheerio=require('cheerio');

//Verify and Normalise:
function verify(link){
    if(link.slice(0,8)=="https://"){
        return true
    }
    else{
        return false
    }
}
//Remove the error in the user given urls
function normalise(lis){
  var final=[];
  for(var i=0;i<lis.length;i++){
      if(typeof lis[i]=="string" && !final.includes(lis[i].toLowerCase())){
          if(verify(lis[i].toLowerCase())){
          final.push(lis[i].toLowerCase());
          }

      }
  }
  return final;
};

//Linkill(finds the hostname and the path):
function linkkill(l){
    var hostname="";
    var path="";
    if(l.includes(".com")){
      hostname=l.slice(l.indexOf("://")+3,l.indexOf(".com")+4);
      path=l.slice(l.indexOf(".com")+4,l.length); 
  
    }
    else if(l.includes(".org")){
      hostname=l.slice(l.indexOf("://")+3,l.indexOf(".org")+4);
      path=l.slice(l.indexOf(".org")+4,l.length); 
  
    }
    else if(l.includes(".net")){
      hostname=l.slice(l.indexOf("://")+3,l.indexOf(".net")+4);
      path=l.slice(l.indexOf(".net")+4,l.length); 
  
    }
    else if(l.includes(".edu")){
      hostname=l.slice(l.indexOf("://")+3,l.indexOf(".edu")+4);
      path=l.slice(l.indexOf(".edu")+4,l.length); 
  
    }
    else if(l.includes(".gov")){
      hostname=l.slice(l.indexOf("://")+3,l.indexOf(".gov")+4);
      path=l.slice(l.indexOf(".gov")+4,l.length); 
  
    }
    else if(l.includes(".mil")){
      hostname=l.slice(l.indexOf("://")+3,l.indexOf(".mil")+4);
      path=l.slice(l.indexOf(".mil")+4,l.length); 
  
    }
    else if(l.includes(".in")){
      hostname=l.slice(l.indexOf("://")+3,l.indexOf(".in")+3);
      path=l.slice(l.indexOf(".in")+3,l.length); 
  
    }
    //https://guhanarul.github.io/
    else if(l.includes(".io")){
      hostname=l.slice(l.indexOf("://")+3,l.indexOf(".io")+3);
      path=l.slice(l.indexOf(".io")+3,l.length); 
  
    }
    if(hostname==""&&path==""){
      console.log("INVALID URL");
    }
    else{
    return {
      prop1:hostname,
      prop2:path
    };
    }
  }

//Final Call(Requesting web datas):
function finalkupu(p1,p2){
    const options={
        hostname:p1,
        path:p2,
        method:'GET'
    }
    function makereq(options){
      return new Promise((resolve,reject)=>{

        const res=https.request(options,(dat)=>{
          let fdata="";
          dat.on('data',(cache)=>{
            fdata+=cache;
          });
          dat.on('end',()=>{
            resolve(fdata);
          });
          dat.on('error',(error)=>{
            reject(error);
          });
  
        });
        res.end();


      });
      
    };
    function parser(datahtml){
      const $ =cheerio.load(datahtml);
      $('a').each((index,element)=>{
          const href=$(element).attr('href');
          console.log(href);
      });
      };
    makereq(options).then(
      (responsedat)=>{
        parser(responsedat);
        //console.log(responsedat);

      }
    ).catch((error)=>{
      console.log(error);
    })
    
    
    
}

//Calling the functions defined above:
var userdata=["https://www.annauniv.edu/events.php"];
var userlinks=normalise(userdata);
for(j=0;j<userlinks.length;j++){
  var{prop1,prop2}=linkkill(userlinks[j]);
  finalkupu(prop1,prop2);
}
