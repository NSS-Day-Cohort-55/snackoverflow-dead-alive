export const FoodCard = (foodObj) => {
    
    const contentElement = document.querySelector("main");
    contentElement.addEventListener("click", (event) => {
        
        if ( event.target.id==(`FoodId--${foodObj.id}`)) {
          
            
            const userInput = {
                
                foodId:foodObj.id,
               foodAmount:parseInt(document.querySelector(`#Amount--${foodObj.id}`).value)

            };
          
            console.log(userInput)
        }
      });
  return `
    <div class="col-sm-6 g-4">
        <div class="card">
        <div class="h-100">
        <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
        </div>
            <div class="card-body">
                <h5 class="card-title">${foodObj.name}</h5>
                <p class="card-text">${foodObj.description}</p>
                ${foodObj.isVegetarian?  "<img src=assets/images/icon-veg.png></img>": ""}
                <p>Price: $${foodObj.price}</p>
                <button type="button" class="btn btn-primary" id="FoodId--${foodObj.id}">Order</button>
                <label>Quantity:</label>
                <input type="number" min="0" id=Amount--${foodObj.id}></input>
            </div>
        </div>
    </div>
    `;
};
