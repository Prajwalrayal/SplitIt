let data = [{
}]; //array initialization of form data



function total_amt()
{
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
  }
  data=[];
  let tothtml=document.getElementById("total");
  tothtml.textContent=("Total Bill:  "+sum);
}


function fill_data(dv,cls,item)
{ 
    cls='.'+cls
    // console.log(item);
    dv.querySelector(cls).value=item
}


if(localStorage.getItem("form-data"))
{
  JSON.parse(localStorage.getItem("form-data")).forEach((item) => {
    const dv = create_form();
    data.push(item);
    fill_data(dv,"item",item["item-name"])
    fill_data(dv,"qty",item["quantity"])
    fill_data(dv,"price",item["price"])
    total_amt()
  })
}


  


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
  return dv;
}

let inpEl;
// Functioning of add item button
let addel = document.getElementById("button-add");
addel.addEventListener("click", () => {
      create_form();
      inpEl=document.querySelectorAll("input")
      listen(inpEl)
});

// Event Listner
function listen(inpEl) {
  inpEl.forEach((ele) => {
    //console.log(ele);
    ele.addEventListener("change",()=> {
          get_data();
          localStorage.setItem('form-data',JSON.stringify(data))
          total_amt();
        })
  });
}


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

let resEl=document.getElementById("button-res")

resEl.addEventListener("click",()=>{
  localStorage.removeItem("form-data")
  document.getElementById("it").innerHTML=""
  document.getElementById("total").innerHTML=""
})