
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

		var autoSwitchScored = 0;
		var autoScaleScored = 0;

		var autoScaleSuccess = 0;
		var autoSwitchSuccess = 0;

		var vaultScored = 0;

		var autoSwitchAttempted = 0;
		var autoScaleAttempted = 0;
	
		var teleSwitchSpeed = 0;

		var teleScaleSpeed = 0;

		var teleStruggleYesScale = 0;
		var teleStruggleYesSwitch = 0;
		var teleStruggleYesBoth = 0;
		var teleStruggleNo = 0;

		var teleSwitchScored = 0;
		var teleScaleScored = 0;

		var teleSwitchAttempted = 0;
		var teleScaleAttempted = 0;

		var climbAttempted = 0;
		var climbSuccessful = 0;
		
		var climbSpeed = 0;			

		var teleDied = 0;
		var teleNotDied = 0;

		var endgameNotPark = 0;
		var endgamePark = 0;
		var endgamePartnerClimbed = 0;
		var endgameClimb = 0;

		var qualitative = "";
		var defenseRating = 0;
		var evasionRating = 0;

		for(var j in teams[i].matches){
			//console.log(teams[i].matches[j])
			matches += 1;

			//BASELINE CROSSING 
			if(teams[i].matches[j].baselineCrossed === "true"){
				baselineCrossed += 1;
			}

			else{
				baselineNotCrossed += 1;
			}
			/////////////////////////////////////////////////////////

			//AUTO SWITCH
			if(teams[i].matches[j].autoSwitchAttempted === "true"){
				autoSwitchAttempted += 1;
			}
			
			//AUTO SWITCH AMOUNT SCORED
			if(teams[i].matches[j].autoSwitchCube === "cubeSwitch1"){
				autoSwitchScored += 1;
				autoSwitchSuccess += 1;
			}

			else if(teams[i].matches[j].autoSwitchCube === "cubeSwitch2"){
				autoSwitchScored += 2;
				autoSwitchSuccess += 1;
			}

			///////////////////////////////////////////////////////////

			//AUTO SCALE
			if(teams[i].matches[j].autoScaleAttempted === "true"){
				autoScaleAttempted += 1;
			}
			
			//AUTO SCALE AMOUNT SCORED
			if(teams[i].matches[j].autoScaleCube === "cubeScale1"){
				autoScaleScored += 1;
				autoScaleSuccess += 1;
			}

			else if(teams[i].matches[j].autoScaleCube === "cubeScale2"){
				autoScaleScored += 2;
				autoScaleSuccess += 1;
			}

			////////////////////////////////////////////////////

			teleSwitchScored += teams[i].matches[j].teleSwitchScored;
			teleScaleScored += teams[i].matches[j].teleScaleScored;
			vaultScored += teams[i].matches[j].teleVaultScored;

			teleSwitchAttempted += teams[i].matches[j].SwitchCubesAttempted;
			teleScaleAttempted += teams[i].matches[j].ScaleCubesAttempted;
			
////////////////////////////////////////SWITCHS PEED///////////////////////////////////////////////

			if(teams[i].matches[j].teleSwitchSpeed === "switchFast"){
				teleSwitchSpeed += 1;
			}

			else if(teams[i].matches[j].teleSwitchSpeed === "switchMedium"){
				teleSwitchSpeed += 0.75;
			}

			else if(teams[i].matches[j].teleSwitchSpeed === "switchSlow"){
				teleSwitchSpeed += 0.5;
			}

			else{
				teleSwitchSpeed += 0.25;
			}
		
			////////////////////////////////SCALE SPEED//////////////////////////////
			if(teams[i].matches[j].teleScaleSpeed === "scaleFast"){
				teleScaleSpeed += 1;
			}

			else if(teams[i].matches[j].teleScaleSpeed === "scaleMedium"){
				teleScaleSpeed += 0.75;
			}

			else if(teams[i].matches[j].teleScaleSpeed === "scaleSlow"){
				teleScaleSpeed += 0.5;
			}

			else{
				teleScaleSpeed += 0.25;
			}

			//////////////////////////////////////////////END GAME/////////////////////////////////////////

			if(teams[i].matches[j].endgame === "parkNo"){
				endgameNotPark += 1;
			}

			else if(teams[i].matches[j].endgame === "parkYes"){
				endgamePark += 1;
			}

			else if(teams[i].matches[j].endgame === "climbOtherTeam"){
				endgamePartnerClimbed += 1;
				endgamePark += 1;
			}

			else if(teams[i].matches[j].endgame === "climbOne"){
				endgameClimb += 1;
				endgamePark += 1;
			}

			else if(teams[i].matches[j].endgame === "climbTwo"){
				endgameClimb += 2;
				endgamePark += 1;
			}

			else{
				endgameClimb += 3;
				endgamePark += 1;
			}

			///////////////////////////////////////////YES OR NO CLIMB WORKED/////////////////////////////////
			
			if(teams[i].matches[j].teleClimb === "climbYes"){
				climbSuccessful += 1;
			}
			else{
				climbAttempted += 1;
			}

			///////////////////////////////////////CLIMB SPEEEEEEEEEEEEED //////////////////////////////////////////
			if(teams[i].matches[j].teleClimbSpeed === "climbFast"){
				climbSpeed += 1;
			}

			else if(teams[i].matches[j].teleClimbSpeed === "climbMedium"){
				climbSpeed += 0.75;
			}

			else if(teams[i].matches[j].teleClimbSpeed === "climbSlow"){
				climbSpeed += 0.5;
			}

			else if(teams[i].matches[j].teleClimbSpeed === "Locked"){
				
			}

			else{
				climbSpeed += 0.25;
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
			autoSwitchScored, 
			autoScaleScored,
			autoSwitchSuccess,
			autoScaleSuccess,
			vaultScored, 
			autoSwitchAttempted, 
			autoScaleAttempted,
			teleSwitchSpeed, 
			teleScaleSpeed,
			teleStruggleYesScale, 
			teleStruggleYesSwitch, 
			teleStruggleYesBoth, 
			teleStruggleNo, 
			teleSwitchScored, 
			teleScaleScored, 
			teleSwitchAttempted, 
			teleScaleAttempted, 		
			qualitative,
			climbAttempted, 
			climbSuccessful, 			
			climbSpeed,	
			teleDied, 
			teleNotDied, 
			endgameNotPark, 
			endgamePark, 
			endgamePartnerClimbed,
			endgameClimb,
			qualitative, 
			defenseRating, 
			evasionRating, 
		}

	}

	for(var i in teams){
		
		//--------------------------------------LAST 3 MATCHES AVERAGE ------------------------------------------
		//REDO ALL THE STUFF ABOVE EXCEPT FOR LAST 3 MATCHES
			
		
		var matchesREC = 0;

		var baselineCrossedREC = 0;
		var baselineNotCrossedREC = 0;

		var autoSwitchScoredREC = 0;
		var autoScaleScoredREC = 0;

		var autoScaleSuccessREC = 0;
		var autoSwitchSuccessREC = 0;

		var vaultScoredREC = 0;

		var autoScaleAtteptedREC = 0;
		var autoSwitchAttemptREC = 0;
		
		var teleSwitchSpeedREC = 0;

		var teleScaleSpeedREC = 0;

		var teleStruggleYesScaleREC = 0;
		var teleStruggleYesSwitchREC = 0;
		var teleStruggleYesBothREC = 0;
		var teleStruggleNoREC = 0;

		var teleSwitchScoredREC = 0;
		var teleScaleScoredREC = 0;

		var teleSwitchAttemptedREC = 0;
		var teleScaleAttemptedREC = 0;

		
		var qualitativeREC = "";

		var climbAttemptedREC = 0;
		var climbSuccessfulREC = 0;
		
		var climbSpeedREC = 0;				

		var teleDiedREC = 0;
		var teleNotDiedREC = 0;

		var endgameNotParkREC = 0;
		var endgameParkREC = 0;
		var endgamePartnerClimbedREC = 0;
		var endgameClimbREC = 0;

		var defenseRatingREC = 0;
		var evasionRatingREC = 0;

		for(var j = 1; j <= 3; j++){


			var Last3 = teams[i].matches[teams[i].averages.matches-j];
			//console.log(Last3)
			//console.log(Last3)

			if(Last3 === undefined){
				break;
			}

			//BASELINE CROSSING 
			if(Last3.baselineCrossed === "true"){
				baselineCrossedREC += 1;
			}

			else{
				baselineNotCrossedREC += 1;
			}
			/////////////////////////////////////////////////////////

			//AUTO SWITCH
			if(Last3.autoSwitchAttempt === "attemptYes"){
				autoSwitchAttemptedREC += 1;
			}
		
			//AUTO SWITCH AMOUNT SCORED
			if(Last3.autoSwitchCube === "cubeSwitch1"){
				autoSwitchScoredREC += 1;
				autoSwitchSuccessREC += 1;

			}

			else if(Last3.autoSwitchCube === "cubeSwitch2"){
				autoSwitchScoredREC += 2;
				autoSwitchSuccessREC += 1;
			}

			///////////////////////////////////////////////////////////

			//AUTO SCALE
			if(Last3.autoScaleAttempt === "attemptYes"){
				autoScaleAtteptedREC += 1;
			}
			
			//AUTO SCALE AMOUNT SCORED
			if(Last3.autoScaleCube === "cubeScale1"){
				autoScaleScoredREC += 1;
				autoScaleSuccessREC += 1;
			}

			else if(Last3.autoScaleCube === "cubeScale2"){
				autoScaleScoredREC += 2;
				autoScaleSuccessREC += 1;
			}

			////////////////////////////////////////////////////

			teleSwitchScoredREC += Last3.teleSwitchScored;
			teleScaleScoredREC += Last3.teleScaleScored;
			vaultScoredREC += Last3.teleVaultScored;

			teleSwitchAttemptedREC += Last3.teleSwitchAttempted;
			teleScaleAttemptedREC += Last3.teleSwitchAttempted;
			
////////////////////////////////////////SWITCHS PEED///////////////////////////////////////////////

			if(Last3.teleSwitchSpeed === "switchFast"){
				teleSwitchSpeedREC += 1;
			}

			else if(Last3.teleSwitchSpeed === "switchMedium"){
				teleSwitchSpeedREC += 0.75;
			}

			else if(Last3.teleSwitchSpeed === "switchSlow"){
				teleSwitchSpeedREC += 0.5;
			}

			else{
				teleSwitchSpeedREC += 0.25;
			}
		
			////////////////////////////////SCALE SPEED//////////////////////////////
			if(Last3.teleScaleSpeed === "scaleFast"){
				teleScaleSpeedREC += 1;
			}

			else if(Last3.teleScaleSpeed === "scaleMedium"){
				teleScaleSpeedREC += 0.75;
			}

			else if(Last3.teleScaleSpeed === "scaleSlow"){
				teleScaleSpeedREC += 0.5;
			}

			else{
				teleScaleSpeedREC += 0.25;
			}

			//////////////////////////////////////////////END GAME/////////////////////////////////////////

			if(Last3.endgame === "parkNo"){
				endgameNotParkREC += 1;
			}

			else if(Last3.endgame === "parkYes"){
				endgameParkREC += 1;
			}

			else if(Last3.endgame === "climbOtherTeam"){
				endgamePartnerClimbedREC += 1;
			}

			else if(Last3.endgame === "climbOne"){
				endgameClimbREC += 1;
			}

			else if(Last3.endgame === "climbTwo"){
				endgameClimbREC += 2;
			}

			else{
				endgameClimbREC += 3;
			}

			///////////////////////////////////////////YES OR NO CLIMB WORKED/////////////////////////////////
			
			if(Last3.teleClimb === "climbYes"){
				climbSuccessfulREC += 1;
			}
			else{
				climbAttemptedREC += 1;
			}

			///////////////////////////////////////CLIMB SPEEEEEEEEEEEEED //////////////////////////////////////////
			if(Last3.teleClimbSpeed === "scaleFast"){
				climbSpeedREC += 1;
			}

			else if(Last3.teleClimbSpeed === "scaleMedium"){
				climbSpeedREC += 0.75;
			}

			else if(Last3.teleClimbSpeed === "scaleSlow"){
				climbSpeedREC += 0.5;
			}

			else{
				climbSpeedREC += 0.25;
			}

			//////////////////////////////////////////////STRUIGLEEEEEEEEEE/////////////////////////////////////////

			if(Last3.teleStruggle === "struggleYesScale"){
				teleStruggleYesScaleREC += 1;
			}

			else if(Last3.teleStruggle === "struggleYesSwitch"){
				teleStruggleYesSwitchREC += 1;
			}

			else if(Last3.teleStruggle === "struggleYesBoth"){
				teleStruggleYesBothREC += 1;
			}

			else{
				teleStruggleNoREC += 1;
			}
			

			/////////////////////////////////////////////////////TELE DIED//////////////////////////////

			if(Last3.teleDied === "Yes"){
				teleDiedREC += 1;
			}

			else{
				teleNotDiedREC += 1;
			}

			/////////////////////////////////////////////QUALITATIVE////////////////////////////////////////////////////
			qualitativeREC = ("Match " + Last3.match + ": " + Last3.qualitative) + qualitative;

			

			

			////////////////////////////////////////////////TELE DEFENSE///////////////////////////////////////////////
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
			else{
				defenseRatingREC += 2;
			}

			////////////////////////////////////////////////TELE EVASIONS///////////////////////////////////////////////
			if(Last3.evasion === "defense1"){
				evasionRatingREC += 1;
			}

			else if(Last3.evasion === "defense2"){
				evasionRatingREC += 2;
			}
			else if(Last3.evasion === "defense3"){
				evasionRatingREC += 3;
			}
			else if(Last3.evasion === "defense4"){
				evasionRatingREC += 4;
			}
			else if(Last3.evasion === "defense5"){
				evasionRatingREC += 5;
			}
			else{
				evasionRatingREC += 2;
			}

			
		}







		//------------------------------------------Basic average stats-----------------------------------------

		
		var ScaleCubeAvg = 0;
		ScaleCubeAvg = round((teams[i].averages.teleScaleScored / teams[i].averages.matches), 1);

		var SwitchCubeAvg = 0;
		SwitchCubeAvg = round((teams[i].averages.teleSwitchScored / teams[i].averages.matches), 1);

		var BaselineAvg = 0;
		BaselineAvg = round((teams[i].averages.baselineCrossed / teams[i].averages.matches)*100, 1);

		var ScaleDropAvg = 0;
		ScaleDropAvg = round((teams[i].averages.teleScaleAttempted / teams[i].averages.matches), 1);

		var SwitchDropAvg = 0;
		SwitchDropAvg = round((teams[i].averages.teleSwitchAttempted / teams[i].averages.matches), 1);

		var SwitchSpeed = 0;
		SwitchSpeed = round((teams[i].averages.teleSwitchSpeed/teams[i].averages.matches)*100, 1);
		
		var ScaleSpeed = 0;
		ScaleSpeed = round((teams[i].averages.teleScaleSpeed/teams[i].averages.matches)*100, 1);

		var climbSpeed = 0;
		climbSpeed = round((teams[i].averages.climbSpeed/teams[i].averages.matches)*100, 1);

		var climbSuccessRate = 0;
		climbSuccessRate = round((teams[i].averages.climbSuccessful/(teams[i].averages.climbSuccessful+teams[i].averages.climbAttempted))*100, 1);
	
		var VaultCubeAvg = 0;
		VaultCubeAvg = round((teams[i].averages.vaultScored / teams[i].averages.matches), 1);

		var autoSwitchAvg = 0;
		autoSwitchAvg = round((teams[i].averages.autoSwitchScored / (teams[i].averages.autoSwitchSuccess)), 1);

		var autoScaleAvg = 0;
		autoScaleAvg = round((teams[i].averages.autoScaleScored / (teams[i].averages.autoScaleSuccess)), 1);
		
		var teleDiedAvg = 0;
		teleDiedAvg = round((teams[i].averages.teleDied / teams[i].averages.matches)*100, 1);
		
		var ParkAvg = 0;
		ParkAvg = round((teams[i].averages.endgamePark / teams[i].averages.matches)*100, 1);

		var BotsClimbedAvg = 0;
		BotsClimbedAvg = round((teams[i].averages.endgameClimb / teams[i].averages.matches), 1);

		var autoSwitchSuccessAvg = 0;
		autoSwitchSuccessAvg = round((teams[i].averages.autoSwitchSuccess / (teams[i].averages.autoSwitchAttempted))*100, 1);

		var autoScaleSuccessAvg = 0;
		autoScaleSuccessAvg = round((teams[i].averages.autoScaleSuccess / (teams[i].averages.autoScaleAttempted))*100, 1);





		
		//--------------------------LAST 3 STATS ----------------------------------


		var ScaleCubeAvgREC = 0;
		ScaleCubeAvgREC = round((teleScaleScoredREC / matches), 1);

		var SwitchCubeAvgREC = 0;
		SwitchCubeAvgREC = round((teleSwitchScoredREC / matches), 1);

		var BaselineAvgREC = 0;
		BaselineAvgREC = round((baselineCrossedREC / matches)*100, 1);

		var ScaleDropAvgREC = 0;
		ScaleDropAvgREC = round(((teleScaleAttemptedREC - teleScaleScoredREC) / teleScaleAttemptedREC), 1);

		var SwitchDropAvgREC = 0;
		SwitchDropAvgREC = round(((teleSwitchAttemptedREC - teleSwitchScoredREC) / teleSwitchAttemptedREC), 1);

		var SwitchSpeedREC = 0;
		SwitchSpeedREC = round((teleSwitchSpeedREC/matches), 1);
		
		var ScaleSpeedREC = 0;
		ScaleSpeedREC = round((teleScaleSpeedREC/matches), 1);

		var climbSpeedREC = 0;
		climbSpeedREC = round((climbSpeedREC/matches), 1);

		var climbSuccessRateREC = 0;
		climbSuccessRateREC = round((climbSuccessfulREC/(climbSuccessfulREC+climbAttemptedREC)), 1);

		var VaultCubeAvgREC = 0;
		VaultCubeAvgREC = round((vaultScoredREC / matches), 1);		

		var autoSwitchAvgREC = 0;
		autoSwitchAvgREC = round((autoSwitchScoredREC / matches), 1);

		var autoScaleAvgREC = 0;
		autoScaleAvgREC = round((autoScaleScoredREC / matches), 1);

		var teleDiedAvgREC = 0;
		teleDiedAvgREC = round((teleDiedREC / matches), 1);

		var ParkAvgREC = 0;
		ParkAvgREC = round((endgameParkREC / matches)*100, 1);

		var BotsClimbedAvgREC = 0;
		BotsClimbedAvgREC = round((endgameClimbREC / matches), 1);

		var autoSwitchSuccessAvgREC = 0;
		autoSwitchSuccessAvgREC = round((teams[i].averages.autoSwitchSuccessREC / teams[i].averages.matches)*100, 1);

		var autoScaleSuccessAvgREC = 0;
		autoScaleSuccessAvgREC = round((teams[i].averages.autoScaleSuccessREC / teams[i].averages.matchesREC)*100, 1);


	//======================================================USE THE TOTAL STATS AND RECENT STATS TO FIND CHANCE TO HIT USING BOTH.=====================================

		var ChancetoHit_Baseline = round(((BaselineAvg*0.4) + (BaselineAvgREC*0.6)), 1);

		var ChancetoHit_AutoSwitch = round(((autoSwitchSuccessAvg*0.4) + (autoSwitchSuccessAvgREC*0.6)), 1);

		var ChancetoHit_AutoScale = round(((autoScaleSuccessAvg*0.4) + (autoScaleSuccessAvgREC*0.6)), 1);


		//---------------------------------------------ETNER ALL OF THE STATS------------------------------------------------------
		teams[i].advancedaverages = {

			//noirmal shit
			ScaleCubeAvg,	
			SwitchCubeAvg,
		 	BaselineAvg,
		 	ScaleDropAvg, 		
		 	SwitchDropAvg, 
		 	SwitchSpeed, 		
			ScaleSpeed, 
			climbSpeed, 
			climbSuccessRate, 
			VaultCubeAvg, 
			autoSwitchAvg, 
			autoScaleAvg, 
			teleDiedAvg, 		
			ParkAvg, 
			BotsClimbedAvg,
			autoSwitchSuccessAvg,
			autoScaleSuccessAvg,
		
			//LAST 3
			ScaleCubeAvgREC,	
			SwitchCubeAvgREC,
		 	BaselineAvgREC,
		 	ScaleDropAvgREC, 		
		 	SwitchDropAvgREC, 
		 	SwitchSpeedREC, 		
			ScaleSpeedREC, 
			climbSpeedREC, 
			climbSuccessRateREC, 
			VaultCubeAvgREC, 
			autoSwitchAvgREC, 
			autoScaleAvgREC, 
			teleDiedAvgREC, 		
			ParkAvgREC, 
			BotsClimbedAvgREC,
			autoSwitchSuccessAvgREC,
			autoScaleSuccessAvgREC,

			
			//CHANCE TO HITY SHITE

			ChancetoHit_Baseline,
			ChancetoHit_AutoSwitch,
			ChancetoHit_AutoScale
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


