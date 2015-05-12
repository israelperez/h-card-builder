$( document ).ready(function() {
    UIEngine.init();
});
var UIEngine = {
	_inElements:{
		txtName: $('#inputName'),
		txtSur: $('#inputSurname'),
		txtEmail: $('#inputEmail'),
		txtPhone: $('#inputPhone'),

		txtNum: $('#inputNum'),
		txtStreet: $('#inputStreet'),
		txtSuburb: $('#inputSuburb'),
		txtState: $('#inputState'),
		txtPcode: $('#inputPcode'),
		txtCountry: $('#inputCountry')
	},
	_outElements:{
		lblName: $('#lblName'),
		lblEmail: $('#lblEmail'),
		lblPhone: $('#lblPhone'),
		lblAddress1: $('#lblAddress1'),
		lblAddress2: $('#lblAddress2'),
		lblPcode: $('#lblPcode'),
		lblCountry: $('#lblCountry')
	},

	init: function(){
		this.addEventListeners();
	},
	addEventListeners: function(){
		var Engine = this;
		Engine._inElements.txtName.on('keyup', Engine.constructName);
		Engine._inElements.txtSur.on('keyup', Engine.constructName);
		Engine._inElements.txtEmail.on('keyup', function(e){
			Engine._outElements.lblEmail.html(e.currentTarget.value);
		});
		Engine._inElements.txtPhone.on('keyup', function(e){
			Engine._outElements.lblPhone.html(e.currentTarget.value);
		});

		Engine._inElements.txtNum.on('keyup', Engine.constructAddress);
		Engine._inElements.txtStreet.on('keyup', Engine.constructAddress);
		Engine._inElements.txtSuburb.on('keyup', Engine.constructAddress);
		Engine._inElements.txtState.on('keyup', Engine.constructAddress);
		Engine._inElements.txtPcode.on('keyup', function(e){
			Engine._outElements.lblPcode.html(e.currentTarget.value);
		});
		Engine._inElements.txtCountry.on('keyup', function(e){
			Engine._outElements.lblCountry.html(e.currentTarget.value);
		});
	},
	constructName: function(){
		var name = UIEngine._inElements.txtName.val() + ' ' + UIEngine._inElements.txtSur.val();
		UIEngine._outElements.lblName.html($.trim(name));
	},
	constructAddress: function(){
		console.log('dsfsdf');
		var line1 = UIEngine._inElements.txtNum.val() + ' ' + UIEngine._inElements.txtStreet.val(),
			line2;

		if(UIEngine._inElements.txtSuburb.val() != ''){
			line2 = UIEngine._inElements.txtSuburb.val();
			if(UIEngine._inElements.txtState.val() != '') line2 += ', ' + UIEngine._inElements.txtState.val();
		}else{
			if(UIEngine._inElements.txtState.val() != '') line2 = UIEngine._inElements.txtState.val();
		}
		UIEngine._outElements.lblAddress1.html($.trim(line1));
		UIEngine._outElements.lblAddress2.html(line2);
	}
};