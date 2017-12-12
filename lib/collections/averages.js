
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
			qualitative = ("Match " + teams[i].matches[j].match + ": " + teams[i].matches[j].qualitative + "\n") + qualitative;

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


		//------------------------------------------TOTAL STATS-----------------------------------------

		//AUTO TOTAL STATS
		var totalSideGearAverage = 0;
		var totalMiddleGearAverage = 0;
		var totalBaselineAverage = 0;


		totalSideGearAverage = round((teams[i].averages.gearSideWorked / (teams[i].averages.gearSideWorked+teams[i].averages.gearSideNotWorked)*100), 1);
		totalMiddleGearAverage = round((teams[i].averages.gearMiddleWorked / (teams[i].averages.gearMiddleWorked+teams[i].averages.gearMiddleNotWorked)*100), 1);
		totalBaselineAverage = round((teams[i].averages.baselineCrossed / (teams[i].averages.baselineCrossed+teams[i].averages.baselineNotCrossed)*100), 1);
		
		//TELEOP TOTAL STATS

		var totalGearsScoredAverage = 0;
		var totalGearsDroppedAverage = 0;
		var totalFuelAverage = 0;

		totalGearsScoredAverage = round((teams[i].averages.teleGear / teams[i].averages.matches), 1);
		totalGearsDroppedAverage = round(((teams[i].averages.teleAttemptedGear - teams[i].averages.teleGear) / teams[i].averages.matches), 1);










		//--------------------------LAST 3 STATS ----------------------------------

		//AUTO LAST 3
		var totalSideGearAverageREC = 0;
		var totalMiddleGearAverageREC = 0;
		var totalBaselineAverageREC = 0;
		
		totalSideGearAverageREC = round((gearSideWorkedREC / (gearSideWorkedREC+gearSideNotWorkedREC)*100), 1);
		totalMiddleGearAverageREC = round((gearMiddleWorkedREC / (gearMiddleWorkedREC+gearMiddleNotWorkedREC)*100), 1);
		totalBaselineAverageREC = round((baselineCrossedREC / (baselineCrossedREC+baselineNotCrossedREC)*100), 1);
		


		//TELEOP LAST 3
		var totalGearsScoredAverageREC = 0;
		var totalGearsDroppedAverageREC = 0;
		var totalFuelAverageREC = 0;

		totalGearsScoredAverageREC = round((teleGearREC / teams[i].averages.matches), 1);
		totalGearsDroppedAverageREC = round(((teleAttemptedGearREC - teleGearREC)/ teams[i].averages.matches), 1);













	//======================================================USE THE TOTAL STATS AND RECENT STATS TO FIND CHANCE TO HIT USING BOTH.=====================================

		var ChancetoHit_Baseline = round(((totalBaselineAverage*0.4) + (totalBaselineAverageREC*0.6)), 1);
		var ChancetoHit_MiddleGear = round(((totalMiddleGearAverage*0.4) + (totalMiddleGearAverageREC*0.6)), 1);
		var ChancetoHit_SideGear = round(((totalSideGearAverage*0.4) + (totalSideGearAverageREC*0.6)), 1);


		//---------------------------------------------ETNER ALL OF THE STATS------------------------------------------------------
		teams[i].advancedaverages = {

			//TOTAL AUTO
			totalMiddleGearAverage,
			totalSideGearAverage,
			totalBaselineAverage,

			//TOTAL TELEOP
			totalGearsScoredAverage,
			totalGearsDroppedAverage,

			//LAST 3 AUTO
			totalBaselineAverageREC,
			totalMiddleGearAverageREC,
			totalSideGearAverageREC,

			//LAST 3 TELEOP
			totalGearsScoredAverageREC,
			totalGearsDroppedAverageREC,

			//CHANCE TO HITY SHITE

			ChancetoHit_Baseline,
			ChancetoHit_MiddleGear,
			ChancetoHit_SideGear
		}

		//IF ANYTHING IS NAN MAKE IT 0
		for(var j in teams[i].advancedaverages){
			if(teams[i].advancedaverages[j] < 0){
				teams[i].advancedaverages[j] = 0;
			}
		}
	}

	console.log(teams)

	return teams;
};























