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
        // Note: the if ( allData[k][0].seed === null ) { continue; } code is what makes sure we don't publish
        // any slot's data before we have data in the spreadsheet for that round and slot.

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
            $("#c10" + "s" + (k - 123)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
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
        if (k > 139 && k < 144 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c9" + "s" + (k - 135)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // ********
        // ELITE 8
        // ********
        if (k == 96 || k == 97 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c4" + "s" + (k - 95)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 114 || k == 115 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c4" + "s" + (k - 111)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 129 || k == 130 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c8" + "s" + (k - 128)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 144 || k == 145 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c8" + "s" + (k - 141)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // ****
        // FINAL FOUR
        // ****
        if (k == 98 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c5s1").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 116 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c5s2").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 131 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c7s1").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 146 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c7s2").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // **
        // CHAMPIONSHIP
        // **
        if (k == 99 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c6s1").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
        if (k == 100 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c6s2").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }

        // **
        // CHAMPION
        // **
        if (k == 101 ) {
            if ( allData[k][0].seed === null ) { continue; }
            $("#c6s0").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
            continue;
        }
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
