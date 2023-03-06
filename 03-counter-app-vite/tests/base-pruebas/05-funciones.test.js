import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba en template 05-funciones', () => { 
    test('getUser debe retornar un Objeto', () => { 
        //Los objetos se comparan en su ubicación de memoria

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        //.toBe es igual a == compara valor
        //.toStrictEqual es igual a === compara tipo
        //. toEqual tambien sirve para comparar objetos
        expect(testUser).toStrictEqual(user)
    })


    test('getUsuarioActivo debe retornar un usuario con nombre', () => { 
        
        const nombre = 'Chocolo'

        const testUsuarioActivo = {
            uid: 'ABC567',
            username: nombre
        }

        const usuarioActivo = getUsuarioActivo(nombre)

        expect (testUsuarioActivo.username).toEqual( usuarioActivo.username);

    })
})