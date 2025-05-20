import OrderSummary from '@/components/sections/order-summary'
// import { getOrderById } from '../../../../dataconnect-generated/js/default-connector'
// import { dc } from '@/lib/data-connect'

export default async function OrderSummaryPage({params}: {params: Promise<{id: string}>}) {
  const id = (await params).id

  const orderMock = {
    data: {
      order: {
        id,
        customerId: 'user-5678',
        processedAt: '2025-05-26T14:00:00.000Z',
        receiptUrl: 'https://example.com/receipt/order-1234',
        totalPrice: 417,
        financialStatus: 'PAID',
        fulfillmentStatus: 'FULFILLED',
        orderItems_on_order: [
          {
            id: 'item-001',
            quantity: 1,
            price: 149,
            product: {
              id: 'prod-001',
              title: 'Ecom Stripe + Admin',
              handle: 'ecom-stripe-admin',
              productImages_on_product: [
                {
                  url: 'https://placehold.co/400x300/orange/1A1A1A?text=Ecom',
                  altText: 'Aperçu admin ecom',
                  width: 400,
                  height: 300
                }
              ]
            }
          },
          {
            id: 'item-002',
            quantity: 2,
            price: 89,
            product: {
              id: 'prod-002',
              title: 'Landing Freemium / SaaS',
              handle: 'landing-freemium',
              productImages_on_product: [
                {
                  url: 'https://placehold.co/400x300/orange/1A1A1A?text=SaaS',
                  altText: 'Landing SaaS',
                  width: 400,
                  height: 300
                }
              ]
            }
          },
          {
            id: 'item-003',
            quantity: 1,
            price: 90,
            product: {
              id: 'prod-003',
              title: 'SPA Auth + Dashboard',
              handle: 'spa-auth-dashboard',
              productImages_on_product: [
                {
                  url: 'https://placehold.co/400x300/orange/1A1A1A?text=SPA',
                  altText: 'Dashboard React SPA',
                  width: 400,
                  height: 300
                }
              ]
            }
          }
        ]
      }
    }
  }

  // Mock
  const {data} = orderMock
  // const { data } = await getOrderById(dc, { id })

  return <OrderSummary order={data?.order} />
}
