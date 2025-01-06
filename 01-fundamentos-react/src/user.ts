interface User {
    name: string;
    bio: string;
    age: number;
}

function sumAges(users: User[]) {
    let sum = 0;
    for (const user of users) {
        sum += user.age;
    }
    return sum
}

const sumOfAllUserAges = sumAges([
    {name: 'Marco', bio: 'Hello, world!', age: 13} 
])

sumOfAllUserAges