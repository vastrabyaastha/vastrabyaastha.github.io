function contactForm() {
    var contactFormHost = 'http://reachus-exsete.herokuapp.com',
        form = $('#form_reach_us'),
        notice = $('#reachus_message');

    if (form.length) {
        $.ajax({
            type: 'POST',
            url: contactFormHost + '/send_email',
            data: form.serialize(),
            dataType: 'json',
            success: function(response) {
                switch (response.message) {
                    case 'success':
                        notice.text(notice.data('success')).fadeIn();
                        $('#sndg-msg-rchus,#loading-indicator-rchus').hide();
                        $('#form_reach_us')[0].reset();
                        break;

                    case 'failure_email':
                        notice.text(notice.data('error')).fadeIn();
                        $('#sndg-msg-rchus,#loading-indicator-rchus').hide();
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                notice.text(notice.data('error')).fadeIn();
            }
        });

    }
    return false;
}
$('document').ready(function(){
    $("#btn-submit").click(function(){
        $("#overlay, #popup").fadeIn();
        return contactForm();
    });
    $(document).ajaxComplete(function(event, request, settings) {
        $('#popup,#overlay').fadeOut(6000);
    });
});