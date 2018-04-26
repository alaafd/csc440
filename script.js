(window.onload = function () {
    var data;
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;

    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
          for (var j = 0; j < tmp.length; j++) {
            tmp[j] = tmp[j].replace(/[+]/g , " ");
            tmp[j] = tmp[j].replace('%0D%0A' , '\n');
          }
         console.log(tmp);
         data[tmp[0]] = tmp[1];
    }

    if( data.committee1){
        $('#committee1').text(data.committee1);
    }
    if( data.committee2){
        $('#committee2').text(data.committee2);

    }
    if( data.committee3) {

        $('#committee3').text(data.committee3);
    }
    if( data.committee4){

        $('#committee4').text(data.committee4);
    }

    $('#event_name').text(data.event_name);

    $('#date').text(data.date);
    $('#no_days').text(data.no_days);
    $('#start_time_1').text(data.start_time_1);
    $('#type_time_1').text(data.type_time_1);
    $('#end_time_2').text(data.end_time_2);
    $('#type_time_2').text(data.type_time_2);
    $('#no_volunteers').val(data.no_volunteers);
    $('#type').text(data.type);





})();
