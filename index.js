// Task 1
let students = ['amir', 'zokir', 'ravshan', 'jamshud', 'alex']

let evenNames = []
let oddNames = []

students.forEach((names) => {
    if(names.length % 2 === 0) {
        evenNames.push(names)
    } else {
        oddNames.push(names)
    }
})

if(evenNames.length > oddNames.length) {
    console.log('Четных имен больше')
} else {
    console.log('Нечетных имен больше')
}



// Task 2
let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",

        "completed": true 

    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,

        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]

let a = {
    count: 0,
    arr: []
}

let b = {
    count: 0,
    arr: []
}

let activity = arr.map(work => work.completed)

activity.forEach((progress) => {
    if(progress === true) {
        a.arr.push(progress)
    } else if(progress === false) {
        b.arr.push(progress)
    } else {
        console.log("ERROR(")
    }
})

a.count = a.arr.length
b.count = b.arr.length

console.log(a.count, a.arr)
console.log(b.count, b.arr)