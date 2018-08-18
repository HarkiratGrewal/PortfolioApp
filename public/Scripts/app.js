(function(){

    function Start() {
        console.log(`%c App Started...`, "color: blue; font-size: 30px;");
        //fetchData();
    }
    
    function fetchData() {
        $.getJSON("../Scripts/core/json/paragraphs.json", function(data) {
          $.each(data, function(key, val) {
            $("#myDetails").append("<li>" + val + "</li>");
          });
        });
      }    

    window.addEventListener("load", Start);
})();