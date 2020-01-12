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
  });


// $("#upload-file").submit(function (event) {
//     event.preventDefault();
//     //grab all form data  
//     var formData = $(this).serialize();

//  $.ajax({
//         url: '',
//         type: 'POST',
//         data: formData,
//         async: false,
//         cache: false,
//         contentType: false,
//         processData: false,
//         success: function (returndata) {
//         $("#productFormOutput").html(returndata);
//         alert(formData);
//         },
//         error: function(){
//             alert("error in ajax form submission");
//             }
//     });

//     return false;
//     });