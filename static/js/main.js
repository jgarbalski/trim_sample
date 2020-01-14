



$(document).ready(function(){
    $('form input').change(function () {
      $('form p').text(this.files.length + " file(s) selected");
    });

    $('input').click(function(){
        document.getElementById("successMsg").style.display="none";
        document.getElementById("submit-btn").style.display="block";
    });

    $('#form-send').on('submit', function(event) {
        event.preventDefault();

        var formData = new FormData($('#form-send')[0]);

        $.ajax({
            type : 'POST',
            url : '/',
            data : formData,
            processData : false,
            contentType : false,
            success : function() {
                // alert('File uploaded!');
                console.log(formData)
                document.getElementById("successMsg").style.display="block";
                document.getElementById("submit-btn").style.display="none";
            }
        })
    });

    
    // $('#submit-btn').on('submit',function (event) {
    //     $.getJSON('/',
    //         function(data) {
    //             console.log('dziadzia')
    //         });
    //     return 'OK';
    // })

    

    $("#test-btn").click(function (event) { 
        $.getJSON('/spleeter',
            function(data) { 
                print("mleko")
            });
        return 'OK'; });
})





