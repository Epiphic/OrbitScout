import { Teamlookup } from "../../lib/collections/averages.js"
import { TeamPoints } from "../../lib/collections/averages.js"
import { SortedData } from "../../lib/collections/averages.js"

TeamData = new ReactiveVar();
red1 = new ReactiveVar();
red2 = new ReactiveVar();
red3 = new ReactiveVar();

blue1 = new ReactiveVar();
blue2 = new ReactiveVar();
blue3 = new ReactiveVar();

var mostRecentMatch = new ReactiveVar(0);
var tbaMatch = new ReactiveVar();

MatchNumber = new ReactiveVar();
MatchNumberIn = new ReactiveVar();

Template.strategy.events({
	'click #strategySearch': function () {

		HTTP.call('GET', 'https://www.thebluealliance.com/api/v3/event/' + '2017onsc' + '/matches?X-TBA-Auth-Key=qFdMSZDjbHO7i5OYQl7MUW2oXz4Oxrr0z74s5GR89QVA2dcWx45dfu9HpHfoUtZd', {}, function(error, response) {
			tbaMatch.set(response);
			//console.log(tbaMatch);
			});
	
		

		for(i=0; i < tbaMatch.get().data.length; i++){
			
			if(tbaMatch.get().data[i].comp_level == "qm" && tbaMatch.get().data[i].alliances.blue.score > 1 && tbaMatch.get().data[i].match_number > mostRecentMatch.get()){
				mostRecentMatch.set(tbaMatch.get().data[i].match_number)
				};
			}

		mostRecentMatch.set(14);
		MatchNumber.set(mostRecentMatch.get()+1)



		if($('#strategySearch').val() === "Next"){
			console.log(tbaMatch.get().data.length)

			for(i=0; i<tbaMatch.get().data.length; i++){
				if(tbaMatch.get().data[i].match_number ==  MatchNumber.get() && tbaMatch.get().data[i].comp_level == "qm"){
					red1.set(tbaMatch.get().data[i].alliances.red.team_keys[0].replace("frc", ""))
					red2.set(tbaMatch.get().data[i].alliances.red.team_keys[1].replace("frc", ""))
					red3.set(tbaMatch.get().data[i].alliances.red.team_keys[2].replace("frc", ""))

					blue1.set(tbaMatch.get().data[i].alliances.blue.team_keys[0].replace("frc", ""))
					blue2.set(tbaMatch.get().data[i].alliances.blue.team_keys[1].replace("frc", ""))
					blue3.set(tbaMatch.get().data[i].alliances.blue.team_keys[2].replace("frc", ""))
				}
			}

			
			

		}

		else if($('#strategySearch').val() === "NextIn"){
		console.log(MatchNumber.get())	
			
			for(i=0; i<tbaMatch.get().data.length; i++){
								
				if(tbaMatch.get().data[i].match_number >= MatchNumber.get() && tbaMatch.get().data[i].comp_level == "qm"){
							
					red1.set(tbaMatch.get().data[i].alliances.red.team_keys[0].replace("frc", ""))
					red2.set(tbaMatch.get().data[i].alliances.red.team_keys[1].replace("frc", ""))
					red3.set(tbaMatch.get().data[i].alliances.red.team_keys[2].replace("frc", ""))

					blue1.set(tbaMatch.get().data[i].alliances.blue.team_keys[0].replace("frc", ""))
					blue2.set(tbaMatch.get().data[i].alliances.blue.team_keys[1].replace("frc", ""))
					blue3.set(tbaMatch.get().data[i].alliances.blue.team_keys[2].replace("frc", ""))
										
					if(red1.get() == 1360 || red2.get() == 1360|| red3.get() == 1360|| blue1.get() == 1360|| blue2.get() == 1360|| blue2.get() == 1360|| blue3.get()== 1360){
									
						ingame = true;
						MatchNumberIn.set(tbaMatch.get().data[i].match_number);

						console.log(MatchNumberIn.get())
						break;
					}					
				}
			}
		}

		else{

			red1.set($('#red1').val());
			red2.set($('#red2').val());
			red3.set($('#red3').val());
			blue1.set($('#blue1').val());
			blue2.set($('#blue2').val());
			blue3.set($('#blue3').val());
		}
		
		$("#red1").val(red1.get())
		$("#red2").val(red2.get())
		$("#red3").val(red3.get())

		$("#blue1").val(blue1.get())
		$("#blue2").val(blue2.get())
		$("#blue3").val(blue3.get())

		red1.set('1325')
		red2.set('1360')
		red3.set('1241')

		console.log(SortedData()[red1.get()]);
		
	}
});

Template.strategy.helpers({
	MatchNumber: function(){
		return MatchNumber.get();
	},


	MatchNumberIn: function(){
		return MatchNumberIn.get();
	},

	//-------------------------BEGIN TEAM STUFF--------------------------------
	//RED 1
	TeamDataRed1: function() {			
		return SortedData()[red1.get()];		
	},
	TeamNumberRed1: function() {
		return red1.get();
	},
	//RED 2
	TeamDataRed2: function() {			
		return SortedData()[red2.get()];		
	},
	TeamNumberRed2: function() {
		return red2.get();
	},

	//RED 3
	TeamDataRed3: function() {			
		return SortedData()[red3.get()];		
	},
	TeamNumberRed3: function() {
		return red3.get();
	},

	
});
