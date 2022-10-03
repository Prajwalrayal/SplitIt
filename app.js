let data = []; //array initialization of form data


//Function to get data of items through form
function get_data()   
{
  document.querySelectorAll(".form-div").forEach((el) => {
    // Creating object of data recieved
    obj = {                                        
      "item-name": el.querySelector(".item").value,
      "quantity": el.querySelector(".qty").value,
      "price": el.querySelector(".price").value,
    };
    // pushing object to data array
    data.push(obj);
  });
}


// creating an element
function add_node(class_name)
{
  const node=document.createElement("input");
  node.setAttribute("class", class_name);
  node.setAttribute("type", "text");
  return node;
}

// Creating input field
function create_form()
{
  const dv = document.createElement("div");
  dv.setAttribute("class", "form-div");

  const node1 = add_node("item","text");
  const node2 = add_node("qty",);
  const node3 = add_node("price");

  // Create a text node:
  const textnode = document.createTextNode("");


  let node=[node1,node2,node3];
  // Append the text node:
  for(let i=0;i<3;i++)
  {
    node[i].appendChild(textnode);
  }

  for(let i=0;i<3;i++)
  {
    dv.appendChild(node[i]);
  }
  document.getElementById("it").appendChild(dv);
}

// Functioning of add item button
let addel = document.getElementById("button-add");
addel.addEventListener("click", () => {
      create_form();
});
// Functioning of Done button
let doEL = document.getElementById("done");
doEL.addEventListener("click", () => {
  get_data();
  console.log(data);
  data=[];
});