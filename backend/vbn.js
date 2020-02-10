

var deals=[
    {'quantity':2,'status':'OPEN'},
    {'quantity':4,'status':'OPEN'},
    {'quantity':5,'status':'OPEN'},
    {'quantity':8,'status':'OPEN'}
]
var selected_val=5;
var closedId=[];
var openId=[];
var first;
var second;
var m;
function myfun(){
    for(var i=0;i<deals.length;i++){
        var first=deals[i]
        console.log("first====",first.quantity);
        var s={
            quantity:0,
            status:'CLOSED'
        } 
        s.quantity=first.quantity
         closedId.push(s);
        if(selected_val===first.quantity){
            console.log("First val")
            s.quantity=first.quantity
            closedId.push(s);
            console.log(closedId)
        }
        else{

            for(var j=i+1;j<deals.length;j++){
                var second=deals[j]
               
               console.log("second===",second)
                m =first.quantity+second.quantity;
               
               console.log("mmmmmmm===",m);
    
               if(selected_val<=m){
                   if(selected_val<m){
                       closedId.push(s);
                       console.log(closedId) 
                       console.log(second)

                   }
                   
                   console.log("updated second",second);
                   openId.push(second.quantity)
                   console.log(openId)
                   var v=m-selected_val
                   second.quantity=v;
                   second.status='OPEN'
                   openId.push(second)
    
    
    
                   console.log("updated second",second);
                   console.log("remain ====",v);
                   
                   second=v;
                   console.log("Final updated",second);
                   break;
               }
               else{
                   console.log("updated",m);
                   second.status='CLOSED'
                   closedId.push(second)
                //    closedId.push()
                    
                    
    
                //    closedId.push(first.quantity);
                   console.log(closedId);
                   first.quantity=m
                   
                
        
               }
               
                
           }
        }
       
        
       
       break;
    }
}

myfun()
  
   
  

