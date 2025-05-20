import Header from './header'

const navigation = [
  {label: 'Ecom', href: '/category/E-commerce'},
  {label: 'Blog', href: '/category/Blog'},
  {label: 'SPA', href: '/category/SPA'},
  {label: 'SEO', href: '/category/SEO'}
]

export default async function HeaderContainer() {
  return <Header navigation={navigation} />
}
