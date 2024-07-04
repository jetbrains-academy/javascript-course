let dayOfWeek = "Sunday"
let isWeekend
switch(dayOfWeek) {
    case "Saturday":
    case "Sunday":
        isWeekend = true
        break
    default: isWeekend = false
}
console.log(isWeekend)
