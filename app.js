let addel=document.getElementById("button-add");
addel.addEventListener("click",()=>{
    const node1 = document.createElement("input");
    node1.setAttribute('id','item')
    const node2= document.createElement("input");
    node2.setAttribute('id','qty')
    const node3 = document.createElement("input");
    node3.setAttribute('id','price')
    const node4 = document.createElement("br");
    const node5 = document.createElement("br");

    // Create a text node:
    const textnode = document.createTextNode("Water");
    
    // Append the text node to the "li" node:
    node1.appendChild(textnode);
    node2.appendChild(textnode);
    node3.appendChild(textnode);
    node4.appendChild(textnode);
    node5.appendChild(textnode);
    document.getElementById("it").appendChild(node1);  
    document.getElementById("it").appendChild(node2);  
    document.getElementById("it").appendChild(node3);  
    document.getElementById("it").appendChild(node4);  
    document.getElementById("it").appendChild(node5);  
})