import { Template } from 'meteor/templating';
import { SortedData } from "../../lib/collections/averages.js"


var currentSearch = new ReactiveVar("");

//Auto stuff
var switchScored = new ReactiveVar(0);
var SwitchAttempted = new ReactiveVar(0);

var scaleScored = new ReactiveVar(0);
var ScaleAttempted = new ReactiveVar(0);

var vaultScored = new ReactiveVar(0);

var baselineUnlock = new ReactiveVar("");
var switchUnlock = new ReactiveVar("");
var scaleUnlock = new ReactiveVar("");

//Teleop Stuff
var climbUnlock = new ReactiveVar("");


function isBad(val) {
    //console.log(val);
    if(val === undefined || val === ""){
    	console.log(val + "IS BAD");
    	return true
        
    }    
    else{
    	console.log(val + "IS GOOD");
    	
    	
    }
    
}

Template.data.events({

	'click #searchTeam': function () {
		
		currentSearch.set($('.searchbyMatch').val());
		console.log(currentSearch);


	},
		//events
	'click #buttonDownload': function(event) {
	  var nameFile = 'ScoutingData.csv';
	  Meteor.call('download', function(err, fileContent) {
	    if(fileContent){
	      var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
	      saveAs(blob, nameFile);
	    }
	  });
	}
});



