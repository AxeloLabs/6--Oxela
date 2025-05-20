// import type {Metadata} from 'next'
import '../globals.css'
import HeaderContainer from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {Facebook, Instagram, X, Youtube} from '@/components/layout/footer/social-icons'
import {
  Amex,
  ApplePay,
  Bitcoin,
  GooglePay,
  Mastercard,
  Paypal,
  Visa
} from '@/components/layout/footer/payment-icons'
import AnnouncementBar from '@/components/ui/announcement-bar'
import {notFound} from 'next/navigation'
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl'
import {getTranslations, setRequestLocale} from 'next-intl/server'
import {ReactNode} from 'react'
// import {clsx} from 'clsx'
// import {Inter} from 'next/font/google'
import {routing} from '@/i18n/routing'
import Navigation from '@/components/ui-intl/Navigation'

// bcoz it is not the intl-way to do it, but the firebaseExt one
// export const metadata: Metadata = {
//   title: 'Firebase Ecommerce Template',
//   description: 'Firebase Ecommerce Template'
// }

type Props = {
  children: ReactNode
  params: Promise<{locale: Locale}>
}

// const inter = Inter({subsets: ['latin']})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const {locale} = await props.params

  const t = await getTranslations({locale, namespace: 'LocaleLayout'})

  return {
    title: t('title')
  }
}

export default async function LocaleLayout(
  // ({children}: Readonly<{children: React.ReactNode}>) {
  {children, params}: Props
) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    // <html lang="en">
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <AnnouncementBar>
            Get <strong>15%</strong> off and free shipping <strong>&quot;welcome&quot;</strong>
          </AnnouncementBar>
          <HeaderContainer />
          <Navigation />
          <main className="min-h-[75vh]">{children}</main>
          <Footer
            contactInformation={{
              email: 'info@mywebsite.com',
              phone: '+1 (408) 123-4567'
            }}
            socialMediaLinks={[
              {
                label: 'Facebook',
                href: 'https://facebook.com/',
                icon: <Facebook />
              },
              {
                label: 'X',
                href: 'https://x.com/',
                icon: <X />
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/',
                icon: <Instagram />
              },
              {
                label: 'Youtube',
                href: 'https://youtube.com/',
                icon: <Youtube />
              }
            ]}
            sections={[
              {
                title: 'Categories',
                links: [
                  {label: 'Categories', href: '/'},
                  {label: 'Categories', href: '/'},
                  {label: 'Categories', href: '/'},
                  {label: 'Categories', href: '/'}
                ]
              },
              {
                title: 'Company',
                links: [
                  {label: 'About', href: '/'},
                  {label: 'Stories', href: '/'},
                  {label: 'Careers', href: '/'},
                  {label: 'Stores', href: '/'}
                ]
              },
              {
                title: 'Help & Support',
                links: [
                  {label: 'FAQs', href: '/'},
                  {label: 'Contact Us', href: '/'},
                  {label: 'Returns', href: '/'},
                  {label: 'Shipping', href: '/'}
                ]
              },
              {
                title: 'Follow Us',
                links: [
                  {label: 'X', href: '/'},
                  {label: 'Instagram', href: '/'},
                  {label: 'Facebook', href: '/'},
                  {label: 'LinkedIn', href: '/'}
                ]
              }
            ]}
            paymentIcons={[
              <Visa key="visa" />,
              <Amex key="amex" />,
              <Mastercard key="mastercard" />,
              <Paypal key="paypal" />,
              <GooglePay key="google-pay" />,
              <ApplePay key="apple-pay" />,
              <Bitcoin key="bitcoin" />
            ]}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
