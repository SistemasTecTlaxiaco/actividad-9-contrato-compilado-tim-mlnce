//import assert = require('assert');
import {  context,logging, ContractPromiseBatch, u128 } from 'near-sdk-as';
//import { Usuario} from './models'
import { Usuario, allUsers, Asociados, allContributors,allServices,Servicios,allTrips, Viajes,allReserv,Reservaciones, ONE_NEAR  } from './models';

//const contractOwner = context.sender;
const allUsersIndex = allUsers.length;
const allContributorsIndex = allContributors.length;
const allServicesIndex = allServices.length;
const allTripsIndex = allTrips.length;
const allReservIndex = allReserv.length;
//USUARIO
export function AltaUsuario (idUsuario: string, nombre: string,apellido_p: string, apellido_m: string,
     telefono: string, correo: string, idReservacion: string, idViaje: string): Usuario {
    const nuevoUsuario = new Usuario (idUsuario,nombre,apellido_p,apellido_m,telefono,correo,idReservacion,idViaje);
    allUsers.push(nuevoUsuario);
    logging.log('Un usuario ha sido dado de alta: ' + nuevoUsuario.nombre)
    return nuevoUsuario;
}

export function BuscarUsuario(UserIndex:i32): Usuario {
    if(allUsers.length < UserIndex) {
        logging.log('El Usuario no existe')
    }
    return allUsers[UserIndex]
}

export function BajaUsuario(UserIndex: i32): boolean {
    if(allUsers.length < UserIndex) {
        logging.log('El Usuario no existe')
        return false
    }
    allUsers.swap_remove(UserIndex);
    logging.log('El usuario ha sido dado de baja');
    return true
}
export function VerUsuarios(): Usuario[] {
    const data = new Array<Usuario>(allUsersIndex);
    for(let i = 0; i < allUsersIndex; i++) {
        data[i] = allUsers[i]
    }
    return data;
}
export function updateUsuario(allUsersIndex: i32, updated: Usuario): boolean { 
    if (allUsersIndex >= 0 && allUsersIndex < allUsers.length) {
        let existing = allUsers[allUsersIndex];
        existing.idUsuario = updated.idUsuario;
        existing.nombre = updated.nombre;
        existing.apellido_p = updated.apellido_p;
        existing.apellido_m = updated.apellido_m;
        existing.telefono = updated.telefono;
        existing.correo = updated.correo;
        existing.idReservacion = updated.idReservacion;
        existing.idViaje = updated.idViaje;
        logging.log('El usuario ha sido modificado!');
        return true;
    } else {
        logging.log('Usuario no registrado');
        return false;
    }
}
//Asociados
export function AltaAsociado (idAsociado: string, nombre: string,apellido_p: string, apellido_m: string, telefono:string, 
    correo: string, idServicio: string): Asociados {
    const nuevoAsociado = new Asociados(idAsociado,nombre, apellido_p,apellido_m,telefono,correo,idServicio);
    allContributors.push(nuevoAsociado);
    logging.log('Asociado dado de alta ' + nuevoAsociado.nombre)
    return nuevoAsociado;
}

export function BuscarAsociado (AsociadoIndex: i32): Asociados {
    if(allContributors.length < AsociadoIndex) {
        logging.log('El Asociado no existe')
    }
    return allContributors[AsociadoIndex]
}

export function BajaAsociado (AsociadoIndex: i32): boolean {
    if(allContributors.length < AsociadoIndex) {
        logging.log('El Usuario no existe')
        return false
    }
    allUsers.swap_remove(AsociadoIndex);
    logging.log('El Asociado ha sido dado de baja');
    return true
}
export function VerAsociado(): Asociados[] {
    const data = new Array<Asociados>(allContributorsIndex);
    for(let i = 0; i < allContributorsIndex; i++) {
        data[i] = allContributors[i]
    }
    return data;
}
//export function Confirmacion(): Asociados[] { 
  //  logging.log('Confirmado!')
  
//}
//SERVICIO
export function AltaServicio (idServicio:string, tipoServicio: string, ubicacion: string, precio: string): Servicios {
    const nuevoServicio = new Servicios(idServicio,tipoServicio,ubicacion,precio);
    allServices.push(nuevoServicio);
    logging.log('Asociado dado de alta ' + nuevoServicio.tipoServicio)
    return nuevoServicio;
}

