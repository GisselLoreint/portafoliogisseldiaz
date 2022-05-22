let jobs=[
    {
        id:1,
        empresa:"Conexia",
        email:"conexia@gmail.com",
        jefe: "John Alvarado",
        cargo:"Pasante programador",
        descripcion: "Programación front end con lenguaje Java orientado a JSF con componentes de primeFaces. Desarrollar las funciones de dichos componentes, elaborando métodos y usando patrones. Crear consultas y campos en base de datos utilizando postgresSql y realizar pruebas.",
        anio:"2017-2018",
        telefono:"311 256 7634"
    },

    {
        id:2,
        empresa:"Crokanto",
        email:"crokanto@gmail.com",
        jefe: "Brian Amortegui",
        cargo:"Empacadora",
        descripcion: "Conteo y selección del producto. Cortar y empacar los mismos",
        anio:"2020-2021",
        telefono:"300 391 7454"
    },

    {
        id:3,
        empresa:"Amarena pastry",
        email:"amarena_pastry@gmail.com",
        jefe: "Faen Colombia Betancourth",
        cargo:"Aux. Pastelería",
        descripcion: "Ayudar a la pastelera principal a realizar postres y tortas. Encargada de realizar las galletas, programar pedidos, atender a los clientes y manejar las redes sociales.",
        anio:"2020-2022",
        telefono:"300 299 7745"
    },

    {
        id:4,
        empresa:"Iron Mountain",
        email:"iron_mountain@gmail.com",
        jefe: "Manuel Corredor",
        cargo:"Digitadora",
        descripcion: "Digitación o traspazo de datos de los siguientes documentos: Ecopetrol, Bavaria, Acciones y Servicios y nueva Eps. Alistamiento, preparación, separación y reenganchado de los siguientes documentos: Nueva EPS, Davivienda, Drager y Digitacion de los mismos.",
        anio:"2020",
        telefono:"302 483 6698"
    }
]

export function getAllJobs(){
    return jobs;
}

export function getJob(id){
    return jobs.find((j)=> j.id===id);
}