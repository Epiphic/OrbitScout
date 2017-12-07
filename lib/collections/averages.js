var Averages = new ReactiveVar();





export function AutoMatchAverages(teamtofind){


};

export function Teamlookup(teamtofind){
	
	Averages = {}

	var DuplicateMatches = []
	var CurrentTeam = Data.find({team: teamtofind}).fetch();
	var Matches = []

	//AUTO KPA AVERAGE VARIABLES
	var AutoKPAyes = 0;
	var AutoKPAno = 0;
	//AUTO BASELINE VARIABLES
	var AutoBaseyes = 0;
	var AutoBaseno = 0;
	//AUTO GEARSIDE VARIALBES
	var AutoGearSideAverageWorked = 0;
	var AutoGearSideAverageNotWork = 0;
	var AutoGearMiddleAverageWorked = 0;
	var AutoGearMiddleAverageNotWork = 0;
	//TELEOP GEAR AVERAGE VARIABLES
	var gearDataNew = 0;
	var gearAverage = 0;
	//TELEOP GEARMISSED AVERAGE VARIABLES
	var gearMissedNew = 0;
	var gearMissedAverage = 0;
	//TELEOP KPA SCORED VARIABLES
	var lowKPA = 0;
	var medKPA = 0;
	var highKPA = 0;
	//TELEOP CLIMB STATS VARIABLES
	var Climbed = 0;
	var noClimbed = 0;
	var noClimbTry = 0;
	//TELEOP ROBOT DIED STATS VARIABLES
	var teleDiedYes = 0;
	var teleDiedNo = 0;
	//PRESTO STATS VARIABLES
	var prestoGear = 0;
	var prestoFuel = 0;
	//MATCH AVERAGE POINTS VARIABLE
	var MatchAveragePoints = 0;
	//QUALITATIVE DATA VARIABLE
	var QualitativeData = "";
		
				

	//Lopps the amount of times that there is data for a team

			//--------------------------------------------------AUTO KPA AVERAGE--------------------------------------------------------
			if(CurrentTeam[i].kpaAuto === "Yes" ){
				AutoKPAyes += 1;				
			}

			else{
				AutoKPAno += 1;
			}
		
			var AutoKPA = AutoKPAyes;



			//------------------------------------------AUTO BASELINE CROSSED---------------------------------------------------------------
			if(CurrentTeam[i].baselineCrossed === "crossYes" ){
				AutoBaseyes += 1;
			}

			else{
				AutoBaseno += 1;
			}

			var AutoBase = AutoBaseyes;
			var AutoBasePercentage = AutoBaseyes/(AutoBaseyes+AutoBaseno)*100



			
			//-------------------------------------------AUTO GEARSIDE AND GEARMIDDLE AVERAGE------------------------------------------------------------
			if(CurrentTeam[i].gearAuto === "gearSideWorked" ){
				AutoGearSideAverageWorked += 1;
			}

			else if(CurrentTeam[i].gearAuto === "gearMiddleWorked" ){
				AutoGearMiddleAverageWorked += 1;				
			}
			
			else if(CurrentTeam[i].gearAuto === "gearSideTried" ){
				AutoGearSideAverageNotWork += 1;				
			}
			
			else if(CurrentTeam[i].gearAuto === "gearMiddleTried" ){
				AutoGearMiddleAverageNotWork += 1;
			}		

			var AutoSideGear = AutoGearSideAverageWorked;
			var AutoMiddleGear = AutoGearMiddleAverageWorked;
			var AutoSideGearPercentage = AutoGearSideAverageWorked/(AutoGearSideAverageWorked+AutoGearSideAverageNotWork)*100
			var AutoMiddleGearPercentage = AutoGearMiddleAverageWorked/(AutoGearMiddleAverageWorked+AutoGearMiddleAverageNotWork)*100


			//--------------------------------------------------------------TELEOP GEAR AVERAGE----------------------------------------------------------
			gearDataNew += parseInt(CurrentTeam[i].teleGear);
			gearAverage = gearDataNew/(parseInt(i)+1);

			//--------------------------------------------------------------TELEOP GEAR MISSED AVERAGE----------------------------------------------------------
			gearMissedNew += parseInt(CurrentTeam[i].teleAttemptedGear);
			gearMissedAverage = (gearMissedNew/(parseInt(i)+1)) - gearAverage;

			//-------------------------------------------TELEOP KPA SCORED ------------------------------------------------------------
			if(CurrentTeam[i].teleKpa === "lowKPA" ){
				lowKPA += 1;
			}

			else if(CurrentTeam[i].teleKpa === "medKPA" ){
				medKPA += 1;
			}
			
			else if(CurrentTeam[i].teleKpa === "highKPA" ){
				highKPA += 1;
			}
			
			var teleKPA = "Low: " + lowKPA + " Med: " + medKPA + " High: " + highKPA;

			//-------------------------------------------TELEOP CLIMB STATS ------------------------------------------------------------
			if(CurrentTeam[i].teleClimb === "Yes" ){
				Climbed += 1;
			}

			else if(CurrentTeam[i].teleClimb === "Tried" ){
				noClimbed += 1;
			}
			
			else if(CurrentTeam[i].teleClimb === "notTried" ){
				noClimbTry += 1;
			}
			
			//------------------------------------------TELE ROBOT DIED---------------------------------------------------------------
			if(CurrentTeam[i].teleDied === "Yes" ){
				teleDiedYes += 1;
			}

			else{
				teleDiedNo += 1;
			}

			var teleDied = teleDiedYes;

			//------------------------------------------PRESTO STATS---------------------------------------------------------------
			if(CurrentTeam[i].presto === "PrestoGear" ){
				prestoGear += 1;
			}

			else if(CurrentTeam[i].presto === "PrestoFuel" ){
				prestoFuel += 1;
			}

			else if(CurrentTeam[i].presto === "PrestoBoth" ){
				prestoFuel += 1;
				prestoGear += 1;
 			}
		

			//--------------------------------------------------------------MATCH AVERAGE POINTS----------------------------------------------------------
			MatchAveragePoints += parseInt(CurrentTeam[i].TelePoints);
			MatchAveragePoints += parseInt(CurrentTeam[i].AutoPoints);
			MatchAveragePoints += parseInt(CurrentTeam[i].GraphClimb);
			MatchAveragePoints += parseInt(CurrentTeam[i].PrestoGraph);

			var MAP = MatchAveragePoints/(parseInt(i)+1);

			//------------------------------------------QUALITATIVE DATA---------------------------------------------------------------
			QualitativeData += ("Match " + i + ": " + CurrentTeam[i].qualitative + " ")
	

//----------------------------------------------------------ADD THE DATA TO THE ARRAY-------------------------------------------------------------

	
		Averages = {
			AutoMiddleGear:AutoMiddleGear,
			AutoSideGear:AutoSideGear,
			gearAverage:gearAverage,
			AutoKPA: AutoKPA,
			AutoBase:AutoBase,
			AutoBasePercentage,
			gearMissedAverage: gearMissedAverage,
			teleKPA:teleKPA,
			Climbed,
			noClimbed,
			noClimbTry,
			teleDied,
			prestoGear,
			prestoFuel,
			QualitativeData,
			MAP,
			DuplicateMatches
		

		};


		
	

































	return Averages;
};


