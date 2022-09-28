let weather = "rainy"

switch(weather)
{
    case('rainy'):{
        console.log("it's a rainy day")
        break;
    }
    case('sunny'):{
        console.log("it's a sunny day")
       break;
    }
    default: {
        console.log("it's the same as always")
    }
    
}
/* if You didnot use break statement the 
after executed rest of the ststements also executed */
 