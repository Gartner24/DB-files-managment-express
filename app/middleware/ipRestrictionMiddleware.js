const allowedIPs = [
	// '26.124.227.91',
	// '26.28.63.211',
	// '26.95.111.72',
	// '26.6.200.192',
	// // Local host
	// '181.237.102.15',
	// '192.168.92.2',
	// '2800:484:a78c:6e81:7cc4:812b:7291:36d4',
	// 'fe80::c167:4394:7850:4d1e%9',
	// '192.168.0.7',
	// '26.6.200.192',
	// '192.168.20.47',
	// '177.253.16.201',
	// '192.168.1.57',
	// '190.151.208.252'

]; // Lista de direcciones IP permitidas
import os from 'os';
const ipRestrictionMiddleware = (req, res, next) => {
	
	const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress; // Obtiene la dirección IP del cliente
	// const clientIP = req.ip; // Obtiene la dirección IP del cliente
	console.log('clientIP', clientIP)
    //const ipv4 = clientIP.split(':').pop(); // Obtener la última parte de la dirección IP

	if (!allowedIPs.includes(clientIP)) {
		// Si la dirección IP está en la lista permitida, permite el acceso
		next();
	} else {
		// Si la dirección IP no está en la lista permitida, retorna un error 403 - Forbidden
		res.status(403).send('Acceso denegado');
	}
};

export default ipRestrictionMiddleware;
