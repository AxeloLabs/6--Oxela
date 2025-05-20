'use server'

import {revalidateTag} from 'next/cache'
// import { dc } from '@/lib/data-connect'
// import { createProductReview } from '@firebasegen/default-connector'

export type CreateReviewPayload = {
  productId: string
  customerId: string
  rating: number
  content: string
}

// export const handleCreateReview = async (payload: CreateReviewPayload) => {
export const handleCreateReview = async () => {
  // TODO - MOCK
  // await createProductReview(dc, payload)
  // Reset reviews cache
  revalidateTag('reviews')
}
