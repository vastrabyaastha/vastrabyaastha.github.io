$(document).ready(function(){
    $("#form_reach_us").validate(
        {
            rules: 
            {
                email: 
                {
                    required: true,
                    email: true
                },
                comment: 
                {
                    required: true
                }
            },
            messages: 
            {
                email: 
                {
                    required: "Please enter your email address"
                },
                comment: 
                {
                    required: "A message is required to be send"
                }
            }
    });
});