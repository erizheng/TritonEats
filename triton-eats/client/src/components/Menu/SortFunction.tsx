import { dishItem, sortArrows } from "../../types/menuTypes";

// SortFunction is a helper function to sort the dishItem array in either name, price, or rating format
// input: array is the inputed dishItem array
//          sortType is one of three string, "name", "price", or "rate" to determine how it will be sorted
//          sortOrder determines whether it is sorted in increasing order or decreasing order, 
//                  0 being increasing, 1 being decreasing
//output: sorted menu items
export function SortFunction(array:dishItem[], sortType:string, sortOrder:number){
    if(sortType == "name"){
        if(sortOrder){
            const toReturn = [...array].sort((a, b) => 
                b.food_name.localeCompare(a.food_name));
            return toReturn;
        }else{
            const toReturn = [...array].sort((a, b) => 
                a.food_name.localeCompare(b.food_name));
            return toReturn;
        }
    }else if(sortType == "rate"){
        if(sortOrder){
            const toReturn = [...array].sort((a, b) => 
                b.rating - a.rating);
            return toReturn;
        }else{
            const toReturn = [...array].sort((a, b) => 
                a.rating - b.rating);
            return toReturn;
        }
    }else if (sortType == "price"){
        if(sortOrder){
            const toReturn = [...array].sort((a, b) => 
                b.cost - a.cost);
            return toReturn;
        }else{
            const toReturn = [...array].sort((a, b) => 
                a.cost - b.cost);
            return toReturn;
        }
    }

    return array;
}

// SortFunction is a helper function to sort the dishItem array in either name, price, or rating format
// input: array is the inputed dishItem array
//          arrowCost is the arrow indicating if menu is being sorted by cost,
//          arrowName is the arrow indicating if menu is being sorted by name,
//          arrowRate is the arrow indicating if menu is being sorted by rate,
// output: sorted menu items
export function SearchSort(array:dishItem[], arrowCost:string, arrowName:string, arrowRate:string){
    //no sort buttons have been pressed, default to alphabet
    if((arrowCost == sortArrows.empty.sym) && (arrowName == sortArrows.empty.sym) && (arrowRate == sortArrows.empty.sym)){
        return SortFunction(array, "name", 0);

    }else if ((arrowCost == sortArrows.empty.sym) && (arrowRate == sortArrows.empty.sym)){//name sort is active
        if(arrowName == sortArrows.up.sym){
            return SortFunction(array, "name", 1);
        }else if(arrowName == sortArrows.down.sym){
            return SortFunction(array, "name", 0);
        }

    }else if((arrowCost == sortArrows.empty.sym) && (arrowName == sortArrows.empty.sym)){//rate sort is active
        if(arrowRate == sortArrows.up.sym){
            return SortFunction(array, "rate", 1);
        }else if(arrowRate == sortArrows.down.sym){
            return SortFunction(array, "rate", 0);
        }

    }else if((arrowName == sortArrows.empty.sym) && (arrowRate == sortArrows.empty.sym)){//cost sort is active
        if(arrowCost == sortArrows.up.sym){
            return SortFunction(array, "price", 1);
        }else if(arrowCost == sortArrows.down.sym){
            return SortFunction(array, "price", 0);
        }
    }
    return array;
}