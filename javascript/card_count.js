var count = 0;

function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  
  if(count > 0){
    return count.toString() +" "+"Bet";
  } else {
    return count.toString()+" "+"Hold";
  }
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc('J'); cc(9); cc(2); 

console.log(cc(7));
