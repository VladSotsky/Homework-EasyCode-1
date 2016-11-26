alert("Добрый день!Сегодня мы будем составлять вашу карточку пользователя!");
let name;
let lastName;
let dateOfBirth ;
let skillDev;
name=prompt("Как вас зовут?");
alert ("Очень приятно " + name);
lastName=prompt("Введите вашу фамилию.");
alert ("Очень хорошо!");
dateOfBirth=prompt("Введите год вашего рождения.");
skillDev=prompt("Оцените ваш уровень программирования.");
let user = [("Имя:"+name),("\nФамилия:"+lastName),("\nДата рождения: "+dateOfBirth),("\nУровень навыков:"+skillDev)];
alert ("Ваша карточка!\n"+ user);

alert ("Теперь возьмем данные вашего друга!");
let friendName;
let friendLastName;
let friendDateOfBirth;
let friendSkillDev;
friendName=prompt("Введите имя вашего друга!");
friendLastName=prompt("Введите фамилию вашего друга.");
friendDateOfBirth=prompt("Введите дату рождения друга.");
friendSkillDev=prompt("Оцените скилл вашего друга!");
let friendUser=[("Имя:"+friendName),("\nФамилия:"+friendLastName),("\nДата рождения: "+friendDateOfBirth),("\nУровень навыков:"+friendSkillDev)];
alert  ("Вот карточка вашего друга!\n"+friendUser);

alert ("И напоследок вывел две карточки в консоль!")
let objectUser={objectUser : user}
let objectFriendUser={objectFriendUser :friendUser }
console.log(objectUser,objectFriendUser);
