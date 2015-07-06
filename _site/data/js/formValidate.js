//Initialize the tooltips
$('#form_reach_us :input').each(function()
                             {
    var tipelement = this;

    $(tipelement).tooltipster({
        trigger: 'custom',
        onlyOne: false,
        position: 'right',
        multiple:false,
        autoClose:false,
        theme: 'tooltipster-punk'});
        

});

var validator = $("#form_reach_us").validate(
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
                    required: true,
                    minlength: 20
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
                    required: "A message is required to be send",
                    minlength: "Message should be more than 20 chars"
                }
            },
            errorPlacement: function(error, element)
            {
                var $element = $(element),
                    tipelement=element,
                    errtxt=$(error).text(),
                    last_error='';

                last_error = $(tipelement).data('last_error');
                $(tipelement).data('last_error',errtxt);
                if(errtxt !=='' && errtxt != last_error)
                {
                    $(tipelement).tooltipster('content', errtxt);
                    $(tipelement).tooltipster('show');
                }
            },
            success: function (label, element)
            {
                var tipelement = element;
                $(tipelement).tooltipster('hide');
            }
});
