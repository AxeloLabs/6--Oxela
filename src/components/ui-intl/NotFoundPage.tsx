import {useTranslations} from 'next-intl'
import PageLayout from './PageLayout'

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')

  return (
    <PageLayout title={t('title')}>
      <p className="max-w-[460px]">{t('description')}</p>
    </PageLayout>
  )
}

// FIREBASE EXTENDED (Useless I think)
// import Button from '@/components/ui/button'

// export default function NotFound() {
//   return (
//     <section className="flex flex-col gap-8 items-center justify-center h-[75vh]">
//       <h1 className="text-3xl">Page not found</h1>
//       <Button href="/">Back home</Button>
//     </section>
//   )
// }
