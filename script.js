// Topics structure for each subject
const subjectTopics = {
    matematicas: [
        "Operaciones Básicas",
        "Fracciones y Decimales",
        "Porcentajes",
        "Áreas y Perímetros",
        "Potencias y Raíces",
        "Álgebra",
        "Geometría",
        "Trigonometría",
        "Funciones",
        "Estadística"
    ],
    ciencias: [
        "Sistema Solar",
        "Elementos Químicos",
        "Células",
        "Sistema Circulatorio",
        "Sistema Digestivo",
        "Sistema Respiratorio",
        "Sistema Nervioso",
        "Fotosíntesis",
        "Estados de la Materia",
        "Energía y Fuerzas"
    ],
    lectura: [
        "Gramática",
        "Sintaxis",
        "Ortografía",
        "Literatura",
        "Comprensión Lectora",
        "Figuras Literarias",
        "Géneros Literarios",
        "Tipos de Texto",
        "Análisis de Texto",
        "Redacción"
    ],
    ortografia: [
        "Reglas de Acentuación",
        "Uso de B y V",
        "Uso de G y J",
        "Uso de H",
        "Uso de C, S, Z",
        "Uso de LL y Y",
        "Signos de Puntuación",
        "Mayúsculas y Minúsculas",
        "Palabras Homófonas",
        "Errores Comunes"
    ],
    espanol_castellano: [
        "Fonética y Fonología",
        "Morfología",
        "Sintaxis",
        "Semántica",
        "Léxico",
        "Oración Simple",
        "Oración Compuesta",
        "Categorías Gramaticales",
        "Estructura del Texto",
        "Variedades del Español"
    ],
    espanol_espana: [
        "Español Peninsular",
        "Dialectos Regionales",
        "Vocabulario Español",
        "Expresiones Idiomáticas",
        "Literatura Española",
        "Cultura y Tradiciones",
        "Historia de la Lengua",
        "Normativa RAE",
        "Uso Coloquial",
        "Diferencias con Latinoamérica"
    ]
};

// Question Database - 150+ questions per subject (600+ total)
// Each question now has a 'topic' property for filtering
// Questions are practical/application-based, not definitions
const questionDatabase = {
    matematicas: [
        // Operaciones Básicas - 20 preguntas
        { question: "Si compras 3 productos a $15 cada uno y pagas con $50, ¿cuánto recibes de cambio?", options: ["$5", "$10", "$15", "$0"], correct: 0, topic: "Operaciones Básicas" },
        { question: "Un estudiante tiene 87 puntos en el primer examen y 93 en el segundo. ¿Cuál es su promedio?", options: ["89", "90", "91", "88"], correct: 1, topic: "Operaciones Básicas" },
        { question: "Una caja contiene 24 manzanas. Si se reparten equitativamente entre 6 personas, ¿cuántas recibe cada una?", options: ["3", "4", "5", "6"], correct: 1, topic: "Operaciones Básicas" },
        { question: "Un trabajador gana $12 por hora y trabajó 38 horas esta semana. ¿Cuánto ganó?", options: ["$446", "$456", "$466", "$476"], correct: 1, topic: "Operaciones Básicas" },
        { question: "Si un auto viaja a 80 km/h durante 2.5 horas, ¿qué distancia recorre?", options: ["180 km", "200 km", "220 km", "160 km"], correct: 1, topic: "Operaciones Básicas" },
        { question: "Una tienda vende camisas a $25 cada una. Si compras 4 y tienes un descuento de $10, ¿cuánto pagas?", options: ["$90", "$100", "$110", "$95"], correct: 0, topic: "Operaciones Básicas" },
        { question: "Un rectángulo tiene perímetro de 34 cm y ancho de 7 cm. ¿Cuál es su largo?", options: ["8 cm", "9 cm", "10 cm", "11 cm"], correct: 2, topic: "Operaciones Básicas" },
        { question: "Si tienes $200 y gastas $45 el lunes, $32 el martes y $58 el miércoles, ¿cuánto te queda?", options: ["$65", "$75", "$55", "$85"], correct: 0, topic: "Operaciones Básicas" },
        { question: "Un estacionamiento cobra $3 por la primera hora y $2 por cada hora adicional. ¿Cuánto cuestan 5 horas?", options: ["$9", "$10", "$11", "$12"], correct: 2, topic: "Operaciones Básicas" },
        { question: "Una bolsa tiene 15 caramelos rojos, 23 azules y 12 verdes. ¿Cuántos caramelos hay en total?", options: ["48", "49", "50", "47"], correct: 2, topic: "Operaciones Básicas" },
        { question: "Si multiplicas un número por 8 y el resultado es 96, ¿cuál es el número?", options: ["10", "11", "12", "13"], correct: 2, topic: "Operaciones Básicas" },
        { question: "Un edificio tiene 12 pisos con 8 apartamentos cada uno. ¿Cuántos apartamentos hay en total?", options: ["84", "96", "108", "92"], correct: 1, topic: "Operaciones Básicas" },
        { question: "Si divides 156 entre 13, ¿cuál es el resultado?", options: ["11", "12", "13", "14"], correct: 1, topic: "Operaciones Básicas" },
        { question: "Una persona ahorra $150 mensuales. ¿Cuánto ahorra en un año?", options: ["$1,600", "$1,700", "$1,800", "$1,500"], correct: 2, topic: "Operaciones Básicas" },
        { question: "Si sumas 45 a un número y obtienes 87, ¿cuál es el número?", options: ["40", "41", "42", "43"], correct: 2, topic: "Operaciones Básicas" },
        { question: "Un restaurante sirve 145 platos al día. ¿Cuántos platos sirve en una semana?", options: ["$1,015", "$1,020", "$1,025", "$1,030"], correct: 0, topic: "Operaciones Básicas" },
        { question: "Si tienes 3 docenas de huevos y usas 18, ¿cuántos te quedan?", options: ["16", "17", "18", "19"], correct: 2, topic: "Operaciones Básicas" },
        { question: "Un tren sale a las 8:30 AM y viaja 3 horas y 45 minutos. ¿A qué hora llega?", options: ["12:15 PM", "12:00 PM", "11:45 PM", "12:30 PM"], correct: 0, topic: "Operaciones Básicas" },
        { question: "Si compras 5 kg de manzanas a $4.50 el kg, ¿cuánto pagas?", options: ["$20.50", "$21.50", "$22.50", "$23.50"], correct: 2, topic: "Operaciones Básicas" },
        { question: "Una piscina tiene 2,400 litros y se llenan 800 litros por hora. ¿Cuántas horas tarda en llenarse?", options: ["2", "3", "4", "5"], correct: 1, topic: "Operaciones Básicas" },
        
        // Fracciones y Decimales - 15 preguntas
        { question: "Si comes 3/8 de una pizza de 8 rebanadas, ¿cuántas rebanadas comiste?", options: ["2", "3", "4", "5"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Una cinta mide 2.5 metros. Si cortas 0.75 metros, ¿cuánto queda?", options: ["1.65 m", "1.75 m", "1.85 m", "1.95 m"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Si 1/4 de los estudiantes son varones y hay 32 estudiantes, ¿cuántos son varones?", options: ["6", "7", "8", "9"], correct: 2, topic: "Fracciones y Decimales" },
        { question: "Un producto cuesta $45. Si hay un descuento de 0.2 (20%), ¿cuánto ahorras?", options: ["$7", "$8", "$9", "$10"], correct: 2, topic: "Fracciones y Decimales" },
        { question: "Si tienes 3/5 de un pastel y tu amigo tiene 1/4, ¿qué fracción tienen juntos?", options: ["13/20", "14/20", "15/20", "16/20"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Una botella tiene 1.75 litros. Si bebes 0.5 litros, ¿cuánto queda?", options: ["1.15 L", "1.25 L", "1.35 L", "1.45 L"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Si 2/3 de los 45 estudiantes aprobaron, ¿cuántos aprobaron?", options: ["28", "29", "30", "31"], correct: 2, topic: "Fracciones y Decimales" },
        { question: "Un terreno mide 3.5 km de largo. Si recorres 2.25 km, ¿cuánto falta?", options: ["1.15 km", "1.25 km", "1.35 km", "1.45 km"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Si gastas 1/3 de tu dinero y te quedan $60, ¿cuánto tenías?", options: ["$80", "$90", "$100", "$110"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Una receta necesita 0.75 kg de harina. Si tienes 2 kg, ¿cuánto te sobra?", options: ["1.15 kg", "1.25 kg", "1.35 kg", "1.45 kg"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Si 5/8 de los 64 asientos están ocupados, ¿cuántos están libres?", options: ["22", "24", "26", "28"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Un libro tiene 2.5 cm de grosor. Si apilas 4 libros, ¿qué altura tienen?", options: ["9 cm", "10 cm", "11 cm", "12 cm"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Si caminas 1/4 de una ruta de 12 km, ¿cuánto caminaste?", options: ["2 km", "3 km", "4 km", "5 km"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Una bebida cuesta $2.50. Si compras 6, ¿cuánto pagas?", options: ["$14.00", "$15.00", "$16.00", "$17.00"], correct: 1, topic: "Fracciones y Decimales" },
        { question: "Si 3/5 de los 50 estudiantes son mujeres, ¿cuántos son hombres?", options: ["18", "19", "20", "21"], correct: 2, topic: "Fracciones y Decimales" },
        
        // Porcentajes - 15 preguntas
        { question: "Un televisor cuesta $500 y tiene un descuento del 20%. ¿Cuánto pagas?", options: ["$380", "$390", "$400", "$410"], correct: 2, topic: "Porcentajes" },
        { question: "Si 30 de los 50 estudiantes aprobaron, ¿qué porcentaje aprobó?", options: ["58%", "60%", "62%", "64%"], correct: 1, topic: "Porcentajes" },
        { question: "Un salario de $2,000 aumenta un 15%. ¿Cuál es el nuevo salario?", options: ["$2,250", "$2,300", "$2,350", "$2,400"], correct: 1, topic: "Porcentajes" },
        { question: "Si tienes $80 y gastas el 25%, ¿cuánto gastaste?", options: ["$18", "$20", "$22", "$24"], correct: 1, topic: "Porcentajes" },
        { question: "Un producto aumentó de $40 a $48. ¿Qué porcentaje aumentó?", options: ["18%", "20%", "22%", "24%"], correct: 1, topic: "Porcentajes" },
        { question: "Si 45 de los 60 estudiantes son mujeres, ¿qué porcentaje son hombres?", options: ["23%", "25%", "27%", "29%"], correct: 1, topic: "Porcentajes" },
        { question: "Un auto cuesta $15,000 y se deprecia 10% cada año. ¿Cuánto vale después de un año?", options: ["$13,400", "$13,500", "$13,600", "$13,700"], correct: 1, topic: "Porcentajes" },
        { question: "Si el 18% de los estudiantes fallaron y hay 200 estudiantes, ¿cuántos fallaron?", options: ["34", "35", "36", "37"], correct: 2, topic: "Porcentajes" },
        { question: "Una tienda ofrece 15% de descuento en un artículo de $120. ¿Cuánto pagas?", options: ["$100", "$102", "$104", "$106"], correct: 1, topic: "Porcentajes" },
        { question: "Si tu peso era 80 kg y ahora es 76 kg, ¿qué porcentaje perdiste?", options: ["4%", "5%", "6%", "7%"], correct: 1, topic: "Porcentajes" },
        { question: "El 35% de los 400 votantes votaron por el candidato A. ¿Cuántos votaron por A?", options: ["130", "135", "140", "145"], correct: 2, topic: "Porcentajes" },
        { question: "Un restaurante cobra 10% de propina sobre una cuenta de $85. ¿Cuánto es la propina?", options: ["$7.50", "$8.00", "$8.50", "$9.00"], correct: 2, topic: "Porcentajes" },
        { question: "Si el 80% de los estudiantes aprobaron y aprobaron 48, ¿cuántos estudiantes hay?", options: ["58", "60", "62", "64"], correct: 1, topic: "Porcentajes" },
        { question: "Un precio aumentó de $200 a $230. ¿Qué porcentaje aumentó?", options: ["13%", "15%", "17%", "19%"], correct: 1, topic: "Porcentajes" },
        { question: "Si necesitas el 12% de 850, ¿cuál es el resultado?", options: ["98", "100", "102", "104"], correct: 2, topic: "Porcentajes" },
        
        // Áreas y Perímetros - 15 preguntas
        { question: "Un jardín rectangular mide 12 m de largo por 8 m de ancho. ¿Cuál es su área?", options: ["84 m²", "96 m²", "108 m²", "92 m²"], correct: 1, topic: "Áreas y Perímetros" },
        { question: "Una cancha de fútbol tiene perímetro de 360 m y largo de 100 m. ¿Cuál es su ancho?", options: ["70 m", "75 m", "80 m", "85 m"], correct: 2, topic: "Áreas y Perímetros" },
        { question: "¿Cuál es el área de un círculo con radio de 7 m? (π ≈ 3.14)", options: ["143.86 m²", "153.86 m²", "163.86 m²", "173.86 m²"], correct: 1, topic: "Áreas y Perímetros" },
        { question: "Un cuadrado tiene perímetro de 48 cm. ¿Cuál es el área?", options: ["121 cm²", "144 cm²", "169 cm²", "196 cm²"], correct: 1, topic: "Áreas y Perímetros" },
        { question: "Un triángulo tiene base de 10 cm y altura de 8 cm. ¿Cuál es su área?", options: ["38 cm²", "40 cm²", "42 cm²", "44 cm²"], correct: 1, topic: "Áreas y Perímetros" },
        { question: "Un terreno rectangular tiene área de 180 m² y ancho de 12 m. ¿Cuál es su largo?", options: ["13 m", "14 m", "15 m", "16 m"], correct: 2, topic: "Áreas y Perímetros" },
        { question: "¿Cuál es el perímetro de un círculo con diámetro de 14 m? (π ≈ 3.14)", options: ["41.84 m", "43.96 m", "46.08 m", "48.20 m"], correct: 1, topic: "Áreas y Perímetros" },
        { question: "Un rectángulo tiene perímetro de 50 cm y largo de 15 cm. ¿Cuál es su ancho?", options: ["8 cm", "9 cm", "10 cm", "11 cm"], correct: 2, topic: "Áreas y Perímetros" },
        { question: "Un trapecio tiene bases de 12 m y 8 m, y altura de 6 m. ¿Cuál es su área?", options: ["58 m²", "60 m²", "62 m²", "64 m²"], correct: 1, topic: "Áreas y Perímetros" },
        { question: "Un círculo tiene perímetro de 31.4 m. ¿Cuál es su radio? (π ≈ 3.14)", options: ["4 m", "5 m", "6 m", "7 m"], correct: 1, topic: "Áreas y Perímetros" },
        { question: "Un cuadrado tiene área de 169 cm². ¿Cuál es su perímetro?", options: ["48 cm", "50 cm", "52 cm", "54 cm"], correct: 2, topic: "Áreas y Perímetros" },
        { question: "Un triángulo equilátero tiene perímetro de 30 cm. ¿Cuál es su área? (altura ≈ 8.66 cm)", options: ["40.3 cm²", "42.3 cm²", "44.3 cm²", "46.3 cm²"], correct: 2, topic: "Áreas y Perímetros" },
        { question: "Un rectángulo tiene área de 96 m² y perímetro de 40 m. ¿Cuáles son sus dimensiones?", options: ["6×14", "8×12", "10×10", "4×24"], correct: 1, topic: "Áreas y Perímetros" },
        { question: "¿Cuál es el área de un semicírculo con radio de 10 m? (π ≈ 3.14)", options: ["147 m²", "157 m²", "167 m²", "177 m²"], correct: 1, topic: "Áreas y Perímetros" },
        { question: "Un rombo tiene diagonales de 12 cm y 16 cm. ¿Cuál es su área?", options: ["84 cm²", "96 cm²", "108 cm²", "120 cm²"], correct: 1, topic: "Áreas y Perímetros" },
        
        // Potencias y Raíces - 15 preguntas
        { question: "Si un cuadrado tiene área de 144 cm², ¿cuál es la longitud de su lado?", options: ["10 cm", "11 cm", "12 cm", "13 cm"], correct: 2, topic: "Potencias y Raíces" },
        { question: "¿Cuál es el volumen de un cubo con arista de 4 cm?", options: ["56 cm³", "64 cm³", "72 cm³", "80 cm³"], correct: 1, topic: "Potencias y Raíces" },
        { question: "Si 2ⁿ = 32, ¿cuánto vale n?", options: ["4", "5", "6", "7"], correct: 1, topic: "Potencias y Raíces" },
        { question: "¿Cuál es la raíz cuadrada de 225?", options: ["13", "14", "15", "16"], correct: 2, topic: "Potencias y Raíces" },
        { question: "Un cubo tiene volumen de 125 cm³. ¿Cuál es la longitud de su arista?", options: ["4 cm", "5 cm", "6 cm", "7 cm"], correct: 1, topic: "Potencias y Raíces" },
        { question: "¿Cuánto es 3⁴?", options: ["71", "81", "91", "101"], correct: 1, topic: "Potencias y Raíces" },
        { question: "Si el área de un cuadrado es 81 m², ¿cuál es su perímetro?", options: ["32 m", "34 m", "36 m", "38 m"], correct: 2, topic: "Potencias y Raíces" },
        { question: "¿Cuál es la raíz cúbica de 216?", options: ["5", "6", "7", "8"], correct: 1, topic: "Potencias y Raíces" },
        { question: "¿Cuánto es 5³ + 2³?", options: ["133", "143", "153", "163"], correct: 0, topic: "Potencias y Raíces" },
        { question: "Un número elevado al cuadrado es 169. ¿Cuál es el número?", options: ["11", "12", "13", "14"], correct: 2, topic: "Potencias y Raíces" },
        { question: "¿Cuánto es 4² × 3²?", options: ["122", "132", "142", "152"], correct: 1, topic: "Potencias y Raíces" },
        { question: "Si √x = 9, ¿cuánto vale x?", options: ["71", "81", "91", "101"], correct: 1, topic: "Potencias y Raíces" },
        { question: "¿Cuánto es 10⁴?", options: ["1,000", "10,000", "100,000", "1,000,000"], correct: 1, topic: "Potencias y Raíces" },
        { question: "Un prisma rectangular de 3×4×5 tiene volumen de 60. Si duplicas cada dimensión, ¿cuál es el nuevo volumen?", options: ["120", "240", "360", "480"], correct: 3, topic: "Potencias y Raíces" },
        { question: "¿Cuál es la raíz cuadrada de 400?", options: ["18", "19", "20", "21"], correct: 2, topic: "Potencias y Raíces" },
        
        // Álgebra - 15 preguntas
        { question: "Si 3x + 7 = 22, ¿cuánto vale x?", options: ["4", "5", "6", "7"], correct: 1, topic: "Álgebra" },
        { question: "¿Cuál es el siguiente número en la secuencia: 3, 6, 12, 24, ...?", options: ["36", "42", "48", "54"], correct: 2, topic: "Álgebra" },
        { question: "Si x - 15 = 27, ¿cuánto vale x?", options: ["40", "41", "42", "43"], correct: 2, topic: "Álgebra" },
        { question: "¿Cuál es el siguiente número: 1, 4, 9, 16, 25, ...?", options: ["30", "35", "36", "40"], correct: 2, topic: "Álgebra" },
        { question: "Si 2x + 5 = 19, ¿cuánto vale x?", options: ["6", "7", "8", "9"], correct: 1, topic: "Álgebra" },
        { question: "¿Cuál es el MCD de 24 y 36?", options: ["8", "10", "12", "14"], correct: 2, topic: "Álgebra" },
        { question: "Si 5x - 3 = 27, ¿cuánto vale x?", options: ["5", "6", "7", "8"], correct: 1, topic: "Álgebra" },
        { question: "¿Cuál es el siguiente número: 2, 5, 11, 23, 47, ...?", options: ["89", "91", "93", "95"], correct: 3, topic: "Álgebra" },
        { question: "Si x/4 = 9, ¿cuánto vale x?", options: ["32", "34", "36", "38"], correct: 2, topic: "Álgebra" },
        { question: "¿Cuál es el MCM de 8 y 12?", options: ["20", "22", "24", "26"], correct: 2, topic: "Álgebra" },
        { question: "Si 4x + 2x = 36, ¿cuánto vale x?", options: ["5", "6", "7", "8"], correct: 1, topic: "Álgebra" },
        { question: "¿Cuál es el siguiente número: 5, 8, 14, 26, 50, ...?", options: ["92", "94", "96", "98"], correct: 3, topic: "Álgebra" },
        { question: "Si 3x - 7 = 2x + 5, ¿cuánto vale x?", options: ["10", "11", "12", "13"], correct: 2, topic: "Álgebra" },
        { question: "¿Cuál es el MCD de 18 y 30?", options: ["4", "5", "6", "8"], correct: 2, topic: "Álgebra" },
        { question: "Si 2(x + 3) = 18, ¿cuánto vale x?", options: ["5", "6", "7", "8"], correct: 1, topic: "Álgebra" },
        
        // Geometría - 15 preguntas
        { question: "Un triángulo tiene ángulos de 50° y 60°. ¿Cuál es el tercer ángulo?", options: ["60°", "70°", "80°", "90°"], correct: 1, topic: "Geometría" },
        { question: "¿Cuántos grados tiene un ángulo recto?", options: ["45°", "90°", "135°", "180°"], correct: 1, topic: "Geometría" },
        { question: "Un triángulo tiene lados de 3, 4 y 5 cm. ¿Qué tipo de triángulo es?", options: ["Equilátero", "Isósceles", "Rectángulo", "Obtuso"], correct: 2, topic: "Geometría" },
        { question: "¿Cuántos grados tiene la suma de los ángulos internos de un cuadrilátero?", options: ["270°", "360°", "450°", "540°"], correct: 1, topic: "Geometría" },
        { question: "Un cilindro tiene radio de 3 cm y altura de 10 cm. ¿Cuál es su volumen? (π ≈ 3.14)", options: ["262.6 cm³", "282.6 cm³", "302.6 cm³", "322.6 cm³"], correct: 1, topic: "Geometría" },
        { question: "¿Cuántos grados tiene un ángulo llano?", options: ["90°", "180°", "270°", "360°"], correct: 1, topic: "Geometría" },
        { question: "Una esfera tiene radio de 5 cm. ¿Cuál es su volumen? (π ≈ 3.14)", options: ["510.1 cm³", "523.3 cm³", "536.5 cm³", "549.7 cm³"], correct: 1, topic: "Geometría" },
        { question: "Un polígono regular de 6 lados tiene ángulos internos de 120°. ¿Cómo se llama?", options: ["Pentágono", "Hexágono", "Heptágono", "Octágono"], correct: 1, topic: "Geometría" },
        { question: "Un cono tiene radio de 4 cm y altura de 12 cm. ¿Cuál es su volumen? (π ≈ 3.14)", options: ["180.9 cm³", "200.9 cm³", "220.9 cm³", "240.9 cm³"], correct: 1, topic: "Geometría" },
        { question: "¿Cuántos grados tiene un ángulo agudo?", options: ["Menos de 90°", "Más de 90°", "Exactamente 90°", "180°"], correct: 0, topic: "Geometría" },
        { question: "Un prisma rectangular de 2×3×4 tiene volumen de 24. Si duplicas el ancho, ¿cuál es el nuevo volumen?", options: ["36", "42", "48", "54"], correct: 2, topic: "Geometría" },
        { question: "¿Cuántos grados tiene la suma de los ángulos internos de un triángulo?", options: ["90°", "180°", "270°", "360°"], correct: 1, topic: "Geometría" },
        { question: "Una pirámide tiene base cuadrada de 6 cm y altura de 8 cm. ¿Cuál es su volumen?", options: ["96 cm³", "106 cm³", "116 cm³", "126 cm³"], correct: 0, topic: "Geometría" },
        { question: "Un triángulo tiene dos lados iguales de 5 cm y base de 6 cm. ¿Qué tipo es?", options: ["Equilátero", "Isósceles", "Rectángulo", "Escaleno"], correct: 1, topic: "Geometría" },
        { question: "¿Cuántos grados tiene un ángulo obtuso?", options: ["Menos de 90°", "Más de 90° y menos de 180°", "Exactamente 90°", "180°"], correct: 1, topic: "Geometría" },
        
        // Trigonometría - 15 preguntas
        { question: "En un triángulo rectángulo, si el cateto opuesto es 3 y el cateto adyacente es 4, ¿cuál es la tangente?", options: ["0.5", "0.75", "1", "1.25"], correct: 1, topic: "Trigonometría" },
        { question: "Si sen(θ) = 0.5, ¿cuánto vale θ en grados?", options: ["15°", "30°", "45°", "60°"], correct: 1, topic: "Trigonometría" },
        { question: "En un triángulo rectángulo con hipotenusa de 10 y cateto de 6, ¿cuál es el coseno?", options: ["0.4", "0.6", "0.8", "1"], correct: 1, topic: "Trigonometría" },
        { question: "¿Cuánto vale sen(30°)?", options: ["0.5", "0.6", "0.7", "0.8"], correct: 0, topic: "Trigonometría" },
        { question: "Si tan(θ) = 1, ¿cuánto vale θ en grados?", options: ["30°", "45°", "60°", "90°"], correct: 1, topic: "Trigonometría" },
        { question: "En un triángulo rectángulo, si la hipotenusa es 13 y un cateto es 5, ¿cuál es el otro cateto?", options: ["10", "11", "12", "14"], correct: 2, topic: "Trigonometría" },
        { question: "¿Cuánto vale cos(60°)?", options: ["0.3", "0.4", "0.5", "0.6"], correct: 2, topic: "Trigonometría" },
        { question: "Si sen(θ) = 0.8, ¿cuánto vale cos(θ)?", options: ["0.4", "0.5", "0.6", "0.7"], correct: 2, topic: "Trigonometría" },
        { question: "Un triángulo tiene lados de 5, 12 y 13. ¿Cuál es el seno del ángulo opuesto al lado 5?", options: ["0.38", "0.40", "0.42", "0.44"], correct: 0, topic: "Trigonometría" },
        { question: "¿Cuánto vale tan(45°)?", options: ["0", "0.5", "1", "2"], correct: 2, topic: "Trigonometría" },
        { question: "Si cos(θ) = 0.6, ¿cuánto vale θ aproximadamente?", options: ["45°", "53°", "60°", "67°"], correct: 1, topic: "Trigonometría" },
        { question: "En un triángulo rectángulo, si el cateto opuesto es 8 y la hipotenusa es 10, ¿cuál es el seno?", options: ["0.6", "0.7", "0.8", "0.9"], correct: 2, topic: "Trigonometría" },
        { question: "¿Cuánto vale sen(90°)?", options: ["0", "0.5", "1", "2"], correct: 2, topic: "Trigonometría" },
        { question: "Si tan(θ) = 3/4, ¿cuál es el seno?", options: ["0.4", "0.5", "0.6", "0.7"], correct: 2, topic: "Trigonometría" },
        { question: "¿Cuántos grados son π/2 radianes?", options: ["45°", "90°", "135°", "180°"], correct: 1, topic: "Trigonometría" },
        
        // Funciones - 15 preguntas
        { question: "Si f(x) = 2x + 3, ¿cuánto es f(5)?", options: ["11", "12", "13", "14"], correct: 2, topic: "Funciones" },
        { question: "¿Cuál es el dominio de f(x) = √(x - 4)?", options: ["x ≥ 0", "x ≥ 4", "x > 4", "x ≠ 4"], correct: 1, topic: "Funciones" },
        { question: "Si f(x) = x² - 4, ¿cuánto es f(3)?", options: ["3", "4", "5", "6"], correct: 2, topic: "Funciones" },
        { question: "¿Cuál es el rango de f(x) = 2x + 1 si el dominio es {1, 2, 3}?", options: ["{2, 3, 4}", "{3, 5, 7}", "{4, 6, 8}", "{5, 7, 9}"], correct: 1, topic: "Funciones" },
        { question: "Si f(x) = 3x - 2 y f(4) = 10, ¿cuánto es x?", options: ["3", "4", "5", "6"], correct: 1, topic: "Funciones" },
        { question: "¿Cuál es la pendiente de f(x) = 4x - 7?", options: ["-7", "4", "-4", "7"], correct: 1, topic: "Funciones" },
        { question: "Si f(x) = x/2 + 5, ¿cuánto es f(8)?", options: ["7", "8", "9", "10"], correct: 2, topic: "Funciones" },
        { question: "¿Cuál es la intersección con el eje Y de f(x) = 2x - 6?", options: ["(0, -6)", "(0, 6)", "(-6, 0)", "(6, 0)"], correct: 0, topic: "Funciones" },
        { question: "Si f(x) = x² y f(a) = 25, ¿cuáles son los posibles valores de a?", options: ["±4", "±5", "±6", "±7"], correct: 1, topic: "Funciones" },
        { question: "¿Cuál es la intersección con el eje X de f(x) = x - 5?", options: ["(0, -5)", "(0, 5)", "(-5, 0)", "(5, 0)"], correct: 3, topic: "Funciones" },
        { question: "Si f(x) = 2x + 1 y g(x) = x - 3, ¿cuánto es f(g(2))?", options: ["-1", "0", "1", "2"], correct: 2, topic: "Funciones" },
        { question: "¿Cuál es la pendiente de una función horizontal?", options: ["0", "1", "-1", "Indefinida"], correct: 0, topic: "Funciones" },
        { question: "Si f(x) = -3x + 9, ¿cuánto es f(2)?", options: ["2", "3", "4", "5"], correct: 1, topic: "Funciones" },
        { question: "¿Cuál es la pendiente de una función vertical?", options: ["0", "1", "-1", "Indefinida"], correct: 3, topic: "Funciones" },
        { question: "Si f(x) = x² + x, ¿cuánto es f(2) - f(1)?", options: ["2", "3", "4", "5"], correct: 2, topic: "Funciones" },
        
        // Estadística - 15 preguntas
        { question: "¿Cuál es la media de: 5, 8, 12, 15, 20?", options: ["10", "11", "12", "13"], correct: 2, topic: "Estadística" },
        { question: "¿Cuál es la mediana de: 3, 7, 9, 12, 15?", options: ["7", "8", "9", "10"], correct: 2, topic: "Estadística" },
        { question: "¿Cuál es la moda de: 2, 3, 3, 5, 7, 7, 7, 9?", options: ["3", "5", "7", "9"], correct: 2, topic: "Estadística" },
        { question: "Si la media de 5 números es 20 y la suma es 100, ¿cuál es el quinto número si los otros son 15, 20, 25, 30?", options: ["5", "10", "15", "20"], correct: 1, topic: "Estadística" },
        { question: "¿Cuál es la mediana de: 4, 8, 12, 16, 20, 24?", options: ["12", "13", "14", "15"], correct: 2, topic: "Estadística" },
        { question: "¿Cuál es la media de: 10, 20, 30, 40, 50?", options: ["25", "30", "35", "40"], correct: 1, topic: "Estadística" },
        { question: "¿Cuál es la moda de: 1, 2, 2, 3, 4, 4, 4, 5?", options: ["2", "3", "4", "5"], correct: 2, topic: "Estadística" },
        { question: "Si la mediana es 15 en un conjunto de 7 números ordenados, ¿cuál es el cuarto número?", options: ["13", "14", "15", "16"], correct: 2, topic: "Estadística" },
        { question: "¿Cuál es la media de: 2.5, 3.5, 4.5, 5.5?", options: ["3.5", "4", "4.5", "5"], correct: 1, topic: "Estadística" },
        { question: "¿Cuál es la mediana de: 1, 3, 5, 7, 9, 11, 13?", options: ["5", "6", "7", "8"], correct: 2, topic: "Estadística" },
        { question: "¿Cuál es la moda de: 10, 15, 20, 15, 25, 15, 30?", options: ["10", "15", "20", "25"], correct: 1, topic: "Estadística" },
        { question: "Si la media de 4 números es 12.5, ¿cuál es la suma?", options: ["45", "48", "50", "52"], correct: 2, topic: "Estadística" },
        { question: "¿Cuál es la mediana de: 6, 12, 18, 24, 30, 36?", options: ["18", "19", "20", "21"], correct: 3, topic: "Estadística" },
        { question: "¿Cuál es la media de: 100, 200, 300, 400?", options: ["225", "250", "275", "300"], correct: 1, topic: "Estadística" },
        { question: "¿Cuál es la moda de: 5, 10, 15, 20, 25?", options: ["No hay moda", "5", "15", "25"], correct: 0, topic: "Estadística" }
    ],
    ciencias: [
        // Sistema Solar - 15 preguntas
        { question: "Si la Tierra tarda 365 días en orbitar el Sol, ¿cuántos años tarda en dar 3 vueltas?", options: ["1 año", "2 años", "3 años", "4 años"], correct: 2, topic: "Sistema Solar" },
        { question: "¿Qué planeta es conocido como el Planeta Rojo debido a su color?", options: ["Venus", "Júpiter", "Marte", "Saturno"], correct: 2, topic: "Sistema Solar" },
        { question: "¿Cuál es el planeta más grande del sistema solar?", options: ["Saturno", "Júpiter", "Urano", "Neptuno"], correct: 1, topic: "Sistema Solar" },
        { question: "¿Cuál es el planeta más cercano al Sol?", options: ["Venus", "Marte", "Mercurio", "Tierra"], correct: 2, topic: "Sistema Solar" },
        { question: "¿Cuál es el planeta más lejano del Sol?", options: ["Urano", "Neptuno", "Plutón", "Saturno"], correct: 1, topic: "Sistema Solar" },
        { question: "¿Cuál es el satélite natural de la Tierra?", options: ["Sol", "Luna", "Marte", "Venus"], correct: 1, topic: "Sistema Solar" },
        { question: "¿Qué planeta tiene anillos más visibles?", options: ["Júpiter", "Saturno", "Urano", "Neptuno"], correct: 1, topic: "Sistema Solar" },
        { question: "¿Cuál es la galaxia donde está el sistema solar?", options: ["Andrómeda", "Vía Láctea", "Triángulo", "Sombrero"], correct: 1, topic: "Sistema Solar" },
        { question: "¿Qué fenómeno causa las mareas en la Tierra?", options: ["Viento", "Gravedad lunar", "Rotación terrestre", "Corrientes oceánicas"], correct: 1, topic: "Sistema Solar" },
        { question: "¿Cuál es el océano más grande del mundo?", options: ["Atlántico", "Índico", "Pacífico", "Ártico"], correct: 2, topic: "Sistema Solar" },
        { question: "Si un año en Júpiter equivale a 12 años terrestres, ¿cuántos años terrestres son 2 años jovianos?", options: ["12 años", "24 años", "36 años", "48 años"], correct: 1, topic: "Sistema Solar" },
        { question: "¿Qué capa de la Tierra es donde vivimos?", options: ["Núcleo", "Manto", "Corteza", "Atmósfera"], correct: 2, topic: "Sistema Solar" },
        { question: "¿Cuántos planetas hay en el sistema solar?", options: ["7", "8", "9", "10"], correct: 1, topic: "Sistema Solar" },
        { question: "¿Qué planeta tiene el día más largo?", options: ["Marte", "Júpiter", "Venus", "Saturno"], correct: 2, topic: "Sistema Solar" },
        { question: "¿Qué planeta es conocido como el Planeta Gigante?", options: ["Tierra", "Júpiter", "Marte", "Venus"], correct: 1, topic: "Sistema Solar" },
        
        // Elementos Químicos - 15 preguntas
        { question: "¿Cuál es el elemento químico más abundante en el universo?", options: ["Oxígeno", "Hidrógeno", "Carbono", "Nitrógeno"], correct: 1, topic: "Elementos Químicos" },
        { question: "¿Cuál es la fórmula química del agua?", options: ["CO2", "H2O", "O2", "NaCl"], correct: 1, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo Fe?", options: ["Flúor", "Fósforo", "Hierro", "Francio"], correct: 2, topic: "Elementos Químicos" },
        { question: "¿Cuál es el símbolo químico del oro?", options: ["Ag", "Au", "Fe", "Cu"], correct: 1, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo O?", options: ["Oro", "Osmio", "Oxígeno", "Oganesón"], correct: 2, topic: "Elementos Químicos" },
        { question: "¿Cuál es el pH del agua pura?", options: ["5", "6", "7", "8"], correct: 2, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo Na?", options: ["Neón", "Nitrógeno", "Sodio", "Niobio"], correct: 2, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo C?", options: ["Calcio", "Carbono", "Cobre", "Cesio"], correct: 1, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo N?", options: ["Neón", "Nitrógeno", "Sodio", "Níquel"], correct: 1, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo Cl?", options: ["Calcio", "Cloro", "Cobre", "Cesio"], correct: 1, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo Ca?", options: ["Calcio", "Carbono", "Cobre", "Cesio"], correct: 0, topic: "Elementos Químicos" },
        { question: "¿Cuál es el pH del ácido clorhídrico?", options: ["7", "1", "14", "5"], correct: 1, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo K?", options: ["Potasio", "Kriptón", "Kobalto", "Calcio"], correct: 0, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo Mg?", options: ["Manganeso", "Magnesio", "Mercurio", "Molibdeno"], correct: 1, topic: "Elementos Químicos" },
        { question: "¿Cuál es el elemento con símbolo S?", options: ["Sodio", "Azufre", "Silicio", "Estaño"], correct: 1, topic: "Elementos Químicos" },
        
        // Células - 15 preguntas
        { question: "¿Qué tipo de animal es la ballena?", options: ["Pez", "Reptil", "Mamífero", "Anfibio"], correct: 2, topic: "Células" },
        { question: "¿Qué tipo de célula no tiene núcleo?", options: ["Eucariota", "Procariota", "Animal", "Vegetal"], correct: 1, topic: "Células" },
        { question: "¿Qué estructura celular contiene el ADN?", options: ["Ribosoma", "Mitocondria", "Núcleo", "Citoplasma"], correct: 2, topic: "Células" },
        { question: "¿Qué tipo de animal es el tiburón?", options: ["Mamífero", "Pez", "Reptil", "Anfibio"], correct: 1, topic: "Células" },
        { question: "¿Qué tipo de célula tiene pared celular?", options: ["Animal", "Vegetal", "Bacteriana", "Fúngica"], correct: 1, topic: "Células" },
        { question: "¿Qué parte de la célula produce energía?", options: ["Ribosoma", "Mitocondria", "Núcleo", "Lisosoma"], correct: 1, topic: "Células" },
        { question: "¿Qué tipo de animal es el pulpo?", options: ["Pez", "Molusco", "Crustáceo", "Mamífero"], correct: 1, topic: "Células" },
        { question: "¿Qué tipo de célula forma los músculos?", options: ["Epitelial", "Muscular", "Nerviosa", "Conjuntiva"], correct: 1, topic: "Células" },
        { question: "¿Qué organelo sintetiza proteínas?", options: ["Mitocondria", "Ribosoma", "Núcleo", "Lisosoma"], correct: 1, topic: "Células" },
        { question: "¿Qué tipo de célula forma la piel?", options: ["Epitelial", "Muscular", "Nerviosa", "Conjuntiva"], correct: 0, topic: "Células" },
        { question: "¿Qué organelo almacena agua?", options: ["Ribosoma", "Vacuola", "Núcleo", "Mitocondria"], correct: 1, topic: "Células" },
        { question: "¿Qué tipo de célula transmite señales eléctricas?", options: ["Epitelial", "Muscular", "Nerviosa", "Conjuntiva"], correct: 2, topic: "Células" },
        { question: "¿Qué organelo digiere materiales?", options: ["Ribosoma", "Lisosoma", "Núcleo", "Mitocondria"], correct: 1, topic: "Células" },
        { question: "¿Qué tipo de célula forma los huesos?", options: ["Epitelial", "Ósea", "Nerviosa", "Muscular"], correct: 1, topic: "Células" },
        { question: "¿Qué estructura controla la entrada y salida de sustancias?", options: ["Pared celular", "Membrana celular", "Citoplasma", "Núcleo"], correct: 1, topic: "Células" },
        
        // Sistema Circulatorio - 15 preguntas
        { question: "¿Qué órgano bombea sangre por todo el cuerpo?", options: ["Pulmón", "Hígado", "Corazón", "Riñón"], correct: 2, topic: "Sistema Circulatorio" },
        { question: "¿Cuál es la temperatura normal del cuerpo humano?", options: ["35°C", "36°C", "37°C", "38°C"], correct: 2, topic: "Sistema Circulatorio" },
        { question: "¿Qué órgano filtra la sangre?", options: ["Corazón", "Hígado", "Riñón", "Bazo"], correct: 2, topic: "Sistema Circulatorio" },
        { question: "¿Qué tipo de vasos sanguíneos llevan sangre oxigenada del corazón?", options: ["Venas", "Arterias", "Capilares", "Linfáticos"], correct: 1, topic: "Sistema Circulatorio" },
        { question: "¿Qué componente de la sangre transporta oxígeno?", options: ["Leucocitos", "Eritrocitos", "Plaquetas", "Plasma"], correct: 1, topic: "Sistema Circulatorio" },
        { question: "¿Qué tipo de vasos sanguíneos llevan sangre desoxigenada al corazón?", options: ["Arterias", "Venas", "Capilares", "Linfáticos"], correct: 1, topic: "Sistema Circulatorio" },
        { question: "¿Qué componente de la sangre ayuda en la coagulación?", options: ["Leucocitos", "Eritrocitos", "Plaquetas", "Plasma"], correct: 2, topic: "Sistema Circulatorio" },
        { question: "¿Qué tipo de vasos permiten el intercambio de gases?", options: ["Arterias", "Venas", "Capilares", "Linfáticos"], correct: 2, topic: "Sistema Circulatorio" },
        { question: "¿Qué componente de la sangre combate infecciones?", options: ["Leucocitos", "Eritrocitos", "Plaquetas", "Plasma"], correct: 0, topic: "Sistema Circulatorio" },
        { question: "¿Cuántas cámaras tiene el corazón humano?", options: ["2", "3", "4", "5"], correct: 2, topic: "Sistema Circulatorio" },
        { question: "¿Qué componente de la sangre es la parte líquida?", options: ["Leucocitos", "Eritrocitos", "Plaquetas", "Plasma"], correct: 3, topic: "Sistema Circulatorio" },
        { question: "¿Qué tipo de circulación va del corazón a los pulmones?", options: ["Sistémica", "Pulmonar", "Coronaria", "Cerebral"], correct: 1, topic: "Sistema Circulatorio" },
        { question: "¿Qué pigmento en los glóbulos rojos transporta oxígeno?", options: ["Melanina", "Hemoglobina", "Clorofila", "Caroteno"], correct: 1, topic: "Sistema Circulatorio" },
        { question: "¿Qué tipo de circulación va del corazón al resto del cuerpo?", options: ["Sistémica", "Pulmonar", "Coronaria", "Cerebral"], correct: 0, topic: "Sistema Circulatorio" },
        { question: "¿Cuál es la presión arterial normal aproximada?", options: ["90/60", "120/80", "140/90", "160/100"], correct: 1, topic: "Sistema Circulatorio" },
        
        // Sistema Digestivo - 15 preguntas
        { question: "¿Qué órgano comienza la digestión química en la boca?", options: ["Lengua", "Dientes", "Glándulas salivales", "Esófago"], correct: 2, topic: "Sistema Digestivo" },
        { question: "¿Qué órgano produce bilis?", options: ["Estómago", "Páncreas", "Hígado", "Vesícula biliar"], correct: 2, topic: "Sistema Digestivo" },
        { question: "¿Qué órgano produce enzimas digestivas e insulina?", options: ["Hígado", "Estómago", "Páncreas", "Intestino"], correct: 2, topic: "Sistema Digestivo" },
        { question: "¿Dónde ocurre la mayor parte de la digestión y absorción?", options: ["Estómago", "Intestino delgado", "Intestino grueso", "Esófago"], correct: 1, topic: "Sistema Digestivo" },
        { question: "¿Qué órgano almacena bilis?", options: ["Hígado", "Páncreas", "Vesícula biliar", "Estómago"], correct: 2, topic: "Sistema Digestivo" },
        { question: "¿Qué órgano absorbe agua de los alimentos?", options: ["Estómago", "Intestino delgado", "Intestino grueso", "Esófago"], correct: 2, topic: "Sistema Digestivo" },
        { question: "¿Qué ácido se produce en el estómago?", options: ["Sulfúrico", "Clorhídrico", "Nítrico", "Acético"], correct: 1, topic: "Sistema Digestivo" },
        { question: "¿Qué órgano transporta alimentos al estómago?", options: ["Boca", "Faringe", "Esófago", "Intestino"], correct: 2, topic: "Sistema Digestivo" },
        { question: "¿Qué enzima digestiva descompone proteínas?", options: ["Amilasa", "Pepsina", "Lipasa", "Lactasa"], correct: 1, topic: "Sistema Digestivo" },
        { question: "¿Qué órgano mezcla alimentos con saliva?", options: ["Esófago", "Boca", "Estómago", "Intestino"], correct: 1, topic: "Sistema Digestivo" },
        { question: "¿Qué enzima digestiva descompone grasas?", options: ["Amilasa", "Pepsina", "Lipasa", "Lactasa"], correct: 2, topic: "Sistema Digestivo" },
        { question: "¿Qué órgano almacena temporalmente los alimentos?", options: ["Boca", "Esófago", "Estómago", "Intestino"], correct: 2, topic: "Sistema Digestivo" },
        { question: "¿Qué enzima digestiva descompone carbohidratos?", options: ["Amilasa", "Pepsina", "Lipasa", "Lactasa"], correct: 0, topic: "Sistema Digestivo" },
        { question: "¿Qué estructura conecta la boca con el estómago?", options: ["Tráquea", "Esófago", "Intestino", "Faringe"], correct: 1, topic: "Sistema Digestivo" },
        { question: "¿Qué enzima digestiva descompone lactosa?", options: ["Amilasa", "Pepsina", "Lipasa", "Lactasa"], correct: 3, topic: "Sistema Digestivo" },
        
        // Sistema Respiratorio - 15 preguntas
        { question: "¿Qué gas es necesario para la respiración?", options: ["Nitrógeno", "Dióxido de carbono", "Oxígeno", "Hidrógeno"], correct: 2, topic: "Sistema Respiratorio" },
        { question: "¿Qué estructura filtra y calienta el aire?", options: ["Faringe", "Laringe", "Nariz", "Tráquea"], correct: 2, topic: "Sistema Respiratorio" },
        { question: "¿Dónde ocurre el intercambio de gases?", options: ["Tráquea", "Bronquios", "Alvéolos", "Bronquiolos"], correct: 2, topic: "Sistema Respiratorio" },
        { question: "¿Qué gas exhalamos durante la respiración?", options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correct: 2, topic: "Sistema Respiratorio" },
        { question: "¿Qué estructura produce el sonido?", options: ["Faringe", "Tráquea", "Laringe", "Bronquios"], correct: 2, topic: "Sistema Respiratorio" },
        { question: "¿Qué estructura conecta la tráquea con los pulmones?", options: ["Bronquios", "Alvéolos", "Bronquiolos", "Faringe"], correct: 0, topic: "Sistema Respiratorio" },
        { question: "¿Cuántos pulmones tiene el ser humano?", options: ["1", "2", "3", "4"], correct: 1, topic: "Sistema Respiratorio" },
        { question: "¿Qué estructura divide la tráquea?", options: ["Laringe", "Bronquios", "Faringe", "Epiglotis"], correct: 1, topic: "Sistema Respiratorio" },
        { question: "¿Qué estructura protege la tráquea al tragar?", options: ["Laringe", "Epiglotis", "Faringe", "Bronquios"], correct: 1, topic: "Sistema Respiratorio" },
        { question: "¿Qué estructura es el paso común para aire y alimentos?", options: ["Tráquea", "Esófago", "Faringe", "Laringe"], correct: 2, topic: "Sistema Respiratorio" },
        { question: "¿Qué músculo principal ayuda en la respiración?", options: ["Abdominal", "Díafragma", "Intercostal", "Pectoral"], correct: 1, topic: "Sistema Respiratorio" },
        { question: "¿Qué estructura transporta aire a los alvéolos?", options: ["Bronquios", "Bronquiolos", "Tráquea", "Faringe"], correct: 1, topic: "Sistema Respiratorio" },
        { question: "¿Qué proceso ocurre cuando inhalamos?", options: ["Expiración", "Inspiración", "Digestión", "Circulación"], correct: 1, topic: "Sistema Respiratorio" },
        { question: "¿Qué estructura contiene las cuerdas vocales?", options: ["Faringe", "Tráquea", "Laringe", "Bronquios"], correct: 2, topic: "Sistema Respiratorio" },
        { question: "¿Qué proceso ocurre cuando exhalamos?", options: ["Inspiración", "Expiración", "Digestión", "Circulación"], correct: 1, topic: "Sistema Respiratorio" },
        
        // Sistema Nervioso - 15 preguntas
        { question: "¿Qué sistema del cuerpo controla las funciones?", options: ["Digestivo", "Nervioso", "Respiratorio", "Circulatorio"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué célula transmite señales eléctricas?", options: ["Eritrocito", "Leucocito", "Neurona", "Plaqueta"], correct: 2, topic: "Sistema Nervioso" },
        { question: "¿Qué órgano es el centro de control del sistema nervioso?", options: ["Corazón", "Hígado", "Cerebro", "Pulmón"], correct: 2, topic: "Sistema Nervioso" },
        { question: "¿Qué es una sinapsis?", options: ["Tipo de célula", "Comunicación entre neuronas", "Parte del cerebro", "Tipo de nervio"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué parte del sistema nervioso incluye el cerebro y médula?", options: ["SNP", "SNC", "Autónomo", "Periférico"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué es un reflejo?", options: ["Pensamiento consciente", "Respuesta automática", "Memoria", "Sensación"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué parte del sistema nervioso conecta con el cuerpo?", options: ["SNC", "SNP", "Autónomo", "Central"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué estructura protege el cerebro?", options: ["Meninges", "Piel", "Músculos", "Huesos"], correct: 0, topic: "Sistema Nervioso" },
        { question: "¿Qué tipo de nervio transmite información sensorial?", options: ["Motor", "Sensitivo", "Mixto", "Autónomo"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué estructura conecta el cerebro con el cuerpo?", options: ["Nervios", "Médula espinal", "Neuronas", "Sinapsis"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué tipo de nervio controla músculos?", options: ["Sensitivo", "Motor", "Autónomo", "Mixto"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué parte del cerebro controla el equilibrio?", options: ["Cerebro", "Cerebelo", "Tronco encefálico", "Lóbulo frontal"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué sistema nervioso controla funciones involuntarias?", options: ["Somatico", "Autónomo", "Central", "Periférico"], correct: 1, topic: "Sistema Nervioso" },
        { question: "¿Qué parte del cerebro controla el pensamiento?", options: ["Cerebelo", "Tronco encefálico", "Lóbulo frontal", "Lóbulo occipital"], correct: 2, topic: "Sistema Nervioso" },
        { question: "¿Qué neurotransmisor está asociado con el placer?", options: ["Adrenalina", "Dopamina", "Serotonina", "GABA"], correct: 1, topic: "Sistema Nervioso" },
        
        // Fotosíntesis - 15 preguntas
        { question: "¿Qué proceso realizan las plantas para producir alimento?", options: ["Respiración", "Fotosíntesis", "Digestión", "Transpiración"], correct: 1, topic: "Fotosíntesis" },
        { question: "¿Qué gas producen las plantas durante la fotosíntesis?", options: ["CO2", "N2", "O2", "H2"], correct: 2, topic: "Fotosíntesis" },
        { question: "¿Qué parte de la planta absorbe agua del suelo?", options: ["Hoja", "Tallo", "Raíz", "Flor"], correct: 2, topic: "Fotosíntesis" },
        { question: "¿Qué gas necesitan las plantas para la fotosíntesis?", options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correct: 2, topic: "Fotosíntesis" },
        { question: "¿Qué pigmento captura luz solar?", options: ["Caroteno", "Clorofila", "Xantofila", "Antocianina"], correct: 1, topic: "Fotosíntesis" },
        { question: "¿Qué tipo de reproducción es la de las plantas con flores?", options: ["Asexual", "Sexual", "Vegetativa", "Esporas"], correct: 1, topic: "Fotosíntesis" },
        { question: "¿Dónde ocurre la fotosíntesis en la planta?", options: ["Raíz", "Tallo", "Hoja", "Flor"], correct: 2, topic: "Fotosíntesis" },
        { question: "¿Qué energía usa la fotosíntesis?", options: ["Eléctrica", "Química", "Solar", "Térmica"], correct: 2, topic: "Fotosíntesis" },
        { question: "¿Qué organelo celular realiza la fotosíntesis?", options: ["Mitocondria", "Ribosoma", "Cloroplasto", "Núcleo"], correct: 2, topic: "Fotosíntesis" },
        { question: "¿Qué producto principal produce la fotosíntesis?", options: ["CO2", "O2", "Glucosa", "Agua"], correct: 2, topic: "Fotosíntesis" },
        { question: "¿Qué estructura de la hoja permite el intercambio de gases?", options: ["Cutícula", "Estomas", "Venas", "Mesófilo"], correct: 1, topic: "Fotosíntesis" },
        { question: "¿Qué subproducto produce la fotosíntesis?", options: ["Glucosa", "Oxígeno", "Agua", "CO2"], correct: 1, topic: "Fotosíntesis" },
        { question: "¿Qué estructura transporta agua en la planta?", options: ["Estomas", "Xilema", "Floema", "Cutícula"], correct: 1, topic: "Fotosíntesis" },
        { question: "¿Qué estructura transporta glucosa en la planta?", options: ["Estomas", "Xilema", "Floema", "Cutícula"], correct: 2, topic: "Fotosíntesis" },
        { question: "¿Qué color absorbe más la clorofila?", options: ["Verde", "Rojo", "Azul", "Amarillo"], correct: 1, topic: "Fotosíntesis" },
        
        // Estados de la Materia - 15 preguntas
        { question: "¿Cuál es el gas principal de la atmósfera terrestre?", options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"], correct: 1, topic: "Estados de la Materia" },
        { question: "¿Cuál es el estado del agua a 0°C?", options: ["Líquido", "Gaseoso", "Sólido", "Plasma"], correct: 2, topic: "Estados de la Materia" },
        { question: "¿Qué capa protege la Tierra de radiación?", options: ["Troposfera", "Estratosfera", "Ozonosfera", "Ionosfera"], correct: 2, topic: "Estados de la Materia" },
        { question: "¿Cuál es el estado del agua a 100°C?", options: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correct: 2, topic: "Estados de la Materia" },
        { question: "¿Qué estado tiene forma y volumen definidos?", options: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correct: 0, topic: "Estados de la Materia" },
        { question: "¿Cuál es el punto de ebullición del agua?", options: ["90°C", "100°C", "110°C", "95°C"], correct: 1, topic: "Estados de la Materia" },
        { question: "¿Qué estado tiene volumen definido pero no forma?", options: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correct: 1, topic: "Estados de la Materia" },
        { question: "¿Cuál es el punto de congelación del agua?", options: ["-2°C", "0°C", "2°C", "5°C"], correct: 1, topic: "Estados de la Materia" },
        { question: "¿Qué estado no tiene forma ni volumen definidos?", options: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correct: 2, topic: "Estados de la Materia" },
        { question: "¿Qué cambio de estado es de sólido a líquido?", options: ["Solidificación", "Fusión", "Vaporización", "Condensación"], correct: 1, topic: "Estados de la Materia" },
        { question: "¿Qué estado es el más común en el universo?", options: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correct: 3, topic: "Estados de la Materia" },
        { question: "¿Qué cambio de estado es de líquido a gas?", options: ["Fusión", "Solidificación", "Vaporización", "Condensación"], correct: 2, topic: "Estados de la Materia" },
        { question: "¿Qué estado es gas ionizado?", options: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correct: 3, topic: "Estados de la Materia" },
        { question: "¿Qué cambio de estado es de gas a líquido?", options: ["Fusión", "Vaporización", "Condensación", "Sublimación"], correct: 2, topic: "Estados de la Materia" },
        { question: "¿Qué cambio de estado es de sólido a gas?", options: ["Fusión", "Sublimación", "Vaporización", "Condensación"], correct: 1, topic: "Estados de la Materia" },
        
        // Energía y Fuerzas - 15 preguntas
        { question: "¿Cuál es la velocidad de la luz?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "200,000 km/s"], correct: 0, topic: "Energía y Fuerzas" },
        { question: "¿Qué fuerza nos mantiene en el suelo?", options: ["Magnética", "Gravedad", "Eléctrica", "Nuclear"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de onda es el sonido?", options: ["Electromagnética", "Mecánica", "Nuclear", "Gravitacional"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de energía proviene del Sol?", options: ["Eólica", "Solar", "Hidráulica", "Nuclear"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de energía es la electricidad?", options: ["Cinética", "Potencial", "Eléctrica", "Térmica"], correct: 2, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de energía tiene un objeto en movimiento?", options: ["Potencial", "Cinética", "Térmica", "Eléctrica"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de energía tiene un objeto elevado?", options: ["Cinética", "Potencial", "Térmica", "Eléctrica"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de onda es la luz?", options: ["Mecánica", "Electromagnética", "Nuclear", "Gravitacional"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de energía tiene el calor?", options: ["Cinética", "Potencial", "Térmica", "Eléctrica"], correct: 2, topic: "Energía y Fuerzas" },
        { question: "¿Qué ley dice que la energía no se crea ni se destruye?", options: ["Newton", "Conservación", "Ohm", "Faraday"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de energía tiene un resorte comprimido?", options: ["Cinética", "Potencial elástica", "Térmica", "Eléctrica"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de energía tiene una batería?", options: ["Cinética", "Potencial química", "Térmica", "Eléctrica"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué fuerza actúa entre cargas eléctricas?", options: ["Gravedad", "Electromagnética", "Nuclear fuerte", "Nuclear débil"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué tipo de energía tiene el viento?", options: ["Potencial", "Cinética", "Térmica", "Eléctrica"], correct: 1, topic: "Energía y Fuerzas" },
        { question: "¿Qué fuerza mantiene unidos los núcleos atómicos?", options: ["Gravedad", "Electromagnética", "Nuclear fuerte", "Nuclear débil"], correct: 2, topic: "Energía y Fuerzas" }
    ],
    lectura: [
        { question: "¿Cuál es el antónimo de 'grande'?", options: ["Mediano", "Pequeño", "Enorme", "Gigante"], correct: 1, topic: "Gramática" },
        { question: "¿Qué tipo de texto narra hechos reales?", options: ["Ficción", "Cuento", "Noticia", "Novela"], correct: 2, topic: "Tipos de Texto" },
        { question: "¿Cuál es el sinónimo de 'feliz'?", options: ["Triste", "Contento", "Enojado", "Preocupado"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es una metáfora?", options: ["Comparación directa", "Comparación sin 'como'", "Exageración", "Repetición"], correct: 1, topic: "Figuras Literarias" },
        { question: "¿Cuál es el sujeto en 'El niño estudia'?", options: ["Estudia", "Niño", "El", "Ninguno"], correct: 1, topic: "Sintaxis" },
        { question: "¿Qué género literario incluye 'Don Quijote'?", options: ["Poesía", "Teatro", "Novela", "Cuento"], correct: 2, topic: "Literatura" },
        { question: "¿Cuál es el antónimo de 'rápido'?", options: ["Veloz", "Lento", "Pronto", "Ágil"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es un sustantivo?", options: ["Acción", "Nombre", "Cualidad", "Conector"], correct: 1, topic: "Gramática" },
        { question: "¿Cuál es el sinónimo de 'inteligente'?", options: ["Tonto", "Sabio", "Listo", "Ignorante"], correct: 2, topic: "Gramática" },
        { question: "¿Qué es una fábula?", options: ["Poema largo", "Historia con moraleja", "Noticia", "Ensayo"], correct: 1, topic: "Literatura" },
        { question: "¿Cuál es el predicado en 'María canta'?", options: ["María", "Canta", "El verbo", "Ninguno"], correct: 1, topic: "Sintaxis" },
        { question: "¿Qué tipo de texto usa 'yo' como narrador?", options: ["Tercera persona", "Primera persona", "Segunda persona", "Omnisciente"], correct: 1, topic: "Tipos de Texto" },
        { question: "¿Cuál es el antónimo de 'claro'?", options: ["Luminoso", "Brillante", "Oscuro", "Transparente"], correct: 2, topic: "Gramática" },
        { question: "¿Qué es un adjetivo?", options: ["Nombre", "Cualidad", "Acción", "Conector"], correct: 1, topic: "Gramática" },
        { question: "¿Cuál es el sinónimo de 'hermoso'?", options: ["Feo", "Bello", "Normal", "Común"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es un verbo?", options: ["Nombre", "Acción", "Cualidad", "Artículo"], correct: 1, topic: "Gramática" },
        { question: "¿Cuál es el antónimo de 'fuerte'?", options: ["Poderoso", "Débil", "Robusto", "Resistente"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es un poema?", options: ["Texto en prosa", "Texto en verso", "Noticia", "Ensayo"], correct: 1, topic: "Literatura" },
        { question: "¿Cuál es el sinónimo de 'triste'?", options: ["Feliz", "Alegre", "Melancólico", "Contento"], correct: 2, topic: "Gramática" },
        { question: "¿Qué es una hipérbole?", options: ["Comparación", "Exageración", "Repetición", "Contradicción"], correct: 1, topic: "Figuras Literarias" },
        { question: "¿Cuál es el antónimo de 'nuevo'?", options: ["Moderno", "Viejo", "Actual", "Reciente"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es un artículo?", options: ["Nombre", "Determinante", "Verbo", "Adjetivo"], correct: 1, topic: "Gramática" },
        { question: "¿Cuál es el sinónimo de 'caminar'?", options: ["Correr", "Andar", "Saltar", "Volar"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es una novela?", options: ["Texto corto", "Texto largo narrativo", "Poema", "Teatro"], correct: 1, topic: "Literatura" },
        { question: "¿Cuál es el antónimo de 'siempre'?", options: ["A veces", "Nunca", "Frecuentemente", "Siempre"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es un cuento?", options: ["Texto largo", "Narración breve", "Poema", "Ensayo"], correct: 1, topic: "Literatura" },
        { question: "¿Cuál es el sinónimo de 'hablar'?", options: ["Callar", "Decir", "Gritar", "Susurrar"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es una personificación?", options: ["Dar cualidades humanas", "Comparación", "Exageración", "Repetición"], correct: 0, topic: "Figuras Literarias" },
        { question: "¿Cuál es el antónimo de 'subir'?", options: ["Escalar", "Bajar", "Levantar", "Ascender"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es un ensayo?", options: ["Ficción", "Opinión argumentada", "Poesía", "Teatro"], correct: 1, topic: "Tipos de Texto" },
        { question: "¿Cuál es el sinónimo de 'comer'?", options: ["Ayunar", "Ingerir", "Beber", "Masticar"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es una aliteración?", options: ["Repetición de sonidos", "Comparación", "Exageración", "Contradicción"], correct: 0, topic: "Figuras Literarias" },
        { question: "¿Cuál es el antónimo de 'entrar'?", options: ["Acceder", "Salir", "Ingresar", "Penetrar"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es una biografía?", options: ["Ficción", "Vida de alguien", "Poesía", "Teatro"], correct: 1, topic: "Literatura" },
        { question: "¿Cuál es el sinónimo de 'ver'?", options: ["Mirar", "Oír", "Tocar", "Oler"], correct: 0, topic: "Gramática" },
        { question: "¿Qué es una paradoja?", options: ["Verdad obvia", "Contradicción aparente", "Exageración", "Comparación"], correct: 1, topic: "Figuras Literarias" },
        { question: "¿Cuál es el antónimo de 'ganar'?", options: ["Obtener", "Perder", "Conseguir", "Lograr"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es un drama?", options: ["Comedia", "Obra teatral seria", "Poesía", "Cuento"], correct: 1, topic: "Literatura" },
        { question: "¿Cuál es el sinónimo de 'pensar'?", options: ["Ignorar", "Reflexionar", "Olvidar", "Sentir"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es una onomatopeya?", options: ["Imitación de sonidos", "Comparación", "Exageración", "Repetición"], correct: 0, topic: "Figuras Literarias" },
        { question: "¿Cuál es el antónimo de 'caliente'?", options: ["Tibio", "Frío", "Templado", "Cálido"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es una leyenda?", options: ["Historia real", "Tradición con elementos sobrenaturales", "Noticia", "Ensayo"], correct: 1, topic: "Literatura" },
        { question: "¿Cuál es el sinónimo de 'trabajar'?", options: ["Descansar", "Laborar", "Dormir", "Jugar"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es una ironía?", options: ["Verdad directa", "Decir lo contrario", "Exageración", "Comparación"], correct: 1, topic: "Figuras Literarias" },
        { question: "¿Cuál es el antónimo de 'rico'?", options: ["Acomodado", "Pobre", "Adinerado", "Próspero"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es un epigrama?", options: ["Poema largo", "Poema breve satírico", "Novela", "Ensayo"], correct: 1, topic: "Literatura" },
        { question: "¿Cuál es el sinónimo de 'correr'?", options: ["Caminar", "Huir", "Saltar", "Volar"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es una sátira?", options: ["Elogio", "Crítica humorística", "Tragedia", "Comedia"], correct: 1, topic: "Figuras Literarias" },
        { question: "¿Cuál es el antónimo de 'alegre'?", options: ["Feliz", "Triste", "Contento", "Feliz"], correct: 1, topic: "Gramática" },
        { question: "¿Qué es un haiku?", options: ["Poema largo", "Poema japonés breve", "Novela", "Cuento"], correct: 1, topic: "Literatura" },
        // Preguntas adicionales de Lectura
        { question: "¿Qué tipo de texto narra hechos reales?", options: ["Ficción", "Cuento", "Noticia", "Novela"], correct: 2, topic: "Tipos de Texto" },
        { question: "¿Qué tipo de texto usa 'yo' como narrador?", options: ["Tercera persona", "Primera persona", "Segunda persona", "Omnisciente"], correct: 1, topic: "Tipos de Texto" },
        { question: "¿Qué es una biografía?", options: ["Ficción", "Vida de alguien", "Poesía", "Teatro"], correct: 1, topic: "Literatura" },
        { question: "¿Qué es un drama?", options: ["Comedia", "Obra teatral seria", "Poesía", "Cuento"], correct: 1, topic: "Literatura" },
        { question: "¿Qué es una leyenda?", options: ["Historia real", "Tradición con elementos sobrenaturales", "Noticia", "Ensayo"], correct: 1, topic: "Literatura" },
        { question: "¿Qué es una paradoja?", options: ["Verdad obvia", "Contradicción aparente", "Exageración", "Comparación"], correct: 1, topic: "Figuras Literarias" },
        { question: "¿Qué es una onomatopeya?", options: ["Imitación de sonidos", "Comparación", "Exageración", "Repetición"], correct: 0, topic: "Figuras Literarias" },
        { question: "¿Qué es una ironía?", options: ["Verdad directa", "Decir lo contrario", "Exageración", "Comparación"], correct: 1, topic: "Figuras Literarias" },
        { question: "¿Qué es un ensayo?", options: ["Ficción", "Opinión argumentada", "Poesía", "Teatro"], correct: 1, topic: "Tipos de Texto" },
        { question: "¿Qué es una aliteración?", options: ["Repetición de sonidos", "Comparación", "Exageración", "Contradicción"], correct: 0, topic: "Figuras Literarias" },
        { question: "¿Qué es una personificación?", options: ["Dar cualidades humanas", "Comparación", "Exageración", "Repetición"], correct: 0, topic: "Figuras Literarias" },
        { question: "¿Qué es una metáfora?", options: ["Comparación directa", "Comparación sin 'como'", "Exageración", "Repetición"], correct: 1, topic: "Figuras Literarias" },
        {Question: "¿Qué es una hipérbole?", options: ["Comparación", "Exageración", "Repetición", "Contradicción"], correct: 1, topic: "Figuras Literarias" }
    ],
    programacion: [
        // HTML - 20 preguntas
        { question: "¿Qué significa HTML?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"], correct: 0, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para un enlace en HTML?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para una imagen en HTML?", options: ["<img>", "<image>", "<pic>", "<photo>"], correct: 0, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para un párrafo en HTML?", options: ["<p>", "<paragraph>", "<text>", "<para>"], correct: 0, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para una lista en HTML?", options: ["<list>", "<ul>", "<li>", "<items>"], correct: 1, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para un título en HTML?", options: ["<title>", "<h1>", "<header>", "<heading>"], correct: 1, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para un botón en HTML?", options: ["<btn>", "<button>", "<click>", "<input>"], correct: 1, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para un formulario en HTML?", options: ["<form>", "<input>", "<submit>", "<data>"], correct: 0, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para una tabla en HTML?", options: ["<table>", "<grid>", "<data>", "<rows>"], correct: 0, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para división en HTML?", options: ["<div>", "<section>", "<span>", "<container>"], correct: 0, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para span en HTML?", options: ["<div>", "<span>", "<section>", "<p>"], correct: 1, topic: "HTML" },
        { question: "¿Cuál es la etiqueta para script en HTML?", options: ["<js>", "<script>", "<code>", "<function>"], correct: 1, topic: "HTML" },
        { question: "¿Cuál es el atributo para el texto alternativo de una imagen?", options: ["text", "alt", "src", "title"], correct: 1, topic: "HTML" },
        { question: "¿Cuál es el atributo para el enlace de un elemento?", options: ["link", "href", "src", "url"], correct: 1, topic: "HTML" },
        { question: "¿Cuál es el atributo para el identificador de un elemento?", options: ["class", "id", "name", "tag"], correct: 1, topic: "HTML" },
        { question: "¿Cuál es el atributo para la clase de un elemento?", options: ["id", "class", "name", "tag"], correct: 1, topic: "HTML" },
        { question: "¿Qué etiqueta se usa para encabezado principal?", options: ["<header>", "<head>", "<h1>", "<title>"], correct: 2, topic: "HTML" },
        { question: "¿Qué etiqueta se usa para pie de página?", options: ["<footer>", "<foot>", "<bottom>", "<end>"], correct: 0, topic: "HTML" },
        { question: "¿Qué etiqueta se usa para navegación?", options: ["<nav>", "<navigation>", "<menu>", "<bar>"], correct: 0, topic: "HTML" },
        { question: "¿Qué etiqueta se usa para sección?", options: ["<section>", "<div>", "<part>", "<area>"], correct: 0, topic: "HTML" },
        { question: "¿Qué etiqueta se usa para artículo?", options: ["<article>", "<post>", "<item>", "<content>"], correct: 0, topic: "HTML" },
        
        // CSS - 15 preguntas
        { question: "¿Cuál es la función de CSS?", options: ["Lógica", "Estilos", "Base de datos", "Servidor"], correct: 1, topic: "CSS" },
        { question: "¿Cómo se selecciona un elemento por su id en CSS?", options: [".id", "#id", "id", "*id"], correct: 1, topic: "CSS" },
        { question: "¿Cómo se selecciona un elemento por su clase en CSS?", options: [".class", "#class", "class", "*class"], correct: 0, topic: "CSS" },
        { question: "¿Qué propiedad cambia el color del texto?", options: ["text-color", "color", "font-color", "text-color"], correct: 1, topic: "CSS" },
        { question: "¿Qué propiedad cambia el color de fondo?", options: ["bg-color", "background-color", "color", "fill-color"], correct: 1, topic: "CSS" },
        { question: "¿Qué propiedad cambia el tamaño de fuente?", options: ["font-size", "text-size", "size", "font-height"], correct: 0, topic: "CSS" },
        { question: "¿Qué propiedad cambia el margen externo?", options: ["padding", "margin", "border", "spacing"], correct: 1, topic: "CSS" },
        { question: "¿Qué propiedad cambia el margen interno?", options: ["margin", "padding", "border", "spacing"], correct: 1, topic: "CSS" },
        { question: "¿Qué propiedad cambia el borde?", options: ["edge", "border", "outline", "frame"], correct: 1, topic: "CSS" },
        { question: "¿Qué propiedad cambia la posición?", options: ["place", "position", "location", "set"], correct: 1, topic: "CSS" },
        { question: "¿Qué propiedad cambia la opacidad?", options: ["transparency", "opacity", "alpha", "visible"], correct: 1, topic: "CSS" },
        { question: "¿Qué propiedad cambia la altura?", options: ["height", "width", "size", "length"], correct: 0, topic: "CSS" },
        { question: "¿Qué propiedad cambia el ancho?", options: ["height", "width", "size", "length"], correct: 1, topic: "CSS" },
        { question: "¿Qué propiedad cambia el display?", options: ["show", "display", "visible", "hidden"], correct: 1, topic: "CSS" },
        { question: "¿Qué propiedad cambia el flexbox?", options: ["flex", "display", "box", "layout"], correct: 1, topic: "CSS" },
        
        // JavaScript Básico - 25 preguntas
        { question: "¿Qué símbolo se usa para comentarios en JavaScript?", options: ["//", "#", "/*", "--"], correct: 0, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de '5' + 5 en JavaScript?", options: ["10", "55", "Error", "undefined"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de 10 % 3?", options: ["3", "1", "0", "10"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de true && false?", options: ["true", "false", "undefined", "null"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de '2' === 2?", options: ["true", "false", "undefined", "error"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de null == undefined?", options: ["true", "false", "undefined", "error"], correct: 0, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de 3 + '3'?", options: ["6", "33", "Error", "undefined"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de typeof 'hola'?", options: ["number", "string", "boolean", "object"], correct: 1, topic: "Variables y Tipos" },
        { question: "¿Cuál es el resultado de !true?", options: ["true", "false", "undefined", "null"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de 10 > 5?", options: ["true", "false", "undefined", "null"], correct: 0, topic: "JavaScript Básico" },
        { question: "¿Qué es 'localStorage'?", options: ["Variable", "Almacenamiento local", "Base de datos", "Servidor"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de 'Hola'.length?", options: ["3", "4", "5", "undefined"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Qué es 'setTimeout'?", options: ["Variable", "Ejecutar después de tiempo", "Función", "Array"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de Math.floor(3.9)?", options: ["3", "4", "3.9", "error"], correct: 0, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de Math.random()?", options: ["0", "1", "Número aleatorio", "Error"], correct: 2, topic: "JavaScript Básico" },
        { question: "¿Qué es 'parseInt'?", options: ["Variable", "Convertir a entero", "Función", "Array"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de parseFloat('3.14')?", options: ["3", "3.14", "Error", "undefined"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Qué es 'isNaN'?", options: ["Variable", "Verificar si es número", "Función", "Array"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de '5' - 2?", options: ["3", "52", "Error", "undefined"], correct: 0, topic: "JavaScript Básico" },
        { question: "¿Qué es 'isFinite'?", options: ["Variable", "Verificar si es finito", "Función", "Array"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de '10' * 2?", options: ["20", "102", "Error", "undefined"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Qué es 'encodeURI'?", options: ["Variable", "Codificar URL", "Función", "Array"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de true || false?", options: ["true", "false", "undefined", "null"], correct: 0, topic: "JavaScript Básico" },
        { question: "¿Qué es 'decodeURI'?", options: ["Variable", "Decodificar URL", "Función", "Array"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de '5' / 2?", options: ["2.5", "52", "Error", "undefined"], correct: 0, topic: "JavaScript Básico" },
        { question: "¿Qué es 'escape'?", options: ["Variable", "Escapar caracteres", "Función", "Array"], correct: 1, topic: "JavaScript Básico" },
        { question: "¿Cuál es el resultado de null || 'hola'?", options: ["null", "hola", "undefined", "error"], correct: 1, topic: "JavaScript Básico" },
        
        // Variables y Tipos - 15 preguntas
        { question: "¿Qué es una variable?", options: ["Constante", "Espacio de memoria", "Función", "Clase"], correct: 1, topic: "Variables y Tipos" },
        { question: "¿Cómo se declara una variable en JavaScript?", options: ["var x = 5", "int x = 5", "x = 5", "let x = 5"], correct: 0, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es true?", options: ["string", "number", "boolean", "object"], correct: 2, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es 'hola'?", options: ["string", "number", "boolean", "object"], correct: 0, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es 42?", options: ["string", "number", "boolean", "object"], correct: 1, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es [1,2,3]?", options: ["string", "number", "array", "object"], correct: 2, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es {a:1}?", options: ["string", "number", "array", "object"], correct: 3, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es null?", options: ["string", "number", "null", "object"], correct: 2, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es undefined?", options: ["string", "number", "undefined", "object"], correct: 2, topic: "Variables y Tipos" },
        { question: "¿Qué palabra clave declara una constante?", options: ["var", "let", "const", "constant"], correct: 2, topic: "Variables y Tipos" },
        { question: "¿Qué palabra clave declara una variable con alcance de bloque?", options: ["var", "let", "const", "block"], correct: 1, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es NaN?", options: ["string", "number", "NaN", "object"], correct: 2, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es Infinity?", options: ["string", "number", "Infinity", "object"], correct: 1, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es function(){}?", options: ["string", "function", "object", "undefined"], correct: 1, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es Symbol('id')?", options: ["string", "symbol", "object", "undefined"], correct: 1, topic: "Variables y Tipos" },
        { question: "¿Qué tipo de dato es BigInt(123)?", options: ["string", "bigint", "object", "undefined"], correct: 1, topic: "Variables y Tipos" },
        
        // Arrays - 15 preguntas
        { question: "¿Qué es un array?", options: ["Variable simple", "Lista de elementos", "Función", "Objeto"], correct: 1, topic: "Arrays" },
        { question: "¿Cómo se accede al primer elemento de un array?", options: ["array[0]", "array[1]", "array.first", "array.first()"], correct: 0, topic: "Arrays" },
        { question: "¿Cómo se accede al último elemento de un array?", options: ["array[last]", "array[-1]", "array[array.length-1]", "array.last()"], correct: 2, topic: "Arrays" },
        { question: "¿Qué método agrega un elemento al final?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0, topic: "Arrays" },
        { question: "¿Qué método elimina el último elemento?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 1, topic: "Arrays" },
        { question: "¿Qué método agrega un elemento al inicio?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 3, topic: "Arrays" },
        { question: "¿Qué método elimina el primer elemento?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 2, topic: "Arrays" },
        { question: "¿Qué método busca un elemento?", options: ["find()", "search()", "locate()", "get()"], correct: 0, topic: "Arrays" },
        { question: "¿Qué método filtra elementos?", options: ["filter()", "select()", "where()", "find()"], correct: 0, topic: "Arrays" },
        { question: "¿Qué método transforma cada elemento?", options: ["map()", "transform()", "change()", "modify()"], correct: 0, topic: "Arrays" },
        { question: "¿Qué método reduce a un valor?", options: ["reduce()", "sum()", "total()", "aggregate()"], correct: 0, topic: "Arrays" },
        { question: "¿Qué método ordena elementos?", options: ["sort()", "order()", "arrange()", "organize()"], correct: 0, topic: "Arrays" },
        { question: "¿Qué método une arrays?", options: ["concat()", "join()", "merge()", "combine()"], correct: 0, topic: "Arrays" },
        { question: "¿Qué método corta un array?", options: ["slice()", "cut()", "split()", "divide()"], correct: 0, topic: "Arrays" },
        { question: "¿Qué método devuelve el tamaño?", options: ["size", "length", "count", "total"], correct: 1, topic: "Arrays" },
        { question: "¿Qué método verifica si incluye?", options: ["includes()", "contains()", "has()", "exists()"], correct: 0, topic: "Arrays" },
        
        // Objetos - 15 preguntas
        { question: "¿Qué es un objeto en JavaScript?", options: ["Variable simple", "Colección de propiedades", "Función", "Array"], correct: 1, topic: "Objetos" },
        { question: "¿Cómo se accede a una propiedad?", options: ["obj.propiedad", "obj[propiedad]", "obj->propiedad", "obj::propiedad"], correct: 0, topic: "Objetos" },
        { question: "¿Cómo se accede a una propiedad con variable?", options: ["obj.propiedad", "obj[propiedad]", "obj->propiedad", "obj::propiedad"], correct: 1, topic: "Objetos" },
        { question: "¿Qué método devuelve las claves?", options: ["keys()", "values()", "entries()", "getKeys()"], correct: 0, topic: "Objetos" },
        { question: "¿Qué método devuelve los valores?", options: ["keys()", "values()", "entries()", "getValues()"], correct: 1, topic: "Objetos" },
        { question: "¿Qué método devuelve las entradas?", options: ["keys()", "values()", "entries()", "getEntries()"], correct: 2, topic: "Objetos" },
        { question: "¿Qué método verifica si tiene propiedad?", options: ["has()", "contains()", "exists()", "includes()"], correct: 0, topic: "Objetos" },
        { question: "¿Cómo se crea un objeto vacío?", options: ["{}", "[]", "()", "new Object()"], correct: 0, topic: "Objetos" },
        { question: "¿Cómo se copia un objeto?", options: ["Object.copy()", "Object.assign()", "Object.clone()", "Object.duplicate()"], correct: 1, topic: "Objetos" },
        { question: "¿Qué método congela un objeto?", options: ["freeze()", "lock()", "seal()", "block()"], correct: 0, topic: "Objetos" },
        { question: "¿Qué método sella un objeto?", options: ["freeze()", "lock()", "seal()", "block()"], correct: 2, topic: "Objetos" },
        { question: "¿Cómo se itera un objeto?", options: ["for...in", "for...of", "forEach()", "map()"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es JSON?", options: ["Lenguaje", "Formato de datos", "Base de datos", "Servidor"], correct: 1, topic: "Objetos" },
        { question: "¿Qué método convierte a JSON?", options: ["JSON.stringify()", "JSON.toString()", "JSON.toData()", "JSON.format()"], correct: 0, topic: "Objetos" },
        { question: "¿Qué método convierte de JSON?", options: ["JSON.parse()", "JSON.fromData()", "JSON.decode()", "JSON.format()"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es this en objetos?", options: ["Referencia al objeto", "Variable global", "Función", "Array"], correct: 0, topic: "Objetos" },
        
        // Estructuras de Control - 15 preguntas
        { question: "¿Qué es un bucle 'for'?", options: ["Condición", "Repetición", "Función", "Variable"], correct: 1, topic: "Estructuras de Control" },
        { question: "¿Qué es 'if' en programación?", options: ["Bucle", "Condición", "Función", "Variable"], correct: 1, topic: "Estructuras de Control" },
        { question: "¿Qué es 'else'?", options: ["Bucle", "Alternativa de if", "Función", "Variable"], correct: 1, topic: "Estructuras de Control" },
        { question: "¿Qué es 'else if'?", options: ["Otra condición", "Bucle", "Función", "Variable"], correct: 0, topic: "Estructuras de Control" },
        { question: "¿Qué es 'switch'?", options: ["Bucle", "Selección múltiple", "Función", "Variable"], correct: 1, topic: "Estructuras de Control" },
        { question: "¿Qué es 'while'?", options: ["Condición", "Bucle", "Función", "Variable"], correct: 1, topic: "Estructuras de Control" },
        { question: "¿Qué es 'do while'?", options: ["Bucle con post-condición", "Bucle con pre-condición", "Función", "Variable"], correct: 0, topic: "Estructuras de Control" },
        { question: "¿Qué es 'for...of'?", options: ["Iterar valores", "Iterar claves", "Iterar entradas", "Iterar índices"], correct: 0, topic: "Estructuras de Control" },
        { question: "¿Qué es 'for...in'?", options: ["Iterar claves", "Iterar valores", "Iterar entradas", "Iterar índices"], correct: 0, topic: "Estructuras de Control" },
        { question: "¿Qué es 'break'?", options: ["Continuar", "Salir del bucle", "Función", "Variable"], correct: 1, topic: "Estructuras de Control" },
        { question: "¿Qué es 'continue'?", options: ["Salir", "Saltar iteración", "Función", "Variable"], correct: 1, topic: "Estructuras de Control" },
        { question: "¿Qué es 'try'?", options: ["Capturar errores", "Condición", "Función", "Variable"], correct: 0, topic: "Estructuras de Control" },
        { question: "¿Qué es 'catch'?", options: ["Manejar errores", "Condición", "Función", "Variable"], correct: 0, topic: "Estructuras de Control" },
        { question: "¿Qué es 'finally'?", options: ["Ejecutar siempre", "Condición", "Función", "Variable"], correct: 0, topic: "Estructuras de Control" },
        { question: "¿Qué es 'throw'?", options: ["Lanzar error", "Condición", "Función", "Variable"], correct: 0, topic: "Estructuras de Control" },
        
        // Funciones - 15 preguntas
        { question: "¿Qué es una función?", options: ["Variable", "Bloque de código reutilizable", "Array", "Objeto"], correct: 1, topic: "Funciones" },
        { question: "¿Cómo se declara una función?", options: ["function x(){}", "def x(){}", "func x(){}", "let x(){}"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es un parámetro?", options: ["Variable externa", "Valor de entrada", "Valor de salida", "Variable local"], correct: 1, topic: "Funciones" },
        { question: "¿Qué es un argumento?", options: ["Valor pasado", "Variable externa", "Valor de salida", "Variable local"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'return'?", options: ["Declarar variable", "Devolver valor", "Crear función", "Llamar función"], correct: 1, topic: "Funciones" },
        { question: "¿Qué es una función flecha?", options: ["function(){}", "() => {}", "func(){}", "=>(){}"], correct: 1, topic: "Funciones" },
        { question: "¿Qué es una función anónima?", options: ["Sin nombre", "Con nombre", "Con parámetros", "Con retorno"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es una función callback?", options: ["Variable", "Función como parámetro", "Array", "Objeto"], correct: 1, topic: "Funciones" },
        { question: "¿Qué es una función recursiva?", options: ["Se llama a sí misma", "Sin parámetros", "Sin retorno", "Anónima"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es el scope de una función?", options: ["Alcance", "Nombre", "Parámetros", "Retorno"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es una función constructora?", options: ["Crear objetos", "Crear arrays", "Crear funciones", "Crear strings"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es el hoisting?", options: ["Elevación de declaraciones", "Borrar variables", "Crear variables", "Mover variables"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es una función IIFE?", options: ["Ejecutada inmediatamente", "Ejecutada después", "Nunca ejecutada", "Ejecutada al inicio"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es el closure?", options: ["Función interna con acceso externo", "Función externa", "Función sin acceso", "Función anidada"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es el contexto 'this'?", options: ["Objeto actual", "Objeto global", "Función actual", "Array actual"], correct: 0, topic: "Funciones" },
        { question: "¿Qué son los parámetros por defecto?", options: ["Valores opcionales", "Valores obligatorios", "Valores externos", "Valores locales"], correct: 0, topic: "Funciones" },
        
        // DOM - 15 preguntas
        { question: "¿Qué es un evento en JavaScript?", options: ["Variable", "Acción del usuario", "Función", "Array"], correct: 1, topic: "DOM" },
        { question: "¿Qué es DOM?", options: ["Lenguaje", "Modelo de objetos del documento", "Base de datos", "Servidor"], correct: 1, topic: "DOM" },
        { question: "¿Qué es 'querySelector'?", options: ["Variable", "Seleccionar elemento", "Función", "Array"], correct: 1, topic: "DOM" },
        { question: "¿Qué es 'querySelectorAll'?", options: ["Seleccionar uno", "Seleccionar todos", "Seleccionar clase", "Seleccionar id"], correct: 1, topic: "DOM" },
        { question: "¿Qué es 'getElementById'?", options: ["Seleccionar por id", "Seleccionar por clase", "Seleccionar por tag", "Seleccionar todos"], correct: 0, topic: "DOM" },
        { question: "¿Qué es 'addEventListener'?", options: ["Variable", "Escuchar eventos", "Función", "Array"], correct: 1, topic: "DOM" },
        { question: "¿Qué es 'removeEventListener'?", options: ["Agregar evento", "Eliminar evento", "Modificar evento", "Crear evento"], correct: 1, topic: "DOM" },
        { question: "¿Qué es 'innerHTML'?", options: ["Contenido HTML", "Contenido texto", "Atributo", "Estilo"], correct: 0, topic: "DOM" },
        { question: "¿Qué es 'textContent'?", options: ["Contenido HTML", "Contenido texto", "Atributo", "Estilo"], correct: 1, topic: "DOM" },
        { question: "¿Qué es 'setAttribute'?", options: ["Obtener atributo", "Establecer atributo", "Eliminar atributo", "Modificar atributo"], correct: 1, topic: "DOM" },
        { question: "¿Qué es 'getAttribute'?", options: ["Obtener atributo", "Establecer atributo", "Eliminar atributo", "Modificar atributo"], correct: 0, topic: "DOM" },
        { question: "¿Qué es 'classList'?", options: ["Lista de clases", "Lista de ids", "Lista de tags", "Lista de estilos"], correct: 0, topic: "DOM" },
        { question: "¿Qué es 'style'?", options: ["Estilos CSS", "Atributos HTML", "Contenido texto", "Contenido HTML"], correct: 0, topic: "DOM" },
        { question: "¿Qué es 'createElement'?", options: ["Crear elemento", "Eliminar elemento", "Modificar elemento", "Copiar elemento"], correct: 0, topic: "DOM" },
        { question: "¿Qué es 'appendChild'?", options: ["Agregar hijo", "Eliminar hijo", "Reemplazar hijo", "Mover hijo"], correct: 0, topic: "DOM" },
        { question: "¿Qué es 'removeChild'?", options: ["Agregar hijo", "Eliminar hijo", "Reemplazar hijo", "Mover hijo"], correct: 1, topic: "DOM" },
        
        // APIs - 15 preguntas
        { question: "¿Qué es una API?", options: ["Variable", "Interfaz de programación", "Base de datos", "Servidor"], correct: 1, topic: "APIs" },
        { question: "¿Qué es 'fetch'?", options: ["Variable", "Hacer petición HTTP", "Función", "Array"], correct: 1, topic: "APIs" },
        { question: "¿Qué es 'async'?", options: ["Síncrono", "Asíncrono", "Paralelo", "Secuencial"], correct: 1, topic: "APIs" },
        { question: "¿Qué es 'await'?", options: ["Esperar resultado", "Crear promesa", "Rechazar promesa", "Resolver promesa"], correct: 0, topic: "APIs" },
        { question: "¿Qué es una promesa?", options: ["Valor futuro", "Valor pasado", "Variable", "Función"], correct: 0, topic: "APIs" },
        { question: "¿Qué es 'then'?", options: ["Si la promesa se resuelve", "Si la promesa falla", "Siempre", "Nunca"], correct: 0, topic: "APIs" },
        { question: "¿Qué es 'catch'?", options: ["Si la promesa se resuelve", "Si la promesa falla", "Siempre", "Nunca"], correct: 1, topic: "APIs" },
        { question: "¿Qué es 'finally'?", options: ["Siempre", "Si se resuelve", "Si falla", "Nunca"], correct: 0, topic: "APIs" },
        { question: "¿Qué es 'Promise.all'?", options: ["Esperar todas", "Esperar una", "Esperar ninguna", "Esperar alguna"], correct: 0, topic: "APIs" },
        { question: "¿Qué es 'Promise.race'?", options: ["Esperar todas", "Esperar la primera", "Esperar ninguna", "Esperar alguna"], correct: 1, topic: "APIs" },
        { question: "¿Qué es 'XMLHttpRequest'?", options: ["Petición antigua", "Petición moderna", "Petición futura", "Petición síncrona"], correct: 0, topic: "APIs" },
        { question: "¿Qué es 'JSON'?", options: ["Lenguaje", "Formato de datos", "Base de datos", "Servidor"], correct: 1, topic: "APIs" },
        { question: "¿Qué es 'JSON.stringify'?", options: ["Objeto a JSON", "JSON a objeto", "JSON a string", "String a JSON"], correct: 0, topic: "APIs" },
        { question: "¿Qué es 'JSON.parse'?", options: ["JSON a objeto", "Objeto a JSON", "JSON a string", "String a JSON"], correct: 0, topic: "APIs" },
        { question: "¿Qué es 'REST'?", options: ["Arquitectura de API", "Lenguaje", "Base de datos", "Servidor"], correct: 0, topic: "APIs" },
        { question: "¿Qué es 'GET'?", options: ["Obtener datos", "Enviar datos", "Actualizar datos", "Eliminar datos"], correct: 0, topic: "APIs" },
        
        // Arrays Avanzados - 10 preguntas
        { question: "¿Qué es 'map' en arrays?", options: ["Variable", "Transformar array", "Función", "Objeto"], correct: 1, topic: "Arrays" },
        { question: "¿Qué es 'filter' en arrays?", options: ["Variable", "Filtrar array", "Función", "Objeto"], correct: 1, topic: "Arrays" },
        { question: "¿Qué es 'reduce' en arrays?", options: ["Variable", "Reducir a valor", "Función", "Objeto"], correct: 1, topic: "Arrays" },
        { question: "¿Qué es 'find' en arrays?", options: ["Variable", "Buscar elemento", "Función", "Objeto"], correct: 1, topic: "Arrays" },
        { question: "¿Qué es 'some' en arrays?", options: ["Verificar todos", "Verificar alguno", "Verificar ninguno", "Verificar todos"], correct: 1, topic: "Arrays" },
        { question: "¿Qué es 'every' en arrays?", options: ["Verificar todos", "Verificar alguno", "Verificar ninguno", "Verificar todos"], correct: 0, topic: "Arrays" },
        { question: "¿Qué es 'sort' en arrays?", options: ["Variable", "Ordenar array", "Función", "Objeto"], correct: 1, topic: "Arrays" },
        { question: "¿Qué es 'slice' en arrays?", options: ["Cortar array", "Copiar array", "Eliminar array", "Mover array"], correct: 0, topic: "Arrays" },
        { question: "¿Qué es 'splice' en arrays?", options: ["Cortar array", "Modificar array", "Eliminar array", "Mover array"], correct: 1, topic: "Arrays" },
        { question: "¿Qué es 'join' en arrays?", options: ["Unir en string", "Separar array", "Unir array", "Separar string"], correct: 0, topic: "Arrays" },
        
        // Funciones Avanzadas - 10 preguntas
        { question: "¿Qué es una función de orden superior?", options: ["Recibe función", "Recibe variable", "Recibe array", "Recibe objeto"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'bind'?", options: ["Fijar contexto", "Liberar contexto", "Crear contexto", "Eliminar contexto"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'call'?", options: ["Llamar con contexto", "Llamar sin contexto", "Crear función", "Eliminar función"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'apply'?", options: ["Llamar con array", "Llamar sin array", "Crear función", "Eliminar función"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'arguments'?", options: ["Parámetros de función", "Variables globales", "Variables locales", "Constantes"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'rest parameters'?", options: ["...args", "args...", "rest...", "params..."], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'spread operator'?", options: ["...array", "array...", "spread...", "expand..."], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'default parameters'?", options: ["Parámetros por defecto", "Parámetros opcionales", "Parámetros externos", "Parámetros locales"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'destructuring'?", options: ["Extraer valores", "Crear valores", "Eliminar valores", "Mover valores"], correct: 0, topic: "Funciones" },
        { question: "¿Qué es 'generators'?", options: ["Funciones con pausas", "Funciones rápidas", "Funciones lentas", "Funciones síncronas"], correct: 0, topic: "Funciones" },
        
        // Programación Orientada a Objetos - 10 preguntas
        { question: "¿Qué es una clase?", options: ["Plantilla de objeto", "Objeto", "Función", "Variable"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es 'new'?", options: ["Crear instancia", "Crear clase", "Eliminar instancia", "Modificar instancia"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es 'extends'?", options: ["Heredar clase", "Crear clase", "Eliminar clase", "Modificar clase"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es 'super'?", options: ["Llamar padre", "Llamar hijo", "Llamar hermano", "Llamar amigo"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es 'constructor'?", options: ["Inicializar objeto", "Eliminar objeto", "Modificar objeto", "Copiar objeto"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es 'static'?", options: ["Método de clase", "Método de instancia", "Método global", "Método local"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es 'getter'?", options: ["Obtener propiedad", "Establecer propiedad", "Eliminar propiedad", "Modificar propiedad"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es 'setter'?", options: ["Obtener propiedad", "Establecer propiedad", "Eliminar propiedad", "Modificar propiedad"], correct: 1, topic: "Objetos" },
        { question: "¿Qué es 'instanceof'?", options: ["Verificar tipo", "Crear tipo", "Eliminar tipo", "Modificar tipo"], correct: 0, topic: "Objetos" },
        { question: "¿Qué es 'prototype'?", options: ["Prototipo de objeto", "Clase de objeto", "Tipo de objeto", "Método de objeto"], correct: 0, topic: "Objetos" }
    ],
    ortografia: [
        // Reglas de Acentuación - 15 preguntas
        { question: "¿Cuál palabra lleva tilde?", options: ["camion", "camión", "camioon", "camiion"], correct: 1, topic: "Reglas de Acentuación" },
        { question: "¿Cuál es la regla para palabras agudas?", options: ["Llevan tilde si terminan en n, s, vocal", "Nunca llevan tilde", "Siempre llevan tilde", "Llevan tilde si terminan en consonante"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál palabra es aguda y lleva tilde?", options: ["casa", "café", "arbol", "lapiz"], correct: 1, topic: "Reglas de Acentuación" },
        { question: "¿Cuál palabra es grave y lleva tilde?", options: ["mesa", "lápiz", "arbol", "casa"], correct: 1, topic: "Reglas de Acentuación" },
        { question: "¿Cuál palabra es esdrújula?", options: ["música", "casa", "árbol", "mesa"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál es la regla para palabras esdrújulas?", options: ["Siempre llevan tilde", "Nunca llevan tilde", "Llevan tilde si terminan en vocal", "Llevan tilde si terminan en consonante"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál palabra lleva tilde diacrítica?", options: ["tu/tú", "casa", "mesa", "arbol"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál es la diferencia entre 'solo' y 'sólo'?", options: ["Adverbio vs adjetivo", "Sustantivo vs verbo", "Verbo vs adverbio", "No hay diferencia"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál palabra lleva hiato?", options: ["baúl", "cafe", "mesa", "casa"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál es la regla para hiatos?", options: ["Llevan tilde si son i/u con vocal abierta", "Nunca llevan tilde", "Siempre llevan tilde", "Llevan tilde si son vocales iguales"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál palabra lleva tilde en la i?", options: ["día", "cafe", "mesa", "casa"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál es la regla para diptongos?", options: ["No llevan tilde en la i/u", "Siempre llevan tilde", "Llevan tilde si terminan en vocal", "Llevan tilde si son vocales cerradas"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál palabra es monosílaba y lleva tilde?", options: ["sí", "casa", "mesa", "arbol"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál es la excepción para monosílabas?", options: ["Tilde diacrítica", "Nunca llevan tilde", "Siempre llevan tilde", "Llevan tilde si terminan en vocal"], correct: 0, topic: "Reglas de Acentuación" },
        { question: "¿Cuál palabra lleva tilde enfática?", options: ["¿qué?", "casa", "mesa", "arbol"], correct: 0, topic: "Reglas de Acentuación" },
        
        // Uso de B y V - 15 preguntas
        { question: "¿Cuál palabra se escribe con B?", options: ["bueno", "vueno", "bueno", "bueno"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál es la regla para palabras que terminan en -bir?", options: ["Se escriben con B", "Se escriben con V", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál palabra se escribe con V?", options: ["vaca", "baca", "vaca", "vaca"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál es la regla para palabras que empiezan con vice-?", options: ["Se escriben con V", "Se escriben con B", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál palabra se escribe con B después de -m?", options: ["ambos", "amvos", "ambos", "ambos"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál es la regla para palabras que terminan en -bilidad?", options: ["Se escriben con V", "Se escriben con B", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál palabra se escribe con B en verbos?", options: ["beber", "veber", "beber", "beber"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál es la regla para palabras que empiezan con bu-?", options: ["Se escriben con B", "Se escriben con V", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál palabra se escribe con V en adjetivos?", options: ["vivo", "bivo", "vivo", "vivo"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál es la regla para palabras que terminan en -ave?", options: ["Se escriben con V", "Se escriben con B", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál palabra se escribe con B en sustantivos?", options: ["barco", "varco", "barco", "barco"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál es la regla para palabras que empiezan with bi-?", options: ["Se escriben con B", "Se escriben con V", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál palabra se escribe con V en tiempos verbales?", options: ["vivir", "bibir", "vivir", "vivir"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál es la regla para palabras que terminan en -bundo?", options: ["Se escriben con B", "Se escriben con V", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de B y V" },
        { question: "¿Cuál palabra se escribe con B en compuestos?", options: ["bien", "vien", "bien", "bien"], correct: 0, topic: "Uso de B y V" },
        
        // Uso de G y J - 15 preguntas
        { question: "¿Cuál palabra se escribe con G?", options: ["gente", "jente", "gente", "gente"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál es la regla para palabras que terminan en -gia?", options: ["Se escriben con G", "Se escriben con J", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál palabra se escribe con J?", options: ["jirafa", "girafa", "jirafa", "jirafa"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál es la regla para palabras que empiezan con geo-?", options: ["Se escriben con G", "Se escriben con J", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál palabra se escribe con G en verbos?", options: ["girar", "jirar", "girar", "girar"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál es la regla para palabras que terminan en -jero?", options: ["Se escriben con J", "Se escriben con G", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál palabra se escribe con G en sustantivos?", options: ["gato", "jato", "gato", "gato"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál es la regla para palabras que empiezan con gen-?", options: ["Se escriben con G", "Se escriben con J", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál palabra se escribe con J en adjetivos?", options: ["joven", "goven", "joven", "joven"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál es la regla para palabras que terminan en -gión?", options: ["Se escriben con G", "Se escriben con J", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál palabra se escribe con G en compuestos?", options: ["gingivo", "jingivo", "gingivo", "gingivo"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál es la regla para palabras que empiezan con leg-?", options: ["Se escriben con G", "Se escriben con J", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál palabra se escribe con J en tiempos verbales?", options: ["jugar", "gugar", "jugar", "jugar"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál es la regla para palabras que terminan en -jera?", options: ["Se escriben con J", "Se escriben con G", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de G y J" },
        { question: "¿Cuál palabra se escribe con G en diminutivos?", options: ["gordito", "jordito", "gordito", "gordito"], correct: 0, topic: "Uso de G y J" },
        
        // Uso de H - 15 preguntas
        { question: "¿Cuál palabra lleva H?", options: ["hola", "ola", "hola", "hola"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál es la regla para palabras que empiezan con hie-?", options: ["Llevan H", "No llevan H", "Llevan H o no", "No tienen regla"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál palabra lleva H intercalada?", options: ["almohada", "almoadada", "almohada", "almohada"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál es la regla para palabras que empiezan con hue-?", options: ["Llevan H", "No llevan H", "Llevan H o no", "No tienen regla"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál palabra lleva H en diptongos?", options: ["hielo", "ielo", "hielo", "hielo"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál es la regla para palabras que empiezan con hum-?", options: ["Llevan H", "No llevan H", "Llevan H o no", "No tienen regla"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál palabra lleva H en compuestos?", options: ["hombre", "ombre", "hombre", "hombre"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál es la regla para palabras que empiezan con her-?", options: ["Llevan H", "No llevan H", "Llevan H o no", "No tienen regla"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál palabra lleva H en verbos?", options: ["haber", "aber", "haber", "haber"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál es la regla para palabras que empiezan con holg-?", options: ["Llevan H", "No llevan H", "Llevan H o no", "No tienen regla"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál palabra lleva H en sustantivos?", options: ["hijo", "ijo", "hijo", "hijo"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál es la regla para palabras que empiezan con hosp-?", options: ["Llevan H", "No llevan H", "Llevan H o no", "No tienen regla"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál palabra lleva H en adjetivos?", options: ["hermoso", "ermoso", "hermoso", "hermoso"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál es la regla para palabras que empiezan con hidr-?", options: ["Llevan H", "No llevan H", "Llevan H o no", "No tienen regla"], correct: 0, topic: "Uso de H" },
        { question: "¿Cuál palabra lleva H en adverbios?", options: ["hoy", "oy", "hoy", "hoy"], correct: 0, topic: "Uso de H" },
        
        // Uso de C, S, Z - 15 preguntas
        { question: "¿Cuál palabra se escribe con C?", options: ["casa", "kasa", "casa", "casa"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál es la regla para palabras que terminan en -ción?", options: ["Se escriben con C", "Se escriben con S", "Se escriben con Z", "No tienen regla"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál palabra se escribe con S?", options: ["silla", "cilla", "silla", "silla"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál es la regla para palabras que terminan en -sión?", options: ["Se escriben con S", "Se escriben con C", "Se escriben con Z", "No tienen regla"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál palabra se escribe con Z?", options: ["zapato", "sapato", "zapato", "zapato"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál es la regla para palabras que terminan en -zuelo?", options: ["Se escriben con Z", "Se escriben con C", "Se escriben con S", "No tienen regla"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál palabra se escribe con C en verbos?", options: ["cantar", "santar", "zantar", "cantar"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál es la regla para palabras que terminan en -ecer?", options: ["Se escriben con C", "Se escriben con S", "Se escriben con Z", "No tienen regla"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál palabra se escribe con S en sustantivos?", options: ["sol", "col", "sol", "sol"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál es la regla para palabras que terminan en -oso?", options: ["Se escriben con S", "Se escriben con C", "Se escriben con Z", "No tienen regla"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál palabra se escribe con Z en adjetivos?", options: ["zorro", "sorro", "corro", "zorro"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál es la regla para palabras que terminan en -anza?", options: ["Se escriben con Z", "Se escriben con C", "Se escriben con S", "No tienen regla"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál palabra se escribe con C en compuestos?", options: ["cocina", "socina", "zocina", "cocina"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál es la regla para palabras que terminan en -izar?", options: ["Se escriben con Z", "Se escriben con C", "Se escriben con S", "No tienen regla"], correct: 0, topic: "Uso de C, S, Z" },
        { question: "¿Cuál palabra se escribe con S en tiempos verbales?", options: ["sentar", "centar", "zentar", "sentar"], correct: 0, topic: "Uso de C, S, Z" },
        
        // Uso de LL y Y - 15 preguntas
        { question: "¿Cuál palabra se escribe con LL?", options: ["llave", "yave", "llave", "llave"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál es la regla para palabras que terminan en -illo?", options: ["Se escriben con LL", "Se escriben con Y", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál palabra se escribe con Y?", options: ["yate", "llate", "yate", "yate"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál es la regla para palabras que terminan en -ayer?", options: ["Se escriben con Y", "Se escriben con LL", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál palabra se escribe con LL en verbos?", options: ["llover", "yover", "llover", "llover"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál es la regla para palabras que terminan en -uyo?", options: ["Se escriben con Y", "Se escriben con LL", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál palabra se escribe con Y en sustantivos?", options: ["yogur", "llogur", "yogur", "yogur"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál es la regla para palabras que terminan en -oy?", options: ["Se escriben con Y", "Se escriben con LL", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál palabra se escribe con LL en adjetivos?", options: ["lleno", "yeno", "lleno", "lleno"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál es la regla para palabras que terminan en -illo?", options: ["Se escriben con LL", "Se escriben con Y", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál palabra se escribe con Y en compuestos?", options: ["yacimiento", "llacimiento", "yacimiento", "yacimiento"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál es la regla para palabras que terminan en -yente?", options: ["Se escriben con Y", "Se escriben con LL", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál palabra se escribe con LL en diminutivos?", options: ["pollito", "poyito", "pollito", "pollito"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál es la regla para palabras que terminan en -ylla?", options: ["Se escriben con LL", "Se escriben con Y", "Se escriben con ambas", "No tienen regla"], correct: 0, topic: "Uso de LL y Y" },
        { question: "¿Cuál palabra se escribe con Y en tiempos verbales?", options: ["yacer", "llacer", "yacer", "yacer"], correct: 0, topic: "Uso de LL y Y" },
        
        // Signos de Puntuación - 15 preguntas
        { question: "¿Cuál signo se usa para separar oraciones?", options: ["Punto", "Coma", "Punto y coma", "Dos puntos"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para enumerar?", options: ["Coma", "Punto", "Punto y coma", "Dos puntos"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para pausas largas?", options: ["Punto y coma", "Coma", "Punto", "Dos puntos"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para introducir una lista?", options: ["Dos puntos", "Coma", "Punto", "Punto y coma"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para preguntas?", options: ["Signos de interrogación", "Signos de exclamación", "Coma", "Punto"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para exclamaciones?", options: ["Signos de exclamación", "Signos de interrogación", "Coma", "Punto"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para paréntesis?", options: ["Paréntesis", "Corchetes", "Llaves", "Guiones"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para aclaraciones?", options: ["Paréntesis", "Coma", "Punto", "Dos puntos"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para diálogos?", options: ["Guiones", "Comillas", "Paréntesis", "Corchetes"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para citas?", options: ["Comillas", "Guiones", "Paréntesis", "Corchetes"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para omitir texto?", options: ["Puntos suspensivos", "Coma", "Punto", "Dos puntos"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para raya?", options: ["Guion largo", "Guion corto", "Coma", "Punto"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para separar palabras compuestas?", options: ["Guion corto", "Guion largo", "Coma", "Punto"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para corchetes?", options: ["Corchetes", "Paréntesis", "Llaves", "Guiones"], correct: 0, topic: "Signos de Puntuación" },
        { question: "¿Cuál signo se usa para llaves?", options: ["Llaves", "Paréntesis", "Corchetes", "Guiones"], correct: 0, topic: "Signos de Puntuación" },
        
        // Mayúsculas y Minúsculas - 15 preguntas
        { question: "¿Cuándo se usa mayúscula?", options: ["Al inicio de oración", "Siempre", "Nunca", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en nombres propios?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en títulos?", options: ["En palabras importantes", "Siempre", "Nunca", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula después de punto?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en abreviaturas?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa minúscula en días?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa minúscula en meses?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en países?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en ciudades?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en instituciones?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en libros?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en películas?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en obras de arte?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa minúscula en estaciones?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        { question: "¿Cuándo se usa mayúscula en puntos cardinales?", options: ["A veces", "Siempre", "Nunca", "En palabras cortas"], correct: 0, topic: "Mayúsculas y Minúsculas" },
        
        // Palabras Homófonas - 15 preguntas
        { question: "¿Cuál es la diferencia entre 'hay' y 'ahí'?", options: ["Existir vs lugar", "Lugar vs existir", "Tiempo vs lugar", "Lugar vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'vaya' y 'valla'?", options: ["Ir vs cerca", "Cerca vs ir", "Tiempo vs cerca", "Cerca vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'echo' y 'hecho'?", options: ["Arrojar vs realizado", "Realizado vs arrojar", "Tiempo vs realizado", "Realizado vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'hasta' y 'asta'?", options: ["Preposición vs no existe", "No existe vs preposición", "Tiempo vs preposición", "Preposición vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'si' y 'sí'?", options: ["Condición vs afirmación", "Afirmación vs condición", "Tiempo vs condición", "Condición vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'te' y 'té'?", options: ["Pronombre vs bebida", "Bebida vs pronombre", "Tiempo vs bebida", "Pronombre vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'de' y 'dé'?", options: ["Preposición vs verbo", "Verbo vs preposición", "Tiempo vs verbo", "Preposición vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'se' y 'sé'?", options: ["Pronombre vs verbo", "Verbo vs pronombre", "Tiempo vs verbo", "Pronombre vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'más' y 'mas'?", options: ["Cantidad vs conjunción", "Conjunción vs cantidad", "Tiempo vs cantidad", "Cantidad vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'a' y 'ah'?", options: ["Preposición vs interjección", "Interjección vs preposición", "Tiempo vs interjección", "Preposición vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'el' y 'él'?", options: ["Artículo vs pronombre", "Pronombre vs artículo", "Tiempo vs pronombre", "Artículo vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'tu' y 'tú'?", options: ["Posesivo vs pronombre", "Pronombre vs posesivo", "Tiempo vs pronombre", "Posesivo vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'mi' y 'mí'?", options: ["Posesivo vs pronombre", "Pronombre vs posesivo", "Tiempo vs pronombre", "Posesivo vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'solo' y 'sólo'?", options: ["Adverbio vs adjetivo", "Adjetivo vs adverbio", "Tiempo vs adjetivo", "Adverbio vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        { question: "¿Cuál es la diferencia entre 'aún' y 'aun'?", options: ["Todavía vs incluso", "Incluso vs todavía", "Tiempo vs incluso", "Todavía vs tiempo"], correct: 0, topic: "Palabras Homófonas" },
        
        // Errores Comunes - 15 preguntas
        { question: "¿Cuál es la forma correcta de 'haber'?", options: ["haber", "aver", "haver", "ha ver"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'hacer'?", options: ["hacer", "aser", "hacer", "a ser"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'allí'?", options: ["allí", "alli", "alí", "al li"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'también'?", options: ["también", "tambien", "tambièn", "tan bién"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'además'?", options: ["además", "ademàs", "ademas", "a demàs"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'por qué'?", options: ["por qué", "porque", "porqué", "por que"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'porque'?", options: ["porque", "por qué", "porqué", "por que"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'solo'?", options: ["solo", "sòlo", "solò", "solo"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'solo' (adverbio)?", options: ["solo", "sólo", "sòlo", "solò"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'aunque'?", options: ["aunque", "aunqùe", "aunque", "aun que"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'de repente'?", options: ["de repente", "derepente", "de repènte", "de repenete"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'en efecto'?", options: ["en efecto", "enefecto", "en efècto", "en efecte"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'a fin de'?", options: ["a fin de", "afin de", "a fin de", "afinde"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'de hecho'?", options: ["de hecho", "dehecho", "de hècho", "de hecho"], correct: 0, topic: "Errores Comunes" },
        { question: "¿Cuál es la forma correcta de 'en realidad'?", options: ["en realidad", "enrealidad", "en realidàd", "en realidat"], correct: 0, topic: "Errores Comunes" }
    ],
    espanol_castellano: [
        // Fonética y Fonología - 15 preguntas
        { question: "¿Qué es la fonética?", options: ["Estudio de sonidos", "Estudio de letras", "Estudio de palabras", "Estudio de frases"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es la fonología?", options: ["Estudio de fonemas", "Estudio de letras", "Estudio de palabras", "Estudio de frases"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Cuántas vocales tiene el español?", options: ["5", "6", "7", "8"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es un diptongo?", options: ["Dos vocales en una sílaba", "Una vocal sola", "Tres vocales", "Cuatro vocales"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es un triptongo?", options: ["Tres vocales en una sílaba", "Dos vocales", "Una vocal", "Cuatro vocales"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es un hiato?", options: ["Vocales en sílabas separadas", "Vocales juntas", "Una vocal", "Tres vocales"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Cuántos fonemas consonánticos tiene el español?", options: ["24", "20", "22", "26"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es la sílaba tónica?", options: ["La que lleva el acento", "La primera", "La última", "La del medio"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es la entonación?", options: ["Melodía de la frase", "Sonido de letras", "Ritmo de palabras", "Acento de sílabas"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es el acento prosódico?", options: ["Mayor fuerza en una sílaba", "Tilde escrita", "Signo de puntuación", "Sonido de vocal"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es el acento ortográfico?", options: ["Tilde escrita", "Fuerza de voz", "Signo de puntuación", "Sonido de vocal"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es la sílaba átona?", options: ["Sin acento", "Con acento", "Primera", "Última"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Cuántas sílabas puede tener una palabra?", options: ["Variable", "Siempre 3", "Siempre 2", "Siempre 4"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es la sinalefa?", options: ["Unión de vocales", "Separación de vocales", "Acento en vocal", "Sonido de consonante"], correct: 0, topic: "Fonética y Fonología" },
        { question: "¿Qué es la sinéresis?", options: ["Unión de vocales en diptongo", "Separación de vocales", "Acento en vocal", "Sonido de consonante"], correct: 0, topic: "Fonética y Fonología" },
        
        // Morfología - 15 preguntas
        { question: "¿Qué es la morfología?", options: ["Estudio de palabras", "Estudio de sonidos", "Estudio de frases", "Estudio de textos"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es un morfema?", options: ["Unidad mínima de significado", "Unidad de sonido", "Unidad de frase", "Unidad de texto"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es un lexema?", options: ["Raíz de la palabra", "Prefijo", "Sufijo", "Desinencia"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es un morfema derivativo?", options: ["Crea nuevas palabras", "Indica género", "Indica número", "Indica tiempo"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es un morfema flexivo?", options: ["Indica género/número/tiempo", "Crea palabras", "Es la raíz", "Es el prefijo"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es un prefijo?", options: ["Antes de la raíz", "Después de la raíz", "En medio", "Al final"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es un sufijo?", options: ["Después de la raíz", "Antes de la raíz", "En medio", "Al inicio"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es una palabra compuesta?", options: ["Dos o más lexemas", "Un solo lexema", "Sin lexemas", "Con prefijos"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es la derivación?", options: ["Crear palabras con afijos", "Unir lexemas", "Separar palabras", "Cambiar género"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es la composición?", options: ["Unir lexemas", "Agregar afijos", "Separar palabras", "Cambiar número"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es la flexión?", options: ["Cambiar género/número/tiempo", "Crear palabras", "Unir lexemas", "Separar palabras"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es la parasíntesis?", options: ["Derivación y composición", "Solo derivación", "Solo composición", "Sin cambios"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es una palabra primitiva?", options: ["Sin afijos", "Con afijos", "Compuesta", "Derivada"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es una palabra derivada?", options: ["Con afijos", "Sin afijos", "Primitiva", "Simple"], correct: 0, topic: "Morfología" },
        { question: "¿Qué es la familia léxica?", options: ["Palabras con misma raíz", "Palabras diferentes", "Sin relación", "Prefijos iguales"], correct: 0, topic: "Morfología" },
        
        // Sintaxis - 15 preguntas
        { question: "¿Qué es la sintaxis?", options: ["Orden de palabras", "Significado de palabras", "Sonido de palabras", "Origen de palabras"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el sujeto?", options: ["Quien realiza la acción", "La acción", "El objeto", "El tiempo"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el predicado?", options: ["Lo que se dice del sujeto", "El sujeto", "El objeto", "El tiempo"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el núcleo del sujeto?", options: ["Sustantivo principal", "Verbo", "Adjetivo", "Adverbio"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el núcleo del predicado?", options: ["Verbo", "Sustantivo", "Adjetivo", "Adverbio"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el complemento directo?", options: ["Recibe la acción", "Realiza la acción", "Modifica al verbo", "Es el tiempo"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el complemento indirecto?", options: ["Beneficiario de la acción", "Recibe la acción", "Realiza la acción", "Es el tiempo"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el complemento circunstancial?", options: ["Circunstancia de la acción", "Sujeto", "Objeto", "Tiempo"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el atributo?", options: ["Característica del sujeto", "Acción", "Objeto", "Tiempo"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el complemento agente?", options: ["Ejecutor en pasiva", "Sujeto en activa", "Objeto directo", "Objeto indirecto"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el complemento predicativo?", options: ["Atributo del objeto", "Sujeto", "Verbo", "Tiempo"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el complemento del nombre?", options: ["Modifica al sustantivo", "Modifica al verbo", "Es el sujeto", "Es el objeto"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el complemento del adjetivo?", options: ["Modifica al adjetivo", "Modifica al sustantivo", "Es el verbo", "Es el sujeto"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es el complemento del adverbio?", options: ["Modifica al adverbio", "Modifica al adjetivo", "Es el verbo", "Es el sujeto"], correct: 0, topic: "Sintaxis" },
        { question: "¿Qué es la oración simple?", options: ["Un verbo", "Dos verbos", "Tres verbos", "Sin verbos"], correct: 0, topic: "Sintaxis" },
        
        // Semántica - 15 preguntas
        { question: "¿Qué es la semántica?", options: ["Estudio del significado", "Estudio de sonidos", "Estudio de palabras", "Estudio de frases"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es el significado?", options: ["Concepto de la palabra", "Sonido de la palabra", "Origen de la palabra", "Uso de la palabra"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es el significante?", options: ["Imagen acústica", "Concepto", "Uso", "Origen"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la sinonimia?", options: ["Palabras con igual significado", "Palabras con significado opuesto", "Palabras sin relación", "Palabras iguales"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la antonimia?", options: ["Palabras con significado opuesto", "Palabras con igual significado", "Palabras sin relación", "Palabras iguales"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la homonimia?", options: ["Igual forma, diferente significado", "Igual significado", "Diferente forma", "Sin relación"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la polisemia?", options: ["Varios significados", "Un significado", "Sin significado", "Significado opuesto"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la hiperonimia?", options: ["Término general", "Término específico", "Sin relación", "Significado igual"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la hiponimia?", options: ["Término específico", "Término general", "Sin relación", "Significado igual"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la connotación?", options: ["Significado subjetivo", "Significado objetivo", "Sin significado", "Significado opuesto"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la denotación?", options: ["Significado objetivo", "Significado subjetivo", "Sin significado", "Significado opuesto"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es el campo semántico?", options: ["Grupo de palabras relacionadas", "Grupo de sonidos", "Grupo de letras", "Grupo de frases"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la familia semántica?", options: ["Palabras con misma raíz", "Palabras diferentes", "Sin relación", "Prefijos iguales"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es el cambio semántico?", options: ["Cambio de significado", "Cambio de sonido", "Cambio de forma", "Sin cambio"], correct: 0, topic: "Semántica" },
        { question: "¿Qué es la ambigüedad?", options: ["Doble interpretación", "Una interpretación", "Sin interpretación", "Interpretación clara"], correct: 0, topic: "Semántica" },
        
        // Léxico - 15 preguntas
        { question: "¿Qué es el léxico?", options: ["Conjunto de palabras", "Conjunto de sonidos", "Conjunto de frases", "Conjunto de textos"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el vocabulario?", options: ["Palabras que conoce una persona", "Todas las palabras", "Palabras técnicas", "Palabras comunes"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es una palabra?", options: ["Unidad con significado", "Unidad de sonido", "Unidad de frase", "Unidad de texto"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el neologismo?", options: ["Palabra nueva", "Palabra antigua", "Palabra técnica", "Palabra común"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el arcaísmo?", options: ["Palabra antigua en desuso", "Palabra nueva", "Palabra técnica", "Palabra común"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el extranjerismo?", options: ["Palabra de otro idioma", "Palabra española", "Palabra técnica", "Palabra común"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el préstamo?", options: ["Palabra adoptada de otro idioma", "Palabra original", "Palabra técnica", "Palabra común"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el calco?", options: ["Traducción literal", "Palabra original", "Palabra técnica", "Palabra común"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el epónimo?", options: ["Nombre propio como común", "Palabra común", "Palabra técnica", "Palabra antigua"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el sigla?", options: ["Abreviación de palabras", "Palabra completa", "Palabra técnica", "Palabra común"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el acrónimo?", options: ["Sigla pronunciable", "Abreviación", "Palabra técnica", "Palabra común"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es la abreviatura?", options: ["Forma corta de una palabra", "Palabra completa", "Palabra técnica", "Palabra común"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el coloquialismo?", options: ["Palabra informal", "Palabra formal", "Palabra técnica", "Palabra antigua"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el vulgarismo?", options: ["Palabra vulgar", "Palabra formal", "Palabra técnica", "Palabra antigua"], correct: 0, topic: "Léxico" },
        { question: "¿Qué es el tecnicismo?", options: ["Palabra técnica", "Palabra común", "Palabra informal", "Palabra antigua"], correct: 0, topic: "Léxico" },
        
        // Oración Simple - 15 preguntas
        { question: "¿Qué es una oración simple?", options: ["Un verbo", "Dos verbos", "Tres verbos", "Sin verbos"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración copulativa?", options: ["Verbo ser/estar", "Verbo de acción", "Sin verbo", "Dos verbos"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración predicativa?", options: ["Verbo de acción", "Verbo ser/estar", "Sin verbo", "Dos verbos"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración transitiva?", options: ["Con complemento directo", "Sin complemento directo", "Sin verbo", "Dos verbos"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración intransitiva?", options: ["Sin complemento directo", "Con complemento directo", "Sin verbo", "Dos verbos"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración reflexiva?", options: ["Sujeto y objeto iguales", "Sujeto diferente", "Sin objeto", "Dos objetos"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración recíproca?", options: ["Acción mutua", "Acción individual", "Sin acción", "Acción pasiva"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración impersonal?", options: ["Sin sujeto", "Con sujeto", "Dos sujetos", "Sin verbo"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración pasiva?", options: ["Sujeto recibe acción", "Sujeto realiza acción", "Sin sujeto", "Sin verbo"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración activa?", options: ["Sujeto realiza acción", "Sujeto recibe acción", "Sin sujeto", "Sin verbo"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración enunciativa?", options: ["Afirmar o negar", "Preguntar", "Exclamar", "Ordenar"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración interrogativa?", options: ["Preguntar", "Afirmar", "Exclamar", "Ordenar"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración exclamativa?", options: ["Exclamar", "Preguntar", "Afirmar", "Ordenar"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración imperativa?", options: ["Ordenar", "Preguntar", "Afirmar", "Exclamar"], correct: 0, topic: "Oración Simple" },
        { question: "¿Qué es una oración desiderativa?", options: ["Desear", "Ordenar", "Preguntar", "Afirmar"], correct: 0, topic: "Oración Simple" },
        
        // Oración Compuesta - 15 preguntas
        { question: "¿Qué es una oración compuesta?", options: ["Más de un verbo", "Un verbo", "Sin verbos", "Tres verbos"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es una oración coordinada?", options: ["Oraciones del mismo nivel", "Oraciones de diferente nivel", "Una oración", "Sin oraciones"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es una oración subordinada?", options: ["Oración dependiente", "Oración independiente", "Una oración", "Sin oraciones"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es una oración yuxtapuesta?", options: ["Unidas por coma/punto", "Unidas por conjunción", "Una oración", "Sin oraciones"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la coordinación copulativa?", options: ["Y, e, ni", "O, u", "Pero, mas", "Porque"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la coordinación disyuntiva?", options: ["O, u", "Y, e, ni", "Pero, mas", "Porque"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la coordinación adversativa?", options: ["Pero, mas", "Y, e, ni", "O, u", "Porque"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la coordinación explicativa?", options: ["O sea, es decir", "Y, e, ni", "O, u", "Pero"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la subordinada sustantiva?", options: ["Funciona como sustantivo", "Funciona como adjetivo", "Funciona como adverbio", "Sin función"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la subordinada adjetiva?", options: ["Funciona como adjetivo", "Funciona como sustantivo", "Funciona como adverbio", "Sin función"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la subordinada adverbial?", options: ["Funciona como adverbio", "Funciona como sustantivo", "Funciona como adjetivo", "Sin función"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la subordinada causal?", options: ["Indica causa", "Indica consecuencia", "Indica tiempo", "Indica lugar"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la subordinada consecutiva?", options: ["Indica consecuencia", "Indica causa", "Indica tiempo", "Indica lugar"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la subordinada temporal?", options: ["Indica tiempo", "Indica causa", "Indica consecuencia", "Indica lugar"], correct: 0, topic: "Oración Compuesta" },
        { question: "¿Qué es la subordinada condicional?", options: ["Indica condición", "Indica causa", "Indica tiempo", "Indica lugar"], correct: 0, topic: "Oración Compuesta" },
        
        // Categorías Gramaticales - 15 preguntas
        { question: "¿Qué es un sustantivo?", options: ["Nombre de cosas/personas", "Acción", "Cualidad", "Cantidad"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es un verbo?", options: ["Acción", "Nombre", "Cualidad", "Cantidad"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es un adjetivo?", options: ["Cualidad", "Acción", "Nombre", "Cantidad"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es un adverbio?", options: ["Modifica al verbo", "Nombre", "Acción", "Cualidad"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es un pronombre?", options: ["Sustituye al sustantivo", "Es el sustantivo", "Es el verbo", "Es el adjetivo"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es una preposición?", options: ["Une palabras", "Es sustantivo", "Es verbo", "Es adjetivo"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es una conjunción?", options: ["Une oraciones", "Es sustantivo", "Es verbo", "Es adjetivo"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es un artículo?", options: ["Acompaña al sustantivo", "Es verbo", "Es adjetivo", "Es adverbio"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es un determinante?", options: ["Precisa al sustantivo", "Es verbo", "Es adjetivo", "Es adverbio"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es un interjección?", options: ["Expresa emoción", "Es sustantivo", "Es verbo", "Es adjetivo"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es el género gramatical?", options: ["Masculino/femenino", "Singular/plural", "Tiempo verbal", "Modo verbal"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es el número gramatical?", options: ["Singular/plural", "Masculino/femenino", "Tiempo verbal", "Modo verbal"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es el tiempo verbal?", options: ["Pasado/presente/futuro", "Masculino/femenino", "Singular/plural", "Modo verbal"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es el modo verbal?", options: ["Indicativo/subjuntivo/imperativo", "Pasado/presente", "Singular/plural", "Género"], correct: 0, topic: "Categorías Gramaticales" },
        { question: "¿Qué es la voz verbal?", options: ["Activa/pasiva", "Tiempo", "Modo", "Número"], correct: 0, topic: "Categorías Gramaticales" },
        
        // Estructura del Texto - 15 preguntas
        { question: "¿Qué es un texto?", options: ["Unidad comunicativa", "Palabra suelta", "Sonido", "Letra"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es la coherencia?", options: ["Unidad de significado", "Unidad de forma", "Unidad de sonido", "Unidad de letra"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es la cohesión?", options: ["Unión de elementos", "Unidad de significado", "Unidad de sonido", "Unidad de letra"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es el párrafo?", options: ["Grupo de oraciones", "Una oración", "Una palabra", "Una letra"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es la oración tópica?", options: ["Idea principal", "Idea secundaria", "Sin idea", "Idea final"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es el título?", options: ["Nombre del texto", "Primera oración", "Última oración", "Sin nombre"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es la introducción?", options: ["Inicio del texto", "Final del texto", "Medio del texto", "Sin texto"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es el desarrollo?", options: ["Cuerpo del texto", "Inicio del texto", "Final del texto", "Sin texto"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es la conclusión?", options: ["Final del texto", "Inicio del texto", "Medio del texto", "Sin texto"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es el nexo?", options: ["Conector", "Sustantivo", "Verbo", "Adjetivo"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es el conectivo?", options: ["Enlace entre oraciones", "Sustantivo", "Verbo", "Adjetivo"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es la referencia?", options: ["Relación con el texto", "Sin relación", "Sustantivo", "Verbo"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es la progresión temática?", options: ["Avance del tema", "Retroceso del tema", "Sin tema", "Tema estático"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es la adecuación?", options: ["Adaptación al contexto", "Sin adaptación", "Sustantivo", "Verbo"], correct: 0, topic: "Estructura del Texto" },
        { question: "¿Qué es la corrección?", options: ["Sin errores", "Con errores", "Sustantivo", "Verbo"], correct: 0, topic: "Estructura del Texto" },
        
        // Variedades del Español - 15 preguntas
        { question: "¿Qué es el español castellano?", options: ["Variante de España", "Variante de México", "Variante de Argentina", "Variante de Colombia"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español latinoamericano?", options: ["Variante de América", "Variante de España", "Variante de Asia", "Variante de África"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el dialecto?", options: ["Variación regional", "Variación social", "Variación individual", "Sin variación"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el sociolecto?", options: ["Variación social", "Variación regional", "Variación individual", "Sin variación"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el cronolecto?", options: ["Variación temporal", "Variación regional", "Variación social", "Sin variación"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el idiolecto?", options: ["Variación individual", "Variación regional", "Variación social", "Sin variación"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español rioplatense?", options: ["Argentina/Uruguay", "España", "México", "Colombia"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español mexicano?", options: ["México", "España", "Argentina", "Colombia"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español caribeño?", options: ["Caribe", "España", "México", "Argentina"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español andino?", options: ["Región andina", "España", "México", "Argentina"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español amazónico?", options: ["Región amazónica", "España", "México", "Argentina"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español filipino?", options: ["Filipinas", "España", "México", "Argentina"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español saharaui?", options: ["Sahara Occidental", "España", "México", "Argentina"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español sefardí?", options: ["Comunidades judías", "España", "México", "Argentina"], correct: 0, topic: "Variedades del Español" },
        { question: "¿Qué es el español de Guinea Ecuatorial?", options: ["Guinea Ecuatorial", "España", "México", "Argentina"], correct: 0, topic: "Variedades del Español" }
    ],
    espanol_espana: [
        // Español Peninsular - 15 preguntas
        { question: "¿Qué es el español peninsular?", options: ["Español de España", "Español de América", "Español de Asia", "Español de África"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el ceceo?", options: ["Pronunciación de z como th", "Pronunciación de s", "Pronunciación de c", "Sin pronunciación"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el seseo?", options: ["Pronunciación de z como s", "Pronunciación de z como th", "Pronunciación de c", "Sin pronunciación"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el yeísmo?", options: ["LL y Y suenan igual", "LL y Y diferentes", "Sin sonido", "Sonido igual"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el voseo?", options: ["Uso de vos", "Uso de tú", "Uso de usted", "Sin pronombre"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el leísmo?", options: ["Le como directo", "Le como indirecto", "Lo como directo", "Sin pronombre"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el laísmo?", options: ["La como directo", "La como indirecto", "Lo como directo", "Sin pronombre"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el loísmo?", options: ["Lo como indirecto", "Lo como directo", "Le como indirecto", "Sin pronombre"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el castellano septentrional?", options: ["Norte de España", "Sur de España", "Este de España", "Oeste de España"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el castellano meridional?", options: ["Sur de España", "Norte de España", "Este de España", "Oeste de España"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el andaluz?", options: ["Andalucía", "Madrid", "Barcelona", "Valencia"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el canario?", options: ["Islas Canarias", "Madrid", "Barcelona", "Valencia"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el aragonés?", options: ["Aragón", "Madrid", "Barcelona", "Valencia"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el asturleonés?", options: ["Asturias/León", "Madrid", "Barcelona", "Valencia"], correct: 0, topic: "Español Peninsular" },
        { question: "¿Qué es el catalán?", options: ["Cataluña", "Madrid", "Andalucía", "Valencia"], correct: 0, topic: "Español Peninsular" },
        
        // Dialectos Regionales - 15 preguntas
        { question: "¿Qué es un dialecto regional?", options: ["Variación geográfica", "Variación social", "Variación temporal", "Sin variación"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el madrileño?", options: ["Madrid", "Barcelona", "Sevilla", "Valencia"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el barcelonés?", options: ["Barcelona", "Madrid", "Sevilla", "Valencia"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el sevillano?", options: ["Sevilla", "Madrid", "Barcelona", "Valencia"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el valenciano?", options: ["Valencia", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el bilbaíno?", options: ["Bilbao", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el malagueño?", options: ["Málaga", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el granadino?", options: ["Granada", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el cordobés?", options: ["Córdoba", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el salmantino?", options: ["Salamanca", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el vallisoletano?", options: ["Valladolid", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el toledano?", options: ["Toledo", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el zaragozano?", options: ["Zaragoza", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el pamplonés?", options: ["Pamplona", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        { question: "¿Qué es el santanderino?", options: ["Santander", "Madrid", "Barcelona", "Sevilla"], correct: 0, topic: "Dialectos Regionales" },
        
        // Vocabulario Español - 15 preguntas
        { question: "¿Qué es 'coger' en España?", options: ["Tomar/Agarrar", "Tener relaciones", "Comer", "Beber"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'conducir' en España?", options: ["Manejar", "Llevar", "Traer", "Guíar"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'ordenador' en España?", options: ["Computadora", "Organizador", "Teléfono", "Tablet"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'móvil' en España?", options: ["Celular", "Mueble", "Auto", "Casa"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'coche' en España?", options: ["Carro", "Cocina", "Cama", "Silla"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'piso' en España?", options: ["Apartamento", "Suelo", "Piso de madera", "Escalera"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'patata' en España?", options: ["Papa", "Pata", "Pasta", "Patio"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'zumo' en España?", options: ["Jugo", "Zumo de limón", "Jugo de naranja", "Bebida"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'autobús' en España?", options: ["Camión", "Bus", "Auto", "Camioneta"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'boli' en España?", options: ["Bolígrafo", "Bola", "Bolsa", "Bote"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'gafas' en España?", options: ["Lentes", "Gafa", "Gato", "Gafa de sol"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'chubasquero' en España?", options: ["Impermeable", "Chubasco", "Chubasquero", "Paraguas"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'pulpo' en España?", options: ["Pulpo", "Pulpo de mar", "Pulpo de tierra", "Pulpo de agua"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'jamón' en España?", options: ["Jamón serrano", "Jamón cocido", "Jamón de pavo", "Jamón de pollo"], correct: 0, topic: "Vocabulario Español" },
        { question: "¿Qué es 'tortilla' en España?", options: ["Tortilla de patatas", "Tortilla de maíz", "Tortilla de harina", "Tortilla de trigo"], correct: 0, topic: "Vocabulario Español" },
        
        // Expresiones Idiomáticas - 15 preguntas
        { question: "¿Qué significa 'estar como una cabra'?", options: ["Estar loco", "Estar feliz", "Estar triste", "Estar enojado"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'ser la leche'?", options: ["Ser increíble", "Ser leche", "Ser agua", "Ser café"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'no tener ni idea'?", options: ["No saber nada", "Tener idea", "Saber todo", "Saber poco"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'matar dos pájaros de un tiro'?", options: ["Lograr dos cosas", "Matar pájaros", "Cazar pájaros", "Disparar"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'costar un ojo'?", options: ["Ser muy caro", "Costar poco", "Ser gratis", "Ser barato"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'ponerse las botas'?", options: ["Comer mucho", "Ponerse zapatos", "Ponerse ropa", "Ponerse gorra"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'irse al garete'?", options: ["Irse sin rumbo", "Irse a casa", "Irse al trabajo", "Irse a la escuela"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'quedarse en blanco'?", options: ["Olvidar todo", "Quedarse en blanco", "Quedarse negro", "Quedarse rojo"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'dar en el clavo'?", options: ["Acertar", "Fallar", "Dudar", "Preguntar"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'ser pan comido'?", options: ["Ser muy fácil", "Ser difícil", "Ser comida", "Ser pan"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'echarle ganas'?", options: ["Esforzarse", "Echarle agua", "Echarle fuego", "Echarle tierra"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'tomar el pelo'?", options: ["Burlarse", "Cortar pelo", "Peinar", "Asear"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'meter la pata'?", options: ["Cometer error", "Meter pie", "Meter mano", "Meter cabeza"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'hacer la pelota'?", options: ["Adular", "Hacer pelota", "Jugar pelota", "Lanzar pelota"], correct: 0, topic: "Expresiones Idiomáticas" },
        { question: "¿Qué significa 'ser un chorra'?", options: ["Ser mentiroso", "Ser chorizo", "Ser chorro", "Ser chorro de agua"], correct: 0, topic: "Expresiones Idiomáticas" },
        
        // Literatura Española - 15 preguntas
        { question: "¿Quién escribió 'Don Quijote'?", options: ["Cervantes", "Lope de Vega", "Calderón", "Góngora"], correct: 0, topic: "Literatura Española" },
        { question: "¿Quién escribió 'La Celestina'?", options: ["Rojas", "Cervantes", "Lope", "Calderón"], correct: 0, topic: "Literatura Española" },
        { question: "¿Quién escribió 'Fuenteovejuna'?", options: ["Lope de Vega", "Cervantes", "Calderón", "Góngora"], correct: 0, topic: "Literatura Española" },
        { question: "¿Quién escribió 'La vida es sueño'?", options: ["Calderón", "Cervantes", "Lope", "Góngora"], correct: 0, topic: "Literatura Española" },
        { question: "¿Quién escribió 'Soledades'?", options: ["Góngora", "Cervantes", "Lope", "Calderón"], correct: 0, topic: "Literatura Española" },
        { question: "¿Qué es el Siglo de Oro?", options: ["Siglo XVI-XVII", "Siglo XV", "Siglo XVIII", "Siglo XIX"], correct: 0, topic: "Literatura Española" },
        { question: "¿Qué es el picaresco?", options: ["Género literario", "Personaje", "Lugar", "Tiempo"], correct: 0, topic: "Literatura Española" },
        { question: "¿Qué es el concepto culterano?", options: ["Estilo poético", "Personaje", "Lugar", "Tiempo"], correct: 0, topic: "Literatura Española" },
        { question: "¿Qué es el conceptismo?", options: ["Estilo literario", "Personaje", "Lugar", "Tiempo"], correct: 0, topic: "Literatura Española" },
        { question: "¿Qué es el teatro del Siglo de Oro?", options: ["Teatro clásico", "Teatro moderno", "Teatro romántico", "Teatro contemporáneo"], correct: 0, topic: "Literatura Española" },
        { question: "¿Quién es el 'Príncipe de los ingenios'?", options: ["Cervantes", "Lope", "Calderón", "Góngora"], correct: 0, topic: "Literatura Española" },
        { question: "¿Qué es 'Lazarillo de Tormes'?", options: ["Novela picaresca", "Novela romántica", "Novela moderna", "Novela clásica"], correct: 0, topic: "Literatura Española" },
        { question: "¿Quién escribió 'Rimas'?", options: ["Bécquer", "Cervantes", "Lope", "Calderón"], correct: 0, topic: "Literatura Española" },
        { question: "¿Quién escribió 'Don Juan Tenorio'?", options: ["Zorrilla", "Cervantes", "Lope", "Calderón"], correct: 0, topic: "Literatura Española" },
        { question: "¿Qué es el Romanticismo español?", options: ["Movimiento literario", "Personaje", "Lugar", "Tiempo"], correct: 0, topic: "Literatura Española" },
        
        // Cultura y Tradiciones - 15 preguntas
        { question: "¿Qué es la Semana Santa en España?", options: ["Celebración religiosa", "Fiesta secular", "Fiesta deportiva", "Fiesta musical"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué son las Fallas?", options: ["Fiesta de Valencia", "Fiesta de Madrid", "Fiesta de Barcelona", "Fiesta de Sevilla"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es la Tomatina?", options: ["Fiesta con tomates", "Fiesta con tomate", "Fiesta con tomates rojos", "Fiesta con tomates verdes"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es el San Fermín?", options: ["Fiesta de Pamplona", "Fiesta de Madrid", "Fiesta de Barcelona", "Fiesta de Sevilla"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es la Feria de Abril?", options: ["Fiesta de Sevilla", "Fiesta de Madrid", "Fiesta de Barcelona", "Fiesta de Valencia"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es el flamenco?", options: ["Arte andaluz", "Arte madrileño", "Arte barcelonés", "Arte valenciano"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es la paella?", options: ["Plato valenciano", "Plato madrileño", "Plato barcelonés", "Plato sevillano"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es el gazpacho?", options: ["Sopa fría andaluza", "Sopa caliente", "Sopa dulce", "Sopa salada"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es la tapa?", options: ["Pequeño plato", "Plato grande", "Bebida", "Postre"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es la siesta?", options: ["Descanso del mediodía", "Descanso de la noche", "Descanso de la mañana", "Descanso de la tarde"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es la corrida de toros?", options: ["Espectáculo taurino", "Espectáculo deportivo", "Espectáculo musical", "Espectáculo teatral"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es el botellón?", options: ["Reunión para beber", "Botella grande", "Botella pequeña", "Botella mediana"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es la verbena?", options: ["Fiesta nocturna", "Fiesta diurna", "Fiesta matutina", "Fiesta vespertina"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es la romería?", options: ["Peregrinación", "Fiesta", "Procesión", "Celebración"], correct: 0, topic: "Cultura y Tradiciones" },
        { question: "¿Qué es la moros y cristianos?", options: ["Fiesta histórica", "Fiesta religiosa", "Fiesta deportiva", "Fiesta musical"], correct: 0, topic: "Cultura y Tradiciones" },
        
        // Historia de la Lengua - 15 preguntas
        { question: "¿De dónde viene el español?", options: ["Latín vulgar", "Griego", "Árabe", "Hebreo"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué influencia tuvo el árabe?", options: ["Mucha", "Poca", "Ninguna", "Media"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué influencia tuvo el latín?", options: ["Mucha", "Poca", "Ninguna", "Media"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué influencia tuvo el griego?", options: ["Media", "Mucha", "Poca", "Ninguna"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Cuándo se formó el español?", options: ["Edad Media", "Edad Antigua", "Edad Moderna", "Edad Contemporánea"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué es el castellano antiguo?", options: ["Español medieval", "Español moderno", "Español contemporáneo", "Español futuro"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué es el castellano medio?", options: ["Español renacentista", "Español medieval", "Español moderno", "Español contemporáneo"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué es el español moderno?", options: ["Español actual", "Español medieval", "Español renacentista", "Español futuro"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué es la Real Academia Española?", options: ["Institución de la lengua", "Institución de arte", "Institución de ciencia", "Institución de deporte"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Cuándo se fundó la RAE?", options: ["Siglo XVIII", "Siglo XVII", "Siglo XVI", "Siglo XIX"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué es el Diccionario de la RAE?", options: ["Diccionario de español", "Diccionario de inglés", "Diccionario de francés", "Diccionario de alemán"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué es la Ortografía de la RAE?", options: ["Reglas de escritura", "Reglas de habla", "Reglas de lectura", "Reglas de escucha"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué es la Gramática de la RAE?", options: ["Reglas gramaticales", "Reglas de escritura", "Reglas de habla", "Reglas de lectura"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué es el español de América?", options: ["Variante americana", "Variante europea", "Variante asiática", "Variante africana"], correct: 0, topic: "Historia de la Lengua" },
        { question: "¿Qué es el español de Filipinas?", options: ["Variante filipina", "Variante europea", "Variante asiática", "Variante africana"], correct: 0, topic: "Historia de la Lengua" },
        
        // Normativa RAE - 15 preguntas
        { question: "¿Qué es la RAE?", options: ["Real Academia Española", "Real Academia de Arte", "Real Academia de Ciencia", "Real Academia de Deporte"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Cuántas academias componen la ASALE?", options: ["22", "20", "24", "18"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es la ASALE?", options: ["Asociación de Academias", "Asociación de Arte", "Asociación de Ciencia", "Asociación de Deporte"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es el DLE?", options: ["Diccionario de la Lengua Española", "Diccionario de Latín", "Diccionario de Inglés", "Diccionario de Francés"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es la NGLE?", options: ["Nueva Gramática de la Lengua Española", "Nueva Gramática de Latín", "Nueva Gramática de Inglés", "Nueva Gramática de Francés"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es la NORME?", options: ["Nueva Ortografía de la Lengua Española", "Nueva Ortografía de Latín", "Nueva Ortografía de Inglés", "Nueva Ortografía de Francés"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es el DPD?", options: ["Diccionario Panhispánico de Dudas", "Diccionario de Palabras", "Diccionario de Dudas", "Diccionario de Diccionarios"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es el DRAE?", options: ["Diccionario de la Real Academia Española", "Diccionario de Real Academia", "Diccionario de Real", "Diccionario de Academia"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es la Ortografía 2010?", options: ["Nuevas reglas ortográficas", "Antiguas reglas", "Reglas de 1999", "Reglas de 2000"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es la tilde diacrítica?", options: ["Diferenciar palabras", "Acentuar palabras", "Puntuar palabras", "Separar palabras"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es la tilde enfática?", options: ["Enfatizar palabras", "Acentuar palabras", "Puntuar palabras", "Separar palabras"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es la tilde prosódica?", options: ["Acento de voz", "Acento escrito", "Acento de puntuación", "Acento de separación"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es el español panhispánico?", options: ["Español de todas las regiones", "Español de España", "Español de América", "Español de Asia"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es la unidad de la lengua?", options: ["Español unificado", "Español dividido", "Español separado", "Español aislado"], correct: 0, topic: "Normativa RAE" },
        { question: "¿Qué es la diversidad lingüística?", options: ["Variedades del español", "Unidad del español", "Separación del español", "Aislamiento del español"], correct: 0, topic: "Normativa RAE" },
        
        // Uso Coloquial - 15 preguntas
        { question: "¿Qué es el lenguaje coloquial?", options: ["Lenguaje informal", "Lenguaje formal", "Lenguaje técnico", "Lenguaje científico"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es la jerga?", options: ["Lenguaje de grupo", "Lenguaje formal", "Lenguaje técnico", "Lenguaje científico"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es el argot?", options: ["Lenguaje secreto", "Lenguaje formal", "Lenguaje técnico", "Lenguaje científico"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es la slang?", options: ["Lenguaje juvenil", "Lenguaje formal", "Lenguaje técnico", "Lenguaje científico"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es el modismo?", options: ["Expresión característica", "Expresión formal", "Expresión técnica", "Expresión científica"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es el refrán?", options: ["Dicho popular", "Dicho formal", "Dicho técnico", "Dicho científico"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es el dicho?", options: ["Expresión breve", "Expresión larga", "Expresión formal", "Expresión técnica"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es la expresión?", options: ["Frase característica", "Frase formal", "Frase técnica", "Frase científica"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es el apócope?", options: ["Acortamiento de palabra", "Alargamiento de palabra", "Cambio de palabra", "Eliminación de palabra"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es la elisión?", options: ["Omisión de sonido", "Adición de sonido", "Cambio de sonido", "Eliminación de palabra"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es la epéntesis?", options: ["Adición de sonido", "Omisión de sonido", "Cambio de sonido", "Eliminación de palabra"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es la metátesis?", options: ["Cambio de posición", "Omisión de sonido", "Adición de sonido", "Eliminación de palabra"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es la paragoge?", options: ["Adición al final", "Omisión al final", "Cambio al final", "Eliminación al final"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es la prótesis?", options: ["Adición al inicio", "Omisión al inicio", "Cambio al inicio", "Eliminación al inicio"], correct: 0, topic: "Uso Coloquial" },
        { question: "¿Qué es la síncopa?", options: ["Omisión en medio", "Adición en medio", "Cambio en medio", "Eliminación en medio"], correct: 0, topic: "Uso Coloquial" },
        
        // Diferencias con Latinoamérica - 15 preguntas
        { question: "¿Qué diferencia hay en 'coche'?", options: ["Carro en LatAm", "Cocina en LatAm", "Cama en LatAm", "Silla en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'ordenador'?", options: ["Computadora en LatAm", "Organizador en LatAm", "Teléfono en LatAm", "Tablet en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'móvil'?", options: ["Celular en LatAm", "Mueble en LatAm", "Auto en LatAm", "Casa en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'coger'?", options: ["Tomar en España, otro significado en LatAm", "Mismo significado", "Sin significado", "Significado opuesto"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'conducir'?", options: ["Manejar en LatAm", "Llevar en LatAm", "Traer en LatAm", "Guíar en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'zumo'?", options: ["Jugo en LatAm", "Zumo en LatAm", "Bebida en LatAm", "Agua en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'patata'?", options: ["Papa en LatAm", "Pata en LatAm", "Pasta en LatAm", "Patio en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'piso'?", options: ["Apartamento en España, piso en LatAm", "Suelo en LatAm", "Escalera en LatAm", "Casa en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'autobús'?", options: ["Camión en LatAm", "Bus en LatAm", "Auto en LatAm", "Camioneta en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'boli'?", options: ["Bolígrafo en España, pluma en LatAm", "Bola en LatAm", "Bolsa en LatAm", "Bote en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'gafas'?", options: ["Lentes en LatAm", "Gafa en LatAm", "Gato en LatAm", "Gafa de sol en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'chubasquero'?", options: ["Impermeable en España, chamarra en LatAm", "Chubasco en LatAm", "Paraguas en LatAm", "Abrigo en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en 'tortilla'?", options: ["Tortilla de patatas en España, tortilla de maíz en LatAm", "Tortilla de harina en LatAm", "Tortilla de trigo en LatAm", "Tortilla de arroz en LatAm"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en el voseo?", options: ["Uso de vos en LatAm", "Uso de tú en España", "Uso de usted en ambos", "Sin pronombre"], correct: 0, topic: "Diferencias con Latinoamérica" },
        { question: "¿Qué diferencia hay en el ceceo?", options: ["Pronunciación en España", "Pronunciación en LatAm", "Sin pronunciación", "Pronunciación igual"], correct: 0, topic: "Diferencias con Latinoamérica" }
    ]
};

// Study materials for each subject - organized as expandable categories
const studyMaterials = {
    matematicas: {
        title: "Matemáticas - Nivel Bachillerato",
        categories: [
            {
                name: "Operaciones Básicas",
                introduction: "Las operaciones básicas son los fundamentos de las matemáticas. Se utilizan para resolver problemas cotidianos y son la base para conceptos más avanzados. Aprenderás a aplicar la jerarquía de operaciones correctamente.",
                examples: "Suma: 5 + 3 = 8. Combinar cantidades. Resta: 10 - 4 = 6. Encontrar la diferencia. Multiplicación: 3 × 4 = 12. Suma repetida (3 + 3 + 3 + 3 = 12). División: 12 ÷ 3 = 4. Repartir en partes iguales. Jerarquía: 2 + 3 × 4 = 14 (primero multiplicación: 3×4=12, luego suma: 2+12=14). Paréntesis: (2 + 3) × 4 = 20 (primero paréntesis: 2+3=5, luego multiplicación: 5×4=20). Combinación: 10 + 2 × (8 - 4) = 18 (primero paréntesis: 8-4=4, luego multiplicación: 2×4=8, luego suma: 10+8=18).",
                definitions: [
                    { term: "Suma", definition: "Combinar cantidades para obtener un total. Símbolo: +. Propiedades: conmutativa (a+b=b+a), asociativa ((a+b)+c=a+(b+c)), identidad (a+0=a)" },
                    { term: "Resta", definition: "Encontrar la diferencia entre dos cantidades. Símbolo: -. No es conmutativa (a-b ≠ b-a). Relación con suma: a - b = c significa a = b + c" },
                    { term: "Multiplicación", definition: "Suma repetida de un número. Símbolo: ×. Propiedades: conmutativa (a×b=b×a), asociativa ((a×b)×c=a×(b×c)), distributiva (a×(b+c)=a×b+a×c), identidad (a×1=a)" },
                    { term: "División", definition: "Repartir una cantidad en partes iguales. Símbolo: ÷. a ÷ b = c significa a = b × c. No es conmutativa. División por cero no está definida" },
                    { term: "Jerarquía de operaciones", definition: "PEMDAS: Paréntesis primero, luego Exponentes, luego Multiplicación y División (izquierda a derecha), luego Adición y Sustracción (izquierda a derecha)" },
                    { term: "Paréntesis", definition: "Indican qué operaciones realizar primero. Siempre se resuelven antes que otras operaciones. Paréntesis anidados: resolver del interior hacia afuera" },
                    { term: "Exponentes", definition: "Representan multiplicación repetida. a^n significa a multiplicado por sí mismo n veces. Ejemplo: 2^3 = 2×2×2 = 8" },
                    { term: "Raíz cuadrada", definition: "Operación inversa del exponente 2. √a = b significa b² = a. Ejemplo: √9 = 3 porque 3² = 9" }
                ],
                quiz: [
                    { question: "¿Cuál es el resultado de 15 + 27?", options: ["42", "41", "43", "40"], correct: 0 },
                    { question: "Si tienes 50 manzanas y regalas 15, ¿cuántas te quedan?", options: ["35", "45", "25", "30"], correct: 0 },
                    { question: "¿Cuál es el resultado de 8 × 7?", options: ["54", "56", "58", "52"], correct: 1 },
                    { question: "¿Cuánto es 144 ÷ 12?", options: ["10", "11", "12", "13"], correct: 2 },
                    { question: "¿Cuál es el resultado de 3 + 4 × 2? (Aplica PEMDAS)", options: ["14", "11", "10", "12"], correct: 1 },
                    { question: "¿Cuánto es (5 + 3) × 2? (Primero paréntesis)", options: ["16", "11", "13", "14"], correct: 0 },
                    { question: "Si compras 3 artículos a $25 cada uno, ¿cuánto pagas?", options: ["$75", "$50", "$100", "$80"], correct: 0 },
                    { question: "¿Cuál es el resultado de 100 - 37?", options: ["63", "73", "67", "53"], correct: 0 }
                ]
            },
            {
                name: "Fracciones y Decimales",
                introduction: "Las fracciones y decimales representan partes de un todo. Son esenciales para trabajar con cantidades que no son números enteros. Aprenderás a convertir entre fracciones y decimales, y a realizar operaciones con ambos.",
                examples: "Fracción: 1/2 = 0.5. Mitad de un todo. Decimal: 0.75 = 3/4. Tres cuartos. Suma fracciones mismo denominador: 1/4 + 2/4 = 3/4. Suma diferente denominador: 1/2 + 1/3 = 3/6 + 2/6 = 5/6 (MCM de 2 y 3 es 6). Resta: 3/4 - 1/4 = 2/4 = 1/2. Multiplicación: 1/2 × 1/2 = 1/4 (multiplicar numeradores y denominadores). División: 1/2 ÷ 2 = 1/2 × 1/2 = 1/4 (multiplicar por el recíproco). Decimal a fracción: 0.5 = 5/10 = 1/2. Fracción a decimal: 3/4 = 0.75 (dividir numerador por denominador).",
                definitions: [
                    { term: "Fracciones", definition: "Representan partes de un todo. Forma a/b donde a es numerador (partes que tenemos) y b es denominador (partes totales). b no puede ser 0" },
                    { term: "Fracción equivalente", definition: "Fracciones que representan el mismo valor. 1/2 = 2/4 = 3/6. Se obtienen multiplicando numerador y denominador por el mismo número" },
                    { term: "Fracción irreducible", definition: "Fracción simplificada al máximo. Numerador y denominador no tienen factores comunes excepto 1. 4/8 = 1/2" },
                    { term: "Suma de fracciones", definition: "Mismo denominador: sumar numeradores. Diferente denominador: encontrar MCM, convertir fracciones, luego sumar" },
                    { term: "Multiplicación de fracciones", definition: "Multiplicar numeradores entre sí y denominadores entre sí. (a/b) × (c/d) = (a×c)/(b×d). Simplificar antes de multiplicar" },
                    { term: "División de fracciones", definition: "Multiplicar la primera fracción por el recíproco de la segunda. (a/b) ÷ (c/d) = (a/b) × (d/c)" },
                    { term: "Decimales", definition: "Sistema base-10. Cada posición representa potencia de 10. 0.1 = 1/10, 0.01 = 1/100, 0.001 = 1/1000" },
                    { term: "Conversión decimal a fracción", definition: "Escribir como fracción con denominador potencia de 10, luego simplificar. 0.75 = 75/100 = 3/4" },
                    { term: "Conversión fracción a decimal", definition: "Dividir numerador por denominador. 3/4 = 3 ÷ 4 = 0.75. Fracciones con denominador 2, 4, 5, 8, 10, 20, 25, 50, 100 tienen decimales finitos" }
                ],
                quiz: [
                    { question: "¿Cuál es el resultado de 1/2 + 1/4?", options: ["3/4", "2/4", "1/2", "1/4"], correct: 0 },
                    { question: "¿Cuánto es 0.5 como fracción?", options: ["1/2", "1/3", "1/4", "2/3"], correct: 0 },
                    { question: "¿Cuál es el resultado de 1/2 × 1/2?", options: ["1/4", "1/2", "1/3", "2/4"], correct: 0 },
                    { question: "Si comes 3/4 de una pizza, ¿qué fracción queda?", options: ["1/4", "1/2", "3/4", "1/3"], correct: 0 },
                    { question: "¿Cuánto es 0.25 como fracción?", options: ["1/4", "1/2", "1/3", "2/4"], correct: 0 },
                    { question: "¿Cuál es el resultado de 3/4 - 1/4?", options: ["1/2", "1/4", "2/4", "3/4"], correct: 0 },
                    { question: "¿Cuánto es 0.75 como fracción?", options: ["3/4", "1/2", "1/4", "2/3"], correct: 0 },
                    { question: "¿Cuál es el resultado de 2/3 + 1/3?", options: ["1", "2/3", "1/3", "3/3"], correct: 0 }
                ]
            },
            {
                name: "Áreas y Perímetros",
                introduction: "El área es la medida de la superficie de una figura geométrica, mientras que el perímetro es la distancia alrededor de la figura.",
                examples: "Cuadrado lado 5: Área = 25, Perímetro = 20, Rectángulo 4×6: Área = 24, Perímetro = 20, Triángulo base 6 altura 4: Área = 12, Círculo radio 3: Área = 28.27, Perímetro = 18.85, Trapecio bases 4 y 6 altura 5: Área = 25",
                definitions: [
                    { term: "Cuadrado", definition: "Área = lado², Perímetro = 4 × lado" },
                    { term: "Rectángulo", definition: "Área = base × altura, Perímetro = 2(base + altura)" },
                    { term: "Triángulo", definition: "Área = (base × altura) ÷ 2, Perímetro = suma de lados" },
                    { term: "Círculo", definition: "Área = πr², Perímetro (circunferencia) = 2πr" },
                    { term: "Trapecio", definition: "Área = ((base1 + base2) × altura) ÷ 2" }
                ],
                quiz: [
                    { question: "¿Cuál es el área de un cuadrado de lado 6 metros?", options: ["36 m²", "24 m²", "30 m²", "42 m²"], correct: 0 },
                    { question: "¿Cuál es el perímetro de un rectángulo de 8m por 4m?", options: ["24 m", "32 m", "16 m", "20 m"], correct: 0 },
                    { question: "¿Cuál es el área de un triángulo con base 10 y altura 6?", options: ["30", "60", "36", "16"], correct: 0 },
                    { question: "¿Cuál es el perímetro de un cuadrado de lado 7?", options: ["28", "21", "35", "49"], correct: 0 },
                    { question: "¿Cuál es el área de un círculo con radio 4? (π ≈ 3.14)", options: ["50.24", "25.12", "12.56", "100.48"], correct: 0 },
                    { question: "Si un rectángulo tiene área 48 y base 8, ¿cuál es la altura?", options: ["6", "4", "8", "12"], correct: 0 },
                    { question: "¿Cuál es el perímetro de un triángulo con lados 5, 12 y 13?", options: ["30", "20", "25", "35"], correct: 0 },
                    { question: "¿Cuál es el área de un rectángulo de 9m por 5m?", options: ["45 m²", "14 m²", "28 m²", "36 m²"], correct: 0 }
                ]
            },
            {
                name: "Álgebra",
                introduction: "El álgebra usa letras para representar números desconocidos. Permite resolver ecuaciones y modelar situaciones del mundo real. Aprenderás a resolver ecuaciones paso a paso usando técnicas fundamentales.",
                examples: "Ejemplo 1: 2x + 3 = 7. Paso 1: Restar 3 de ambos lados: 2x = 4. Paso 2: Dividir por 2: x = 2. Ejemplo 2: 2x - 2 = 0. Paso 1: Sumar 2 a ambos lados: 2x = 2. Paso 2: Dividir por 2: x = 1. Ejemplo 3: 3x - 5 = 10. Paso 1: Sumar 5: 3x = 15. Paso 2: Dividir por 3: x = 5. Ejemplo 4: x/2 + 4 = 8. Paso 1: Restar 4: x/2 = 4. Paso 2: Multiplicar por 2: x = 8. Ejemplo 5: 2(x + 3) = 14. Paso 1: Dividir por 2: x + 3 = 7. Paso 2: Restar 3: x = 4. Ejemplo 6: x² = 16. Solución: x = 4 o x = -4. Ejemplo 7: Sistema x + y = 10, x - y = 2. Sumar ecuaciones: 2x = 12, x = 6. Sustituir: 6 + y = 10, y = 4.",
                definitions: [
                    { term: "Variables", definition: "Letras (x, y, z) que representan números desconocidos que debemos encontrar" },
                    { term: "Ecuaciones", definition: "Igualdades matemáticas con variables. Resolver significa encontrar el valor de la variable que hace la igualdad verdadera" },
                    { term: "Ecuaciones lineales", definition: "Ecuaciones de primer grado en la forma ax + b = c, donde a, b, c son números y x es la variable" },
                    { term: "Sistemas de ecuaciones", definition: "Conjunto de dos o más ecuaciones con múltiples variables que deben resolverse simultáneamente" },
                    { term: "MCD y MCM", definition: "Máximo Común Divisor (mayor número que divide exactamente) y Mínimo Común Múltiplo (menor número múltiplo de todos)" },
                    { term: "Propiedad de igualdad", definition: "Lo que haces en un lado de la ecuación, debes hacerlo en el otro lado para mantener la igualdad" },
                    { term: "Distributiva", definition: "a(b + c) = ab + ac. Multiplica el término fuera del paréntesis por cada término dentro" },
                    { term: "Ecuación cuadrática", definition: "Ecuación de segundo grado: ax² + bx + c = 0. Puede tener 0, 1 o 2 soluciones reales" }
                ],
                quiz: [
                    { question: "¿Cuál es el valor de x en 2x + 5 = 15? Paso 1: Restar 5, Paso 2: Dividir por 2", options: ["5", "10", "3", "7"], correct: 0 },
                    { question: "Si 3x = 21, ¿cuánto vale x? Paso 1: Dividir ambos lados por 3", options: ["7", "6", "8", "5"], correct: 0 },
                    { question: "¿Cuál es la solución de x - 8 = 12? Paso 1: Sumar 8 a ambos lados", options: ["20", "4", "16", "24"], correct: 0 },
                    { question: "Si x/4 = 3, ¿cuánto es x? Paso 1: Multiplicar ambos lados por 4", options: ["12", "8", "16", "6"], correct: 0 },
                    { question: "¿Cuál es el valor de x en 5x - 10 = 20? Paso 1: Sumar 10, Paso 2: Dividir por 5", options: ["6", "4", "8", "5"], correct: 0 },
                    { question: "Si 2x + 3 = 11, ¿cuánto es x? Paso 1: Restar 3, Paso 2: Dividir por 2", options: ["4", "5", "3", "6"], correct: 0 },
                    { question: "¿Cuál es la solución de x + 15 = 30? Paso 1: Restar 15 de ambos lados", options: ["15", "10", "20", "25"], correct: 0 },
                    { question: "Si 4x = 32, ¿cuánto vale x? Paso 1: Dividir ambos lados por 4", options: ["8", "6", "10", "7"], correct: 0 }
                ]
            },
            {
                name: "Geometría",
                introduction: "La geometría estudia las formas, tamaños y posiciones de las figuras. Se divide en geometría plana (2D) y geometría espacial (3D). Aprenderás a calcular áreas, perímetros, volúmenes y aplicar el teorema de Pitágoras.",
                examples: "Triángulo rectángulo: a² + b² = c². Si catetos son 3 y 4: 3² + 4² = 9 + 16 = 25, c = √25 = 5. Triángulo 3-4-5: hipotenusa = 5. Cuadrado lado 4: diagonal = 4√2 ≈ 5.66. Círculo radio 5: diámetro = 10, área = π×5² = 78.5, perímetro = 2π×5 = 31.4. Cubo lado 3: volumen = 3³ = 27, área superficial = 6×3² = 54. Esfera radio 2: volumen = (4/3)π×2³ = 33.51, área = 4π×2² = 50.27. Prisma rectangular 2×3×4: volumen = 2×3×4 = 24, área superficial = 2(2×3 + 2×4 + 3×4) = 52.",
                definitions: [
                    { term: "Figuras 2D", definition: "Polígonos (triángulo, cuadrado, rectángulo, pentágono, hexágono), círculos. Clasificación por lados (equilátero, isósceles, escaleno) y ángulos (agudo <90°, recto =90°, obtuso >90°)" },
                    { term: "Área", definition: "Superficie que ocupa una figura 2D. Triángulo: (base×altura)/2. Rectángulo: base×altura. Cuadrado: lado². Círculo: π×radio². Trapecio: ((base1+base2)×altura)/2" },
                    { term: "Perímetro", definition: "Distancia alrededor de una figura 2D. Suma de todos los lados. Círculo: 2π×radio o π×diámetro" },
                    { term: "Figuras 3D", definition: "Prismas (bases paralelas), pirámides (base poligonal), cilindros (bases circulares), esferas, conos. Tienen volumen y área superficial" },
                    { term: "Volumen", definition: "Espacio ocupado por un objeto 3D. Cubo: lado³. Prisma rectangular: largo×ancho×alto. Cilindro: π×radio²×altura. Esfera: (4/3)π×radio³. Cono: (1/3)π×radio²×altura" },
                    { term: "Teorema de Pitágoras", definition: "En triángulo rectángulo: a² + b² = c², donde a y b son catetos, c es hipotenusa. Permite encontrar lados desconocidos" },
                    { term: "Ángulos", definition: "Medida de rotación entre dos líneas. Grados (°) o radianes. Triángulo: suma = 180°. Cuadrilátero: suma = 360°. Círculo completo = 360°" },
                    { term: "Semejanza", definition: "Figuras con misma forma pero diferente tamaño. Lados proporcionales, ángulos iguales. Factor de escala: razón entre lados correspondientes" }
                ],
                quiz: [
                    { question: "En un triángulo rectángulo con catetos 3 y 4, ¿cuál es la hipotenusa? (Aplica Pitágoras)", options: ["5", "6", "7", "8"], correct: 0 },
                    { question: "¿Cuántos lados tiene un hexágono?", options: ["6", "5", "7", "8"], correct: 0 },
                    { question: "¿Cuál es el volumen de un cubo de lado 3?", options: ["27", "9", "18", "36"], correct: 0 },
                    { question: "¿Cuántos grados tiene un triángulo equilátero?", options: ["180°", "90°", "60°", "120°"], correct: 0 },
                    { question: "¿Cuál es el área de un círculo con radio 5? (π ≈ 3.14)", options: ["78.5", "31.4", "15.7", "157"], correct: 0 },
                    { question: "¿Cuántos vértices tiene un cubo?", options: ["8", "6", "12", "4"], correct: 0 },
                    { question: "¿Cuál es el perímetro de un cuadrado de lado 10?", options: ["40", "20", "100", "30"], correct: 0 },
                    { question: "¿Cuántos grados tiene un cuadrado?", options: ["360°", "180°", "270°", "90°"], correct: 0 }
                ]
            },
            {
                name: "Trigonometría",
                introduction: "La trigonometría estudia las relaciones entre los ángulos y los lados de los triángulos. Es fundamental en física, ingeniería y navegación. Aprenderás a usar SOH-CAH-TOA para resolver triángulos rectángulos.",
                examples: "SOH-CAH-TOA: Sin(θ) = Oposto/Hipotenusa, Cos(θ) = Adyacente/Hipotenusa, Tan(θ) = Oposto/Adyacente. Ejemplo: Triángulo con ángulo 30°, opuesto = 3, hipotenusa = 6. Sin(30°) = 3/6 = 0.5. Valores exactos: sin(30°) = 1/2, cos(30°) = √3/2 ≈ 0.866, tan(30°) = 1/√3 ≈ 0.577. sin(45°) = √2/2 ≈ 0.707, cos(45°) = √2/2 ≈ 0.707, tan(45°) = 1. sin(60°) = √3/2 ≈ 0.866, cos(60°) = 1/2, tan(60°) = √3 ≈ 1.732. sin(90°) = 1, cos(90°) = 0, tan(90°) = indefinido.",
                definitions: [
                    { term: "Funciones trigonométricas", definition: "Seno (sin), Coseno (cos), Tangente (tan). Relacionan ángulos con razones de lados en triángulos rectángulos" },
                    { term: "SOH-CAH-TOA", definition: "Mnemónico: Sin = Oposto/Hipotenusa, Cos = Adyacente/Hipotenusa, Tan = Oposto/Adyacente" },
                    { term: "Triángulo rectángulo", definition: "Triángulo con un ángulo de 90°. El lado opuesto al ángulo recto es la hipotenusa (lado más largo)" },
                    { term: "Ángulos", definition: "Grados (°): círculo completo = 360°. Radianes (rad): círculo completo = 2π rad. 180° = π rad" },
                    { term: "Círculo unitario", definition: "Círculo con radio 1. Coordenadas (x,y) en el círculo corresponden a (cos θ, sin θ)" },
                    { term: "Identidad fundamental", definition: "sin²θ + cos²θ = 1. Siempre verdadera para cualquier ángulo" },
                    { term: "Ángulos especiales", definition: "30°, 45°, 60°, 90° tienen valores exactos memorizables usando triángulos especiales" },
                    { term: "Triángulo 30-60-90", definition: "Lados: 1, √3, 2. Ángulos: 30°, 60°, 90°. Relación constante entre lados" },
                    { term: "Triángulo 45-45-90", definition: "Isósceles rectángulo. Lados: 1, 1, √2. Ángulos: 45°, 45°, 90°" }
                ],
                quiz: [
                    { question: "¿Cuál es el valor de sin(30°)? (Aplica SOH)", options: ["0.5", "1", "0.866", "0.707"], correct: 0 },
                    { question: "¿Cuál es el valor de cos(60°)? (Aplica CAH)", options: ["0.5", "1", "0.866", "0"], correct: 0 },
                    { question: "¿Cuál es el valor de tan(45°)? (Aplica TOA)", options: ["1", "0.5", "0.707", "1.732"], correct: 0 },
                    { question: "¿Cuántos grados tiene un ángulo recto?", options: ["90°", "180°", "45°", "60°"], correct: 0 },
                    { question: "¿Cuál es el valor de sin(90°)?", options: ["1", "0", "0.5", "0.866"], correct: 0 },
                    { question: "¿Cuál es el valor de cos(0°)?", options: ["1", "0", "0.5", "0.866"], correct: 0 },
                    { question: "¿Cuántos grados tiene un ángulo llano?", options: ["180°", "90°", "360°", "270°"], correct: 0 },
                    { question: "¿Cuál es el valor de tan(30°)?", options: ["0.577", "1", "0.5", "0.866"], correct: 0 }
                ]
            },
            {
                name: "Funciones",
                introduction: "Una función es una relación donde cada entrada tiene exactamente una salida. Las funciones modelan relaciones en matemáticas y ciencias. Aprenderás a evaluar funciones y entender dominio y rango.",
                examples: "f(x) = 2x + 1. Para evaluar f(3): sustituir x con 3: f(3) = 2(3) + 1 = 6 + 1 = 7. g(x) = x². g(4) = 4² = 16. h(x) = 3x - 2. h(5) = 3(5) - 2 = 15 - 2 = 13. f(x) = x/2. f(8) = 8/2 = 4. p(x) = 2x² + 3x - 1. p(2) = 2(4) + 3(2) - 1 = 8 + 6 - 1 = 13. Dominio: valores de x que la función acepta. Rango: valores de f(x) que la función produce.",
                definitions: [
                    { term: "Definición de función", definition: "Relación donde cada entrada (x) tiene exactamente una salida (f(x)). No puede haber dos salidas para la misma entrada" },
                    { term: "Notación de función", definition: "f(x) se lee 'f de x'. f es el nombre de la función, x es la variable independiente" },
                    { term: "Función lineal", definition: "f(x) = mx + b. Gráfica es una línea recta. m es la pendiente, b es la intersección con el eje y" },
                    { term: "Función cuadrática", definition: "f(x) = ax² + bx + c. Gráfica es una parábola. a ≠ 0. Si a > 0 abre hacia arriba, si a < 0 abre hacia abajo" },
                    { term: "Dominio", definition: "Conjunto de todos los valores de entrada (x) que la función puede aceptar. Para polinomios: todos los reales" },
                    { term: "Rango", definition: "Conjunto de todos los valores de salida (f(x)) que la función puede producir" },
                    { term: "Evaluación de función", definition: "Sustituir la variable con un valor específico y simplificar. f(3) significa evaluar f cuando x = 3" },
                    { term: "Función exponencial", definition: "f(x) = aˣ. Base constante a elevada a la variable x. a > 0, a ≠ 1" },
                    { term: "Función inversa", definition: "f⁻¹(x) es la función que 'deshace' f. Si f(a) = b, entonces f⁻¹(b) = a" }
                ],
                quiz: [
                    { question: "Si f(x) = 2x + 3, ¿cuál es f(5)?", options: ["13", "10", "8", "15"], correct: 0 },
                    { question: "Si g(x) = x², ¿cuál es g(4)?", options: ["16", "8", "12", "20"], correct: 0 },
                    { question: "¿Cuál es el valor de f(3) si f(x) = x/2?", options: ["1.5", "3", "6", "0.5"], correct: 0 },
                    { question: "Si h(x) = 3x - 1, ¿cuál es h(2)?", options: ["5", "4", "6", "7"], correct: 0 },
                    { question: "¿Cuál es f(0) si f(x) = 5x + 2?", options: ["2", "5", "7", "0"], correct: 0 },
                    { question: "Si p(x) = x² + 1, ¿cuál es p(3)?", options: ["10", "8", "9", "7"], correct: 0 },
                    { question: "¿Cuál es f(-2) si f(x) = 3x?", options: ["-6", "6", "-3", "3"], correct: 0 },
                    { question: "Si f(x) = x + 7, ¿cuál es f(10)?", options: ["17", "10", "7", "3"], correct: 0 }
                ]
            },
            {
                name: "Estadística",
                introduction: "La estadística recolecta, organiza y analiza datos. Permite tomar decisiones informadas basadas en información cuantitativa. Aprenderás a calcular media, mediana, moda y entender la dispersión de los datos.",
                examples: "Media de 2, 4, 6 = (2+4+6)/3 = 12/3 = 4. Mediana de 1, 3, 5 = 3 (valor central). Mediana de 2, 4, 6, 8 = (4+6)/2 = 5 (promedio de los dos centrales). Moda de 1, 2, 2, 3 = 2 (valor más frecuente). Desviación estándar de 1, 2, 3: Media = 2, Diferencias = -1, 0, 1, Cuadrados = 1, 0, 1, Promedio = 2/3, Raíz = 0.816. Rango de 5, 10, 15 = 15 - 5 = 10. Media de 10, 20, 30, 40 = (10+20+30+40)/4 = 100/4 = 25.",
                definitions: [
                    { term: "Media (promedio)", definition: "Suma de todos los valores dividida por el número de valores. Representa el valor central típico" },
                    { term: "Mediana", definition: "Valor central cuando los datos están ordenados. Si es par, promedio de los dos centrales. Menos sensible a valores extremos" },
                    { term: "Moda", definition: "Valor que aparece con mayor frecuencia. Puede haber más de una moda (bimodal, multimodal) o ninguna" },
                    { term: "Rango", definition: "Diferencia entre el valor máximo y mínimo. Rango = máximo - mínimo. Medida simple de dispersión" },
                    { term: "Desviación estándar", definition: "Medida de dispersión. Promedio de las distancias de los datos a la media. Valores pequeños = datos agrupados cerca de la media" },
                    { term: "Varianza", definition: "Desviación estándar al cuadrado. Representa la dispersión en unidades cuadradas" },
                    { term: "Cuartiles", definition: "Dividen los datos ordenados en 4 partes iguales. Q1 (25%), Q2 (50% = mediana), Q3 (75%)" },
                    { term: "Percentil", definition: "Valor below el cual cae un porcentaje dado de datos. Percentil 50 = mediana" },
                    { term: "Población vs muestra", definition: "Población: todos los datos. Muestra: subconjunto representativo. Fórmulas ligeramente diferentes" }
                ],
                quiz: [
                    { question: "¿Cuál es la media de 4, 6, 8?", options: ["6", "5", "7", "8"], correct: 0 },
                    { question: "¿Cuál es la mediana de 1, 3, 5, 7?", options: ["4", "3", "5", "6"], correct: 0 },
                    { question: "¿Cuál es la moda de 2, 3, 2, 4, 2?", options: ["2", "3", "4", "5"], correct: 0 },
                    { question: "¿Cuál es el rango de 5, 10, 15?", options: ["10", "5", "15", "20"], correct: 0 },
                    { question: "¿Cuál es la media de 10, 20, 30?", options: ["20", "15", "25", "30"], correct: 0 },
                    { question: "¿Cuál es la mediana de 2, 4, 6?", options: ["4", "2", "6", "5"], correct: 0 },
                    { question: "¿Cuál es la media de 1, 2, 3, 4, 5?", options: ["3", "2.5", "4", "3.5"], correct: 0 },
                    { question: "¿Cuál es la moda de 1, 1, 2, 3, 3, 3?", options: ["3", "1", "2", "4"], correct: 0 }
                ]
            }
        ]
    },
    ciencias: {
        title: "Ciencias Naturales - Nivel Bachillerato",
        categories: [
            {
                name: "Sistema Solar",
                introduction: "El sistema solar es nuestro vecindario cósmico. Consiste en el Sol y todos los objetos que orbitan alrededor de él, incluidos planetas, lunas, asteroides y cometas. Aprenderás sobre los planetas, sus órbitas y las leyes que gobiernan su movimiento.",
                examples: "La Tierra orbita alrededor del Sol a 150 millones de km (1 unidad astronómica). Mercurio: 88 días orbita el Sol (planeta más cercano). Venus: 225 días orbita el Sol (planeta más caliente). Marte: 687 días orbita el Sol (planeta rojo). Júpiter: 12 años orbita el Sol (planeta más grande). Saturno: 29 años orbita el Sol (anillos prominentes). Luna: 27 días orbita la Tierra (causa mareas). Ley de Kepler: planetas más cercanos orbitan más rápido.",
                definitions: [
                    { term: "Sol", definition: "Estrella central del sistema solar. Fuente de energía mediante fusión nuclear. Contiene 99.86% de la masa del sistema solar" },
                    { term: "Planetas interiores (terrestres)", definition: "Mercurio, Venus, Tierra, Marte. Planetas rocosos cercanos al Sol. Tienen superficie sólida" },
                    { term: "Planetas exteriores (gigantes gaseosos)", definition: "Júpiter, Saturno, Urano, Neptuno. Planetas grandes y gaseosos. Tienen anillos y muchas lunas" },
                    { term: "Luna", definition: "Satélite natural de la Tierra. Causa mareas por atracción gravitacional. Tarda 27.3 días en orbitar la Tierra" },
                    { term: "Leyes de Kepler", definition: "1ra Ley: órbitas elípticas con Sol en un foco. 2da Ley: planetas más rápidos cuando están cerca del Sol. 3ra Ley: periodo² proporcional a distancia³" },
                    { term: "Gravedad", definition: "Fuerza de atracción entre objetos. Más masa = más gravedad. Mantiene planetas en órbita" },
                    { term: "Asteroides", definition: "Objetos rocosos pequeños. Cinturón de asteroides entre Marte y Júpiter" },
                    { term: "Cometas", definition: "Objetos de hielo y polvo. Cola larga cuando se acercan al Sol. Orbitas muy elípticas" }
                ],
                quiz: [
                    { question: "¿Cuál es el planeta más cercano al Sol?", options: ["Mercurio", "Venus", "Marte", "Tierra"], correct: 0 },
                    { question: "¿Cuántos planetas hay en el sistema solar?", options: ["8", "7", "9", "10"], correct: 0 },
                    { question: "¿Cuál es el planeta más grande?", options: ["Júpiter", "Saturno", "Urano", "Neptuno"], correct: 0 },
                    { question: "¿Cuánto tiempo tarda la Tierra en orbitar el Sol?", options: ["365 días", "30 días", "180 días", "687 días"], correct: 0 },
                    { question: "¿Cuál es el planeta rojo?", options: ["Marte", "Venus", "Júpiter", "Saturno"], correct: 0 },
                    { question: "¿Qué causa las mareas en la Tierra?", options: ["La Luna", "El Sol", "Los asteroides", "Los cometas"], correct: 0 },
                    { question: "¿Cuál es el planeta más lejano del Sol?", options: ["Neptuno", "Urano", "Saturno", "Júpiter"], correct: 0 },
                    { question: "¿Cuántos días tarda la Luna en orbitar la Tierra?", options: ["27 días", "30 días", "15 días", "365 días"], correct: 0 }
                ]
            },
            {
                name: "Elementos Químicos",
                introduction: "Los elementos químicos son las sustancias fundamentales que componen toda la materia. Se organizan en la tabla periódica según sus propiedades atómicas. Aprenderás sobre los elementos más importantes, sus símbolos y cómo se combinan para formar compuestos.",
                examples: "Agua = H₂O (2 átomos de hidrógeno + 1 átomo de oxígeno). Dióxido de carbono = CO₂ (1 carbono + 2 oxígenos). Sal de mesa = NaCl (1 sodio + 1 cloro). Glucosa = C₆H₁₂O₆ (6 carbonos + 12 hidrógenos + 6 oxígenos). Oxígeno molecular = O₂ (2 átomos de oxígeno). Metano = CH₄ (1 carbono + 4 hidrógenos). Amoníaco = NH₃ (1 nitrógeno + 3 hidrógenos). Fórmula general: subíndice indica número de átomos.",
                definitions: [
                    { term: "Tabla periódica", definition: "Organización de 118 elementos por número atómico y propiedades. Grupos (columnas) = propiedades similares. Períodos (filas) = niveles de energía" },
                    { term: "Número atómico", definition: "Número de protones en el núcleo. Identifica el elemento. Ej: H=1, He=2, Li=3" },
                    { term: "Hidrógeno (H)", definition: "Elemento más abundante en el universo. Número atómico 1. Combustible de las estrellas" },
                    { term: "Oxígeno (O)", definition: "Elemento esencial para respiración celular. Número atómico 8. 21% de la atmósfera terrestre" },
                    { term: "Carbono (C)", definition: "Base de la vida orgánica. Forma 4 enlaces covalentes. Número atómico 6. Presente en todos los seres vivos" },
                    { term: "Nitrógeno (N)", definition: "Componente de proteínas y ácidos nucleicos (ADN, ARN). 78% de la atmósfera. Número atómico 7" },
                    { term: "Enlaces químicos", definition: "Iónicos (transferencia de electrones, NaCl), Covalentes (compartición de electrones, H₂O), Metálicos (mar de electrones, Fe)" },
                    { term: "pH", definition: "Escala de acidez 0-14. pH < 7 = ácido, pH = 7 = neutro, pH > 7 = base/alcalino. Cada unidad es 10x más ácido/básico" },
                    { term: "Molécula", definition: "Grupo de átomos unidos por enlaces químicos. La unidad más pequeña de un compuesto que conserva sus propiedades" }
                ],
                quiz: [
                    { question: "¿Cuál es el símbolo químico del oxígeno?", options: ["O", "Ox", "Oxg", "O2"], correct: 0 },
                    { question: "¿Cuál es el elemento más abundante en el universo?", options: ["Hidrógeno", "Oxígeno", "Carbono", "Nitrógeno"], correct: 0 },
                    { question: "¿Cuál es la fórmula química del agua?", options: ["H₂O", "HO", "H₂O₂", "H2O"], correct: 0 },
                    { question: "¿Cuántos enlaces forma el carbono?", options: ["4", "2", "3", "5"], correct: 0 },
                    { question: "¿Cuál es el símbolo químico del sodio?", options: ["Na", "Sd", "So", "N"], correct: 0 },
                    { question: "¿Qué indica un pH de 7?", options: ["Neutro", "Ácido", "Básico", "Alcalino"], correct: 0 },
                    { question: "¿Cuál es la fórmula del dióxido de carbono?", options: ["CO₂", "CO", "C₂O", "C2O"], correct: 0 },
                    { question: "¿Cuál es el símbolo químico del hierro?", options: ["Fe", "Ir", "H", "I"], correct: 0 }
                ]
            },
            {
                name: "Células",
                introduction: "Las células son las unidades básicas de la vida. Todos los organismos vivos están formados por una o más células que realizan funciones vitales. Aprenderás sobre los tipos de células, sus organelos y cómo funcionan.",
                examples: "Célula humana: 10-30 micras de diámetro. Bacteria E. coli: 2 micras (procariota, sin núcleo). Célula hepática: 20-30 micras (hígado). Glóbulo rojo: 7 micras (sin núcleo, transporta oxígeno). Neurona: hasta 1 metro de largo (transmite señales). Célula muscular: 100 micras (contracción). Célula ósea: 15-20 micras (estructura ósea). División celular: mitosis (cuerpo) y meiosis (reproducción).",
                definitions: [
                    { term: "Teoría celular", definition: "1) Todos los seres vivos están formados por células. 2) La célula es la unidad básica de vida. 3) Todas las células provienen de células preexistentes" },
                    { term: "Procariotas", definition: "Células sin núcleo definido. ADN flotante en citoplasma. Ejemplos: bacterias, archaea. Más pequeñas y simples" },
                    { term: "Eucariotas", definition: "Células con núcleo y organelos membranosos. ADN protegido en núcleo. Ejemplos: animales, plantas, hongos. Más grandes y complejas" },
                    { term: "Mitocondrias", definition: "Central eléctrica de la célula. Produce ATP mediante respiración celular. Tiene su propio ADN. Proviene de bacterias ancestrales" },
                    { term: "Ribosomas", definition: "Sintetizan proteínas a partir de ARN mensajero. Pueden ser libres o unidos al retículo endoplasmático" },
                    { term: "Núcleo", definition: "Contiene ADN (material genético). Controla actividades celulares. Rodeado por membrana nuclear (poros)" },
                    { term: "Membrana celular", definition: "Bicapa lipídica con proteínas. Controla entrada y salida de sustancias. Selectivamente permeable" },
                    { term: "Citoplasma", definition: "Material gelatinoso dentro de la membrana. Contiene organelos. Donde ocurren muchas reacciones químicas" },
                    { term: "Lisosomas", definition: "Organelos digestivos. Contienen enzimas que descomponen desechos y materiales extraños" }
                ],
                quiz: [
                    { question: "¿Cuál es la unidad básica de la vida?", options: ["La célula", "El átomo", "La molécula", "El tejido"], correct: 0 },
                    { question: "¿Qué organelo produce energía en la célula?", options: ["Mitocondria", "Núcleo", "Ribosoma", "Lisosoma"], correct: 0 },
                    { question: "¿Qué tipo de célula tiene núcleo definido?", options: ["Eucariota", "Procariota", "Bacteria", "Archaea"], correct: 0 },
                    { question: "¿Qué organelo contiene el ADN?", options: ["Núcleo", "Mitocondria", "Ribosoma", "Aparato de Golgi"], correct: 0 },
                    { question: "¿Qué controla la entrada y salida de sustancias en la célula?", options: ["Membrana celular", "Citoplasma", "Núcleo", "Pared celular"], correct: 0 },
                    { question: "¿Qué organelo produce proteínas?", options: ["Ribosoma", "Mitocondria", "Lisosoma", "Aparato de Golgi"], correct: 0 },
                    { question: "¿Qué tipo de célula no tiene núcleo definido?", options: ["Procariota", "Eucariota", "Animal", "Vegetal"], correct: 0 },
                    { question: "¿Qué organelo es responsable de la digestión celular?", options: ["Lisosoma", "Mitocondria", "Ribosoma", "Núcleo"], correct: 0 }
                ]
            },
            {
                name: "Sistema Circulatorio",
                introduction: "El sistema circulatorio transporta sangre, oxígeno, nutrientes y desechos por todo el cuerpo. Es esencial para mantener la vida celular.",
                examples: "El corazón bombea aproximadamente 5 litros de sangre por minuto, Latidos promedio: 70 por minuto, Presión arterial normal: 120/80 mmHg, Volumen total de sangre: 5 litros, Tiempo de circulación: 60 segundos, Glóbulos rojos: 5 millones por microlitro, Glóbulos blancos: 5000-10000 por microlitro, Plaquetas: 150000-400000 por microlitro",
                definitions: [
                    { term: "Corazón", definition: "Bombea sangre por todo el cuerpo, 4 cámaras" },
                    { term: "Sangre", definition: "Transporte de oxígeno, nutrientes y desechos" },
                    { term: "Eritrocitos (glóbulos rojos)", definition: "Transportan oxígeno (hemoglobina)" },
                    { term: "Leucocitos (glóbulos blancos)", definition: "Sistema inmune" },
                    { term: "Plaquetas", definition: "Coagulación" },
                    { term: "Plasma", definition: "Parte líquida, contiene proteínas" },
                    { term: "Arterias", definition: "Llevan sangre oxigenada del corazón" },
                    { term: "Venas", definition: "Llevan sangre desoxigenada al corazón" },
                    { term: "Capilares", definition: "Intercambio de gases y nutrientes" },
                    { term: "Circulación", definition: "Mayor (sistémica) y menor (pulmonar)" },
                    { term: "Presión arterial", definition: "Fuerza de la sangre contra las paredes arteriales" }
                ],
                quiz: [
                    { question: "¿Cuántos litros de sangre bombea el corazón por minuto?", options: ["5 litros", "3 litros", "7 litros", "10 litros"], correct: 0 },
                    { question: "¿Cuál es el latido promedio por minuto?", options: ["70", "50", "90", "100"], correct: 0 },
                    { question: "¿Cuál es la presión arterial normal?", options: ["120/80 mmHg", "140/90 mmHg", "110/70 mmHg", "130/85 mmHg"], correct: 0 },
                    { question: "¿Qué células transportan oxígeno?", options: ["Eritrocitos", "Leucocitos", "Plaquetas", "Plasma"], correct: 0 },
                    { question: "¿Cuántas cámaras tiene el corazón?", options: ["4", "2", "3", "5"], correct: 0 },
                    { question: "¿Qué células son responsables del sistema inmune?", options: ["Leucocitos", "Eritrocitos", "Plaquetas", "Plasma"], correct: 0 },
                    { question: "¿Qué tipo de vasos llevan sangre oxigenada?", options: ["Arterias", "Venas", "Capilares", "Linfáticos"], correct: 0 },
                    { question: "¿Qué es responsable de la coagulación?", options: ["Plaquetas", "Eritrocitos", "Leucocitos", "Plasma"], correct: 0 }
                ]
            },
            {
                name: "Sistema Digestivo",
                introduction: "El sistema digestivo procesa los alimentos para extraer nutrientes y energía. Convierte los alimentos en sustancias que el cuerpo puede absorber y usar.",
                examples: "El proceso digestivo completo dura 24-72 horas, Estómago: 2-4 horas digestión, Intestino delgado: 4-6 horas absorción, Intestino grueso: 12-36 horas, Hígado: 500 funciones vitales, Páncreas: produce insulina, Boca: inicia digestión con enzimas, Esófago: 10 segundos transporte",
                definitions: [
                    { term: "Boca", definition: "Masticación, digestión química (enzimas)" },
                    { term: "Esófago", definition: "Transporte al estómago" },
                    { term: "Estómago", definition: "Digestión química (ácido clorhídrico)" },
                    { term: "Intestino delgado", definition: "Absorción de nutrientes" },
                    { term: "Intestino grueso", definition: "Absorción de agua, formación de heces" },
                    { term: "Hígado", definition: "Producción de bilis, desintoxicación" },
                    { term: "Páncreas", definition: "Enzimas digestivas, insulina" }
                ],
                quiz: [
                    { question: "¿Cuánto dura el proceso digestivo completo?", options: ["24-72 horas", "12-24 horas", "48-96 horas", "6-12 horas"], correct: 0 },
                    { question: "¿Qué órgano produce bilis?", options: ["Hígado", "Páncreas", "Estómago", "Intestino"], correct: 0 },
                    { question: "¿Cuánto tiempo tarda el estómago en digerir?", options: ["2-4 horas", "30 minutos", "6-8 horas", "1 hora"], correct: 0 },
                    { question: "¿Qué hormona produce el páncreas?", options: ["Insulina", "Adrenalina", "Tiroxina", "Cortisol"], correct: 0 },
                    { question: "¿Dónde ocurre la mayor absorción de nutrientes?", options: ["Intestino delgado", "Estómago", "Boca", "Intestino grueso"], correct: 0 },
                    { question: "¿Qué ácido produce el estómago?", options: ["Ácido clorhídrico", "Ácido acético", "Ácido láctico", "Ácido cítrico"], correct: 0 },
                    { question: "¿Cuánto tiempo tarda el esófago en transportar alimentos?", options: ["10 segundos", "1 minuto", "5 minutos", "30 segundos"], correct: 0 },
                    { question: "¿Qué órgano tiene más de 500 funciones vitales?", options: ["Hígado", "Páncreas", "Corazón", "Riñón"], correct: 0 }
                ]
            },
            {
                name: "Sistema Respiratorio",
                introduction: "El sistema respiratorio permite el intercambio de gases entre el cuerpo y el ambiente. El oxígeno es esencial para la respiración celular.",
                examples: "Los pulmones contienen aproximadamente 300 millones de alvéolos, Respiración promedio: 12-20 por minuto, Capacidad pulmonar: 6 litros, Intercambio de O₂: 250 ml por minuto, Tráquea: 10-12 cm de largo, Bronquios: 2 principales, Bronquiolos: miles de ramificaciones, Diafragma: músculo principal de respiración",
                definitions: [
                    { term: "Nariz", definition: "Filtrado, calentamiento del aire" },
                    { term: "Faringe", definition: "Paso común aire/alimentos" },
                    { term: "Laringe", definition: "Producción de voz" },
                    { term: "Tráquea", definition: "Tubo cartilaginoso" },
                    { term: "Bronquios", definition: "División hacia los pulmones" },
                    { term: "Alvéolos", definition: "Intercambio de gases (O₂/CO₂)" },
                    { term: "Difusión", definition: "Oxígeno entra a sangre, CO₂ sale" }
                ],
                quiz: [
                    { question: "¿Cuántos alvéolos tienen los pulmones aproximadamente?", options: ["300 millones", "100 millones", "500 millones", "50 millones"], correct: 0 },
                    { question: "¿Cuál es la respiración promedio por minuto?", options: ["12-20", "5-10", "25-30", "30-40"], correct: 0 },
                    { question: "¿Cuál es la capacidad pulmonar promedio?", options: ["6 litros", "3 litros", "10 litros", "1 litro"], correct: 0 },
                    { question: "¿Qué estructura produce la voz?", options: ["Laringe", "Tráquea", "Bronquios", "Faringe"], correct: 0 },
                    { question: "¿Dónde ocurre el intercambio de gases?", options: ["Alvéolos", "Tráquea", "Bronquios", "Nariz"], correct: 0 },
                    { question: "¿Cuál es el músculo principal de la respiración?", options: ["Diafragma", "Intercostales", "Abdominales", "Pectorales"], correct: 0 },
                    { question: "¿Cuántos bronquios principales hay?", options: ["2", "1", "3", "4"], correct: 0 },
                    { question: "¿Qué gas entra a la sangre en los alvéolos?", options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"], correct: 0 }
                ]
            },
            {
                name: "Sistema Nervioso",
                introduction: "El sistema nervioso controla y coordina todas las funciones del cuerpo. Procesa información y genera respuestas apropiadas.",
                examples: "El cerebro contiene aproximadamente 86 mil millones de neuronas, Velocidad de señal neuronal: 120 m/s, Médula espinal: 45 cm de largo, Sinapsis: 100 trillones en el cerebro, Tiempo de reacción: 0.2 segundos, Memoria cerebral: 2.5 petabytes, Neuronas en cerebelo: 69 mil millones",
                definitions: [
                    { term: "SNC", definition: "Cerebro y médula espinal (procesamiento)" },
                    { term: "SNP", definition: "Nervios periféricos (transmisión)" },
                    { term: "Neuronas", definition: "Células nerviosas, transmisión de señales eléctricas" },
                    { term: "Sinapsis", definition: "Comunicación entre neuronas" },
                    { term: "Cerebro", definition: "Controla todas las funciones corporales" },
                    { term: "Reflejos", definition: "Respuestas automáticas" }
                ],
                quiz: [
                    { question: "¿Cuántas neuronas tiene el cerebro aproximadamente?", options: ["86 mil millones", "10 mil millones", "100 mil millones", "50 mil millones"], correct: 0 },
                    { question: "¿Cuál es la velocidad de la señal neuronal?", options: ["120 m/s", "50 m/s", "300 m/s", "20 m/s"], correct: 0 },
                    { question: "¿Qué significa SNC?", options: ["Sistema Nervioso Central", "Sistema Nervioso Cerebral", "Sistema Neuro Central", "Sistema Nervioso Completo"], correct: 0 },
                    { question: "¿Qué estructura controla todas las funciones corporales?", options: ["Cerebro", "Médula espinal", "Nervios", "Sinapsis"], correct: 0 },
                    { question: "¿Cuál es el tiempo de reacción promedio?", options: ["0.2 segundos", "0.5 segundos", "1 segundo", "2 segundos"], correct: 0 },
                    { question: "¿Qué son las sinapsis?", options: ["Comunicación entre neuronas", "Células nerviosas", "Nervios periféricos", "Reflejos"], correct: 0 },
                    { question: "¿Qué significa SNP?", options: ["Sistema Nervioso Periférico", "Sistema Nervioso Principal", "Sistema Neuro Periférico", "Sistema Nervioso Personal"], correct: 0 },
                    { question: "¿Cuántos centímetros mide la médula espinal?", options: ["45 cm", "30 cm", "60 cm", "50 cm"], correct: 0 }
                ]
            },
            {
                name: "Fotosíntesis",
                introduction: "La fotosíntesis es el proceso por el cual las plantas producen su propio alimento usando luz solar. Es la base de la cadena alimentaria terrestre.",
                examples: "Una planta puede producir su propio peso en glucosa en un día, Ecuación: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂, Clorofila: pigmento verde, Cloroplastos: organelos fotosintéticos, Fase luminosa: produce ATP y NADPH, Ciclo de Calvin: produce glucosa, Eficiencia: 1-2% de luz solar convertida, Productos: glucosa y oxígeno",
                definitions: [
                    { term: "Definición", definition: "Proceso donde plantas producen alimento usando luz solar" },
                    { term: "Ecuación", definition: "6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂" },
                    { term: "Clorofila", definition: "Pigmento que captura luz solar" },
                    { term: "Cloroplastos", definition: "Organelos donde ocurre la fotosíntesis" },
                    { term: "Fases", definition: "Reacciones luminosas y ciclo de Calvin" },
                    { term: "Importancia", definition: "Base de la cadena alimentaria, produce oxígeno" }
                ],
                quiz: [
                    { question: "¿Qué gas producen las plantas durante la fotosíntesis?", options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"], correct: 0 },
                    { question: "¿Qué pigmento captura la luz solar?", options: ["Clorofila", "Caroteno", "Xantofila", "Melanina"], correct: 0 },
                    { question: "¿Dónde ocurre la fotosíntesis?", options: ["Cloroplastos", "Mitocondrias", "Núcleo", "Ribosomas"], correct: 0 },
                    { question: "¿Qué gas necesitan las plantas para la fotosíntesis?", options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Argón"], correct: 0 },
                    { question: "¿Cuál es el producto principal de la fotosíntesis?", options: ["Glucosa", "Proteínas", "Lípidos", "Ácidos nucleicos"], correct: 0 },
                    { question: "¿Qué eficiencia tiene la fotosíntesis en convertir luz solar?", options: ["1-2%", "10-20%", "50-60%", "80-90%"], correct: 0 },
                    { question: "¿Qué fase produce ATP y NADPH?", options: ["Fase luminosa", "Ciclo de Calvin", "Fase oscura", "Fase de síntesis"], correct: 0 },
                    { question: "¿Qué ciclo produce glucosa?", options: ["Ciclo de Calvin", "Ciclo de Krebs", "Ciclo de la urea", "Ciclo de G3P"], correct: 0 }
                ]
            },
            {
                name: "Estados de la Materia",
                introduction: "La materia puede existir en diferentes estados según la temperatura y presión. Los cambios de estado son fundamentales en muchos procesos naturales.",
                examples: "El agua cambia de estado a 0°C (hielo a líquido) y 100°C (líquido a vapor), Fusión: sólido a líquido, Solidificación: líquido a sólido, Vaporización: líquido a gas, Condensación: gas a líquido, Sublimación: sólido a gas, Deposición: gas a sólido, Punto de ebullición del agua: 100°C a nivel del mar",
                definitions: [
                    { term: "Sólido", definition: "Forma y volumen definidos, partículas vibrando" },
                    { term: "Líquido", definition: "Volumen definido, forma del contenedor" },
                    { term: "Gaseoso", definition: "Sin forma ni volumen definidos" },
                    { term: "Plasma", definition: "Gas ionizado, estado más común en el universo" },
                    { term: "Cambios de estado", definition: "Fusión, solidificación, vaporización, condensación" },
                    { term: "Temperatura", definition: "0°C = punto de congelación del agua, 100°C = ebullición" }
                ],
                quiz: [
                    { question: "¿A qué temperatura se congela el agua?", options: ["0°C", "100°C", "-10°C", "10°C"], correct: 0 },
                    { question: "¿A qué temperatura hierve el agua?", options: ["100°C", "0°C", "50°C", "150°C"], correct: 0 },
                    { question: "¿Qué cambio de estado es de sólido a líquido?", options: ["Fusión", "Solidificación", "Vaporización", "Condensación"], correct: 0 },
                    { question: "¿Qué estado tiene forma y volumen definidos?", options: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correct: 0 },
                    { question: "¿Qué cambio es de líquido a gas?", options: ["Vaporización", "Fusión", "Solidificación", "Condensación"], correct: 0 },
                    { question: "¿Qué estado es gas ionizado?", options: ["Plasma", "Sólido", "Líquido", "Gaseoso"], correct: 0 },
                    { question: "¿Qué cambio es de gas a líquido?", options: ["Condensación", "Vaporización", "Fusión", "Sublimación"], correct: 0 },
                    { question: "¿Qué cambio es de sólido a gas?", options: ["Sublimación", "Fusión", "Vaporización", "Condensación"], correct: 0 }
                ]
            },
            {
                name: "Energía y Fuerzas",
                introduction: "La energía es la capacidad de realizar trabajo. Las fuerzas son interacciones que pueden causar cambios en el movimiento de los objetos.",
                examples: "La energía solar que llega a la Tierra en una hora podría satisfacer la demanda mundial anual de energía, Gravedad: 9.8 m/s² en la Tierra, Velocidad de la luz: 300,000 km/s, Energía cinética: ½mv², Energía potencial: mgh, Fuerza = masa × aceleración, Trabajo = fuerza × distancia, Potencia = trabajo / tiempo",
                definitions: [
                    { term: "Energía cinética", definition: "Energía del movimiento" },
                    { term: "Energía potencial", definition: "Energía almacenada" },
                    { term: "Gravedad", definition: "Fuerza de atracción entre masas" },
                    { term: "Fuerza electromagnética", definition: "Interacción entre cargas eléctricas" },
                    { term: "Ley de conservación", definition: "La energía no se crea ni se destruye" },
                    { term: "Ondas", definition: "Mecánicas (sonido) y electromagnéticas (luz)" },
                    { term: "Velocidad de la luz", definition: "300,000 km/s en el vacío" }
                ],
                quiz: [
                    { question: "¿Cuál es la aceleración de la gravedad en la Tierra?", options: ["9.8 m/s²", "10 m/s²", "8 m/s²", "12 m/s²"], correct: 0 },
                    { question: "¿Cuál es la velocidad de la luz?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"], correct: 0 },
                    { question: "¿Qué es la energía del movimiento?", options: ["Energía cinética", "Energía potencial", "Energía térmica", "Energía nuclear"], correct: 0 },
                    { question: "¿Cuál es la fórmula de la energía cinética?", options: ["½mv²", "mgh", "F×d", "P/t"], correct: 0 },
                    { question: "¿Qué es la energía almacenada?", options: ["Energía potencial", "Energía cinética", "Energía térmica", "Energía nuclear"], correct: 0 },
                    { question: "¿Qué dice la ley de conservación de la energía?", options: ["La energía no se crea ni se destruye", "La energía siempre se destruye", "La energía se crea de la nada", "La energía es infinita"], correct: 0 },
                    { question: "¿Cuál es la fórmula del trabajo?", options: ["fuerza × distancia", "fuerza / distancia", "fuerza + distancia", "fuerza × tiempo"], correct: 0 },
                    { question: "¿Qué tipo de onda es el sonido?", options: ["Mecánica", "Electromagnética", "Nuclear", "Química"], correct: 0 }
                ]
            }
        ]
    },
    lectura: {
        title: "Lectura y Lenguaje - Nivel Bachillerato",
        categories: [
            {
                name: "Gramática",
                introduction: "La gramática estudia las reglas que gobiernan la estructura del lenguaje. Permite comunicarnos de manera clara y efectiva.",
                examples: "El gato negro duerme (sujeto + adjetivo + sustantivo + verbo), María estudia matemáticas (sujeto + verbo + objeto), Los niños juegan en el parque (sujeto plural + verbo plural), Yo como manzanas (primera persona + verbo), Ella es inteligente (tercera persona + verbo ser), Nosotros leemos libros (primera persona plural + verbo)",
                definitions: [
                    { term: "Sustantivo", definition: "Nombre de persona, animal, cosa o idea (ej: casa, libertad)" },
                    { term: "Verbo", definition: "Acción, estado o proceso (ej: correr, ser, pensar)" },
                    { term: "Adjetivo", definition: "Cualidad del sustantivo (ej: grande, rojo, inteligente)" },
                    { term: "Adverbio", definition: "Modifica al verbo, adjetivo u otro adverbio (ej: rápidamente, muy)" },
                    { term: "Pronombre", definition: "Sustituye al sustantivo (ej: él, ella, nosotros)" },
                    { term: "Preposición", definition: "Relaciona palabras (ej: de, en, para, con)" },
                    { term: "Conjunción", definition: "Conecta oraciones (ej: y, o, pero, porque)" },
                    { term: "Artículo", definition: "Determinante (el, la, los, las, un, una)" },
                    { term: "Sinónimos", definition: "Palabras con significado similar (ej: feliz - contento)" },
                    { term: "Antónimos", definition: "Palabras con significado opuesto (ej: grande - pequeño)" }
                ],
                quiz: [
                    { question: "¿Qué parte de la oración es 'casa'?", options: ["Sustantivo", "Verbo", "Adjetivo", "Adverbio"], correct: 0 },
                    { question: "¿Qué parte de la oración es 'correr'?", options: ["Verbo", "Sustantivo", "Adjetivo", "Pronombre"], correct: 0 },
                    { question: "¿Qué parte de la oración es 'grande'?", options: ["Adjetivo", "Sustantivo", "Verbo", "Adverbio"], correct: 0 },
                    { question: "¿Qué parte de la oración es 'rápidamente'?", options: ["Adverbio", "Adjetivo", "Verbo", "Sustantivo"], correct: 0 },
                    { question: "¿Qué parte de la oración es 'él'?", options: ["Pronombre", "Sustantivo", "Verbo", "Adjetivo"], correct: 0 },
                    { question: "¿Qué conecta palabras como 'y', 'o', 'pero'?", options: ["Conjunción", "Preposición", "Artículo", "Adverbio"], correct: 0 },
                    { question: "¿Qué relaciona palabras como 'de', 'en', 'para'?", options: ["Preposición", "Conjunción", "Artículo", "Pronombre"], correct: 0 },
                    { question: "¿Qué es un sinónimo de 'feliz'?", options: ["Contento", "Triste", "Enojado", "Asustado"], correct: 0 }
                ]
            },
            {
                name: "Sintaxis",
                introduction: "La sintaxis estudia cómo se organizan las palabras para formar oraciones. Determina el orden y la relación entre los elementos de la oración.",
                examples: "El niño estudia (sujeto: El niño, predicado: estudia), Juan y María caminan (sujeto compuesto), El libro rojo está en la mesa (sujeto con adjetivo), Si llueve, me quedaré en casa (oración condicional), Quiero que vengas (oración subordinada), Corro rápido y salto alto (oración compuesta)",
                definitions: [
                    { term: "Oración", definition: "Unidad con sujeto y predicado" },
                    { term: "Sujeto", definition: "Quien realiza la acción (ej: El niño en El niño estudia)" },
                    { term: "Predicado", definition: "Lo que se dice del sujeto (ej: estudia en El niño estudia)" },
                    { term: "Tipos de oraciones", definition: "Simple, compuesta, coordinada, subordinada" },
                    { term: "Concordancia", definition: "Acuerdo entre sujeto y verbo" }
                ],
                quiz: [
                    { question: "¿Qué es el sujeto en 'El niño estudia'?", options: ["El niño", "Estudia", "Niño estudia", "La oración"], correct: 0 },
                    { question: "¿Qué es el predicado en 'El niño estudia'?", options: ["Estudia", "El niño", "Niño estudia", "La acción"], correct: 0 },
                    { question: "¿Qué tipo de oración tiene un solo verbo principal?", options: ["Simple", "Compuesta", "Coordinada", "Subordinada"], correct: 0 },
                    { question: "¿Qué es la concordancia gramatical?", options: ["Acuerdo entre sujeto y verbo", "Orden de palabras", "Uso de signos", "Puntuación"], correct: 0 },
                    { question: "¿Qué tipo de oración usa conectores como 'y', 'o'?", options: ["Coordinada", "Simple", "Subordinada", "Imperativa"], correct: 0 },
                    { question: "¿Qué tipo de oración tiene una oración dependiente?", options: ["Subordinada", "Simple", "Coordinada", "Exclamativa"], correct: 0 },
                    { question: "¿Cuántos sujetos tiene 'Juan y María caminan'?", options: ["Compuesto", "Simple", "Doble", "Múltiple"], correct: 0 },
                    { question: "¿Qué es una oración compuesta?", options: ["Tiene más de un verbo principal", "Tiene un solo verbo", "Es muy larga", "Es corta"], correct: 0 }
                ]
            },
            {
                name: "Ortografía",
                introduction: "La ortografía establece las reglas correctas para escribir las palabras. Es fundamental para una comunicación escrita efectiva.",
                examples: "Hacer (con h), vaca (con v), gitano (con g), Héroe (con h), Hierro (con h), Lluvia (con ll), Valla (con v), Yegua (con y), Geografía (con g), Jirafa (con j)",
                definitions: [
                    { term: "Reglas generales", definition: "Uso de b, v, g, j, h, ll, y" },
                    { term: "Acentuación", definition: "Agudas, graves, esdrújulas" },
                    { term: "Tilde diacrítica", definition: "Diferencia palabras (ej: tú/tu, sí/si)" },
                    { term: "Signos de puntuación", definition: "Punto, coma, punto y coma, dos puntos, etc." },
                    { term: "Mayúsculas", definition: "Nombres propios, inicio de oración" }
                ],
                quiz: [
                    { question: "¿Qué palabra se escribe con h?", options: ["Hacer", "Aser", "Haser", "Asir"], correct: 0 },
                    { question: "¿Qué palabra se escribe con v?", options: ["Vaca", "Baca", "Vaca/Baca", "Baca/Vaca"], correct: 0 },
                    { question: "¿Qué palabra se escribe con g?", options: ["Gitano", "Jitano", "Gitano/Jitano", "Jitano/Gitano"], correct: 0 },
                    { question: "¿Qué palabra se escribe con j?", options: ["Jirafa", "Girafa", "Jirafa/Girafa", "Girafa/Jirafa"], correct: 0 },
                    { question: "¿Qué tipo de palabra lleva tilde en la penúltima sílaba?", options: ["Grave", "Aguda", "Esdrújula", "Monosílaba"], correct: 0 },
                    { question: "¿Qué tipo de palabra lleva tilde en la última sílaba?", options: ["Aguda", "Grave", "Esdrújula", "Monosílaba"], correct: 0 },
                    { question: "¿Qué tipo de palabra lleva tilde siempre?", options: ["Esdrújula", "Aguda", "Grave", "Monosílaba"], correct: 0 },
                    { question: "¿Qué diferencia 'tú' de 'tu'?", options: ["Tú es pronombre, tu es adjetivo", "Tu es pronombre, tú es adjetivo", "Son iguales", "No hay diferencia"], correct: 0 }
                ]
            },
            {
                name: "Literatura",
                introduction: "La literatura es el arte de la palabra escrita. Incluye diferentes géneros y formas de expresión artística a través del lenguaje.",
                examples: "Don Quijote (novela), Romeo y Julieta (teatro), La Odisea (epopeya), Cien años de soledad (novela), Hamlet (teatro), La Iliada (epopeya), El Principito (fábula), Lazarillo de Tormes (picaresca), Fausto (drama), Divina Comedia (poema épico)",
                definitions: [
                    { term: "Géneros literarios", definition: "Narrativa (cuentos, novelas), Lírica (poesía), Dramática (teatro)" },
                    { term: "Subgéneros narrativos", definition: "Fábula, leyenda, mito, cuento, novela" },
                    { term: "Fábula", definition: "Historia breve con moraleja, personajes personificados" },
                    { term: "Leyenda", definition: "Tradición con elementos sobrenaturales" },
                    { term: "Biografía", definition: "Vida de una persona escrita por otro" },
                    { term: "Autobiografía", definition: "Vida escrita por el propio autor" },
                    { term: "Ensayo", definition: "Texto que expone ideas o argumentos" },
                    { term: "Poema", definition: "Texto en verso, ritmo y métrica" },
                    { term: "Haiku", definition: "Poema japonés breve (5-7-5 sílabas)" },
                    { term: "Epigrama", definition: "Poema breve satírico" }
                ],
                quiz: [
                    { question: "¿Qué género incluye cuentos y novelas?", options: ["Narrativa", "Lírica", "Dramática", "Epopeya"], correct: 0 },
                    { question: "¿Qué género incluye poesía?", options: ["Lírica", "Narrativa", "Dramática", "Fábula"], correct: 0 },
                    { question: "¿Qué género incluye teatro?", options: ["Dramática", "Narrativa", "Lírica", "Mito"], correct: 0 },
                    { question: "¿Qué subgénero tiene moraleja?", options: ["Fábula", "Leyenda", "Mito", "Epopeya"], correct: 0 },
                    { question: "¿Qué tipo de relato tiene elementos sobrenaturales?", options: ["Leyenda", "Fábula", "Mito", "Cuento"], correct: 0 },
                    { question: "¿Qué narra sobre dioses y héroes?", options: ["Mito", "Leyenda", "Fábula", "Epopeya"], correct: 0 },
                    { question: "¿Qué es un poema largo sobre hazañas heroicas?", options: ["Epopeya", "Fábula", "Leyenda", "Mito"], correct: 0 },
                    { question: "¿Qué es Don Quijote?", options: ["Novela", "Poema", "Teatro", "Fábula"], correct: 0 }
                ]
            },
            {
                name: "Comprensión Lectora",
                introduction: "La comprensión lectora es la capacidad de entender, interpretar y extraer significado de los textos escritos. Aprenderás a leer textos completos y responder preguntas basadas en su contenido, identificando ideas principales, detalles, inferencias y vocabulario contextual.",
                examples: "LECTURA 1: El sol es la estrella más cercana a la Tierra. Proporciona luz y calor esenciales para la vida. La energía solar es renovable y no contamina. Los paneles solares convierten esta energía en electricidad. PREGUNTAS: ¿Qué es el sol? (Estrella más cercana a la Tierra). ¿Qué proporciona el sol? (Luz y calor). ¿Por qué es importante la energía solar? (Es renovable y no contamina). LECTURA 2: Los árboles son vitales para el planeta. Producen oxígeno mediante la fotosíntesis. Absorben dióxido de carbono. Proporcionan hogar a muchos animales. Protegen el suelo de la erosión. PREGUNTAS: ¿Qué producen los árboles? (Oxígeno). ¿Qué gas absorben? (Dióxido de carbono). ¿Qué función tienen los árboles para los animales? (Proporcionan hogar).",
                definitions: [
                    { term: "Niveles de comprensión", definition: "Literal (información explícita), Inferencial (deducciones), Crítico (evaluación y opinión)" },
                    { term: "Idea principal", definition: "Tema central del texto, lo más importante que el autor quiere comunicar" },
                    { term: "Ideas secundarias", definition: "Detalles, ejemplos y explicaciones que apoyan la idea principal" },
                    { term: "Inferencia", definition: "Deducción de información implícita o sugerida en el texto, no explícitamente stated" },
                    { term: "Vocabulario contextual", definition: "Determinar el significado de palabras desconocidas usando el contexto del texto" },
                    { term: "Estructura textual", definition: "Organización del texto: Introducción (presenta el tema), Desarrollo (explica el tema), Conclusión (resume y cierra)" },
                    { term: "Propósito del autor", definition: "Intención del autor: informar, persuadir, entretener, explicar" },
                    { term: "Secuencia cronológica", definition: "Orden de eventos en el tiempo, palabras clave: primero, luego, después, finalmente" },
                    { term: "Causa y efecto", definition: "Relación entre un evento (causa) y su resultado (efecto)" }
                ],
                quiz: [
                    { question: "LECTURA: 'El agua es esencial para la vida. El cuerpo humano es 60% agua. Necesitamos beber agua diariamente. La deshidratación puede ser peligrosa.' ¿Qué porcentaje del cuerpo humano es agua?", options: ["60%", "50%", "70%", "80%"], correct: 0 },
                    { question: "LECTURA: 'El agua es esencial para la vida. El cuerpo humano es 60% agua. Necesitamos beber agua diariamente. La deshidratación puede ser peligrosa.' ¿Qué puede ser peligroso?", options: ["La deshidratación", "Beber agua", "El cuerpo humano", "La vida"], correct: 0 },
                    { question: "LECTURA: 'Los libros nos transportan a otros mundos. Cada página es una aventura. Leer mejora el vocabulario y la concentración. La lectura es un hábito beneficioso.' ¿Qué mejora la lectura?", options: ["Vocabulario y concentración", "Solo vocabulario", "Solo concentración", "Nada"], correct: 0 },
                    { question: "LECTURA: 'Los libros nos transportan a otros mundos. Cada página es una aventura. Leer mejora el vocabulario y la concentración. La lectura es un hábito beneficioso.' ¿Qué es cada página?", options: ["Una aventura", "Un mundo", "Un libro", "Un hábito"], correct: 0 },
                    { question: "LECTURA: 'El ejercicio regular fortalece el corazón. Mejora la circulación sanguínea. Ayuda a mantener un peso saludable. Reduce el estrés y mejora el estado de ánimo.' ¿Qué fortalece el ejercicio?", options: ["El corazón", "Los músculos", "Los huesos", "El cerebro"], correct: 0 },
                    { question: "LECTURA: 'El ejercicio regular fortalece el corazón. Mejora la circulación sanguínea. Ayuda a mantener un peso saludable. Reduce el estrés y mejora el estado de ánimo.' ¿Qué reduce el ejercicio?", options: ["El estrés", "El peso", "La circulación", "El corazón"], correct: 0 },
                    { question: "LECTURA: 'La tecnología ha transformado la comunicación. Ahora podemos hablar con personas en cualquier parte del mundo. Las redes sociales conectan a millones. Sin embargo, el uso excesivo puede ser perjudicial.' ¿Qué ha transformado la tecnología?", options: ["La comunicación", "El mundo", "Las redes sociales", "El uso excesivo"], correct: 0 },
                    { question: "LECTURA: 'La tecnología ha transformado la comunicación. Ahora podemos hablar con personas en cualquier parte del mundo. Las redes sociales conectan a millones. Sin embargo, el uso excesivo puede ser perjudicial.' ¿Qué puede ser perjudicial?", options: ["El uso excesivo", "La comunicación", "Las redes sociales", "Hablar con personas"], correct: 0 }
                ]
            },
            {
                name: "Figuras Literarias",
                introduction: "Las figuras literarias son recursos expresivos que embellecen el lenguaje y añaden profundidad y significado al texto.",
                examples: "Eres un ángel (metáfora), Eres valiente como un león (símil), Tengo mil cosas que hacer (hipérbole), El viento susurra (personificación), Susurros de seda (aliteración), El reloj tic-tac (onomatopeya), Joven viejo (paradoja), Qué buen trabajo (ironía)",
                definitions: [
                    { term: "Metáfora", definition: "Comparación sin como (ej: Eres un ángel)" },
                    { term: "Símil", definition: "Comparación con como (ej: Eres valiente como un león)" },
                    { term: "Hipérbole", definition: "Exageración (ej: Tengo mil cosas que hacer)" },
                    { term: "Personificación", definition: "Dar cualidades humanas (ej: El viento susurra)" },
                    { term: "Aliteración", definition: "Repetición de sonidos" },
                    { term: "Onomatopeya", definition: "Imitación de sonidos (ej: clic, mu)" },
                    { term: "Paradoja", definition: "Contradicción aparente" },
                    { term: "Ironía", definition: "Decir lo contrario de lo que se piensa" },
                    { term: "Sátira", definition: "Crítica humorística" }
                ],
                quiz: [
                    { question: "¿Qué figura literaria es 'Eres un ángel'?", options: ["Metáfora", "Símil", "Hipérbole", "Personificación"], correct: 0 },
                    { question: "¿Qué figura literaria es 'Eres valiente como un león'?", options: ["Símil", "Metáfora", "Hipérbole", "Ironía"], correct: 0 },
                    { question: "¿Qué figura literaria es 'Tengo mil cosas que hacer'?", options: ["Hipérbole", "Metáfora", "Símil", "Personificación"], correct: 0 },
                    { question: "¿Qué figura literaria es 'El viento susurra'?", options: ["Personificación", "Metáfora", "Símil", "Hipérbole"], correct: 0 },
                    { question: "¿Qué figura literaria es 'El reloj tic-tac'?", options: ["Onomatopeya", "Personificación", "Metáfora", "Símil"], correct: 0 },
                    { question: "¿Qué figura literaria es 'Joven viejo'?", options: ["Paradoja", "Metáfora", "Símil", "Hipérbole"], correct: 0 },
                    { question: "¿Qué figura literaria es 'Qué buen trabajo' (cuando es malo)?", options: ["Ironía", "Metáfora", "Símil", "Personificación"], correct: 0 },
                    { question: "¿Qué figura literaria es 'Susurros de seda'?", options: ["Aliteración", "Onomatopeya", "Metáfora", "Símil"], correct: 0 }
                ]
            },
            {
                name: "Géneros Literarios",
                introduction: "Los géneros literarios clasifican las obras literarias según sus características y propósitos.",
                examples: "Novela (narrativa larga), Poema (lírica breve), Obra de teatro (dramática), Ensayo (argumentativo), Cuento (narrativa breve), Epopeya (poema largo), Fábula (narrativa con moraleja), Crónica (relato de hechos)",
                definitions: [
                    { term: "Narrativa", definition: "Relata hechos reales o ficticios" },
                    { term: "Poesía", definition: "Expresa sentimientos, usa verso" },
                    { term: "Teatro", definition: "Obra representable, diálogos" },
                    { term: "Ensayo", definition: "Opinión argumentada sobre un tema" }
                ],
                quiz: [
                    { question: "¿Qué género relata hechos reales o ficticios?", options: ["Narrativa", "Poesía", "Teatro", "Ensayo"], correct: 0 },
                    { question: "¿Qué género expresa sentimientos y usa verso?", options: ["Poesía", "Narrativa", "Teatro", "Ensayo"], correct: 0 },
                    { question: "¿Qué género es una obra representable con diálogos?", options: ["Teatro", "Narrativa", "Poesía", "Ensayo"], correct: 0 },
                    { question: "¿Qué género presenta opinión argumentada?", options: ["Ensayo", "Narrativa", "Poesía", "Teatro"], correct: 0 },
                    { question: "¿Qué es una novela?", options: ["Narrativa larga", "Poesía breve", "Obra de teatro", "Ensayo corto"], correct: 0 },
                    { question: "¿Qué es un cuento?", options: ["Narrativa breve", "Poesía larga", "Obra de teatro", "Ensayo"], correct: 0 },
                    { question: "¿Qué es una epopeya?", options: ["Poema largo", "Narrativa breve", "Obra de teatro", "Ensayo"], correct: 0 },
                    { question: "¿Qué es una fábula?", options: ["Narrativa con moraleja", "Poesía sin moraleja", "Obra de teatro", "Ensayo"], correct: 0 }
                ]
            },
            {
                name: "Tipos de Texto",
                introduction: "Los tipos de texto se clasifican según su propósito y estructura. Cada tipo tiene características específicas.",
                examples: "Noticia (informa), Receta (instruye), Cuento (narra), Descripción (detalla), Carta (comunica), Anuncio (persuade), Reporte (expone), Editorial (opina)",
                definitions: [
                    { term: "Narrativo", definition: "Cuenta una historia" },
                    { term: "Descriptivo", definition: "Detalla características" },
                    { term: "Expositivo", definition: "Explica información" },
                    { term: "Argumentativo", definition: "Defiende una opinión" },
                    { term: "Instructivo", definition: "Da instrucciones" },
                    { term: "Noticia", definition: "Informa hechos recientes" }
                ],
                quiz: [
                    { question: "¿Qué tipo de texto cuenta una historia?", options: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo"], correct: 0 },
                    { question: "¿Qué tipo de texto detalla características?", options: ["Descriptivo", "Narrativo", "Expositivo", "Instructivo"], correct: 0 },
                    { question: "¿Qué tipo de texto explica información?", options: ["Expositivo", "Narrativo", "Descriptivo", "Argumentativo"], correct: 0 },
                    { question: "¿Qué tipo de texto defiende una opinión?", options: ["Argumentativo", "Narrativo", "Descriptivo", "Expositivo"], correct: 0 },
                    { question: "¿Qué tipo de texto da instrucciones?", options: ["Instructivo", "Narrativo", "Descriptivo", "Expositivo"], correct: 0 },
                    { question: "¿Qué tipo de texto informa hechos recientes?", options: ["Noticia", "Cuento", "Ensayo", "Poema"], correct: 0 },
                    { question: "¿Qué tipo de texto es una receta?", options: ["Instructivo", "Narrativo", "Descriptivo", "Argumentativo"], correct: 0 },
                    { question: "¿Qué tipo de texto es una carta?", options: ["Comunicativo", "Narrativo", "Descriptivo", "Expositivo"], correct: 0 }
                ]
            },
            {
                name: "Análisis de Texto",
                introduction: "El análisis de texto examina la estructura, coherencia y cohesión de un texto para entender su construcción y significado.",
                examples: "Identificar la tesis principal de un ensayo, Analizar la estructura de un párrafo, Evaluar la coherencia del texto, Identificar conectores lógicos, Determinar el registro del autor, Analizar el tono del texto, Identificar figuras literarias",
                definitions: [
                    { term: "Estructura", definition: "Organización del texto" },
                    { term: "Cohesión", definition: "Conexión entre ideas" },
                    { term: "Coherencia", definition: "Lógica del texto" },
                    { term: "Intención comunicativa", definition: "Propósito del autor" },
                    { term: "Registro", definition: "Formal, informal, técnico" }
                ],
                quiz: [
                    { question: "¿Qué es la estructura de un texto?", options: ["Organización del texto", "Conexión entre ideas", "Lógica del texto", "Propósito del autor"], correct: 0 },
                    { question: "¿Qué es la cohesión en un texto?", options: ["Conexión entre ideas", "Organización del texto", "Lógica del texto", "Registro del autor"], correct: 0 },
                    { question: "¿Qué es la coherencia en un texto?", options: ["Lógica del texto", "Conexión entre ideas", "Organización del texto", "Registro del autor"], correct: 0 },
                    { question: "¿Qué es la intención comunicativa?", options: ["Propósito del autor", "Organización del texto", "Conexión entre ideas", "Lógica del texto"], correct: 0 },
                    { question: "¿Qué es el registro de un texto?", options: ["Formal, informal, técnico", "Organización del texto", "Conexión entre ideas", "Lógica del texto"], correct: 0 },
                    { question: "¿Qué conecta ideas en un texto?", options: ["Conectores lógicos", "Registro", "Estructura", "Coherencia"], correct: 0 },
                    { question: "¿Qué analiza el tono del texto?", options: ["Actitud del autor", "Organización", "Conexión", "Lógica"], correct: 0 },
                    { question: "¿Qué es la tesis de un ensayo?", options: ["Idea principal", "Detalle secundario", "Conclusión", "Introducción"], correct: 0 }
                ]
            },
            {
                name: "Redacción",
                introduction: "La redacción es el arte de escribir textos de manera clara, coherente y efectiva. Incluye la organización de ideas y el uso adecuado del lenguaje.",
                examples: "Escribir un ensayo con introducción, desarrollo y conclusión, Usar conectores para unir ideas, Mantener coherencia temática, Aplicar concordancia gramatical, Estructurar párrafos correctamente, Usar vocabulario apropiado, Revisar y corregir el texto",
                definitions: [
                    { term: "Párrafo", definition: "Unidad de texto con idea principal" },
                    { term: "Estructura del párrafo", definition: "Tópico, desarrollo, conclusión" },
                    { term: "Conectores", definition: "Palabras que unen ideas" },
                    { term: "Claridad", definition: "Expresarse de forma comprensible" },
                    { term: "Precisión", definition: "Usar palabras adecuadas" }
                ],
                quiz: [
                    { question: "¿Qué es un párrafo?", options: ["Unidad de texto con idea principal", "Oración larga", "Lista de palabras", "Página completa"], correct: 0 },
                    { question: "¿Cuál es la estructura del párrafo?", options: ["Tópico, desarrollo, conclusión", "Inicio, medio, fin", "Introducción, cuerpo, conclusión", "Pregunta, respuesta, conclusión"], correct: 0 },
                    { question: "¿Qué son los conectores?", options: ["Palabras que unen ideas", "Párrafos largos", "Oraciones cortas", "Sinónimos"], correct: 0 },
                    { question: "¿Qué es la claridad en la redacción?", options: ["Expresarse de forma comprensible", "Usar palabras difíciles", "Escribir mucho", "Usar sinónimos"], correct: 0 },
                    { question: "¿Qué es la precisión en la redacción?", options: ["Usar palabras adecuadas", "Escribir rápido", "Usar conectores", "Estructurar párrafos"], correct: 0 },
                    { question: "¿Qué es la coherencia temática?", options: ["Mantener el tema consistente", "Cambiar de tema", "Usar conectores", "Escribir párrafos"], correct: 0 },
                    { question: "¿Qué es la concordancia gramatical?", options: ["Acuerdo entre sujeto y verbo", "Uso de conectores", "Estructura de párrafo", "Vocabulario adecuado"], correct: 0 },
                    { question: "¿Qué estructura tiene un ensayo?", options: ["Introducción, desarrollo, conclusión", "Párrafo único", "Lista de ideas", "Pregunta y respuesta"], correct: 0 }
                ]
            }
        ]
    },
    programacion: {
        title: "Programación - Nivel Bachillerato",
        categories: [
            {
                name: "HTML (HyperText Markup Language)",
                introduction: "HTML es el lenguaje de marcado estándar para crear páginas web. Define la estructura y el contenido de una página web.",
                examples: "<p>Hola Mundo</p> crea un párrafo con texto, <h1>Título</h1> crea un título grande, <a href='url'>Enlace</a> crea un enlace, <img src='imagen.jpg'> muestra una imagen, <div> es un contenedor, <ul><li>Item</li></ul> crea una lista, <form> crea un formulario, <input type='text'> crea campo de texto",
                definitions: [
                    { term: "Definición", definition: "Lenguaje de marcado para estructura de páginas web" },
                    { term: "Estructura básica", definition: "<!DOCTYPE html>, <html>, <head>, <body>" },
                    { term: "<p>", definition: "Párrafo" },
                    { term: "<h1> a <h6>", definition: "Títulos (h1 más importante)" },
                    { term: "<a>", definition: "Enlaces (href=url)" },
                    { term: "<img>", definition: "Imágenes (src=ruta, alt=texto)" },
                    { term: "<div>", definition: "Contenedor genérico" },
                    { term: "<span>", definition: "Contenedor en línea" },
                    { term: "<ul>/<ol>", definition: "Listas (no ordenada/ordenada)" },
                    { term: "<li>", definition: "Elemento de lista" },
                    { term: "<table>", definition: "Tablas" },
                    { term: "<form>", definition: "Formularios" },
                    { term: "<button>", definition: "Botones" },
                    { term: "<input>", definition: "Campos de entrada" },
                    { term: "<script>", definition: "Código JavaScript" },
                    { term: "Atributos", definition: "id, class, style, etc." },
                    { term: "Semántica", definition: "Uso apropiado de etiquetas para significado" }
                ],
                quiz: [
                    { question: "¿Qué etiqueta crea un párrafo?", options: ["<p>", "<div>", "<span>", "<h1>"], correct: 0 },
                    { question: "¿Qué etiqueta crea un título grande?", options: ["<h1>", "<p>", "<div>", "<span>"], correct: 0 },
                    { question: "¿Qué etiqueta crea un enlace?", options: ["<a>", "<link>", "<href>", "<url>"], correct: 0 },
                    { question: "¿Qué etiqueta muestra una imagen?", options: ["<img>", "<image>", "<pic>", "<photo>"], correct: 0 },
                    { question: "¿Qué atributo se usa para la URL en un enlace?", options: ["href", "src", "link", "url"], correct: 0 },
                    { question: "¿Qué atributo se usa para la ruta de una imagen?", options: ["src", "href", "alt", "path"], correct: 0 },
                    { question: "¿Qué etiqueta es un contenedor genérico?", options: ["<div>", "<p>", "<span>", "<h1>"], correct: 0 },
                    { question: "¿Qué etiqueta crea una lista no ordenada?", options: ["<ul>", "<ol>", "<li>", "<list>"], correct: 0 }
                ]
            },
            {
                name: "CSS (Cascading Style Sheets)",
                introduction: "CSS es el lenguaje de estilos para diseñar y presentar páginas web. Controla el aspecto visual de los elementos HTML.",
                examples: "color: red; cambia el color del texto a rojo, background: blue; cambia el fondo a azul, font-size: 20px; cambia el tamaño de fuente, margin: 10px; agrega espacio externo, padding: 15px; agrega espacio interno, border: 1px solid black; agrega borde, display: flex; usa flexbox, position: absolute; posiciona absolutamente",
                definitions: [
                    { term: "Definición", definition: "Lenguaje para estilos y diseño visual" },
                    { term: "Selectores", definition: "Por etiqueta, clase, id, atributo" },
                    { term: "color", definition: "Color del texto" },
                    { term: "background-color", definition: "Color de fondo" },
                    { term: "font-size", definition: "Tamaño de fuente" },
                    { term: "margin", definition: "Espacio externo" },
                    { term: "padding", definition: "Espacio interno" },
                    { term: "border", definition: "Borde" },
                    { term: "display", definition: "Tipo de visualización" },
                    { term: "position", definition: "Posicionamiento" },
                    { term: "Box Model", definition: "Contenido, padding, border, margin" },
                    { term: "Flexbox", definition: "Diseño flexible" },
                    { term: "Grid", definition: "Diseño en cuadrícula" },
                    { term: "Responsive", definition: "Media queries para diferentes dispositivos" }
                ],
                quiz: [
                    { question: "¿Qué propiedad cambia el color del texto?", options: ["color", "background-color", "font-color", "text-color"], correct: 0 },
                    { question: "¿Qué propiedad cambia el color de fondo?", options: ["background-color", "color", "font-color", "text-color"], correct: 0 },
                    { question: "¿Qué propiedad cambia el tamaño de fuente?", options: ["font-size", "text-size", "size", "font-height"], correct: 0 },
                    { question: "¿Qué propiedad agrega espacio externo?", options: ["margin", "padding", "border", "spacing"], correct: 0 },
                    { question: "¿Qué propiedad agrega espacio interno?", options: ["padding", "margin", "border", "spacing"], correct: 0 },
                    { question: "¿Qué propiedad usa flexbox?", options: ["display: flex", "flexbox: true", "display: box", "flex: on"], correct: 0 },
                    { question: "¿Qué propiedad posiciona absolutamente?", options: ["position: absolute", "position: fixed", "position: relative", "position: static"], correct: 0 },
                    { question: "¿Qué propiedad agrega un borde?", options: ["border", "outline", "stroke", "frame"], correct: 0 }
                ]
            },
            {
                name: "JavaScript Básico",
                introduction: "JavaScript es un lenguaje de programación que permite crear contenido dinámico e interactivo en páginas web.",
                examples: "alert('Hola') muestra una alerta con el mensaje, console.log('texto') imprime en consola, document.getElementById('id') selecciona elemento, document.querySelector('.class') selecciona por clase, Math.random() genera número aleatorio, setTimeout(() => {}, 1000) ejecuta después de 1 segundo, setInterval(() => {}, 1000) ejecuta cada segundo",
                definitions: [
                    { term: "Definición", definition: "Lenguaje de programación para interactividad web" },
                    { term: "Comentarios", definition: "// (una línea), /* */ (múltiples líneas)" },
                    { term: "Operadores aritméticos", definition: "+, -, *, /, %" },
                    { term: "Operadores de comparación", definition: "==, ===, !=, !==" },
                    { term: "Operadores lógicos", definition: "&&, ||, !" },
                    { term: "Concatenación", definition: "'5' + 5 = '55'" },
                    { term: "Typeof", definition: "Operador para conocer el tipo de dato" },
                    { term: "Conversión", definition: "parseInt(), parseFloat(), String()" },
                    { term: "Métodos de string", definition: "length, toUpperCase(), toLowerCase(), split()" },
                    { term: "Métodos matemáticos", definition: "Math.floor(), Math.ceil(), Math.random(), Math.round()" },
                    { term: "Temporizadores", definition: "setTimeout(), setInterval()" },
                    { term: "LocalStorage", definition: "Almacenamiento local en el navegador" }
                ],
                quiz: [
                    { question: "¿Qué función muestra una alerta?", options: ["alert()", "console.log()", "prompt()", "confirm()"], correct: 0 },
                    { question: "¿Qué función imprime en consola?", options: ["console.log()", "alert()", "prompt()", "print()"], correct: 0 },
                    { question: "¿Qué método selecciona un elemento por ID?", options: ["document.getElementById()", "document.querySelector()", "document.select()", "document.find()"], correct: 0 },
                    { question: "¿Qué método selecciona por clase?", options: ["document.querySelector()", "document.getElementById()", "document.select()", "document.find()"], correct: 0 },
                    { question: "¿Qué función genera un número aleatorio?", options: ["Math.random()", "Math.random", "random()", "Math.rand()"], correct: 0 },
                    { question: "¿Qué función ejecuta código después de un tiempo?", options: ["setTimeout()", "setInterval()", "delay()", "wait()"], correct: 0 },
                    { question: "¿Qué función ejecuta código repetidamente?", options: ["setInterval()", "setTimeout()", "repeat()", "loop()"], correct: 0 },
                    { question: "¿Qué operador es el módulo?", options: ["%", "/", "//", "mod"], correct: 0 }
                ]
            },
            {
                name: "Variables y Tipos",
                introduction: "Las variables son contenedores para almacenar datos. JavaScript tiene diferentes tipos de datos para diferentes propósitos.",
                examples: "let nombre = 'Juan'; const edad = 25; var antiguo = 'valor'; let numero = 42; let decimal = 3.14; let booleano = true; let nulo = null; let indefinido = undefined; let arreglo = [1, 2, 3]; let objeto = {clave: valor};",
                definitions: [
                    { term: "Declaración", definition: "let (reassignable), const (constante), var (antiguo)" },
                    { term: "string", definition: "Texto (hola)" },
                    { term: "number", definition: "Números (42, 3.14)" },
                    { term: "boolean", definition: "true/false" },
                    { term: "undefined", definition: "Sin valor definido" },
                    { term: "null", definition: "Valor nulo intencional" },
                    { term: "Tipos de referencia", definition: "object, array, function" },
                    { term: "Casting", definition: "Conversión implícita y explícita de tipos" }
                ],
                quiz: [
                    { question: "¿Qué palabra clave declara una variable reasignable?", options: ["let", "const", "var", "variable"], correct: 0 },
                    { question: "¿Qué palabra clave declara una constante?", options: ["const", "let", "var", "final"], correct: 0 },
                    { question: "¿Qué tipo de dato es 'hola'?", options: ["string", "number", "boolean", "object"], correct: 0 },
                    { question: "¿Qué tipo de dato es 42?", options: ["number", "string", "boolean", "object"], correct: 0 },
                    { question: "¿Qué tipo de dato es true?", options: ["boolean", "string", "number", "object"], correct: 0 },
                    { question: "¿Qué tipo de dato es null?", options: ["Valor nulo intencional", "Sin valor definido", "Texto vacío", "Número cero"], correct: 0 },
                    { question: "¿Qué tipo de dato es undefined?", options: ["Sin valor definido", "Valor nulo intencional", "Texto vacío", "Número cero"], correct: 0 },
                    { question: "¿Qué tipo de dato es [1, 2, 3]?", options: ["array", "object", "string", "number"], correct: 0 }
                ]
            },
            {
                name: "Funciones",
                introduction: "Las funciones son bloques de código reutilizables que realizan una tarea específica. Son fundamentales para la programación modular.",
                examples: "function saludar() { return 'Hola'; }, const suma = (a, b) => a + b; function restar(x, y) { return x - y; }, const multiplicar = function(a, b) { return a * b; }, function dividir(a, b) { return a / b; }, const cuadrado = n => n * n;",
                definitions: [
                    { term: "Definición", definition: "Bloque de código reutilizable" },
                    { term: "Declaración", definition: "function nombre() { }" },
                    { term: "Expresión", definition: "const nombre = function() { }" },
                    { term: "Arrow function", definition: "const nombre = () => { }" },
                    { term: "Parámetros", definition: "Valores de entrada" },
                    { term: "Return", definition: "Valor de retorno" },
                    { term: "Callback", definition: "Función pasada como parámetro" },
                    { term: "Scope", definition: "Ámbito de las variables" }
                ],
                quiz: [
                    { question: "¿Cómo se declara una función tradicional?", options: ["function nombre() { }", "const nombre = () => { }", "const nombre = function() { }", "Todas las anteriores"], correct: 0 },
                    { question: "¿Qué es una arrow function?", options: ["const nombre = () => { }", "function nombre() { }", "const nombre = function() { }", "function => nombre() { }"], correct: 0 },
                    { question: "¿Qué palabra clave devuelve un valor?", options: ["return", "yield", "output", "result"], correct: 0 },
                    { question: "¿Qué es un parámetro?", options: ["Valor de entrada", "Valor de retorno", "Variable local", "Variable global"], correct: 0 },
                    { question: "¿Qué es un callback?", options: ["Función pasada como parámetro", "Función que retorna", "Función recursiva", "Función anónima"], correct: 0 },
                    { question: "¿Qué es el scope de una variable?", options: ["Ámbito de las variables", "Tipo de dato", "Valor de retorno", "Parámetro"], correct: 0 },
                    { question: "¿Qué es una función de expresión?", options: ["const nombre = function() { }", "function nombre() { }", "const nombre = () => { }", "function => nombre() { }"], correct: 0 },
                    { question: "¿Qué es una función sin nombre?", options: ["Función anónima", "Función arrow", "Función callback", "Función recursiva"], correct: 0 }
                ]
            },
            {
                name: "Estructuras de Control",
                introduction: "Las estructuras de control permiten que el programa tome decisiones y repita acciones según condiciones específicas.",
                examples: "if (edad >= 18) { console.log('Mayor de edad'); }, if (x > 10) { } else { }, switch (opcion) { case 1: break; }, for (let i = 0; i < 10; i++) { }, while (condicion) { }, do { } while (condicion);, for (let item of array) { }, for (let key in objeto) { }, condicion ? true : false",
                definitions: [
                    { term: "if/else", definition: "Ejecución condicional" },
                    { term: "else if", definition: "Múltiples condiciones" },
                    { term: "switch", definition: "Selección múltiple" },
                    { term: "Operador ternario", definition: "condición ? true : false" },
                    { term: "for", definition: "Bucle con contador" },
                    { term: "while", definition: "Bucle mientras condición sea true" },
                    { term: "do...while", definition: "Ejecuta al menos una vez" },
                    { term: "for...of", definition: "Iterar elementos" },
                    { term: "for...in", definition: "Iterar propiedades" },
                    { term: "Break", definition: "Salir del bucle" },
                    { term: "Continue", definition: "Saltar a la siguiente iteración" }
                ],
                quiz: [
                    { question: "¿Qué estructura ejecuta código condicionalmente?", options: ["if/else", "for", "while", "switch"], correct: 0 },
                    { question: "¿Qué estructura repite código con un contador?", options: ["for", "if", "while", "switch"], correct: 0 },
                    { question: "¿Qué estructura repite código mientras una condición sea true?", options: ["while", "for", "if", "switch"], correct: 0 },
                    { question: "¿Qué estructura permite selección múltiple?", options: ["switch", "if", "for", "while"], correct: 0 },
                    { question: "¿Qué es el operador ternario?", options: ["condición ? true : false", "if/else", "switch", "for"], correct: 0 },
                    { question: "¿Qué estructura ejecuta al menos una vez?", options: ["do...while", "while", "for", "if"], correct: 0 },
                    { question: "¿Qué palabra clave salta a la siguiente iteración?", options: ["continue", "break", "return", "exit"], correct: 0 },
                    { question: "¿Qué palabra clave termina un bucle?", options: ["break", "continue", "return", "exit"], correct: 0 }
                ]
            },
            {
                name: "Arrays",
                introduction: "Los arrays son listas ordenadas de elementos. Permiten almacenar múltiples valores en una sola variable.",
                examples: "const numeros = [1, 2, 3, 4, 5]; numeros.push(6); numeros.pop(); numeros.shift(); numeros.unshift(0); numeros.map(x => x * 2); numeros.filter(x => x > 2); numeros.reduce((a, b) => a + b); numeros.find(x => x === 3); numeros.indexOf(3); numeros.length",
                definitions: [
                    { term: "Definición", definition: "Lista ordenada de elementos [1, 2, 3]" },
                    { term: "push()", definition: "Agregar al final" },
                    { term: "pop()", definition: "Eliminar del final" },
                    { term: "shift()", definition: "Eliminar del inicio" },
                    { term: "unshift()", definition: "Agregar al inicio" },
                    { term: "map()", definition: "Transformar cada elemento" },
                    { term: "filter()", definition: "Filtrar elementos" },
                    { term: "reduce()", definition: "Reducir a un valor" },
                    { term: "find()", definition: "Encontrar elemento" },
                    { term: "indexOf()", definition: "Índice de elemento" },
                    { term: "length", definition: "Cantidad de elementos" },
                    { term: "Acceso", definition: "array[indice] (índice empieza en 0)" }
                ],
                quiz: [
                    { question: "¿Qué método agrega un elemento al final del array?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
                    { question: "¿Qué método elimina el último elemento?", options: ["pop()", "push()", "shift()", "unshift()"], correct: 0 },
                    { question: "¿Qué método elimina el primer elemento?", options: ["shift()", "pop()", "push()", "unshift()"], correct: 0 },
                    { question: "¿Qué método agrega al inicio?", options: ["unshift()", "push()", "pop()", "shift()"], correct: 0 },
                    { question: "¿Qué método transforma cada elemento?", options: ["map()", "filter()", "reduce()", "find()"], correct: 0 },
                    { question: "¿Qué método filtra elementos?", options: ["filter()", "map()", "reduce()", "find()"], correct: 0 },
                    { question: "¿Qué método reduce a un valor?", options: ["reduce()", "map()", "filter()", "find()"], correct: 0 },
                    { question: "¿Qué propiedad indica la cantidad de elementos?", options: ["length", "size", "count", "total"], correct: 0 }
                ]
            },
            {
                name: "Objetos",
                introduction: "Los objetos son colecciones de propiedades relacionadas. Cada propiedad tiene un nombre (clave) y un valor.",
                examples: "const persona = { nombre: 'Juan', edad: 25 }; persona.nombre; persona['edad']; Object.keys(persona); Object.values(persona); JSON.stringify(persona); JSON.parse(texto); const auto = { marca: 'Toyota', modelo: 'Corolla', año: 2020 }; auto.marca; auto.modelo",
                definitions: [
                    { term: "Definición", definition: "Colección de propiedades {clave: valor}" },
                    { term: "Acceso", definition: "objeto.propiedad o objeto[\"propiedad\"]" },
                    { term: "Métodos", definition: "Funciones dentro de objetos" },
                    { term: "Object.keys()", definition: "Obtener claves" },
                    { term: "Object.values()", definition: "Obtener valores" },
                    { term: "JSON", definition: "Formato de intercambio de datos" },
                    { term: "JSON.parse()", definition: "Convertir string a objeto" },
                    { term: "JSON.stringify()", definition: "Convertir objeto a string" }
                ],
                quiz: [
                    { question: "¿Cómo se accede a una propiedad con punto?", options: ["objeto.propiedad", "objeto[propiedad]", "objeto->propiedad", "objeto::propiedad"], correct: 0 },
                    { question: "¿Cómo se accede a una propiedad con corchetes?", options: ["objeto[\"propiedad\"]", "objeto.propiedad", "objeto->propiedad", "objeto::propiedad"], correct: 0 },
                    { question: "¿Qué método obtiene las claves de un objeto?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.getKeys()"], correct: 0 },
                    { question: "¿Qué método obtiene los valores de un objeto?", options: ["Object.values()", "Object.keys()", "Object.entries()", "Object.getValues()"], correct: 0 },
                    { question: "¿Qué método convierte un objeto a string JSON?", options: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "Object.toJSON()"], correct: 0 },
                    { question: "¿Qué método convierte un string JSON a objeto?", options: ["JSON.parse()", "JSON.stringify()", "Object.fromString()", "Object.fromJSON()"], correct: 0 },
                    { question: "¿Qué es un método en un objeto?", options: ["Función dentro del objeto", "Propiedad del objeto", "Clave del objeto", "Valor del objeto"], correct: 0 },
                    { question: "¿Qué formato se usa para intercambio de datos?", options: ["JSON", "XML", "HTML", "CSV"], correct: 0 }
                ]
            },
            {
                name: "DOM (Document Object Model)",
                introduction: "El DOM es la representación en árbol de la página web. Permite acceder y modificar los elementos HTML con JavaScript.",
                examples: "document.querySelector('p') selecciona el primer párrafo, document.querySelectorAll('.clase') selecciona todos, document.getElementById('miId') por ID, element.innerHTML = 'texto', element.textContent = 'texto', element.setAttribute('attr', 'valor'), element.classList.add('clase'), element.classList.remove('clase'), element.addEventListener('click', func)",
                definitions: [
                    { term: "Definición", definition: "Representación en árbol de la página web" },
                    { term: "querySelector()", definition: "Seleccionar primer elemento" },
                    { term: "querySelectorAll()", definition: "Seleccionar todos los elementos" },
                    { term: "getElementById()", definition: "Por ID" },
                    { term: "getElementsByClassName()", definition: "Por clase" },
                    { term: "innerHTML", definition: "Contenido HTML" },
                    { term: "textContent", definition: "Contenido de texto" },
                    { term: "setAttribute()", definition: "Modificar atributo" },
                    { term: "classList.add()", definition: "Agregar clase" },
                    { term: "classList.remove()", definition: "Eliminar clase" },
                    { term: "addEventListener()", definition: "Escuchar eventos" },
                    { term: "click", definition: "Clic del mouse" },
                    { term: "keydown/keyup", definition: "Teclado" },
                    { term: "submit", definition: "Envío de formulario" },
                    { term: "load", definition: "Carga de página" }
                ],
                quiz: [
                    { question: "¿Qué método selecciona el primer elemento?", options: ["querySelector()", "querySelectorAll()", "getElementById()", "getElementsByClassName()"], correct: 0 },
                    { question: "¿Qué método selecciona todos los elementos?", options: ["querySelectorAll()", "querySelector()", "getElementById()", "getElementsByClassName()"], correct: 0 },
                    { question: "¿Qué método selecciona por ID?", options: ["getElementById()", "querySelector()", "querySelectorAll()", "getElementsByClassName()"], correct: 0 },
                    { question: "¿Qué propiedad modifica el contenido HTML?", options: ["innerHTML", "textContent", "innerText", "outerHTML"], correct: 0 },
                    { question: "¿Qué propiedad modifica el contenido de texto?", options: ["textContent", "innerHTML", "innerText", "outerHTML"], correct: 0 },
                    { question: "¿Qué método modifica un atributo?", options: ["setAttribute()", "getAttribute()", "hasAttribute()", "removeAttribute()"], correct: 0 },
                    { question: "¿Qué método agrega una clase?", options: ["classList.add()", "classList.remove()", "classList.toggle()", "classList.contains()"], correct: 0 },
                    { question: "¿Qué método escucha eventos?", options: ["addEventListener()", "onEvent()", "attachEvent()", "bindEvent()"], correct: 0 }
                ]
            },
            {
                name: "APIs",
                introduction: "Las APIs (Application Programming Interface) permiten que las aplicaciones se comuniquen entre sí y accedan a servicios externos.",
                examples: "fetch('https://api.example.com/data') hace una petición HTTP, .then(response => response.json()) procesa respuesta, .catch(error => console.error(error)) maneja errores, async function getData() { }, await fetch(url); await response.json(); REST API usa métodos HTTP, JSON es formato común de datos, Endpoints son URLs de la API",
                definitions: [
                    { term: "Definición", definition: "Application Programming Interface - Interfaz de programación" },
                    { term: "Fetch API", definition: "Hacer peticiones HTTP" },
                    { term: "Promesas", definition: "Operaciones asíncronas" },
                    { term: "Async/Await", definition: "Sintaxis para código asíncrono" },
                    { term: "REST", definition: "Arquitectura de APIs web" },
                    { term: "JSON", definition: "Formato común de datos" },
                    { term: "Endpoints", definition: "URLs de la API" }
                ],
                quiz: [
                    { question: "¿Qué API hace peticiones HTTP?", options: ["Fetch API", "DOM API", "Storage API", "Geolocation API"], correct: 0 },
                    { question: "¿Qué maneja operaciones asíncronas?", options: ["Promesas", "Variables", "Funciones", "Objetos"], correct: 0 },
                    { question: "¿Qué sintaxis se usa para código asíncrono?", options: ["async/await", "sync/wait", "async/wait", "sync/await"], correct: 0 },
                    { question: "¿Qué arquitectura usan las APIs web?", options: ["REST", "SOAP", "XML-RPC", "GraphQL"], correct: 0 },
                    { question: "¿Qué formato es común para datos en APIs?", options: ["JSON", "XML", "HTML", "CSV"], correct: 0 },
                    { question: "¿Qué son los endpoints?", options: ["URLs de la API", "Métodos HTTP", "Formatos de datos", "Códigos de error"], correct: 0 },
                    { question: "¿Qué método procesa la respuesta de fetch?", options: [".then()", ".catch()", ".finally()", ".done()"], correct: 0 },
                    { question: "¿Qué método maneja errores en promesas?", options: [".catch()", ".then()", ".finally()", ".error()"], correct: 0 }
                ]
            }
        ]
    },
    ortografia: {
        title: "Ortografía - Nivel Bachillerato",
        categories: [
            {
                name: "Reglas de Acentuación",
                introduction: "Las reglas de acentuación determinan cuándo una palabra lleva tilde. Es fundamental para la correcta escritura del español.",
                examples: "café (aguda con tilde), lápiz (grave con tilde), música (esdrújula con tilde), camión (aguda con tilde), árbol (grave con tilde), fácil (aguda con tilde)",
                definitions: [
                    { term: "Palabra aguda", definition: "Acento en la última sílaba" },
                    { term: "Palabra grave", definition: "Acento en la penúltima sílaba" },
                    { term: "Palabra esdrújula", definition: "Acento en la antepenúltima sílaba" },
                    { term: "Tilde diacrítica", definition: "Diferencia palabras homófonas" },
                    { term: "Hiato", definition: "Vocales en sílabas separadas" }
                ],
                quiz: [
                    { question: "¿Cuál palabra es aguda y lleva tilde?", options: ["café", "casa", "mesa", "silla"], correct: 0 },
                    { question: "¿Cuál palabra es grave y lleva tilde?", options: ["lápiz", "mesa", "casa", "silla"], correct: 0 },
                    { question: "¿Cuál palabra es esdrújula?", options: ["música", "casa", "mesa", "silla"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras agudas?", options: ["Llevan tilde si terminan en n, s, vocal", "Nunca llevan tilde", "Siempre llevan tilde", "Llevan tilde si terminan en consonante"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras esdrújulas?", options: ["Siempre llevan tilde", "Nunca llevan tilde", "Llevan tilde si terminan en vocal", "Llevan tilde si terminan en consonante"], correct: 0 }
                ]
            },
            {
                name: "Uso de B y V",
                introduction: "El uso correcto de B y V es uno de los errores más comunes en español. Existen reglas específicas que ayudan a determinar cuándo usar cada letra.",
                examples: "bueno, vaca, beber, vivir, ambos, invierno, biblioteca, vocabulario, advertencia, observar",
                definitions: [
                    { term: "Palabras que terminan en -bir", definition: "Se escriben con B" },
                    { term: "Palabras que empiezan con vice-", definition: "Se escriben con V" },
                    { term: "Palabras después de -m", definition: "Se escriben con B" },
                    { term: "Palabras que terminan en -bilidad", definition: "Se escriben con V" },
                    { term: "Palabras que empiezan con bu-", definition: "Se escriben con B" }
                ],
                quiz: [
                    { question: "¿Cuál palabra se escribe con B?", options: ["bueno", "vueno", "buino", "vino"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que terminan en -bir?", options: ["Se escriben con B", "Se escriben con V", "Se escriben con ambas", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra se escribe con V?", options: ["vaca", "baca", "vaca", "baca"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que empiezan con vice-?", options: ["Se escriben con V", "Se escriben con B", "Se escriben con ambas", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra se escribe con B después de -m?", options: ["ambos", "amvos", "ambos", "ambos"], correct: 0 }
                ]
            },
            {
                name: "Uso de G y J",
                introduction: "El uso de G y J sigue reglas específicas basadas en la posición de la letra y el origen de la palabra.",
                examples: "gente, jirafa, girar, jugar, general, genio, geología, geometría, juguete, joya",
                definitions: [
                    { term: "Palabras que terminan en -gia", definition: "Se escriben con G" },
                    { term: "Palabras que empiezan con geo-", definition: "Se escriben con G" },
                    { term: "Palabras que terminan en -jero", definition: "Se escriben con J" },
                    { term: "Palabras que empiezan con gen-", definition: "Se escriben con G" },
                    { term: "Palabras que terminan en -gión", definition: "Se escriben con G" }
                ],
                quiz: [
                    { question: "¿Cuál palabra se escribe con G?", options: ["gente", "jente", "gente", "gente"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que terminan en -gia?", options: ["Se escriben con G", "Se escriben con J", "Se escriben con ambas", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra se escribe con J?", options: ["jirafa", "girafa", "jirafa", "jirafa"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que empiezan con geo-?", options: ["Se escriben con G", "Se escriben con J", "Se escriben con ambas", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra se escribe con G en verbos?", options: ["girar", "jirar", "girar", "girar"], correct: 0 }
                ]
            },
            {
                name: "Uso de H",
                introduction: "La H es una letra muda que no representa ningún sonido, pero tiene reglas específicas para su uso.",
                examples: "hola, hombre, hijo, haber, hacer, hablar, historia, hospital, hotel, hoy, humo",
                definitions: [
                    { term: "Palabras que empiezan con hie-", definition: "Llevan H" },
                    { term: "Palabras que empiezan con hue-", definition: "Llevan H" },
                    { term: "Palabras que empiezan con hum-", definition: "Llevan H" },
                    { term: "Palabras que empiezan con her-", definition: "Llevan H" },
                    { term: "Palabras que empiezan con hidr-", definition: "Llevan H" }
                ],
                quiz: [
                    { question: "¿Cuál palabra lleva H?", options: ["hola", "ola", "hola", "hola"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que empiezan con hie-?", options: ["Llevan H", "No llevan H", "Llevan H o no", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra lleva H intercalada?", options: ["almohada", "almoadada", "almohada", "almohada"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que empiezan con hue-?", options: ["Llevan H", "No llevan H", "Llevan H o no", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra lleva H en verbos?", options: ["haber", "aber", "haber", "haber"], correct: 0 }
                ]
            },
            {
                name: "Uso de C, S, Z",
                introduction: "El uso de C, S y Z sigue reglas específicas basadas en la posición y el tipo de palabra.",
                examples: "casa, silla, zapato, canción, sesión, razón, cantar, sentar, cocinar, cenar",
                definitions: [
                    { term: "Palabras que terminan en -ción", definition: "Se escriben con C" },
                    { term: "Palabras que terminan en -sión", definition: "Se escriben con S" },
                    { term: "Palabras que terminan en -zuelo", definition: "Se escriben con Z" },
                    { term: "Palabras que terminan en -ecer", definition: "Se escriben con C" },
                    { term: "Palabras que terminan en -oso", definition: "Se escriben con S" }
                ],
                quiz: [
                    { question: "¿Cuál palabra se escribe con C?", options: ["casa", "kasa", "casa", "casa"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que terminan en -ción?", options: ["Se escriben con C", "Se escriben con S", "Se escriben con Z", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra se escribe con S?", options: ["silla", "cilla", "silla", "silla"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que terminan en -sión?", options: ["Se escriben con S", "Se escriben con C", "Se escriben con Z", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra se escribe con Z?", options: ["zapato", "sapato", "zapato", "zapato"], correct: 0 }
                ]
            },
            {
                name: "Uso de LL y Y",
                introduction: "El uso de LL y Y tiene reglas específicas que dependen de la posición y el tipo de palabra.",
                examples: "llave, yate, llover, ayer, pollito, yacimiento, lleno, yacer, llorar, yerno",
                definitions: [
                    { term: "Palabras que terminan en -illo", definition: "Se escriben con LL" },
                    { term: "Palabras que terminan en -ayer", definition: "Se escriben con Y" },
                    { term: "Palabras que terminan en -uyo", definition: "Se escriben con Y" },
                    { term: "Palabras que terminan en -oy", definition: "Se escriben con Y" },
                    { term: "Palabras que terminan en -ylla", definition: "Se escriben con LL" }
                ],
                quiz: [
                    { question: "¿Cuál palabra se escribe con LL?", options: ["llave", "yave", "llave", "llave"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que terminan en -illo?", options: ["Se escriben con LL", "Se escriben con Y", "Se escriben con ambas", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra se escribe con Y?", options: ["yate", "llate", "yate", "yate"], correct: 0 },
                    { question: "¿Cuál es la regla para palabras que terminan en -ayer?", options: ["Se escriben con Y", "Se escriben con LL", "Se escriben con ambas", "No tienen regla"], correct: 0 },
                    { question: "¿Cuál palabra se escribe con LL en verbos?", options: ["llover", "yover", "llover", "llover"], correct: 0 }
                ]
            },
            {
                name: "Signos de Puntuación",
                introduction: "Los signos de puntuación son esenciales para la correcta estructura y comprensión de los textos.",
                examples: "Punto (.), Coma (,), Punto y coma (;), Dos puntos (:), Signos de interrogación (¿?), Signos de exclamación (¡!)",
                definitions: [
                    { term: "Punto", definition: "Separa oraciones" },
                    { term: "Coma", definition: "Separa elementos en una enumeración" },
                    { term: "Punto y coma", definition: "Separa oraciones relacionadas" },
                    { term: "Dos puntos", definition: "Introduce una lista o explicación" },
                    { term: "Signos de interrogación", definition: "Encierran preguntas" }
                ],
                quiz: [
                    { question: "¿Cuál signo se usa para separar oraciones?", options: ["Punto", "Coma", "Punto y coma", "Dos puntos"], correct: 0 },
                    { question: "¿Cuál signo se usa para enumerar?", options: ["Coma", "Punto", "Punto y coma", "Dos puntos"], correct: 0 },
                    { question: "¿Cuál signo se usa para pausas largas?", options: ["Punto y coma", "Coma", "Punto", "Dos puntos"], correct: 0 },
                    { question: "¿Cuál signo se usa para introducir una lista?", options: ["Dos puntos", "Coma", "Punto", "Punto y coma"], correct: 0 },
                    { question: "¿Cuál signo se usa para preguntas?", options: ["Signos de interrogación", "Signos de exclamación", "Coma", "Punto"], correct: 0 }
                ]
            },
            {
                name: "Mayúsculas y Minúsculas",
                introduction: "El uso correcto de mayúsculas y minúsculas es fundamental para la escritura formal.",
                examples: "Al inicio de oración, Nombres propios, Títulos de obras, Nombres de países, Nombres de instituciones",
                definitions: [
                    { term: "Al inicio de oración", definition: "Siempre mayúscula" },
                    { term: "Nombres propios", definition: "Siempre mayúscula" },
                    { term: "Títulos", definition: "Palabras importantes mayúscula" },
                    { term: "Días de la semana", definition: "Siempre minúscula" },
                    { term: "Meses del año", definition: "Siempre minúscula" }
                ],
                quiz: [
                    { question: "¿Cuándo se usa mayúscula?", options: ["Al inicio de oración", "Siempre", "Nunca", "En palabras cortas"], correct: 0 },
                    { question: "¿Cuándo se usa mayúscula en nombres propios?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0 },
                    { question: "¿Cuándo se usa mayúscula en títulos?", options: ["En palabras importantes", "Siempre", "Nunca", "En palabras cortas"], correct: 0 },
                    { question: "¿Cuándo se usa mayúscula después de punto?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0 },
                    { question: "¿Cuándo se usa minúscula en días?", options: ["Siempre", "Nunca", "A veces", "En palabras cortas"], correct: 0 }
                ]
            },
            {
                name: "Palabras Homófonas",
                introduction: "Las palabras homófonas se pronuncian igual pero se escriben diferente y tienen significados distintos.",
                examples: "hay/ahí, vaya/valla, echo/hecho, hasta/asta, si/sí, te/té, de/dé, se/sé",
                definitions: [
                    { term: "hay/ahí", definition: "Existir vs lugar" },
                    { term: "vaya/valla", definition: "Ir vs cerca" },
                    { term: "echo/hecho", definition: "Arrojar vs realizado" },
                    { term: "hasta/asta", definition: "Preposición vs no existe" },
                    { term: "si/sí", definition: "Condición vs afirmación" }
                ],
                quiz: [
                    { question: "¿Cuál es la diferencia entre 'hay' y 'ahí'?", options: ["Existir vs lugar", "Lugar vs existir", "Tiempo vs lugar", "Lugar vs tiempo"], correct: 0 },
                    { question: "¿Cuál es la diferencia entre 'vaya' y 'valla'?", options: ["Ir vs cerca", "Cerca vs ir", "Tiempo vs cerca", "Cerca vs tiempo"], correct: 0 },
                    { question: "¿Cuál es la diferencia entre 'echo' y 'hecho'?", options: ["Arrojar vs realizado", "Realizado vs arrojar", "Tiempo vs realizado", "Realizado vs tiempo"], correct: 0 },
                    { question: "¿Cuál es la diferencia entre 'hasta' y 'asta'?", options: ["Preposición vs no existe", "No existe vs preposición", "Tiempo vs preposición", "Preposición vs tiempo"], correct: 0 },
                    { question: "¿Cuál es la diferencia entre 'si' y 'sí'?", options: ["Condición vs afirmación", "Afirmación vs condición", "Tiempo vs condición", "Condición vs tiempo"], correct: 0 }
                ]
            },
            {
                name: "Errores Comunes",
                introduction: "Existen errores ortográficos muy comunes que deben evitarse para una escritura correcta.",
                examples: "haber (no aver), hacer (no aser), allí (no alli), también (no tambien), además (no ademàs)",
                definitions: [
                    { term: "haber", definition: "Forma correcta" },
                    { term: "hacer", definition: "Forma correcta" },
                    { term: "allí", definition: "Forma correcta" },
                    { term: "también", definition: "Forma correcta" },
                    { term: "además", definition: "Forma correcta" }
                ],
                quiz: [
                    { question: "¿Cuál es la forma correcta de 'haber'?", options: ["haber", "aver", "haver", "ha ver"], correct: 0 },
                    { question: "¿Cuál es la forma correcta de 'hacer'?", options: ["hacer", "aser", "hacer", "a ser"], correct: 0 },
                    { question: "¿Cuál es la forma correcta de 'allí'?", options: ["allí", "alli", "alí", "al li"], correct: 0 },
                    { question: "¿Cuál es la forma correcta de 'también'?", options: ["también", "tambien", "tambièn", "tan bién"], correct: 0 },
                    { question: "¿Cuál es la forma correcta de 'además'?", options: ["además", "ademàs", "ademas", "a demàs"], correct: 0 }
                ]
            }
        ]
    },
    espanol_castellano: {
        title: "Español Castellano - Nivel Bachillerato",
        categories: [
            {
                name: "Fonética y Fonología",
                introduction: "La fonética estudia los sonidos del habla, mientras que la fonología estudia los fonemas como unidades distintivas.",
                examples: "5 vocales (a, e, i, o, u), Diptongo (dos vocales en una sílaba), Triptongo (tres vocales en una sílaba), Hiato (vocales en sílabas separadas)",
                definitions: [
                    { term: "Fonética", definition: "Estudio de sonidos" },
                    { term: "Fonología", definition: "Estudio de fonemas" },
                    { term: "Diptongo", definition: "Dos vocales en una sílaba" },
                    { term: "Triptongo", definition: "Tres vocales en una sílaba" },
                    { term: "Hiato", definition: "Vocales en sílabas separadas" }
                ],
                quiz: [
                    { question: "¿Qué es la fonética?", options: ["Estudio de sonidos", "Estudio de letras", "Estudio de palabras", "Estudio de frases"], correct: 0 },
                    { question: "¿Qué es la fonología?", options: ["Estudio de fonemas", "Estudio de letras", "Estudio de palabras", "Estudio de frases"], correct: 0 },
                    { question: "¿Cuántas vocales tiene el español?", options: ["5", "6", "7", "8"], correct: 0 },
                    { question: "¿Qué es un diptongo?", options: ["Dos vocales en una sílaba", "Una vocal sola", "Tres vocales", "Cuatro vocales"], correct: 0 },
                    { question: "¿Qué es un hiato?", options: ["Vocales en sílabas separadas", "Vocales juntas", "Una vocal", "Tres vocales"], correct: 0 }
                ]
            },
            {
                name: "Morfología",
                introduction: "La morfología estudia la estructura interna de las palabras y cómo se forman.",
                examples: "Lexema (raíz), Morfema derivativo (prefijos/sufijos), Morfema flexivo (género/número/tiempo), Palabra primitiva, Palabra derivada",
                definitions: [
                    { term: "Morfema", definition: "Unidad mínima de significado" },
                    { term: "Lexema", definition: "Raíz de la palabra" },
                    { term: "Morfema derivativo", definition: "Crea nuevas palabras" },
                    { term: "Morfema flexivo", definition: "Indica género/número/tiempo" },
                    { term: "Prefijo", definition: "Antes de la raíz" }
                ],
                quiz: [
                    { question: "¿Qué es la morfología?", options: ["Estudio de palabras", "Estudio de sonidos", "Estudio de frases", "Estudio de textos"], correct: 0 },
                    { question: "¿Qué es un morfema?", options: ["Unidad mínima de significado", "Unidad de sonido", "Unidad de frase", "Unidad de texto"], correct: 0 },
                    { question: "¿Qué es un lexema?", options: ["Raíz de la palabra", "Prefijo", "Sufijo", "Desinencia"], correct: 0 },
                    { question: "¿Qué es un morfema derivativo?", options: ["Crea nuevas palabras", "Indica género", "Indica número", "Indica tiempo"], correct: 0 },
                    { question: "¿Qué es un morfema flexivo?", options: ["Indica género/número/tiempo", "Crea palabras", "Es la raíz", "Es el prefijo"], correct: 0 }
                ]
            },
            {
                name: "Sintaxis",
                introduction: "La sintaxis estudia el orden y la relación de las palabras en la oración.",
                examples: "Sujeto (quien realiza la acción), Predicado (lo que se dice del sujeto), Complemento directo (recibe la acción), Complemento indirecto (beneficiario)",
                definitions: [
                    { term: "Sujeto", definition: "Quien realiza la acción" },
                    { term: "Predicado", definition: "Lo que se dice del sujeto" },
                    { term: "Núcleo del sujeto", definition: "Sustantivo principal" },
                    { term: "Núcleo del predicado", definition: "Verbo" },
                    { term: "Complemento directo", definition: "Recibe la acción" }
                ],
                quiz: [
                    { question: "¿Qué es la sintaxis?", options: ["Orden de palabras", "Significado de palabras", "Sonido de palabras", "Origen de palabras"], correct: 0 },
                    { question: "¿Qué es el sujeto?", options: ["Quien realiza la acción", "La acción", "El objeto", "El tiempo"], correct: 0 },
                    { question: "¿Qué es el predicado?", options: ["Lo que se dice del sujeto", "El sujeto", "El objeto", "El tiempo"], correct: 0 },
                    { question: "¿Qué es el núcleo del sujeto?", options: ["Sustantivo principal", "Verbo", "Adjetivo", "Adverbio"], correct: 0 },
                    { question: "¿Qué es el núcleo del predicado?", options: ["Verbo", "Sustantivo", "Adjetivo", "Adverbio"], correct: 0 }
                ]
            },
            {
                name: "Semántica",
                introduction: "La semántica estudia el significado de las palabras y las relaciones entre ellas.",
                examples: "Sinonimia (igual significado), Antonimia (significado opuesto), Homonimia (igual forma, diferente significado), Polisemia (varios significados)",
                definitions: [
                    { term: "Significado", definition: "Concepto de la palabra" },
                    { term: "Significante", definition: "Imagen acústica" },
                    { term: "Sinonimia", definition: "Palabras con igual significado" },
                    { term: "Antonimia", definition: "Palabras con significado opuesto" },
                    { term: "Homonimia", definition: "Igual forma, diferente significado" }
                ],
                quiz: [
                    { question: "¿Qué es la semántica?", options: ["Estudio del significado", "Estudio de sonidos", "Estudio de palabras", "Estudio de frases"], correct: 0 },
                    { question: "¿Qué es el significado?", options: ["Concepto de la palabra", "Sonido de la palabra", "Origen de la palabra", "Uso de la palabra"], correct: 0 },
                    { question: "¿Qué es el significante?", options: ["Imagen acústica", "Concepto", "Uso", "Origen"], correct: 0 },
                    { question: "¿Qué es la sinonimia?", options: ["Palabras con igual significado", "Palabras con significado opuesto", "Palabras sin relación", "Palabras iguales"], correct: 0 },
                    { question: "¿Qué es la antonimia?", options: ["Palabras con significado opuesto", "Palabras con igual significado", "Palabras sin relación", "Palabras iguales"], correct: 0 }
                ]
            },
            {
                name: "Léxico",
                introduction: "El léxico es el conjunto de palabras de una lengua. El vocabulario es el conjunto de palabras que conoce una persona.",
                examples: "Neologismo (palabra nueva), Arcaísmo (palabra antigua), Extranjerismo (palabra de otro idioma), Préstamo (palabra adoptada), Tecnicismo (palabra técnica)",
                definitions: [
                    { term: "Léxico", definition: "Conjunto de palabras" },
                    { term: "Vocabulario", definition: "Palabras que conoce una persona" },
                    { term: "Neologismo", definition: "Palabra nueva" },
                    { term: "Arcaísmo", definition: "Palabra antigua en desuso" },
                    { term: "Extranjerismo", definition: "Palabra de otro idioma" }
                ],
                quiz: [
                    { question: "¿Qué es el léxico?", options: ["Conjunto de palabras", "Conjunto de sonidos", "Conjunto de frases", "Conjunto de textos"], correct: 0 },
                    { question: "¿Qué es el vocabulario?", options: ["Palabras que conoce una persona", "Todas las palabras", "Palabras técnicas", "Palabras comunes"], correct: 0 },
                    { question: "¿Qué es un neologismo?", options: ["Palabra nueva", "Palabra antigua", "Palabra técnica", "Palabra común"], correct: 0 },
                    { question: "¿Qué es un arcaísmo?", options: ["Palabra antigua en desuso", "Palabra nueva", "Palabra técnica", "Palabra común"], correct: 0 },
                    { question: "¿Qué es un extranjerismo?", options: ["Palabra de otro idioma", "Palabra española", "Palabra técnica", "Palabra común"], correct: 0 }
                ]
            },
            {
                name: "Oración Simple",
                introduction: "La oración simple tiene un solo verbo y puede ser copulativa, predicativa, transitiva, intransitiva, reflexiva, recíproca, impersonal, pasiva o activa.",
                examples: "Oración copulativa (verbo ser/estar), Oración predicativa (verbo de acción), Oración transitiva (con CD), Oración intransitiva (sin CD)",
                definitions: [
                    { term: "Oración simple", definition: "Un verbo" },
                    { term: "Oración copulativa", definition: "Verbo ser/estar" },
                    { term: "Oración predicativa", definition: "Verbo de acción" },
                    { term: "Oración transitiva", definition: "Con complemento directo" },
                    { term: "Oración intransitiva", definition: "Sin complemento directo" }
                ],
                quiz: [
                    { question: "¿Qué es una oración simple?", options: ["Un verbo", "Dos verbos", "Tres verbos", "Sin verbos"], correct: 0 },
                    { question: "¿Qué es una oración copulativa?", options: ["Verbo ser/estar", "Verbo de acción", "Sin verbo", "Dos verbos"], correct: 0 },
                    { question: "¿Qué es una oración predicativa?", options: ["Verbo de acción", "Verbo ser/estar", "Sin verbo", "Dos verbos"], correct: 0 },
                    { question: "¿Qué es una oración transitiva?", options: ["Con complemento directo", "Sin complemento directo", "Sin verbo", "Dos verbos"], correct: 0 },
                    { question: "¿Qué es una oración intransitiva?", options: ["Sin complemento directo", "Con complemento directo", "Sin verbo", "Dos verbos"], correct: 0 }
                ]
            },
            {
                name: "Oración Compuesta",
                introduction: "La oración compuesta tiene más de un verbo y puede ser coordinada, subordinada o yuxtapuesta.",
                examples: "Coordinada copulativa (y, e, ni), Coordinada disyuntiva (o, u), Coordinada adversativa (pero, mas), Subordinada sustantiva, Subordinada adjetiva, Subordinada adverbial",
                definitions: [
                    { term: "Oración compuesta", definition: "Más de un verbo" },
                    { term: "Oración coordinada", definition: "Oraciones del mismo nivel" },
                    { term: "Oración subordinada", definition: "Oración dependiente" },
                    { term: "Oración yuxtapuesta", definition: "Unidas por coma/punto" },
                    { term: "Coordinación copulativa", definition: "Y, e, ni" }
                ],
                quiz: [
                    { question: "¿Qué es una oración compuesta?", options: ["Más de un verbo", "Un verbo", "Sin verbos", "Tres verbos"], correct: 0 },
                    { question: "¿Qué es una oración coordinada?", options: ["Oraciones del mismo nivel", "Oraciones de diferente nivel", "Una oración", "Sin oraciones"], correct: 0 },
                    { question: "¿Qué es una oración subordinada?", options: ["Oración dependiente", "Oración independiente", "Una oración", "Sin oraciones"], correct: 0 },
                    { question: "¿Qué es una oración yuxtapuesta?", options: ["Unidas por coma/punto", "Unidas por conjunción", "Una oración", "Sin oraciones"], correct: 0 },
                    { question: "¿Qué es la coordinación copulativa?", options: ["Y, e, ni", "O, u", "Pero, mas", "Porque"], correct: 0 }
                ]
            },
            {
                name: "Categorías Gramaticales",
                introduction: "Las categorías gramaticales son las clases de palabras según su función en la oración.",
                examples: "Sustantivo (nombre), Verbo (acción), Adjetivo (cualidad), Adverbio (modifica al verbo), Pronombre (sustituye al sustantivo), Preposición (une palabras), Conjunción (une oraciones)",
                definitions: [
                    { term: "Sustantivo", definition: "Nombre de cosas/personas" },
                    { term: "Verbo", definition: "Acción" },
                    { term: "Adjetivo", definition: "Cualidad" },
                    { term: "Adverbio", definition: "Modifica al verbo" },
                    { term: "Pronombre", definition: "Sustituye al sustantivo" }
                ],
                quiz: [
                    { question: "¿Qué es un sustantivo?", options: ["Nombre de cosas/personas", "Acción", "Cualidad", "Cantidad"], correct: 0 },
                    { question: "¿Qué es un verbo?", options: ["Acción", "Nombre", "Cualidad", "Cantidad"], correct: 0 },
                    { question: "¿Qué es un adjetivo?", options: ["Cualidad", "Acción", "Nombre", "Cantidad"], correct: 0 },
                    { question: "¿Qué es un adverbio?", options: ["Modifica al verbo", "Nombre", "Acción", "Cualidad"], correct: 0 },
                    { question: "¿Qué es un pronombre?", options: ["Sustituye al sustantivo", "Es el sustantivo", "Es el verbo", "Es el adjetivo"], correct: 0 }
                ]
            },
            {
                name: "Estructura del Texto",
                introduction: "La estructura del texto incluye elementos como coherencia, cohesión, párrafo, introducción, desarrollo y conclusión.",
                examples: "Coherencia (unidad de significado), Cohesión (unión de elementos), Párrafo (grupo de oraciones), Introducción (inicio), Desarrollo (cuerpo), Conclusión (final)",
                definitions: [
                    { term: "Texto", definition: "Unidad comunicativa" },
                    { term: "Coherencia", definition: "Unidad de significado" },
                    { term: "Cohesión", definition: "Unión de elementos" },
                    { term: "Párrafo", definition: "Grupo de oraciones" },
                    { term: "Introducción", definition: "Inicio del texto" }
                ],
                quiz: [
                    { question: "¿Qué es un texto?", options: ["Unidad comunicativa", "Palabra suelta", "Sonido", "Letra"], correct: 0 },
                    { question: "¿Qué es la coherencia?", options: ["Unidad de significado", "Unidad de forma", "Unidad de sonido", "Unidad de letra"], correct: 0 },
                    { question: "¿Qué es la cohesión?", options: ["Unión de elementos", "Unidad de significado", "Unidad de sonido", "Unidad de letra"], correct: 0 },
                    { question: "¿Qué es el párrafo?", options: ["Grupo de oraciones", "Una oración", "Una palabra", "Una letra"], correct: 0 },
                    { question: "¿Qué es la introducción?", options: ["Inicio del texto", "Final del texto", "Medio del texto", "Sin texto"], correct: 0 }
                ]
            },
            {
                name: "Variedades del Español",
                introduction: "El español tiene muchas variedades regionales y sociales en todo el mundo hispanohablante.",
                examples: "Español castellano (España), Español latinoamericano (América), Español rioplatense (Argentina/Uruguay), Español mexicano (México)",
                definitions: [
                    { term: "Español castellano", definition: "Variante de España" },
                    { term: "Español latinoamericano", definition: "Variante de América" },
                    { term: "Dialecto", definition: "Variación regional" },
                    { term: "Sociolecto", definition: "Variación social" },
                    { term: "Cronolecto", definition: "Variación temporal" }
                ],
                quiz: [
                    { question: "¿Qué es el español castellano?", options: ["Variante de España", "Variante de México", "Variante de Argentina", "Variante de Colombia"], correct: 0 },
                    { question: "¿Qué es el español latinoamericano?", options: ["Variante de América", "Variante de España", "Variante de Asia", "Variante de África"], correct: 0 },
                    { question: "¿Qué es el dialecto?", options: ["Variación regional", "Variación social", "Variación individual", "Sin variación"], correct: 0 },
                    { question: "¿Qué es el sociolecto?", options: ["Variación social", "Variación regional", "Variación individual", "Sin variación"], correct: 0 },
                    { question: "¿Qué es el cronolecto?", options: ["Variación temporal", "Variación regional", "Variación social", "Sin variación"], correct: 0 }
                ]
            }
        ]
    },
    espanol_espana: {
        title: "Español de España - Nivel Bachillerato",
        categories: [
            {
                name: "Español Peninsular",
                introduction: "El español peninsular es la variante del español hablada en España, con características distintivas como el ceceo y el yeísmo.",
                examples: "Ceceo (z como th), Seseo (z como s), Yeísmo (LL y Y iguales), Voseo (uso de vos), Leísmo, Laísmo, Loísmo",
                definitions: [
                    { term: "Español peninsular", definition: "Español de España" },
                    { term: "Ceceo", definition: "Pronunciación de z como th" },
                    { term: "Seseo", definition: "Pronunciación de z como s" },
                    { term: "Yeísmo", definition: "LL y Y suenan igual" },
                    { term: "Voseo", definition: "Uso de vos" }
                ],
                quiz: [
                    { question: "¿Qué es el español peninsular?", options: ["Español de España", "Español de América", "Español de Asia", "Español de África"], correct: 0 },
                    { question: "¿Qué es el ceceo?", options: ["Pronunciación de z como th", "Pronunciación de s", "Pronunciación de c", "Sin pronunciación"], correct: 0 },
                    { question: "¿Qué es el seseo?", options: ["Pronunciación de z como s", "Pronunciación de z como th", "Pronunciación de c", "Sin pronunciación"], correct: 0 },
                    { question: "¿Qué es el yeísmo?", options: ["LL y Y suenan igual", "LL y Y diferentes", "Sin sonido", "Sonido igual"], correct: 0 },
                    { question: "¿Qué es el voseo?", options: ["Uso de vos", "Uso de tú", "Uso de usted", "Sin pronombre"], correct: 0 }
                ]
            },
            {
                name: "Dialectos Regionales",
                introduction: "España tiene diversos dialectos regionales como el andaluz, canario, aragonés, asturleonés, catalán, gallego y vasco.",
                examples: "Andaluz (Andalucía), Canario (Islas Canarias), Aragonés (Aragón), Asturleonés (Asturias/León), Catalán (Cataluña)",
                definitions: [
                    { term: "Dialecto regional", definition: "Variación geográfica" },
                    { term: "Andaluz", definition: "Andalucía" },
                    { term: "Canario", definition: "Islas Canarias" },
                    { term: "Aragonés", definition: "Aragón" },
                    { term: "Asturleonés", definition: "Asturias/León" }
                ],
                quiz: [
                    { question: "¿Qué es un dialecto regional?", options: ["Variación geográfica", "Variación social", "Variación temporal", "Sin variación"], correct: 0 },
                    { question: "¿Qué es el andaluz?", options: ["Andalucía", "Madrid", "Barcelona", "Sevilla"], correct: 0 },
                    { question: "¿Qué es el canario?", options: ["Islas Canarias", "Madrid", "Barcelona", "Valencia"], correct: 0 },
                    { question: "¿Qué es el aragonés?", options: ["Aragón", "Madrid", "Barcelona", "Valencia"], correct: 0 },
                    { question: "¿Qué es el asturleonés?", options: ["Asturias/León", "Madrid", "Barcelona", "Valencia"], correct: 0 }
                ]
            },
            {
                name: "Vocabulario Español",
                introduction: "El español de España tiene vocabulario específico que difiere del español latinoamericano.",
                examples: "coger (tomar), conducir (manejar), ordenador (computadora), móvil (celular), coche (carro), piso (apartamento), patata (papa), zumo (jugo)",
                definitions: [
                    { term: "coger", definition: "Tomar/Agarrar" },
                    { term: "conducir", definition: "Manejar" },
                    { term: "ordenador", definition: "Computadora" },
                    { term: "móvil", definition: "Celular" },
                    { term: "coche", definition: "Carro" }
                ],
                quiz: [
                    { question: "¿Qué es 'coger' en España?", options: ["Tomar/Agarrar", "Tener relaciones", "Comer", "Beber"], correct: 0 },
                    { question: "¿Qué es 'conducir' en España?", options: ["Manejar", "Llevar", "Traer", "Guíar"], correct: 0 },
                    { question: "¿Qué es 'ordenador' en España?", options: ["Computadora", "Organizador", "Teléfono", "Tablet"], correct: 0 },
                    { question: "¿Qué es 'móvil' en España?", options: ["Celular", "Mueble", "Auto", "Casa"], correct: 0 },
                    { question: "¿Qué es 'coche' en España?", options: ["Carro", "Cocina", "Cama", "Silla"], correct: 0 }
                ]
            },
            {
                name: "Expresiones Idiomáticas",
                introduction: "El español de España tiene muchas expresiones idiomáticas características.",
                examples: "estar como una cabra (estar loco), ser la leche (ser increíble), no tener ni idea (no saber nada), matar dos pájaros de un tiro (lograr dos cosas)",
                definitions: [
                    { term: "estar como una cabra", definition: "Estar loco" },
                    { term: "ser la leche", definition: "Ser increíble" },
                    { term: "no tener ni idea", definition: "No saber nada" },
                    { term: "matar dos pájaros de un tiro", definition: "Lograr dos cosas" },
                    { term: "costar un ojo", definition: "Ser muy caro" }
                ],
                quiz: [
                    { question: "¿Qué significa 'estar como una cabra'?", options: ["Estar loco", "Estar feliz", "Estar triste", "Estar enojado"], correct: 0 },
                    { question: "¿Qué significa 'ser la leche'?", options: ["Ser increíble", "Ser leche", "Ser agua", "Ser café"], correct: 0 },
                    { question: "¿Qué significa 'no tener ni idea'?", options: ["No saber nada", "Tener idea", "Saber todo", "Saber poco"], correct: 0 },
                    { question: "¿Qué significa 'matar dos pájaros de un tiro'?", options: ["Lograr dos cosas", "Matar pájaros", "Cazar pájaros", "Disparar"], correct: 0 },
                    { question: "¿Qué significa 'costar un ojo'?", options: ["Ser muy caro", "Costar poco", "Ser gratis", "Ser barato"], correct: 0 }
                ]
            },
            {
                name: "Literatura Española",
                introduction: "La literatura española tiene grandes autores como Cervantes, Lope de Vega, Calderón de la Barca y Góngora.",
                examples: "Don Quijote (Cervantes), La Celestina (Rojas), Fuenteovejuna (Lope de Vega), La vida es sueño (Calderón), Soledades (Góngora)",
                definitions: [
                    { term: "Don Quijote", definition: "Obra de Cervantes" },
                    { term: "La Celestina", definition: "Obra de Rojas" },
                    { term: "Fuenteovejuna", definition: "Obra de Lope de Vega" },
                    { term: "La vida es sueño", definition: "Obra de Calderón" },
                    { term: "Siglo de Oro", definition: "Siglo XVI-XVII" }
                ],
                quiz: [
                    { question: "¿Quién escribió 'Don Quijote'?", options: ["Cervantes", "Lope de Vega", "Calderón", "Góngora"], correct: 0 },
                    { question: "¿Quién escribió 'La Celestina'?", options: ["Rojas", "Cervantes", "Lope", "Calderón"], correct: 0 },
                    { question: "¿Quién escribió 'Fuenteovejuna'?", options: ["Lope de Vega", "Cervantes", "Calderón", "Góngora"], correct: 0 },
                    { question: "¿Quién escribió 'La vida es sueño'?", options: ["Calderón", "Cervantes", "Lope", "Góngora"], correct: 0 },
                    { question: "¿Qué es el Siglo de Oro?", options: ["Siglo XVI-XVII", "Siglo XV", "Siglo XVIII", "Siglo XIX"], correct: 0 }
                ]
            },
            {
                name: "Cultura y Tradiciones",
                introduction: "España tiene una rica cultura con tradiciones como la Semana Santa, las Fallas, la Tomatina, el San Fermín y la Feria de Abril.",
                examples: "Semana Santa (celebración religiosa), Fallas (Valencia), Tomatina (fiesta con tomates), San Fermín (Pamplona), Feria de Abril (Sevilla)",
                definitions: [
                    { term: "Semana Santa", definition: "Celebración religiosa" },
                    { term: "Fallas", definition: "Fiesta de Valencia" },
                    { term: "Tomatina", definition: "Fiesta con tomates" },
                    { term: "San Fermín", definition: "Fiesta de Pamplona" },
                    { term: "Fería de Abril", definition: "Fiesta de Sevilla" }
                ],
                quiz: [
                    { question: "¿Qué es la Semana Santa en España?", options: ["Celebración religiosa", "Fiesta secular", "Fiesta deportiva", "Fiesta musical"], correct: 0 },
                    { question: "¿Qué son las Fallas?", options: ["Fiesta de Valencia", "Fiesta de Madrid", "Fiesta de Barcelona", "Fiesta de Sevilla"], correct: 0 },
                    { question: "¿Qué es la Tomatina?", options: ["Fiesta con tomates", "Fiesta con tomate", "Fiesta con tomates rojos", "Fiesta con tomates verdes"], correct: 0 },
                    { question: "¿Qué es el San Fermín?", options: ["Fiesta de Pamplona", "Fiesta de Madrid", "Fiesta de Barcelona", "Fiesta de Sevilla"], correct: 0 },
                    { question: "¿Qué es la Feria de Abril?", options: ["Fiesta de Sevilla", "Fiesta de Madrid", "Fiesta de Barcelona", "Fiesta de Valencia"], correct: 0 }
                ]
            },
            {
                name: "Historia de la Lengua",
                introduction: "El español proviene del latín vulgar y ha evolucionado a través de los siglos con influencias del árabe, griego y otras lenguas.",
                examples: "Latín vulgar (origen), Influencia árabe (muchas palabras), Influencia griega (términos científicos), Edad Media (formación), Real Academia Española (normativa)",
                definitions: [
                    { term: "Latín vulgar", definition: "Origen del español" },
                    { term: "Influencia árabe", definition: "Mucha" },
                    { term: "Influencia griega", definition: "Términos científicos" },
                    { term: "Edad Media", definition: "Formación del español" },
                    { term: "RAE", definition: "Institución de la lengua" }
                ],
                quiz: [
                    { question: "¿De dónde viene el español?", options: ["Latín vulgar", "Griego", "Árabe", "Hebreo"], correct: 0 },
                    { question: "¿Qué influencia tuvo el árabe?", options: ["Mucha", "Poca", "Ninguna", "Media"], correct: 0 },
                    { question: "¿Qué influencia tuvo el latín?", options: ["Mucha", "Poca", "Ninguna", "Media"], correct: 0 },
                    { question: "¿Qué influencia tuvo el griego?", options: ["Media", "Mucha", "Poca", "Ninguna"], correct: 0 },
                    { question: "¿Cuándo se formó el español?", options: ["Edad Media", "Edad Antigua", "Edad Moderna", "Edad Contemporánea"], correct: 0 }
                ]
            },
            {
                name: "Normativa RAE",
                introduction: "La Real Academia Española (RAE) establece la normativa del español a través del Diccionario, la Gramática y la Ortografía.",
                examples: "DLE (Diccionario), NGLE (Nueva Gramática), NORME (Nueva Ortografía), DPD (Diccionario Panhispánico de Dudas), Ortografía 2010",
                definitions: [
                    { term: "RAE", definition: "Real Academia Española" },
                    { term: "ASALE", definition: "Asociación de Academias" },
                    { term: "DLE", definition: "Diccionario de la Lengua Española" },
                    { term: "NGLE", definition: "Nueva Gramática de la Lengua Española" },
                    { term: "NORME", definition: "Nueva Ortografía de la Lengua Española" }
                ],
                quiz: [
                    { question: "¿Qué es la RAE?", options: ["Real Academia Española", "Real Academia de Arte", "Real Academia de Ciencia", "Real Academia de Deporte"], correct: 0 },
                    { question: "¿Cuántas academias componen la ASALE?", options: ["22", "20", "24", "18"], correct: 0 },
                    { question: "¿Qué es la ASALE?", options: ["Asociación de Academias", "Asociación de Arte", "Asociación de Ciencia", "Asociación de Deporte"], correct: 0 },
                    { question: "¿Qué es el DLE?", options: ["Diccionario de la Lengua Española", "Diccionario de Latín", "Diccionario de Inglés", "Diccionario de Francés"], correct: 0 },
                    { question: "¿Qué es la NGLE?", options: ["Nueva Gramática de la Lengua Española", "Nueva Gramática de Latín", "Nueva Gramática de Inglés", "Nueva Gramática de Francés"], correct: 0 }
                ]
            },
            {
                name: "Uso Coloquial",
                introduction: "El lenguaje coloquial es el lenguaje informal usado en situaciones cotidianas. Incluye jerga, argot, slang, modismos y refranes.",
                examples: "Jerga (lenguaje de grupo), Argot (lenguaje secreto), Slang (lenguaje juvenil), Modismo (expresión característica), Refrán (dicho popular)",
                definitions: [
                    { term: "Lenguaje coloquial", definition: "Lenguaje informal" },
                    { term: "Jerga", definition: "Lenguaje de grupo" },
                    { term: "Argot", definition: "Lenguaje secreto" },
                    { term: "Slang", definition: "Lenguaje juvenil" },
                    { term: "Modismo", definition: "Expresión característica" }
                ],
                quiz: [
                    { question: "¿Qué es el lenguaje coloquial?", options: ["Lenguaje informal", "Lenguaje formal", "Lenguaje técnico", "Lenguaje científico"], correct: 0 },
                    { question: "¿Qué es la jerga?", options: ["Lenguaje de grupo", "Lenguaje formal", "Lenguaje técnico", "Lenguaje científico"], correct: 0 },
                    { question: "¿Qué es el argot?", options: ["Lenguaje secreto", "Lenguaje formal", "Lenguaje técnico", "Lenguaje científico"], correct: 0 },
                    { question: "¿Qué es la slang?", options: ["Lenguaje juvenil", "Lenguaje formal", "Lenguaje técnico", "Lenguaje científico"], correct: 0 },
                    { question: "¿Qué es el modismo?", options: ["Expresión característica", "Expresión formal", "Expresión técnica", "Expresión científica"], correct: 0 }
                ]
            },
            {
                name: "Diferencias con Latinoamérica",
                introduction: "El español de España tiene diferencias de vocabulario, pronunciación y gramática con el español latinoamericano.",
                examples: "coche/carro, ordenador/computadora, móvil/celular, coger/tomar, zumo/jugo, patata/papa, piso/apartamento, autobús/camión",
                definitions: [
                    { term: "coche", definition: "Carro en LatAm" },
                    { term: "ordenador", definition: "Computadora en LatAm" },
                    { term: "móvil", definition: "Celular en LatAm" },
                    { term: "coger", definition: "Tomar en España, otro significado en LatAm" },
                    { term: "zumo", definition: "Jugo en LatAm" }
                ],
                quiz: [
                    { question: "¿Qué diferencia hay en 'coche'?", options: ["Carro en LatAm", "Cocina en LatAm", "Cama en LatAm", "Silla en LatAm"], correct: 0 },
                    { question: "¿Qué diferencia hay en 'ordenador'?", options: ["Computadora en LatAm", "Organizador en LatAm", "Teléfono en LatAm", "Tablet en LatAm"], correct: 0 },
                    { question: "¿Qué diferencia hay en 'móvil'?", options: ["Celular en LatAm", "Mueble en LatAm", "Auto en LatAm", "Casa en LatAm"], correct: 0 },
                    { question: "¿Qué diferencia hay en 'coger'?", options: ["Tomar en España, otro significado en LatAm", "Mismo significado", "Sin significado", "Significado opuesto"], correct: 0 },
                    { question: "¿Qué diferencia hay en 'zumo'?", options: ["Jugo en LatAm", "Zumo en LatAm", "Bebida en LatAm", "Agua en LatAm"], correct: 0 }
                ]
            }
        ]
    }
};

// Subject display names
const subjectNames = {
    matematicas: "MATEMÁTICAS",
    ciencias: "CIENCIAS NATURALES",
    lectura: "LECTURA",
    ortografia: "ORTOGRAFÍA",
    espanol_castellano: "ESPAÑOL CASTELLANO",
    espanol_espana: "ESPAÑOL DE ESPAÑA"
};

// Quiz state
let currentSubject = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let selectedTopics = [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    currentSubject = urlParams.get('subject');
    
    if (currentSubject && questionDatabase[currentSubject]) {
        document.getElementById('subject-title').textContent = subjectNames[currentSubject];
    } else {
        document.getElementById('subject-title').textContent = 'Materia no encontrada';
        document.querySelector('.menu-section').innerHTML = '<p>Por favor, selecciona una materia válida desde la página principal.</p><a href="index.html" class="action-btn primary">Volver al inicio</a>';
    }
});

// Show topic selection
function showTopicSelection() {
    if (!currentSubject || !subjectTopics[currentSubject]) return;
    
    // Reset selected topics
    selectedTopics = [];
    
    // Generate topic checkboxes
    const topicsContainer = document.getElementById('topics-container');
    topicsContainer.innerHTML = '';
    
    subjectTopics[currentSubject].forEach(topic => {
        const checkbox = document.createElement('label');
        checkbox.className = 'topic-checkbox';
        checkbox.innerHTML = `
            <input type="checkbox" value="${topic}" onchange="toggleTopic(this)">
            ${topic}
        `;
        topicsContainer.appendChild(checkbox);
    });
    
    // Show topic selection section
    document.getElementById('menu-section').classList.add('hidden');
    document.getElementById('topic-selection-section').classList.remove('hidden');
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('study-section').classList.add('hidden');
}

// Toggle topic selection
function toggleTopic(checkbox) {
    const topic = checkbox.value;
    const checkboxLabel = checkbox.parentElement;
    
    if (checkbox.checked) {
        selectedTopics.push(topic);
        checkboxLabel.classList.add('selected');
    } else {
        selectedTopics = selectedTopics.filter(t => t !== topic);
        checkboxLabel.classList.remove('selected');
    }
}

// Select all topics
function selectAllTopics() {
    const checkboxes = document.querySelectorAll('.topic-checkbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
        toggleTopic(checkbox);
    });
}

// Deselect all topics
function deselectAllTopics() {
    const checkboxes = document.querySelectorAll('.topic-checkbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        toggleTopic(checkbox);
    });
}

// Start quiz with selected topics
function startQuizWithTopics() {
    if (selectedTopics.length === 0) {
        alert('Por favor, selecciona al menos un tema para la prueba.');
        return;
    }
    
    // Get user-specified number of questions
    const questionCountInput = document.getElementById('question-count');
    let questionCount = parseInt(questionCountInput.value);
    
    // Validate question count
    if (isNaN(questionCount) || questionCount < 1) {
        questionCount = 10;
    }
    if (questionCount > 50) {
        questionCount = 50;
    }
    
    if (!currentSubject || !questionDatabase[currentSubject]) return;
    
    // Filter questions by selected topics
    const allQuestions = questionDatabase[currentSubject];
    const filteredQuestions = allQuestions.filter(q => selectedTopics.includes(q.topic));
    
    // Get user-specified number of random questions from filtered questions
    // If there are fewer questions than requested, use all available
    const maxQuestions = Math.min(questionCount, filteredQuestions.length);
    currentQuestions = shuffleArray(filteredQuestions).slice(0, maxQuestions);
    
    // If no questions available for selected topics, show warning
    if (currentQuestions.length === 0) {
        alert('No hay preguntas disponibles para los temas seleccionados. Por favor, selecciona otros temas.');
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    
    // Show quiz section
    document.getElementById('menu-section').classList.add('hidden');
    document.getElementById('topic-selection-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('study-section').classList.add('hidden');
    
    displayQuestion();
}

// Start quiz (legacy function - now redirects to topic selection)
function startQuiz() {
    showTopicSelection();
}

// Display current question
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    updateProgress();
}

// Select answer
function selectAnswer(index) {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    selectedAnswer = index;
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    
    options.forEach((btn, i) => {
        btn.onclick = null; // Disable clicks
        if (i === question.correct) {
            btn.classList.add('correct');
        } else if (i === index && index !== question.correct) {
            btn.classList.add('incorrect');
        }
    });
    
    if (index === question.correct) {
        score++;
    }
    
    // Wait 1.5 seconds then go to next question
    setTimeout(() => {
        currentQuestionIndex++;
        selectedAnswer = null;
        
        if (currentQuestionIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = (currentQuestionIndex + 1) + '/' + currentQuestions.length;
}

// Show results
function showResults() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    
    const totalQuestions = currentQuestions.length;
    document.getElementById('score-text').textContent = score + '/' + totalQuestions;
    
    let message = '';
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage === 100) {
        message = 'Excelente! Respuesta perfecta';
    } else if (percentage >= 80) {
        message = 'Muy bien! Gran desempeño';
    } else if (percentage >= 60) {
        message = 'Buen trabajo, pero puedes mejorar';
    } else if (percentage >= 40) {
        message = 'Necesitas practicar mas';
    } else {
        message = 'Te recomiendo revisar el material de estudio';
    }
    
    document.getElementById('score-message').textContent = message;
    
    // Save quiz result to localStorage
    saveQuizResult(currentSubject, score, totalQuestions, percentage);
}

// Restart quiz
function restartQuiz() {
    showTopicSelection();
}

// Show study material
function showStudyMaterial() {
    if (!currentSubject) return;
    
    document.getElementById('menu-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('study-section').classList.remove('hidden');
    
    const material = studyMaterials[currentSubject];
    if (!material) return;
    
    let html = `<h3>${material.title}</h3>`;
    
    if (material.categories) {
        material.categories.forEach((category, index) => {
            const categoryText = `${category.name}. ${category.introduction}. Ejemplos: ${category.examples}. Definiciones: ${category.definitions.map(d => `${d.term}: ${d.definition}`).join('. ')}`;
            
            html += `
                <div class="study-category">
                    <div class="category-header" onclick="toggleCategory(${index})">
                        <span class="category-name">${category.name}</span>
                        <span class="category-toggle">+</span>
                    </div>
                    <div class="category-content" id="category-${index}">
                        <div class="category-actions">
                            <button class="audio-btn" onclick="speakCategory(${index}, event)">
                                <span class="audio-icon">🔊</span> Escuchar
                            </button>
                        </div>
                        <div class="category-introduction">
                            <strong>Introducción:</strong> ${category.introduction}
                        </div>
                        <div class="category-examples">
                            <strong>Ejemplos:</strong> ${category.examples}
                        </div>
                        <div class="category-definitions">
                            <strong>Definiciones:</strong>
                            <ul>
                                ${category.definitions.map(def => `<li><strong>${def.term}:</strong> ${def.definition}</li>`).join('')}
                            </ul>
                        </div>
                        ${category.quiz && category.quiz.length > 0 ? `
                        <div class="category-quiz-section">
                            <button class="quiz-btn action-btn primary" onclick="startCategoryQuiz(${index}, event)">
                                <span class="quiz-icon">📝</span> Evaluar este tema
                            </button>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });
    } else {
        html += material;
    }
    
    document.getElementById('study-text').innerHTML = html;
}

// Toggle category expand/collapse
function toggleCategory(index) {
    const content = document.getElementById(`category-${index}`);
    const toggle = content.previousElementSibling.querySelector('.category-toggle');
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
        toggle.textContent = '+';
    } else {
        content.style.display = 'block';
        toggle.textContent = '-';
    }
}

// Text-to-speech for category
function speakCategory(index, event) {
    event.stopPropagation();
    
    const material = studyMaterials[currentSubject];
    if (!material || !material.categories) return;
    
    const category = material.categories[index];
    const text = `${category.name}. ${category.introduction}. Ejemplos: ${category.examples}. Definiciones: ${category.definitions.map(d => `${d.term}: ${d.definition}`).join('. ')}`;
    
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Tu navegador no soporta texto a voz.');
    }
}

// Start quiz for specific category
function startCategoryQuiz(index, event) {
    event.stopPropagation();
    
    const material = studyMaterials[currentSubject];
    if (!material || !material.categories) return;
    
    const category = material.categories[index];
    if (!category.quiz || category.quiz.length === 0) {
        alert('No hay preguntas disponibles para este tema.');
        return;
    }
    
    const questionCountInput = document.getElementById('question-count');
    let questionCount = parseInt(questionCountInput.value);
    
    if (isNaN(questionCount) || questionCount < 5) {
        questionCount = 5;
    }
    if (questionCount > 10) {
        questionCount = 10;
    }
    
    const maxQuestions = Math.min(questionCount, category.quiz.length);
    currentQuestions = shuffleArray([...category.quiz]).slice(0, maxQuestions);
    
    if (currentQuestions.length === 0) {
        alert('No hay preguntas disponibles para este tema.');
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    
    document.getElementById('menu-section').classList.add('hidden');
    document.getElementById('topic-selection-section').classList.add('hidden');
    document.getElementById('study-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('result-section').classList.add('hidden');
    
    displayQuestion();
}

// Back to menu
function backToMenu() {
    document.getElementById('menu-section').classList.remove('hidden');
    document.getElementById('topic-selection-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('study-section').classList.add('hidden');
}

// Save quiz result to Firestore
async function saveQuizResult(subject, score, totalQuestions, percentage) {
    const auth = window.firebaseAuth;
    const db = window.firebaseDb;
    
    if (!auth || !auth.currentUser) {
        console.error('User not authenticated');
        return;
    }
    
    const user = auth.currentUser;
    
    // Calculate points based on percentage
    let pointsEarned = 0;
    if (percentage === 100) {
        pointsEarned = 5;
    } else if (percentage >= 90) {
        pointsEarned = 3;
    } else if (percentage >= 80) {
        pointsEarned = 2;
    } else if (percentage >= 70) {
        pointsEarned = 1;
    }
    
    const result = {
        subject: subject,
        score: score,
        totalQuestions: totalQuestions,
        percentage: percentage,
        pointsEarned: pointsEarned,
        date: new Date().toISOString()
    };
    
    try {
        const userDocRef = doc(db, 'users', user.uid);
        
        // Get current user data to update total points
        const userDoc = await getDoc(userDocRef);
        let currentTotalPoints = 0;
        if (userDoc.exists() && userDoc.data().totalPoints) {
            currentTotalPoints = userDoc.data().totalPoints;
        }
        
        await updateDoc(userDocRef, {
            quizResults: arrayUnion(result),
            totalPoints: currentTotalPoints + pointsEarned
        });
        console.log('Quiz result and points saved to Firestore');
    } catch (error) {
        console.error('Error saving quiz result:', error);
        // If document doesn't exist, create it
        try {
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                quizResults: [result],
                totalPoints: pointsEarned
            });
            console.log('User document created and quiz result saved');
        } catch (createError) {
            console.error('Error creating user document:', createError);
        }
    }
}

// Calculate general average (from Firestore)
async function calculateGeneralAverage() {
    const auth = window.firebaseAuth;
    const db = window.firebaseDb;
    
    if (!auth || !auth.currentUser) {
        return '-';
    }
    
    try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const quizResults = userData.quizResults || [];
            
            if (quizResults.length === 0) {
                return '-';
            }
            
            const totalPercentage = quizResults.reduce((sum, result) => sum + result.percentage, 0);
            const average = totalPercentage / quizResults.length;
            
            return average.toFixed(1) + '%';
        }
        return '-';
    } catch (error) {
        console.error('Error calculating general average:', error);
        return '-';
    }
}

// Calculate average per subject (from Firestore)
async function calculateSubjectAverages() {
    const auth = window.firebaseAuth;
    const db = window.firebaseDb;
    
    if (!auth || !auth.currentUser) {
        return {};
    }
    
    try {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const quizResults = userData.quizResults || [];
            const subjectAverages = {};
            
            quizResults.forEach(result => {
                if (!subjectAverages[result.subject]) {
                    subjectAverages[result.subject] = {
                        totalPercentage: 0,
                        count: 0
                    };
                }
                subjectAverages[result.subject].totalPercentage += result.percentage;
                subjectAverages[result.subject].count += 1;
            });
            
            const averages = {};
            for (const subject in subjectAverages) {
                const data = subjectAverages[subject];
                averages[subject] = (data.totalPercentage / data.count).toFixed(1) + '%';
            }
            
            return averages;
        }
        return {};
    } catch (error) {
        console.error('Error calculating subject averages:', error);
        return {};
    }
}

// Show profile
async function showProfile() {
    const profileSection = document.getElementById('profile-section');
    profileSection.classList.remove('hidden');
    
    // Get user total points
    const auth = window.firebaseAuth;
    const db = window.firebaseDb;
    let totalPoints = 0;
    
    if (auth && auth.currentUser) {
        try {
            const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
            if (userDoc.exists() && userDoc.data().totalPoints) {
                totalPoints = userDoc.data().totalPoints;
            }
        } catch (error) {
            console.error('Error getting user points:', error);
        }
    }
    
    document.getElementById('total-points-value').textContent = totalPoints;
    
    // Calculate and display general average
    const generalAverage = await calculateGeneralAverage();
    document.getElementById('general-average-value').textContent = generalAverage;
    
    // Calculate and display subject averages
    const subjectAverages = await calculateSubjectAverages();
    const subjectAveragesContainer = document.getElementById('subject-averages-container');
    subjectAveragesContainer.innerHTML = '';
    
    const subjectNames = {
        matematicas: 'MATEMÁTICAS',
        ciencias: 'CIENCIAS NATURALES',
        lectura: 'LECTURA',
        ortografia: 'ORTOGRAFÍA',
        espanol_castellano: 'ESPAÑOL CASTELLANO',
        espanol_espana: 'ESPAÑOL DE ESPAÑA'
    };
    
    for (const subject in subjectAverages) {
        const subjectItem = document.createElement('div');
        subjectItem.className = 'subject-average-item';
        subjectItem.innerHTML = `
            <span class="subject-name">${subjectNames[subject] || subject}</span>
            <span class="subject-average">${subjectAverages[subject]}</span>
        `;
        subjectAveragesContainer.appendChild(subjectItem);
    }
    
    if (Object.keys(subjectAverages).length === 0) {
        subjectAveragesContainer.innerHTML = '<p style="text-align: center; color: #666;">No hay evaluaciones registradas</p>';
    }
}

// Close profile
function closeProfile() {
    const profileSection = document.getElementById('profile-section');
    profileSection.classList.add('hidden');
}

// Initialize profile button event listener
document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.getElementById('profile-btn');
    const closeProfileBtn = document.getElementById('close-profile-btn');
    
    if (profileBtn) {
        profileBtn.addEventListener('click', showProfile);
    }
    
    if (closeProfileBtn) {
        closeProfileBtn.addEventListener('click', closeProfile);
    }
});

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
