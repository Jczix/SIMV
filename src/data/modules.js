// Native content for the 9 course modules (replaces the former Genially embeds).
// Slide types: cover, text, pills, choice, question, list, reflect, end.
// Quiz modules use `quiz` instead of `slides`.

const MIC = { name: "Mecanismos de Inversión Colectiva", slug: "mecanismo-de-inversión-colectiva" };
const FP = { name: "Finanzas Personales", slug: "finanzas-personales" };
const EF = { name: "Esquemas Fraudulentos", slug: "esquemas-fraudulentos" };

const ok = (text) => ({ tone: "ok", title: "¡Correcto!", text });
const bad = (text) => ({ tone: "bad", title: "¡Ups!", text });

const NOT_REGULATED = (name) =>
  bad(
    `${name} no aparece como entidad regulada por la SIMV. Antes de invertir, consulta el listado de participantes autorizados en simv.gob.do. Invertir en una entidad no regulada no te convierte en inversionista del mercado de valores, porque no opera bajo la supervisión y protección legal que garantiza la seguridad de tus inversiones.`
  );

export const modules = {
  // ───────────────────────── Inversión Colectiva ─────────────────────────
  1: {
    course: MIC,
    number: 1,
    title: "Introducción a la Inversión Colectiva",
    slides: [
      { type: "cover", bg: "dunes", title: "Mecanismos de Inversión Colectiva en la República Dominicana", subtitle: "Introducción a la Inversión Colectiva" },
      {
        type: "text", bg: "dots", emoji: "📈",
        title: "¿Qué es la Inversión Colectiva?",
        body: ["La inversión colectiva es un mecanismo donde múltiples inversores aportan su dinero a un fondo común, gestionado por una entidad especializada."],
      },
      {
        type: "pills", bg: "lavender",
        title: "Beneficios de la inversión colectiva",
        items: [
          { label: "Diversificación del riesgo", detail: "La inversión colectiva permite reducir riesgos al distribuir el capital entre varios activos, lo que disminuye la dependencia de un solo valor y estabiliza el rendimiento global." },
          { label: "Acceso a mercados más amplios", detail: "La inversión colectiva facilita a los inversores participar en mercados que, de otra manera, estarían fuera de su alcance, permitiéndoles acceder a una mayor variedad de activos y oportunidades." },
          { label: "Gestión profesional de las inversiones", detail: "La inversión colectiva ofrece la ventaja de contar con expertos que gestionan el portafolio, tomando decisiones informadas para maximizar el rendimiento y minimizar riesgos, lo que mejora las posibilidades de éxito." },
          { label: "Seguridad", detail: "Las administradoras y los fondos están regulados por estrictas normas y son supervisados por la Superintendencia del Mercado de Valores de la República Dominicana (SIMV)." },
        ],
      },
      {
        type: "pills", bg: "coral",
        title: "Riesgos de la inversión colectiva",
        items: [
          { label: "Riesgo de mercado", detail: "Es la posibilidad de que el valor de las inversiones disminuya debido a fluctuaciones generales del mercado, como cambios en la economía, tasas de interés o eventos geopolíticos. Afecta a todos los activos del portafolio, independientemente de su calidad individual." },
          { label: "Riesgo de gestión", detail: "Surge de la posibilidad de que las decisiones de los gestores del fondo no sean las más acertadas. La habilidad, experiencia y estrategia del equipo gestor son cruciales, y un mal manejo puede resultar en pérdidas para los inversores." },
          { label: "Riesgo de liquidez", detail: "Es la dificultad para convertir los activos en efectivo rápidamente sin incurrir en pérdidas significativas. En mercados volátiles o con activos poco negociados, vender puede ser complicado y afectar la capacidad de retirar fondos cuando se necesita." },
        ],
      },
      {
        type: "text", bg: "ocean", emoji: "👥",
        title: "Actores principales",
        body: [
          "**Inversores:** individuos o entidades que compran instrumentos financieros buscando obtener un rendimiento deseado.",
          "**Reguladores:** supervisan y regulan el mercado de valores para garantizar su transparencia y proteger a los inversores. En la República Dominicana, el mercado es supervisado por la Superintendencia del Mercado de Valores (SIMV).",
        ],
      },
      {
        type: "text", bg: "ocean", emoji: "🏦",
        title: "Actores principales",
        body: ["**Administradoras de fondos de inversión (SAFI):** administran y gestionan las inversiones colectivas en nombre de los inversores."],
      },
      {
        type: "choice", bg: "synth",
        title: "¿Cómo te vuelves INVERSIONISTA en el mercado de valores de la República Dominicana?",
        items: [
          { label: "Abrir cuenta en una SAFI", feedback: ok("Abrir una cuenta en una administradora de fondos regulada te permite invertir en fondos de inversión del mercado de valores. Al realizar tu primera inversión, ya eres un inversionista.") },
          { label: "Invertir en Mantequilla Investment 3.14", feedback: NOT_REGULATED("Mantequilla Investment 3.14") },
          { label: "Abrir una cuenta en un puesto de bolsa", feedback: ok("Abrir una cuenta en un puesto de bolsa te convierte en inversionista porque te permite acceder al mercado de valores, donde puedes comprar y vender activos financieros. Al realizar tu primera inversión, ya eres un inversionista.") },
          { label: "Abrir una cuenta en el fondo inmobiliario Indisarq", feedback: NOT_REGULATED("El fondo inmobiliario Indisarq") },
        ],
      },
      {
        type: "question", bg: "slate",
        question: "¿Cuál es uno de los principales beneficios de la inversión colectiva?",
        options: ["Mayor diversificación", "Menor diversificación", "Alta complejidad"],
        answer: 0,
        explanation: "Al reunir el dinero de muchos inversores, el fondo puede distribuirlo entre muchos activos y reducir el riesgo.",
      },
      {
        type: "text", bg: "mint", emoji: "🧺",
        title: "¿Qué es un fondo de inversión?",
        body: [
          "Un fondo de inversión es una forma simple de sacarle el máximo a tus ahorros.",
          "El fondo es como una gran canasta donde muchas personas ponen su dinero. Estos fondos son administrados por las Sociedades Administradoras de Fondos de Inversión, o SAFI.",
        ],
      },
      {
        type: "pills", bg: "mint",
        title: "En la República Dominicana existen dos tipos de fondos",
        items: [
          { label: "Fondos abiertos", detail: "Son los más flexibles: te permiten invertir y retirar tu dinero directamente con la SAFI cuando quieras, dentro de las condiciones establecidas en el reglamento de cada fondo." },
          { label: "Fondos cerrados", detail: "Te dan acceso a inversiones que suelen ser exclusivas para grandes montos. Tu capital permanece invertido hasta el vencimiento del fondo, salvo que vendas tu participación a otro inversionista a través de un puesto de bolsa." },
        ],
      },
      {
        type: "pills", bg: "sunset",
        title: "Tipos de fondos de inversión",
        items: [
          { label: "Fondos mutuos", detail: "Agrupan dinero de muchos inversores para comprar una variedad de valores. Generalmente son fondos abiertos: permiten la entrada y salida de inversores en cualquier momento, comprando o vendiendo participaciones directamente al fondo." },
          { label: "Fondos de inversión inmobiliaria", detail: "Permiten invertir en bienes raíces sin comprar propiedades directamente. La mayoría son fondos cerrados, con un número fijo de participaciones que se emiten en una oferta inicial y luego se negocian en el mercado secundario." },
          { label: "Fondos de pensiones", detail: "Diseñados para proporcionar ingresos durante la jubilación. Tienen un horizonte de largo plazo y no permiten retirar el dinero hasta cumplir ciertas condiciones, como la edad de retiro. Las aportaciones suelen ser programadas." },
        ],
      },
      {
        type: "question", bg: "slate",
        question: "¿Cuál de los siguientes es un tipo de fondo que generalmente te permite comprar o vender participaciones directamente al fondo?",
        options: ["Fondo inmobiliario", "Fondo mutuo", "Fondo de pensiones"],
        answer: 1,
        explanation: "Los fondos mutuos suelen ser abiertos: compras y vendes participaciones directamente con el fondo.",
      },
      {
        type: "list", bg: "lavender",
        title: "Sugerencias para que sigas aprendiendo",
        items: [
          "📊 Actividad recomendada: investiga un fondo mutuo en la República Dominicana y analiza su desempeño.",
          "📚 Si te gusta la lectura, te recomendamos «El inversor inteligente».",
        ],
      },
      {
        type: "text", bg: "dots",
        title: "Resumen rápido",
        body: ["La inversión colectiva permite a múltiples inversores combinar su capital en un fondo gestionado por expertos, con diversificación, acceso a mercados más amplios y la supervisión de la SIMV. Existen fondos abiertos, que permiten retirar el dinero con flexibilidad, y cerrados, que exigen mantener la inversión hasta el vencimiento. Los fondos mutuos, inmobiliarios y de pensiones son opciones comunes, cada una con su nivel de riesgo y accesibilidad."],
      },
      { type: "end", bg: "dunes" },
    ],
  },

  2: {
    course: MIC,
    number: 2,
    title: "Guía para invertir en fondos colectivos",
    slides: [
      { type: "cover", bg: "dunes", title: "Guía para invertir en fondos colectivos", subtitle: "Inversión Colectiva" },
      {
        type: "text", bg: "dots", emoji: "📝",
        title: "Guía práctica",
        body: [
          "Antes de comenzar, ten a mano lápiz y papel o una aplicación de notas. Será útil anotar tus reflexiones, metas financieras y cualquier pregunta que surja.",
          "Definir claramente tus metas financieras te permite diseñar una estrategia de inversión acorde con tus necesidades y horizontes de tiempo. ¡Vamos a empezar!",
        ],
      },
      {
        type: "text", bg: "mint", emoji: "🎯",
        title: "Paso 1: Define tus objetivos",
        body: [
          "**Metas a corto plazo:** las que planeas alcanzar en menos de 1 año, como ahorrar para unas vacaciones, crear un fondo de emergencia o pagar una deuda pequeña.",
          "**Metas a largo plazo:** requieren más de 5 años, como ahorrar para la jubilación, comprar una casa o financiar la educación de tus hijos.",
        ],
      },
      { type: "reflect", bg: "mint", prompt: "¿Qué objetivos financieros son más importantes para ti en este momento, y cómo podrían influir en tus decisiones de inversión?" },
      {
        type: "text", bg: "ocean", emoji: "🧭",
        title: "Paso 2: Evalúa tu perfil de inversionista",
        body: ["Tu perfil de inversionista, o perfil de riesgo, mide tu disposición y capacidad para asumir riesgos financieros. Se clasifica generalmente en conservador, moderado y agresivo, y te ayuda a elegir inversiones que se alineen con tu nivel de confort y tus objetivos."],
      },
      {
        type: "choice", bg: "synth", neutral: true,
        title: "Identifica tu perfil: ¿cómo reaccionarías si tus inversiones perdieran un 10% de su valor en poco tiempo?",
        items: [
          { label: "Venderías inmediatamente para evitar más pérdidas", feedback: { tone: "info", title: "Conservador", text: "Priorizas la seguridad de tu capital sobre el crecimiento y prefieres opciones estables, aunque con retornos más modestos. Recomendación: los fondos de renta fija, que invierten en bonos y otros activos seguros, son una buena opción." } },
          { label: "Esperarías un tiempo para ver si el valor se recupera", feedback: { tone: "info", title: "Moderado", text: "Buscas un equilibrio entre riesgo y retorno, combinando inversiones seguras con activos de más crecimiento. Recomendación: los fondos mixtos o balanceados, que combinan renta fija y acciones, suelen ser una buena alternativa." } },
          { label: "Aprovecharías la oportunidad para invertir más", feedback: { tone: "info", title: "Agresivo", text: "Estás dispuesto a asumir un alto nivel de riesgo en busca de rendimientos superiores, aceptando la volatilidad como parte de tu estrategia. Es adecuado para horizontes de largo plazo. Recomendación: los fondos de renta variable o de acciones pueden ser atractivos." } },
        ],
      },
      {
        type: "pills", bg: "lavender",
        title: "Paso 3: Investiga los fondos disponibles",
        intro: "Un fondo puede tener mayor rendimiento histórico pero también más riesgo; otro, más estabilidad con retornos modestos. Evalúa:",
        items: [
          { label: "Rendimiento histórico", detail: "Analiza cómo ha rendido el fondo en los últimos 5 a 10 años, pero recuerda que el rendimiento pasado no garantiza el futuro." },
          { label: "Objetivos del fondo", detail: "Comprueba si los objetivos del fondo se alinean con tus propios objetivos financieros." },
          { label: "Riesgo del fondo", detail: "Investiga la volatilidad del fondo y su perfil de riesgo." },
          { label: "Gestores del fondo", detail: "Investiga la experiencia y reputación de quienes gestionan el fondo." },
          { label: "Comparación entre fondos", detail: "Compara los fondos disponibles en costos, rendimiento y riesgos usando la información que publican las SAFI y la SIMV." },
        ],
      },
      {
        type: "pills", bg: "coral",
        title: "Paso 4: Revisa las comisiones y costos",
        intro: "Los costos pueden impactar significativamente tus rendimientos. Compáralos siempre entre fondos.",
        items: [
          { label: "Comisiones de gestión", detail: "Son cargos por la administración del fondo. Pueden ser un porcentaje del valor de tu inversión." },
          { label: "Cargos por entrada/salida", detail: "Algunos fondos cobran una comisión al comprar o vender participaciones." },
          { label: "Costos ocultos", detail: "Algunos fondos tienen cargos adicionales, como comisiones por rendimiento o gastos operativos que no son inmediatamente visibles." },
        ],
      },
      {
        type: "list", bg: "ocean",
        title: "Paso 5: Consulta con un asesor financiero",
        items: [
          "Un asesor puede ayudarte a evaluar si una inversión se alinea con tus metas y tu tolerancia al riesgo.",
          "Algunos ofrecen una primera consulta gratuita para conocer tus necesidades.",
          "Un profesional aporta una perspectiva objetiva y te ayuda a evitar errores comunes.",
          "Busca un asesor con buena reputación, experiencia y registrado ante las autoridades. Entiende cómo cobra sus honorarios.",
          "Revisa tu plan con un asesor al menos una vez al año o cuando haya cambios importantes en tu vida.",
        ],
      },
      {
        type: "question", bg: "slate",
        question: "¿Qué deberías hacer antes de invertir en un fondo colectivo?",
        options: ["Invertir de inmediato en el fondo con mayor rendimiento pasado", "Definir tus objetivos y evaluar tu perfil de riesgo", "Elegir el fondo que recomiende un amigo"],
        answer: 1,
        explanation: "Todo empieza por saber qué quieres lograr y cuánto riesgo puedes asumir; con eso eliges el fondo adecuado.",
      },
      {
        type: "text", bg: "mint", emoji: "✅",
        title: "Paso 6: Realiza la inversión",
        body: ["Sigue el procedimiento del fondo que te interesa: generalmente abrir una cuenta con la administradora, seleccionar el fondo y transferir el dinero. Consulta con un asesor y verifica que la institución esté autorizada por la Superintendencia del Mercado de Valores (SIMV)."],
      },
      {
        type: "list", bg: "lavender",
        title: "Sugerencias para que sigas aprendiendo",
        items: ["🤝 Actividad recomendada: consulta con un asesor financiero e invierte en un fondo de inversión."],
      },
      {
        type: "text", bg: "dots",
        title: "Resumen rápido",
        body: ["Para invertir en fondos colectivos, define tus objetivos a corto y largo plazo, evalúa tu perfil de riesgo (conservador, moderado o agresivo), investiga los fondos considerando rendimiento, objetivos y comisiones, consulta con un asesor y realiza la inversión en una institución regulada por la SIMV."],
      },
      { type: "end", bg: "dunes" },
    ],
  },

  3: {
    course: MIC,
    number: 3,
    title: "Práctica de conocimiento",
    quiz: {
      subtitle: "Guía para invertir en fondos colectivos",
      questions: [
        { q: "¿Qué es la inversión colectiva?", options: ["Un préstamo bancario para varias personas", "Un mecanismo donde muchos inversores aportan dinero a un fondo común gestionado por una entidad especializada", "Una cuenta de ahorro compartida entre familiares"], answer: 1 },
        { q: "¿Cuál es uno de los principales beneficios de la inversión colectiva?", options: ["Mayor diversificación", "Menor diversificación", "Alta complejidad"], answer: 0 },
        { q: "Los fondos de pensiones permiten retiros frecuentes y flexibles para los inversores.", options: ["Verdadero", "Falso"], answer: 1, explanation: "No permiten retirar el dinero hasta cumplir condiciones como la jubilación." },
        { q: "¿Qué permite la diversificación del riesgo en la inversión colectiva?", options: ["Concentrar todo el dinero en un solo activo", "Distribuir el capital entre varios activos para reducir la dependencia de uno solo", "Garantizar que nunca habrá pérdidas"], answer: 1 },
        { q: "¿Qué ventaja ofrece la gestión profesional en la inversión colectiva?", options: ["Expertos toman decisiones informadas para maximizar rendimiento y minimizar riesgos", "Elimina todas las comisiones", "Asegura una rentabilidad fija"], answer: 0 },
        { q: "La gestión profesional en la inversión colectiva mejora las posibilidades de éxito al minimizar riesgos.", options: ["Verdadero", "Falso"], answer: 0 },
        { q: "¿Qué riesgo implica la posibilidad de que el valor de las inversiones disminuya debido a fluctuaciones del mercado?", options: ["Riesgo de liquidez", "Riesgo de gestión", "Riesgo de mercado"], answer: 2 },
        { q: "¿Cuál es el riesgo relacionado con la capacidad de convertir activos en efectivo rápidamente?", options: ["Riesgo de liquidez", "Riesgo de mercado", "Riesgo de gestión"], answer: 0 },
        { q: "La diversificación del riesgo en la inversión colectiva aumenta la dependencia de un solo valor.", options: ["Verdadero", "Falso"], answer: 1, explanation: "Es al revés: la diversificación disminuye la dependencia de un solo valor." },
        { q: "¿Quién supervisa y regula el mercado de valores en la República Dominicana?", options: ["El Ministerio de Hacienda", "La Superintendencia del Mercado de Valores (SIMV)", "Los puestos de bolsa"], answer: 1 },
        { q: "¿Qué tipo de fondo de inversión permite la entrada y salida de inversores en cualquier momento?", options: ["Fondo cerrado", "Fondo abierto", "Fondo de pensiones"], answer: 1 },
        { q: "Los fondos inmobiliarios suelen ser fondos cerrados con un número fijo de participaciones.", options: ["Verdadero", "Falso"], answer: 0 },
        { q: "¿Cuál es una característica de los fondos cerrados?", options: ["Puedes retirar tu dinero con la SAFI cuando quieras", "Tu capital permanece hasta el vencimiento, salvo que vendas tu participación en un puesto de bolsa", "No tienen ningún riesgo"], answer: 1 },
        { q: "¿Qué fondo de inversión permite invertir en bienes raíces sin comprar propiedades directamente?", options: ["Fondo mutuo", "Fondo de pensiones", "Fondo de inversión inmobiliaria"], answer: 2 },
        { q: "Definir tus objetivos es el último paso para invertir en los fondos de inversión colectiva.", options: ["Verdadero", "Falso"], answer: 1, explanation: "Definir tus objetivos es el primer paso, no el último." },
      ],
    },
  },

  // ───────────────────────── Finanzas Personales ─────────────────────────
  4: {
    course: FP,
    number: 1,
    title: "Introducción a las finanzas personales",
    slides: [
      { type: "cover", bg: "dunes", title: "Finanzas personales", subtitle: "Introducción a las finanzas personales" },
      {
        type: "pills", bg: "dots",
        title: "¿Qué son las finanzas personales?",
        intro: "Es la administración de los recursos financieros de una persona o familia: cómo gestionas tu dinero para cumplir tus necesidades y metas a lo largo del tiempo.",
        items: [
          { label: "Ingresos", detail: "Todas las entradas de dinero que recibes, como salarios, bonificaciones, rentas, etc." },
          { label: "Gastos", detail: "Todos los desembolsos de dinero que realizas, divididos en fijos (alquiler, préstamos) y variables (comidas fuera, entretenimiento)." },
          { label: "Ahorros", detail: "La porción de tus ingresos que no gastas, destinada a necesidades futuras, emergencias o inversión." },
          { label: "Inversiones", detail: "El uso de tus ahorros para adquirir activos financieros o bienes que generen retornos a largo plazo." },
        ],
      },
      {
        type: "pills", bg: "lavender",
        title: "¿Por qué importan?",
        intro: "Una buena gestión financiera es esencial para alcanzar tus metas, reducir el estrés y mejorar tu calidad de vida.",
        items: [
          { label: "Alcanzar metas", detail: "Con una buena planificación puedes ahorrar e invertir para objetivos como comprar una casa, pagar la educación de tus hijos o asegurar una jubilación cómoda." },
          { label: "Reducción del estrés", detail: "Controlar tus finanzas te da claridad sobre tus obligaciones y evita sorpresas desagradables, lo que reduce la ansiedad." },
          { label: "Mejor calidad de vida", detail: "Al manejar bien tu dinero, disfrutas más de tu vida sin preocuparte constantemente por deudas o gastos imprevistos." },
        ],
      },
      {
        type: "text", bg: "ocean", emoji: "🗺️",
        title: "Planificación financiera",
        body: ["Es el proceso de gestionar estratégicamente tus recursos para alcanzar tus metas a corto, mediano y largo plazo. Implica evaluar tu situación actual, definir objetivos claros y desarrollar un plan para manejar tus ingresos, gastos, ahorros, inversiones y deudas."],
      },
      {
        type: "question", bg: "slate",
        question: "¿Cuál es uno de los beneficios de una buena gestión financiera?",
        options: ["Gastar sin control", "Reducir el estrés financiero", "Depender siempre de préstamos"],
        answer: 1,
        explanation: "Tener claridad sobre tu dinero evita sorpresas y reduce la ansiedad.",
      },
      {
        type: "pills", bg: "mint",
        title: "Presupuesto: la regla del 50/30/20",
        intro: "Una guía sencilla para distribuir tus ingresos entre necesidades, deseos y ahorro.",
        items: [
          { label: "50% para necesidades", detail: "Gasta la mitad de tus ingresos en lo esencial: vivienda, alimentación, transporte y servicios básicos." },
          { label: "30% para deseos", detail: "Dedica el 30% a gastos no esenciales, como entretenimiento, viajes y compras personales." },
          { label: "20% para ahorros y deudas", detail: "Usa el 20% restante para ahorrar y pagar deudas, priorizando un fondo de emergencia y la reducción de pasivos." },
        ],
      },
      {
        type: "pills", bg: "sunset",
        title: "Ahorro",
        intro: "Ahorrar es reservar una parte de tus ingresos para el futuro, para alcanzar metas o enfrentar imprevistos. Algunas estrategias:",
        items: [
          { label: "Pagarse a uno mismo primero", detail: "Aparta una parte de tus ingresos para ahorrar antes de cubrir otros gastos. Este hábito garantiza que siempre ahorres algo cada mes." },
          { label: "Reducir gastos innecesarios", detail: "Revisa tus gastos variables y corta los que no son esenciales, como suscripciones o cenas frecuentes fuera de casa." },
          { label: "Usar cuentas de ahorro con interés", detail: "Coloca tus ahorros en cuentas que generen intereses para que tu dinero crezca con el tiempo." },
        ],
      },
      { type: "reflect", bg: "sunset", prompt: "¿Qué cambios podrías hacer en tu vida para mejorar tu capacidad de ahorro?" },
      {
        type: "pills", bg: "coral",
        title: "Gestión de deudas",
        intro: "No todas las deudas son iguales: algunas pueden ser beneficiosas y otras peligrosas.",
        items: [
          { label: "Deudas buenas", detail: "Las que se usan para adquirir activos que pueden apreciarse o mejorar tu situación financiera, como una hipoteca o un préstamo estudiantil." },
          { label: "Deudas malas", detail: "Las que se acumulan por gastos de consumo o compras no esenciales, como tarjetas de crédito o préstamos personales a corto plazo." },
        ],
      },
      {
        type: "pills", bg: "synth",
        title: "Estrategias para reducir deudas",
        items: [
          { label: "Método de la bola de nieve", detail: "Prioriza el pago de las deudas más pequeñas primero. A medida que las eliminas, aplicas esos pagos a las deudas más grandes y ganas impulso." },
          { label: "Método de la avalancha", detail: "Prioriza el pago de las deudas con el interés más alto, lo que reduce el costo total que pagas." },
        ],
      },
      {
        type: "text", bg: "dots",
        title: "Finanzas personales",
        body: ["Has dado un paso importante hacia la gestión de tu futuro financiero. Seguir aprendiendo y aplicando lo aprendido te permitirá alcanzar tus metas y vivir con más seguridad y tranquilidad. Cada pequeño avance cuenta."],
      },
      { type: "end", bg: "dunes" },
    ],
  },

  5: {
    course: FP,
    number: 2,
    title: "Guía para la creación de un presupuesto personal",
    slides: [
      { type: "cover", bg: "dunes", title: "Guía para la creación de un presupuesto personal", subtitle: "Finanzas personales" },
      {
        type: "text", bg: "dots", emoji: "📝",
        title: "1. Preparación inicial",
        body: ["**Tarea:** en una hoja de papel escribe dos encabezados, «Ingresos» y «Gastos». Deja espacio suficiente debajo de cada uno para anotar detalles."],
      },
      {
        type: "pills", bg: "mint",
        title: "2. Identifica tus ingresos",
        intro: "Todo el dinero que recibes regularmente. Escribe el total mensual bajo «Ingresos».",
        items: [
          { label: "Salario", detail: "Anota tu ingreso mensual neto (después de impuestos)." },
          { label: "Inversiones", detail: "Si alquilas una propiedad o recibes ingresos por arrendamiento, anótalos aquí. Incluye los intereses de cuentas de ahorro o inversiones." },
          { label: "Otros ingresos", detail: "Cualquier otra fuente, como trabajos secundarios, pensiones, etc." },
        ],
      },
      {
        type: "pills", bg: "ocean",
        title: "3. Identifica tus gastos fijos",
        intro: "No cambian mes a mes y debes cubrirlos obligatoriamente.",
        items: [
          { label: "Servicios básicos", detail: "Anota los gastos en agua, electricidad, gas, internet y otros servicios esenciales." },
          { label: "Alquiler o hipoteca", detail: "Anota cuánto pagas mensualmente por tu vivienda." },
          { label: "Préstamos", detail: "Incluye pagos de préstamos personales, de vehículo, estudiantiles, etc." },
          { label: "Seguros", detail: "Considera seguros de salud, vivienda, vehículo y vida." },
        ],
      },
      {
        type: "pills", bg: "lavender",
        title: "4. Identifica tus gastos variables",
        intro: "Pueden cambiar cada mes. Anota el total bajo «Gastos», por categoría.",
        items: [
          { label: "Alimentación", detail: "Anota el gasto promedio mensual en comida y supermercado." },
          { label: "Transporte", detail: "Considera combustible, transporte público, mantenimiento del vehículo, etc." },
          { label: "Entretenimiento", detail: "Incluye salidas, cine, suscripciones a servicios de streaming, etc." },
          { label: "Compras personales", detail: "Incluye ropa, productos personales y otras compras no esenciales." },
          { label: "Salud y bienestar", detail: "Anota gastos médicos no cubiertos por seguros, gimnasio, etc." },
        ],
      },
      {
        type: "text", bg: "coral", emoji: "➖",
        title: "5. Analiza tus gastos",
        body: [
          "Resta el total de tus gastos (fijos + variables) del total de tus ingresos y anótalo como «Balance mensual».",
          "Si es positivo, estás en buena posición para ahorrar. Si es negativo, necesitas ajustar tus gastos.",
        ],
      },
      {
        type: "text", bg: "sunset", emoji: "✂️",
        title: "6. Identifica áreas de ahorro",
        body: [
          "**Revisa tus gastos variables:** comer fuera menos veces o cancelar suscripciones que no usas.",
          "**Compra inteligente:** busca alternativas más económicas, como cambiar de proveedor o comprar marcas genéricas.",
          "Anota en tu hoja dónde puedes reducir gastos y cuánto podrías ahorrar cada mes.",
        ],
      },
      {
        type: "pills", bg: "mint",
        title: "7. Crea un fondo de inversión",
        intro: "Dinero que destinas a generar más ingresos a través de acciones, bonos o fondos.",
        items: [
          { label: "Asignación de ahorros", detail: "De tu balance positivo, decide cuánto destinar cada mes a invertir. Un buen punto de partida puede ser el 10–20% de tus ingresos." },
          { label: "Objetivos de inversión", detail: "Define el propósito: ¿jubilación, la compra de una casa o incrementar tu patrimonio?" },
          { label: "Cuenta de inversión", detail: "Considera abrir una cuenta con una institución financiera regulada donde puedas empezar a invertir." },
        ],
      },
      {
        type: "pills", bg: "ocean",
        title: "8. Crea un fondo para gastos extraordinarios",
        intro: "Te protege de imprevistos como reparaciones, emergencias médicas o pérdida de empleo.",
        items: [
          { label: "Monto del fondo", detail: "Debe cubrir entre 3 y 6 meses de tus gastos fijos y variables." },
          { label: "Ahorro mensual", detail: "Si tienes balance positivo, aparta un porcentaje (por ejemplo, 10–15%) hasta alcanzar el monto deseado." },
          { label: "Cuenta separada", detail: "Abre una cuenta de ahorros aparte para que este dinero no se mezcle con tus finanzas diarias." },
        ],
      },
      {
        type: "text", bg: "lavender", emoji: "🔁",
        title: "9. Revisa y ajusta tu presupuesto",
        body: [
          "Revisa tu presupuesto cada mes para asegurarte de cumplir tus objetivos de ahorro e inversión, y ajusta tus gastos para mantener un balance positivo.",
          "**Tarea:** programa un momento cada mes para revisarlo y anota cuándo será tu próxima revisión.",
        ],
      },
      {
        type: "text", bg: "dots",
        title: "¡Listo!",
        body: ["Ahora tienes un presupuesto con tus ingresos, gastos, un plan de ahorro, un fondo de inversión y un fondo para imprevistos. ¡Sigue adelante y revisa tu progreso con regularidad!"],
      },
      { type: "end", bg: "dunes" },
    ],
  },

  6: {
    course: FP,
    number: 3,
    title: "Práctica de conocimiento",
    quiz: {
      subtitle: "Guía para la creación de un presupuesto personal",
      questions: [
        { q: "¿Qué son las finanzas personales?", options: ["La administración de los recursos financieros de una persona o familia", "Las cuentas de una empresa", "Los impuestos que paga el Estado"], answer: 0 },
        { q: "¿Cuál es uno de los componentes de las finanzas personales?", options: ["El PIB", "Los ahorros", "La tasa de cambio"], answer: 1 },
        { q: "Las finanzas personales incluyen la gestión de ingresos, gastos, ahorros e inversiones.", options: ["Verdadero", "Falso"], answer: 0 },
        { q: "¿Cuál de los siguientes es un ingreso?", options: ["El pago del alquiler", "El salario", "La factura de la luz"], answer: 1 },
        { q: "¿Cuál es un ejemplo de gasto variable?", options: ["El alquiler", "La cuota de un préstamo", "Las comidas fuera de casa"], answer: 2 },
        { q: "El ahorro no es necesario si tienes ingresos altos.", options: ["Verdadero", "Falso"], answer: 1, explanation: "Sin importar tus ingresos, el ahorro te protege de imprevistos y te permite alcanzar metas." },
        { q: "¿Qué porcentaje de tus ingresos sugiere la regla 50/30/20 destinar a necesidades?", options: ["20%", "30%", "50%"], answer: 2 },
        { q: "¿Qué tipo de deuda se considera «buena»?", options: ["Una hipoteca o un préstamo estudiantil", "Una tarjeta de crédito para compras no esenciales", "Un préstamo para irte de vacaciones"], answer: 0 },
        { q: "Un presupuesto debe incluir tanto gastos fijos como variables.", options: ["Verdadero", "Falso"], answer: 0 },
        { q: "¿Cuál es el primer paso en la creación de un presupuesto?", options: ["Abrir una cuenta de inversión", "Preparar una hoja con los encabezados «Ingresos» y «Gastos»", "Pedir un préstamo"], answer: 1 },
        { q: "¿En qué consiste la estrategia de pago de deudas «bola de nieve»?", options: ["Pagar primero la deuda con el interés más alto", "Pagar primero las deudas más pequeñas y luego las más grandes", "Pagar solo el mínimo de todas las deudas"], answer: 1 },
        { q: "Las deudas malas son aquellas que te ayudan a adquirir activos valiosos.", options: ["Verdadero", "Falso"], answer: 1, explanation: "Esas son las deudas buenas. Las malas financian consumo no esencial." },
        { q: "¿Qué debes hacer si tienes un balance mensual negativo?", options: ["Ajustar y reducir tus gastos", "Ignorarlo hasta el próximo mes", "Usar más la tarjeta de crédito"], answer: 0 },
        { q: "¿Cuál es el propósito de un fondo para gastos extraordinarios?", options: ["Comprar artículos de lujo", "Protegerte de imprevistos como emergencias médicas o pérdida de empleo", "Pagar las vacaciones"], answer: 1 },
        { q: "La estrategia de la «avalancha» prioriza el pago de las deudas con el interés más bajo.", options: ["Verdadero", "Falso"], answer: 1, explanation: "La avalancha prioriza las deudas con el interés más alto." },
      ],
    },
  },

  // ───────────────────────── Esquemas Fraudulentos ─────────────────────────
  7: {
    course: EF,
    number: 1,
    title: "Esquemas fraudulentos",
    slides: [
      { type: "cover", bg: "dunes", title: "Esquemas fraudulentos", subtitle: "Aprende a reconocerlos antes de invertir" },
      {
        type: "text", bg: "dots", emoji: "🎣",
        title: "¿Qué es un esquema fraudulento?",
        body: [
          "Es una oferta de «inversión» diseñada para quedarse con tu dinero. Suele prometer ganancias altas, rápidas y seguras, y opera fuera de la supervisión de las autoridades.",
          "Muchas víctimas no pierden por falta de inteligencia, sino porque el fraude explota emociones: la prisa, la confianza en conocidos y el miedo a quedarse fuera.",
        ],
      },
      {
        type: "pills", bg: "coral",
        title: "Señales de alerta",
        items: [
          { label: "Rendimientos garantizados y muy altos", detail: "Ninguna inversión legítima garantiza ganancias altas sin riesgo. Si prometen duplicar tu dinero en poco tiempo, desconfía." },
          { label: "Presión para decidir rápido", detail: "«Solo quedan cupos hoy», «la oferta vence esta noche». La urgencia busca que no investigues." },
          { label: "Ganas por traer a otros", detail: "Si tu ganancia depende de reclutar personas, y no de una actividad económica real, es una señal clásica de esquema piramidal." },
          { label: "No están registrados", detail: "La entidad o la persona no aparece como autorizada por la SIMV ni por la autoridad que le corresponde." },
          { label: "No explican cómo se gana", detail: "Respuestas vagas como «trading con inteligencia artificial» o «es un secreto» sin documentos ni estados financieros." },
          { label: "Dificultad para retirar", detail: "Te ponen trabas, cobros o excusas cuando quieres sacar tu dinero." },
        ],
      },
      {
        type: "text", bg: "ocean", emoji: "🔄",
        title: "El esquema Ponzi",
        body: [
          "Paga «ganancias» a los primeros inversores con el dinero de los nuevos, no con negocios reales.",
          "Funciona mientras entre dinero nuevo. Cuando las entradas bajan o muchos quieren retirar a la vez, colapsa y la mayoría pierde su inversión.",
        ],
      },
      {
        type: "text", bg: "lavender", emoji: "🔺",
        title: "El esquema piramidal",
        body: [
          "Cada participante paga para entrar y gana principalmente por reclutar a otros, que a su vez deben reclutar más.",
          "Como el número de personas no es infinito, la base deja de crecer y quienes entraron al final pierden casi siempre.",
        ],
      },
      {
        type: "choice", bg: "synth",
        title: "Te ofrecen un 10% de ganancia mensual garantizada. ¿Qué haces?",
        items: [
          { label: "Invierto ya, antes de que se acabe la oferta", feedback: bad("Un 10% mensual garantizado equivale a más del 200% al año. Esa promesa, sumada a la prisa, son dos señales de alerta clásicas.") },
          { label: "Verifico si la entidad está autorizada por la SIMV", feedback: ok("Exacto. Antes de invertir, confirma en simv.gob.do que la entidad está autorizada y desconfía de cualquier rendimiento «garantizado».") },
          { label: "Le pregunto a un amigo que ya invirtió y le va bien", feedback: bad("En un esquema Ponzi, los primeros sí cobran, con el dinero de los nuevos. Que a alguien le esté yendo bien no prueba que sea legítimo.") },
        ],
      },
      {
        type: "list", bg: "mint",
        title: "Cómo protegerte",
        items: [
          "🔎 Verifica en simv.gob.do que la entidad y el asesor estén autorizados.",
          "📄 Pide documentos: prospecto, reglamento del fondo y estados financieros.",
          "⏳ Tómate tu tiempo. Una buena inversión no exige decidir hoy.",
          "🔐 Nunca compartas contraseñas ni códigos de verificación.",
          "🗣️ Consulta con un asesor regulado antes de invertir.",
        ],
      },
      {
        type: "text", bg: "dots", emoji: "🆘",
        title: "¿Y si ya caíste?",
        body: [
          "No envíes más dinero, aunque te pidan un pago para «liberar» tus ganancias.",
          "Guarda toda la evidencia (mensajes, recibos, transferencias) y denuncia ante la SIMV y las autoridades. Avisar a tiempo protege a otras personas.",
        ],
      },
      {
        type: "text", bg: "dots",
        title: "Resumen rápido",
        body: ["Los esquemas fraudulentos prometen ganancias altas, rápidas y garantizadas, presionan para decidir rápido y operan sin autorización. Los Ponzi pagan con el dinero de nuevos inversores y los piramidales dependen del reclutamiento; ambos colapsan. Verifica siempre en la SIMV antes de invertir."],
      },
      { type: "end", bg: "dunes" },
    ],
  },

  8: {
    course: EF,
    number: 2,
    title: "Tipos comunes de fraude",
    slides: [
      { type: "cover", bg: "dunes", title: "Tipos comunes de fraude", subtitle: "Esquemas fraudulentos" },
      {
        type: "pills", bg: "coral",
        title: "Fraudes de inversión más comunes",
        items: [
          { label: "Falsas plataformas de trading", detail: "Páginas o apps que muestran ganancias ficticias en divisas, acciones o criptomonedas. Al intentar retirar, piden «impuestos» o «comisiones» que nunca terminan." },
          { label: "Criptoactivos «garantizados»", detail: "Proyectos que prometen multiplicar tu dinero con monedas nuevas o «minería». Los criptoactivos son de alto riesgo y ninguno garantiza ganancias." },
          { label: "Falsos asesores", detail: "Personas que se presentan como corredores o asesores sin estar autorizados. Verifica siempre su registro en la SIMV." },
          { label: "Clubes y «cadenas» de inversión", detail: "Grupos donde aportas y recibes más cuando entran otros. Es la misma lógica de la pirámide." },
        ],
      },
      {
        type: "pills", bg: "ocean",
        title: "Fraudes por suplantación",
        items: [
          { label: "Phishing", detail: "Correos o mensajes que imitan a tu banco o a una entidad conocida para robar tus contraseñas. Escribe tú mismo la dirección del sitio oficial en vez de abrir el enlace." },
          { label: "Suplantación de entidades reguladas", detail: "Usan el nombre o el logo de una institución real para parecer legítimos. Contacta a la institución por sus canales oficiales para confirmar." },
          { label: "Perfiles falsos en redes", detail: "Cuentas que imitan a figuras públicas o a empresas para promocionar «oportunidades». Las celebridades no te escriben para invitarte a invertir." },
        ],
      },
      {
        type: "text", bg: "lavender", emoji: "📱",
        title: "Redes sociales y WhatsApp",
        body: [
          "Muchos fraudes empiezan con un mensaje de un desconocido o de un conocido cuya cuenta fue robada, o en grupos con testimonios de «ganadores».",
          "Las capturas de pantalla de ganancias se pueden fabricar fácilmente. No son prueba de nada.",
        ],
      },
      {
        type: "choice", bg: "synth",
        title: "Te llega un mensaje de tu «banco» pidiéndote confirmar tu clave por un enlace. ¿Qué haces?",
        items: [
          { label: "Abro el enlace y confirmo la clave", feedback: bad("Es phishing. Ningún banco te pide contraseñas ni códigos por mensaje.") },
          { label: "Lo ignoro y llamo al número oficial del banco", feedback: ok("Correcto. Contacta a la entidad por sus canales oficiales, nunca por el enlace o el número que te enviaron.") },
          { label: "Respondo con mis datos para verificar", feedback: bad("Nunca compartas datos personales ni claves por mensaje. Así te roban la cuenta.") },
        ],
      },
      {
        type: "list", bg: "mint",
        title: "Regla de oro",
        items: [
          "Si es demasiado bueno para ser verdad, probablemente no lo es.",
          "Antes de invertir, verifica. Antes de hacer clic, desconfía.",
        ],
      },
      {
        type: "text", bg: "dots",
        title: "Resumen rápido",
        body: ["Los fraudes más comunes son las falsas plataformas de trading, los criptoactivos «garantizados», los falsos asesores, las cadenas de inversión y la suplantación (phishing, perfiles falsos). Contacta siempre por canales oficiales y verifica en la SIMV."],
      },
      { type: "end", bg: "dunes" },
    ],
  },

  9: {
    course: EF,
    number: 3,
    title: "Práctica de conocimiento",
    quiz: {
      subtitle: "Esquemas fraudulentos",
      questions: [
        { q: "¿Cuál es una señal de alerta típica de un esquema fraudulento?", options: ["Te explican claramente los riesgos", "Prometen rendimientos altos y garantizados", "Están autorizados por la SIMV"], answer: 1 },
        { q: "En un esquema Ponzi, las «ganancias» se pagan con el dinero de los nuevos inversores.", options: ["Verdadero", "Falso"], answer: 0 },
        { q: "¿De qué depende principalmente la ganancia en un esquema piramidal?", options: ["De reclutar a otras personas", "De vender productos reales", "De los intereses de un banco"], answer: 0 },
        { q: "¿Dónde puedes verificar si una entidad está autorizada para operar en el mercado de valores dominicano?", options: ["En sus redes sociales", "En la Superintendencia del Mercado de Valores (SIMV)", "Preguntando a quien te ofrece la inversión"], answer: 1 },
        { q: "Si una inversión te presiona para decidir hoy, es mejor aprovecharla rápido.", options: ["Verdadero", "Falso"], answer: 1, explanation: "La urgencia es una táctica para que no investigues." },
        { q: "¿Qué es el phishing?", options: ["Un tipo de fondo de inversión", "Mensajes que imitan a una entidad para robar tus datos o contraseñas", "Una estrategia de ahorro"], answer: 1 },
        { q: "Que a un amigo le estén pagando ganancias demuestra que la inversión es legítima.", options: ["Verdadero", "Falso"], answer: 1, explanation: "En un Ponzi los primeros sí cobran, con el dinero de los nuevos." },
        { q: "Una plataforma te pide pagar un «impuesto» para liberar tus ganancias. ¿Qué indica?", options: ["Que es un trámite normal", "Una señal clara de fraude", "Que ganaste más de lo esperado"], answer: 1 },
        { q: "¿Qué debes hacer si recibes un mensaje de tu «banco» con un enlace para confirmar tu clave?", options: ["Abrir el enlace", "Responder con tus datos", "Ignorarlo y contactar al banco por su canal oficial"], answer: 2 },
        { q: "Las capturas de pantalla de ganancias son una prueba confiable de que una inversión funciona.", options: ["Verdadero", "Falso"], answer: 1, explanation: "Se pueden fabricar fácilmente." },
        { q: "¿Qué documentos deberías pedir antes de invertir en un fondo?", options: ["Solo el número de WhatsApp del asesor", "El prospecto, el reglamento del fondo y los estados financieros", "Testimonios de otros inversores"], answer: 1 },
        { q: "Los criptoactivos garantizan ganancias si eliges la moneda correcta.", options: ["Verdadero", "Falso"], answer: 1, explanation: "Son activos de alto riesgo; ninguno garantiza ganancias." },
        { q: "Si ya fuiste víctima de un fraude, ¿qué es lo primero que debes hacer?", options: ["Enviar más dinero para recuperar lo perdido", "Dejar de enviar dinero, guardar la evidencia y denunciar", "Borrar los mensajes"], answer: 1 },
        { q: "¿Cuál es la «regla de oro» para evitar fraudes?", options: ["Si es demasiado bueno para ser verdad, probablemente no lo es", "Invertir donde inviertan tus amigos", "Elegir siempre el rendimiento más alto"], answer: 0 },
        { q: "Un asesor de inversiones legítimo debe estar registrado ante las autoridades correspondientes.", options: ["Verdadero", "Falso"], answer: 0 },
      ],
    },
  },
};

export default modules;
