import { Usuario, allUsers, Asociados, allContributors,allServices,Servicios,allTrips, Viajes,allReserv,Reservaciones, ONE_NEAR} from "../models"
import { AltaUsuario, BuscarUsuario,BajaUsuario, VerUsuarios,updateUsuario, BuscarAsociado, AltaAsociado, BajaAsociado, VerAsociado, AltaServicio,BuscarServicio,BajaServicio,VerServicio
 ,AltaViajes,updateViajes,deleteViaje, AltaReservacion, BuscarReservacion, updateReserv,deleteReservacion } from "..";



const idUsuario= 'U1'
const nombre = 'Name'
const apellido_p = 'Author_LastName'
const apellido_m = 'Author_LastName1'
const telefono= '123456789'
const correo= 'email.com'
const idReservacion= 'R1'
const idViaje= 'V1'

//const idServicio='S1'
/*const tipoServicio='Transporte'
const ubicacion='Oaxaca'
const precio='$100'*/

let nuevoUsuario = new Usuario(idUsuario,nombre,apellido_p,apellido_m,telefono,correo,idReservacion,idViaje);
//let nuevoServicio = new Servicios(idServicio,tipoServicio,ubicacion,precio);

const allUsersIndex = allUsers.length;
const allContributorsIndex = allContributors.length;
const allServicesIndex = allServices.length;
const allTripsIndex = allTrips.length;
const allReservIndex = allReserv.length;


const contsData = new Array<Usuario>(allUsersIndex);
for(let x = 0; x < allUsersIndex; x++) {
    contsData[x] = allUsers[x]
}

/*const data = new Array<Asociados>(allContributorsIndex);
for(let i=0; i < allContributorsIndex; i++) {
    data[i] = allContributors[i]
}*//*
const data2 = new Array<Servicios>(allServicesIndex);
for(let i=0; i < allServicesIndex; i++) {
    data2[i] = allServices[i]
}*/

describe("AltaUsuario", () => {
    it('should return "AltaUsuario"', () => {
        expect(AltaUsuario(idUsuario,nombre,apellido_p,apellido_m,telefono,correo,idReservacion,idViaje)).toStrictEqual(nuevoUsuario);
    })
})
/*
describe("AltaServicio", () => {
    it('should return "AltaServicio"', () => {
        expect(AltaServicio(idServicio,tipoServicio,ubicacion,precio)).toStrictEqual(nuevoServicio);
    })
})*/
/*
describe("BajaUsuario", () => {
    it('should be true', () => {
        expect(BajaUsuario(indexUser)).toBeFalsy()
    })
})
/*
describe("VerAsociado", () => {
    it('should return all Contributors', () => {
        expect(VerAsociado()).toStrictEqual(data)
    })
})/*
describe("VerUsuarios", () => {
    it('should return all Users', () => {
        expect(VerUsuarios()).toStrictEqual(contsData)
    })
})


/*
const data3 = new Array<Viajes>(allTripsIndex);
for(let i=0; i < allTripsIndex; i++) {
    data3[i] = allTrips[i]
}

const data4 = new Array<Reservaciones>(allReservIndex);
for(let i=0; i < allReservIndex; i++) {
    data4[i] = allReserv[i]
}*/

/*
describe("BuscarUsuario", () => {

    it('should be true', () => {
        expect(BuscarUsuario(indexUser)).toBeFalsy()
    })
})
*/




