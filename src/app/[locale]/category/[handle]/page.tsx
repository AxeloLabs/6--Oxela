import CardOverlay from '@/components/card-overlay'
import ProductList from '@/components/sections/product-list'
// import { dc } from '@/lib/data-connect'
// import { getCollectionByHandle } from '@firebasegen/default-connector'

export default async function ProductListPage({params}: {params: Promise<{handle: string}>}) {
  const handle = (await params).handle

  // < MOCK START >
  const dc = {}
  const getCollectionByHandle = async (_dc: any, {handle}: {handle: string}) => {
    return {
      data: {
        collections: [
          {
            id: 'collection-001',
            name: `Collection 2025 ${handle}`,
            description: 'Une collection test générée pour démo web agency.',
            page: 'home',
            handle,
            featuredImage: {
              url: 'https://placehold.co/600x400',
              width: 600,
              height: 400,
              altText: 'Image de la collection'
            },
            seo: {
              title: 'SEO Titre - Collection',
              description: 'Description SEO pour cette collection',
              keywords: 'web, agence, collection, template'
            },
            products_via_ProductCollection: [
              {
                id: 'product-1',
                title: 'Template Blog Pro',
                handle: 'template-blog-pro',
                description: 'Un template moderne et SEO-friendly pour blog.',
                availableForSale: true,
                createdAt: '2024-01-01T10:00:00Z',
                updatedAt: '2024-02-01T12:00:00Z',
                productVariants_on_product: [
                  {
                    id: 'variant-1a',
                    price: 49.99,
                    availableForSale: true,
                    inventoryQuantity: 100,
                    selectedOptions_on_productVariant: [
                      {name: 'Style', value: 'Minimal'},
                      {name: 'CMS', value: 'Statique'}
                    ]
                  }
                ],
                productImages_on_product: [
                  {
                    id: 'img-1a',
                    url: 'https://placehold.co/400x300',
                    altText: 'Aperçu du blog',
                    width: 400,
                    height: 300,
                    displayPosition: 1
                  }
                ]
              },
              {
                id: 'product-2',
                title: 'Site E-commerce Firebase',
                handle: 'ecommerce-firebase',
                description: 'Solution complète avec panier, paiement et admin.',
                availableForSale: true,
                createdAt: '2024-03-15T08:30:00Z',
                updatedAt: '2024-04-10T09:45:00Z',
                productVariants_on_product: [
                  {
                    id: 'variant-2a',
                    price: 149.0,
                    availableForSale: true,
                    inventoryQuantity: 50,
                    selectedOptions_on_productVariant: [
                      {name: 'Backend', value: 'Firebase'},
                      {name: 'Paiement', value: 'Stripe'}
                    ]
                  }
                ],
                productImages_on_product: [
                  {
                    id: 'img-2a',
                    url: 'https://placehold.co/400x300',
                    altText: 'Aperçu e-commerce',
                    width: 400,
                    height: 300,
                    displayPosition: 1
                  }
                ]
              },
              {
                id: 'product-3',
                title: 'Application SPA React',
                handle: 'app-spa-react',
                description: 'App moderne avec authentification et dashboard.',
                availableForSale: true,
                createdAt: '2024-02-20T14:00:00Z',
                updatedAt: '2024-03-05T10:00:00Z',
                productVariants_on_product: [
                  {
                    id: 'variant-3a',
                    price: 299.0,
                    availableForSale: true,
                    inventoryQuantity: 10,
                    selectedOptions_on_productVariant: [
                      {name: 'Tech', value: 'React + Tailwind'},
                      {name: 'Fonctionnalités', value: 'Auth + API'}
                    ]
                  }
                ],
                productImages_on_product: [
                  {
                    id: 'img-3a',
                    url: 'https://placehold.co/400x300',
                    altText: 'Aperçu SPA',
                    width: 400,
                    height: 300,
                    displayPosition: 1
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }

  // < MOCK END >

  const {data: collectionData} = await getCollectionByHandle(dc, {handle})
  const collection = collectionData?.collections?.at(0)
  const products = collection?.products_via_ProductCollection

  return (
    <>
      <ProductList
        title={collection?.name as string}
        products={products?.map((product) => ({
          id: product.id,
          title: product.title,
          handle: product.handle,
          featuredImage: product.productImages_on_product[0],
          variants: product.productVariants_on_product
        }))}
      />
      <CardOverlay
        title={collection?.name as string}
        description={collection?.description as string}
        cta={{label: 'Shop Now', href: `/category/${handle}`}}
        image={
          collection?.featuredImage?.url ??
          (products?.[0]?.productImages_on_product?.[0]?.url as string)
        }
        align="center"
      />
    </>
  )
}
