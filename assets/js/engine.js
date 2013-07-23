(function(){

	// Define as variáveis
	var opt = 0,
		valorTopo = $('#menu').offset().top,
		valorAncora,
		linkMenu;

	//O Holder do Menu recebe a mesma altura que o Menu para evitar uma quebra da página
	$('#holderMenu').height($('#menu').height());
	

	//Mantém o menu sempre no topo
	$(window).scroll(function(){
		if($(this).scrollTop() > valorTopo){
			$('#menu').addClass('menuOn');
		}else{
			$('#menu').removeClass('menuOn');
		}
		return false;
	});


	// Clique nas âncoras
	$('#menu > li > a').click(function(e){
		e.preventDefault();
		linkMenu = $(this).attr('href');
		valorAncora = ($(linkMenu).offset().top) - 70;
		jQuery('html, body').animate({scrollTop:valorAncora}, 'slow');
	})


	return false;

})();