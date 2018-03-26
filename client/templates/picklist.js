import { Teamlookup } from "../../lib/collections/averages.js"
import { TeamPoints } from "../../lib/collections/averages.js"
import { SortedData } from "../../lib/collections/averages.js"
import { AdvancedStats } from "../../lib/collections/averages.js"
import { StratGraph } from "../../lib/collections/averages.js"

var TeamStats = new ReactiveVar(); 

Template.picklist.events({
		'click #eventRefresh': function () {

			TeamStats.set([]);
			TotalStats = [];


			for(i=0; i <= SortedData().teams.length(); i++){				

					currentTeam = SortedData.teams[i];

					teamMatches = {


	                Team: SortedData.teams[i],

	                SwitchCubes: currentTeam.advancedaverages.SwitchCubesAvg,

	                ScaleCubes: currentTeam.advancedaverages.ScaleCubesAvg,

	                VaultCubes: currentTeam.advancedaverages.VaultCubesAvg,

	                SwitchAuto: currentTeam.advancedaverages.autoSwitchAvg,

	                ScaleAuto: currentTeam.advancedaverages.autoScaleAvg,

	               	DefenseRating: currentTeam.advancedaverages.defenseRating,

				};

					console.log(teamMatches)	
					TotalStats.push(teamMatches)				
											
			}
			TeamStats.set(TotalStats);
	
		


		
	}
});

Template.picklist.helpers({
	TeamTable: function() {
		
	return TeamStats.get();
		},

		settings: function () {
		       return {
		            rowsPerPage: 100,
		            showFilter: true,
		            fields:
		             [

		            { key: 'Team', label: 'Team #'},
		            { key: 'SwitchCubes', label: 'Switch Cubes'},
		            { key: 'ScaleCubes', label: 'Scale Cubes'},
		            { key: 'VaultCubes', label: 'Vault Cubes'},
		            { key: 'SwitchAuto', label: 'Switch Auto'},
		            { key: 'ScaleAuto', label: 'Scale Auto'},
		            { key: 'DefenseRating', label: 'Defense Rating'}

		             ]
		        };
		    }
			
});

