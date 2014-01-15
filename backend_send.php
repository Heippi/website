<?php

switch ($_GET["parametro"] ) {
    case 'opinion':

    	$Name= $_POST['Name'];
		$Email= $_POST['Email'];
		$Asunto= $_POST['Asunto'];
		$Comentario= $_POST['Comentario'];
		$Suscribir= $_POST['Suscripcion'];
		
		$From= 'Landingpage@heippi.com';
		$send_to = 'contacto@heippi.com';
		$message = '|>>>>>> Nueva Opinión <<<<<<|'."\n".' Nombre :'.$Name. "\n".'Email :'.$Email. "\n".'Comentario :'.$Comentario. "\n".'Suscribir :'.$Suscribir;
		$header  = 'From: <'.$From.'>';

		mail($send_to,$Asunto,$message,$header);
		echo "Gracias por su opinion !!";

        break;
    case 'contacto':
        $Name= $_POST['Name'];
		$Email= $_POST['Email'];
		$Empresa= $_POST['Empresa'];
		$Asunto= $_POST['Asunto'];
		$AsuntoMensaje= $_POST['AsuntoMensaje'];
		$Comentario= $_POST['Comentario'];

		
		$From= 'Landingpage@heippi.com';
		$send_to = 'contacto@heippi.com';
		$message = '===DATOS==='."\n".' Nombre :'.$Name."\n".'Email :'.$Email."\n".'Empresa :'.$Empresa."\n".'AsuntoMensaje :'.$AsuntoMensaje."\n".'Comentario :'.$Comentario;
		$header  = 'From: <'.$From.'>';
	
		mail($send_to,$Asunto,$message,$header);

		echo "Agradecemos su registro";

        break;
   
}




?>