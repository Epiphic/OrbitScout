
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

	//--------------------------------------AVERAGE CALC-------------------------------
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

		var teleClimbYes = 0;
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
			teleClimbYes,
			teleClimbTried,
			teleClimbNotTried,
			teleDied,
			teleNotDied
		}

	}

	for(var i in teams){
		
		//--------------------------------------LAST 3 MATCHES AVERAGE ------------------------------------------
		//REDO ALL THE STUFF ABOVE EXCEPT FOR LAST 3 MATCHES
		
		
		var baselineCrossedREC = 0;
		var baselineNotCrossedREC = 0;

		var gearSideWorkedREC = 0;
		var gearSideNotWorkedREC = 0;
		var gearMiddleWorkedREC = 0;
		var gearMiddleNotWorkedREC = 0;
		var gearNoREC = 0;

		var kpaAutoYesREC = 0;
		var kpaAutoNoREC = 0;

		var PrestoGearREC = 0;
		var PrestoFuelREC = 0;
		var PrestoBothREC = 0;
		var PrestoNoneREC = 0;

		var teleAttemptedGearREC = 0;
		var teleGearREC = 0;

		var lowKpaREC = 0;
		var medKpaREC = 0;
		var highKpaREC = 0;

		var teleClimbYesREC = 0;
		var teleClimbTriedREC = 0;
		var teleClimbNotTriedREC = 0;

		var teleDiedREC = 0;
		var teleNotDiedREC = 0;

		for(var j = 1; j <= 3; j++){

			
			var Last3 = teams[i].matches[teams[i].averages.matches-j];
			//console.log(Last3)

			if(Last3 === undefined){
				break;
			}

			//BASELINE CROSSING 
			if(Last3.baselineCrossed === "crossYes"){
				baselineCrossedREC += 1;
			}

			else{
				baselineNotCrossedREC += 1;
			}

			//GEAR AUTO
			if(Last3.gearAuto === "gearSideWorked"){
				gearSideWorkedREC += 1;
			}

			else if(Last3.gearAuto === "gearSideTried"){
				gearSideNotWorkedREC += 1;
			}

			else if(Last3.gearAuto === "gearMiddleWorked"){
				gearMiddleWorkedREC += 1;
			}

			else if(Last3.gearAuto === "gearMiddleTried"){
				gearMiddleNotWorkedREC += 1;
			}
			else{
				gearNoREC += 1;
			}

			//KPA AUTO
			if(Last3.kpaAuto === "Yes"){
				kpaAutoYesREC += 1;
			}

			else{
				kpaAutoNoREC += 1;
			}

			//PRESTO FUEAL
			if(Last3.presto === "PrestoGear"){
				PrestoGearREC += 1;
			}

			else if(Last3.presto === "PrestoFuel"){
				PrestoFuelREC += 1;
			}

			else if(Last3.presto === "PrestoBoth"){
				PrestoBothREC += 1;
			}

			else{
				PrestoNoneREC += 1;
			}

			//TELE GEARS
			teleAttemptedGearREC += Last3.teleAttemptedGear;
			teleGearREC += Last3.teleGear;

			//TELE KPA
			if(Last3.teleKpa === "lowKPA"){
				lowKpaREC += 1;
			}

			else if(Last3.teleKpa === "medKPA"){
				medKpaREC += 1;
			}

			else{
				highKpaREC += 1;
			}

			//TELE CLIMB
			if(Last3.teleClimb === "Yes"){
				teleClimbYesREC += 1;
			}

			else if(Last3.teleClimb === "Tried"){
				teleClimbTriedREC += 1;
			}

			else{
				teleClimbNotTriedREC += 1;
			}

			//TELE DIED
			if(Last3.teleDied === "Yes"){
				teleDiedREC += 1;
			}

			else{
				teleNotDiedREC += 1;
			}
		}


		//------------------------------------------FIRST LOOPS STATS WHICH ARE THE TOTAL ONES-----------------------------------------

		var totalSideGearAverage = 0;
		var totalMiddleGearAverage = 0;
		var totalBaselineAverage = 0;
				
		totalSideGearAverage = Math.round(teams[i].averages.gearSideWorked / (teams[i].averages.gearSideWorked+teams[i].averages.gearSideNotWorked)*100);
		totalMiddleGearAverage = Math.round(teams[i].averages.gearMiddleWorked / (teams[i].averages.gearMiddleWorked+teams[i].averages.gearMiddleNotWorked)*100);
		totalBaselineAverage = Math.round(teams[i].averages.baselineCrossed / (teams[i].averages.baselineCrossed+teams[i].averages.baselineNotCrossed)*100);
		

		//--------------------------SECOND LOOPS STATS WHICH ARE THE LAST 3 ----------------------------------

		var totalSideGearAverageREC = 0;
		var totalMiddleGearAverageREC = 0;
		var totalBaselineAverageREC = 0;
		
		totalSideGearAverageREC = Math.round(gearSideWorkedREC / (gearSideWorkedREC+gearSideNotWorkedREC)*100);
		totalMiddleGearAverageREC = Math.round(gearMiddleWorkedREC / (gearMiddleWorkedREC+gearMiddleNotWorkedREC)*100);
		totalBaselineAverageREC = Math.round(baselineCrossedREC / (baselineCrossedREC+baselineNotCrossedREC)*100);
		


		//USE THE TOTAL STATS AND RECENT STATS TO FIND CHANCE TO HIT USING BOTH.

		var ChancetoHit_Baseline = (totalBaselineAverage*0.4) + (totalBaselineAverageREC*0.6);
		var ChancetoHit_MiddleGear = (totalMiddleGearAverage*0.4) + (totalMiddleGearAverageREC*0.6);
		var ChancetoHit_SideGear = (totalSideGearAverage*0.4) + (totalSideGearAverageREC*0.6);


		//---------------------------------------------ETNER ALL OF THE STATS------------------------------------------------------
		teams[i].advancedaverages = {
			
			totalMiddleGearAverage,
			totalSideGearAverage,
			totalBaselineAverage,

			totalBaselineAverageREC,
			totalMiddleGearAverageREC,
			totalSideGearAverageREC,

			ChancetoHit_Baseline,
			ChancetoHit_MiddleGear,
			ChancetoHit_SideGear
		}
	}

	//console.log(teams)

	return teams;
};

export function AdvnacedStats(teamtofind1, teamtofind2, teamtofind3){
	var BasicStats = SortedData();
	var GearWorth = 20;
	var baselineWorth = 5;

	if(BasicStats.teamtofind1.advancedaverages.ChancetoHit_MiddleGear*0.01*GearWorth<





	var strat = {}
	strat = {

	}

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
