var fs = require('promise-fs');

//promise

//cách 1:
// fs.readFile('song1.txt', { encoding: 'utf8' })
// .then(function(song1){
//     console.log(song1);
// }).catch(function(error){
//     console.log(error);
// });

//cách 2: ngắn gọn hơn
function onDone(song){
    console.log(song);
}

function onError(error){
    console.log(error);
}

function readFilefs(path){
    return fs.readFile(path, { encoding: 'utf8' });
}

readFilefs('song1.txt')
.then(onDone)
.then(function(){
    return readFilefs('song2.txt');
}).then(onDone)
.catch(onError);