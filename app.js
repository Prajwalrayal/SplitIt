let bill={
}






let addel=document.getElementById("button-add");
console.log(addel);
addel.addEventListener("click",()=>{
    const dv=document.createElement("div");
    dv.setAttribute('class','form-div');
    const node1 = document.createElement("input");
    node1.setAttribute('class','item')
    node1.setAttribute('type','text')
    const node2= document.createElement("input");
    node2.setAttribute('class','qty')
    node1.setAttribute('type','text')
    const node3 = document.createElement("input");
    node3.setAttribute('class','price')
    node1.setAttribute('type','text')
    const node4 = document.createElement("br");
    const node5 = document.createElement("br");

    // Create a text node:
    const textnode = document.createTextNode("");
    
    // Append the text node to the "li" node:
    node1.appendChild(textnode);
    node2.appendChild(textnode);
    node3.appendChild(textnode);
    node4.appendChild(textnode);
    node5.appendChild(textnode);
    
    dv.appendChild(node1);  
    dv.appendChild(node2);  
    dv.appendChild(node3);  
    dv.appendChild(node4);  
    dv.appendChild(node5);  
    document.getElementById("it").appendChild(dv);
})







let doEL=document.getElementById("done")
doEL.addEventListener("click",()=>{
  document.querySelectorAll('.form-div input').forEach((el) => {
    console.log(el.value)
  })
})
