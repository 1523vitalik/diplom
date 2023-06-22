// Определение уровней игры
const levels = [
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'"],
      tableNames3: ['person','full_name','country','birth_date'],
      tableNames4:['persons','movies'],
      question:'Вывести все личные данные создателей фильмов',
      instruction:'Результат запроса должен содержать все данные таблицы persons',
      sqlQuery: 'SELECT * FROM persons',
      image:'img/answar_1.png',
      type:'I.Простые запросы на выборку данных'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'"],
      tableNames3: ['person','full_name','country','birth_date','movie','year'],
      tableNames4:['movies','persons'],
      question:'Вывести в алфавитном порядке список всех фильмов и годы их выхода на экран.',
      instruction:'Результат запроса должен содержать название фильма и год выхода на экран.',
      sqlQuery: 'SELECT movie , year FROM movies ORDER BY movie',
      image:'img/answar_2.png',
      type:'I.Простые запросы на выборку данных'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'"],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','1999','1998','1997'],
      tableNames4:['movies','persons'],
      question:'Найти фильмы, которые вышли на экраны после 1999 года, и вывести их в хронологическом порядке.',
      instruction:'Использовать сравнение. Результат запроса должен содержать название фильма, год выхода на экран, страну производства фильма.',
      sqlQuery: 'SELECT movie , year , country FROM movies WHERE year > 1999 ORDER BY year',
      image:'img/answar_3.png',
      type:'I.Простые запросы на выборку данных'
    },
      {
        tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL'],
        tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'"],
        tableNames3: ['person','full_name','country','birth_date','country','movie','year','1950-01-01','1960-01-01','1970-01','1960-02-03'],
        tableNames4:['movies','persons'],
        question:'Вывести всех создателей фильмов, которые родились с 1950 по 1960 годы.',
        instruction:'Использовать принадлежность к диапазону. Результат запроса должен содержать имя фамилию создателя и дату его рождения.',
        sqlQuery: "SELECT full_name , birth_date FROM persons WHERE birth_date BETWEEN ' 1950-01-01 ' AND ' 1960-01-01 '",
        image:'img/answar_4.png',
        type:'I.Простые запросы на выборку данных'
      },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'",'(',')'],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','1985','1987','1988','1989'],
      tableNames4:['movies','persons'],
      question:'Вывести названия фильмов, которые вышли на экран в 1985, 1987, 1988, 1989.',
      instruction:'Использовать вхождение в множество. Результат запроса должен содержать название фильма и год его выхода на экран.',
      sqlQuery: 'SELECT movie, year FROM movies WHERE year IN ( 1985 , 1987 , 1988 , 1989 )',
      image:'img/answar_5.png',
      type:'I.Простые запросы на выборку данных'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'"],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year'],
      tableNames4:['movies','persons'],
      question:'Найти всех персон, участвующих в создании фильмов, с именем Михаил.',
      instruction:'Использовать сравнение с образцом. Результат запроса должен содержать имя фамилию создателя.',
      sqlQuery: "SELECT full_name FROM persons WHERE full_name LIKE ' Михаил '",
      image:'img/answar_6.png',
      type:'I.Простые запросы на выборку данных'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL','IS'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'"],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year'],
      tableNames4:['movies','persons'],
      question:'Найти персон, у которых дата рождения неизвестна.',
      instruction:'Использовать сравнение с NULL-значением. Результат запроса должен содержать имя фамилию персоны и страну.',
      sqlQuery: 'SELECT full_name , country FROM persons WHERE birth_date IS NULL',
      image:'img/answar_7.png',
      type:'I.Простые запросы на выборку данных'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'"],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','genre','id_movie','id_genre'],
      tableNames4:['movies','persons','genres'],
      question:'Вывести список фильмов с указанием их жанра.',
      instruction:'Результат запроса должен содержать название фильма и название жанра.',
      sqlQuery: 'SELECT movie , genre FROM movies , genres WHERE movies . id_genre = genres . id_genre',
      image:'img/answar_8.png',
      type:'II.Выборка данных из нескольких таблиц'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'"],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','creature','id_movie','id_person'],
      tableNames4:['movies','persons','creators'],
      question:'Вывести упорядоченный список фильмов и его создателей с указанием характера их участия.',
      instruction:'Результат запроса должен содержать название фильма, год выхода фильма, имя фамилию персоны и характер участия в создании фильма. Выполнить сортировку по названию фильма в алфавитном порядке.',
      sqlQuery: 'SELECT movie , year , full_name , creature FROM movies , persons , creators WHERE creators . id_movie = movies . id_movie AND creators . id_person = persons . id_person ORDER BY movie',
      image:'img/answar_9.png',
      type:'II.Выборка данных из нескольких таблиц'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','OR','IN','LIKE','NULL'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'",'(',')','.'],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','creature','id_movie','id_person','role','Актер'],
      tableNames4:['movies','persons','creators'],
      question:'Вывести актеров фильмов, у которых не указана роль в создании фильма.',
      instruction:'Результат запроса должен содержать имя фамилию персоны и название фильма.',
      sqlQuery: "SELECT full_name , movie FROM movies , persons , creators WHERE creators . id_movie = movies . id_movie AND creators . id_person = persons . id_person AND creature = ' Актер ' AND role IS NULL",
      image:'img/answar_10.png',
      type:'II.Выборка данных из нескольких таблиц'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','GROUP BY','HAVING','SUM','AVG','MIN','MAX','COUNT'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'",'(',')'],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','duration'],
      tableNames4:['movies','persons'],
      question:'Найти среднюю продолжительность всех фильмов.',
      instruction:'Среднее значение рассчитывается с помощью функции AVG. ',
      sqlQuery: 'SELECT AVG ( duration ) FROM movies',
      image:'img/answar_11.png',
      type:'III.Итоговые запросы'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','GROUP BY','HAVING','SUM','AVG','MIN','MAX','COUNT'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'",'(',')','.'],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','film_studio'],
      tableNames4:['movies','persons'],
      question:'Найти количество кинофильмов, снятых каждой киностудией.',
      instruction:'Результат запроса должен содержать название киностудии и количество фильмов.',
      sqlQuery: 'SELECT film_studio , COUNT ( movie ) FROM movies GROUP BY film_studio',
      image:'img/answar_12.png',
      type:'III.Итоговые запросы'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','GROUP BY','HAVING','SUM','AVG','MIN','MAX','COUNT'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'",'(',')','.'],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','film_studio','id_genre','genre','1'],
      tableNames4:['movies','persons','genres'],
      question:'Найти количество фильмов каждого жанра.',
      instruction:'Результат запроса должен содержать название жанра и количество фильмов.',
      sqlQuery: 'SELECT genre , COUNT ( movie ) FROM genres , movies WHERE genres . id_genre = movies . id_genre GROUP BY genre',
      image:'img/answar_13.png',
      type:'III.Итоговые запросы'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','GROUP BY','HAVING','SUM','AVG','MIN','MAX','COUNT'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'",'(',')','.'],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','film_studio','id_genre','genre','1'],
      tableNames4:['movies','persons','genres'],
      question:'Найти жанры, по которым в базе данных представлен только один фильм.',
      instruction:'Результат запроса должен содержать название жанра.',
      sqlQuery: 'SELECT genre FROM genres , movies WHERE genres . id_genre = movies . id_genre GROUP BY genre HAVING COUNT ( movie ) = 1',
      image:'img/answar_14.png',
      type:'III.Итоговые запросы'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','GROUP BY','HAVING','SUM','AVG','MIN','MAX','COUNT'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'",'(',')','.'],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','film_studio','genre','birth_date','Брюс Уиллис'],
      tableNames4:['movies','persons','genres'],
      question:'Создать упорядоченный по дате рождения список создателей фильмов, которые родились раньше Брюса Уиллиса.',
      instruction:'Результат запроса должен содержать имя фамилию персоны и дату рождения. Создателей фильмов вывести в порядке возрастания их даты рождения.',
      sqlQuery: "SELECT full_name , birth_date FROM persons WHERE birth_date < ( SELECT birth_date FROM persons WHERE full_name = ' Брюс Уиллис ' ) ORDER BY birth_date",
      image:'img/answar_15.png',
      type:'IV.Вложенные запросы'
    },
    {
      tableNames: ['SELECT', 'DISTINCT','FROM','WHERE','ORDER BY','ASC','DESC','BETWEEN','NOT','AND','GROUP BY','HAVING','SUM','AVG','MIN','MAX','COUNT','MONTH'],
      tableNames2: ['_','%','=','<>','>','>=','<','<=','*',',',"'",'(',')','.'],
      tableNames3: ['person','full_name','country','birth_date','country','movie','year','film_studio','genre','birth_date','1','2','3'],
      tableNames4:['movies','persons','genres'],
      question:'Найти всех создателей фильмов, которые родились в марте.',
      instruction:'Использовать сравнение с образцом. Результат запроса должен содержать имя фамилию создателя и дату его рождения.',
      sqlQuery: 'SELECT full_name , birth_date FROM persons WHERE MONTH ( birth_date ) = 3',
      image:'img/answar_16.png',
      type:'V.Встроенные функции в запросах на выборку данных'
    },
  ];

