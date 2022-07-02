const student = [
    {id: 21, name: 'Omor sdfunny'},
    {id: 76, name: 'Omor suhjny'},
    {id: 14, name: ' sunny'},
    {id: 34, name: 'Omor sunny'},
];

const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id < 40);
const biggeron = student.find(s => s.id>40);
console.log( biggeron);