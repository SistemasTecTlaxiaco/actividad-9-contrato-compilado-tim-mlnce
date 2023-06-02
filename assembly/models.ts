import { context, PersistentVector, u128 } from "near-sdk-as";

export class Usuario {
  idUsuario: string;
  nombre: string;
  apellido_p: string;
  apellido_m: string;
  telefono: string;
  correo: string;
  idReservacion:string;
  idViaje: string;
  
  constructor(idUsuario: string, nombre: string,apellido_p: string, apellido_m: string, 
    telefono:string, correo: string, idReservacion: string, idViaje: string) {
    this.idUsuario = idUsuario;
    this.nombre = nombre;
    this.apellido_p = apellido_p;
    this.apellido_m = apellido_m;
    this.telefono = telefono;
    this.correo = correo;
    this.idReservacion = idReservacion;
    this.idViaje = idViaje;
  }

}

export class Servicios{
    idServicio: string;
    tipoServicio: string;
    ubicacion: string;
    precio: string;

    constructor(idServicio:string, tipoServicio: string, ubicacion: string, precio: string) {
        this.idServicio = idServicio;
        this.tipoServicio = tipoServicio;
        this.ubicacion= ubicacion;
        this.precio=precio;
    }
}

export class Viajes {
  idViaje: string;
  inicioViaje: string;
  destino:string;
  servicio:string;
  precio:string;
  idReservacion:string;

  
  constructor(idViaje: string, inicioViaje: string,destino: string, servicio: 
    string, precio:string, idReservacion: string) {
    
    this.idViaje = idViaje;
    this.inicioViaje = inicioViaje;
    this.destino= destino;
    this.servicio = servicio;
    this.precio = precio;
    this.idReservacion= idReservacion;
    
  }
}

export class Asociados {
  idAsociado: string;
  nombre: string;
  apellido_p: string;
  apellido_m: string;
  telefono: string;
  correo: string;
  idServicio: string;
  
  constructor(idAsociado: string, nombre: string,apellido_p: string, apellido_m: string, telefono:string, 
    correo: string, idServicio: string) {
    
    this.idAsociado = idAsociado;
    this.nombre = nombre;
    this.apellido_p = apellido_p;
    this.apellido_m = apellido_m;
    this.telefono = telefono; 
    this.correo = correo;
    this.idServicio = idServicio;
    
  }

}

export class Reservaciones {
  idReservaciones: string;
  servicio: string;
  fecha: string;
  costo: string;
  confirmacion: string;
  idServicio: string;
  
  constructor(idReservaciones: string, servicio: string, fecha: string, costo: string, confirmacion: string,
     idServicio: string) {
    //this.owner = context.sender;
    this.idReservaciones = idReservaciones;
    this.servicio = servicio;
    this.fecha = fecha;
    this.costo = costo;
    this.confirmacion = confirmacion;  
    this.idServicio = idServicio;
    
  }

}


export const allUsers = new PersistentVector<Usuario>("u")
export const allContributors = new PersistentVector<Asociados>("a")
export const allServices = new PersistentVector<Servicios>("s")
export const allTrips = new PersistentVector<Viajes>("v")
export const allReserv = new PersistentVector<Reservaciones>("r")
export const ONE_NEAR = u128.from('10000000000000000')

