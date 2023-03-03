(function(){
    var launchButtons = document.querySelectorAll('.launch-games');

    var frame = document.querySelector('.game-frame');
    var tabs = frame.querySelector('.game-tabs');
    var tabButtons = tabs.querySelectorAll('.tab-button');

    var switchTabTime = 300;
    var gameMain = {
        open: false
    }

    var audio = {
        correct: new Audio('./audio/correct.wav'),
        wrong: new Audio('./audio/wrong.wav'),
        congratulations: new Audio('./audio/congratulations.wav'),
        click: new Audio('./audio/click.wav'),
    }

    for (var i = 0; i < launchButtons.length; i++)
        launchButtons[i].addEventListener('click', launchGames)

    for (var i = 0; i < tabButtons.length; i++)
        tabButtons[i].addEventListener('click', switchTab.bind(window, tabButtons[i]))

    assignSortID(gameData.food);
    assignSortID(gameData.ingridients);
    assignSortID(gameData.nationalities);
    assignSortID(gameData.nationalitiesGroup);
    assignSortID(gameData.plants);
    assignSortID(gameData.regions);

    gameData.puzzle.forEach(puzzle => assignSortID(puzzle.pieces));

    function switchTab(button, obj) {

        if (gameMain.switching)
            return;

        playSound('click');

        gameMain.switching = true;

        // debugger

        var tabID, currentTab, gameName;

        if (button) {
            tabID = button.getAttribute('data-tab-id');
            currentTab = button.parentNode;
            gameName = button.getAttribute('data-game-name');
        } else {
            tabID = obj.id;
            currentTab = obj.currentTab;

            if (obj.gameName)
                gameName = obj.gameName;
        }
        
        var nextTab = tabs.querySelector('.games-tab[data-tab="' + tabID + '"]');

        var overflow = document.createElement('div');
        overflow.className = 'overflow';
        document.body.appendChild(overflow);

        setTimeout(() => {
            overflow.classList.add('show');
        }, 10);

        setTimeout(() => {

            delete gameMain.switching;

            if (tabID == -1)
                closeGames();

            if (!currentTab.hasAttribute('data-tab'))
                currentTab = currentTab.parentNode;

            currentTab.classList.remove('active');
            overflow.classList.remove('show');

            if (tabID != -1)
                nextTab.classList.add('active');

            if (gameName) {
                if (gameName == 'correlateFood')
                    correlateFood(button)
                else if (gameName == 'suits')
                    suits(button)
                else if (gameName == 'guessFood')
                    guessFood(button)
                else if (gameName == 'coockingGame')
                    coockingGame(button)
                else if (gameName == 'puzzleGame')
                    puzzleGame(button)
                else if (gameName == 'guessPlants')
                    guessPlants(button)
            }

        }, switchTabTime + 10);

        setTimeout(() => {
            overflow.parentNode.removeChild(overflow);
        }, switchTabTime * 2 + 10);
    }

    function launchGames() {

        if (gameMain.block)
            return;

        gameMain.block = true;

        var mainGameTab = tabs.querySelector('.games-tab[data-tab="0"]');
        var currentAppTab = this.parentNode;
        var appButtons = document.body.querySelectorAll('.surgut_menu_btn');

        gameMain.currentAppTab = currentAppTab;
        gameMain.appButtons = appButtons;

        switchTab(null, {
            id: 0, 
            currentTab: mainGameTab
        });

        setTimeout(() => {
            frame.style.display = 'block';

            currentAppTab.style.display = 'none';

            appButtons.forEach(btn => {
                if (btn.offsetParent) {
                    btn.setAttribute('data-hide', true);
                    btn.style.display = 'none'
                }
            });

            delete gameMain.block;
        }, 300)
    }

    function closeGames() {
        frame.style.display = 'none';

        gameMain.currentAppTab.style.display = 'block';

        gameMain.appButtons.forEach(btn => {
            if (btn.hasAttribute('data-hide')) {
                btn.style.display = 'flex';
                btn.removeAttribute('data-hide');
            }
        });

        delete gameMain.block;
    }

    function correlateFood(button) {

        var gameTab = tabs.querySelector('.games-tab[data-tab="100"]');
        var objectName = button.getAttribute('data-object-name');
        var objectID = button.getAttribute('data-object-id');
        var gamePreset = gameData[objectName];
        var gameObject = gamePreset.filter(el => el.id == objectID)[0];

        console.log('gameObject: ', gameObject)

        // create UI
        var selectName = document.createElement('div');
        selectName.className = 'game-select-name';
        gameTab.appendChild(selectName);

        var nameLabel = document.createElement('span');
        nameLabel.className = 'name-label';
        nameLabel.textContent = 'Вы выбрали:';
        selectName.appendChild(nameLabel);

        var nameValue = document.createElement('span');
        nameValue.className = 'name-value';
        nameValue.textContent = gameObject.name;
        selectName.appendChild(nameValue);

        var gameRules = document.createElement('div');
        gameRules.className = 'game-rules';
        gameRules.textContent = 'Правила игры';
        gameTab.appendChild(gameRules);

        // Game UI
        var nationalitiesContainer = createElement('div', 'nationalitis-container', gameTab);

        for (var i = 0; i < gameObject.nationalities.length; i++) {
            var nationIndex = gameObject.nationalities[i];
            var nation = gameData.nationalities[nationIndex];
            console.log('nation: ', nation)

            var nationUI = createElement('div', 'nation', nationalitiesContainer);
            var nationImage = createElement('div', 'nation-image', nationUI);
            nationImage.style.backgroundImage = 'url(' + nation.image + ')';

            var nationName = createElement('div', 'nation-name', nationUI);
            nationName.textContent = nation.name;
        }

        var scrollContainer = createElement('div', 'scroll-container', gameTab);
        var scrollItems = createElement('div', 'scroll-items', scrollContainer);
        var scrollUp = createElement('div', 'scroll-up', scrollContainer); 
        scrollUp.textContent = 'up';
        var scrollDown = createElement('div', 'scroll-down', scrollContainer);
        scrollDown.textContent = 'down';

        scrollUp.addEventListener('click', function(){
            scrollItems.scrollTop -= 140;
        });

        scrollDown.addEventListener('click', function(){
            scrollItems.scrollTop += 140;

            correctChoice(true)
        });

        for (var i = 0; i < gameData.food.length; i++) {
            var food = gameData.food[i];

            var foodUI = createElement('div', 'item', scrollItems);
            var foodImage = createElement('div', 'item-image', foodUI);
            foodImage.style.backgroundImage = 'url(' + food.image + ')';

            var foodName = createElement('div', 'item-name', foodUI);
            foodName.textContent = food.name;
        }

        console.log('gameObject: ', gameObject)
        console.log('gamePreset: ', gamePreset)
    }

    function suits(button) {
        var gameTab = tabs.querySelector('.games-tab[data-tab="100"]');

        // remove existed game ui 
        clearGameTab();

        var container = createElement('div', 'game-container', gameTab);
        var objectName = button.getAttribute('data-object-name');
        var gamePreset = gameData[objectName];
        var tabHead = gameTab.querySelector('.tab-head');

        var game = {
            nations: []
        };

        tabHead.textContent = 'Кто во что одет?';

        // tab ui
        var previousTabBtn = createElement('div', 'previous-tab-btn', container);
        var mainTabBtn = createElement('div', 'main-tab-btn', container);

        previousTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 0, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        mainTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 0, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        // create UI
        var gameHint = createElement('div', 'game-hint', container);

        var hintLabel = createElement('div', 'hint-label', gameHint);
        hintLabel.textContent = 'Выбери национальность из списка';

        var gameRules = document.createElement('div');
        gameRules.className = 'game-rules';
        gameRules.textContent = 'Найди подходящую пару в национальном костюме';
        container.appendChild(gameRules);

        // Game ui
        // Suits
        var suitScrollContainer = createElement('div', 'suit-scroll-container', container);
        var suitScrollItems = createElement('div', 'scroll-items', suitScrollContainer);
        var suitScrollUp = createElement('div', 'scroll-up', suitScrollContainer); 
        var suitScrollDown = createElement('div', 'scroll-down', suitScrollContainer);

        suitScrollUp.classList.add('disabled')

        suitScrollUp.addEventListener('click', function(){

            if (suitScrollUp.classList.contains('disabled'))
                return

            playSound('click');

            suitScrollItems.scrollTop -= 215;

            scrollBehaviour(suitScrollItems, suitScrollUp, suitScrollDown, 'up');
        });

        suitScrollDown.addEventListener('click', function(){

            if (suitScrollDown.classList.contains('disabled'))
                return

            playSound('click');

            suitScrollItems.scrollTop += 215;

            scrollBehaviour(suitScrollItems, suitScrollUp, suitScrollDown, 'down');
        });

        // nation names
        var nameScrollContainer = createElement('div', 'name-scroll-container', container);
        var nameScrollItems = createElement('div', 'scroll-items', nameScrollContainer);
        var nameScrollUp = createElement('div', 'scroll-up', nameScrollContainer); 
        var nameScrollDown = createElement('div', 'scroll-down', nameScrollContainer);

        nameScrollUp.addEventListener('click', function(){
            nameScrollItems.scrollTop -= 140;
        });

        nameScrollDown.addEventListener('click', function(){
            nameScrollItems.scrollTop += 140;
        });

        for (var i = 0; i < gamePreset.length; i++) {
            var nation = gamePreset[i];

            game.nations.push({
                id: nation.id
            });
            
            var nationContainer = createElement('div', 'nation-container', suitScrollItems);
            nationContainer.setAttribute('data-id', nation.id);
            var nationImage = createElement('div', 'nation-image', nationContainer);
            nationImage.style.backgroundImage = 'url(' + nation.image + ')';
            nationContainer.addEventListener('click', selectNation.bind(nationContainer, 1));
        }

        sortID(gamePreset);

        for (var i = 0; i < gamePreset.length; i++) {
            var nation = gamePreset[i];

            var nationName = createElement('div', 'nation-name', nameScrollItems);
            nationName.setAttribute('data-id', nation.id);
            nationName.textContent = nation.name;

            nationName.addEventListener('click', selectNation.bind(nationName, 0));
        }

        // sortID

        function selectNation(type) {

            if (game.block)
                return;

            var nationID = this.getAttribute('data-id');
            game.selectedNation = game.nations.find(el => el.id == nationID);

            if (game.selectedNation.correct)
                return;

            // Remove selection
            var images = suitScrollItems.querySelectorAll('.nation-container');
            var names = nameScrollItems.querySelectorAll('.nation-name');
            
            // Select name
            if (type == 0) {

                game.selectedName = {
                    id: game.selectedNation.id,
                    ui: this
                }

                if (game.selectedImage) {
                    if (game.selectedImage.id == game.selectedName.id) {

                        playSound('correct');

                        game.selectedNation.correct = true;

                        game.selectedImage.ui.classList.add('correct');
                        game.selectedName.ui.classList.add('correct');

                        game.selectedImage.ui.classList.remove('selected');
                        names.forEach(name => name.classList.remove('selected'));

                        delete game.selectedImage;
                        delete game.selectedName;

                        // game.nations.forEach(el => el.correct = true);

                        if (!game.nations.find(el => !el.correct))
                            endGame(true, '', restartGame, toMainCallback);

                        return;

                    } else {
                        game.block = true;

                        playSound('wrong');

                        game.selectedName.ui.classList.add('wrong');

                        setTimeout(() => {
                            delete game.block;

                            game.selectedName.ui.classList.remove('wrong');
                            game.selectedName.ui.classList.remove('selected');

                            delete game.selectedName;

                        }, 1000);
                    }
                }
                
                names.forEach(name => name.classList.remove('selected'));
                this.classList.add('selected');
            
            // Select image
            } else {

                game.selectedImage = {
                    id: game.selectedNation.id,
                    ui: this
                };

                if (game.selectedName) {
                    if (game.selectedName.id == game.selectedImage.id) {
                        game.selectedNation.correct = true;

                        playSound('correct');

                        game.selectedName.ui.classList.add('correct');
                        game.selectedImage.ui.classList.add('correct');

                        game.selectedName.ui.classList.remove('selected');
                        images.forEach(image => image.classList.remove('selected'));

                        delete game.selectedName;
                        delete game.selectedImage;

                        // game.nations.forEach(el => el.correct = true);

                        if (!game.nations.find(el => !el.correct))
                            endGame(true, 'Все собрано верно!', restartGame, toMainCallback);

                        return;

                    } else {
                        game.block = true;

                        playSound('wrong');

                        game.selectedImage.ui.classList.add('wrong');

                        setTimeout(() => {
                            delete game.block;

                            game.selectedImage.ui.classList.remove('wrong');
                            game.selectedImage.ui.classList.remove('selected');

                            delete game.selectedImage;

                        }, 1000);
                    }
                }
                
                images.forEach(image => image.classList.remove('selected'));
                this.classList.add('selected');
            }
        }

        function restartGame() {

            var images = suitScrollItems.querySelectorAll('.nation-container');
            var names = nameScrollItems.querySelectorAll('.nation-name');

            images.forEach(el => {
                el.classList.remove('correct');
                el.classList.remove('wrong');
                el.classList.remove('selected');
            });

            names.forEach(el => {
                el.classList.remove('correct');
                el.classList.remove('wrong');
                el.classList.remove('selected');
            });

            game.nations.forEach(el => delete el.correct);

            delete game.selectedName;
            delete game.selectedImage;
            delete game.selectedNation;

            suitScrollItems.scrollTop = 0;
            nameScrollItems.scrollTop = 0;
        }

        function toMainCallback() {
            switchTab(null, {
                id: 0,
                currentTab: gameTab
            });

            setTimeout(() => {
                container.parentNode.removeChild(container);
            }, 300);

            delete game;
        }
    }

    // guessFood();

    function guessFood(button) {
        var gameTab = tabs.querySelector('.games-tab[data-tab="100"]');

        // remove existed game ui 
        clearGameTab();

        var container = createElement('div', 'game-container', gameTab);
        var objectName = button.getAttribute('data-object-name');
        var gamePreset = gameData[objectName];
        var objID = button.getAttribute('data-object-id');
        var nationalitiesGroup = gamePreset.find(el => el.id == objID);
        var nationalities = [];
        var gameFood = [];

        // Fill nationalities relevant for this nationalitiesGroup
        for (var i = 0; i < nationalitiesGroup.nationalities.length; i++) {
            var nationID = nationalitiesGroup.nationalities[i];

            for (var j = 0; j < gameData.nationalities.length; j++)
                if (gameData.nationalities[j].id == nationID)
                    nationalities.push(gameData.nationalities[j]);
        }

        var tabHead = gameTab.querySelector('.tab-head');
        tabHead.classList.add('tab-form-a');
        tabHead.textContent = 'Угадай национальное блюдо';

        var game = {
            food: {}
        };

        nationalitiesGroup.food.forEach(food => game.food[food] = {});

        // Form game food array
        for (var i = 0; i < gameData.food.length; i++) {
            for (var j = 0; j < nationalitiesGroup.food.length; j++)
                if (gameData.food[i].id ==  nationalitiesGroup.food[j])
                    gameFood.push(gameData.food[i]);

            for (var j = 0; j < nationalitiesGroup.wrongFood.length; j++)
                if (gameData.food[i].id ==  nationalitiesGroup.wrongFood[j])
                    gameFood.push(gameData.food[i]);
        }


        // console.log('nationalitiesGroup: ', nationalitiesGroup)

        // tab ui
        var previousTabBtn = createElement('div', 'previous-tab-btn', container);
        var mainTabBtn = createElement('div', 'main-tab-btn', container);

        previousTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 3, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        mainTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 0, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        // create UI
        var gameHint = createElement('div', 'game-hint', container);

        var hintLabel = createElement('div', 'hint-label', gameHint);
        hintLabel.textContent = 'Вы выбрали:';

        var hintContent = createElement('div', 'hint-content', gameHint);
        hintContent.textContent = nationalitiesGroup.name;

        var gameRules = document.createElement('div');
        gameRules.className = 'game-rules';
        gameRules.textContent = 'Соотнеси народы и их национальные блюда';
        container.appendChild(gameRules);

        // game ui
        var groupUI = createElement('div', 'nationalities-group', container);

        if (nationalities.length == 1) {
            gameRules.textContent = 'Cоотнеси народ и его национальные блюда';
            groupUI.classList.add('one-nation');
        }

        for (var i = 0; i < nationalities.length; i++) {
            var nation = nationalities[i];

            var item = createElement('div', 'nation-container', groupUI);
            var nationImage = createElement('div', 'nation-image', item);
            nationImage.style.backgroundImage = 'url(' + nation.image + ')';

            var nationName = createElement('div', 'nation-name', item);
            nationName.textContent = nation.name;
        }

        // Food
        var foodScrollContainer = createElement('div', 'food-scroll-container', container);
        var foodScrollItems = createElement('div', 'scroll-items', foodScrollContainer);
        var foodScrollUp = createElement('div', 'scroll-up', foodScrollContainer); 
        var foodScrollDown = createElement('div', 'scroll-down', foodScrollContainer);

        foodScrollUp.classList.add('disabled')

        foodScrollUp.addEventListener('click', function(){

            if (foodScrollUp.classList.contains('disabled'))
                return

            foodScrollItems.scrollTop -= 215;

            playSound('click');

            scrollBehaviour(foodScrollItems, foodScrollUp, foodScrollDown, 'up');
        });

        foodScrollDown.addEventListener('click', function(){
            if (foodScrollDown.classList.contains('disabled'))
                return

            foodScrollItems.scrollTop += 215;

            playSound('click');

            scrollBehaviour(foodScrollItems, foodScrollUp, foodScrollDown, 'down');
        });

        sortID(gameFood);

        for (var i = 0; i < gameFood.length; i++) {
            var food = gameFood[i];
            
            var foodContainer = createElement('div', 'food-container', foodScrollItems);
            foodContainer.setAttribute('data-id', food.id);

            var foodImage = createElement('div', 'food-image', foodContainer);
            foodImage.style.backgroundImage = 'url(' + food.image + ')';

            var foodName = createElement('div', 'food-name', foodContainer);
            foodName.setAttribute('data-id', food.id);
            foodName.textContent = food.name;

            foodContainer.addEventListener('click', selectFood.bind(foodContainer));
        }

        if (foodScrollItems.clientHeight == foodScrollItems.scrollHeight) {
            foodScrollUp.style.display = 'none';
            foodScrollDown.style.display = 'none';
        }

        function selectFood() {

            var foodID = this.getAttribute('data-id');

            if (game.block || (game.food[foodID] && game.food[foodID].correct)) 
                return;

            game.block = true;

            if (!game.food[foodID]) {

                playSound('wrong');

                this.classList.add('wrong');

                setTimeout(() => {

                    delete game.block;

                    this.classList.remove('wrong');
                }, 1000)

                return;
            }

            if (game.food[foodID] && !game.food[foodID].correct) {
                game.food[foodID].correct = true;

                playSound('correct');

                this.classList.add('correct');

                delete game.block;

                var isGameFinished = true;

                for (var key in game.food)
                    if (!game.food[key].correct)
                        isGameFinished = false;

                if (isGameFinished) {

                    endGame(true, 'Все собрано верно', restartGame, toMainCallback);
                }
            }

        }

        function restartGame() {
            switchTab(null, {
                id: 3,
                currentTab: gameTab
            });
        }

        function toMainCallback() {

            switchTab(null, {
                id: 0,
                currentTab: gameTab
            });

            setTimeout(() => {
                container.parentNode.removeChild(container);
            }, 300);

            delete game;
        }
    }

    // guessPlants();

    function guessPlants(button) {
        var gameTab = tabs.querySelector('.games-tab[data-tab="100"]');

        // remove existed game ui 
        clearGameTab();

        var container = createElement('div', 'game-container', gameTab);
        var objectName = 'regions';
        var gamePreset = gameData[objectName];
        var objID = button.getAttribute('data-object-id');
        // var objID = 0;
        var region = gamePreset.find(el => el.id == objID);
        var plants = [];
        var gamePlants = [];

        // Fill nationalities relevant for this nationalitiesGroup
        for (var i = 0; i < region.plants.length; i++) {
            var plantID = region.plants[i];

            for (var j = 0; j < gameData.plants.length; j++)
                if (gameData.plants[j].id == plantID)
                    plants.push(gameData.plants[j]);
        }

        var tabHead = gameTab.querySelector('.tab-head');
        tabHead.textContent = 'Что где растет?';

        var game = {
            plants: {}
        };

        region.plants.forEach(plant => game.plants[plant] = {});

        // Form game food array
        for (var i = 0; i < gameData.plants.length; i++) {
            for (var j = 0; j < region.plants.length; j++)
                if (gameData.plants[i].id ==  region.plants[j])
                    gamePlants.push(gameData.plants[i]);

            for (var j = 0; j < region.wrongPlants.length; j++)
                if (gameData.plants[i].id ==  region.wrongPlants[j])
                    gamePlants.push(gameData.plants[i]);
        }

        // tab ui
        var previousTabBtn = createElement('div', 'previous-tab-btn', container);
        var mainTabBtn = createElement('div', 'main-tab-btn', container);

        previousTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 6, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        mainTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 0, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        // create UI
        var gameHint = createElement('div', 'game-hint', container);

        var hintLabel = createElement('div', 'hint-label', gameHint);
        hintLabel.textContent = 'Вы выбрали:';

        var hintContent = createElement('div', 'hint-content', gameHint);
        hintContent.textContent = region.name;

        var gameRules = document.createElement('div');
        gameRules.className = 'game-rules';
        gameRules.textContent = 'Выбери культурное растение, свойственное региону';
        container.appendChild(gameRules);

        // game ui
        var regionName = createElement('div', 'region-name', container);
        regionName.textContent = region.name;

        // Food
        var plantsScrollContainer = createElement('div', 'food-scroll-container', container);
        var plantsScrollItems = createElement('div', 'scroll-items', plantsScrollContainer);

        sortID(gamePlants);

        for (var i = 0; i < gamePlants.length; i++) {
            var plant = gamePlants[i];
            
            var plantContainer = createElement('div', 'food-container', plantsScrollItems);
            plantContainer.setAttribute('data-id', plant.id);

            var foodImage = createElement('div', 'food-image', plantContainer);
            foodImage.style.backgroundImage = 'url(' + plant.image + ')';

            var foodName = createElement('div', 'food-name', plantContainer);
            foodName.setAttribute('data-id', plant.id);
            foodName.textContent = plant.name;

            plantContainer.addEventListener('click', selectFood.bind(plantContainer));
        }

        function selectFood() {

            var plantID = this.getAttribute('data-id');

            if (game.block || (game.plants[plantID] && game.plants[plantID].correct)) 
                return;

            game.block = true;

            if (!game.plants[plantID]) {

                playSound('wrong');

                this.classList.add('wrong');

                setTimeout(() => {

                    this.classList.remove('wrong');

                    delete game.block;
                }, 1000)

                return;
            }

            if (game.plants[plantID] && !game.plants[plantID].correct) {
                game.plants[plantID].correct = true;

                playSound('correct');

                this.classList.add('correct');

                var isGameFinished = true;

                for (var key in game.plants)
                    if (!game.plants[key].correct)
                        isGameFinished = false;

                if (isGameFinished) {

                    endGame(true, 'Все собрано верно', restartGame, toMainCallback);
                }

                delete game.block;
            }

        }

        function restartGame() {
            switchTab(null, {
                id: 6,
                currentTab: gameTab
            });
        }

        function toMainCallback() {

            switchTab(null, {
                id: 0,
                currentTab: gameTab
            });

            setTimeout(() => {
                container.parentNode.removeChild(container);
            }, 300);

            delete game;
        }
    }

    // coockingGame();

    function coockingGame(button) {
        var gameTab = tabs.querySelector('.games-tab[data-tab="100"]');

        // remove existed game ui 
        clearGameTab();

        var container = createElement('div', 'game-container', gameTab);
        var objectName = button.getAttribute('data-object-name');
        // var objectName = 'food';
        var gamePreset = gameData[objectName];
        var objID = button.getAttribute('data-object-id');
        // var objID = 6;
        var food = gamePreset.find(el => el.id == objID);
        var ingridients = [];

        var tabHead = gameTab.querySelector('.tab-head');
        tabHead.classList.add('tab-form-b');
        tabHead.textContent = 'Сам себе поваренок';

        var game = {
            ingridients: {}
        };

        food.ingridients.forEach(ing => game.ingridients[ing] = {});

        // Form game ingridients array
        for (var i = 0; i < gameData.ingridients.length; i++) {
            for (var j = 0; j < food.ingridients.length; j++)
                if (gameData.ingridients[i].id ==  food.ingridients[j])
                    ingridients.push(gameData.ingridients[i]);

            for (var j = 0; j < food.wrongIngridients.length; j++)
                if (gameData.ingridients[i].id == food.wrongIngridients[j])
                    ingridients.push(gameData.ingridients[i]);
        }

        // tab ui
        var previousTabBtn = createElement('div', 'previous-tab-btn', container);
        var mainTabBtn = createElement('div', 'main-tab-btn', container);

        previousTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 4, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        mainTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 0, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        // create UI
        var gameHint = createElement('div', 'game-hint hint-form-a', container);

        var hintLabel = createElement('div', 'hint-label', gameHint);
        hintLabel.textContent = 'Вы выбрали:';

        var hintContent = createElement('div', 'hint-content', gameHint);
        hintContent.textContent = food.name;

        var gameRules = createElement('div', 'game-rules rules-form-a', container);
        gameRules.textContent = 'Подбери правильные ингредиенты к блюду';

        // game ui

        var foodUI = createElement('div', 'food-prepare-container', container);
        var foodImage = createElement('div', 'food-image', foodUI);
        foodImage.style.backgroundImage = 'url(' + food.image + ')';

        var foodName = createElement('div', 'food-name', foodUI);
        foodName.textContent = food.name;

        // Food
        var foodScrollContainer = createElement('div', 'food-scroll-container', container);
        var foodScrollItems = createElement('div', 'scroll-items', foodScrollContainer);
        var foodScrollUp = createElement('div', 'scroll-up', foodScrollContainer); 
        var foodScrollDown = createElement('div', 'scroll-down', foodScrollContainer);

        foodScrollUp.classList.add('disabled');

        foodScrollUp.addEventListener('click', function(){

            if (foodScrollUp.classList.contains('disabled'))
                return

            playSound('click');

            foodScrollItems.scrollTop -= 215;

            scrollBehaviour(foodScrollItems, foodScrollUp, foodScrollDown, 'up');
        });

        foodScrollDown.addEventListener('click', function(){

            if (foodScrollDown.classList.contains('disabled'))
                return

            playSound('click');

            foodScrollItems.scrollTop += 215;

            scrollBehaviour(foodScrollItems, foodScrollUp, foodScrollDown, 'down');
            
        });

        sortID(ingridients);

        for (var i = 0; i < ingridients.length; i++) {
            var ingridient = ingridients[i];
            
            var foodContainer = createElement('div', 'food-container', foodScrollItems);
            foodContainer.setAttribute('data-id', ingridient.id);

            var foodImage = createElement('div', 'food-image', foodContainer);
            foodImage.style.backgroundImage = 'url(' + ingridient.image + ')';

            var foodName = createElement('div', 'food-name', foodContainer);
            foodName.setAttribute('data-id', food.id);
            foodName.textContent = ingridient.name;

            foodContainer.addEventListener('click', selectIngridient.bind(foodContainer));
        }

        if (foodScrollItems.clientHeight == foodScrollItems.scrollHeight) {
            foodScrollUp.style.display = 'none';
            foodScrollDown.style.display = 'none';
        }

        function selectIngridient() {

            if (game.block)
                return;

            game.block = true;

            var ingridientID = this.getAttribute('data-id');

            if (!game.ingridients[ingridientID]) {

                playSound('wrong');

                this.classList.add('wrong');

                setTimeout(() => {

                    this.classList.remove('wrong');

                    delete game.block;
                }, 1000)

                return;
            }

            if (game.ingridients[ingridientID] && !game.ingridients[ingridientID].correct) {
                game.ingridients[ingridientID].correct = true;

                playSound('correct');

                this.classList.add('correct');

                var isGameFinished = true;

                for (var key in game.ingridients)
                    if (!game.ingridients[key].correct)
                        isGameFinished = false;

                if (isGameFinished) {

                    endGame(true, 'Все собрано верно', restartGame, toMainCallback);
                }
            }

            setTimeout(() => {
                delete game.block;
            }, 500)

        }

        function restartGame() {
            switchTab(null, {
                id: 4,
                currentTab: gameTab
            });
        }

        function toMainCallback() {

            switchTab(null, {
                id: 0,
                currentTab: gameTab
            });

            setTimeout(() => {
                container.parentNode.removeChild(container);
            }, 300);

            delete game;
        }
    }

    // puzzleGame();

    function puzzleGame(button) {
        var gameTab = tabs.querySelector('.games-tab[data-tab="100"]');

        // remove existed game ui 
        clearGameTab();

        var container = createElement('div', 'game-container', gameTab);
        var objectName = 'puzzle';
        var gamePreset = gameData[objectName];
        var objID = button.getAttribute('data-object-id');
        var puzzle = gamePreset.find(el => el.id == objID);
        var pieces = puzzle.pieces;

        var tabHead = gameTab.querySelector('.tab-head');
        tabHead.classList.add('tab-form-b');
        tabHead.textContent = 'Культура пазла';

        var game = {};

        // tab ui
        var previousTabBtn = createElement('div', 'previous-tab-btn', container);
        var mainTabBtn = createElement('div', 'main-tab-btn', container);

        previousTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 5, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        mainTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 0, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        // create UI
        var gameHint = createElement('div', 'game-hint', container);

        var hintLabel = createElement('div', 'hint-label', gameHint);
        hintLabel.textContent = 'Собери пазл';

        var reference = createElement('div', 'puzzle-reference', container);
        reference.style.backgroundImage = 'url(' + puzzle.image + ')';

        var puzzleContainer = createElement('div', 'puzzle-container', container);
        var puzzleBackground = createElement('div', 'puzzle-bg', puzzleContainer);
        var puzzleGrid = createElement('div', 'puzzle-template', puzzleContainer);

        puzzleBackground.style.backgroundImage = 'url(' + puzzle.image + ')';

        var piecesScrollContainer = createElement('div', 'pieces-scroll-container', container);
        var piecesScrollItems = createElement('div', 'scroll-items', piecesScrollContainer);
        var piecesScrollUp = createElement('div', 'scroll-up', piecesScrollContainer); 
        var piecesScrollDown = createElement('div', 'scroll-down', piecesScrollContainer);

        piecesScrollUp.classList.add('disabled')

        piecesScrollUp.addEventListener('click', function(){

            if (piecesScrollUp.classList.contains('disabled'))
                return

            playSound('click');

            piecesScrollItems.scrollTop -= 200;

            scrollBehaviour(piecesScrollItems, piecesScrollUp, piecesScrollDown, 'up');
            
        });

        piecesScrollDown.addEventListener('click', function(){

            if (piecesScrollDown.classList.contains('disabled'))
                return

            playSound('click');

            piecesScrollItems.scrollTop += 200;

            scrollBehaviour(piecesScrollItems, piecesScrollUp, piecesScrollDown, 'down');
            
        });

        var topCoord = 0;
        var leftCoord = 0;

        sortID(pieces, 'id');

        for (var i = 0; i < pieces.length; i++) {
            var piece = pieces[i];

            if (i % 5 == 0 && i != 0) {
                topCoord += 208;
                leftCoord = 0;
            }

            var puzzplePiece = createElement('div', 'puzzle-grid-piece', puzzleGrid);
            puzzplePiece.style.backgroundImage = 'url(' + piece.image + ')';
            puzzplePiece.setAttribute('data-id', piece.id);

            puzzplePiece.style.left = piece.place.x + 'px';
            puzzplePiece.style.top = piece.place.y + 'px';
            puzzplePiece.style.width = piece.place.width + 'px';
            puzzplePiece.style.height = piece.place.height + 'px';

            var placeUI = createElement('div', 'puzzle-place', puzzleGrid);
            placeUI.setAttribute('data-id', piece.id);
            // placeUI.textContent = piece.id;

            placeUI.style.left = leftCoord + 'px';
            placeUI.style.top = topCoord + 'px';

            placeUI.addEventListener('click', setPiece.bind(placeUI));

            leftCoord += 180;

        }

        sortID(pieces);

        for (var i = 0; i < pieces.length; i++) {
            var piece = pieces[i];

            var pieceUI = createElement('div', 'puzzle-piece', piecesScrollItems);
            pieceUI.setAttribute('data-id', piece.id);
            pieceUI.style.backgroundImage = 'url(' + piece.image + ')';
            pieceUI.style.width = 180 + 'px';
            pieceUI.style.height = 180 + 'px';
            pieceUI.style.backgroundSize = piece.place.width / 2 + 'px ' + piece.place.height / 2 + 'px';
            // pieceUI.textContent = piece.id;

            pieceUI.addEventListener('click', selectPiece.bind(pieceUI));

        }

        if (piecesScrollItems.scrollHeight - piecesScrollItems.scrollTop >= piecesScrollItems.clientHeight)
            piecesScrollUp.classList.add('disabled');

        if (piecesScrollItems.scrollHeight - piecesScrollItems.scrollTop <= piecesScrollItems.clientHeight)
            piecesScrollDown.classList.add('disabled');

        function selectPiece() {
            if (game.block)
                return;

            if (this.classList.contains('on-place'))
                return

            var pieces = container.querySelectorAll('.puzzle-piece');
            pieces.forEach(piece => piece.classList.remove('selected'));

            this.classList.add('selected');

            var pieceID = this.getAttribute('data-id');

            game.selectedPiece = {
                id: pieceID,
                ui: this
            }
        }

        function setPiece() {
            if (game.block || !game.selectedPiece)
                return;

            var pieceID = this.getAttribute('data-id');
            var gridPiece = puzzleGrid.querySelector('.puzzle-grid-piece[data-id="' + pieceID + '"]');
            var scrollPieces = container.querySelectorAll('.puzzle-piece');
            var isGameFinished = true;
            

            if (pieceID == game.selectedPiece.id) {

                scrollPieces.forEach(piece => piece.classList.remove('selected'));

                game.selectedPiece.ui.classList.add('on-place');

                playSound('correct');

                gridPiece.classList.add('active');

                delete game.selectedPiece;

                scrollPieces.forEach(piece => !piece.classList.contains('on-place') ? isGameFinished = false : '');

                if (isGameFinished)
                    endGame(true, 'Все собрано верно', restartGame, toMainCallback, { url: puzzle.image, name: puzzle.name, author: puzzle.author });
                
            } else {
                game.block = true;

                playSound('wrong');

                game.selectedPiece.ui.classList.add('wrong');

                setTimeout(() => {
                    game.selectedPiece.ui.classList.remove('wrong');

                    delete game.block;
                    
                }, 1000)
            }
        }

        function restartGame() {
            switchTab(null, {
                id: 5,
                currentTab: gameTab
            });
        }

        function toMainCallback() {

            switchTab(null, {
                id: 0,
                currentTab: gameTab
            });

            setTimeout(() => {
                container.parentNode.removeChild(container);
            }, 300);
        }
    }

    // plants();

    function plants(button) {
        var gameTab = tabs.querySelector('.games-tab[data-tab="100"]');

        // remove existed game ui 
        clearGameTab();

        var container = createElement('div', 'game-container', gameTab);
        // var objectName = button.getAttribute('data-object-name');
        var objectName = 'regions'
        var regions = gameData[objectName];
        var plants = gameData.plants;
        var tabHead = gameTab.querySelector('.tab-head');

        var game = {
            pairs: []
        };

        for (var i = 0; i < plants.length; i++) {
            var plant = plants[i];

            var obj = {
                name: plant.name,
                id: plant.id,
                regions: {}
            };

            for (var j = 0; j < regions.length; j++)
                for (var k = 0; k < regions[j].plants.length; k++) 
                    if (regions[j].plants[k] == obj.id) {
                        game.pairs.push({
                            regionID: regions[j].id,
                            plantID: plant.id
                        })
                    }
                        // obj.regions[regions[j].id] = {
                        //     plantID: regions[j].plants[k]
                        // }
            
            // game.plants.push(obj)
        }

        // console.log('game.plants: ', game)

        tabHead.textContent = 'Что и где растет?';

        // tab ui
        var previousTabBtn = createElement('div', 'previous-tab-btn', container);
        var mainTabBtn = createElement('div', 'main-tab-btn', container);

        previousTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 0, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        mainTabBtn.addEventListener('click', () => {
            switchTab(null, {
                id: 0, 
                currentTab: gameTab
            });

            setTimeout(() => clearGameTab(), 300);
        });

        // create UI
        var gameHint = createElement('div', 'game-hint hint-form-a', container);

        var hintLabel = createElement('div', 'hint-label', gameHint);
        hintLabel.textContent = 'Выбери регион:';

        var gameRules = createElement('div', 'game-rules rules-form-a', container);
        gameRules.textContent = 'Выбери культурное растение, свойственное региону';

        // regions
        var regionsScrollContainer = createElement('div', 'regions-scroll-container', container);
        var regionsScrollItems = createElement('div', 'scroll-items', regionsScrollContainer);

        for (var i = 0; i < regions.length; i++) {
            var region = regions[i];

            var regionName = createElement('div', 'region-name', regionsScrollItems);
            regionName.setAttribute('data-id', region.id);
            regionName.textContent = region.name;

            regionName.addEventListener('click', selectRegion.bind(regionName));
        }

        // Plants
        var plantsScrollContainer = createElement('div', 'plants-scroll-container', container);
        var plantsScrollItems = createElement('div', 'scroll-items', plantsScrollContainer);

        for (var i = 0; i < plants.length; i++) {
            var plant = plants[i];
            
            var plantContainer = createElement('div', 'plant-container', plantsScrollItems);
            plantContainer.setAttribute('data-id', plant.id);

            var plantImage = createElement('div', 'plant-image', plantContainer);
            plantImage.style.backgroundImage = 'url(' + plant.image + ')';

            var plantName = createElement('div', 'plant-name', plantContainer);
            plantName.setAttribute('data-id', plant.id);
            plantName.textContent = plant.name;

            var progress = createElement('div', 'select-progress', plantContainer);

            plantContainer.addEventListener('click', selectPlant.bind(plantContainer));
        }

        function selectRegion() {
            if (game.block || this.classList.contains('correct'))
                return

            game.selectedRegion = {
                id: this.getAttribute('data-id'),
                ui: this
            }

            var regions = gameTab.querySelectorAll('.region-name');
            var plants = gameTab.querySelectorAll('.plant-container');

            regions.forEach(region => region.classList.remove('selected'));

            if (game.selectedPlant) {
                var pair = lookingForPair(game.selectedRegion.id, game.selectedPlant.id);

                if (!pair) {
                    game.block = true;

                    this.classList.add('wrong');

                    delete game.selectedRegion;

                    setTimeout(() => {
                        delete game.block;

                        this.classList.remove('wrong');
                    }, 1000);

                    return;

                } else {
                    if (!pair.correct) {
                        pair.correct = true;

                        var plantTotalRegions = game.pairs.filter(pair => pair.plantID == game.selectedPlant.id).length;
                        var plantCorrectRegions = game.pairs.filter(pair => pair.plantID == game.selectedPlant.id && pair.correct).length;
                        var plantWidth = 175;
                        var step = 100 / plantTotalRegions;

                        game.selectedPlant.progressUI.style.width = 100 - step * (plantTotalRegions - plantCorrectRegions) + '%';

                        if (isRegionComplete(game.selectedRegion.id)) {
                            this.classList.add('correct');
                            this.classList.remove('selected');

                            if (plantTotalRegions == plantCorrectRegions) {
                                game.selectedPlant.ui.classList.add('correct')
                                game.selectedPlant.progressUI.style.display = 'none';

                                game.selectedPlant.ui.classList.remove('selected');

                                delete game.selectedPlant;
                                delete game.selectedRegion;
                            }

                            if (isGameFinished()){
                                endGame(true, 'Все собрано верно!', restartGame, toMainCallback);
                            }
                            
                            // console.log('region click: region is complete');
                            
                            return;
                        }

                        if (plantTotalRegions == plantCorrectRegions) {
                            game.selectedPlant.ui.classList.add('correct')
                            game.selectedPlant.progressUI.style.display = 'none';
                            
                            game.selectedPlant.ui.classList.remove('selected');
                            this.classList.remove('selected');

                            delete game.selectedPlant;
                            delete game.selectedRegion;

                            if (isGameFinished()){
                                endGame(true, 'Все собрано верно!', restartGame, toMainCallback);
                            }

                            // console.log('region click: plant is complete');

                            return;
                        }

                    } else {
                        game.block = true;

                        game.selectedPlant.progressUI.classList.add('blink');

                        this.classList.remove('selected');

                        delete game.selectedRegion;

                        setTimeout(() => {

                            game.selectedPlant.progressUI.classList.remove('blink');

                            delete game.block;
                        }, 300);

                        return;
                    }
                }
            }

            this.classList.add('selected');

        }

        function selectPlant() {
            if (game.block || this.classList.contains('correct'))
                return

            game.selectedPlant = {
                id: this.getAttribute('data-id'),
                ui: this,
                progressUI: this.querySelector('.select-progress')
            }

            var regions = gameTab.querySelectorAll('.region-name');
            var plants = gameTab.querySelectorAll('.plant-container');

            plants.forEach(plant => plant.classList.remove('selected'));

            if (game.selectedRegion) {
                var pair = lookingForPair(game.selectedRegion.id, game.selectedPlant.id);

                if (!pair) {
                    game.block = true;

                    this.classList.add('wrong');

                    delete game.selectedPlant;

                    setTimeout(() => {
                        delete game.block;

                        this.classList.remove('wrong');
                    }, 1000);

                    return;

                } else {
                    if (!pair.correct) {
                        pair.correct = true;

                        var plantTotalRegions = game.pairs.filter(pair => pair.plantID == game.selectedPlant.id).length;
                        var plantCorrectRegions = game.pairs.filter(pair => pair.plantID == game.selectedPlant.id && pair.correct).length;
                        var plantWidth = 175;
                        var step = 100 / plantTotalRegions;

                        game.selectedPlant.progressUI.style.width = 100 - step * (plantTotalRegions - plantCorrectRegions) + '%';

                        if (isRegionComplete(game.selectedRegion.id)) {
                            game.selectedRegion.ui.classList.add('correct');
                            game.selectedRegion.ui.classList.remove('selected');

                            this.classList.remove('selected');

                            if (plantTotalRegions == plantCorrectRegions) {
                                game.selectedPlant.progressUI.style.display = 'none';
                                this.classList.remove('selected');
                                this.classList.add('correct');
                            }

                            delete game.selectedPlant;
                            delete game.selectedRegion;

                            if (isGameFinished()){
                                endGame(true, 'Все собрано верно!', restartGame, toMainCallback);
                            }

                            // console.log('plant click: region is complete');

                            return
                        }

                        if (plantTotalRegions == plantCorrectRegions) {
                            game.selectedPlant.ui.classList.add('correct')
                            game.selectedPlant.progressUI.style.display = 'none';

                            game.selectedPlant.ui.classList.remove('selected');
                            this.classList.remove('selected');

                            delete game.selectedPlant;

                            if (isGameFinished()){
                                endGame(true, 'Все собрано верно!', restartGame, toMainCallback);
                            }

                            // console.log('plant click: plant is complete');

                            return;
                        }

                    } else {

                        game.block = true;

                        this.classList.add('selected');

                        game.selectedPlant.progressUI.classList.add('blink');

                        setTimeout(() => {

                            game.selectedPlant.progressUI.classList.remove('blink');

                            delete game.block;
                        }, 300);

                        return;
                    }
                }
            }

            this.classList.add('selected');
        }

        function lookingForPair(regionID, plantID) {
            for (var i = 0; i < game.pairs.length; i++) {
                var pair = game.pairs[i];

                if (pair.regionID == regionID && pair.plantID == plantID)
                    return pair;
            }
            
            return null;
        }

        function isRegionComplete(regionID) {
            if (game.pairs.filter(pair => pair.regionID == regionID && !pair.correct).length)
                return false

            return true;
        }

        function isGameFinished() {

            if (game.pairs.filter(pair => !pair.correct).length)
                return false

            return true;
        }

        function restartGame() {
            var regions = gameTab.querySelectorAll('.region-name');
            var plants = gameTab.querySelectorAll('.plant-container');
            var progress = gameTab.querySelectorAll('.select-progress');

            regions.forEach(el => {
                el.classList.remove('correct');
                el.classList.remove('wrong');
                el.classList.remove('selected');
            });

            plants.forEach(el => {
                el.classList.remove('correct');
                el.classList.remove('wrong');
                el.classList.remove('selected');
            });

            progress.forEach(el => {
                el.style.display = 'unset';
                el.style.width = 0;
            });

            game.pairs.forEach(el => delete el.correct);

            delete game.selectedPlant;
            delete game.selectedRegion;
        }

        function toMainCallback() {
            switchTab(null, {
                id: 0,
                currentTab: gameTab
            });

            setTimeout(() => {
                container.parentNode.removeChild(container);
            }, 300);

            delete game;
        }
    }

    function clearGameTab() {
        var gameTab = tabs.querySelector('.games-tab[data-tab="100"]');

        var tabHead = gameTab.querySelector('.tab-head');

        tabHead.classList.remove('tab-form-a', 'tab-form-b');

        // remove existed game ui 
        var gameInterface = gameTab.querySelector('.game-container');
        if (gameInterface)
            gameInterface.parentNode.removeChild(gameInterface);
    }

    function endGame(win, content, callback, callbackToMain, puzzle) {
        var overflow = createElement('div', 'game-end-overflow', document.body);

        playSound('congratulations');

        var process = false;
        
        setTimeout(() => {
            overflow.classList.add('show');
        }, 10);

        var confettiInterval = setInterval(() => {
            var rdmX = Math.random() * 1920;
            var rdmY = Math.random() * 1200;

            createConfetti({ x: rdmX, y: rdmY});
        }, 800)

        createConfetti({ x: 550, y: 500});
        createConfetti({ x: 1250, y: 500});

        var popup = createElement('div', 'game-end-popup', overflow);
        var popupMainText = createElement('div', 'game-end-popup-text', popup);
        var popupAdditionalText = createElement('div', 'game-end-popup-additional-text', popup);
        var playAgain = createElement('div', 'tab-button bg_a btn_pos_e', popup);
        playAgain.textContent = 'Играть еще раз';

        if (puzzle) {
            popup.classList.add('puzzle-end')

            var puzzleContainer = createElement('div', 'puzzle-end-container', popup);
            var puzzleImage = createElement('div', 'puzzle-end-image', puzzleContainer);
            var puzzleName = createElement('div', 'puzzle-end-name', puzzleContainer);
            var puzzleAuthor = createElement('div', 'puzzle-end-author', puzzleContainer);
            puzzleImage.style.backgroundImage = 'url(' + puzzle.url + ')';
            puzzleName.textContent = puzzle.name;
            puzzleAuthor.textContent = puzzle.author;
        }

        playAgain.addEventListener('click', function(){

            if (process)
                return;

            process = true;

            overflow.classList.remove('show');

            callback();
            clearInterval(confettiInterval);

            setTimeout(() => {
                overflow.parentNode.removeChild(overflow);
            }, 300);
        });

        var back = createElement('div', 'tab-button bg_b btn_pos_f', popup);
        back.setAttribute('data-tab-id', 0);
        back.textContent = 'На главную';

        back.addEventListener('click', function(){

            if (process)
                return;

            process = true;

            overflow.classList.remove('show');

            callbackToMain();
            clearInterval(confettiInterval);

            setTimeout(() => {
                overflow.parentNode.removeChild(overflow);
            }, 300);
        });

        if (win) {
            popupMainText.textContent = 'Отлично!';
            popupAdditionalText.textContent = content;
        }
    }

    function correctChoice() {
        var overflow = createElement('div', 'game-end-overflow', document.body);
        
        setTimeout(() => {
            overflow.classList.add('show');
        }, 10);

        var text = createElement('div', 'game-end-text', overflow);

        setTimeout(() => {
            text.classList.add('show');
        }, 300);

        setTimeout(() => {
            createConfetti({x: 350, y: 350});
            createConfetti({x: 580, y: 370});
        }, 400);

        setTimeout(() => {
            correctChoiceHide();
        }, 2000)

        text.innerHTML = 'Молодец! \n Все верно!';
    }

    function correctChoiceHide() {
        var overflow = document.querySelector('.game-end-overflow');

        overflow.classList.remove('show');

        setTimeout(() => {
            overflow.parentNode.removeChild(overflow);
        }, 300)

        
    }

    function createConfetti(pos) {

        var count = 20;
        var angle = 0;

        for (var i = 0; i < count; i++) {
            var confetti = createElement('div', 'confetti', document.body);
            confetti.style.left = pos.x + 'px';
            confetti.style.top = pos.y + 'px';

            var radius = Math.floor(Math.random() * (200 - 120)) + 120;

            var destPoint = {
                x: pos.x + radius * Math.cos(angle * (Math.PI / 180)),
                y: pos.y + radius * Math.sin(angle * (Math.PI / 180))
            }

            fireConfetti(confetti, destPoint);
            
            angle += 30;

        }

        function fireConfetti(confetti, destPos) {
            var appearTime = Math.floor(Math.random() * (150 - 10)) + 10;
            var colors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];
            var color = colors[Math.floor(Math.random() * colors.length - 1)];
            confetti.style.backgroundColor = color;

            setTimeout(() => {
                confetti.classList.add('show');

                confetti.style.left = destPos.x + 'px';
                confetti.style.top = destPos.y + 'px';

            }, appearTime);

            setTimeout(() => {
                confetti.classList.add('disappear');
            }, appearTime + 300);

            setTimeout(() => {
                confetti.addEventListener('transitionend', confetti.parentNode.removeChild(confetti));
            }, appearTime + 1200)
        }
    }

    function scrollBehaviour(scrollItems, scrollUp, scrollDown, direction, step) {

        if (direction == 'up') {

            scrollDown.classList.remove('disabled');

            if (scrollItems.scrollTop <= 100)
                scrollUp.classList.add('disabled');


        } else if (direction == 'down') {

            scrollUp.classList.remove('disabled');

            if (scrollItems.scrollHeight - (scrollItems.scrollTop + scrollItems.clientHeight) < 100)
                scrollDown.classList.add('disabled');
        }
    }

    function createElement(tagName, className, parentNode) {
        var element = document.createElement(tagName);
        element.className = className;
        parentNode.appendChild(element);

        return element;
    }

    function assignSortID(arr) {
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];

            obj.sortID = Math.floor(Math.random() * 1000);
        }
    }

    function sortID(arr, prop) {

        var propName = prop ? prop : 'sortID'

        arr.sort((a, b) => {
            if (a[propName] > b[propName])
                return 1
            else if (a[propName] < b[propName])
                return -1
            
            return 0
        })
    }

    function playSound(soundName) {

        if (!audio[soundName])
            return

        audio[soundName].pause();
        audio[soundName].currentTime = 0;
        audio[soundName].play();
    }
})();
