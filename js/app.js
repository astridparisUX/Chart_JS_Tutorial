// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Line Chart for run totals
var weeklyRunTotals = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        data: [5,5,5,6,6,5,5]
      },
      {
        fillColor: "rgba(52,152,219,0.5)",
        strokeColor: "rgba(52,152,219,1)",
        pointColor: "rgba(52,152,219,1)",
        pointStrokeColor: "#fff",
        data: [2.8,4.8,4.0,1.9,9.6,2.7,10]
      }
    ]
  }
var chartOptions = {
    scaleGridLineColor: "rgba(0,0,0,.03)"
  }

//Get context with jQuery - using jQuery's .get() method.
var runTotal = $("#runTotal").get(0).getContext("2d");

//This will get the first returned node in the jQuery collection.
var myLineChart = new Chart(runTotal).Line(weeklyRunTotals, chartOptions);


// Doughnut Chart for Weekly Goals
var weeklyGoal = [
  {
    value: 10,
    color:"#4eddc1"
  },
  {
    value : 90,
    color : "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout : 75
};
var thisWeek = $("#weeklyGoal").get(0).getContext("2d");
var myWeeklyGoal = new Chart(thisWeek).Doughnut(weeklyGoal, options);

// Doughnut Chart for Monthly Goals
var monthlyGoal = [
  {
    value: 95,
    color:"#1abc9c"
  },
  {
    value : 5,
    color : "#E2EAE9"
  }
]
var thisMonth = $("#monthlyGoal").get(0).getContext("2d");
var myMonthlyGoal = new Chart(thisMonth).Doughnut(monthlyGoal, options);

// Doughnut Chart for Annual Goals
var annualGoal = [
  {
    value: 72,
    color:"#0b9277",
  },
  {
    value : 28,
    color : "#E2EAE9"
  }
]
var thisYear = $("#annualGoal").get(0).getContext("2d");
var myAnnualGoal = new Chart(thisYear).Doughnut(annualGoal, options);