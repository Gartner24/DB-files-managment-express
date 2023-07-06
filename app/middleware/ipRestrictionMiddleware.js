const allowedIPs = [
	'26.124.227.91',
	'26.28.63.211',
	'26.95.111.72',
	'26.6.200.192',
]; // Lista de direcciones IP permitidas

const ipRestrictionMiddleware = (req, res, next) => {
	const clientIP = req.ip; // Obtiene la dirección IP del cliente
    const ipv4 = clientIP.split(':').pop(); // Obtener la última parte de la dirección IP

	if (allowedIPs.includes(ipv4)) {
		// Si la dirección IP está en la lista permitida, permite el acceso
		next();
	} else {
		// Si la dirección IP no está en la lista permitida, retorna un error 403 - Forbidden
		res.status(403).send('Acceso denegado');
	}
};

export default ipRestrictionMiddleware;