var completedLevels = [];
let currentLevelIndex = 0;

function renderLevel(level) {
  const tableNames = level.tableNames;
  const tableNames2 = level.tableNames2;
  const tableNames3 = level.tableNames3;
  const tableNames4 = level.tableNames4;
  const board = $('.board');
  const list1 = $('<ul>').addClass('list1');
  const list2 = $('<ul>').addClass('list2');
  const list3 = $('<ul>').addClass('list3');
  const list4 = $('<ul>').addClass('list4');
  const selectedElements = [];

  $.each(tableNames, function(index, tableName) {
    const list1Item = $('<li>').text(tableName);
    list1.append(list1Item);

    list1Item.draggable({
      revert: 'invalid',
      helper: 'clone',
      start: function(event, ui) {
        selectedElements.push($(this).text());
      }
    });
  });
  $.each(tableNames2, function(index, tableName2) {
    const list2Item = $('<li>').text(tableName2);
    list2.append(list2Item);

    list2Item.draggable({
      revert: 'invalid',
      helper: 'clone',
      start: function(event, ui) {
        selectedElements.push($(this).text());
      }
    });
  });

  $.each(tableNames3, function(index, tableName3) {
    const list3Item = $('<li>').text(tableName3);
    list3.append(list3Item);

    list3Item.draggable({
      revert: 'invalid',
      helper: 'clone',
      start: function(event, ui) {
        selectedElements.push($(this).text());
      }
    });
  });
  $.each(tableNames4, function(index, tableName4) {
    const list4Item = $('<li>').text(tableName4);
    list4.append(list4Item);

    list4Item.draggable({
      revert: 'invalid',
      helper: 'clone',
      start: function(event, ui) {
        selectedElements.push($(this).text());
      }
    });
  });

  board.droppable({
    drop: function(event, ui) {
      const tableName = $(ui.draggable[0]).text();
      const inputValue = $('#input-value');

      const currentValue = inputValue.text();
      if (currentValue === '') {
        inputValue.text(tableName);
      } else {
        inputValue.text(currentValue + ' ' + tableName);
      }
    }
  });

  const inputContainer = $('<div>');
  const inputLabel = $('<label>').text('');
  const inputValue = $('<div>').prop('id', 'input-value');

  inputContainer.append(inputLabel, inputValue);
  board.append(`<h2 id="style-text">${level.type}</h2>`);
  board.append(`<h3 id="style-text">Задание ${currentLevelIndex + 1}</h3>`);
  board.append(`<p><strong>${level.question}</strong></p>`);
  board.append(`<p>Примечание. ${level.instruction}</p>`);
  board.append(list1, list2, list3, list4, inputContainer);
  board.append(`<button id="remove-last-button">Удалить слово</button>`);
  board.append(`<button id="submit-button">Проверить результат</button>`);
  board.append(`<button id="clear-input-button">Очистить все</button>`);

  $('#remove-last-button').click(function() {
    const currentValue = inputValue.text();
    const words = currentValue.split(' ');
    if (words.length > 0) {
      words.pop();
      inputValue.text(words.join(' '));
    }
  });

  $('#clear-input-button').click(function() {
    inputValue.text('');
  });

  $('#submit-button').on('click', function() {
    const input = inputValue.text();
    const modal = $('#myModal');
    const modalTitle = $('.modal-title');
    const modalBody = $('.modal-body');
    let isAnswerCorrect = false;

    if (input === level.sqlQuery) {
      modalTitle.text('Правильный ответ!');
      modalBody.html(`<img src="img/yes.gif">`);
      isAnswerCorrect = true;
    } else {
      modalTitle.text('Неправильный ответ! Попробуйте еще раз.');
      modalBody.html(`<img src="img/no.gif">`);
    }
    modal.show();
    setTimeout(() => {
      modal.hide();
      if (isAnswerCorrect) {
        const img = $('<img>').prop('src', level.image).attr('alt', `Картинка для задания ${currentLevelIndex + 1}`);
        board.empty().append(img);
        board.append(`<h3 id="style-text">Результат выполнения запроса по заданию ${currentLevelIndex + 1}</h3>`);

        setTimeout(() => {
          const button = $('<button id="submit-button">').text('Следующее задание');
          board.find('#submit-button').off('click').remove();
          board.append(button);
          button.on('click', function() {
            completedLevels.push(currentLevelIndex);

            if (currentLevelIndex === levels.length - 1) {
              var allOtherLevelsCompleted = true;
              for (var i = 0; i < levels.length - 1; i++) {
                if (!completedLevels.includes(i)) {
                  allOtherLevelsCompleted = false;
                  break;
                }
              }
              if (!allOtherLevelsCompleted) {
                alert('Вы должны выполнить все остальные уровни!');
                $('.level-button').eq(currentLevelIndex).addClass('completed');
                return;
              } else {
                completedLevels.push(currentLevelIndex);
                var completedMessage = 'Вы прошли все уровни:\n';
                for (var j = 0; j < completedLevels.length; j++) {
                  completedMessage += 'Уровень ' + (completedLevels[j] + 1) + '\n';
                }
                alert(completedMessage);
                return;
              }
            }

            if (currentLevelIndex < levels.length - 1) {
              currentLevelIndex++;
            }

            if (completedLevels.includes(currentLevelIndex)) {
              currentLevelIndex++;
            }

            for (var i = 0; i < levels.length; i++) {
              if (completedLevels.includes(i)) {
                $('.level-button').eq(i).addClass('completed');
                board.empty();
              }
            }

            renderLevel(levels[currentLevelIndex]);
            $('.level-button').removeClass('active');
            $('.level-button').eq(currentLevelIndex).addClass('active');
          });
        }, 2000);
      }
    }, 2000);
  });
}

for (let i = 0; i < levels.length; i++) {
  const button = $('<button>').text(`${i + 1}`);
  button.addClass('level-button');
  if (i === currentLevelIndex) {
    button.addClass('active');
  }
  button.on('click', function() {
    currentLevelIndex = i;
    $('.board').empty();
    renderLevel(levels[currentLevelIndex]);
    $('.level-button').removeClass('active');
    $(this).addClass('active');
  });
  button.insertBefore('.board');
}

renderLevel(levels[currentLevelIndex]);

function openModal() {
  const modal = window.open('tabl_modal.html', '', 'width=1000,height=600');
  modal.document.write('<link rel="stylesheet" type="text/css" href="">');
  modal.document.write('<div class="modal-content">');
  modal.document.write('<iframe src="tabl_modal.html" frameborder="0" width="100%" height="100%"></iframe>');
}
function openModal1() {
  const modal = window.open('teoria_modal.html', '', 'width=1000,height=600');
  modal.document.write('<link rel="stylesheet" type="text/css" href="">');
  modal.document.write('<div class="modal-content">');
  modal.document.write('<iframe src="teoria_modal.html" frameborder="0" width="100%" height="100%"></iframe>');
}