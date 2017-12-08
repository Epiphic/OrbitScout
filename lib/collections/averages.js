var Averages = new ReactiveVar();
var DataSorted = new ReactiveVar();

export function SortedData(){
	
	RawData = Data.find().fetch();

	//SORTING MATCHES INTO TEAMS CODE
	var teams = {}
	for(var i=0; i in RawData; i++){
				
		if(RawData[i].team in teams){

			
			teams[RawData[i].team].matches.push(RawData[i])

		}

		else{
			
			
			teams[RawData[i].team] = {
				matches: [],
				averages: {},
				advancedaverages: {}
			}

			j = i - 1
			i = j
		}
	}


	for(var i in teams){
		
		var matches = 0;

		var baselineCrossed = 0;
		var baselineNotCrossed = 0;

		var gearSideWorked = 0;
		var gearSideNotWorked = 0;
		var gearMiddleWorked = 0;
		var gearMiddleNotWorked = 0;
		var gearNo = 0;

		var kpaAutoYes = 0;
		var kpaAutoNo = 0;

		var PrestoGear = 0;
		var PrestoFuel = 0;
		var PrestoBoth = 0;
		var PrestoNone = 0;

		var qualitative = "";

		var teleAttemptedGear = 0;
		var teleGear = 0;

		var lowKpa = 0;
		var medKpa = 0;
		var highKpa = 0;

		var teleDiedYes = 0;
		var teleClimbTried = 0;
		var teleClimbNotTried = 0;

		var teleDied = 0;
		var teleNotDied = 0;

		for(var j in teams[i].matches){
			//console.log(teams[i].matches[j])
			matches += 1;

			//BASELINE CROSSING 
			if(teams[i].matches[j].baselineCrossed === "crossYes"){
				baselineCrossed += 1;
			}

			else{
				baselineNotCrossed += 1;
			}

			//GEAR AUTO
			if(teams[i].matches[j].gearAuto === "gearSideWorked"){
				gearSideWorked += 1;
			}

			else if(teams[i].matches[j].gearAuto === "gearSideTried"){
				gearSideNotWorked += 1;
			}

			else if(teams[i].matches[j].gearAuto === "gearMiddleWorked"){
				gearMiddleWorked += 1;
			}

			else if(teams[i].matches[j].gearAuto === "gearMiddleTried"){
				gearMiddleNotWorked += 1;
			}
			else{
				gearNo += 1;
			}

			//KPA AUTO
			if(teams[i].matches[j].kpaAuto === "Yes"){
				kpaAutoYes += 1;
			}

			else{
				kpaAutoNo += 1;
			}

			//PRESTO FUEAL
			if(teams[i].matches[j].presto === "PrestoGear"){
				PrestoGear += 1;
			}

			else if(teams[i].matches[j].presto === "PrestoFuel"){
				PrestoFuel += 1;
			}

			else if(teams[i].matches[j].presto === "PrestoBoth"){
				PrestoBoth += 1;
			}

			else{
				PrestoNone += 1;
			}

			//QUALITATIVE
			qualitative = ("Match " + teams[i].matches[j].match + ": " + teams[i].matches[j].qualitative + " ")

			//TELE GEARS
			teleAttemptedGear += teams[i].matches[j].teleAttemptedGear;
			teleGear += teams[i].matches[j].teleGear;

			//TELE KPA
			if(teams[i].matches[j].teleKpa === "lowKPA"){
				lowKpa += 1;
			}

			else if(teams[i].matches[j].teleKpa === "medKPA"){
				medKpa += 1;
			}

			else{
				highKPA += 1;
			}

			//TELE CLIMB
			if(teams[i].matches[j].teleClimb === "Yes"){
				teleClimbYes += 1;
			}

			else if(teams[i].matches[j].teleClimb === "Tried"){
				teleClimbTried += 1;
			}

			else{
				teleClimbNotTried += 1;
			}

			//TELE DIED
			if(teams[i].matches[j].teleDied === "Yes"){
				teleDied += 1;
			}

			else{
				teleNotDied += 1;
			}
		}
		
		teams[i].averages = {
			matches,
			baselineCrossed,
			baselineNotCrossed,
			gearSideWorked,
			gearSideNotWorked,
			gearMiddleWorked,
			gearMiddleNotWorked,
			gearNo,
			kpaAutoYes,
			kpaAutoNo,
			PrestoGear,
			PrestoFuel,
			PrestoBoth,
			PrestoNone,
			qualitative,
			teleAttemptedGear,
			teleGear,
			lowKpa,
			medKpa,
			highKpa,
			teleDiedYes,
			teleClimbTried,
			teleClimbNotTried,
			teleDied,
			teleNotDied
		}

	}

	for(var i in teams){
		
		//TOTAL AVERAGE STATS
		var totalSideGearAverage = 0;
		var totalMiddleGearAverage = 0;
		var totalBaselineAverage = 0;
				
		totalSideGearAverage = teams[i].averages.gearSideWorked / (teams[i].averages.gearSideWorked+teams[i].averages.gearSideNotWorked)*100;
		totalMiddleGearAverage = teams[i].averages.gearMiddleWorked / (teams[i].averages.gearMiddleWorked+teams[i].averages.gearMiddleNotWorked)*100;
		totalBaselineAverage = teams[i].averages.baselineCrossed / (teams[i].averages.baselineCrossed+teams[i].averages.baselineNotCrossed)*100;
		

		








		//LAST 3 MATCHES AVERAGE
		for(var i = 1; i < 3; i++){
			var Last3 = teams[i].matches[teams[i].averages.matches-i];
		}






















		teams[i].advancedaverages = {
			totalMiddleGearAverage,
			totalSideGearAverage,
			totalBaselineAverage
		}
	}

	console.log(teams)
	DataSorted.set(teams)
};











































