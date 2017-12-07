import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	download: function() {
	var collection = Data.find().fetch();
	  var heading = true; // Optional, defaults to true
	  var delimiter = "," // Optional, defaults to ",";
	  return exportcsv.exportToCSV(collection, heading, delimiter);

  }
});

