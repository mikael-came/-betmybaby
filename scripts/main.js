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
		showGuessFormPrenom();
		
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
	 +'<input type="text" name="nom" class="nl-ti-text" value="" placeholder="Votre nom"/></div>'
		 +"<div>Je peut être contacté à l'adresse suivante "
		 +'<input type="text" name="adresse" class="nl-ti-text adresse" value="" placeholder="Votre adresse postale"/></div>'		 
	 ],
	 typeSpeed: 0,
	 startDelay:500,
	 contentType:'html',
	 showCursor:false,
	 callback:function(){
		 document.getElementsByName('adresse')[0].onchange=function(){
			
			setCompleted('mesInfos');
		 };
		 document.getElementsByName('adresse')[0].onkeypress=function(){
			if(!monpariVisible){		
				monpariVisible=true;	
				showGuessForm();				

			}
		  };		 
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
			setCompleted("monpari2");
		};
		document.getElementsByName('taille')[0].onkeypress=function(){
			if(!monpari3Visible){		
				monpariVisible=true;	
				showGuessmonpari3();
			}
		};	
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
			setCompleted("monpari3");
			
		}
		document.getElementsByName('poids')[0].onkeypress=function(){
			if(!monpari4Visible){
				monpari4Visible=true;
				showGuessFormPrenom();
				document.getElementById('validationbtn').style.display='block';

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
			setCompleted("monpari4");
		}
		
		document.getElementsByName('prenom')[0].onkeypress=function(){
			if(!buttonValidationVisible){			
				buttonValidationVisible=true;				
				document.getElementById('validationbtn').disabled=false;
			}
		}
	 }
	  
	});
};

var buttonValidationVisible = false;
document.getElementById('validationbtn').disabled=true;

var sendTentative = function(data){
	var oReq = new XMLHttpRequest();
	var host = 'https://hook.io/mikael-came-gmail-com/betonmybaby'
	
	var data = loadData();
	console.log("data query,",serialize(data));
	var url = host + "/?data=" +serialize(data);
	oReq.open('POST', url);
	oReq.send(null);

	oReq.onload = function () {
		console.log('callBack, enregistrement effectué');
		alert("Merci beaucoup de votre participation ! \r\n Elo & Mike");
	};
};
var serialize = function(obj){
	var str = [];
	return Object.keys(obj).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');

}

var loadData = function(){
	var data = {nom : '',
				adresse : '',
				taille:'',
				poids:0,
				date:'',
				moment:'',
				prenom:''
		
	};
	if(document.getElementsByName('nom')[0])
	data.nom = document.getElementsByName('nom')[0].value;
	if(document.getElementsByName('adresse')[0])
	data.adresse = document.getElementsByName('adresse')[0].value;
	if(document.getElementsByName('taille')[0])
	data.taille = document.getElementsByName('taille')[0].value;
	if(document.getElementsByName('poids')[0])
	data.poids = document.getElementsByName('poids')[0].value;
	if(document.getElementsByName('date')[0])
	data.date = document.getElementsByName('date')[0].value;
	if(document.getElementsByName('select')[0])
	data.moment = document.getElementsByName('select')[0].value;
	if(document.getElementsByName('prenom')[0])
	data.prenom = document.getElementsByName('prenom')[0].value;
	
	return data;
};