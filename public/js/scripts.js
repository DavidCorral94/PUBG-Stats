const labels = ["K/D Ratio", "Win %", "Time Survived", "Rounds Played", "Wins", "Win Top 10 Ratio", "Top 10s", "Top 10 Rate", "Losses", "Rating", "Best Rating", "Best Rank", "Avg Dmg per Match", "Headshot Kills Pg", "Heals Pg", "Kills Pg", "Move Distance Pg", "Revives Pg", "Road Kills Pg", "Team Kills Pg", "Time Survived Pg", "Top 10s Pg", "Kills", "Assists", "Suicides", "Team Kills", "Headshot Kills", "Headshot Kill Ratio", "Vehicle Destroys", "Road Kills", "Daily Kills", "Weekly Kills", "Round Most Kills", "Max Kill Streaks", "Weapons Acquired", "Days", "Longest Time Survived", "Most Survival Time", "Avg Survival Time", "Win Points", "Walk Distance", "Ride Distance", "Move Distance", "Avg Walk Distance", "Avg Ride Distance", "Longest Kill", "Heals", "Revives", "Boosts", "Damage Dealt", "Knock Outs"];
const suggestedLabels = ["K/D Ratio", "Win %", "Time Survived", "Rounds Played", "Wins", "Win Top 10 Ratio", "Top 10s", "Top 10 Rate", "Losses", "Rating", "Best Rating", "Best Rank", "Time Survived Pg", "Kills", "Round Most Kills", "Longest Time Survived", "Avg Survival Time", "Walk Distance", "Ride Distance", "Avg Walk Distance", "Avg Ride Distance", "Longest Kill", "Heals", "Revives", "Boosts", "Knock Outs"];
const matchs = ["solo", "duo", "squad"];
const defaultStats = [{ "Region": "eu", "Season": "2017-pre3", "Match": "solo", "Stats": [{ "label": "K/D Ratio", "field": "KillDeathRatio", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Win %", "field": "WinRatio", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0%" }, { "label": "Time Survived", "field": "TimeSurvived", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0m" }, { "label": "Rounds Played", "field": "RoundsPlayed", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Wins", "field": "Wins", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Win Top 10 Ratio", "field": "WinTop10Ratio", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0%" }, { "label": "Top 10s", "field": "Top10s", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Top 10 Rate", "field": "Top10Ratio", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0%" }, { "label": "Losses", "field": "Losses", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Rating", "field": "Rating", "category": "Skill Rating", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Best Rating", "field": "BestRating", "category": "Skill Rating", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Best Rank", "field": "BestRank", "category": "Skill Rating", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Avg Dmg per Match", "field": "DamagePg", "category": "Per Game", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Headshot Kills Pg", "field": "HeadshotKillsPg", "category": "Per Game", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Heals Pg", "field": "HealsPg", "category": "Per Game", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Kills Pg", "field": "KillsPg", "category": "Per Game", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Move Distance Pg", "field": "MoveDistancePg", "category": "Per Game", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0m" }, { "label": "Revives Pg", "field": "RevivesPg", "category": "Per Game", "ValueInt": null, "ValueDec": 0, "value": "0", "rank": null, "percentile": 100, "displayValue": "0.00" }, { "label": "Road Kills Pg", "field": "RoadKillsPg", "category": "Per Game", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Team Kills Pg", "field": "TeamKillsPg", "category": "Per Game", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Time Survived Pg", "field": "TimeSurvivedPg", "category": "Per Game", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0m" }, { "label": "Top 10s Pg", "field": "Top10sPg", "category": "Per Game", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Kills", "field": "Kills", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Assists", "field": "Assists", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Suicides", "field": "Suicides", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Team Kills", "field": "TeamKills", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Headshot Kills", "field": "HeadshotKills", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Headshot Kill Ratio", "field": "HeadshotKillRatio", "category": "Combat", "ValueInt": null, "ValueDec": 0, "value": "0", "rank": null, "percentile": 100, "displayValue": "0.00" }, { "label": "Vehicle Destroys", "field": "VehicleDestroys", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Road Kills", "field": "RoadKills", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Daily Kills", "field": "DailyKills", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Weekly Kills", "field": "WeeklyKills", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Round Most Kills", "field": "RoundMostKills", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Max Kill Streaks", "field": "MaxKillStreaks", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Weapons Acquired", "field": "WeaponAcquired", "category": "Combat", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Days", "field": "Days", "category": "Survival", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Longest Time Survived", "field": "LongestTimeSurvived", "category": "Survival", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0m" }, { "label": "Most Survival Time", "field": "MostSurvivalTime", "category": "Survival", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0m" }, { "label": "Avg Survival Time", "field": "AvgSurvivalTime", "category": "Survival", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0m" }, { "label": "Win Points", "field": "WinPoints", "category": "Performance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Walk Distance", "field": "WalkDistance", "category": "Distance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0km" }, { "label": "Ride Distance", "field": "RideDistance", "category": "Distance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0km" }, { "label": "Move Distance", "field": "MoveDistance", "category": "Distance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0km" }, { "label": "Avg Walk Distance", "field": "AvgWalkDistance", "category": "Distance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0km" }, { "label": "Avg Ride Distance", "field": "AvgRideDistance", "category": "Distance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0km" }, { "label": "Longest Kill", "field": "LongestKill", "category": "Distance", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0m" }, { "label": "Heals", "field": "Heals", "category": "Support", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Revives", "field": "Revives", "category": "Support", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Boosts", "field": "Boosts", "category": "Support", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Damage Dealt", "field": "DamageDealt", "category": "Support", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }, { "label": "Knock Outs", "field": "DBNOs", "category": "Support", "ValueInt": 0, "ValueDec": null, "value": "0", "rank": null, "percentile": 100, "displayValue": "0" }] }];

function getStats(pubgName) {
    $("#stats").hide();
    $("#loader").show();
    $('#error').hide();
    $.ajax({
        url: '/stats/' + pubgName,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(result) {
            loadStats(result, $("#region").val(), $("#season").val())
        },
        error: function(error) {
            console.log(error)
            $("#loader").hide();
            $('#error').show();
        }
    });
}


function loadStats(info, region, season) {
    var name = info.PlayerName;
    for (var k = 0; k < matchs.length; k++) {
        var stats = getInfo(info.Stats, region, season, matchs[k]);
        stats = stats[0].Stats;
        var text = "";
        var textAux = "<tr>";
        var cont = 0;
        if (stats[2].displayValue == "0m") {
            $("#" + matchs[k]).html("<b class=\"red-text\">" + name + " has no played on " + matchs[k] + " | Region " + region + " | Season " + season + ". So we are showing default stats.</b>");
        }
        for (var i in stats) {
            if (suggestedLabels.includes(stats[i].label)) {
                if (cont < 2) {
                    textAux += "<td><b>" + stats[i].label + "</b> <br>  " + stats[i].displayValue + "</td>";
                    cont++
                }
                else {
                    textAux += "<td><b>" + stats[i].label + "</b> <br>  " + stats[i].displayValue + "</td></tr>"
                    text += textAux;
                    textAux = "<tr>"
                    cont = 0
                }
            }
        }

        switch (k) {
            case 0:
                $('#solo-fp').html(text)
                break;
            case 1:
                $('#duo-fp').html(text)
                break;
            case 2:
                $('#squad-fp').html(text)
                break;
            default:
                break;
        }
    }

    $("#loader").hide();
    $("#stats").show();

}

function getInfo(info, region, season, match) {
    info = $.grep(info, function(s) {
        return s.Region == region && s.Season == season && s.Match == match;
    });

    if (info.length == 0) {
        console.log("No stats for " + region + " | " + season + " | " + match)
        return defaultStats;
    }
    else
        return info;
}

function getMultipleStats(pubgName1, pubgName2) {
    $("#stats").hide();
    $("#loader").show();
    $('#error').hide();
    var statsFP = "";
    var statsSP = "";
    $.ajax({
        url: '/stats/' + pubgName1,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function(result) {
            statsFP = result;
            var millisecondsToWait = 1000;
            setTimeout(function() {
                $.ajax({
                    url: '/stats/' + pubgName2,
                    type: 'GET',
                    dataType: 'json',
                    contentType: 'application/json; charset=utf-8',
                    timeout: 5000,
                    success: function(result) {
                        statsSP = result;
                        compareStats(statsFP, statsSP);
                    },
                    error: function(error) {
                        console.log(error)
                        $("#loader").hide();
                        $('#error').show();
                    }
                });
            }, millisecondsToWait);
        },
        error: function(error) {
            console.log(error)
            $("#loader").hide();
            $('#error').show();
        }
    });
}

function compareStats(infoFP, infoSP) {
    var nameFP = infoFP.PlayerName;
    var nameSP = infoSP.PlayerName;
    for (var k = 0; k < matchs.length; k++) {
        var statsFP = getInfo(infoFP.Stats, "eu", "2017-pre3", matchs[k]);
        statsFP = statsFP[0].Stats;
        var statsSP = getInfo(infoSP.Stats, "eu", "2017-pre3", matchs[k]);
        statsSP = statsSP[0].Stats;
        var text = "";
        var textAux = "<tr>";
        var cont = 0;

        for (var i in statsFP) {
            if (suggestedLabels.includes(statsFP[i].label)) {
                if (statsFP[i].ValueDec > statsSP[i].ValueDec || statsFP[i].ValueInt > statsSP[i].ValueInt) {
                    textAux += "<td><b>" + statsFP[i].label + "</b> <br>  <span style=\"color: green\">" + nameFP + " = " + statsFP[i].displayValue + "<span><br><span style=\"color: red\">" + nameSP + " = " + statsSP[i].displayValue + "</span></td>";
                }
                else if (statsFP[i].ValueDec < statsSP[i].ValueDec || statsFP[i].ValueInt < statsSP[i].ValueInt) {
                    textAux += "<td><b>" + statsFP[i].label + "</b> <br>  <span style=\"color: red\">" + nameFP + " = " + statsFP[i].displayValue + "<span><br><span style=\"color: green\">" + nameSP + " = " + statsSP[i].displayValue + "</span></td>";
                }
                else {
                    textAux += "<td><b>" + statsFP[i].label + "</b> <br>  <span style=\"color: blue\">" + nameFP + " = " + statsFP[i].displayValue + "<span><br><span style=\"color: blue\">" + nameSP + " = " + statsSP[i].displayValue + "</span></td>";
                }
                cont++
                if (cont > 2) {
                    textAux += "</tr>"
                    text += textAux;
                    textAux = "<tr>"
                    cont = 0
                }
            }
        }

        switch (k) {
            case 0:
                $('#solo-fp').html(text)
                break;
            case 1:
                $('#duo-fp').html(text)
                break;
            case 2:
                $('#squad-fp').html(text)
                break;
            default:
                break;
        }
    }

    $("#loader").hide();
    $("#stats").show();
}
