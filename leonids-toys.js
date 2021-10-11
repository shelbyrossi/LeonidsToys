const toys = [
    {
        id: 1,
        name: "Barbie",
        maker: "Matel",
        // price: 20,
        color: "pink"

    },
    {
        id: 2,
        name: "Super Soaker",
        maker: "Hasbro",
        // price: 30,
        color: "black"
    },
    {
        id: 3,
        name: "Lego Batman",
        maker: "Legos",
        // price: 15,
        color: "multi"
    }
]

const newtoy = {
    id: 4,
    name: "Mario",
    maker: "Nintendo",
    // price: 400

}

const othertoy = {

    id: 5,
    name: "remote",
    maker: "xbox",
    // price: 150
}



toys.push(newtoy)
toys.push(othertoy)


const toyToFind = 2


for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price + 0.5
        console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars`)
    }

}


// const searchTerm = "remote"

// for (const toy of toys) {
//     if (toy.name === searchTerm) {
//         console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`)
//     }
// }

const lightbright = {
    name: "lightbright",
    maker: "walmart",
    //    price: 20
}

const addToy = (toyObject) => {

    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToy(lightbright)

for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars`)
}




// CHALLENGE


// let pricesToAdd = new Map([["Barbie", 20]],["Super Soaker", 50],["Lego Batman", 10])


// for (let [name, price] of pricesToAdd) {
//   console.log(name,);
// }

const ToysSet = new Set()

const Barbie = {
    id: 1,
    name: "Barbie",
    color: "Pink",
    brand: "Mattel"
}

const Lego = {
    id: 2,
    name: "Lego",
    color: "multi",
    brand: "Lego"
}

const superSoaker = {
    id: 3,
    name: "Super Soaker",
    color: "matte black",
    brand: "Target"
}

ToysSet.add(Barbie)
ToysSet.add(Lego)
ToysSet.add(Lego)
ToysSet.add(superSoaker)



console.log(ToysSet)