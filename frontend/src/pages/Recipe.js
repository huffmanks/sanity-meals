import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client'
import BlockContent from "@sanity/block-content-to-react";

export default function Recipe() {

    const [recipeData, setRecipe] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            _id,
            recipeName,
            slug,
            category->,
            ingredient[] {
                quantity,
                unit,
                ingredient->{
                    ingredientName,
                    ingredientImage{
                        asset->{
                            _id,
                            url
                        }
                    }
                }
            },
            instructions,
            recipeImage{
                asset->{
                    _id,
                    url
                }
            }

        }`)
        .then((data) => setRecipe(data[0]))
        .catch(console.error)
    }, [slug])

    if (!recipeData) return <div>Loading...</div>

    return (
        <main className="container max-w-5xl mx-auto my-12 p-12">
            <section>
                <h1 className="text-6xl">{recipeData.recipeName}</h1>
                <div>
                    <img className="w-full max-w-5xl my-4" src={recipeData.recipeImage.asset.url} alt={recipeData.recipeName} />
                    <div className="inline-block bg-indigo-600 text-white text-xs leading-tight rounded-full py-2 px-3">{recipeData.category.categoryName}</div>
                </div>
                <div className="my-8">
                    <h3 className="mb-4 text-2xl">Ingredients</h3>
                    
                    {recipeData && recipeData.ingredient.map((ing) => (
                        <div className="flex items-center p-4 mb-1 bg-gray-100 rounded">
                            <div>
                                <img className="max-w-full w-8 mr-4 rounded-full" src={ing.ingredient.ingredientImage.asset.url} alt={ing.ingredient.ingredientName} />
                            </div>
                            <div>{ing.quantity} {ing.unit} {ing.ingredient.ingredientName}</div>
                        </div>
                    ))}

                </div>
                <div>
                    <h3 className="mb-4 text-2xl">Instructions</h3>
                    <div className="px-8">
                        <BlockContent blocks={recipeData.instructions} projectId="o1t1b3av" dataset="production" />
                    </div>
                </div>
            </section>
        </main>
    )
}
