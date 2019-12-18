// Your mission should you choose to accept it is to complete the following functions. 
// If you choose to do so, you may find that you are ready to crush it on the precourse exit.

// Remember your training:
    // Be sure you understand the instructions.
    // Pseudocode your logic.
    // Breathe.
    // You can do this.


/////////////////////////////////////////////////////////
// MANIPULATING COLLECTIONS
/////////////////////////////////////////////////////////


const pureShuffle = array => {
    // your code here
    array = [...array]; // comment entire line for dirtyShuffle
    for (let i = 0; i < array.length - 1; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // [array[j], array[i]] = [array[i], array[j]] 
    }
    return array;
};

const dirtyShuffle = array => {
    // your code here
    // array = [...array]; // comment entire line for dirtyShuffle
    for (let i = 0; i < array.length - 1; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        // [array[j], array[i]] = [array[i], array[j]] 
    }
    return array;
};

var isPalindrome = (string) => {
    // your code here
    if (string === '') {
        return undefined;
    } else if (string.toLowerCase() === string.split('').reverse().join('').toLowerCase()) {
        return true;
    } else {
        return false;   
    }
}

const mergeObjects = (...obj) => {
    // your code here
    return Object.assign({}, ...obj);
};

const semiMergeObjects = (obj, ...objs) => {
    for (let i = 0; i < objs.length; i++) {
        for (let key in objs[i]) {
            if (!obj[key]) {
                obj[key] = objs[i][key]; 
            }
        }
    }
    return obj;
};


//////////////////////////////////////////////////////
// USING RECURSION
//////////////////////////////////////////////////////

var replaceValuesInObj = (obj, value, newValue) => {
    // your code here
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            replaceValuesInObj(obj[key], value, newValue);
        } else {
            obj[key] = obj[key].replace(value, newValue);
        }
    }
    return obj;
};

var addKeysToExistingObj = (obj, newKey, newValue) => {
    // your code here
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            addKeysToExistingObj(obj[key], newKey, newValue);
        } else {
            obj[newKey] = newValue;
        }
    }
    return obj;
};

var map = (arr, func) => {
    // your code here
    if (!arr.length) {
        return [];
    } else {
        return [func(arr[0])].concat(map(arr.slice(1), func));
    }
}


/////////////////////////////////////////////////////////////////
// REDUCE VS CHAINED METHODS
/////////////////////////////////////////////////////////////////

var comedians = [
    { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
    { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
    { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
    { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
    { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
    { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
    { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
    { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
    { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
    { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
];

/* Solve by chaining native methods of map and filter only */
var comediansFilteredAndMapped = (comedians) => {
    // Your code here
    return comedians.filter(comedian => {
        return comedian.begin >= 2005 && comedian.actor.length > 10;
    }).map(comedian => {
        return { appearanceNumber: '#' + comedian.number, name: comedian.actor, seasonsActive: comedian.end - comedian.begin + 1 };
    });
};

var comedianNamesFilteredAndMapped = (comedians) => {
    // Your code here
    return comedians.filter(comedian => {
        return comedian.begin >= 2005 && comedian.actor.length > 10;
    }).map(comedian => {
        return comedian.actor;
    });
};




/* Solve by using native method of reduce only */
var comediansReduced1 = (comedians) => {
    // Your code here
    return comedians.reduce((acc, comedian) => {
        if (comedian.begin >= 2005 && comedian.actor.length > 10) {
            acc.push({ appearanceNumber: '#' + comedian.number, name: comedian.actor, seasonsActive: comedian.end - comedian.begin + 1 });
        }
        return acc;
    }, [])
};

var comediansReduced2 = (comedians) => {
    // Your code here
    return comedians.reduce((acc, comedian) => {
        if (comedian.begin >= 2005 && comedian.actor.length > 10) {
            acc.push(comedian.actor);
        }
        return acc;
    }, [])
};


/////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////

// IMPLEMENT ANY ADDITIONAL FUNCTIONS THAT YOU MAY NEED HERE
