//app quản lý sinh vien 
// show ds sinh vien
// thêm sinh vien
// save va exit

var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showStudents(){
    for(var student of students)
        console.log(student.name, '--' , student.age,'tuổi', '-- Nghề nghiệp: ', student.job);
}

function createStudent(){
    var name = readlineSync.question('Nhap name: ');
    var age = readlineSync.question('Nhap age: ');
    var student = {
        name: name,
        age: parseInt(age)
    }
    students.push(student);
}

function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, {encoding: 'utf8'} );
}

function showMenu(){
    console.log('Bấm 1 để show ds sinh viên');
    console.log('Bấm 2 để tạo thêm sinh viên');
    console.log('Bấm 3 để save sinh viên và exit');

    var option = readlineSync.question('> ');

    switch(option){
        case '1':       
            showStudents();
            showMenu();
            break;
        case '2':
            createStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Something wrong :(( \n');
            
            showMenu();
            break;
    }

}

function main(){
    loadData();
    showMenu();
    
}

main();