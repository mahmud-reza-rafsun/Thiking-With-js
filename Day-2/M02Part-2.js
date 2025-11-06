const course1 = { name: "Programmig Hero" };
const course2 = { name: "Next Level Web Dev" }


const course = [
    [course1, "Level1"],
    [course2, "Level2"]
]


const map = new Map(course);

// map.set(course1, {courseId: "Level1"})
// map.set(course2, {courseId: "Level2"})
// map.delete(course1);

// map.forEach((value, key) => (key.name = "shohoz sorol simple " + key.name));

// console.log([...map.keys()]);

// for(let key of map.keys()){
//     key.name = "shohoz sorol simple " + key.name
// };

console.log(map);