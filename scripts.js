function incrementCounter(elementId, start, end) {
    let counter = start;
    let interval = setInterval(() => {
        if (counter >= end) {
            clearInterval(interval);
        } else {
            counter++;
            document.getElementById(elementId).innerText = counter + "+";
        }
    }, 100);
}

incrementCounter("counter1", 25, 95);
incrementCounter("counter2", 30, 120);
incrementCounter("counter3", 45, 135);