var ds;
var totalEntries;
var allData = [];
var sheetCount = 1;

$(document).ready(function(){


  loadData(sheetCount);
  //POPULATE DATA FROM GOOGLE SPREADSHEET
  function loadData(which) {
   
      //LOAD DATA WITH MISO
      ds = new Miso.Dataset({
          importer : Miso.Dataset.Importers.GoogleSpreadsheet,
          parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
          key : "0Ain7zrCBNzCIdElJU0s3TW40VElQdU1oZzVDZnJlU0E",
          worksheet : which 
      });

      ds.fetch({ 
        success : function() {
          //console.log(ds.column("thetalk").data);
          parseData();
        },
        error : function() {
          console.error("ds.fetch failed", ds);
        }
      });
    }

    function parseData() {

      var $len = ds.column("id").data.length;
      totalEntries = $len;
      
      //LOOP THRU GOOGLE DATA AND PUT INTO OBJECT
      for (var j=0; j<$len; j++) {
        var counter = ds.column("id").data[j];
        allData[counter] = [ {
                    myid: ds.column("id").data[j],
                    seed: ds.column("seed").data[j],
                    name: ds.column("name").data[j]
                    }];
      }
      //console.log(allData);
      
      //if (sheetCount < 6) {
      if (sheetCount < 5) {
        sheetCount ++;
        loadData(sheetCount);
      } else {
        showData();
      }
    }

    function showData() {
    //console.log(allData.length, ds.column("id").data.length);
      for (var k=0; k<allData.length; k++) {
        //console.log(k, allData[k][0].seed, allData[k][0].myid, allData[k][0].name);
        if (k <= 31) {
           $("#c1" + "s" + (k + 1)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
           continue;
        }
        if (k >= 32 && k <= 63) {
           $("#c11" + "s" + (k - 31)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
           continue;
        } 
        if (k >= 63 && k <= 75) {
          $("#c12" + "s" + (k - 63)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
           continue;
        }
        if (k == 76) {
          $("#r1").text(allData[k][0].name);
           continue;
        }
        if (k == 77) {
          $("#r2").text(allData[k][0].name);
           continue;
        }
        if (k == 78) {
          $("#r3").text(allData[k][0].name);
           continue;
        }
        if (k == 79) {
          $("#r4").text(allData[k][0].name);
           continue;
        }

        if (k == 80) {
          $("#fflabel1").text(allData[k][0].name);
           continue;
        }
        if (k == 81) {
          $("#fflabel2").text(allData[k][0].name);
           continue;
        }
        if (k == 82) {
          $("#fflabel3").text(allData[k][0].name);
           continue;
        }
        if (k == 83) {
          $("#fflabel4").text(allData[k][0].name);
           continue;
        }

        // WINNER BRACKET LOGIC 
        // (this is optional: if you just want to publish the first round you can just publish the first round.)
        // *******************************
        // ROUND OF 32
        // *******************************
        if (k > 83 && k < 92 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c2" + "s" + (k - 83)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 101 && k < 110 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c2" + "s" + (k - 93)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 116 && k < 125 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c10" + "s" + (k - 116)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 131 && k < 140 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c10" + "s" + (k - 122)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // **************** 
        // SWEET 16
        // **************** 
        if (k > 91 && k < 96 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c3" + "s" + (k - 91)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 109 && k < 114 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c3" + "s" + (k - 105)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 124 && k < 129 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c9" + "s" + (k - 124)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k > 139 && k < 148 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c9" + "s" + (k - 135)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // ********
        // ELITE 8
        // ********
        if (k == 96 || k == 97 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c4" + "s" + (k - 99)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 122 || k == 123 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c4" + "s" + (k - 119)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 141 || k == 142 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c8" + "s" + (k - 140)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 160 || k == 161 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c8" + "s" + (k - 157)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // ****
        // FINAL FOUR
        // ****

      }
    }

    //END DATA LOADING


	  $(".slot").click(function() {
      
      if (parseInt($(this).attr('data-col')) <= 5) {
        
        var tmpTxtA = $("#c" + (parseInt($(this).attr('data-col')) + 1 ) + "s" + $(this).attr('data-game')).text();
        var tmpColA = $(this).attr('data-col');
  
        $("#c" + (parseInt($(this).attr('data-col')) + 1 ) + "s" + $(this).attr('data-game')).text($(this).text());

        $('.slot').each(function() {
            var text = $(this).text();
            if (text == tmpTxtA) {
              if ($(this).attr('data-col') > tmpColA && $(this).attr('data-col') <=6 ) {
                $(this).text('');
              }
            }
        });
      

      } else if (parseInt($(this).attr('data-col')) >= 7 && parseInt($(this).attr('data-col')) < 12) {
          
          var tmpTxtB = $("#c" + (parseInt($(this).attr('data-col')) - 1 ) + "s" + $(this).attr('data-game')).text();
          var tmpColB = $(this).attr('data-col');

          $("#c" + (parseInt($(this).attr('data-col')) - 1 ) + "s" + $(this).attr('data-game')).text($(this).text());

          $('.slot').each(function() {
              var text = $(this).text();
              if (text == tmpTxtB) {
                if (parseInt($(this).attr('data-col')) < tmpColB) {
                    $(this).text('');
                }
              }
          });
        
      }

      if (parseInt($(this).attr('data-col')) == 6) {
        $("#c6s0").text($(this).text());
      }

      if (parseInt($(this).attr('data-col')) > 11) {
        var tmpTxtC = $("#c" + (parseInt($(this).attr('data-col'))) + "s" + $(this).attr('data-game')).text();
        
        $("#c" + (parseInt($(this).attr('data-col'))) + "s" + $(this).attr('data-game')).text($(this).text());
        $("#ff" + $(this).attr('data-game')).text($(this).text());

        $('.slot').each(function() {
            var text = $(this).text();
            if (text == tmpTxtC) {
              if ($(this).attr('data-col') < 11) {
                $(this).text('');
              }
            }
        });
      }
    });
    
    $("#printbtn").click(function() {
      window.print();
    });
}); // end document.ready block
