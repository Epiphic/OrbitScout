var tbaMatch = new ReactiveVar();
var eventTeams = new ReactiveVar(); 

Template.scouted.events({
		'click #eventRefresh': function () {
			
			HTTP.call('GET', 'https://www.thebluealliance.com/api/v3/event/' + '2017onsc' + '/matches?X-TBA-Auth-Key=qFdMSZDjbHO7i5OYQl7MUW2oXz4Oxrr0z74s5GR89QVA2dcWx45dfu9HpHfoUtZd', {}, function(error, response) {
			tbaMatch.set(response);
			//console.log(tbaMatch);
			});
		
		//console.log(tbaMatch)

		eventTeams.set([]);
		var test = [];

		for(i=0; i < tbaMatch.get().data.length; i++){
			
			if(tbaMatch.get().data[i].comp_level == "qm"){
				qual = tbaMatch.get().data[i].match_number;
				

				teamMatches = {
                Qual: qual,
                Red1: tbaMatch.get().data[i].alliances.red.team_keys[0],
                Red1Scouted: Data.find({match: ""+qual, team: tbaMatch.get().data[i].alliances.red.team_keys[0].replace("frc", "")}).fetch().length > 0,
                Red2: tbaMatch.get().data[i].alliances.red.team_keys[1],
                Red2Scouted: Data.find({match: ""+qual, team: tbaMatch.get().data[i].alliances.red.team_keys[1].replace("frc", "")}).fetch().length > 0,
                Red3: tbaMatch.get().data[i].alliances.red.team_keys[2],
                Red3Scouted: Data.find({match: ""+qual, team: tbaMatch.get().data[i].alliances.red.team_keys[2].replace("frc", "")}).fetch().length > 0,
                Blue1: tbaMatch.get().data[i].alliances.blue.team_keys[0],
                Blue1Scouted: Data.find({match: ""+qual, team: tbaMatch.get().data[i].alliances.blue.team_keys[0].replace("frc", "")}).fetch().length > 0,
                Blue2: tbaMatch.get().data[i].alliances.blue.team_keys[1],
                Blue2Scouted: Data.find({match: ""+qual, team: tbaMatch.get().data[i].alliances.blue.team_keys[1].replace("frc", "")}).fetch().length > 0,
                Blue3: tbaMatch.get().data[i].alliances.blue.team_keys[2],
                Blue3Scouted: Data.find({match: ""+qual, team: tbaMatch.get().data[i].alliances.blue.team_keys[2].replace("frc", "")}).fetch().length > 0
 };
				console.log(teamMatches)
				test.push(teamMatches)
			}
				
						
		}
		eventTeams.set(test);
	}
		
	
});

Template.scouted.helpers({
	MatchSchedule: function() {
		
	return eventTeams.get();
		},

		settings: function () {
		       return {
		            rowsPerPage: 100,
		            showFilter: true,
		            fields:
		             [

		            { key: 'Qual', label: 'Qual #', cellClass: (value, object) => "table-info"},
		            { key: 'Red1', label: 'Red 1', cellClass: (value, object) => (object.Red1Scouted ? "table-success" : "table-danger")  },
		            { key: 'Red2', label: 'Red 2', cellClass: (value, object) => (object.Red2Scouted ? "table-success" : "table-danger")  },
		            { key: 'Red3', label: 'Red 3', cellClass: (value, object) => (object.Red3Scouted ? "table-success" : "table-danger")  },
		            { key: 'Blue1', label: 'Blue 1', cellClass: (value, object) => (object.Blue1Scouted ? "table-success" : "table-danger")  },
		            { key: 'Blue2', label: 'Blue 2', cellClass: (value, object) => (object.Blue2Scouted ? "table-success" : "table-danger")  },
		            { key: 'Blue3', label: 'Blue 3', cellClass: (value, object) => (object.Blue3Scouted ? "table-success" : "table-danger")  }

		             ]
		        };
		    }
			
});



