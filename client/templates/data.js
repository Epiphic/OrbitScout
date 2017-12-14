import { Template } from 'meteor/templating';
import { SortedData } from "../../lib/collections/averages.js"


var currentSearch = new ReactiveVar("");

var Gears = new ReactiveVar(0);
var GearsAttempted = new ReactiveVar(0);

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

	'click #subtractGearAttempted': function (e) {
		e.preventDefault()
		

		GearsAttempted.set(GearsAttempted.get() - 1)
		//console.log(Gears.get())

		
	},

	'click #addGearAttempted': function (e) {
		e.preventDefault()

		GearsAttempted.set(GearsAttempted.get() + 1)
		//console.log(Gears.get())
		
	},

	'click #subtractGear': function (e) {
		e.preventDefault()
		

		Gears.set(Gears.get() - 1)
		//console.log(Gears.get())

		
	},

	'click #addGear': function (e) {
		e.preventDefault()

		Gears.set(Gears.get() + 1)
		//console.log(Gears.get())
		
	},
	

	'click #submitMatchData': function (e) {
		

		var matchData = {};

		//Match Info Values
		var numb = $('.newMatchNumber').val();
		var team = $('.newMatchTeam').val();

		var allianceS = $('#newAllianceStation').val();

		var scouter = $('.newScouter').val();

		//Auto Values
		var gearAuto = $('input[name=autoGear]:checked').val();
		var kpaAuto = $('input[name=kpaAuto]:checked').val();
		var baselineCrossed = $('input[name=crossedbaseline]:checked').val();
		
		//Tele-op Values
		var teleAttemptedGear = GearsAttempted.get();
		var teleGear = Gears.get();
		var teleKpa = $('input[name=radioKPA]:checked').val();
		var teleClimb = $('input[name=climb]:checked').val();
		var teleDied = $('input[name=matchDied]:checked').val();
		var presto = $('input[name=Presto]:checked').val();

		//Qualititative Data
		var qualitative = '"' + $('.qualitativeData').val() + '"';
		var defense = $('input[name=defense]:checked').val();

		
		if( ((isBad(numb)) ||
            (isBad(team)) ||
           	(isBad(allianceS)) ||
            (isBad(scouter)) ||
            (isBad(gearAuto)) ||
            (isBad(kpaAuto)) ||
            (isBad(baselineCrossed)) ||
            (isBad(teleAttemptedGear)) ||
            (isBad(teleGear)) ||
            (isBad(teleClimb)) ||
            (isBad(teleDied)) ||
            (isBad(teleKpa)) ||
            (isBad(defense)) ||
            (isBad(presto))) ) {
   			 // One field is empty somewhere
   			 alert("FILL THE WHOLE FORM");

   			 e.preventDefault();
   			 
			} 


		else {
			e.preventDefault();

		console.log('IT WORKS KIDO');
		
		matchData = {
			//Match Info 
			match:numb, 
			team:team, 
			station:allianceS,
			scouter:scouter, 

			//Auto Info
			gearAuto:gearAuto,
			kpaAuto:kpaAuto,
			baselineCrossed:baselineCrossed,

			//Tele-op Info
			teleAttemptedGear:teleAttemptedGear,
			teleGear:teleGear,
			teleKpa:teleKpa,
			teleClimb: teleClimb,
			teleDied:teleDied,
			presto: presto,
			defense: defense,
			qualitative: qualitative,
			
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
	
	GearsAttempted: function() {
		return GearsAttempted.get();
	},

	Gears: function() {
		return Gears.get();
	}

	
});
