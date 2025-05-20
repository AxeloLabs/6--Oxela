import OrderHistory from '@/components/sections/order-history'
// import { getOrdersByCustomerId } from '@firebasegen/default-connector'
// import {dc} from '@/lib/data-connect'
import {cookies} from 'next/headers'

export default async function OrdersPage() {
  const cookieStore = await cookies()
  const customerId = cookieStore.get('customerId')?.value ?? ''

  const ordersByCustomerMock = {
    data: {
      orders: {
        orders_on_customer: [
          {
            id: 'order-1001',
            customerId: customerId,
            processedAt: '2025-05-20T10:00:00.000Z',
            chargeId: 'ch_1Example001',
            paymentIntentId: 'pi_1Example001',
            receiptUrl: 'https://example.com/receipt/order-1001',
            subtotalPrice: 89,
            totalPrice: 89,
            financialStatus: 'PAID',
            fulfillmentStatus: 'FULFILLED',
            orderItems_on_order: [
              {
                id: 'item-1001',
                quantity: 1,
                price: 89,
                product: {
                  id: 'prod-landing',
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
              }
            ]
          },

          {
            id: 'order-1002',
            customerId: 'user-5678',
            processedAt: '2025-05-22T16:30:00.000Z',
            chargeId: 'ch_1Example002',
            paymentIntentId: 'pi_1Example002',
            receiptUrl: 'https://example.com/receipt/order-1002',
            subtotalPrice: 149,
            totalPrice: 149,
            financialStatus: 'PAID',
            fulfillmentStatus: 'PROCESSING',
            orderItems_on_order: [
              {
                id: 'item-1002',
                quantity: 1,
                price: 149,
                product: {
                  id: 'prod-ecom',
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
              }
            ]
          },

          {
            id: 'order-1003',
            customerId: 'user-5678',
            processedAt: '2025-05-25T09:15:00.000Z',
            chargeId: 'ch_1Example003',
            paymentIntentId: 'pi_1Example003',
            receiptUrl: 'https://example.com/receipt/order-1003',
            subtotalPrice: 179,
            totalPrice: 179,
            financialStatus: 'PAID',
            fulfillmentStatus: 'SHIPPED',
            orderItems_on_order: [
              {
                id: 'item-1003',
                quantity: 1,
                price: 90,
                product: {
                  id: 'prod-spa',
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
              },
              {
                id: 'item-1004',
                quantity: 1,
                price: 89,
                product: {
                  id: 'prod-landing',
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
              }
            ]
          }
        ]
      }
    }
  }

  const {data} = ordersByCustomerMock
  // mock
  // const { data } = await getOrdersByCustomerId(dc, { customerId })

  return (
    <section className="text-foreground bg-background">
      <div className="container pt-20 pb-10 lg:pt-48 lg:pb-20 space-y-10">
        <OrderHistory orders={data.orders} />
      </div>
    </section>
  )
}
