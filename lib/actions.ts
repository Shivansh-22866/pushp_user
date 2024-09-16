export const getCollections = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL2}/collections//`);

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            console.log(response)
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Attempt to parse the response as JSON
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Failed to fetch collections:", error);
        // Optionally, you can return a default value or rethrow the error
        return null; // or handle it as needed
    }
}

export const getProducts = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products//`);

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            console.log(response)
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Attempt to parse the response as JSON
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error("Failed to fetch collections:", error);
        // Optionally, you can return a default value or rethrow the error
        return null; // or handle it as needed
    }
  }

  export const getProductDetails = async (productId: string) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL3}/products/${productId}`)
    return await product.json()
  }

  export const getSearchedProducts = async (query: string) => {
    const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
    return await searchedProducts.json()
  }

  export const getCollectionDetails = async (collectionId: string) => {
    const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}/`)
    return await collection.json()
  }

  export const getOrders = async (customerId: string) => {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
    return await orders.json()
  }

  export const getRelatedProducts = async (productId: string) => {
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
    return await relatedProducts.json()
  }