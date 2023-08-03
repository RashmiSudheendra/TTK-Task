$(document).ready(function () {
    $("#grid").hide();
    $("#gridL").click(function () {
      $("#list").hide();
      $("#grid").show();
    });
    $("#listG").click(function () {
      $("#grid").hide();
      $("#list").show();
    });
    $("#splitDiv").jSplitter({
      leftdiv: "leftDiv",
      rightdiv: "rightDiv",
      flex: true,
    });
    // $('select').on('change', function() {
    //   $("#leftDiv").css("background-color" ,  this.value);
    // });
    $('select').on('change', function() {
      // (":root").css("--bg-color", "blue");
      document.documentElement.style.setProperty("--bg-color", this.value)
    });
  });