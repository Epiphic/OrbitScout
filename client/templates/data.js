import { Template } from 'meteor/templating';

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
            (isBad(presto))) ) {
   			 // One field is empty somewhere
   			 alert("FILL THE WHOLE FORM");

   			 e.preventDefault();
   			 
			} 


		else {

		console.log('IT WORKS KIDO');
		


		//----------------------------------------------------MATCH POINTS FOR GRAPHS CALC---------------------------------------------------------------
		
		//--------------------KPA TELLEOP STATS FOR GRAPH-----------------------

		//2017 KPA tele stats
		var KPAteleGraph = 0;
		
		if(teleKpa == "lowKPA"){
			KPAteleGraph += 15;
		}
		else if(teleKpa == "medKPA"){
			KPAteleGraph += 25
		}
		else{
			KPAteleGraph += 35
		}


		//--------------------KPA AUTO STATS FOR GRAPH-----------------------

		//2017 KPA auto stats
		var KPAautoGraph = 0;
		
		if(kpaAuto == "Yes"){
			KPAautoGraph += 20;
		}


		//--------------------MIDDLE GEAR AUTO STATS FOR GRAPH-----------------------

		//2017 Middle gear auto check
		var MiddleGearGraph = 0;
		
		if(gearAuto == "gearMiddleWorked"){
			MiddleGearGraph += 20;
		}

		//--------------------SIDEGEAR AUTO STATS FOR GRAPH-----------------------

		//2017 Side gear auto check
		var SideGearGraph = 0;
		
		if(gearAuto == "gearSideWorked"){
			SideGearGraph += 20;
		}


		//--------------------BASELINE STATS FOR GRAPH-----------------------

		//2017 Baseline corssed is 5 points
		var BaselineCrossedGraph = 0;
		
		if(baselineCrossed == "crossYes"){
			baselineCrossed += 5;
		}

		//--------------------AUTO MATCH GRAPH-----------------------

		//Assuming a gear in auto is worth X amount of points
		//Assuming a good auto KPA is worth X amount of points
		var AutoPoints = 0;
		
		if(gearAuto == "gearMiddleWorked" || gearAuto == "gearSideWorked"){
			AutoPoints += 40;
		}
		else if (kpaAuto == "Yes"){
			AutoPoints += 20;
		}
		else if (baselineCrossed == "crossYes"){
			AutoPoints += 5;
		}

		//--------------------TELE MATCH GRAPH---------------------

		//Assuming a gear in Tele is worth X amount of points
		var TelePoints = 0;
		
		TelePoints += teleGear*20;

		if (teleKpa == "medKPA"){
			TelePoints += 15;
		}
		else if (teleKpa == "highKPA"){
			TelePoints += 30;
		}

		//--------------------ENDGAME MATCH GRAPH---------------------

		//Assuming a gear in Tele is worth X amount of points
		var GraphClimb = 0;
		

		if(teleClimb == "Yes"){
			GraphClimb += 50;
		}

		//--------------------PRESTO MATCH GRAPH---------------------

		//Assuming a gear in Tele is worth X amount of points
		var PrestoGraph = 0;
		

		if(presto == "PrestoGear" || "PrestoFuel"){
			if(presto == "PrestoBoth"){
				PrestoGraph += 50;

			}	

			else{
				PrestoGraph += 20;
			}		
		}
		



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
			qualitative: qualitative,

			//Graph Info
			TelePoints: TelePoints,
			AutoPoints: AutoPoints,
			GraphClimb: GraphClimb,
			PrestoGraph: PrestoGraph,
			

		}
		console.log(matchData);

		Data.insert(matchData);
		console.log(Data.find().fetch());

		
		e.target.text.reset();
		}


			
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