export function AdvancedStats(teamtofind1, teamtofind2, teamtofind3){

	// ALL THE FUNCTIONS I NEED FOR QUICK MATHS=====================================
	var arr = {	
		max: function(array) {
			return Math.max.apply(null, array);
		},
		
		min: function(array) {
			return Math.min.apply(null, array);
		},
		
		range: function(array) {
			return arr.max(array) - arr.min(array);
		},
		
		midrange: function(array) {
			return arr.range(array) / 2;
		},

		sum: function(array) {
			var num = 0;
			for (var i = 0, l = array.length; i < l; i++) num += array[i];
			return num;
		},
		
		mean: function(array) {
			return arr.sum(array) / array.length;
		},
		
		median: function(array) {
			array.sort(function(a, b) {
				return a - b;
			});
			var mid = array.length / 2;
			return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
		},
		
		modes: function(array) {
			if (!array.length) return [];
			var modeMap = {},
				maxCount = 0,
				modes = [];

			array.forEach(function(val) {
				if (!modeMap[val]) modeMap[val] = 1;
				else modeMap[val]++;

				if (modeMap[val] > maxCount) {
					modes = [val];
					maxCount = modeMap[val];
				}
				else if (modeMap[val] === maxCount) {
					modes.push(val);
					maxCount = modeMap[val];
				}
			});
			return modes;
		},
		
		variance: function(array) {
			var mean = arr.mean(array);
			return arr.mean(array.map(function(num) {
				return Math.pow(num - mean, 2);
			}));
		},
		
		standardDeviation: function(array) {
			return Math.sqrt(arr.variance(array));
		},
		
		meanAbsoluteDeviation: function(array) {
			var mean = arr.mean(array);
			return arr.mean(array.map(function(num) {
				return Math.abs(num - mean);
			}));
		},
		
		zScores: function(array) {
			var mean = arr.mean(array);
			var standardDeviation = arr.standardDeviation(array);
			return array.map(function(num) {
				return (num - mean) / standardDeviation;
			});
		}
	};

function normalcdf(mean, sigma, to) 
{
    var z = (to-mean)/Math.sqrt(2*sigma*sigma);
    var t = 1/(1+0.3275911*Math.abs(z));
    var a1 =  0.254829592;
    var a2 = -0.284496736;
    var a3 =  1.421413741;
    var a4 = -1.453152027;
    var a5 =  1.061405429;
    var erf = 1-(((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-z*z);
    var sign = 1;
    if(z < 0)
    {
        sign = -1;
    }
    return (1/2)*(1+sign*erf);
}



//ALL THE MATH I NEEDED =========================================================================

	var BasicStats = SortedData();

	var GearWorth = 20;
	var baselineWorth = 5;


	

	//console.log(BasicStats[teamtofind1]);
	//console.log(BasicStats[teamtofind1].advancedaverages.ChancetoHit_MiddleGear);

	//-------------------------------------------------FIND WHO HAS THE HIGHEST MIDDLE GAER AVERAGE----------------------------------------------
	var Middle = "";
	var highScore = BasicStats[teamtofind1].advancedaverages.ChancetoHit_MiddleGear;
	Middle = "To Run Middle Gear: " + teamtofind1.toString()
	
	if(BasicStats[teamtofind2].advancedaverages.ChancetoHit_MiddleGear > highScore){
		Middle = "To Run Middle Gear: " + teamtofind2.toString()
		highScore = BasicStats[teamtofind2].advancedaverages.ChancetoHit_MiddleGear;

		if(BasicStats[teamtofind3].advancedaverages.ChancetoHit_MiddleGear > highScore){
			Middle = "To Run Middle Gear: " + teamtofind3.toString()
		}	

	}
	else if(BasicStats[teamtofind3].advancedaverages.ChancetoHit_MiddleGear > highScore){

		Middle = "To Run Middle Gear: " + teamtofind3.toString()
	}

	//console.log(Middle)

	//---------------------------------------------FIND WHO HAS HIGHEST SIDE GEAR------------------------------------------
	var Side = "";
	var highScore = BasicStats[teamtofind1].advancedaverages.ChancetoHit_SideGear;
	Side = "To Run Side Gear: " + teamtofind1.toString()

	if(BasicStats[teamtofind2].advancedaverages.ChancetoHit_SideGear > highScore){
		Side = "To Run Side Gear: " + teamtofind2.toString()
		highScore = BasicStats[teamtofind2].advancedaverages.ChancetoHit_SideGear;

		if(BasicStats[teamtofind3].advancedaverages.ChancetoHit_SideGear > highScore){
			Side = "To Run Side Gear: " + teamtofind3.toString()
		}	

	}
	else if(BasicStats[teamtofind3].advancedaverages.ChancetoHit_SideGear > highScore){

		Side = "To Run Side Gear: " + teamtofind3.toString()
	}


	//============================================TELE OP=================================================

	//FINDING STANDARD DEVIATION
	

	// TEAM 1
	var teleGearArrayTeam1 = [];

	for(var i = 0; i < BasicStats[teamtofind1].matches.length; i++){
		teleGearArrayTeam1.push(BasicStats[teamtofind1].matches[i].teleGear);
	};
	//TEAM 1


	//TEAM 2
	var teleGearArrayTeam2 = [];

	for(var i = 0; i < BasicStats[teamtofind2].matches.length; i++){
		teleGearArrayTeam2.push(BasicStats[teamtofind2].matches[i].teleGear);
	};
	//TEAM 2

	//TEAM 3
	var teleGearArrayTeam3 = [];

	for(var i = 0; i < BasicStats[teamtofind3].matches.length; i++){
		teleGearArrayTeam3.push(BasicStats[teamtofind3].matches[i].teleGear);
	};
	//TEAM 3
	
	;

	var teleGearsDeviationTeam1 = arr.standardDeviation(teleGearArrayTeam1);
	var teleGearsDeviationTeam2 = arr.standardDeviation(teleGearArrayTeam2);
	var teleGearsDeviationTeam3 = arr.standardDeviation(teleGearArrayTeam3);

	var teleGearsNormalCDFTeam1 = round(1 - normalcdf(BasicStats[teamtofind1].advancedaverages.totalGearsScoredAverage, teleGearsDeviationTeam1, 4), 2);
	var teleGearsNormalCDFTeam2 = round(1 - normalcdf(BasicStats[teamtofind2].advancedaverages.totalGearsScoredAverage, teleGearsDeviationTeam2, 4), 2);
	var teleGearsNormalCDFTeam3 = round(1 - normalcdf(BasicStats[teamtofind3].advancedaverages.totalGearsScoredAverage, teleGearsDeviationTeam3, 4), 2);
	//console.log(teleGearsDeviationTeam1);
	//console.log(teleGearsNormalCDFTeam1);


	var strat = {
		Middle,
		Side,
		teleGearsDeviationTeam1,
		teleGearsDeviationTeam2,
		teleGearsDeviationTeam3,

		teleGearsNormalCDFTeam1,
		teleGearsNormalCDFTeam2,
		teleGearsNormalCDFTeam3


		

	}

	return strat;

};





function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


































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
