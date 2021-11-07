const generate_button = document.getElementById("generate_pin_button").addEventListener("click",function(){
   
    const number = parseInt(Math.random() *10000) ;
    let number_string = (number + '').split('.')[0];

    if(number_string.length === 4){
        document.getElementById("number_box").value = number;
    } else{ number}
    
    console.log(number)
})





    function calculate_function(number_){
        //1 number function
        if(number_ == 1){
            const calculator_number = document.getElementById("calculator_number").value;
        const one = calculator_number + 1;
        document.getElementById("calculator_number").value = one;
        }
    //2 number function
        if(number_ == 2){
            const calculator_number = document.getElementById("calculator_number").value;
        const two = calculator_number + 2;
        document.getElementById("calculator_number").value = two;
        }
    //3 number function 
        if(number_ == 3){
            const calculator_number = document.getElementById("calculator_number").value;
        const three = calculator_number + 3;
        document.getElementById("calculator_number").value = three;
        }
    //4 number function 
        if(number_ == 4){
            const calculator_number = document.getElementById("calculator_number").value;
        const four = calculator_number + 4;
        document.getElementById("calculator_number").value = four;
        }
    //5 number function 
        if(number_ == 5){
            const calculator_number = document.getElementById("calculator_number").value;
        const five = calculator_number + 5;
        document.getElementById("calculator_number").value = five;
        }
    //6 number function 
        if(number_ == 6){
            const calculator_number = document.getElementById("calculator_number").value;
        const six = calculator_number + 6;
        document.getElementById("calculator_number").value = six;
        }
    //7 number function 
        if(number_ == 7){
            const calculator_number = document.getElementById("calculator_number").value;
        const seven = calculator_number + 7;
        document.getElementById("calculator_number").value = seven;
        }
    //8 number function 
        if(number_ == 8){
            const calculator_number = document.getElementById("calculator_number").value;
        const eight = calculator_number + 8;
        document.getElementById("calculator_number").value = eight;
        }
    //9 number function 
        if(number_ == 9){
            const calculator_number = document.getElementById("calculator_number").value;
        const nine = calculator_number + 9;
        document.getElementById("calculator_number").value = nine;
        }
        //0 number function 
        if(number_ == 0){
            const calculator_number = document.getElementById("calculator_number").value;
        const zero = calculator_number + 0;
        document.getElementById("calculator_number").value = zero;
        }
    //c number function
        if(number_ == c){
            const calculator_number = document.getElementById("calculator_number").value;
        
        document.getElementById("calculator_number").value = [ ];
        }
    }

   
    let matched= document.getElementById("matched");
    let donnt = document.getElementById("don't_match");

    donnt.style.display = "none";
    matched.style.display = "none";

const sub_button= document.getElementById("Submit");


sub_button.addEventListener("click",function(){
    let cal_number= document.getElementById("calculator_number").value;
    let num_box = document.getElementById("number_box").value;
    if(cal_number === num_box){
       matched.style.display = "block";
       donnt.style.display = "none";
    } 
    if(cal_number !== num_box){
        donnt.style.display = "block";
        matched.style.display = "none";
    } 
    

})