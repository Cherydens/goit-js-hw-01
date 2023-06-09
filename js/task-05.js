// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let country = String(prompt('Введите страну'));
country =
  country[0].toUpperCase() + country.slice(1, country.length).toLowerCase();

let deliveryPrice = 0;

switch (country) {
  case 'Null':
    console.log('Отменено пользователем!');
    break;

  case 'Китай':
    deliveryPrice = 100;
    console.log(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case 'Чили':
    deliveryPrice = 250;
    console.log(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case 'Австралия':
    deliveryPrice = 170;
    console.log(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case 'Индия':
    deliveryPrice = 80;
    console.log(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  case 'Ямайка':
    deliveryPrice = 120;
    console.log(`Доставка в ${country} будет стоить ${deliveryPrice} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
