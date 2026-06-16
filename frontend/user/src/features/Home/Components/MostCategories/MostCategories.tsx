import React from 'react'
import './MostCategories.css'
import { MostCategoriesCards, MostCategoriesHeader } from '..'

import type { CategoryItem } from '../MostCategoriesCards/MostCategoriesCards'

interface MostCategoriesProps {
  categories?: CategoryItem[]
}

const DEFAULT_CATEGORIES: CategoryItem[] = [
  { name: "الأحذية", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOsXBSj0c8tSHotovqfavwkz2NmZYexgaTKnzf2t2dMynFIRJ5iD0yDbd69yaxrVbtAmBUS8ehQ3ilbBmtz0YY1y0FC-oHXzxpISqVjfBcd3qFtVp4kZG-bgNIMYKgSraiDvPwxVzR8cwxDFsKIH_V6St8nHMDGlWshhCWZpOSA2BLACUfyayT9F2B9csWPVlgpsAO2li-tl4X0qQ09Fg-WmFf0Q8asPJkXM1VbguJmlcUWx3uUFESDv2KEpjCVoEDxgyxNowzc", category: "shoes" },
  { name: "الحقائب", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0QdSAjGxB7r58O89T_MxmzymfPwSF9TT76jGyv1CNbH0BgmzfTFsaULwdG5O0UKTnBReEspTaqjVDrNxXc-QYVurS9NskzVsp4g5WIkDc694t11IcKW86WXCR_HgHzh0mZjrBOmcaeM8gxNvdTvzOiR7M8cpIT12cjBi0xTGOzYYc-GtZ8FynMdmxt-4Rxa05HDuKqkfseZBKCjUiGfpJ1fI0hGtiAfNg_EXEWgmvus488bQsA7g44bPScUzGEixaqETyM1yuUqc", category: "bags" },
  { name: "الملابس", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-eT6sNsweiexl-gs-CYg2XwmhksdlYhBy1__hqUDkwz_sQugobdvQtczYnpJ-mY5aTHWEfpt6JvlSCXvKF2wMUZ-7r9MAH3yP91XzjWS5bmqEhnquhSbOS25M8g1uX3trCvWJeV7RqHd0sqj7HWFOKBqumtJncIZmrUqnKjhVDgKhbSiq9b6GnVM9obEVeWPDc29IAcrfs1IjpV5XAu0qZhGUKBbAc4jSRTJX9a-E_iccaQgLvHJPA5IDW3eMguMmL847eQu10hc", category: "clothes" },
  { name: "الاكسسوارات", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-eT6sNsweiexl-gs-CYg2XwmhksdlYhBy1__hqUDkwz_sQugobdvQtczYnpJ-mY5aTHWEfpt6JvlSCXvKF2wMUZ-7r9MAH3yP91XzjWS5bmqEhnquhSbOS25M8g1uX3trCvWJeV7RqHd0sqj7HWFOKBqumtJncIZmrUqnKjhVDgKhbSiq9b6GnVM9obEVeWPDc29IAcrfs1IjpV5XAu0qZhGUKBbAc4jSRTJX9a-E_iccaQgLvHJPA5IDW3eMguMmL847eQu10hc", category: "accessories" }
]

function MostCategories({ categories = DEFAULT_CATEGORIES }: MostCategoriesProps): React.ReactNode {
  return (
    <section className="py-section-gap container mx-auto px-container-margin flex flex-col items-center">
      <MostCategoriesHeader />
      <MostCategoriesCards categories={categories} />
    </section>
  )
}

export default MostCategories
