

//test input, drop down, and button
//on submit of button - log input and drop down values 
//inside of event listener 
//get task drop down -> will have to run a click event on this 

//on submit of the btn get data from input and priceOptions 
//think flow of data




document.querySelector('form .invoice-form__btn').addEventListener('click', function(e){


    const taskInput = document.querySelector('#textInput').value;
    console.log(taskInput)

    const priceOptions = document.querySelector('#selectMenu').value;

    console.log(priceOptions)
    
    
    //Prevent page refresh
    e.preventDefault();

    const formReset = document.querySelector('form');
    formReset.reset()




})




//const addTaskBtn = document.querySelector('.invoice-form__btn');


//bridge the gap b/w the data and task item 



/*


<div class="invoice-tasks__display-row">
    <div class="invoice-tasks__display-row__left">
        <p>Wash Car</p>
        <button>Remove</button>
    </div>

    <div class="invoice-tasks__display-row__right">
        <p><span>$</span>10</p>
    </div>
</div>



*/