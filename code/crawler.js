//verifying the format of the link given by users.

function verify(link){
    if(link.slice(0,8)=="https://"){
        return true
    }
    else{
        return false
    }
}

//get the list of webite url and normalize it
/*lis=["https://brave.com/en-in/linux/","https://releases.ubuntu.com/focal/",
"Https://brave.com/en-in/linux/","https://web.whatsapp.com/"]*/
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
fetch("https://web.whatsapp.com/")
  .then(function(response){
    console.log(response);
  })
  .then(function(data){
    console.log(data);
  })
  .catch(function(error){
    console.log(error);
  });

















/*var check=["https://brave.com/en-in/linux/","https://releases.ubuntu.com/focal/",
"Https://brave.com/en-in/linux/","https://web.whatsapp.com/","https://guhan.com"]


console.log(normalise(check))*/




