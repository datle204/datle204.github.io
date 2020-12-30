
//Kiem tra so 0, am, duong

function nhapSoNguyen(x){
    if(x == 0){
        return (`x la so 0`);
    }
    else if(x < 0)
        return(`x la so am`);

    else{
        return (`x laso duong`);
    }
}

function hocLuc(a,b,c){
    if(0 <= a && 0 <= b && 0 <= c && a <= 10 && b <= 10 && c <= 10 ){
        x = (a+b+c)/3;
        if ( 0 <= x && x < 3){
            return(`yeu`)
        }
        else if(3 <= x && x < 6.5){
            return(`trung binh`)
        }
        else if(6.5 < x && x < 8){
            return(`kha`)
        }
        else{
            return(`gioi`)
        }
    }
    else{
        return(`ko hop le, nhap 3 so' trong khoang tu 0 den 10`)
    }
}

// switch (bien){
//     case (dieu kien){
//         // xu ly code
//     }
//     case (dieu kien){
//         //xu ly
//     }
//     default:
//         return 0
// }

function getNewDay(){
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    return day;
}


// 

