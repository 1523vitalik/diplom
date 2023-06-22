// уровни игры
var levels = [
  {
    table1: [
      ['ID', 'Фамилия', 'Имя','Отчество'],
      [1, 'Парашаков', 'Виталий','Вячеславович'],
      [2, 'Кохновец', 'Михаил','Николавевич'],
      [3, 'Жужгов', 'Дмитрий', 'Cергеевич']
    ],
    table2: [
      ['ID', 'Номер'],
      [1, '+79026360839'],
      [2, '+79346832312'],
      [3, '+79642842355']
    ],
    table3: [
      ['ID', 'Страна', 'город'],
      [1, 'Россия', 'Пермь'],
      [1, 'Россия', 'Москва'],
      [1, 'Россия', 'Екатеринбург']
    ],
    correctQuery: 'SELECT * FROM'
  },
    {
      table1: [
        ['author_id', 'name_author'],
        [1, 'Булгаков М.А.'],
        [2, 'Александр'],
        [3, 'Есенин С.А.'],
        [4, 'Пастернак Б.Л.'],
        [5, 'Лермонтов М.Ю.']
      ],
      table2: [
        ['genre_id', 'name_genre'],
        [1, 'Роман'],
        [2, 'Поэзия'],
        [2, 'Приключения']
      ],
      table3: [
        ['book_id', 'title','author_id','genre_id','price','amount'],
        [1, 'Мастер и Маргарита',1 , 1, 670.99, 3],
        [2, 'Белая гвардия', 1, 1, 540.50, 5],
        [3, 'Идиот', 2, 1, 460.00, 10],
        [4, 'Братья Карамазовы', 2, 1, 799.01 ,3],
        [5, 'Игрок',2 ,1, 480.50, 10],
        [6, 'Стихотворения и поэмы', 3, 2, 650.00, 15],
        [7, 'Черный человек',3 ,2, 570.20, 6],
        [8, 'Лирика', 4, 2, 518.99, 2]
      ],
      correctQuery: "SELECT title, name_author FROM author INNER JOIN book ON author.author_id=book.author_id"
    }
  ];
  
  // индекс текущего уровня
  var currentLevelIndex = 0;
  
  // DOM элементы
  var tables = document.querySelectorAll('.table');
  var codeInput = document.getElementById('code');
  var submitBtn = document.getElementById('submit-btn');
  var result = document.getElementById('result');
  var nextLevelBtn = document.getElementById('next-level-btn');
  
  
  // запуск игры
  init();
  
  // функции
  function init() {
    showTables(levels[currentLevelIndex]);
    addSubmitEvent();
  }
  
  function showTables(level) {
    tables.forEach(function(table, index) {
      var rows = level['table' + (index + 1)];
      var tableHtml = '';
      rows.forEach(function(row) {
        tableHtml += '<tr>';
        row.forEach(function(cell) {
          tableHtml += '<td>' + cell + '</td>';
        });
        tableHtml += '</tr>';
      });
      table.innerHTML = tableHtml;
    });
  }
  
  function addSubmitEvent() {
    submitBtn.addEventListener('click', function() {
      var userQuery = codeInput.value.trim();
      if (userQuery === levels[currentLevelIndex].correctQuery) {
        result.innerHTML = 'Поздравляю! Вы завершили уровень.';
        nextLevelBtn.classList.remove('hide');
      } else {
        result.innerHTML = 'Извините, ваш запрос неверен. Пробовать снова.';
        nextLevelBtn.classList.add('hide');
      }
    });
  }
  
  function goToNextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex < levels.length) {
      result.innerHTML = '';
      codeInput.value = '';
      showTables(levels[currentLevelIndex]);
      nextLevelBtn.classList.add('hide');
    } else {
      alert('Вы прошли все уровни!');
    }
  }
  
  // обработчики событий
  nextLevelBtn.addEventListener('click', goToNextLevel);

  function goBack() {
    window.history.back();
  }
  