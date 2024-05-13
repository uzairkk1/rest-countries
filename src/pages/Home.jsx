import { useLoaderData } from "react-router-dom"
import Card from "../components/Card"

export default function HomePage() {
    const data = useLoaderData()
    return (
        
        <div className="">
            <div>
                <div>
                    search
                </div>
                <div>
                    region
                </div>
            </div>
            <div className="countries__wrapper flex">
                {
                    data.map(item => {
                        return (
                            <div key={item.name.official} className="col-3">
                                <Card item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}