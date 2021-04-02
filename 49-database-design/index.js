var classes = [
    {
        id: 1,
        nameClass: '12A',
        teacher: 1
    },
    {
        id: 2,
        nameClass: '11A',
        teacher: 3
    },
    {
        id: 3,
        nameClass: '10A',
        teacher: 2
    }
];

var teachers = [
    {
        id: 1,
        nameTeacher: 'Thanh',
        age: 30
    },
    {
        id: 2,
        nameTeacher: 'Huong',
        age: 28
    },
    {
        id: 3,
        nameTeacher: 'Mai',
        age: 33
    }
];

var students = [
    { id: 1, name: 'Anh', age: 17, class: 1 },
    { id: 2, name: 'Quynh', age: 17, class: 2 },
    { id: 3, name: 'Nam', age: 17, class: 1 },
    { id: 4, name: 'Cuong', age: 17, class: 1 },
    { id: 5, name: 'Hung', age: 17, class: 2 }
];

function getStudentsInClass(className){
    var classObj = classes.find(function(x){
        return x.nameClass === className;
    });

    var getStudents = students.filter(function(student){
        return student.class === classObj.id;
    })

    return getStudents;
}

var studentsInClass = getStudentsInClass('12A');

console.log(studentsInClass);