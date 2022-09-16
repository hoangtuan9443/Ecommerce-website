import Item from "./Item"
import { useSelector } from 'react-redux'


const ListItem = () => {
    const data = useSelector(state => state.productsReducer.products)

    return (
        <div className="flex flex-wrap w-[1242px] mx-auto my-[75px]">
            {data.map((item, index) => {
                return (
                    <Item 
                    key={index}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    num={item.num}
                    taxes={item.taxes}
                    price={item.price}
                    />
                )
            })}
        </div>
    )
}

export default ListItem