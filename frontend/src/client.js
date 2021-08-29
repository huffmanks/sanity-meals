import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'o1t1b3av',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true
})