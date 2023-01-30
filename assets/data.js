const newsData = [
  {
    id: 1,
    Img: "https://www.infobae.com/new-resizer/hb5W4rU1ww52SrUduETBEz_LFtg=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/4LCLELZBS5CLRAACCEQ367REWI.jpg",
    Title:
      "Inflación: el Gobierno extenderá Precios Justos hasta julio.",
    Description:
      "Las empresas saben que Precios Justos continuará más allá de marzo y buscan discutir la letra fina",
    UrlNews:
      "https://www.infobae.com/economia/2023/01/09/inflacion-el-gobierno-extendera-precios-justos-hasta-julio-y-negocia-los-dolares-para-importar-insumos/",
    category: "Economia",
    Por:"José Maria Listorti",
  },
  {
    id: 2,
    Img: "https://www.infobae.com/new-resizer/2ep61V2bGnA44-q4SOk6USDq-hU=/992x606/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FB7WC45CMRHLVFKO5S24NUQKGA",
    Title:
      "La inflación porteña fue del 5,8% en diciembre y del 93,4% en 2022.",
    Description:
      "Las mayores subas correspondieron a restaurantes, hoteles y educación con el 8,6% el último mes del año; en todo 2022.",
    UrlNews:
      "https://www.infobae.com/economia/2023/01/09/la-inflacion-portena-fue-del-58-en-diciembre-y-del-934-en-2022-que-rubros-subieron-mas/",
    category: "Economia",
    Por:"José Maria Listorti",
  },
  {
    id: 3,
    Img: "https://www.lanacion.com.ar/resizer/h6G8Lx3yZ1CYByRU-N_vYu0ZNls=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5ZBDDHUNLBAPVEFC4JXMBEM33Q.jpg",
    Title: "La maniobra que permite ganar casi $20.000 con US$1000",
    Description: "En la última semana, se profundizó la brecha entre el blue y el MEP, por lo que algunos operadores volvieron al arbitraje",
    UrlNews:
      "https://www.lanacion.com.ar/economia/dolar/la-maniobra-que-permite-ganar-casi-20000-con-us1000-nid23012023/",
    category: "Economia",
    Por:"Maria Laura",
  },
  {
    id: 4,
    Img: "https://www.infobae.com/new-resizer/WrPnjKHG6OBLh3xnXyUIQWQBpEA=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/LOR3QAVHVBHFBNGT6KJFXUOZAE.jpg",
    Title:
      "Qué es el “home staging” y cómo sacar las mejores fotos para que una propiedad se venda más rápido",
    Description:
      "Las mejores estrategias para fotografiar y producir videos que atrapen a los interesados y muestren, de la mejor manera, las virtudes de la casa o el departamento. Los errores más frecuentes",
    UrlNews:
      "https://www.infobae.com/economia/2023/01/09/que-es-el-home-staging-y-como-sacar-las-mejores-fotos-para-que-una-propiedad-se-venda-mas-rapido/",
    category: "Economia",
    Por:"José Maria Listorti",
  },
  {
    id: 5,
    Img: "https://www.infobae.com/new-resizer/JGcUKouLygyoYxp6jaJLNPd1OZY=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MGWTYZAD4NBVFMRDURLOYCATDY.jpg",
    Title:
      "Verano en Córdoba: precios en 3 destinos ideales para disfrutar el paisaje serrano, que le compite al mar",
    Description:
      "No todo es la costa altántica: excursiones, alojamientos y gastronomía, la provincia tiene propuestas competitivas en términos económicos y también turísticos para atraer visitantes.",
    UrlNews:
      "https://www.infobae.com/economia/2023/01/09/verano-en-cordoba-precios-en-3-destinos-ideales-para-disfrutar-el-paisaje-serrano-que-le-compite-al-mar/",
    category: "Economia",
    Por:"José Maria Listorti",
  },
  {
    id: 6,
    Img: "https://www.infobae.com/new-resizer/fiFx_XlTzJ7Zf-knrBGmmK_RJf0=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/45OAJLPB3NHMDBXNVBCNNQTNIQ.png",
    Title:
      "Inflación Mercado Libre: un relevamiento de precios en la plataforma midió una suba de más de 100% para 2022",
    Description:
      "Se trata de un seguimiento de los valores locales publicados en por el sitio de ecommerce más grande de la región. Cuál fue el dato para el último mes de año",
    UrlNews:
      "https://www.infobae.com/economia/2023/01/09/inflacion-mercado-libre-un-relevamiento-de-precios-en-la-plataforma-midio-una-suba-de-mas-de-100-para-2022/",
    category: "Economia",
    Por:"José Maria Listorti",
  },
  {
    id: 7,
    Img: "https://www.infobae.com/new-resizer/5LinnGNFMaUSgvep6wn0mZqDD9s=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/CFUBGKOB5VDKBJM6QKN4XN57FY.jpeg",
    Title:
      "Polémica con Teo Gutiérrez: rifó una camiseta de Messi.",
    Description:
      "El delantero colombiano causó revuelo en las redes sociales por una actitud muy controvertida",
    UrlNews:
      "https://www.infobae.com/deportes/2023/01/09/polemica-con-teo-gutierrez-rifo-una-camiseta-de-messi-se-quedo-con-el-premio-y-una-publicacion-desato-la-furia-de-sus-seguidores/",
    category: "Deportes",
    Por:"Andrés Messi",
    
  },
  {
    id: 8,
    Img: "https://www.infobae.com/new-resizer/Y7fJf1xTvFcr32Nhl76Zxfcc4Tw=/992x744/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/M7KREXZ27DEL3QNKDZ6PLUDZYI.jpg",
    Title:
      "Los dardos del arquero de Francia al Dibu Martínez. ",
    Description:
      "Hugo Lloris se retiró de la selección gala y sorprendió con sus dichos sobre su colega. ",
    UrlNews:
      "https://www.infobae.com/deportes/2023/01/09/los-dardos-del-arquero-de-francia-al-dibu-martinez-por-sus-juegos-psicologicos-en-los-penales-soy-demasiado-honesto-para-desestabilizar-al-rival/",
    category: "Deportes",
    Por:"Andrés Messi",
  },
  {
    id: 9,
    Img: "https://www.infobae.com/new-resizer/cEKgu3hH_qBFK7uCpqkAA7J0ngM=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/PBYJPZUHTH7YIFO2ATXYL6G4MA.jpg",
    Title:
      "Dieron de alta a Damar Hamlin: su emotivo mensaje en las redes",
    Description:
      "El defensa de los Buffalo Bills lo confirmó a través de su cuenta de Twitter",
    UrlNews:
      "https://www.infobae.com/deportes/2023/01/09/dieron-de-alta-a-damar-hamlin-el-jugador-de-la-nfl-que-sufrio-un-colapso-en-el-campo-de-juego-su-emotivo-mensaje-en-las-redes/",
    category: "Deportes",
    Por:"Andrés Messi",
  },
  {
    id: 10,
    Img: "https://www.infobae.com/new-resizer/c2G7uiyTS0ZI6OYZ3sG9tAO2K7Q=/992x441/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/CGHVTGEOMBF7VOCXEVTN36ZW6U.jpg",
    Title:
      "Por qué la derrota con Arabia Saudita le dio “fuerzas” a la Selección",
    Description:
      "El defensor central hizo un repaso de la consagración de la Albiceleste en Qatar.",
    UrlNews:
      "https://www.infobae.com/deportes/2023/01/09/por-que-la-derrota-con-arabia-saudita-le-dio-fuerzas-a-la-seleccion-y-el-gesto-de-messi-en-el-momento-mas-critico-contra-francia-las-reflexiones-de-cuti-romero/",
    category: "Deportes",
    Por:"Andrés Messi",
  },
  {
    id: 11,
    Img: "https://www.infobae.com/new-resizer/sOPgSMm69HbwwFNWu8vhyjjkGFg=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/JZYXRQV5A23DTRDG6LVQMI4NVU.jpg",
    Title:
      "Roberto Martínez nuevo entrenador de Portugal: qué dijo sobre Cristiano Ronaldo",
    Description:
      "El español, que viene de Bélgica, confirmó su llegada al combinado luso",
    UrlNews:
      "https://www.infobae.com/deportes/2023/01/09/roberto-martinez-fue-presentado-como-nuevo-entrenador-de-portugal-que-dijo-sobre-el-futuro-de-cristiano-ronaldo/",
    category: "Deportes",
    Por:"Andrés Messi",
  },
  {
    id: 12,
    Img: "https://www.radiosportcasilda.com.ar/wp-content/uploads/2023/01/el-barcelona-derroto-al-atletico-de-madrid-escalo-a-la-cima-de-la-liga-y-profundizo-la-crisis-del-cholo-simeone.jpg",
    Title:
      "Con un gol de Ousmane Dembelé, el Blaugrana se impuso al Wanda Metropolitano.",
    Description:
      "Se impuso con una minima diferencia. Las imágenes",
    UrlNews:
      "https://www.infobae.com/deportes/2023/01/08/el-barcelona-derroto-al-atletico-de-madrid-escalo-a-la-cima-de-la-liga-y-profundizo-la-crisis-del-cholo-simeone/",
    category: "Deportes",
    Por:"Andrés Messi",
  },
  {
    id: 13,
    Img: "https://www.infobae.com/new-resizer/PE_aC39gPA7_VsPU3aXSFRSDNg4=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/JLJ5QEJZRZBFPHMG5KMZV3Z5DU.jpg",
    Title:
      "“Only Murders in the Building”",
    Description:
      "Protagonizada por Selena Gómez, Steve Martin y Martin Short.",
    UrlNews:
      "https://www.infobae.com/que-puedo-ver/2023/01/09/only-murders-in-the-building-que-esperar-de-la-temporada-3-de-la-exitosa-serie-de-misterio/",
    category: "Que mirar",
    Por:"Darín Ricardo",
  },
  {
    id: 14,
    Img: "https://www.infobae.com/new-resizer/MGAIAKNEt0GmovSHxjSg7WaPgYI=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QIGBCYERTRG3XDVFJSM2QZF5FQ.jpg",
    Title: "“Sahmaran”, el nuevo drama de Netflix.",
    Description:
      "La serie turca basa su historia en algunas leyendas de aquel país y ya está en lo más visto del servicio",
    UrlNews:
      "https://www.infobae.com/que-puedo-ver/2023/01/24/sahmaran-el-nuevo-drama-de-netflix-que-mezcla-el-romance-con-el-misticismo-y-ya-es-un-exito/",
    category: "Que mirar",
    Por:"Darín Ricardo",
  },
  {
    id: 15,
    Img: "https://www.infobae.com/new-resizer/gynj3MtK_15NZMg4Oaxq97wMjUY=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/FQNCXMU67FDPTGGH7NTZEHCCWY.jpg",
    Title: "Ben Affleck y Matt Damon ya trabajan en “Air”, película sobre Michael Jordan.",
    Description:
      "Los actores y productores llevarán a la pantalla la película.",
    UrlNews:
      "https://www.infobae.com/que-puedo-ver/2023/01/23/ben-affleck-y-matt-damon-ya-trabajan-en-air-pelicula-sobre-michael-jordan-y-su-enorme-contrato-con-una-marca-deportiva/",
    category: "Que mirar",
    Por:"Darín Ricardo",
  },
  {
    id: 16,
    Img: "https://www.infobae.com/new-resizer/KANr-5qE8fgyhNsFoW0reJb6XIs=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/A3M5APDNWJEVZJOD4WKYJ3WSYQ.jpg",
    Title: "“Avatar: el camino del agua” ",
    Description:
      "La película también se convirtió en la sexta producción en la historia que obtiene esta cantidad de dinero en taquilla",
    UrlNews:
      "https://www.infobae.com/que-puedo-ver/2023/01/23/avatar-el-camino-del-agua-supero-los-2-mil-millones-de-dolares-y-es-el-tercer-film-de-james-cameron-en-llegar-a-esa-cifra/",
    category: "Que mirar",
    Por:"Darín Ricardo",
  },
  {
    id: 17,
    Img: "https://www.infobae.com/new-resizer/Zns2sG6bDet-hQlrIyMDAnX-uME=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/F5BWQ4G6BNDXFJJ5ODSOVLLGIE.jpg",
    Title: "Qué serie o película ver en Netflix",
    Description:
      "Muchas son las opciones que puedes disfrutar y a continuación te recomendamos lo más popular",
    UrlNews:
      "https://www.infobae.com/que-puedo-ver/2023/01/01/que-serie-o-pelicula-ver-esta-noche-en-netflix/",
    category: "Que mirar",
    Por:"Darín Ricardo",
  },
  {
    id: 18,
    Img: "https://www.infobae.com/new-resizer/A9wPZfmvgB7GQ9NHzg4hk5oI_HI=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/7MWH5RQRSVDIPBROZSREXTZ4JU.jpeg",
    Title: "Johnny Depp en  “Jeanne du Barry”",
    Description:
      "El actor dará vida al rey Luis XV en el próximo drama histórico de Netflix",
    UrlNews:
      "https://www.infobae.com/que-puedo-ver/2023/01/08/johnny-depp-en-nuevo-avance-de-jeanne-du-barry/",
    category: "Que mirar",
    Por:"Darín Ricardo",
  },
  {
    id: 19,
    Img: "https://www.infobae.com/new-resizer/EnrgZb3D6RaZ1WctZv-Liwl09m0=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/JB3ELAKMAFARDHHS3OSHA3DXIU.jpg",
    Title: "Aplicaciones de Google para mejorar la salud con dispositivos",
    Description:
      "Los productos de Fitbit, Google Nest y Pixel Watch son las propuestas. ",
    UrlNews:
      "https://www.infobae.com/america/tecno/2023/01/09/aplicaciones-de-google-para-mejorar-la-salud-con-dispositivos/",
    category: "Tecno",
    Por:"Federico Wiemeyer",
  },
  {
    id: 20,
    Img: "https://www.infobae.com/new-resizer/dQJjhWQQBAhvvN7HnhZ9Bs89pJg=/992x606/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/O7L4CHWIZNGGJ7SOXIV55ZSOTE.jpg",
    Title:
      "Los creadores de contenido y sus metodos para  motivar a su audiencia a ver sus publicaciones",
    Description:
      "Ver noticias",
    UrlNews:
      "https://www.infobae.com/america/tecno/2023/01/09/dos-trucos-para-saber-titular-videos-en-youtube-y-tener-millones-de-reproducciones/",
    category: "Tecno",
    Por:"Federico Wiemeyer",
  },
  {
    id: 21,
    Img: "https://www.infobae.com/new-resizer/4JaYEqPt9Ac18xXLi_PMCUNnDHA=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/6VZDBV7JMZHXHMLHRSPCPTACMM.jpg",
    Title:
      "El navegador tiene opciones diferentes segun los dispositivos ",
    Description:
      "Dispositivos móviles y computadores de escritorio o portátiles",
    UrlNews:
      "https://www.infobae.com/america/tecno/2023/01/09/como-leer-paginas-en-google-chrome-sin-conexion-desde-un-celular/",
    category: "Tecno",
    Por:"Federico Wiemeyer",
  },
  {
    id: 22,
    Img: "https://www.infobae.com/new-resizer/v8fr6-JMdjA0P06GyoVY5MmLt4o=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/LFPB2NGCWBVWAF7X23V736VQRM.jpg",
    Title: "Apple prepara el lanzamiento de estos productos para el 2023",
    Description:
      "El visor de realidad aumentada y una MacBook más grandes serán puestas a la venta en las tiendas oficiales de la empresa este año",
    UrlNews:
      "https://www.infobae.com/america/tecno/2023/01/08/apple-prepara-el-lanzamiento-de-estos-productos-para-el-2023/",
    category: "Tecno",
    Por:"Federico Wiemeyer",
  },
  {
    id: 23,
    Img: "https://www.infobae.com/new-resizer/0ygVx6qootK6eiJlBcKii6lcRD8=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/NH57XBAJE5BB3GVMNNYFYCIGK4.jpg",
    Title:
      "Quién ganó los premios CES 2023: pantalla transparente, exoesqueletos, cafeteras y más innovaciones",
    Description:
      "Quién ganó los premios CES 2023: pantalla transparente, exoesqueletos, cafeteras y más innovaciones",
    UrlNews:
      "https://www.infobae.com/america/tecno/2023/01/08/quien-gano-los-premios-ces-2023-pantalla-transparente-exoesqueletos-cafeteras-y-mas-innovaciones/",
    category: "Tecno",
    Por:"Federico Wiemeyer",
  },
  {
    id: 24,
    Img: "https://www.infobae.com/new-resizer/NWFHy02uCPJH5fqudNvcmTfueTg=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/I4DXQWOIAFSARO2VO5H42IRNWU.jpg",
    Title:
      "Por qué en redes sociales se ve más contenido de influenciadores y no de am",
    Description:
      "Las plataformas priorizan el entretenimiento y buscan diferenciar el contacto cercano en espacios como las comunidades y los grupos de chat",
    UrlNews:
      "https://www.infobae.com/america/tecno/2023/01/08/por-que-en-redes-sociales-se-ve-mas-contenido-de-influenciadores-y-no-de-amigos/",
    category: "Tecno",
    Por:"Federico Wiemeyer",
  },
  {
    id:25,
    Img: "https://www.infobae.com/new-resizer/H-hW7S6Sht8LKcWzFFzX5EPMwus=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/DP3NPSXBEVAXVHD76C5KVTKB74.jpg",
    Title:
      "Siete consejos esenciales para dormir bien en las noches de verano",
    Description:
      "Cuando las altas temperaturas se mantienen durante varios días y no ceden al caer el sol, el descanso puede verse afectado.",
    UrlNews:
      "https://www.infobae.com/tendencias/2023/01/09/siete-consejos-esenciales-para-dormir-bien-durante-las-noches-de-verano/",
    category: "Tendencias",
    Por:"Ingrid Grudke",
  },
  {
    id: 26,
    Img: "https://www.infobae.com/new-resizer/UQv5wgShK-xcXwI70tV6ljL3ans=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/2D4QB4NJ6ZAO3HZSFSX6ZZNY6I.jpg",
    Title: "El cuerpo da señales y hay que escucharlo",
    Description:
      "Los síntomas, como un dolor de cabeza o de espalda, son información sobre nuestro estado de salud que no deben subestimarse",
    UrlNews:
      "https://www.infobae.com/tendencias/2023/01/09/el-cuerpo-da-senales-y-hay-que-escucharlo/",
    category: "Tendencias",
    Por:"Ingrid Grudke",
  },
  {
    id:27,
    Img: "https://www.infobae.com/new-resizer/l5B3Cz9ry1zQ4PspVCK7W8jnWks=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/RQRZB2HQE5AIFBZUGAIC2MHHYA.jpg",
    Title:
      "Tomar líquidos es esencial para el correcto funcionamiento de los sistemas del organismo. ",
    Description:
      " Trucos para quienes ingerir más cantidad en verano",
    UrlNews:
      "https://www.infobae.com/tendencias/2023/01/08/7-consejos-de-hidratacion-para-las-personas-que-les-cuesta-tomar-agua/",
    category: "Tendencias",
    Por:"Ingrid Grudke",
  },
  {
    id:28,
    Img: "https://www.infobae.com/new-resizer/yBMweFPEbI2HK-Gj7kiM1xotIEo=/992x992/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/OZQ4OK4EFNGHBGWIGBR6RUH4LA.jpg",
    Title:
      "Bikinis nocturnas: el nuevo look en las noches de Punta del Este",
    Description:
      "La moda cambia a medida que los estilos evolucionan. ",
    UrlNews:
      "https://www.infobae.com/tendencias/2023/01/08/bikinis-nocturnas-el-nuevo-look-que-es-furor-en-las-noches-de-punta-del-este/",
    category: "Tendencias",
    Por:"Ingrid Grudke",
  },
  {
    id: 29,
    Img: "https://www.infobae.com/new-resizer/1WwhUbIdZF1YjV-eVy8VXYuOxQU=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/3WTCZWB2ABFBRG6UVGIN7SLC3Y.jpg",
    Title:
      "Burbujas de verano: alternativas de espumosos.",
    Description:
      "Llegó la diversidad de los vinos espumosos nacionales con la intención de conquistar nuevos paladares. ",
    UrlNews:
      "https://www.infobae.com/tendencias/2023/01/08/burbujas-de-verano-alternativas-de-espumosos-para-disfrutar-en-vacaciones/",
    category: "Tendencias",
    Por:"Ingrid Grudke",
  },
  {
    id: 30,
    Img: "https://www.infobae.com/new-resizer/uBT6R4aJX9w8VKmJtybACxAlrUs=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UA4A52P4PZGS3KTBWSOSM6H5SE.jpg",
    Title:
      "Guía para convivir con un adolescente de vacaciones",
    Description:
      "Los meses de ocio sin clases y con los púberes en casa pueden ser un dolor de cabeza para los padres",
    UrlNews:
      "https://www.infobae.com/tendencias/2023/01/08/entre-las-casas-de-los-amigos-y-las-pantallas-guia-para-convivir-con-un-adolescente-de-vacaciones/",
    category: "Tendencias",
    Por:"Ingrid Grudke",
  },
];

// Size page info.

const splitNews = size => {
  let dividedNews = [];
  for (let i = 0; i < newsData.length; i += size) {
    dividedNews.push(newsData.slice(i, i + size));
  }
  return dividedNews;
};

console.log(splitNews(6));

//Show Controller Info.

const newsController = {
  dividedNews: splitNews(6),
  nextNewsIndex: 1,
  newsLimit: splitNews(6).length
};
