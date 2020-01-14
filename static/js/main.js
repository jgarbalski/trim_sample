// $(function() {
//     $('#upload-file').click(function() {
//         var form_data = new FormData($('#upload-file')[0]);
//         $.ajax({
//             type: 'POST',
//             url: '/uploadajax',
//             data: form_data,
//             contentType: false,
//             cache: false,
//             processData: false,
//             success: function(data) {
//                 console.log('Success!');
//             },
//         });
//     });
// });




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
                document.getElementById("successMsg").style.display="block";
                document.getElementById("submit-btn").style.display="none";
            }
        })
    });


    $("#test-btn").click(function (event) { 
        $.getJSON('/spleeter',
            function(data) { 
                print("mleko")
            });
        return 'OK'; });
})


//     $('#form-forward').on('submit', function(event) {
//         event.preventDefault();

//         var formData1 = new FormData($('#form-forward')[0]);

//         $.ajax({
//             type : 'POST',
//             url: "/spleeter",
//             data : formData1,
//             processData : false,
//             contentType : false,
//             success: function(result){
//                 console.log(result);
//             }
            
//             });
//       });
//   });

  





