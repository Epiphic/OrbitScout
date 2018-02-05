import { Template } from 'meteor/templating';
import { SortedData } from "../../lib/collections/averages.js"


var currentSearch = new ReactiveVar("");

//Auto stuff
var switchScored = new ReactiveVar(0);
var switchAttempted = new ReactiveVar(0);

var scaleScored = new ReactiveVar(0);
var scaleAttempted = new ReactiveVar(0);

var vaultScored = new ReactiveVar(0);

var baselineUnlock = new ReactiveVar("");
var switchUnlock = new ReactiveVar("");
var scaleUnlock = new ReactiveVar("");

//Teleop Stuff
var climbUnlock = new ReactiveVar("");


function isBad(val) {
    //console.log(val);
    if(val == undefined || val == ""){
        return true
    }
    
}

Template.data.events({

	'click #searchTeam': function () {
		
		currentSearch.set($('.searchbyMatch').val());
		console.log(currentSearch);


	},
		//events
	'click #buttonDownload': function(event) {
	  var nameFile = 'fileDownloaded.csv';
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
		

		switchAttempted.set(switchAttempted.get() - 1)
		//console.log(Gears.get())

		
	},

	'click #addSwitchCubeAttempted': function (e) {
		e.preventDefault()

		switchAttempted.set(switchAttempted.get() + 1)
		//console.log(Gears.get())
		
	},

	'click #subtractSwitchCube': function (e) {
		e.preventDefault()
		

		switchScored.set(switchScored.get() - 1)
		//console.log(Gears.get())

		
	},

	'click #addSwitchCube': function (e) {
		e.preventDefault()

		switchScored.set(switchScored.get() + 1)
		//console.log(Gears.get())
		
	},

	'click #subtractScaleCubeAttempted': function (e) {
		e.preventDefault()
		scaleAttempted.set(scaleAttempted.get() - 1)
	},

	'click #addScaleCubeAttempted': function (e) {
		e.preventDefault()
		scaleAttempted.set(scaleAttempted.get() + 1)
	},

	'click #subtractScaleCube': function (e) {
		e.preventDefault()
		scaleScored.set(scaleScored.get() - 1)

	},

	'click #addScaleCube': function (e) {
		e.preventDefault()

		scaleScored.set(scaleScored.get() + 1)
			
	},

	'click #addVaultCube': function (e) {
		e.preventDefault()

		vaultScored.set(vaultScored.get() + 1)
			
	},

	'click #subtractVaultCube': function (e) {
		e.preventDefault()
		vaultScored.set(vaultScored.get() - 1)

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
		var numb = $('.newMatchNumber').val();
		var team = $('.newMatchTeam').val();
		var allianceS = $('#newAllianceStation').val();
		var scouter = $('.newScouter').val();

		//Auto Values
		if(baselineUnlock.get()){
			console.log("Baseline Unlocked");			
			var baselineCrossed = true;

			if(switchUnlock.get()){
				var switchFound = true;
				var autoSwitchCube = $('input[name=autoSwitchCube]:checked').val();
			}			
			else{
				var switchFound = false;
				var autoSwitchCube = "Locked"
			}

			if(switchUnlock.get()){
				var scaleFound = true;
				var autoScaleCube = $('input[name=autoScaleCube]:checked').val();
			}
			else{
				var switchFound = false;
				var autoScaleCube = "Locked"
			}
		}
		else{
			var baselineCrossed = false;

		}
				
		//Tele-op Values
		var teleSwtichScored = switchScored.get();
		var teleSwtichAttempted = switchAttempted.get();
		var teleScaleScored = scaleScored.get();
		var teleScaleAttempted = scaleAttempted.get();
		var teleVaultScored = vaultScored.get();

		var teleSwitchSpeed = $('input[name=switchSpeed]:checked').val();
		var teleScaleSpeed = $('input[name=scaleSpeed]:checked').val();
		var teleStruggle = $('input[name=struggle]:checked').val();
		var teleDied = $('input[name=matchDied]:checked').val();

		if(climbUnlock.get()){
			console.log("Climb Unlocked");
			var climbType = $('input[name=climbType]:checked').val();			
			var teleClimbSpeed = $('input[name=climbSpeed]:checked').val();

			if($('input[name=climbWork]:checked').val() == "climbYes"){
				var teleClimb = true;
			}
			else{
				var teleClimb = false;
			}
		}
		else{
			var teleClimb = false;
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
            (isBad(switchFound)) ||
            (isBad(autoSwitchCube)) ||
            (isBad(scaleFound)) ||
            (isBad(autoScaleCube)) ||
            (isBad(teleSwtichScored)) ||
            (isBad(teleSwtichAttempted)) ||
            (isBad(teleScaleScored)) ||
            (isBad(teleSwitchSpeed)) ||
            (isBad(teleScaleSpeed)) ||
            (isBad(teleStruggle)) ||
            (isBad(teleDied)) ||
            (isBad(teleClimb)) ||
            (isBad(teleClimbSpeed)) ||
            (isBad(teleScaleAttempted)) ||
            (isBad(defense)) ||
            (isBad(evasion)) ||
            (isBad(teleVaultScored))) ) {
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
			switchFound:switchFound,
			autoSwitchCube:autoSwitchCube,
			baselineCrossed:baselineCrossed,
			scaleFound:scaleFound,
			autoScaleCube:autoScaleCube,

			//Tele-op Info
			teleSwtichScored:teleSwtichScored,
			teleSwtichAttempted:teleSwtichAttempted,
			teleScaleScored:teleScaleScored,
			teleSwitchSpeed:teleSwitchSpeed,
			teleScaleSpeed:teleScaleSpeed,
			teleStruggle:teleStruggle,
			teleDied:teleDied,
			teleClimb:teleClimb,
			teleClimbSpeed:teleClimbSpeed,
			teleScaleAttempted:teleScaleAttempted,
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
		
		if(Duplicate == false){
			console.log("send to nromal")
			Data.insert(matchData);			
			}
		}
		//e.target.text.reset();
	}
});


Template.data.helpers({
	Alldata: function () {
		

		if (currentSearch.get() == ""){
			return Data.find().fetch();
			
		}

		else{

			return Data.find({team: currentSearch.get()}).fetch();

		}

	},

		
});

Template.matchDataInsert.helpers({
	
	SwitchCubesAttempted: function() {
		return switchAttempted.get();
	},

	SwitchCubesScored: function() {
		return switchScored.get();
	},

	ScaleCubesAttempted: function() {
		return scaleAttempted.get();
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
