
function calculateTax(income, expenses) {
    if (income < expenses) {
        return "Invalid Input";
    }
    else {
        const result = (income - expenses) * 0.2;
        return result;
    }
}



function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email";
    } else {
        const result = email.split("@");
        const finalResult = result.join(" sent you an email from ");
        return finalResult;
    }
}


function checkDigitsInName(name) {
    if (/\d/.test(name) && /[a-zA-Z]/.test(name)) {
        return "true";
    }
    else if (Array.isArray(name)) {
        return "Invalid Input";
    }
    else if (/^[^a-zA-Z0-9]+$/.test(name)) {
        return "false";
    }
    else {
        return "false";
    }
}




function calculateFinalScore(obj) {
    const result = obj.testScore + obj.schoolGrade;
    if (result >= 60 && obj.isFFamily) {
        return "true";
    } else if (result === 80 && !obj.isFFamily) {
        return "true";
    } else if (typeof obj === "string") {
        return "Invalid Input";
    } else {
        return "false";
    }
}

function waitingTime(waitingTimes, serialNumber) {
    let sum = 0;
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    } else {

        for (let i = 0; i < waitingTimes.length; i++) {
            sum = sum + waitingTimes[i];
        }
        const averageTime = Math.round(sum / waitingTimes.length);
        const updatedSerialNumber = serialNumber - 1;
        const remainingPerson = Math.abs(updatedSerialNumber - waitingTimes.length);
        const actualTime = averageTime * remainingPerson;
        return actualTime;
    }
}

