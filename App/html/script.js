let buttons = document.querySelectorAll('.surgut_menu_btn');
//let buttons = document.querySelectorAll('.buttons div');
let now = document.querySelectorAll('.tab');
let tab = document.querySelectorAll('.tab');
let icons = document.querySelectorAll('.icon');
let body = document.querySelector('body');
let swap = document.querySelector('.swap');
let icon = document.querySelector('.icon');
let fish = document.querySelectorAll('.fish');
let fish1 = document.querySelectorAll('.fan_1');
let fish2 = document.querySelectorAll('.fan_2');
let fish3 = document.querySelectorAll('.fan_3');
// let fish4 = document.querySelectorAll('.fan_4');
let btns_hide = document.querySelector('.btns_hide');
let inac = document.querySelector('.swap_inactive');
let tabBlack = document.querySelector('.ta_black');
let main_btns = document.querySelectorAll('.btn_1_i');
let greyBg = document.querySelector('.greyBg');

let enableFishes = true;
let fishesInterval;
let enableClouds = true;
let cloudsInterval;

var dialog_form_type = {
	icon_form_oldsurgut: 1,
	about_form_oldsurgut: 2,
	icon_form_celsurgut: 3,
	person_table_form_celsurgut: 4,
  };

//body.addEventListener('contextmenu',function(e){
//	e.preventDefault();
//	return false;
//});

// hide and show cursor
	
document.addEventListener('keypress', (event) => {
  	if ( event.keyName = 'h') {
  		body.classList.toggle('hideCursor');
  	}
});

// end hide and show cursor

(function () { 
    // let minutes = true;
    // let interval = minutes ? время_до_появления_заставки : 1000;  //35000
	//Проверка на простой производится 3 раза, с учетом интервала из конфига
	let IDLE_TIMEOUT = 3; 
	let interval = время_до_появления_заставки_сек*100000/IDLE_TIMEOUT
    let idleCounter = 0;

    document.onmousemove = document.onkeypress = function () {
        idleCounter = 0;
    };

    document.onclick = document.onkeypress = function () {
        idleCounter = 0;
    };

	for (let inner_text of document.querySelectorAll('.inner_text')) {
		inner_text.onscroll = document.onkeypress = function () {
			idleCounter = 0;
		};
	}

	for (let inner_text of document.querySelectorAll('.inner_text_celsurgut')) {
		inner_text.onscroll = document.onkeypress = function () {
			idleCounter = 0;
		};
	}

    window.setInterval(function () {
        // if (++idleCounter >= IDLE_TIMEOUT) {
			// stopFishes();
			// stopClouds();
			// hideAllTabs();
			// showTabBlack();
        // }
		if (++idleCounter == IDLE_TIMEOUT) {
			stopFishes();
			stopClouds();
			hideAllTabs();
			showTabBlack();
        }
	}, interval);
	

	//ВРЕМЕННО, перейти на нужную вкладку
	
	//скрыть черное окно
	tabBlackClick();

	//нажать на кнопку
	var btn = document.getElementById('surgut_1956_1979');
	var evt = new Event('click');
	btn.dispatchEvent(evt); // evt.target = btn;
	menuButtonClick(evt);
	

}());

tabBlack.addEventListener('click', tabBlackClick);
showTabBlack();

btns_hide.style.display = 'none';

for (let btn of buttons) {
	btn.addEventListener('click', menuButtonClick);
}

for ( let icon of icons ) {
	icon.addEventListener('click', iconClick);
}

// Скрывает черный экран, инициализирует презентацию
function tabBlackClick(e) {

	placeMenuButtons(document.getElementById('surgut_VI_XVI'));

	// click block

	let blocker = document.querySelector('.blocker');

	blocker.style.display = 'block';

	// end click block

	let backgroundDiv = document.getElementById('backgroundDiv');

	tab[0].style.display = 'block';

	tab[0].classList.add('showTabs');
	tab[0].addEventListener('animationend',function(){
		tab[0].classList.remove('showTabs');
	})

	tabBlack.classList.add('hideTabs');
	tabBlack.addEventListener('animationend',()=>{
		tabBlack.style.display = 'none';

	})

	greyBg.classList.remove('greyHide');
    greyBg.classList.remove('greyActive');

    for ( let i = 1; i < tab.length; i++ ) {
		tab[i].style = 'opacity: 0; display: none;'
	}

	for (let i = 0; i < icons.length; i++ ) {
		icons[i].style = 'opacity: 1; display: block;';
	}

	setTimeout(()=>{
		blocker.style.display = 'none';
		backgroundDiv.style.display = 'block';
		tab[0].style = 'opacity: 1; display: block;'
	},500);

	setTimeout(function(){
		tabBlack.classList.remove('hideTabs');
		tabBlack.classList.remove('showTabs');
		tabBlack.style.display = 'none';
	},1000);

	if(enableFishes)
	{
		startFishes();
	}

	if(enableClouds)
	{
		startClouds();
	}
}

