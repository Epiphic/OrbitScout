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

			console.log(Object.keys(SortedData()).length)

			for(i=0; i < Object.keys(SortedData()).length; i++){	

				console.log(Object.keys(SortedData())[i])			

					currentTeam = SortedData()[Object.keys(SortedData())[i]];

					

					teamMatches = {


	                Team: Object.keys(SortedData())[i],

	                SwitchCubes: currentTeam.advancedaverages.SwitchCubeAvg,

	                ScaleCubes: currentTeam.advancedaverages.ScaleCubeAvg,

	                VaultCubes: currentTeam.advancedaverages.VaultCubeAvg,

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

		            { key: 'Team', label: 'Team #', cellClass: (value, object) => "table-info"},
		            { key: 'SwitchCubes', label: 'Switch Cubes', cellClass: (value, object) => "table-info"},
		            { key: 'ScaleCubes', label: 'Scale Cubes', cellClass: (value, object) => "table-info"},
		            { key: 'VaultCubes', label: 'Vault Cubes', cellClass: (value, object) => "table-info"},
		            { key: 'SwitchAuto', label: 'Switch Auto', cellClass: (value, object) => "table-info"},
		            { key: 'ScaleAuto', label: 'Scale Auto', cellClass: (value, object) => "table-info"},
		            { key: 'DefenseRating', label: 'Defense Rating', cellClass: (value, object) => "table-info"}

		             ]
		        };
		    }
			
});

