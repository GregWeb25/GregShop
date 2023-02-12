# GregShop
<h3>Краткое описание</h3>

<p>
Мой первый крупный проект. Интернет-магазин с широким функционалом, выполненный на современном стеке технологий.
</p>
<h3>Стэк технологий</h3>
<p>
 При разработке данного проекта использовались одни из самых передовых технологий как в клиентской, так и в серверной части.
</p>
<p>
 Клиентская часть написана при помощи библиотеки react.js, где все компоненты покрыты typescript, что помогает избежать потенциальных ошибок. Однако некоторые API и вспомогательные функции написаны на чистом javascript. В качестве менеджера состояний использовался mobx. Для создания запросов на сервер использовалась библиотека Axios. В процессе разработки для вёрстки было решено использовать фреймворк bootstrap и библиотеку react-bootstrap, данное решение значительно ускорило темпы работы, а также помогло соблюсти общий стиль пользовательского интерфейса.
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/imgs/front.png" />
</p>
<p>
 Серверная же часть была написана на node.js, а именно на фреймворке express.js. Базой данных для сайта интернет-магазина была выбрана postrgre, как одна из самых современных, но в то же время, при помощи PGAdmin данная бд становится очень понятной и наглядной. Для взаимодействия сервера и базы данных использовался пакет sequelize. Вследствии проделанной работы была реализована полноценная CRUD, а так же JWT авторизация связпнная с клиентской частью сайта.
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/imgs/back.png" />
</p>
<p>
 Ниже вы можете увидеть примерную схему базы данных.
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/db.png" />
</p>
<h3>Пользовательский интерфейс</h3>
<p>
Первым делом, заходя на сайт, пользователь видит главную страницу магазина, где слева размещается панель сортировки товаров. Центральную часть экрана занимает панель товаров, где можно найти изображение с кратким описанием для каждого из девайсов. Верхнюю часть экрана занимает панель навигации, в левой части которой расположен логотип магазина, являющейся ссылкой на главную страницу, а справа имеется кнопка, предлогающая пользователю войти в свой аккаунт.
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/main-page.png" />
</p>
<p>
На стронице входа в аккаунт имеются два поля, для ввода email и пароля, и кнопку для входа. При вводе email несуществующего пользователя или при вводе неверного пароля пользователь увидет соответствующее предупреждение. Ниже на странице пользователю предлагается создать аккаунт, если его ещё нет, там же есть ссыла на страницу регистрации.
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/login.png" />
</p>
<p>
Страница регистрации имеет ещё одно дополнительное поле - подтверждение пароля, если строка в нем не будет совпадать с паролем, регистрация не произойдет, а пользователь будет предупрежден об этом. 
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/registration.png" />
</p>
<p>
При входе в аккаунт пользователь может заметить, что на верхней панели появилась кнопка входа в корзину, а если он имеет права администратора, то появится кнопка входа в панель администратора. Страница корзины содержит в себе список товаров, добавленных в корзину данного пользователя, а ниже находится общая сумма заказа и кнопка оплаты. 
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/basket.png" />
</p>
<p>
Панель администратора имеет кнопку для добавления новых товаров и три панели. Панели отвечают за добавление и удаление типов и брендов товаров, также за назначение и снятие роли админа у пользователей. Пользователь с правами админа может не только пользоваться панелью администратора, он имеет возможность удалять товары с главной страницы и комментарии на страницах товаров.  
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/admin-panel.png" />
</p>
<p>
Ниже представлена форма добавления товара
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/creating-device.png" />
</p>
<p>
Панель фильтра товаров имеет такие разделы как: типы, бренды, фильтрация по цене и тип сартировка. Фильтр по цене позволяет выбрать наименьшую и наибольшую цену товаров, не позволяя выбрать невозможные значения. В разделе сортировки можно выбрать следующий из ёё типов: сперва товары с лучшим рейтингом, сперва самые дорогие, сперва самые дешевые.
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/filters.png" />
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/filter-by-cost.png" />
</p>
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/sorts.png" />
</p>
<p>
Каждый товар имеет собственную страницу, на каторый можно перейти, кликнув по товару на главной странице, либо на странице корзины. На данной странице имеется фото товара, его тип, бренд и название модели. Зарегистрированный пользователь может поставить оценку товару в панели оценок, выше можно увидить общий рейтинг товара. Ниже находится панель, на которой пользователь может найти цену товара и добавить его в корзину при помощи кнопки. На странице находится перечень характеристик товара. Внизу страницы зарегистрированные пользователи могут оставлять комментарии о товаре и отвечать на чужие комментарии.
<p align="center">
<img src="https://github.com/GregWeb25/GregShop/blob/main/screenshots/device-page.png" />
</p>
</p>
