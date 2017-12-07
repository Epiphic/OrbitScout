import { Teamlookup } from "../../lib/collections/averages.js"
import { TeamGraph } from "../../lib/collections/averages.js"

var lookup = new ReactiveVar("");
var TeamPicture = new ReactiveVar("");


Template.teamlookup.events({
	'click #lookupTeam': function () {
		
		lookup.set($('.teamLookup').val());
        
        //console.log(Dutti.get())

      /*HTTP.call('GET', 'https://www.thebluealliance.com/api/v3/team/frc' + (lookup.get()).toString() + '/media/2017?X-TBA-Auth-Key=qFdMSZDjbHO7i5OYQl7MUW2oXz4Oxrr0z74s5GR89QVA2dcWx45dfu9HpHfoUtZd', {}, function(error, response) {
           TeamPicture.set('https://i.imgur.com/' + response.data[0].foreign_key + ".png");
});
       */ 

}

	
});

Template.teamlookup.helpers({
	"myChartData": function() {
        
        return {

        	axis: {
        		y: {
        			
			            max: 400,
			            min: 0,
			            // Range includes padding, set 0 if no padding needed
			            padding: {top:0, bottom:0}
			        
				   
				  },

        		rotated: true,
			

				},

            data: {
            	order: null,
                columns: TeamGraph(lookup.get()),
                type: 'bar',
                groups: [
                       ['Tele-Op', 'End-Game', 'Auto', 'Presto']
                        ]
                    },  
           
             
                };
            },



	Teamlookup: function() {
		

		return Teamlookup(lookup.get());
		
	},

	/*TeamPicture: function() {

		console.log(TeamPicture.get())
		return TeamPicture.get()
	}*/
	
});
