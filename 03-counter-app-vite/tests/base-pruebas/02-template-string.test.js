import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas 02-template-string', () => {
    test('La funcion getSaludo debe retornar un saludo más el nombre', () => {
        
        const name = 'Alfredo'

        const message = getSaludo( name )

        expect( message ).toBe(`Hola ${name}`)
        })    
})