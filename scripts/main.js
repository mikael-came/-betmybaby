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
	 strings: ["Je suis <nbsp>"
	 +'<input type="text" class="nl-ti-text" value="" placeholder="Votre nom"/>'
		 +"<nbsp>et je peut être contacté à l'adresse suivante <nbsp>"
		 +'<input type="text" class="nl-ti-text adresse" value="" placeholder="Votre adresse postale"/>.'
		 +'<button  class="btn btn-default btn-block" onclick="showGuessForm();return false;">Ok</button>'
	 ],
	 typeSpeed: 0,
	 startDelay:0,
	 contentType:'html',
	 showCursor:false,


	});
};

var showGuessForm = function(){
	document.getElementsByClassName('mesInfos')[0].style.display='none';
	Typed.new('.monpari', {
	 strings: ['Je prend le pari que le bébé naîtra'
	 +'<select name="select"> '
	 +  '<option value="" selected></option>'
		 +'<option value="matin">le matin</option>'
		 +"<option value='midi'>l'après midi</option>"
		 +'<option value="soir">le soir</option>'
		 +'<option value="nuit">la nuit</option>'
	 +'</select>'
	 ],
	 typeSpeed: 1,
	 startDelay:0,
	 contentType:'html',
	 showCursor:false,
	 callback:function(){
		 document.getElementsByTagName('select')[0].onchange=function(){
	 		if(!shown){
	 			shown=true;
	 			showGuessFormSuite();
	 		}
	 	}
	 }
	});

}
var shown = false;

var showGuessFormSuite = function(){
	Typed.new('.monpari2', {
	  strings: ['du <input type="date" class="date" value="2017-08-26" name="date">.<nbsp>'
	 +'<nbsp>A la naissance, elle mesurera la taille de<nbsp>'
	 +'<input type="number" class="nl-ty-number" step="1"name="taille" placeholder=""><nbsp>cm et pèsera<nbsp>'
	 +'<input type="number" class="nl-ty-number" step="0.1" name="poids"placeholder=""><nbsp>kg.<nbsp>'
	 +'<nbsp>Ses parents auront choisi le doux prénom de :<nbsp>'
	 +'<input type="text" class="nl-ti-text" value="" placeholder="Le prénom"/>'
	 +'<button  class="btn btn-default btn-block" onclick="sendTentative();return false;">Enregistrer son pari</button>'
	 ],
	 typeSpeed: 1,
	 startDelay:0,
	 contentType:'html',
	 showCursor:false
	});
}
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
