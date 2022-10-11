


let data = [{
}]; //array initialization of form data
  


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

  const item_name = add_node("item","text");
  const quantity = add_node("qty",);
  const item_price = add_node("price");

  // Create a text node:
  const textnode = document.createTextNode("");


  let node=[item_name,quantity,item_price];
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


//Totalling of price
let totEl=document.getElementById("button-tot");

// Event Listner
totEl.addEventListener("click",()=>{

      get_data();
      let sum=0;
      for( let i=0 ; i < data.length ; i++)
      {
        let copy=data[i];
        let qt=parseInt(copy.quantity);
        let pri=parseInt(copy.price);
        if(isNaN(qt) || isNaN(pri))
          {
            continue;
          }
        sum+=(qt*pri);
        // console.log(qt);
        // console.log(pri);
      }
      data=[];
      let tothtml=document.getElementById("total");
      tothtml.textContent=("Total Bill:  "+sum);

});


// Functioning of Done button
let doEL = document.getElementById("done");

// Event listner

doEL.addEventListener("click", () => {
  get_data();
  data=[];
  // console.log(data);

});
// module.exports={data};
// export const message = data;