function countdown(number) {
    console.log(`${number}`);

    if (number === 0) {
        console.log("Time's up!");
        return;
    }

    setTimeout(() => {
        countdown(number - 1);
    }, 1000);
}

countdown(5);