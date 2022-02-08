
function calculator(sum,num,promo=null){
    if (promo == 'ДАРИМ300'){
        sum=sum-300
        if (sum<0){
            sum=0
        }
    }
    console.log(sum)
    if (num>=10){
        sum=sum*0.95
    }
    console.log(sum)
    if (sum>50000){
        sum=sum-(sum-50000)*0.2
    }
    console.log(sum)
    if (promo == 'СКИДКА15' && sum >= 20000){
        sum=sum*0.85
    }
    console.log(sum)
}
calculator(45000,4,'СКИДКА15')