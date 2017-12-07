import { Teamlookup } from "../../lib/collections/averages.js"

var Teams = ReactiveVar();
var Duplicates = ReactiveVar();

Template.settings.events({
	'click #Check': function () {

		//Create the array that we can sue locally
		var TotalDuplicateArray = []

		//Call the TBA api and find all the teams at the event
		HTTP.call('GET', 'https://www.thebluealliance.com/api/v3/event/' + '2017onsc' + '/teams?X-TBA-Auth-Key=qFdMSZDjbHO7i5OYQl7MUW2oXz4Oxrr0z74s5GR89QVA2dcWx45dfu9HpHfoUtZd', {}, function(error, response) {
			Teams.set(response);			
		});

		//For each team at the event
		/*for(i=0; i < Teams.get().data.length; i++){

			//create a variable that ios set to the team it is currently cehcking
			var CurrentCheckingTeam = Teams.get().data[i].key.replace("frc", "")
			
			//set the current team duplicate to have all the data to check in the next if statement
			var CurrentTeamDuplicate = Teamlookup(CurrentCheckingTeam)

			//If the dupliucatematches from the lookup is not empty, then add this team to out array aswell as what match they are duplicated in
			if(CurrentTeamDuplicate.DuplicateMatches != "")			
				TotalDuplicateArray.push(CurrentCheckingTeam + " " + CurrentTeamDuplicate.DuplicateMatches)
			}

		//set the local variable to out glbal variable
		Duplicates.set(TotalDuplicateArray);*/

		console.log(DuplicateMatches.find().fetch())
	
	}
});



Template.settings.helpers({
	DuplicateMatches: function() {	
		
		return DuplicateMatches.find().fetch();
	},
	
});