// расставить кнопки
function placeMenuButtons (clickButton) {

	let clickButtonId = clickButton.getAttribute('id');

	let rule = [
		{clickId:'surgut_VI_XVI', activeId: 'surgut_VI_XVI', visibleId:['btn_info_main','surgut_VI_XVI','surgut_XVI_XIX','surgut_1_XX','surgut_2_XX',], backgroundDivClass: 'backgroundOldSurgut'  },
		{clickId:'surgut_XVI_XIX', activeId: 'surgut_XVI_XIX', visibleId:['btn_info_main','surgut_VI_XVI','surgut_XVI_XIX','surgut_1_XX','surgut_2_XX',], backgroundDivClass: 'backgroundOldSurgut'},
		{clickId:'surgut_1_XX', activeId: 'surgut_1_XX', visibleId:['btn_info_main','surgut_VI_XVI','surgut_XVI_XIX','surgut_1_XX','surgut_2_XX',], backgroundDivClass: 'backgroundOldSurgut'},
		{clickId:'surgut_2_XX', activeId: 'surgut_2_XX', visibleId:['btn_info_main','surgut_VI_XVI','surgut_XVI_XIX','surgut_1_XX','surgut_2_XX','surgut_celnyy',], backgroundDivClass: 'backgroundOldSurgut'},
		{clickId:'surgut_celnyy', activeId: 'surgut_1956_1979', visibleId:['surgut_person_1956_1979','surgut_1956_1979','surgut_1980_1991','surgut_1992_2020','back_surgut_2_XX',], backgroundDivClass: 'backgroundCelSurgut'},
		{clickId:'surgut_1956_1979', activeId: 'surgut_1956_1979', visibleId:['surgut_person_1956_1979','surgut_1956_1979','surgut_1980_1991','surgut_1992_2020','back_surgut_2_XX',], backgroundDivClass: 'backgroundCelSurgut'},
		{clickId:'surgut_1980_1991', activeId: 'surgut_1980_1991', visibleId:['surgut_person_1980_1991','surgut_1956_1979','surgut_1980_1991','surgut_1992_2020','back_surgut_2_XX',], backgroundDivClass: 'backgroundCelSurgut'},
		{clickId:'surgut_1992_2020', activeId: 'surgut_1992_2020', visibleId:['surgut_person_1992_2020','surgut_1956_1979','surgut_1980_1991','surgut_1992_2020','back_surgut_2_XX',], backgroundDivClass: 'backgroundCelSurgut'},
		{clickId:'back_surgut_2_XX', activeId: 'surgut_2_XX', visibleId:['btn_info_main','surgut_VI_XVI','surgut_XVI_XIX','surgut_1_XX','surgut_2_XX','surgut_celnyy',], backgroundDivClass: 'backgroundCelSurgut'},
	];
	
	for (let k = 0; k < rule.length; k++) {
		if(rule[k].clickId == clickButtonId)
		{
			//Меняю фон
			document.getElementById("backgroundDiv").className = rule[k].backgroundDivClass;
			
			for (let i = 0; i < buttons.length; i++) {
				let buttonId = buttons[i].getAttribute('id');
				if(rule[k].visibleId.indexOf(buttonId) != -1)
				{
					buttons[i].style.display = '';
					if(buttonId == 'btn_info_main') buttons[i].style.display = 'block';
				}
				else
				{
					buttons[i].style.display = 'none';
				}

				var cs = getComputedStyle(buttons[i]); 
				let activeButtonClass = trimStringProperty(cs.getPropertyValue('--active'));
				if(activeButtonClass != '')
				{
					if(rule[k].activeId == buttonId)
					{

							buttons[i].classList.add(activeButtonClass);
					}
					else
					{
						buttons[i].classList.remove(activeButtonClass);
					}
				}
			}
		}
	}
}

// Нажатие на нижние кнопки меню
function menuButtonClick(e) {
	// e: MouseEvent
	let sender = e.currentTarget ?? e.target; 

	let clickButtonId = sender.getAttribute('id');

	//Костыль
	if (clickButtonId == 'btn_info_main' ) return;

	// change main_info_btn attribute

	let mbf = document.getElementById("btn_info_main");

	let atr = sender.getAttribute('data-info');

	mbf.removeAttribute('data-number');
	mbf.setAttribute('data-number', atr);

	//let num = sender.getAttribute('data-number');

	//for ( let i = 0; i < tab.length; i++ ) {
	//	tab[i].classList.add('hideTabs');
	//}

	btns_hide.style.display = 'block';

	// Плавно скрыть кнопки
	setTimeout(function () {
		placeMenuButtons(sender);
	}, 200)

	// Плавно скрыть старый фон
	setTimeout(function(){
		for ( let i = 0; i < tab.length; i++ ) {
			tab[i].classList.remove('hideTabs');
			tab[i].style = 'opacity: 0; display: none;';


			if (tab[i].classList.contains('ta_' + clickButtonId) ||
				(clickButtonId == 'back_surgut_2_XX' && tab[i].classList.contains("ta_surgut_2_XX")) ||
				(clickButtonId == 'surgut_celnyy' && tab[i].classList.contains("ta_surgut_1956_1979")) ||
				(clickButtonId == 'back_surgut_1956_1979' && tab[i].classList.contains("ta_surgut_1956_1979")) ||
				(clickButtonId == 'back_surgut_1980_1991' && tab[i].classList.contains("ta_surgut_1980_1991")) ||
				(clickButtonId == 'back_surgut_1992_2020' && tab[i].classList.contains("ta_surgut_1992_2020"))
			) {
				tab[i].classList.add('showTabs');
			}	
		}

		for (let i = 0; i < icons.length; i++ ) {
				icons[i].style.opacity = '1';
		}
		
	},500)

	// Плавно подгрузить новый фон
	setTimeout(function(){
		for (let i = 0; i < tab.length; i++) {
			if (tab[i].classList.contains("showTabs")) {
				tab[i].classList.remove('showTabs');
				tab[i].style = 'opacity: 1; display: block;'
			}
		}

		btns_hide.style.display = 'none';
	}, 1000)

}

