//Pop method for array - removing an element form the end
function popMethodArr() {
    //create our array
    let fruits = ["Apple", "Orange", "Pear"];

    alert(fruits); // display the initial arr
    alert('removing: ' + fruits.pop() ); // remove "Pear" and alert it
    alert('remain fruits: ' + fruits ); // Apple, Orange
}

//next one is push merthod - appedn element to the end
function pushMethodArr() {
    //create our array
    let fruits = ['Apple', 'Orange'];

    alert('initila array ' + fruits); //display our initial array
    fruits.push("Pear");
    alert('final array ' + fruits);
}

//the shift method - extracts the first element of the array 
function shiftMethodArr() {
    //create our array
    let fruits = ['Apple', 'Orange', 'Pear'];
    alert('initial arr: ' + fruits);//display the initial array
    alert("removing: " + fruits.shift() ); //remiving the apple 
    alert('final arr: ' + fruits) //display the final array
}

//the unshift add the element to the beginning of the array
function unshiftMethodArr() {
    //create our arr
    let fruits = ['Orange', 'Pear'];

    alert('initial arr: ' + fruits); //delete our arr
    fruits.unshift('Apple'); // add our element to the start
    alert('final arr: ' + fruits); //display our final arr
}

//methods push and unshift can add multiple elemnts at once
function pushAndShiftMethod() {
    //create our arr
    let fruits = ['Apple'];
    //dsiplay our arr
    alert('intial arr: ' + fruits);
    //add element to the start
    fruits.push('Orange', 'Peach');
    //add element to the end
    fruits.unshift('Pineapple', 'Lemon');
    //diplay our final array
    alert(fruits);
}