Template.matchDataInsert.events({

	'click #subtractSwitchCubeAttempted': function (e) {
		e.preventDefault()
		
		if(SwitchAttempted.get()>0){
			SwitchAttempted.set(SwitchAttempted.get() - 1)
		}

		
		//console.log(Gears.get())

		
	},

	'click #addSwitchCubeAttempted': function (e) {
		e.preventDefault()

		SwitchAttempted.set(SwitchAttempted.get() + 1)
		//console.log(Gears.get())
		
	},

	'click #subtractSwitchCube': function (e) {
		e.preventDefault()
		
		if(switchScored.get()>0){
			switchScored.set(switchScored.get() - 1)
		}
		//console.log(Gears.get())

		
	},

	'click #addSwitchCube': function (e) {
		e.preventDefault()

		switchScored.set(switchScored.get() + 1)
		SwitchAttempted.set(SwitchAttempted.get() + 1)
		//console.log(Gears.get())
		
	},

	'click #subtractScaleCubeAttempted': function (e) {
		e.preventDefault()

		if(ScaleAttempted.get()>0){
		ScaleAttempted.set(ScaleAttempted.get() - 1)
		}
	},

	'click #addScaleCubeAttempted': function (e) {
		e.preventDefault()
		ScaleAttempted.set(ScaleAttempted.get() + 1)
	},

	'click #subtractScaleCube': function (e) {
		e.preventDefault()

		if(scaleScored.get()>0){
		scaleScored.set(scaleScored.get() - 1)
		}

	},

	'click #addScaleCube': function (e) {
		e.preventDefault()

		scaleScored.set(scaleScored.get() + 1)
		ScaleAttempted.set(ScaleAttempted.get() + 1)
			
	},

	'click #addVaultCube': function (e) {
		e.preventDefault()

		vaultScored.set(vaultScored.get() + 1)
			
	},

	'click #subtractVaultCube': function (e) {
		e.preventDefault()

		if(vaultScored.get()>0){
		vaultScored.set(vaultScored.get() - 1)
		}

	},



	'click #AutoRadio1-1': function (e) {
		baselineUnlock.set(true);	
	},

	'click #AutoRadio1-2': function (e) {
		baselineUnlock.set(false);	
	},

	'click #AutoRadio2-1': function (e) {
		switchUnlock.set(true);	
	},

	'click #AutoRadio2-2': function (e) {
		switchUnlock.set(false);	
	},

	'click #AutoRadio4-1': function (e) {
		scaleUnlock.set(true);	
	},

	'click #AutoRadio4-2': function (e) {
		scaleUnlock.set(false);	
	},


	//TELEOP UNLOCKS
	'click #TeleRadio9-1': function (e) {
		climbUnlock.set(false);	
	},
	'click #TeleRadio9-2': function (e) {
		climbUnlock.set(false);	
	},
	'click #TeleRadio9-3': function (e) {
		climbUnlock.set(true);	
	},
	
	

	'click #submitMatchData': function (e) {
		
		
		var matchData = {};

		//Match Info Values

		var team = $('.newMatchTeam').val();

		if(
			team != "188" &&
			team != "746" &&
			team != "771" &&
			team != "854" &&
			team!= "907" &&
			team!= "919" &&
			team!= "1075" &&
			team!= "1310" && 
			team!= "1325" &&
			team!= "1360" &&
			team!= "4001" &&
			team!= "4343" &&
<<<<<<< HEAD
			team!= "4618" &&
=======
			team!= "4613" &&
>>>>>>> 073f8286f21f0b0803fbe8a989b7f2d441a20957
			team!= "4939" &&
			team!= "4946" &&
			team!= "4976" &&
			team!= "5031" &&
			team!= "5036" &&
			team!= "5428" &&
			team!= "5519" &&
			team!= "5699" &&
			team!= "5776" &&
			team!= "5921" &&
			team!= "6009" &&
			team!= "6135" &&
			team!= "6140" &&
			team!= "6141" &&
			team!= "6397" &&
			team!= "6513" &&
			team!= "6564" &&
			team!= "6632" &&
			team!= "6867" &&
			team!= "6975" &&
			team!= "7013" &&
			team!= "7136" &&
			team!= "7329"){

			alert("INVALID TEAM NUMBER");

   			 e.preventDefault();
		}

		else{
			var team = $('.newMatchTeam').val();
		}
		
		var numb = $('.newMatchNumber').val();
		
		var allianceS = $('#newAllianceStation').val();
		var scouter = $('.newScouter').val();

		//Auto Values
		if(baselineUnlock.get()){					
			var baselineCrossed = "true";
			
			if(switchUnlock.get()){
				
				var autoSwitchAttempted = "true";
				var autoSwitchCube = $('input[name=autoSwitchCube]:checked').val();
			}
			else if(switchUnlock.get() === ""){
				
			}
			else{

				var autoSwitchAttempted = "false";
				var autoSwitchCube = "Locked";
			}

			if(scaleUnlock.get()){
				var autoScaleAttempted = "true";
				var autoScaleCube = $('input[name=autoScaleCube]:checked').val();
			}
			else if(scaleUnlock.get() === ""){
				
			}
			else{
				var autoScaleAttempted = "false";
				var autoScaleCube = "Locked";
			}
		}
		else if(baselineUnlock.get() === undefined){
			baselineCrossed = undefined;
			var autoSwitchAttempted = "false";
			var autoSwitchCube = "Locked";
			var autoScaleAttempted = "false";
			var autoScaleCube = "Locked";
		}		
		else{
			var baselineCrossed = "false";
			var autoSwitchAttempted = "false";
			var autoSwitchCube = "Locked";
			var autoScaleAttempted = "false";
			var autoScaleCube = "Locked";
		}

				
		//Tele-op Values
		var teleSwitchScored = switchScored.get();
		var SwitchCubesAttempted = SwitchAttempted.get();
		var teleScaleScored = scaleScored.get();
		var ScaleCubesAttempted = ScaleAttempted.get();
		var teleVaultScored = vaultScored.get();

		var teleSwitchSpeed = $('input[name=switchSpeed]:checked').val();
		var teleScaleSpeed = $('input[name=scaleSpeed]:checked').val();
		var teleVaultSpeed = $('input[name=vaultSpeed]:checked').val();

		var teleStruggle = $('input[name=struggle]:checked').val();
		var teleDied = $('input[name=matchDied]:checked').val();

		if(climbUnlock.get()){			
			var endgame = $('input[name=endgame]:checked').val();			
			var teleClimbSpeed = $('input[name=climbSpeed]:checked').val();

			if($('input[name=climbWork]:checked').val() === "climbYes"){
				var teleClimb = "true";
			}
			else if($('input[name=climbWork]:checked').val() === undefined){
								
			}
			else{
				var teleClimb = "false";
			}
		}
		else{
			var endgame = $('input[name=endgame]:checked').val();	
			var teleClimb = "false";
			var teleClimbSpeed = "Locked";
		}

		//Qualititative Data
		var qualitative = '"' + $('.qualitativeData').val() + '"';
		var defense = $('input[name=defense]:checked').val();
		var evasion = $('input[name=evasion]:checked').val();

	
		if( ((isBad(numb)) ||		
			(isBad(team)) ||
           	(isBad(allianceS)) ||
           	(isBad(scouter)) ||
        	(isBad(baselineCrossed)) ||
           	(isBad(autoSwitchAttempted)) ||
        	(isBad(autoSwitchCube)) ||
           	(isBad(autoScaleAttempted)) ||
           	(isBad(autoScaleCube)) ||
            (isBad(teleSwitchScored)) ||
            (isBad(SwitchCubesAttempted)) ||
            (isBad(teleScaleScored)) ||
            (isBad(ScaleCubesAttempted)) ||
            (isBad(teleVaultScored)) ||            
            (isBad(teleSwitchSpeed)) ||
            (isBad(teleScaleSpeed)) ||
            (isBad(teleVaultSpeed)) ||
            (isBad(teleStruggle)) ||
            (isBad(teleDied)) ||
			(isBad(endgame)) ||
            (isBad(teleClimb)) ||
           	(isBad(teleClimbSpeed)) ||
            (isBad(defense)) ||
            (isBad(evasion)))){
   			 // One field is empty somewhere
   			 alert("FILL THE WHOLE FORM");

   			 e.preventDefault();
   			 
			} 


		else {
			

		console.log('IT WORKS KIDO');
		
		matchData = {
			//Match Info 
			match:numb, 
			team:team, 
			station:allianceS,
			scouter:scouter, 

			//Auto Info
			autoSwitchAttempted:autoSwitchAttempted,
			autoSwitchCube:autoSwitchCube,
			baselineCrossed:baselineCrossed,
			autoScaleAttempted:autoScaleAttempted,
			autoScaleCube:autoScaleCube,

			//Tele-op Info
			teleSwitchScored:teleSwitchScored,
			SwitchCubesAttempted:SwitchCubesAttempted,
			teleScaleScored:teleScaleScored,
			teleSwitchSpeed:teleSwitchSpeed,
			teleScaleSpeed:teleScaleSpeed,
			teleVaultSpeed:teleVaultSpeed,
			teleStruggle:teleStruggle,
			teleDied:teleDied,
			endgame:endgame,
			teleClimb:teleClimb,
			teleClimbSpeed:teleClimbSpeed,
			ScaleCubesAttempted:ScaleCubesAttempted,
			defense:defense,
			evasion:evasion,
			teleVaultScored:teleVaultScored,
			qualitative:qualitative
			
		}

		var Duplicate = false;
		var CurrentTeam = Data.find({team}).fetch();	
		console.log(CurrentTeam)	

		//Lopps the amount of times that there is data for a team
		for(var i in CurrentTeam){
			console.log("we tried: " + i)
				
			//if the current checking match has been submitted before then 
			if(numb == CurrentTeam[i].match){
				console.log("sent to dups")
				DuplicateMatches.insert(matchData);
				Duplicate = true;
				break;							
			}
		}
		
		if(Duplicate === false){
			console.log("send to nromal")
			Data.insert(matchData);			
			}
		}
		//e.target.text.reset();
	}
});


