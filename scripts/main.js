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
		//showIntro();


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
		 +'<input type="text" class="nl-ti-text adresse" value="" placeholder="Votre adresse postale""/>.'
		 +'<button  class="btn btn-default btn-block" onclick="showGuessForm();return false;">suite</button>'
	 ],
	 typeSpeed: 0,
	 startDelay:0,
	 contentType:'html',
	 showCursor:false
	});
};

var showGuessForm = function(){
	Typed.new('.monpari', {
	 strings: ["Je suis <nbsp>"
	 +'<input type="text" class="nl-ti-text" value="" placeholder="Votre nom"/>'
		 +"<nbsp>et je peut être contacté à l'adresse suivante <nbsp>"
		 +'<input type="text" class="nl-ti-text adresse" value="" placeholder="Votre adresse postale""/>.'
		 +'<button  class="btn btn-default btn-block" onclick="showGuessForm();return false;">suite</button>'
	 ],
	 typeSpeed: 0,
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
