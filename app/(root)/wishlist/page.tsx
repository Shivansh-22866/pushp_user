"use client"

import Loader from "@/app/components/Loader"
import ProductCard from "@/app/components/ProductCard"
import { getProductDetails } from "@/lib/actions"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState, useCallback } from "react"

const Wishlist = () => {
  const { user } = useUser()

  const [loading, setLoading] = useState(true)
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null)
  const [wishlist, setWishlist] = useState<ProductType[]>([])

  const getUser = useCallback(async () => {
    try {
      const res = await fetch("/api/users")
      const data = await res.json()
      setSignedInUser(data)
      setLoading(false)
    } catch (err) {
      console.log("[users_GET", err)
    }
  }, [])

  useEffect(() => {
    if (user) {
      getUser()
    }
  }, [user, getUser])

  const getWishlistProducts = useCallback(async () => {
    setLoading(true)

    if (!signedInUser) return

    const wishlistProducts = await Promise.all(signedInUser.wishlist.map(async (productId) => {
      const res = await getProductDetails(productId)
      return res
    }))

    setWishlist(wishlistProducts)
    setLoading(false)
  }, [signedInUser])

  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts()
    }
  }, [signedInUser, getWishlistProducts])

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser)
  }

  return loading ? <Loader /> : (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">Your Wishlist</p>
      {wishlist.length === 0 && (
        <p>No items in your wishlist</p>
      )}

      <div className="flex flex-wrap justify-center gap-16">
        {wishlist.map((product) => (
          <ProductCard key={product._id} product={product} updateSignedInUser={updateSignedInUser}/>
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";

export default Wishlist