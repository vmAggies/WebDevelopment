/**
 * Created by Vikas on 7/5/2016.
 */
$(document).ready(function() {
    var items;
    // Ajax Call for displaying the partners
    $("#e1")
        .select2({
            multiple: true,
            ajax: {
                tags: true,
                placeholder: "Search for a Partner by Name",
                url: "http://jsonplaceholder.typicode.com/posts", // add the URL here
                method: 'GET',
                dataType: 'json', //Add the data type here
                delay: 250,
                data: function (params) {

                    var queryParameters = {
                        term: params.term
                    }
                    return queryParameters;
                },
                processResults: function (data) {
                    return {
                        results: $.map(data, function (item) {
                            return {
                                text: item.title,
                                id: item.id
                            }
                        })
                    };
                },
                cache: true
            },
        })
        .on('change', function(){
            //console.log( $(this).val() );
        })
        .on("select2:select select2:unselect", function (e) {
            //this returns all the selected item
            items= $(this).val();
        });

    // Ajax Call for blocking the partners

    $('#the-thing-that-opens-your-alert').click(function () {
        // need to add code to call for updating the mysql table
        console.log(items);
        // now that we have the selected values, pass this to the php script for updating the table
        if (items){
            console.log("Success");
            $.ajax({
                type: 'POST',
                url: "app/dataAccess/updatePartnersList.php",
                data: {partnersList:items ,blockPartners:true },
                success: function(data){
                    alert(data); // this will print you any php / mysql error as an alert
                }
            });
        }
        else{
            console.log("Error");
        }
        // if successful, below message
        $('#alert-success').addClass('in'); // shows alert with Bootstrap CSS3 implem, http://stackoverflow.com/questions/10903526/how-to-toggle-a-bootstrap-alert-on-and-off-with-button-click
        // else. below message along with error code if any
        //$('#alert-failure').addClass('in'); // shows alert with Bootstrap CSS3 implem
    });

    $('.close').click(function () {
        $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });

});

