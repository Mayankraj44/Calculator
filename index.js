let display=document.getElementById("input");

function ansClicked(){
    let str=display.value;
    
    let num1="";
    let num2="";
    let check=false;
    let operator="";
    for(let i=0;i<str.length;i++)
    {
        if((str[i]=="-"))
        {
            if(i==0){
                num1="-";
                continue ;
            }
            if(check==true)
            {
                num2="-";
                continue;
            }
        }
        if(str[i]=="+"||str[i]=="-"||str[i]=="*"||str[i]=="/")
        {
            if(num1!=""&&num2!="")
            {
                if(operator=="+"){
                    num1=Number(num1)+Number(num2);
                    num2="";
                    operator="";
                }
                
                else if(operator=="-"){
                    num1=Number(num1)-Number(num2);
                    num2="";
                     operator="";
                }
                
                else if(operator=="*"){
                    num1=Number(num1)*Number(num2);
                    num2="";
                     operator="";
                }
                
                else {
                     num1=Number(num1)/Number(num2);
                     num2="";
                    operator="";
                }
               
            }
            operator=str[i];
            check=true;
        }
        else{
            if(check==true)
            num2+=str[i];
            else
            num1+=str[i];
        }
        
    }
                if(operator=="+"){
                    num1=Number(num1)+Number(num2);
                    num2="";
                }
                
                else if(operator=="-"){
                    num1=Number(num1)-Number(num2);
                    num2="";
                }
                
                else if(operator=="*"){
                    num1=Number(num1)*Number(num2);
                    num2="";
                }
                
                else {
                     num1=Number(num1)/Number(num2);
                     num2="";
                }
               display.value=num1;

    
}  
  


function addClicked(){
   
        display.value+="+";
    
    
}
function minusClicked(){
   
        display.value+="-";
   
}
function multiplyClicked(){
    
        display.value+="*";
    
}
function divideClicked(){
     
        display.value+="/";
   
}
function clearClicked(){
    display.value="";
}
function zeroClicked(){
   
    display.value+="0";

}
function oneClicked(){
    
    display.value+="1";

}
function dotClicked(){
    display.value+=".";
}
function twoClicked(){
   
    display.value+="2";

}
function threeClicked(){
   
    display.value+="3";

}
function fourClicked(){
    
    display.value+="4";

}
function fiveClicked(){
    
    display.value+="5";

}
function sixClicked(){
    
    display.value+="6";

}
function sevenClicked(){
    
    display.value+="7";

}
function eightClicked(){
    
    display.value+="8";

}
function nineClicked(){
    
    display.value+="9";

}