export function TeamGraph(teamtofind){
	
		//Reset the Graph and MatchTotal so that the graph updates instead of just adds more graphs, without this it kept adding graphs
		AutoPointsTotal = ['Auto']
		TelePointsTotal = ['Tele-Op']
		GraphClimbTotal = ['End-Game']
		PrestoTotal = ['Presto']
		MatchTotal = []

		MatchTotal.push(AutoPointsTotal,TelePointsTotal,GraphClimbTotal,PrestoTotal)
		
		var CurrentMatch = ""
		var Matches = []
		var DuplicateMatches = []
		

//----------------------------------------------------------------ALL GRAPH DATA---------------------------------------------------------\\
		DataTeamSearched = (Data.find({team: teamtofind}).fetch()); 

		for(var i in DataTeamSearched){
			CurrentMatch = "match: "+DataTeamSearched[i].match

			if(Matches.indexOf(CurrentMatch) >= 0){

			DuplicateMatches.push(CurrentMatch)
			
			
		}
		else{
			Matches.push(CurrentMatch);

			TelePointsTotal.push(parseInt(DataTeamSearched[i].TelePoints));

			AutoPointsTotal.push(parseInt(DataTeamSearched[i].AutoPoints));

			GraphClimbTotal.push(parseInt(DataTeamSearched[i].GraphClimb));

			PrestoTotal.push(parseInt(DataTeamSearched[i].PrestoGraph));

			
			}
		}

		return MatchTotal;
	};


	
export function PerMatchData(teamtofind){
	
	AutoPointsTotal = ['Red 1 ']
	TelePointsTotal = ['Auto Side Gear']
	GraphClimbTotal = ['End-Game']
	PrestoTotal = ['Presto']
	MatchTotal = []
	MatchTotal.push(AutoPointsTotal,TelePointsTotal,GraphClimbTotal,PrestoTotal)
};
		

	
		
		