function startFishes(e) {
	fishesInterval = setInterval(function(){
		let random_fish = Math.floor(Math.random()*(15 - 1) + 1);
	
		fish[random_fish].classList.add('fish_jump');
		fish1[random_fish].classList.add('fish_jump');
		fish2[random_fish].classList.add('fish_jump');
		fish3[random_fish].classList.add('fish_jump');
		// fish4[random_fish].classList.add('fish_jump');
	
	
		setTimeout(function(){
			for ( let i = 0; i < fish.length; i++ ) {
				fish[i].classList.remove('fish_jump');
			}
			for ( let i = 0; i < fish1.length; i++ ) {
				fish1[i].classList.remove('fish_jump');
			}
			for ( let i = 0; i < fish2.length; i++ ) {
				fish2[i].classList.remove('fish_jump');
			}
			for ( let i = 0; i < fish3.length; i++ ) {
				fish3[i].classList.remove('fish_jump');
			}
			// for ( let i = 0; i < fish4.length; i++ ) {
			// 	fish4[i].classList.remove('fish_jump');
			// }
		},1000)
	},2000);
}

function stopFishes(e) {
	fishesInterval = 0;
}

function startClouds(e) {
		
		cloudsInterval = setInterval(function(){
	
		let random_cloud = Math.floor(Math.random()*(7 - 1) + 1);
		let height = 1200;
		let random = Math.floor(Math.random()*height);

		let cloud = document.createElement('div');
		cloud.className = 'cloud_' + random_cloud;
		cloud.classList.add('cloudsCount');
		cloud.style = 'top:' + random + 'px;';
		cloud.style.zIndex = '0';

		body.appendChild(cloud);

		setTimeout(function(){
			cloud.remove();
		}, 90000)

	}, частота_появления_облаков_сек*1000);
}

function stopClouds(e) {
	
	clearInterval(cloudsInterval)
}

function hideAllTabs(e) {
	for ( let i = 0; i < tab.length; i++ ) {
		tab[i].style = ''
	}
}

function showTabBlack(e) {
	tabBlack.style.display = 'block';
}

