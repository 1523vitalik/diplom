// уровни игры
var levels = [
    {
      table1: [
        ['ID', 'Имя', 'Фамилия'],
        [1, 'Антон', 'Смирнов'],
        [2, 'Александр', 'Петров'],
        [3, 'Сергей', 'Иванов']
      ],
      table2: [
        ['ID', 'Страна', 'город'],
        [1, 'Россия', 'Москва'],
        [2, 'Россия', 'Пермь'],
        [3, 'Россия', 'Екатеринбург']
      ],
      table3: [
        ['ID', 'Номер'],
        [1, '79999999'],
        [2, '79234234'],
        [3, '7934234234']
      ],
      correctQuery: 'SELECT * FROM'
    },
    {
      table1: [
        ['ID', 'Имя', 'Фамилия'],
        [1, '', ''],
        [2, '', ''],
        [3, '', '']
      ],
      table2: [
        ['ID', 'Номер'],
        [1, '79999999'],
        [2, '79234234'],
        [3, '7934234234']
      ],
      table3: [
        ['ID', 'Страна', 'город'],
        [1, '', ''],
        [2, '', ''],
        [3, '', ''],
      ],
      correctQuery: 'SELECT table1.*, table3.Phone FROM table1 JOIN table2 ON table1.ID = table2.ID JOIN table3 ON table2.ID = table3.ID WHERE table2.State = "CA"'
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
  