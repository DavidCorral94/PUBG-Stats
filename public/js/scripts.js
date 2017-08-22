const labels = ["K/D Ratio", "Win %", "Time Survived", "Rounds Played", "Wins", "Win Top 10 Ratio", "Top 10s", "Top 10 Rate", "Losses", "Rating", "Best Rating", "Best Rank", "Avg Dmg per Match", "Headshot Kills Pg", "Heals Pg", "Kills Pg", "Move Distance Pg", "Revives Pg", "Road Kills Pg", "Team Kills Pg", "Time Survived Pg", "Top 10s Pg", "Kills", "Assists", "Suicides", "Team Kills", "Headshot Kills", "Headshot Kill Ratio", "Vehicle Destroys", "Road Kills", "Daily Kills", "Weekly Kills", "Round Most Kills", "Max Kill Streaks", "Weapons Acquired", "Days", "Longest Time Survived", "Most Survival Time", "Avg Survival Time", "Win Points", "Walk Distance", "Ride Distance", "Move Distance", "Avg Walk Distance", "Avg Ride Distance", "Longest Kill", "Heals", "Revives", "Boosts", "Damage Dealt", "Knock Outs"];
const suggestedLabels = ["K/D Ratio", "Win %", "Time Survived", "Rounds Played", "Wins", "Win Top 10 Ratio", "Top 10s", "Top 10 Rate", "Losses", "Rating", "Best Rating", "Best Rank", "Time Survived Pg", "Kills", "Round Most Kills", "Longest Time Survived", "Avg Survival Time",  "Walk Distance", "Ride Distance", "Avg Walk Distance", "Avg Ride Distance", "Longest Kill", "Heals", "Revives", "Boosts", "Knock Outs"];

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
