
export function SortedData(){
	
	RawData = Data.find().fetch();

	//SORTING MATCHES INTO TEAMS CODE
	var teams = {}
	for(var i=0; i in RawData; i++){
				
		if(RawData[i].team in teams){

			
			teams[RawData[i].team].matches.push(RawData[i])
			//console.log(teams[RawData[i].team])

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

		var autoSwitchFound = 0;
		var autoScaleFound = 0;

		var autoSwitchScored = 0;
		var autoScaleScored = 0;
		var vaultScored = 0;

		var switchFound = 0;
		var switchNotFound = 0;
		var scaleFound = 0;
		var scaleNotFound = 0;

		var teleSwitchSpeedFast = 0;
		var teleSwitchSpeedMedium = 0;
		var teleSwitchSpeedSlow = 0;
		var teleSwitchSpeedverySlow = 0;

		var teleScaleSpeedFast = 0;
		var teleScaleSpeedMedium = 0;
		var teleScaleSpeedSlow = 0;
		var teleScaleSpeedVerySlow = 0;

		var teleStruggleYesScale = 0;
		var teleStruggleYesSwitch = 0;
		var teleStruggleYesBoth = 0;
		var teleStruggleNo = 0;

		var teleSwitchScored = 0;
		var teleScaleScored = 0;

		var teleSwitchAttempted = 0;
		var teleScaleAttempted = 0;

		
		var qualitative = "";

		var climbAttempted = 0;
		var climbSuccessful = 0;
		
		var climbSpeedFast = 0;
		var climbSpeedMedium = 0;
		var climbSpeedSlow = 0;		
		var climbSpeedVerySlow = 0;					

		var teleDied = 0;
		var teleNotDied = 0;

		var endgameNotPart = 0;
		var endgamePark = 0;
		var endgamePartnerClimb = 0;
		var endgame1bot = 0;
		var endgame2bot = 0;
		var endgame3bot = 0;

		var qualitative = "";
		var defenseRating = 0;
		var evasionRating = 0;

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
			/////////////////////////////////////////////////////////

			//AUTO SWITCH
			if(teams[i].matches[j].switchFound === "foundYes"){
				switchFound += 1;
			}
			else{
				switchNotFound += 1;
			}

			//AUTO SWITCH AMOUNT SCORED
			if(teams[i].matches[j].autoSwitchCube === "cubeSwitch1"){
				autoSwitchScored += 1;
			}

			else if(teams[i].matches[j].autoSwitchCube === "cubeSwitch2"){
				autoSwitchScored += 2;
			}

			///////////////////////////////////////////////////////////

			//AUTO SCALE
			if(teams[i].matches[j].scaleFound === "foundYes"){
				scaleFound += 1;
			}
			else{
				scaleNotFound += 1;
			}

			//AUTO SCALE AMOUNT SCORED
			if(teams[i].matches[j].autoScaleCube === "cubeScale1"){
				autoScaleScored += 1;
			}

			else if(teams[i].matches[j].autoScaleCube === "cubeScale2"){
				autoScaleScored += 2;
			}

			////////////////////////////////////////////////////

			teleSwitchScored += teams[i].matches[j].teleSwitchScored;
			teleScaleScored += teams[i].matches[j].teleScaleScored;
			vaultScored += teams[i].matches[j].teleVaultScored;

			teleSwitchAttempted += teams[i].matches[j].teleSwitchAttempted;
			teleScaleAttempted += teams[i].matches[j].teleSwitchAttempted;
			
////////////////////////////////////////SWITCHS PEED///////////////////////////////////////////////

			if(teams[i].matches[j].teleSwitchSpeed === "switchFast"){
				teleSwitchSpeedFast += 1;
			}

			else if(teams[i].matches[j].teleSwitchSpeed === "switchMedium"){
				teleSwitchSpeedMedium += 1;
			}

			else if(teams[i].matches[j].teleSwitchSpeed === "switchSlow"){
				teleSwitchSpeedSlow += 1;
			}

			else{
				teleSwitchSpeedVerySlow += 1;
			}
		
			////////////////////////////////SCALE SPEED//////////////////////////////
			if(teams[i].matches[j].teleScaleSpeed === "scaleFast"){
				teleScaleSpeedFast += 1;
			}

			else if(teams[i].matches[j].teleScaleSpeed === "scaleMedium"){
				teleScaleSpeedMedium += 1;
			}

			else if(teams[i].matches[j].teleScaleSpeed === "scaleSlow"){
				teleScaleSpeedSlow += 1;
			}

			else{
				teleScaleSpeedVerySlow += 1;
			}

			//////////////////////////////////////////////END GAME/////////////////////////////////////////

			if(teams[i].matches[j].endgame === "NotParked"){
				endgameNotPark += 1;
			}

			else if(teams[i].matches[j].endgame === "Parked"){
				endgamePark += 1;
			}

			else if(teams[i].matches[j].endgame === "climbOtherTeam"){
				endgamePartnerClimbe += 1;
			}

			else if(teams[i].matches[j].endgame === "climbOne"){
				endgame1bot += 1;
			}

			else if(teams[i].matches[j].endgame === "climbTwo"){
				endgame2bot += 1;
			}

			else{
				endgame3bot += 1;
			}

			///////////////////////////////////////////YES OR NO CLIMB WORKED/////////////////////////////////
			
			if(teams[i].matches[j].teleClimb === "climbYes"){
				climbSuccessful += 1;
			}
			else{
				climbAttempted += 1;
			}

			///////////////////////////////////////CLIMB SPEEEEEEEEEEEEED //////////////////////////////////////////
			if(teams[i].matches[j].teleClimbSpeed === "scaleFast"){
				climbSpeedFast += 1;
			}

			else if(teams[i].matches[j].teleClimbSpeed === "scaleMedium"){
				climbSpeedMedium += 1;
			}

			else if(teams[i].matches[j].teleClimbSpeed === "scaleSlow"){
				climbSpeedSlow += 1;
			}

			else{
				climbSpeedVerySlow += 1;
			}

			//////////////////////////////////////////////STRUIGLEEEEEEEEEE/////////////////////////////////////////

			if(teams[i].matches[j].teleStruggle === "struggleYesScale"){
				teleStruggleYesScale += 1;
			}

			else if(teams[i].matches[j].teleStruggle === "struggleYesSwitch"){
				teleStruggleYesSwitch += 1;
			}

			else if(teams[i].matches[j].teleStruggle === "struggleYesBoth"){
				teleStruggleYesBoth += 1;
			}

			else{
				teleStruggleNo += 1;
			}
			

			/////////////////////////////////////////////////////TELE DIED//////////////////////////////

			if(teams[i].matches[j].teleDied === "Yes"){
				teleDied += 1;
			}

			else{
				teleNotDied += 1;
			}

			/////////////////////////////////////////////QUALITATIVE////////////////////////////////////////////////////
			qualitative = ("Match " + teams[i].matches[j].match + ": " + teams[i].matches[j].qualitative) + qualitative;

			

			

			////////////////////////////////////////////////TELE DEFENSE///////////////////////////////////////////////
			if(teams[i].matches[j].defense === "defense1"){
				defenseRating += 1;
			}

			else if(teams[i].matches[j].defense === "defense2"){
				defenseRating += 2;
			}
			else if(teams[i].matches[j].defense === "defense3"){
				defenseRating += 3;
			}
			else if(teams[i].matches[j].defense === "defense4"){
				defenseRating += 4;
			}
			else if(teams[i].matches[j].defense === "defense5"){
				defenseRating += 5;
			}
			else{
				defenseRating += 2;
			}

			////////////////////////////////////////////////TELE EVASIONS///////////////////////////////////////////////
			if(teams[i].matches[j].evasion === "defense1"){
				evasionRating += 1;
			}

			else if(teams[i].matches[j].evasion === "defense2"){
				evasionRating += 2;
			}
			else if(teams[i].matches[j].evasion === "defense3"){
				evasionRating += 3;
			}
			else if(teams[i].matches[j].evasion === "defense4"){
				evasionRating += 4;
			}
			else if(teams[i].matches[j].evasion === "defense5"){
				evasionRating += 5;
			}
			else{
				evasionRating += 2;
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
			teleNotDied,
			defenseRating
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

		var defenseRatingREC = 0;

		for(var j = 1; j <= 3; j++){

			
			var Last3 = teams[i].matches[teams[i].averages.matches-j];
			//console.log(Last3)
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

			//TELE DEFENSE
			if(Last3.defense === "defense1"){
				defenseRatingREC += 1;
			}

			else if(Last3.defense === "defense2"){
				defenseRatingREC += 2;
			}
			else if(Last3.defense === "defense3"){
				defenseRatingREC += 3;
			}
			else if(Last3.defense === "defense4"){
				defenseRatingREC += 4;
			}
			else if(Last3.defense === "defense5"){
				defenseRatingREC += 5;
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
		var totaldefenseRating =0;

		totalGearsScoredAverage = round((teams[i].averages.teleGear / teams[i].averages.matches), 1);
		totalGearsDroppedAverage = round(((teams[i].averages.teleAttemptedGear - teams[i].averages.teleGear) / teams[i].averages.matches), 1);
		totaldefenseRating = round((teams[i].averages.defenseRating / teams[i].averages.matches), 1);
		//console.log("defse" + totaldefenseRating)








		
		//--------------------------LAST 3 STATS ----------------------------------

		//AUTO LAST 3
		var totalSideGearAverageREC = 0;
		var totalMiddleGearAverageREC = 0;
		var totalBaselineAverageREC = 0;
		
		totalSideGearAverageREC = round((gearSideWorkedREC / (gearSideWorkedREC+gearSideNotWorkedREC)*100), 1);
		totalMiddleGearAverageREC = round((gearMiddleWorkedREC / (gearMiddleWorkedREC+gearMiddleNotWorkedREC)*100), 1);

		//console.log(round((gearMiddleWorkedREC / (gearMiddleWorkedREC+gearMiddleNotWorkedREC)*100), 1))
		

		totalBaselineAverageREC = round((baselineCrossedREC / (baselineCrossedREC+baselineNotCrossedREC)*100), 1);
		


		//TELEOP LAST 3
		var totalGearsScoredAverageREC = 0;
		var totalGearsDroppedAverageREC = 0;
		var totalFuelAverageREC = 0;
		var totaldefenseRatingREC = 0;

		totalGearsScoredAverageREC = round((teleGearREC / teams[i].averages.matches), 1);
		totalGearsDroppedAverageREC = round(((teleAttemptedGearREC - teleGearREC)/ teams[i].averages.matches), 1);
		totaldefenseRatingREC = round((defenseRatingREC / teams[i].averages.matches), 1);
		//console.log("defse RECENTA" + totaldefenseRatingREC)














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
			totaldefenseRating,

			//LAST 3 AUTO
			totalBaselineAverageREC,
			totalMiddleGearAverageREC,
			totalSideGearAverageREC,

			//LAST 3 TELEOP
			totalGearsScoredAverageREC,
			totalGearsDroppedAverageREC,
			totaldefenseRatingREC,

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

	
	//console.log(teams)

	return teams;
};























export function AdvancedStats(teamtofind1, teamtofind2, teamtofind3){
	console.log(teamtofind1);


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





	//====================================CHANCE TO HIT 4 ROTORS===============================

	
	var totalGears = BasicStats[teamtofind1].advancedaverages.totalGearsScoredAverage + BasicStats[teamtofind2].advancedaverages.totalGearsScoredAverage + BasicStats[teamtofind3].advancedaverages.totalGearsScoredAverage
	var gearNeeded = (12 - totalGears)/3
	//console.log("gear needed" + gearNeeded)
	
	var gearPerTeam = (gearNeeded / 3)
	//console.log("gear per yeam" + gearPerTeam)

	var rotorchanceTeam1 = round(1 - normalcdf(BasicStats[teamtofind1].advancedaverages.totalGearsScoredAverage, teleGearsDeviationTeam1, gearPerTeam+BasicStats[teamtofind1].advancedaverages.totalGearsScoredAverage), 2);
	var rotorchanceTeam2 = round(1 - normalcdf(BasicStats[teamtofind2].advancedaverages.totalGearsScoredAverage, teleGearsDeviationTeam2, gearPerTeam+BasicStats[teamtofind2].advancedaverages.totalGearsScoredAverage), 2);
	var rotorchanceTeam3 = round(1 - normalcdf(BasicStats[teamtofind3].advancedaverages.totalGearsScoredAverage, teleGearsDeviationTeam3, gearPerTeam+BasicStats[teamtofind3].advancedaverages.totalGearsScoredAverage), 2);
	//console.log(rotorchanceTeam1)
	var rotorchanceTotal = round(((rotorchanceTeam1 + rotorchanceTeam2 + rotorchanceTeam3)/3), 2)

	//console.log(rotorchanceTotal);


	//==============================================GRAPH CALCUMATIOJSS=-==============================================
	
	AllianceAverageGears = (BasicStats[teamtofind1].advancedaverages.totalGearsScoredAverage + BasicStats[teamtofind2].advancedaverages.totalGearsScoredAverage + BasicStats[teamtofind3].advancedaverages.totalGearsScoredAverage)
	AllianceDeviationAverage = round(((teleGearsDeviationTeam1 + teleGearsDeviationTeam1 + teleGearsDeviationTeam1)/2),1)

	ChanceforAlliancetohit1gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 1))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 1.5))*100, 0);
	ChanceforAlliancetohit2gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 1.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 2.5))*100, 0);
	ChanceforAlliancetohit3gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 2.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 3.5))*100, 0);
	ChanceforAlliancetohit4gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 3.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 4.5))*100, 0);
	ChanceforAlliancetohit5gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 4.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 5.5))*100, 0);
	ChanceforAlliancetohit6gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 5.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 6.5))*100, 0);
	ChanceforAlliancetohit7gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 6.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 7.5))*100, 0);
	ChanceforAlliancetohit8gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 7.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 8.5))*100, 0);
	ChanceforAlliancetohit9gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 8.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 9.5))*100, 0);
	ChanceforAlliancetohit10gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 9.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 10.5))*100, 0);
	ChanceforAlliancetohit11gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 10.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 11.5))*100, 0);
	ChanceforAlliancetohit12gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 11.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 12.5))*100, 0);
	ChanceforAlliancetohit13gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 12.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 13.5))*100, 0);
	ChanceforAlliancetohit14gear = round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 14.5))*100, 0) - round(100 - (normalcdf(AllianceAverageGears, AllianceDeviationAverage, 13.5))*100, 0);
	//console.log(ChanceforAlliancetohit1gear);



	var strat = {
		Middle,
		Side,
		teleGearsDeviationTeam1,
		teleGearsDeviationTeam2,
		teleGearsDeviationTeam3,

		teleGearsNormalCDFTeam1,
		teleGearsNormalCDFTeam2,
		teleGearsNormalCDFTeam3,

		//FOR STRATSGRAPH
		ChanceforAlliancetohit1gear,
		ChanceforAlliancetohit2gear,
		ChanceforAlliancetohit3gear,
		ChanceforAlliancetohit4gear,
		ChanceforAlliancetohit5gear,
		ChanceforAlliancetohit6gear,
		ChanceforAlliancetohit7gear,
		ChanceforAlliancetohit8gear,
		ChanceforAlliancetohit9gear,
		ChanceforAlliancetohit10gear,
		ChanceforAlliancetohit11gear,
		ChanceforAlliancetohit12gear,
		ChanceforAlliancetohit13gear,
		ChanceforAlliancetohit14gear,


		

	}

	return strat;

};