Template.data.helpers({
	Alldata: function () {
		

		if (currentSearch.get() === ""){
			return Data.find().fetch();
			
		}

		else{

			return Data.find({team: currentSearch.get()}).fetch();

		}

	},

		
});

Template.matchDataInsert.helpers({
	
	SwitchCubesAttempted: function() {
		return SwitchAttempted.get();
	},

	SwitchCubesScored: function() {
		return switchScored.get();
	},

	ScaleCubesAttempted: function() {
		return ScaleAttempted.get();
	},

	ScaleCubesScored: function() {
		return scaleScored.get();
	},

	VaultCubesScored: function() {
		return vaultScored.get();
	},



	baselineCrossedUnlock: function() {
		if(baselineUnlock.get()) {
			console.log("working")
			return true;
		}

		else {
			console.log("not wotkng")
			return false;
		}
	},

	switchUnlock: function() {
		if(switchUnlock.get()) {
			console.log("working")
			return true;
		}

		else {
			console.log("not wotkng")
			return false;
		}
	},

	scaleUnlock: function() {
		if(scaleUnlock.get()) {
			console.log("working")
			return true;
		}

		else {
			console.log("not wotkng")
			return false;
		}
	},

	climbUnlock: function() {
		if(climbUnlock.get()) {
			console.log("working")
			return true;
		}

		else {
			console.log("not wotkng")
			return false;
		}
	}

	
});
