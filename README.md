[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/_3GMYSvv)
# Bienvenido a Turisteando por Mexico ✈️
---
Turisteando es un smart contract que te ayuda mantenerte organizado en  tus viajes. Este proyecto permite a los usuarios Registrar sus viajes y añadir reservaciones para un servicio de hospedaje, transporte, tours, etc. En un ambiente completamente descentralizado y así permitir a todos los usuarios obtener los recursos facilmente sin tener que visitar cientos de páginas diferentes hasta conseguir el recurso que buscaban.
Las funcionalidades principales del contrato son las siguientes:
* Alta de un usuario
* Busqueda de un usuario.
* Baja de un usuario
* Obtener lista usuarios
* Actualizar datos de un usuario.
* Alta de un viaje
* Actualizar viaje
* Cancelar viaje
* Hacer una reservacion
* Actualiza reservacion
* Eliminar reservacion
## Cómo utilizar este contrato ❔
---
### Pré-requisitos ❕
1. Debe tener [Nodejs](https://nodejs.org/en/) instalado en su versión 12.0 o mayor.
2. Debe tener instalado [Yarn](https://yarnpkg.com/). Para saber si lo tiene, ejecute el comando ```yarn --version ```. En caso de no tenerlo, puede instalarlo ejecutando el comando ```sudo npm install -g yarn```
3. Instale las dependencias de yarn ejecutando ```yarn install```
4. Debe tener una cuenta en la [testnet de NEAR](https://wallet.testnet.near.org/)
5. Debe tener [NEAR-CLI](https://github.com/near/near-cli) instalado globalmente en su ordenador. Para saber si ya lo tiene instalado, ejecute ```near --version```. En caso de no tenerlo, instálelo ejecutando el comando ```sudo npm install -g near-cli``` 

Ya tenemos todo lo que necesitamos para probar nuestro contrato inteligente. Ahora vamos a ejecutarlo.

## Instalación 📖🐱‍💻
---
1. Clone el repositorio ```git clone git@github.com```
2. Vamos a iniciar sesión en nuestra wallet que creamos anteriormente: ```near login```
3. Dentro del repositorio, instalemos las dependencias del proyecto ejecutando ```npm install```, tranquilo, esto puede tomar unos segundos.
4. Si quieres desplegar el contrato y probar sus funciones, puedes hacerlo con ```yarn deploy:dev``` esto le devolverá un conjunto de caracteres que empezarán por "dev-" seguido por numeros generados por la red. Guárdelo, lo necesitará si quiere probar los métodos del contrato inteligente.
5. Por último, si queremos ejecutar los tests desarrollados, podemos hacerlo ejecutando ```yarn test```
   
## Llamadas al Contrato 
---
Algunos de los metodos que podemos ejecutar son los siguientes
- Alta de un usuario 
  ```bash
 near call dev-<tu numero de contrato> AltaUsuario '{"idUsuario":  1, "nombre": "NombreUsuario", "apellido_p": "apellidoPaterno", "apellido_m": "apellidoMetreno", "telefono": 123456789 , "correo": "correo.com", "idReservacion": 1, "idViaje": 1}' --accountId <tu_user.testnet> 
  ```
- Buscar un usuario
```bash
  near call dev-<tu numero de contrato> BuscarUsuario '{"UserIndex": i32}' --accountId <tu_user.testnet>
  ```
- Dar de baja un usuario
```bash
 near call dev-<tu numero de contrato> BajaUsuario '{"UserIndex": i32}' --accountId <tu_user.testnet>
  ```
- 
- Ver asociados 
  ```bash
  near call dev-<tu numero de contrato> VerAsociado --accountId <tu_user.testnet>
    ```

  

## Authors
- [Karla Vázquez Ortiz](https://github.com/)
- [Melissa Solano Vázquez](https://github.com/)
- [Litzy López López, ](https://github.com/)
- [Noelia Natividad González Sánchez](https://github.com/)
- [Elisabet Rojas Domínguez](https://github.com/)
