import {Locale, useTranslations} from 'next-intl'
import {setRequestLocale} from 'next-intl/server'
import {use} from 'react'
// import PageLayout from '@/components/PageLayout'
import CardCarousel from '@/components/sections/card-carousel'
import Details from '@/components/sections/details'
import Hero from '@/components/sections/hero'
import ProductGrid from '@/components/sections/product-grid'
import CategoryCard from '@/components/ui/category-card'
// import { getCollectionsByPage } from '@firebasegen/default-connector'
import {notFound} from 'next/navigation'
import CardOverlay from '@/components/card-overlay'

type Props = {
  params: Promise<{locale: Locale}>
}

export default function IndexPage({params}: Props) {
  // export default async function Home() {
  const {locale} = use(params)
  // Enable static rendering
  setRequestLocale(locale)
  const t = useTranslations('IndexPage')

  // < MOCK START>
  const dc = {}
  const getCollectionsByPage = (_dc: any, {page}: {page: string}) => {
    return {
      data: {
        collections: [
          {
            id: 'coll-001',
            name: 'Templates Blog',
            description:
              'Des blogs modernes, statiques ou dynamiques pour les créateurs de contenu.',
            handle: 'templates-blog',
            page,
            featuredImage: {
              url: 'https://placehold.co/600x400?text=Blog',
              width: 600,
              height: 400,
              altText: 'Image de blog'
            },
            products_via_ProductCollection: [
              {
                id: 'prod-001',
                title: 'Blog Minimaliste',
                handle: 'blog-minimaliste',
                description: 'Un template statique optimisé SEO.',
                productVariants_on_product: [
                  {
                    id: 'var-001a',
                    price: 39.0,
                    selectedOptions_on_productVariant: [
                      {name: 'CMS', value: 'Statique (SSG)'},
                      {name: 'Style', value: 'Clair'}
                    ]
                  }
                ],
                productImages_on_product: [
                  {
                    id: 'img-001a',
                    url: 'https://placehold.co/400x300?text=Minimal',
                    altText: 'Capture blog',
                    width: 400,
                    height: 300,
                    displayPosition: 1
                  }
                ]
              }
            ]
          },

          {
            id: 'coll-002',
            name: 'E-commerce Firebase',
            description: 'Sites e-commerce performants et personnalisables, basés sur Firebase.',
            handle: 'ecommerce-firebase',
            page,
            featuredImage: {
              url: 'https://placehold.co/600x400?text=Ecom',
              width: 600,
              height: 400,
              altText: 'Image e-commerce'
            },
            products_via_ProductCollection: [
              {
                id: 'prod-002',
                title: 'Ecom Stripe + Admin',
                handle: 'ecom-stripe-admin',
                description: 'Solution e-commerce avec gestion produit, paiement, etc.',
                productVariants_on_product: [
                  {
                    id: 'var-002a',
                    price: 149.0,
                    selectedOptions_on_productVariant: [
                      {name: 'Paiement', value: 'Stripe'},
                      {name: 'Backoffice', value: 'Intégré'}
                    ]
                  }
                ],
                productImages_on_product: [
                  {
                    id: 'img-002a',
                    url: 'https://placehold.co/400x300?text=Admin',
                    altText: 'Aperçu admin',
                    width: 400,
                    height: 300,
                    displayPosition: 1
                  }
                ]
              }
            ]
          },

          {
            id: 'coll-003',
            name: 'Applications SPA',
            description: 'Apps React avec routing dynamique, authentification, dashboard, etc.',
            handle: 'applications-spa',
            page,
            featuredImage: {
              url: 'https://placehold.co/600x400?text=SPA',
              width: 600,
              height: 400,
              altText: 'Image SPA'
            },
            products_via_ProductCollection: [
              {
                id: 'prod-003',
                title: 'SPA Auth + Dashboard',
                handle: 'spa-auth-dashboard',
                description: 'App avec login, API REST, et interface React Tailwind.',
                productVariants_on_product: [
                  {
                    id: 'var-003a',
                    price: 299.0,
                    selectedOptions_on_productVariant: [
                      {name: 'Framework', value: 'React'},
                      {name: 'Fonctionnalité', value: 'Auth + API'}
                    ]
                  }
                ],
                productImages_on_product: [
                  {
                    id: 'img-003a',
                    url: 'https://placehold.co/400x300?text=Dashboard',
                    altText: 'Dashboard React',
                    width: 400,
                    height: 300,
                    displayPosition: 1
                  }
                ]
              }
            ]
          },

          {
            id: 'coll-004',
            name: 'Landing Pages & Offres',
            description: 'Pages vitrines optimisées pour la conversion et les campagnes marketing.',
            handle: 'landing-pages',
            page,
            featuredImage: {
              url: 'https://placehold.co/600x400?text=Landing',
              width: 600,
              height: 400,
              altText: 'Image landing'
            },
            products_via_ProductCollection: [
              {
                id: 'prod-004',
                title: 'Landing Freemium / SaaS',
                handle: 'landing-freemium',
                description:
                  'Structure idéale pour lancer un SaaS ou une app avec options premium.',
                productVariants_on_product: [
                  {
                    id: 'var-004a',
                    price: 89.0,
                    selectedOptions_on_productVariant: [
                      {name: 'Audience', value: 'SaaS B2C'},
                      {name: 'Formulaire', value: 'Lead + Contact'}
                    ]
                  }
                ],
                productImages_on_product: [
                  {
                    id: 'img-004a',
                    url: 'https://placehold.co/400x300?text=Form',
                    altText: 'Formulaire landing',
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
  const {data: collectionsData} = getCollectionsByPage(dc, {page: 'home'})
  // < MOCK END>

  // TODO - use a component with async in the signature (bcoz we are limited by Next)
  // const {data: collectionsData} = await getCollectionsByPage(dc, {page: 'home'})

  const [mainCollection, secondaryCollection, tertiaryCollection] = [
    ...(collectionsData?.collections || [])
  ].sort((a, b) => {
    const order: Record<string, number> = {
      'ecommerce-firebase': 1,
      'templates-blog': 2,
      'applications-spa': 3
    }
    return (order[a.handle] || 99) - (order[b.handle] || 99)
  })

  if (!collectionsData?.collections?.length) return notFound()

  // <PageLayout title={t('title')}>
  //   {
  //   <p className="max-w-[590px]">
  //     {t.rich('description', {
  //       code: (chunks) => (
  //         <code className="font-mono text-white">{chunks}</code>
  //       )
  //     })}
  //   </p> }
  //   </PageLayout>
  return (
    <>
      {/* title={mainCollection?.name as string}
      description={mainCollection?.description as string}
      description=
      {t.rich('description', {
        code: (chunks) => <code className="font-mono text-white">{chunks}</code>
      })} */}
      <Hero
        title={t('title')}
        description="description"
        image={mainCollection?.featuredImage?.url as string}
        primaryCta={{label: 'Shop Now', href: `/category/${mainCollection?.handle}`}}
        secondaryCta={{label: 'Learn More', href: `/category/${mainCollection?.handle}#about`}}
      />
      <Details title="About" body={mainCollection?.description as string} />
      <CardCarousel title="Explore" cta={{label: 'Shop All', href: '/products'}}>
        {collectionsData?.collections
          .filter((collection) => Boolean(collection?.featuredImage?.url))
          .map((collection) => (
            <CategoryCard
              key={collection.id}
              handle={collection.handle}
              name={collection.name}
              image={collection.featuredImage?.url || ''}
            />
          ))}
      </CardCarousel>
      <CardOverlay
        title={secondaryCollection?.name as string}
        description={secondaryCollection?.description as string}
        cta={{label: 'Shop Now', href: `/category/${secondaryCollection?.handle}`}}
        image={secondaryCollection?.featuredImage?.url as string}
      />
      <ProductGrid
        title={tertiaryCollection?.name as string}
        variant="character"
        products={
          tertiaryCollection?.products_via_ProductCollection?.map((product) => ({
            id: product.id,
            title: product.title,
            handle: product.handle,
            price: product.productVariants_on_product?.[0]?.price?.toString() || '',
            image: product.productImages_on_product?.[0],
            variants:
              product.productVariants_on_product?.[0]?.selectedOptions_on_productVariant?.map(
                (option) => (option.value ? option.value : '')
              )
          })) || []
        }
      />
    </>
  )
}
