const items = [
    {id: 1, name: 'Product 1', price: 400, code: '001'},
    {id: 2, name: 'Product 2', price: 500, code: '002'},
    {id: 3, name: 'Product 3', price: 600, code: '003'},
    {id: 4, name: 'Product 4', price: 300, code: '004'},
    {id: 5, name: 'Product 5', price: 1200, code: '005'},
    {id: 6, name: 'Product 6', price: 2300, code: '006'},
]

export function Products() {
    const productList = items.map(item => <div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <p>code:{item.code}</p>
    </div>)
    // const productList2 = items.map(({name, price}) => <p>{name} {price}</p>)


    return (<>
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    {productList}
                    {/*{productList2}*/}
                </div>
            </div>
        </div>
    </>)
}
