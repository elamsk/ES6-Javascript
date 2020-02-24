var values = [1, 60, 34, 30, 20, 5]

function lessThan20(val) {
    return val < 20
}

// filter is subset of the array
var valuesLessThan20 = values.filter(lessThan20)

console.log(valuesLessThan20)