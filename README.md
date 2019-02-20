# be-latte

**css**
Используем 4 **пробела для отсутпа**
Куски своего кода необходимо комментировать `\* комментарий *\`

перед тем как начать выполнение задачи нужно с пулить себе изменения в мастер
```
git checkout master
git pull origin
```
Затем создать ветку
`git checkout -b login_№задачи`
Логин с гитхаба и номер задачи с issues

После проделанной работы вернитесь обратно в мастер. С пулить изменения себе. Замёржить со своей веткой
```
git pull origin
git checkout login_№задачи
git merge master
```
и разрешить конфликты. Только после этого отправлять на pull request
`git push origin login_№задачи`

Комментарии называем следующим образом
`git commit -m "НомерЗадачи ТексКомментария"`

Инструкция Андрея
---
Здраствуйте товарищи пишу пошаговую инструкцию

Для тех кто на Win начала работы нам понадобится Git Bash https://git-scm.com/downloads и XAMPP Control Panel https://www.apachefriends.org/ru/download.html

На этом этапе мы создаём ключ для подключения к репозиторию. Запускаем Git Bash вводим в терминал эту команду `$ ssh-keygen -t rsa -b 4096 -C "YOUR EMAIL"` нажимаем после этого 3 раза enter

Смотрим внимательно в консоль ищем сообщение которое начинается так `"Your public key has been saved in /c/Users/Андрей/.ssh/id_rsa.pub."` <-- Тут будет указан ВАШ ПУТЬ (Это важно) копируем его без точки

Вводим команду. Копируем сюда путь из 3 пункта `$ cat /c/Users/Андрей/.ssh/id_rsa.pub` <--Напоминаю здесь должен быть ваш путь из 3 пункта

Мы видим большой public ключ который нам необходимо скопировать в сайт https://github.com/settings/keys Открываем сайт нажимаем кнопку **New SSH key** в поле **Title** пишем его название например home в поле key копируем ключ из 5 пункта.

С помощью команды cd пропишите путь в котором будет находиться ваша деректива для локального репозитория пример команды: `$ cd /C/xampp/htdocs/`

Заходим в гит хаб в наш репозиторий https://github.com/iatudev/html-be-latte и нажимаем кнопку Clone or download в выпадающем окошечке выбираем Use SSH (ВАЖНО!) и копируем ссылку из строки в команду

`$ git clone` (полученная ссылка) жмём enter

Ура товарищи мы клонировали репозиторий себе далее мы переходим в путь репозитория `$ cd html-be-latte/`

Создаем себе ветку `//Одна ветка-одна задача`, название ветки должно отражать номер задачи, автора и краткое описание `("[author][issue_id][short_description]")` //Не смейте работать напрямую в master-ветке! `$ git checkout -b androo_#14`

Приступайте к работе ваши файлы все изменения записываются в вашу ветку.

Если вы добавили файлы которых небыло в проекте ранее введите команду `$ git add` .

Зафиксируйте изменения файлов с помощью команды

`$ git commit -m "#номер_задачи комментарий" мой пример $ git commit -m "#14 я сделал футер"`

Поссле работы отправляем файлы на репозиторий с помощью команды `$ git push origin` (название вашей ветки) мой пример `$ git push origin androo_#14`

Заходим на сайт гитхаба переходим в наш проект https://github.com/iatudev/html-be-latte вкладка <>code и создаём Pull requests

После создания **Pull requests** если всё прошло удачно вам предложать замерджить ветку с мастером нажимаете **Merge pull request**. Если нет достаём бубен и зовём фиксиков на помощь Если вы дошли до конца и всё сделали правильно вы тру ребята
