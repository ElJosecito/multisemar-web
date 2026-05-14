import { v4 as uuid } from 'uuid';

export const DevTools = [
	{
		id: uuid(),
		name: 'Carlos Méndez',
		type: 'individual', // individual, empresa, constructora
		description: 'Excelente servicio de grúa cuando mi camión se averió en la carretera. Llegaron rápido y el precio fue muy justo. El operador muy profesional y cuidadoso con mi vehículo.',
		email: 'Particular',
		rating: 5
	},
	{
		id: uuid(),
		name: 'Constructora Delmar S.R.L.',
		type: 'constructora',
		description: 'Multisemar ha sido nuestro socio de confianza por más de 3 años. Sus servicios de grúas y electricidad son impecables. Siempre cumplen con los tiempos y la calidad.',
		email: 'Empresa Constructora',
		rating: 5
	},
	{
		id: uuid(),
		name: 'María Elena Rosario',
		type: 'individual',
		description: 'Contraté sus servicios para instalaciones eléctricas en mi casa. Trabajo muy limpio y profesional. Los técnicos llegaron puntuales y terminaron antes de lo esperado.',
		email: 'Particular',
		rating: 5
	},
	{
		id: uuid(),
		name: 'Grupo Industrial Romana',
		type: 'empresa',
		description: 'El mantenimiento electromecánico de nuestras máquinas siempre lo hacen con Multisemar. Son muy técnicos y conocen bien su trabajo. Los recomendamos ampliamente.',
		email: 'Empresa Industrial',
		rating: 5
	},
	{
		id: uuid(),
		name: 'Roberto Jiménez',
		type: 'individual',
		description: 'Tuve una emergencia con mi generador eléctrico y me atendieron un domingo. Servicio 24/7 real. El técnico solucionó el problema rápidamente. Muy agradecido.',
		email: 'Particular',
		rating: 5
	},
	{
		id: uuid(),
		name: 'Desarrollo Inmobiliario Costa Este',
		type: 'constructora',
		description: 'Para nuestro proyecto de condominios necesitábamos servicios integrales. Multisemar nos cubrió desde las grúas hasta las instalaciones eléctricas. Excelente coordinación.',
		email: 'Empresa Constructora',
		rating: 5
	},
	{
		id: uuid(),
		name: 'Ana Lucía Peña',
		type: 'individual',
		description: 'Remodelé toda mi cocina y necesitaba nuevas instalaciones eléctricas. El equipo de Multisemar fue muy cuidadoso y explicaron todo el proceso. Súper recomendados.',
		email: 'Particular',
		rating: 5
	},
	{
		id: uuid(),
		name: 'Manufacturas del Caribe',
		type: 'empresa',
		description: 'Nuestro equipo de producción requiere mantenimiento constante. Multisemar siempre responde rápido y sus técnicos son muy capacitados. Excelente relación calidad-precio.',
		email: 'Empresa Manufacturera',
		rating: 5
	},
	{
		id: uuid(),
		name: 'Ing. Pedro Santos',
		type: 'individual',
		description: 'Como ingeniero valoro la calidad técnica. En Multisemar encontré profesionales que saben lo que hacen. Su consultoría fue clave para mi proyecto personal.',
		email: 'Ingeniero - Particular',
		rating: 5
	},
	{
		id: uuid(),
		name: 'Hoteles & Resorts La Romana',
		type: 'empresa',
		description: 'Manejamos varios hoteles y Multisemar nos da mantenimiento a todos los sistemas eléctricos y electromecánicos. Confianza total, nunca nos han fallado.',
		email: 'Cadena Hotelera',
		rating: 5
	}
]