export function BuscarServicio (ServicioIndex:i32): Servicios {
    if(allServices.length < ServicioIndex) {
        logging.log('El servicio no existe')
    }
    return allServices[ServicioIndex]
}

export function BajaServicio (ServicioIndex: i32): boolean {
    if(allServices.length-1 < ServicioIndex) {
        logging.log('El servicio no existe')
        return false
    }
    allServices.swap_remove(ServicioIndex);
    logging.log('El Servicio ha sido dado de baja');
    return true
}
export function VerServicio(): Servicios[] {
    const data = new Array<Servicios>(allServicesIndex);
    for(let i = 0; i < allServicesIndex; i++) {
        data[i] = allServices[i]
    }
    return data;
}
//VIAJES

export function AltaViajes (idViaje: string, inicioViaje: string,destino: string, servicio: 
    string, precio:string, idReservacion: string): Viajes {
    const nuevoViaje = new Viajes(idViaje,inicioViaje,destino,servicio,precio,idReservacion);
    allTrips.push(nuevoViaje);
    logging.log('Viaje dado de alta ' + nuevoViaje.destino)
    return nuevoViaje;
}


export function updateViajes(allTripsIndex: i32, updatedTrips: Viajes): boolean {
    if (allTripsIndex >= 0 && allTripsIndex < allTrips.length) {
        let existingViajes = allTrips[allTripsIndex];
        existingViajes.idViaje = updatedTrips.idViaje;
        existingViajes.inicioViaje = updatedTrips.inicioViaje;
        existingViajes.destino = updatedTrips.destino;
        existingViajes.servicio = updatedTrips.servicio;
        existingViajes.precio = updatedTrips.precio;
        existingViajes.idReservacion = updatedTrips.idReservacion;
        logging.log('El viaje ha sido modificado!');
        return true;
    } else {
        logging.log('Viaje no registrado');
        return false;
    }
}

export function deleteViaje(allTripsIndex: i32 ): boolean {
    if (allTripsIndex >= 0 && allTripsIndex < allTrips.length) {
        allTrips.swap_remove(allTripsIndex);
        logging.log('The book has been deleted!');
        return true;
    } else {
        logging.log('This book doesn\'t exist');
        return false;
    }
}


//RESERVACIONES

export function AltaReservacion(idReservaciones: string, servicio: string, fecha: string, costo: string, confirmacion: string,
    idServicio: string): Reservaciones {
    const nuevoReservacion = new Reservaciones (idReservaciones,servicio,fecha,costo,confirmacion,idServicio);
    allReserv.push(nuevoReservacion);
    logging.log('Reservacion dado de alta ' + nuevoReservacion.servicio)
    return nuevoReservacion;
}
export function BuscarReservacion (ReservIndex:i32): Reservaciones {
    if(allReserv.length < ReservIndex) {
        logging.log('la reservacion no existe')
    }
    return allReserv[ReservIndex]
}
export function updateReserv(allTripsIndex:i32, updatedTrips: Reservaciones): boolean { 
    if (allReservIndex >= 0 && allReservIndex < allReserv.length) {
        let existing = allReserv[allReservIndex];
        existing.idReservaciones = updatedTrips.idReservaciones;
        existing.servicio = updatedTrips.servicio;
        existing.fecha = updatedTrips.fecha;
        existing.costo = updatedTrips.costo;
        existing.confirmacion = updatedTrips.confirmacion;
        existing.idServicio = updatedTrips.idServicio;
        logging.log('La reservacion ha sido modificada!');
        return true;
    } else {
        logging.log('La reservacion no existe');
        return false;
    }
}

export function deleteReservacion (allReservIndex: i32 ): boolean {
    if (allReservIndex >= 0 && allReservIndex < allReserv.length) {
        allReserv.swap_remove(allReservIndex);
        logging.log('The book has been deleted!');
        return true;
    } else {
        logging.log('This book doesn\'t exist');
        return false;
    }
}
/*// Lets the user make a donation to the project
export function PagoServicio (): void {
    assert(context.attachedDeposit > ONE_NEAR, 'Necesitas depositar NEARs.')
    logging.log('Gracias')
}*/

