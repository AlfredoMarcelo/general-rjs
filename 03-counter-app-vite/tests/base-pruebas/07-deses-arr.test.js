import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Prueba 07-deses arreglo', () => { 
    test('Debe retornar un string y un numero', () => { 
        

        const [letters, numbers] = retornaArreglo()

        //toBe igual evaulua el tipo de dato
        expect( letters ).toBe( 'ABC' )
        expect( numbers ).toBe( 123 )

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')
        //Este metodo es más flexible porq solo se fija que sea un string
        expect(letters).toEqual(expect.any(String))
    }) 
})