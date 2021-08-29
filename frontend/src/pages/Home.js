import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'

export default function Home() {

    const [recipesData, setRecipes] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "recipe"]{
            recipeName,
            slug,
            category,
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
        <main>
            {recipesData && recipesData.map((recipe, index) => (
                <div className="card">
                    <Link to={"/recipe/" + recipe.slug.current} key={recipe.slug.current}>
                    <img className="w-full max-w-xs" src={recipe.recipeImage.asset.url} alt={recipe.recipeName} />
                    <h3>{recipe.recipeName}</h3>
                    </Link>
                </div>
            ))}
        </main>
    )
}
