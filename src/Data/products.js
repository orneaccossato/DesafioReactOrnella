const products = [
{id:1,
categoryId: "barrita helada",
sabor: "chocolate",
veggie: true,
precio: "$200",
Image: "https://i.pinimg.com/564x/57/0a/ad/570aad4705dce30ad8c3c9aff667ffde.jpg"
},
{
id:2,
categoryId: "barrita helada",
sabor: "kinder",
veggie:false,
precio: "$200",
Image: "https://i.pinimg.com/564x/b0/b4/91/b0b4919986b249eab05c430faae50aa4.jpg"
},
{id:3,
categoryId: "barrita helada",
sabor: "sniker",
veggie: false,
precio: "$200",
Image: "https://i.pinimg.com/564x/bc/b3/d5/bcb3d5f95a68cfa22abd4407e5b24088.jpg"
},
{id:4,
categoryId: "barrita helada",
sabor: "frambuesa",
veggie: true,
precio: "$200",
Image: "https://i.pinimg.com/564x/0f/fa/18/0ffa182277370dae340b8cd1df1b5743.jpg"
},
{id:5,
categoryId: "paleta helada",
sabor: "menta granizada",
veggie: false,
precio: "$600",
Image: "https://i.pinimg.com/564x/86/b5/6e/86b56e97b232973af0bd77e111007f5a.jpg"
},
{id:6,
categoryId: "paleta helada",
sabor: "frutilla",
veggie: true,
precio: "$600",
Image: "https://i.pinimg.com/564x/f9/61/01/f96101e3f497ed0590d194aeb5311d98.jpg"
},
{id:7,
categoryId: "paleta helada",
sabor: "cookies",
veggie: true,
precio: "$600",
Image: "https://i.pinimg.com/474x/06/b2/85/06b2850cb38e8a9d639c0a77d0ba1e01.jpg"
}
]
const getProducts = new Promise ((acc, rej)=> {
    setTimeout(()=> {
        acc(products)
    }, [3000])
})

export default getProducts;