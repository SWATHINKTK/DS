function total(number){
    if(number == 0){
        return 0;
    }
    return number + total(number -1)
}

console.log('Sum of Numbers :',total(5))