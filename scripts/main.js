	var data = {
						nom : '',
						adresse : '',
						pari : {
										taille:'',
										poids:0,
										date:'',
										moment:''
						}
					};


	requirejs(["scripts/typed.js"], function(util) {
		showIntro();
	});

var showIntro = function(){
	Typed.new('.intro', {
	 strings: ["Bonjour ! <br/>Faites vos pronostics sur le futur bébé de Mikaël et Elodie en complétant le formulaire suivant : "],
	 typeSpeed: 0,
	 callback:showFormulaire
	});
};

var showFormulaire = function(){
	Typed.new('.mesInfos', {
	 strings: ["<div>Je suis <nbsp>"
	 +'<input type="text" class="nl-ti-text" value="" placeholder="Votre nom"/></div>'
		 +"<div>Je peut être contacté à l'adresse suivante "
		 +'<input type="text" name="adresse" class="nl-ti-text adresse" value="" placeholder="Votre adresse postale"/></div>'		 
	 ],
	 typeSpeed: 0,
	 startDelay:500,
	 contentType:'html',
	 showCursor:false,
		callback:function(){
		 document.getElementsByName('adresse')[0].onchange=function(){
	 		if(!monpariVisible){
	 			monpariVisible=true;
	 			showGuessForm();
				setCompleted('mesInfos');
	 		}
	 	}
	 }

	});
};
//date 
var monpariVisible=false;
var showGuessForm = function(){
	Typed.new('.monpari', {
	 strings: ['<div>Je prend le pari que le bébé naîtra'
	 +'<select name="select"> '
	 +  '<option value="" selected></option>'
		 +'<option value="matin">le matin</option>'
		 +"<option value='midi'>l'après midi</option>"
		 +'<option value="soir">le soir</option>'
		 +'<option value="nuit">la nuit</option>'
	 +'</select>'
	 +'du <input type="date" class="date" value="2017-08-26" name="date">.</div>'
	 ],
	 typeSpeed: 1,
	 startDelay:0,
	 contentType:'html',
	 showCursor:false,
	 callback:function(){
		 document.getElementsByName('select')[0].onchange=function(){
	 		if(!monpari2Visible){
	 			monpari2Visible=true;
	 			showGuessFormSuite();
				setCompleted("monpari");
	 		}
	 	}
	 }
	});

}

//taille
var monpari2Visible = false;
var showGuessFormSuite = function(){
	Typed.new('.monpari2', {
	  strings: ['<div>'
	 +'A la naissance, elle mesurera la taille de'
	 +'<input type="number" class="nl-ty-number" step="1" name="taille" placeholder=""><nbsp>cm </div>'
	
	 ],
	 typeSpeed: 1,
	 startDelay:0,
	 contentType:'html',
	 showCursor:false,
	 callback:function(){
		document.getElementsByName('taille')[0].onchange=function(){
			if(!monpari3Visible){
				monpari3Visible=true;
				showGuessmonpari3();
				setCompleted("monpari2");
			}
		}
	 }
	});
}

var setCompleted = function(name){
	var d = document.getElementsByClassName(name)[0];
	d.className +=" iscompleted";

}
//poids
var monpari3Visible = false;
var showGuessmonpari3 = function(){
	Typed.new('.monpari3', {
	  strings: ['<div>'
	 +'<div>et aura un poids de <nbsp>'
	 +'<input type="number" class="nl-ty-number" step="0.1" name="poids" placeholder=""><nbsp>kg.<nbsp></div>'

	 ],
	 typeSpeed: 1,
	 startDelay:0,
	 contentType:'html',
	 showCursor:false,
	 callback:function(){
		document.getElementsByName('poids')[0].onchange=function(){
			if(!monpari4Visible){
				monpari4Visible=true;
				showGuessFormPrenom();
				setCompleted("monpari3");
			}
		}
	 }
	});
}
//prenom
var monpari4Visible = false;
var showGuessFormPrenom = function(){
	Typed.new('.monpari4', {
	  strings: ['<div>'
	 +'<div>Ses parents auront choisi le prénom : <nbsp>'
	 +'<input type="text" class="nl-ti-text" name="prenom" value="" placeholder="Le prénom"/></div>'	 
	 ],
	 typeSpeed: 1,
	 startDelay:0,
	 contentType:'html',
	 showCursor:false,
	 callback:function(){
		document.getElementsByName('prenom')[0].onchange=function(){
			if(!buttonValidationVisible){
				buttonValidationVisible=true;				
				setCompleted("monpari4");
				document.getElementsByName('prenom')
				document.getElementById('validationbtn').style.display='block';
			}
		}
	 }
	  
	});
};

var buttonValidationVisible = false;
document.getElementById('validationbtn').style.display='none';

var sendTentative = function(data){
	var oReq = new XMLHttpRequest();
	var host = 'https://hook.io/mikael-came-gmail-com/storebetmybaby'
	var url = host + "/" + username + "/" + guess;
	oReq.open('POST', url);
	oReq.send(null);

	oReq.onload = function () {
		console.log('callBack, enregistrement effectué');
	};
};
