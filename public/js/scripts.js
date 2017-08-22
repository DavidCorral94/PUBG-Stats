const labels = ["K/D Ratio", "Win %", "Time Survived", "Rounds Played", "Wins", "Win Top 10 Ratio", "Top 10s", "Top 10 Rate", "Losses", "Rating", "Best Rating", "Best Rank", "Avg Dmg per Match", "Headshot Kills Pg", "Heals Pg", "Kills Pg", "Move Distance Pg", "Revives Pg", "Road Kills Pg", "Team Kills Pg", "Time Survived Pg", "Top 10s Pg", "Kills", "Assists", "Suicides", "Team Kills", "Headshot Kills", "Headshot Kill Ratio", "Vehicle Destroys", "Road Kills", "Daily Kills", "Weekly Kills", "Round Most Kills", "Max Kill Streaks", "Weapons Acquired", "Days", "Longest Time Survived", "Most Survival Time", "Avg Survival Time", "Win Points", "Walk Distance", "Ride Distance", "Move Distance", "Avg Walk Distance", "Avg Ride Distance", "Longest Kill", "Heals", "Revives", "Boosts", "Damage Dealt", "Knock Outs"];
const suggestedLabels = ["K/D Ratio", "Win %", "Time Survived", "Rounds Played", "Wins", "Win Top 10 Ratio", "Top 10s", "Top 10 Rate", "Losses", "Rating", "Best Rating", "Best Rank", "Time Survived Pg", "Kills", "Round Most Kills", "Longest Time Survived", "Avg Survival Time", "Walk Distance", "Ride Distance", "Avg Walk Distance", "Avg Ride Distance", "Longest Kill", "Heals", "Revives", "Boosts", "Knock Outs"];

function getStats(pubgName) {
    $("#loader").show();
    $('#error').hide();
    $.ajax({
        url: '/stats/' + pubgName,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        timeout: 5000,
        success: function(result) {
            loadStats(result)
        },
        error: function(error) {
            console.log(error)
            $("#loader").hide();
            $('#error').show();
        }
    });
}


function loadStats(info) {
    for (var k = 0; k < 3; k++) {
        var text = "";
        var stats = info.Stats[k].Stats;
        var textAux = "<tr>";
        var cont = 0;

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


function getMultipleStats(pubgName1, pubgName2) {
    $("#loader").show();
    $('#error').hide();
    var statsFP = "";
    var statsSP = "";
    $.ajax({
        url: '/stats/' + pubgName1,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        timeout: 5000,
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

    for (var k = 0; k < 3; k++) {
        var text = "";
        var statsFP = infoFP.Stats[k].Stats;
        var statsSP = infoSP.Stats[k].Stats;
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
