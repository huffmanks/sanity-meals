import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'

export default function Home() {

    const [recipesData, setRecipes] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "recipe"]{
            recipeName,
            slug,
            category->{
                categoryName,
                slug
            },
            recipeImage{
                asset->{
                    _id,
                    url
                }
            }

        }`)
        .then((data) => setRecipes(data))
        .catch(console.error)
    }, [])

    return (
        <main className="container max-w-5xl mx-auto my-12 p-12">
            <section className="flex flex-wrap items-center justify-center gap-8">
                {recipesData && recipesData.map((recipe, index) => (
                    <div className="bg-white rounded-lg">
                        <Link to={"/recipe/" + recipe.slug.current} key={recipe.slug.current}>
                        <div>
                            <img className="w-full max-w-md rounded-lg rounded-b-none" src={recipe.recipeImage.asset.url} alt={recipe.recipeName} />
                        </div>
                        </Link>
                        <div className="flex items-center justify-between p-4">
                            <h3 className="text-2xl">{recipe.recipeName}</h3>
                            <Link to={"/category/" + recipe.category.slug.current}>
                                <div className="inline-block bg-indigo-600 text-white text-xs leading-tight rounded-lg py-2 px-3">{recipe.category.categoryName}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}
