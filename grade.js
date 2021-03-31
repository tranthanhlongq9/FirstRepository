// var score = 5

function grade(score){
    var result = "";
  if(score <= 5){
      result = console.log('\'C\'');
  } else if (score > 5 && score <= 7){
      result = console.log('B');
  }else{
      result = console.log('A');
  }
  return result ;
}

grade(1);

// var result = "";

  
//   return result ;
// console.log(result);