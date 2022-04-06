let RDoc = {

MKobj : (newobject, obj)=>{

let Newobj=document.createElement(newobject)

if (append != null || append != undefined || append != ""){
  
obj.append(Newobj)

}else{
document.body.append(Nobj)
}
}
},
  
SetObjData : (obj, data, value)=>{

obj.setAttribute(data, value)
  
},
  
RemoveObjData : (obj, data)=>{

obj.removeAttribute(data)
  
},
SetObjData : (obj, data, value)=>{

obj.setAttribute(data, value)
  
},
  
RemoveObj : (obj)=>{

obj.remove(obj)
  
},

// Obj With

ObjWithId:(ObjId)=>{

let OBJ= document.getElementById(ObjId)
return OBJ

},
  
ObjsWithClass:(ObjClass)=>{

let OBJ=document.getElementsByClassName(ObjClass)
return OBJ

},

ObjWithSelector:(ObjSelector)=>{

let OBJ=document.getElementBySelector(ObjSelector)
return OBJ

},

ObjsWithTag:(ObjTag)=>{

let OBJ=document.getElementsByTagName(ObjTag)
return OBJ

},

Window:()=>{
return window
}

WindowLink:()=>{
return window
}
}
