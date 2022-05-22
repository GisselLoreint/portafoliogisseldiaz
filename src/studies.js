
let studies=[
    {
        id:1,
        titulo:"Bachiller Académico",
        instituto:"Colegio Copes",
        ciudad:"Bogotá",
        anioCulminacion:"2015"
    },

    {
        id:2,
        titulo:"Técnico Profesional en Desarrollo de Software",
        instituto:"Politécnico Internacional",
        ciudad:"Bogotá",
        anioCulminacion:"2018"
    },

    {
        id:3,
        titulo:"Digitador de textos",
        instituto:"Sena",
        ciudad:"Bogotá",
        anioCulminacion:"2021"
    },

    {
        id:4,
        titulo:"Programadora Front-End",
        instituto:"Kuepa",
        ciudad:"Bogotá",
        anioCulminacion:"2022"
    }
]

export function getAllStudies(){
    return studies;
}

export function getStudy(id){
    return studies.find((study)=>study.id===id);
}

/*
C -> Crear
R -> Read (Lectura)
U -> Update (Actualizar)
D -> Delete (Borrar-Inactivar)
*/