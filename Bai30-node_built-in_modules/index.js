var fs = require('fs');

var text = fs.readFileSync('song.txt', {encoding: 'utf-8'}); // đọc dữ liệu có trong file

console.log(text);

fs.writeFileSync('song-2.txt','somthing....'); // viết thêm dữ liệu vào file
