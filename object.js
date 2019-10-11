var object1 ={
name:'jack',
job:'soilder',
}


//let cc  = new object1('harry',' gunner')

object1.name ={name:'jack'};
object1.kid ='togga'


object1 ={ array:'kids'};

console.log(object1)


let addInfo ={
name :' The Coder',
joblevel:'senior',
}

object1.prototype.add =function (addInfo){
 object1.name = object1.name+addInfo.name;
 object1.job = addInfo.jobLevel+object1.job;
}

//console.log(object1)
//let object2 = object1.add(addInfo)
console.log( object2) 