export function Last3Matches(teamtofind){
	var Last3Matches = Data.find({team: teamtofind}).fetch()

	var Last3AutoBasePercentage = 0;
	var Last3AutoSidegGearPercentage = 0;
	var Last3AutoMiddleGearPercentage = 0;

	var Match1 = Last3Matches[rawAverage.matches-1];
	var Match2 = Last3Matches[rawAverage.matches-2];
	var Match3 = Last3Matches[rawAverage.matches-3];
	

};

export function AutoStats(teamtofind){
	var rawAverage = Teamlookup(teamtofind);

	console.log(rawAverage);
	AutoStas = {}

	var AutoBasePercentage = 0;
	var AutoMiddleGearPercentage =0;
	var AutoSideGearPercentage =0;

	AutoBasePercentage = rawAverage.AutoBaseyes/(rawAverage.AutoBaseyes+rawAverage.AutoBaseno)*100;
	AutoMiddleGearPercentage = rawAverage.AutoGearMiddleAverageWorked/(rawAverage.AutoGearMiddleAverageWorked+rawAverage.AutoGearMiddleAverageNotWork)*100;
	AutoSideGearPercentage = rawAverage.AutoGearSideAverageWorked/(rawAverage.AutoGearSideAverageWorked+rawAverage.AutoGearSideAverageNotWork)*100;








	AutoStas = {
		AutoBasePercentage,
		AutoSideGearPercentage,
		AutoMiddleGearPercentage
	}

	console.log(AutoStas);
	return AutoStas;

}

export function Teamlookup(teamtofind){
	
	Averages = {}

	var CurrentTeam = Data.find({team: teamtofind}).fetch();


	var matches = 0;

	//AUTO BASELINE VARIABLES
	var AutoBaseyes = 0;
	var AutoBaseno = 0;

	//AUTO GEARSIDE VARIALBES
	var AutoGearSideAverageWorked = 0;
	var AutoGearSideAverageNotWork = 0;
	var AutoGearMiddleAverageWorked = 0;
	var AutoGearMiddleAverageNotWork = 0;

	//AUTO KPA AVERAGE VARIABLES
	var AutoKPAyes = 0;
	var AutoKPAno = 0;
	
	//TELEOP CURRENT MATCH VARIABLES
	var gearDataNew = 0;
	var gearMissedNew = 0;

	//TELEOP GEARMISSED AVERAGE VARIABLES	
	var gearAverage = 0;
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
	for(var i in CurrentTeam){
			matches += 1;

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
		}


//----------------------------------------------------------ADD THE DATA TO THE ARRAY-------------------------------------------------------------

	
		Averages = {
		matches,		
		AutoBaseyes,
		AutoBaseno,
		//AUTO GEARSIDE VARIALBES
		AutoGearSideAverageWorked,
		AutoGearSideAverageNotWork,
		AutoGearMiddleAverageWorked,
		AutoGearMiddleAverageNotWork,

		//AUTO KPA AVERAGE VARIABLES
		AutoKPAyes,
		AutoKPAno,
		
		//TELEOP CURRENT MATCH VARIABLES
		gearDataNew,
		gearMissedNew,

		//TELEOP GEARMISSED AVERAGE VARIABLES	
		gearAverage,
		gearMissedAverage,
		
		//TELEOP KPA SCORED VARIABLES
		lowKPA,
		medKPA, 
		highKPA, 

		//TELEOP CLIMB STATS VARIABLES
		 Climbed, 
		noClimbed, 
		noClimbTry, 
		
		//TELEOP ROBOT DIED STATS VARIABLES
		teleDiedYes, 
		teleDiedNo, 

		//PRESTO STATS VARIABLES
		prestoGear, 
		prestoFuel,

		//MATCH AVERAGE POINTS VARIABLE
		MatchAveragePoints, 

		//QUALITATIVE DATA VARIABLE
		QualitativeData 
		

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
			
			TelePointsTotal.push(parseInt(DataTeamSearched[i].TelePoints));

			AutoPointsTotal.push(parseInt(DataTeamSearched[i].AutoPoints));

			GraphClimbTotal.push(parseInt(DataTeamSearched[i].GraphClimb));

			PrestoTotal.push(parseInt(DataTeamSearched[i].PrestoGraph));
		}

		return MatchTotal;
	};
