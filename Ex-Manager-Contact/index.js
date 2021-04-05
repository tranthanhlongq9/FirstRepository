/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
 var fs=require('fs');
 var relineSync=require('readline-sync');
 
 var contacts=[];
 function loadData(){
   var dl=fs.readFileSync('./data.json');
   contacts=JSON.parse(dl);
 
 }
 function showData(contacts){
   for(var contact of contacts)
   console.log('id:',contact.id,', name:',contact.name,", phone:",contact.phone);
 }
 function nhap(){
   var contact={};
   var name=relineSync.question('name:');
   var phone=relineSync.question('phone:');
   contact.id=contacts.length+1;
   contact.name=name;
   contact.phone=parseInt(phone);
   contacts.push(contact);
 }
 function save(){
   var dl=JSON.stringify(contacts);
   fs.writeFileSync('./data.json',dl,{encoding: 'utf-8'});
 }
 
 //sửa số phone;
 function editInfo(){
   var idEdit=relineSync.question('nhập id cần sửa phone: ');
   idEdit=parseInt(idEdit);
   for(var i=0;i<contacts.length;i++)
   {
     if(contacts[i].id==idEdit)
     {
       var phoneNew=relineSync.question('nhập phone mới: ');
       contacts[i].phone=parseInt(phoneNew);
       save();
       break;
     }
   }
 }
 function deleteContact(){
   var idDelete=relineSync.question('nhập id cần xóa: ');
   idDelete=parseInt(idDelete);
   for(var i=0;i<contacts.length;i++)
   {
     if(contacts[i].id==idDelete)
     {
      // delete contacts[i];
      contacts.splice(i,1);
       save();
       break;
     }
   }
 }
 function searchContact(arr){
   var kq=[];
   var temp=relineSync.question('nhập thông tin muốn tìm: ');
   if(!isNaN(temp)){
      temp = Number(temp);
      
      for(x of arr){
        if(Number(x.phone).toString().indexOf(Number(temp).toString())>=0){
          
           kq.push(x);
           
        }
      }
      showData(kq);
   }else{
     temp = temp.toString();
     for(x of arr){
       if(x.name.toLowerCase().indexOf(temp.toLowerCase())>=0){
          kq.push(x);
       }
     }
     showData(kq);
   }
 }
 function menu(){
   console.log('----------------');
   console.log('1.nhập dữ liệu.');
   console.log('2.show data');
   console.log('3.save');
   console.log('4.sửa dữ liệu');
   console.log('5.xóa contact.');
   console.log('6.tìm kiếm.');
   console.log('0.exit');
 
   var option =-1;
   option=relineSync.question('>select choice: ');
   option=parseInt(option);
   switch(option){
     case 1:nhap();menu();break;
     case 2:showData(contacts);menu();break;
     case 3:save();menu();break;
     case 4:editInfo();menu();break;
      case 5:deleteContact();menu();break;
       case 6:searchContact(contacts);menu();break;
     case 0:break;
     default: console.log('wrong choosed.');
   }
 }
 function main(){
   
   loadData();
   menu();
 }
 main();
 