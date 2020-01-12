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


$("#upload-file").submit(function (event) {
    event.preventDefault();
    //grab all form data  
    var formData = $(this).serialize();

 $.ajax({
        url: 'addProduct.php',
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (returndata) {
        $("#productFormOutput").html(returndata);
        alert(formData);
        },
        error: function(){
            alert("error in ajax form submission");
            }
    });

    return false;
    });