let heartRate = 165
let message
if (heartRate <= 120){
    message = "Easy"
} else if (heartRate > 120 && heartRate <= 155){
    message = "Moderate"
} else {
    message = "Hard"
}
console.log(message)
