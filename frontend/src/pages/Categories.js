import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'

export default function Categories() {

    const [categoriesData, setCategories] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "category"]{
            categoryName,
            slug,
            categoryImage{
                asset->{
                    _id,
                    url
                }
            }
        }`)
        .then((data) => setCategories(data))
        .catch(console.error)
    }, [])

    return (
        <main className="container max-w-5xl mx-auto my-12 p-12">
            <section className="flex items-center justify-center gap-8">
                {categoriesData && categoriesData.map((category, index) => (
                    <div className="bg-white rounded-lg">
                        <Link to={"/category/" + category.slug.current} key={category.slug.current}>
                        <div>
                            <img className="w-full max-w-md rounded-lg rounded-b-none" src={category.categoryImage.asset.url} alt={category.recipeName} />
                        </div>
                        <div className="flex items-center justify-center p-4">
                            <h3 className="text-2xl">{category.categoryName}</h3>
                        </div>
                        </Link>
                    </div>
                ))}
            </section>
        </main>
    )
}
