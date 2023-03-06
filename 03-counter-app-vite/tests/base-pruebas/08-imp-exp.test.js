import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un hero por ID', () => { 
        const id = 1
        const hero = getHeroeById(id)

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe retornar undefined si Hero no existe', () => { 
        const id = 1000
        const hero = getHeroeById(id)
        console.log(hero)

        //expect(hero).toBe(undefined)
        expect(hero).toBeFalsy(); //este metodo espera que el valor sea, false-null-undefined cualquiera de los 3
        //expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe retornar una lista por owner DC', () => { 
         
        const ownerDC = 'DC'
        const arreglo = getHeroesByOwner(ownerDC)
        console.log(arreglo)
        expect(arreglo.length).toBe(3)
        expect(arreglo).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
    })

    test('getHeroeById debe retornar una lista por owner Marvel', () => { 
         
        const ownerMarvel = 'Marvel'
        const arregloMarvel = getHeroesByOwner(ownerMarvel)
        console.log(arregloMarvel)
        expect(arregloMarvel.length).toBe(2)
        expect(arregloMarvel).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ])
    })
 })



