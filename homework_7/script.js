function newPlaner() {

    let timetable = {};
    let time;
    let task;
    console.log(timetable);

    do {
        time = prompt("Введите время для планирования");
        task = prompt("Введите задачу для этого времени");
    
        if (time === null || task === null) {
            break;
        }
        timetable[time] = task;
        console.log(`timetable`, timetable);
    }

    while (time !== null || task !== null);
    
    return timetable;
}

newPlaner();

// console.log(typeof timetable.time);
console.log(newPlaner());