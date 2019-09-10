(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);

function gatherEmailData() {
	return {
		name: document.getElementById('email-name').value,
		mailfrom: document.getElementById('email-mailfrom').value,
		msisdn: document.getElementById('email-msisdn').value,
		content: document.getElementById('email-content').value,
	};
}

function handleEmailDisabled() {
	let valid = isEmailValid();
	
	document.getElementById('email-submit').disabled = !valid;
}

function isEmailValid() {
	let data = gatherEmailData();

	return Boolean(data.name) && Boolean(data.mailfrom) && Boolean(data.msisdn) && Boolean(data.content);
}


function sendEmail() {
	let data = gatherEmailData();

	Email.send(
	//	'savivaldybe.mail@gmail.com',
	//	'savivaldybe.mail@gmail.com',
		'Užklausa. Vardas - ' + data.name + ', el. paštas - ' + data.mailfrom + ', tel. numeris - ' + data.msisdn,
		data.content,
		{
			token: '05f8ad26-0e41-43ba-8323-84254009abaf'
		}
	);
}