// Нажатие на иконки по всему экрану
function iconClick(e) {
	
	// e: MouseEvent
	let sender = e.currentTarget ?? e.target;
	let posX = e.clientX;
	let posY = e.clientY;

	//модно-молодёжно
	var cs = getComputedStyle(sender);		

	greyBg.classList.add('greyActive');

	let header_inner = sender.getAttribute('data-number');

	let check = sender.getAttribute('data-check');

	//создаю зеленую форму с информацией
	let div = null;

	//создаю форму с персонами
	let formId = cs.getPropertyValue('--form-id');
	if(formId == undefined || formId == null || formId == '' || formId.trim() == '') 
		{ formId = 'icon_form_oldsurgut'; }
	div = document.getElementById(formId.trim());
	div.style.display = '';
	let header = null;
	let inner_text = null;
	let close_btn = null;
	let inputs = div.getElementsByTagName('div');
	for (let input of inputs) 
	{
		if(input.id == 'x') header = input;
		if(input.id == 'y') inner_text = input;
		if(input.id == 'z') close_btn = input;
	}

	//вытаскиваю положение и размер формы из css
	let formProp = '';
	formProp = cs.getPropertyValue('--form-top');
	if(formProp != undefined && formProp != null && formProp != '') div.style.top = formProp;
	formProp = cs.getPropertyValue('--form-left');
	if(formProp != undefined && formProp != null && formProp != '') div.style.left = formProp;
	formProp = cs.getPropertyValue('--form-height');
	if(formProp != undefined && formProp != null && formProp != '') div.style.height = formProp;
	formProp = cs.getPropertyValue('--form-width');
	if(formProp != undefined && formProp != null && formProp != '') div.style.width = formProp;

	if ( header_inner == 46 && check == '010101' ) {
		div.className = 'about_form_oldsurgut';
	} else if ( header_inner == 47 && check == '010101' ) {
		div.className = 'about_form_oldsurgut';
	} else if ( header_inner == 48 && check == '010101' ) {
		div.className = 'about_form_oldsurgut';
	} else if ( header_inner == 49 && check == '010101' ) {
		div.className = 'about_form_oldsurgut';
	} else if ((header_inner >= 52 || header_inner <= 59) && check == '010101') {
		div.className = 'about_form_oldsurgut';
	} else {
		//div.className = 'icon_form_oldsurgut';	
	}

	

	if ( header_inner == 0 ) {
		div.style = 'top:' + ( posY - 340 ) + 'px; left: ' + ( posX - 60 ) + 'px;';
	} else if ( header_inner == 19  && check == 0 ) {
		div.style = 'top:' + ( posY - 400 ) + 'px; left: ' + ( posX - 20 ) + 'px;';
	} else if ( header_inner == 12  && check == 0) {
		div.style = 'top: 340px; left: 100px;';
	} else if ( header_inner == 13 && check == 0 ) {
		div.style = 'top: 275px; left: 300px;';
	} else if ( header_inner == 6 && check == 0 ) {
		div.style = 'top: 25px; left: 1400px;';
	} else if ( header_inner == 1 && check == 0 ) {
		div.style = 'top: 200px; left: 1400px;';
	} else if ( header_inner == 14 && check == 0 ) {
		div.style = 'top: 260px; left: 975px;';
	} else if ( header_inner == 16 && check == 0 ) {
		div.style = 'top: 375px; left: 1430px;';
	} else if ( header_inner == 2 && check == '01' ) {
		div.style = 'top: 60px; left: 120px;';
	} else if ( header_inner == 2 && check == '02' ) {
	//	div.style = 'top: 100px; left: 800px;';
	} else if ( header_inner == 2 && check == '03' ) {
		div.style = 'bottom:200px; left: 1350px;';
	} else if ( header_inner == 15 && check == '04' ) {
		div.style = 'top: 30px; left: 700px;';
	} else if ( header_inner == 16 && check == '05' ) {
		div.style = 'top: 30px; left: 1000px;';
	} else if ( header_inner == 6 && check == '06' ) {
		div.style = 'top: 30px; left: 500px;';
	} else if ( header_inner == 6 && check == '07' ) {
		div.style = 'bottom:270px; left: 650px;';
	} else if ( header_inner == 5 && check == '08' ) {
		div.style = 'top: 250px; left: 180px;';
	} else if ( header_inner == 12 && check == '09' ) {
		div.style = 'top: 30px; left:1400px;';
	} else if ( header_inner == 12 && check == '010' ) {
		div.style = 'top: 100px; left: 180px;';
	} else if ( header_inner == 4 && check == '011' ) {
		div.style = 'top: 80px; left: 1400px;';
	} else if ( header_inner == 1 && check == '012' ) {
		div.style = 'top: 80px; left: 300px;';
	} else if ( header_inner == 11 && check == 0 ) {
		div.style = 'top: 110px; left: 350px;';
	} else if ( header_inner == 10 && check == 0 ) {
		div.style = 'top: 120px; left: 950px;';
	} else if ( header_inner == 8 && check == 0 ) {
		div.style = 'top: 80px; left: 1100px;';
	} else if ( header_inner == 46 && check == '010101' ) {
		div.style = 'top: 8%; left: 550px;';
	} else if ( header_inner == 47 && check == '010101' ) {
		div.style = 'top: 8%; left: 550px;';
	} else if ( header_inner == 48 && check == '010101' ) {
		div.style = 'top: 8%; left: 550px;';
	} else if ( header_inner == 49 && check == '010101' ) {
		div.style = 'top: 8%; left: 550px;';
	} else if ((header_inner >= 52 || header_inner <= 59) && check == '010101') {
		div.style = 'top: 8%; left: 550px;';
	} else if ( header_inner == 7 && check == 0 ) {
		div.style = 'top: 12%; left: 900px;';
	} else if ( header_inner == 4 && check == 0 ) {
		div.style = 'top: 10%; left: 450px;';
	}






	 else if ( header_inner == 4 && check == 1 ) {
		div.style = 'top:' + ( posY - 400 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 12 && check == 1 ) {
		div.style = 'top:' + ( posY - 300 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 6 && check == 1 ) {
		div.style = 'top:' + ( posY - 300 ) + 'px; left: ' + ( posX -290 ) + 'px;';
	} else if ( header_inner == 1 && check == 1 ) {
		div.style = 'top: 80px; left: ' + ( posX - 280) + 'px;';
	} else if ( header_inner == 1 && check == 2 ) {
		div.style = 'top: 20%; left: 50%;';
	} else if ( header_inner == 7 && check == 1 ) {
		div.style = 'top:' + ( posY - 500 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 23 && check == 1 ) {
		div.style = 'top:' + ( posY - 650 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 16 && check == 1 ) {
		div.style = 'top:300px; left:1300px;';
	} else if ( header_inner == 20 && check == 1 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 17 && check == 1 ) {
		div.style = 'top:' + ( posY - 650 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 24 && check == 1 ) {
		div.style = 'top:260px; left: 825px;';
	} else if ( header_inner == 21 && check == 1 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 22 && check == 1 ) {
		div.style = 'top:' + ( posY - 650 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 15 && check == 1 ) {
		div.style = 'top:' + ( posY - 300 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 19 && check == 1 ) {
		div.style = 'top: 100px; left: 125px;';
	} else if ( header_inner == 13 && check == 1 ) {
		div.style = 'top: 370px; left: 150px;';
	} else if ( header_inner == 2 && check == 11 ) {
		div.style = 'top: 60px; left: 180px;';
	} else if ( header_inner == 2 && check == 12 ) {
		div.style = 'top: 130px; left:1350px;';
	} else if ( header_inner == 2 && check == 1 ) {
		div.style = 'top: 150px; left: 800px;';
	} else if ( header_inner == 12 && check == 13 ) {
		div.style = 'top: 90px; left: 350px;';
	} else if ( header_inner == 12 && check == 14 ) {
		div.style = 'top: 100px; left: 1100px;';
	} else if ( header_inner == 6 && check == 15 ) {
		div.style = 'top: 70px; left: 450px;';
	} else if ( header_inner == 6 && check == 16 ) {
		div.style = 'top: 300px; left: 100px;';
	} else if ( header_inner == 6 && check == 15 ) {
		div.style = 'top: 370px; left: 150px;';
	} else if ( header_inner == 17 && check == 17 ) {
		div.style = 'top: 20px; left: 1000px;';
	} else if ( header_inner == 18 && check == 18 ) {
		div.style = 'top: 70px; left: 1350px;';
	} else if ( header_inner == 19 && check == 19 ) {
		div.style = 'bottom:280px; left: 1450px;';
	} else if ( header_inner == 19 && check == 120 ) {
		div.style = 'bottom:400px; left:850px';
	} else if ( header_inner == 22 && check == 123 ) {
		div.style = 'bottom:230px; left: 1050px;';
	} else if ( header_inner == 51 && check == 122 ) {
		div.style = 'bottom:300px; left:280px;';
	} else if ( header_inner == 50 && check == 121 ) {
		div.style = 'bottom:260px; left: 1425px;';
	} else if ( header_inner == 15 && check == 124 ) {
		div.style = 'bottom:165px; left:125px';
	} else if ( header_inner == 15 && check == 125 ) {
		div.style = 'bottom:500px; left:950px;';
	} else if ( header_inner == 18 && check == 1 ) {
		div.style = 'top: 50px; left: 250px;';
	} else if ( header_inner == 17 && check == 199 ) {
		div.style = 'top: 255px; left: 683px;';
	} else if ( header_inner == 13 && check == 166 ) {
		div.style = 'top: 255px; left: 300px;';
	} else if ( header_inner == 51 && check == 28 ) {
		div.style = 'bottom:300px; left:280px;';
	} else if ( header_inner == 50 && check == 27 ) {
		div.style = 'bottom:260px; left: 1425px;';
	}






	 else if ( header_inner == 17 && check == 2 ) {
		div.style = 'top:300px; left: 100px;';
	} else if ( header_inner == 7 && check == 2 ) {
		div.style = 'top:' + ( posY - 340 ) + 'px; left: ' + ( posX - 50 ) + 'px;';
	} else if ( header_inner == 12 && check == 2 ) {
		div.style = 'top: 50px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 15 && check == 2 ) {
		div.style = 'top:' + ( posY - 200 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 1 && check == 2 ) {
		div.style = 'top:' + ( posY - 100 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 18 && check == 2 ) {
		div.style = 'top:' + ( posY - 200 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 27 && check == 2 ) {
		div.style = 'top:265px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 28 && check == 2 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 24 && check == 2 ) {
		div.style = 'top: 280px; left:800px;';
	} else if ( header_inner == 22 && check == 2 ) {
		div.style = 'top:350px; left: 850px;';
	} else if ( header_inner == 29 && check == 2 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 30 && check == 2 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 31 && check == 2 ) {
		div.style = 'top:200px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 16 && check == 2 ) {
		div.style = 'top:' + ( posY - 500 ) + 'px; left: ' + ( posX -350 ) + 'px;';
	} else if ( header_inner == 6 && check == 2 ) {
		div.style = 'top:' + ( posY - 500 ) + 'px; left: ' + ( posX - 280) + 'px;';
	} else if ( header_inner == 13 && check == 2 ) {
		div.style = 'top:375px; left: 150px;';
	} else if ( header_inner == 26 && check == 2 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 6 && check == 21 ) {
		div.style = 'top: 50px; left:120px;';
	} else if ( header_inner == 16 && check == 22 ) {
		div.style = 'top: 25px; left:200px;';
	} else if ( header_inner == 25 && check == 23 ) {
		div.style = 'top: 50px; left:1300px;';
	} else if ( header_inner == 15 && check == 24 ) {
		div.style = 'top: 250px; left:1250px;';
	} else if ( header_inner == 25 && check == 25 ) {
		div.style = 'top: 150px; left:800px;';
	} else if ( header_inner == 17 && check == 26 ) {
		div.style = 'top: 100px; left:1100px;';
	} else if ( header_inner == 22 && check == 27 ) {
		div.style = 'top: 300px; left:100px;';
	} else if ( header_inner == 22 && check == 28 ) {
		div.style = 'top: 330px; left: 1450px;';
	} else if ( header_inner == 22 && check == 29 ) {
		div.style = 'top: 260px; left:1000px;';
	} else if ( header_inner == 16 && check == 29 ) {
		div.style = 'top: 250px; left: 1450px;';
	} else if ( header_inner == 13 && check == 299 ) {
		div.style = 'top: 270px; left:320px';
	} else if ( header_inner == 3 && check == 2 ) {
		div.style = 'top: 200px; left:100px';
	}
	







	else if ( header_inner == 15 && check == 3 ) {
		div.style = 'top:' + ( posY - 30 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 33 && check == 3 ) {
		div.style = 'top:' + ( posY - 100 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 33 && check == 12345 ) {
		div.style = 'top:' + (posY - 200) + 'px; left: ' + ( posX ) + 'px;';
	} else if ( header_inner == 33 && check == 12346 ) {
		div.style = 'top:' + ( posY - 500 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 17 && check == 3 ) {
		div.style = 'top:' + ( posY - 200 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 34 && check == 3 ) {
		div.style = 'top:' + ( posY - 150 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 35 && check == 3 ) {
		div.style = 'top:25px; left: ' + ( posX -300 ) + 'px;';
	} else if ( header_inner == 4 && check == 3 ) {
		div.style = 'top:' + ( posY - 850 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 6 && check == 3 ) {
		div.style = 'top:' + ( posY - 340 ) + 'px; left: ' + ( posX -300 ) + 'px;';
	} else if ( header_inner == 1 && check == 3 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -350 ) + 'px;';
	} else if ( header_inner == 41 && check == 3 ) {
		div.style = 'top:300px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 40 && check == 3 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 39 && check == 3 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 38 && check == 3 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 18 && check == 3 ) {
		div.style = 'top:' + ( posY - 680 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 43 && check == 3 ) {
		div.style = 'top:' + ( posY - 680 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 13 && check == 3 ) {
		div.style = 'top:220px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 42 && check == 3 ) {
		div.style = 'top:305px; left: 100px;';
	} else if ( header_inner == 5 && check == 3 ) {
		div.style = 'top:' + ( posY - 600 ) + 'px; left: ' + ( posX -100 ) + 'px;';
	} else if ( header_inner == 12 && check == 3 ) {
		div.style = 'top:' + ( posY - 340 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 16 && check == 3 ) {
		div.style = 'top:' + ( posY - 340 ) + 'px; left: ' + ( posX -200 ) + 'px;';
	} else if ( header_inner == 2 && check == 3 ) {
		div.style = 'top: 50px; left:50px;';
	} else if ( header_inner == 35 && check == 31 ) {
		div.style = 'top: 25px; left:450px;';
	} else if ( header_inner == 35 && check == 32 ) {
		div.style = 'top: 25px; left:1400px;';
	} else if ( header_inner == 15 && check == 33 ) {
		div.style = 'top: 100px; left:50px;';
	} else if ( header_inner == 36 && check == 34 ) {
		div.style = 'top: 100px; left:1050px;';
	} else if ( header_inner == 44 && check == 35 ) {
		div.style = 'top: 200px; left:725px;';
	} else if ( header_inner == 36 && check == 36 ) {
		div.style = 'top: 275px; left:500px;';
	} else if ( header_inner == 37 && check == 37 ) {
		div.style = 'top: 200px; left:450px;';
	} else if ( header_inner == 37 && check == 38 ) {
		div.style = 'top: 250px; left:300px;';
	} else if ( header_inner == 37 && check == 39 ) {
		div.style = 'top: 275px; left: 1400px;';
	} else if ( header_inner == 37 && check == 340 ) {
		div.style = 'top: 50px; left:1400px;';
	} else if ( header_inner == 37 && check == 341 ) {
		div.style = 'top: 280px; left:800px;';
	} else if ( header_inner == 43 && check == 342 ) {
		div.style = 'top: 260px; left:615px;';
	} else if ( header_inner == 18 && check == 343 ) {
		div.style = 'top: 280px; left:970px;';
	} else if ( header_inner == 1 && check == 344 ) {
		div.style = 'top: 300px; left: 1440px;';
	} else if ( header_inner == 6 && check == 345 ) {
		div.style = 'top: 348px; left:125px;';
	} else if ( header_inner == 45 && check == 333 ) {
		div.style = 'top: 25px; left:150px;';
	}
	



	else if ( header_inner == 13 ) {
		div.style = 'top:' + ( posY - 700 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 10 ) {
		div.style = 'top:' + ( posY - 500 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 11 ) {
		div.style = 'top:' + ( posY - 500 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 3 ) {
		//div.style = 'top:' + ( posY - 300 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 9 ) {
		div.style = 'top:' + ( posY - 540 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 14 ) {
		div.style = 'top:' + ( posY - 700 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 15 ) {
		div.style = 'top:' + ( posY - 620 ) + 'px; left: ' + ( posX - 200 ) + 'px;';
	} else if ( header_inner == 12 ) {
		div.style = 'top:' + ( posY - 700 ) + 'px; left: ' + ( posX - 70 ) + 'px;';
	} else if ( header_inner == 16 ) {
		div.style = 'top:' + ( posY - 680 ) + 'px; left: ' + ( posX - 290 ) + 'px;';
	} else {
		if(div.style.top === null || div.style.top === '' || div.style.top === undefined)
			{
				let divPosY = posY - 200;
				div.style.top = (divPosY > 0 ? divPosY : 0) + 'px';
			}
			if(div.style.left === null  || div.style.left === '' || div.style.left === undefined)
			{
				let divPosX = posX - 340;
				div.style.left = (divPosX > 0 ? divPosX : 0) + 'px';
			}		
	}

	div.classList.add('table_in');

	//close_btn.className = 'close_btn';

	if ( header_inner == 46 && check == '010101' ) {
		close_btn.style = 'top:107%;left:50%';
	} else if ( header_inner == 47 && check == '010101' ) {
		close_btn.style = 'top:107%;left:50%';
	} else if ( header_inner == 48 && check == '010101' ) {
		close_btn.style = 'top:107%;left:50%';
	} else if ( header_inner == 49 && check == '010101' ) {
		close_btn.style = 'top:107%;left:50%';
	} else if ((header_inner >= 52 || header_inner <= 59) && check == '010101') {
		close_btn.style = 'top:107%;left:50%';
	} else {
		close_btn.style = 'top:107%;left:50%';
	}
	

	if ( header_inner == 46 && check == '010101' ) {
		header.className = 'inner_header_big';
	} else if ( header_inner == 47 && check == '010101' ) {
		header.className = 'inner_header_big';
	} else if ( header_inner == 48 && check == '010101' ) {
		header.className = 'inner_header_big';
	} else if ( header_inner == 49 && check == '010101' ) {
		header.className = 'inner_header_big';
	} else if ((header_inner >= 52 || header_inner <= 59) && check == '010101') {
		header.className = 'inner_header_big';
	} else {
		//header.className = 'inner_header';	
	}

	//Заголовок внутри формы
	let headerText = trimStringProperty(cs.getPropertyValue('--form-header-text')); 
	if (headerText === undefined || headerText === '')
		headerText = название_окна[header_inner];			
	if (headerText != undefined)
		header.innerText = headerText;

	var formHeaderProp = '';
	formHeaderProp = cs.getPropertyValue('--form-header-top');
	if(formHeaderProp != undefined && formHeaderProp != null) header.style.top = formHeaderProp;
	formHeaderProp = cs.getPropertyValue('--form-header-font-size');
	if(formHeaderProp != undefined && formHeaderProp != null) header.style.fontSize = formHeaderProp;

	if ( header_inner == 8 && check == 0 ) {
		header.style.top = '8%';
		header.style.fontSize = '30px';
	} else if ( header_inner == 21 && check == 1 ) {
		header.style.fontSize = '35px';
	} else if ( header_inner == 24 && check == 1 ) {
		header.style.fontSize = '35px';
	} else if ( header_inner == 29 && check == 2 ) {
		header.style.fontSize = '35px';
	} else if ( header_inner == 24 && check == 2 ) {
		header.style.fontSize = '35px';
	} else if ( header_inner == 37 && check == 3 ) {
		header.style.fontSize = '35px';
	} else if ( header_inner == 42 && check == 3 ) {
		header.style.fontSize = '35px';
		header.style.top = '7%';
	} else if ( header_inner == 43 && check == 3 ) {
		header.style.fontSize = '35px';
		header.style.top = '7%';
	} else if ( header_inner == 39 && check == 3 ) {
		header.style.fontSize = '35px';
		header.style.top = '7%';
	} else if ( header_inner == 41 && check == 3 ) {
		header.style.fontSize = '35px';
		header.style.top = '7%';
	} else if ( header_inner == 34 && check == 3 ) {
		header.style.fontSize = '35px';
		header.style.top = '7%';
	} else if ( header_inner == 32 && check == 3 ) {
		header.style.fontSize = '35px';
		header.style.top = '7%';
	} else if ( header_inner == 37 && check == 38 ) {
		header.style.fontSize = '35px';
		// header.style.top = '7%';
	} else if ( header_inner == 37 && check == 37 ) {
		header.style.fontSize = '35px';
		// header.style.top = '7%';
	} else if ( header_inner == 37 && check == 341 ) {
		header.style.fontSize = '35px';
		// header.style.top = '7%';
	} else if ( header_inner == 37 && check == 340 ) {
		header.style.fontSize = '35px';
		// header.style.top = '7%';
	} else if ( header_inner == 37 && check == 39 ) {
		header.style.fontSize = '35px';
		// header.style.top = '7%';
	} else if ( header_inner == 43 && check == 342 ) {
		header.style.fontSize = '35px';
		header.style.top = '7%';
	} else if ( header_inner == 44 && check == 35 ) {
		header.style.fontSize = '35px';
		header.style.top = '7%';
	} else if ( header_inner == 50 && check == 121 ) {
		header.style.fontSize = '35px';
		// header.style.top = '7%';
	} else if ( header_inner == 50 && check == 27 ) {
		header.style.fontSize = '35px';
		// header.style.top = '7%';
	}


	// inner_text.onscroll = document.onscroll = function () {
 //        idleCounter = 0;
 //        console.log(idleCounter);
 //    };

	// inner_text.addEventListener('scroll',function(){
	// 	idleCounter = 0;
	//     console.log(idleCounter);
	// })

	if ( header_inner == 46 && check == '010101' ) {
		inner_text.className = 'inner_text_big';
	} else if ( header_inner == 47 && check == '010101' ) {
		inner_text.className = 'inner_text_big';
	} else if ( header_inner == 48 && check == '010101' ) {
		inner_text.className = 'inner_text_big';
	} else if ( header_inner == 49 && check == '010101' ) {
		inner_text.className = 'inner_text_big';
	} else if ((header_inner >= 52 || header_inner <= 59) && check == '010101') {
		inner_text.className = 'inner_text_big';
	} else {
		//inner_text.className = 'inner_text';	
	}


	let descrText = trimStringProperty(cs.getPropertyValue('--form-descr-text')); 
	if (descrText === undefined || descrText === '')
		descrText = текст_внутри_окна[header_inner];			
	if (descrText != undefined)
		inner_text.innerHTML = descrText;

	var descrTextProp = '';
	descrTextProp = cs.getPropertyValue('--form-descr-top');
	if(descrTextProp != undefined && descrTextProp != null) inner_text.style.top = descrTextProp;
	descrTextProp = cs.getPropertyValue('--form-descr-left');
	if(descrTextProp != undefined && descrTextProp != null) inner_text.style.left = descrTextProp;
	descrTextProp = cs.getPropertyValue('--form-descr-width');
	if(descrTextProp != undefined && descrTextProp != null) inner_text.style.width = descrTextProp;
	descrTextProp = cs.getPropertyValue('--form-descr-height');
	if(descrTextProp != undefined && descrTextProp != null) inner_text.style.height = descrTextProp;
	
	let imagesArray = new Array(0);
	if(изображения[header_inner] !== undefined)
	{
		for (key in изображения[header_inner])
		{
			imagesArray.push(изображения[header_inner][key]);
		}		
	}

	if(cs.getPropertyValue('--form-images') !== undefined)
	{
		let str = cs.getPropertyValue('--form-images');
		let regexp = /url\((.*?)\)/ig;

		while (result = regexp.exec(str)) {
			let imgUrl = result.pop().replace(/\\/g, '');
			imagesArray.push(imgUrl);
		  }

		for (key in изображения[header_inner])
		{
			imagesArray.push(изображения[header_inner][key]);
		}		
	}

	if(imagesArray.length == 0)
		inner_text.className = 'inner_text_big';

	let imageGroup = document.createElement('div');
	imageGroup.classList.add('flexGroup');

	let innerImageGroup = document.createElement('div');
	innerImageGroup.classList.add('objectImages');
	imageGroup.appendChild(innerImageGroup);

	if (imagesArray.length > 0) 
	{
		//Меняем фон на тот, что фоторамкой
		if(div.classList.contains('icon_form_oldsurgut'))
		{
			div.classList.remove('icon_form_oldsurgut');
			div.classList.add('icon_form_pic_oldsurgut');
		}

		//Добавляем картинки
		for (var i = 0; i < imagesArray.length; i++) 
		{
			let img = document.createElement('img');
			img.src = imagesArray[i];
			img.className = 'imgItem';
		  
			innerImageGroup.appendChild(img);
		}
		  
		//Костыль - добавим первую картинку вконец, чтобы было плавное зацикливание
		if(imagesArray.length > 1)
		{
			let img = document.createElement('img');
			img.className = 'imgItem';
			img.src = imagesArray[0];
			  
			innerImageGroup.appendChild(img);
		}

		// arrows left and right
		if(imagesArray.length > 1)
		{
			let arrowLeft = document.createElement('div');
			let arrowRight = document.createElement('div');

			arrowLeft.className = 'arrowLeft';
			arrowRight.className = 'arrowRight';

			imageGroup.appendChild(arrowLeft);
			imageGroup.appendChild(arrowRight);

			let left = document.createElement('div');
			let right = document.createElement('div');

			left.classList.add('left');
			right.classList.add('right');

			imageGroup.appendChild(left);
			imageGroup.appendChild(right);

			let count = 0;

			right.onclick = function rightMove(){
				right.onclick = null;
				left.style.display = 'none';
				count++;
				innerImageGroup.style = 'transition: all 1s ease;';
				innerImageGroup.style.left = count * (-245) + 'px';

				let items = document.querySelectorAll('.imgItem');


				if ( count === items.length - 1 || count > items.length - 1 ) {
					setTimeout(function(){
						innerImageGroup.style = 'transition: none 1s ease;';
						count = 0;
						innerImageGroup.style.left = '0px;';
					},1000);
				}

				setTimeout(function(){
					right.onclick = rightMove;
					left.style.display = 'block';
				},1000);	
			}

			left.onclick = function leftMove(){
				left.onclick = null;
				right.style.display = 'none';

				let items = document.querySelectorAll('.imgItem');

				if ( count === 0 ) {
					innerImageGroup.style = 'transition: none 1s ease';
					count = items.length - 1;
					innerImageGroup.style.left = count * (-245) + 'px';
					setTimeout(function(){
						count--;
						innerImageGroup.style = 'transition: all 1s ease;';
						innerImageGroup.style.left = count * (-245) + 'px';
						},10)
				} 
				else {
					count--;
					innerImageGroup.style = 'transition: all 1s ease;';
					innerImageGroup.style.left = count * (-245) + 'px';
				}

				setTimeout(function(){
					left.onclick = leftMove;
					right.style.display = 'block';
				},1000);
			}
		}
	}


//body.appendChild(div);

if ( header_inner == 46 && check == '010101' ) {
		div.classList.add('qwerty');
		//div.appendChild(close_btn);
		//div.appendChild(header);
		//div.appendChild(inner_text);
} else if ( header_inner == 47 && check == '010101' ) {
		div.classList.add('qwerty');
		//div.appendChild(close_btn);
		//div.appendChild(header);
		//div.appendChild(inner_text);
} else if ( header_inner == 48 && check == '010101' ) {
		div.classList.add('qwerty');
		//div.appendChild(close_btn);
		//div.appendChild(header);
		//div.appendChild(inner_text);
} else if ( header_inner == 49 && check == '010101' ) {
		div.classList.add('qwerty');
		//div.appendChild(close_btn);
		//div.appendChild(header);
		//div.appendChild(inner_text);
} else if ((header_inner >= 52 || header_inner <= 59) && check == '010101') {
	div.classList.add('qwerty');
	//div.appendChild(close_btn);
	//div.appendChild(header);
	//div.appendChild(inner_text);
} else {
	div.classList.add('qwerty');
	//div.appendChild(close_btn);
	//div.appendChild(header);
	//div.appendChild(inner_text);
	if (imagesArray.length > 0) {
		div.appendChild(imageGroup);
	} 
}

/*
let active_window = document.querySelectorAll('.qwerty');

for ( let i = 0; i < active_window.length; i++ ) {

	close_btn.onclick = function(){
		active_window[i].classList.add('table_out');
		greyBg.classList.add('greyHide');
		setTimeout(()=>{
			greyBg.classList.remove('greyActive');
			greyBg.classList.remove('greyHide');
		},500);
		active_window[i].addEventListener('animationend',function(){
			//body.removeChild(active_window[i]);
			//active_window[i].style.display = "none";
		});

		for ( let i = 0; i < main_btns.length; i ++ ) {
			main_btns[i].removeAttribute('disabled');
		}
	}

	if ( active_window.length > 1 ) {
		active_window[0].classList.add('table_out');
		active_window[1].classList.add('table_in');
		active_window[0].addEventListener('animationend',function(){
			//body.removeChild(active_window[0]);
			active_window[0].style.display = "none";
		});
	}

}
*/
	//body.appendChild(div);
}

function trimStringProperty(str)
{
	return trimChar(str.trim(), '"').trim();
}

function trimChar(str, delimiter) {
	const pattern = `[^\\${delimiter}]`;
	const start = str.search(pattern);
	const stop = str.length - str.split('').reverse().join('').search(pattern);
	return str.substring(start, stop);
}

function hideDivAndGreyBg(divId) {
	document.getElementById(divId).style.display = 'none'; 
	greyBg.classList.remove('greyHide');
    greyBg.classList.remove('greyActive');

	
	let person_card_forms = document.querySelectorAll('.form_surgut_person_card');
	for ( let i = 0; i < person_card_forms.length; i++ ) {
		hideDiv(person_card_forms[i].id);
	}
}

function hideDiv(divId) {
	document.getElementById(divId).style.display = 'none'; 
}

function showDiv(divId) {
	document.getElementById(divId).style.display = ''; 
}






























