export function StratGraph(teamtofind1,teamtofind2,teamtofind3,teamtofind4,teamtofind5,teamtofind6){
		localAdvancedRed = AdvancedStats(teamtofind1,teamtofind2,teamtofind3);
		localAdvancedBlue = AdvancedStats(teamtofind4,teamtofind5,teamtofind6);
	
		//Reset the Graph and MatchTotal so that the graph updates instead of just adds more graphs, without this it kept adding graphs
		red = ['red']
		blue = ['blue']
		
		MatchTotal = []

		MatchTotal.push(red,blue)
		
//----------------------------------------------------------------ALL GRAPH DATA---------------------------------------------------------\\
		red.push(
			localAdvancedRed.ChanceforAlliancetohit1gear,
			localAdvancedRed.ChanceforAlliancetohit2gear,
			localAdvancedRed.ChanceforAlliancetohit3gear,
			localAdvancedRed.ChanceforAlliancetohit4gear,
			localAdvancedRed.ChanceforAlliancetohit5gear,
			localAdvancedRed.ChanceforAlliancetohit6gear,
			localAdvancedRed.ChanceforAlliancetohit7gear,
			localAdvancedRed.ChanceforAlliancetohit8gear,
			localAdvancedRed.ChanceforAlliancetohit9gear,
			localAdvancedRed.ChanceforAlliancetohit10gear,
			localAdvancedRed.ChanceforAlliancetohit11gear,
			localAdvancedRed.ChanceforAlliancetohit12gear,
			localAdvancedRed.ChanceforAlliancetohit13gear,
			localAdvancedRed.ChanceforAlliancetohit14gear,
			)

		blue.push(
			localAdvancedBlue.ChanceforAlliancetohit1gear,
			localAdvancedBlue.ChanceforAlliancetohit2gear,
			localAdvancedBlue.ChanceforAlliancetohit3gear,
			localAdvancedBlue.ChanceforAlliancetohit4gear,
			localAdvancedBlue.ChanceforAlliancetohit5gear,
			localAdvancedBlue.ChanceforAlliancetohit6gear,
			localAdvancedBlue.ChanceforAlliancetohit7gear,
			localAdvancedBlue.ChanceforAlliancetohit8gear,
			localAdvancedBlue.ChanceforAlliancetohit9gear,
			localAdvancedBlue.ChanceforAlliancetohit10gear,
			localAdvancedBlue.ChanceforAlliancetohit11gear,
			localAdvancedBlue.ChanceforAlliancetohit12gear,
			localAdvancedBlue.ChanceforAlliancetohit13gear,
			localAdvancedBlue.ChanceforAlliancetohit14gear,
			)
		console.log(blue,red)
		console.log(MatchTotal)
		return MatchTotal;
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

	//console.log(teamtofind);


//----------------------------------------------------------------ALL GRAPH DATA---------------------------------------------------------\\
	DataTeamSearched = (Data.find({team: teamtofind}).fetch()); 

	for(var i in DataTeamSearched){
		
		TelePointsTotal.push(parseInt(DataTeamSearched[i].TelePoints));

		AutoPointsTotal.push(parseInt(DataTeamSearched[i].AutoPoints));

		GraphClimbTotal.push(parseInt(DataTeamSearched[i].GraphClimb));

		PrestoTotal.push(parseInt(DataTeamSearched[i].PrestoGraph));
	}
	// console.log(MatchTotal)
	console.log(MatchTotal)
	return MatchTotal;
};


