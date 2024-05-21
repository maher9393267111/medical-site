import React ,{useCallback} from 'react'
import { useLanguageContext } from './languageContext'
import LanguageToggle from './selectLanguage'
import english from '../public/assets/english.png'
import arabic from '../public/assets/arabic.png'

export default function topNav() {


    
    const { language, changeLanguage } = useLanguageContext()


    const selectLanguage = useCallback(
        (language) => {
          switch (language) {
            case 'en':
              changeLanguage('en')
              break
            case 'ar':
              changeLanguage('ar')
              break
            default:
              changeLanguage('en')
              break
          }
        },
        [changeLanguage],
      )



  return (
    <div>


<div className="mr-1 pt-2">
    
          <LanguageToggle
            languages={[
              { label: 'English', value: 'en', img: english },
              { label: 'عربي', value: 'ar', img: arabic },
            ]}
            selectedLanguage={language}
            selectLanguage={selectLanguage}
          />
        </div>



    </div>
  )
}
