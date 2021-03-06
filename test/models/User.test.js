const User = require("./../../app/models/User")

describe('Unit test for User', ()=>{
    test('1) Create an user Object', ()=>{
        //Aquí escribimos el código que vamos a usar en la app
        const user = new User( 1, "carlogilmar", "Carlo", "Bio")

        //Aqui van los resultados del código
        //valor obtenido del código vs el esperado
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        // expect(user.dateCreated).toBe("dateCreated")
        // expect(user.lastUpdated).toBe("lastUpdated")

    })
    test('2) Requeromiento 2: fechas en atributos de User',()=>{
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

    })
    test("3) Add getters", ()=>{
        const user3 = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user3.getUsername).toBe("carlogilmar")
        expect(user3.getBio).toBe("Bio")
        expect(user3.getDateCreated).not.toBeUndefined()
        expect(user3.getLastUpdated).not.toBeUndefined()
    })
    test("4) Add setters", ()=>{
        const user = new User(1, "carlogilmar", "Carlo", "Bios")
        user.setUsername = "Gilmar"
        expect(user.username).toBe("Gilmar")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
    test("test Prueba2 agragando una funcion", ()=>{
        const user2 = new User(2, "tamalito", "Joaquin", "a Bio" )
        expect(user2.id).toBe(2)
        expect(user2.username).toBe("tamalito")
        expect(user2.bio).toBe("a Bio")
        expect(user2.dateCreated).not.toBeUndefined
        expect(user2.lastUpdated).not.toBeUndefined
        expect(user2.showInfo()).toBe("El id es: 2 de tamalito")
        
    })
    
})