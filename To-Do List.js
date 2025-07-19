//Creating an empty array to store the tasks
const taskArray =[];

displayToDoList();

//A function to add values/tasks to the List
function makeToDoList(){
    //to get the value from the input bar
    const inputElement = document.querySelector('.js-name-input')
    const add = inputElement.value;
    if(add !== "")
        taskArray.push(add);

    console.log(taskArray);
    inputElement.value = '';

    displayToDoList();
}

//A function to Display the list on the page
function displayToDoList(){

    let listHtml ='';
    //A loop to genrate the Html code for everytime a item or task is added in it
    for(let i=0; i<taskArray.length; i++){
        const html = `<p>${taskArray[i]}  
        <button class="done-Button" onclick="
        taskArray.splice(${i}, 1)
        displayToDoList();
        "> Done</button></p>`; //Genrating HTML code through JS
        listHtml += html;
    }
    document.querySelector('.js-display-List')
        .innerHTML = listHtml;

    console.log(listHtml)
}