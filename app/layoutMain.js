'use client'

import React ,{useCallback} from 'react'
import Head from 'next/head'
import clsx from 'clsx'
// import { Roboto_Flex } from 'next/font/google'
// import { IBM_Plex_Sans_Arabic } from 'next/font/google'

// import { Header } from '@/components/Header'

import { LanguageProvider ,useLanguageContext } from './languageContext'
import TopNav from './topNav'
// import head from './(user)/head'


// const roboto = Roboto_Flex({
//   subsets: ['latin'],
//   variable: '--font-roboto',
// })

// const plex = IBM_Plex_Sans_Arabic({
//   subsets: ['arabic'],
//   weight: ['100', '200', '300', '400', '500', '600', '700'],
//   variable: '--font-plex',
// })

const LayoutComp = ({ programs, programsArabic, contact, children }) => {



  return (
    <LanguageProvider>
      {({ language }) => {
        const isArabic = language === 'ar'
        // const fontVariable = isArabic ? plex.variable : roboto.variable
        // const fontName = isArabic ? 'font-arabic' : 'font-sans'
         const htmlLang = isArabic ? 'ar' : 'en'

        return (
          <html 
          lang={htmlLang}
          >

   <head>
         <link
          rel="icon"
          href="/logo.png"
          type="image/x-icon"
          sizes="16x16"
       />
        <title>QMED - Software, SaaS &amp; Digital Agency Template</title>
      </head>  


            <body

            //  className={clsx(fontName, fontVariable)}
            >
              {/* <Header
                programs={isArabic ? programsArabic : programs}
                contact={contact}
              /> */}

{/* <div className=' h-[50px]  bg-gray-00'>



<TopNav/>

</div> */}



              <div>

                {children}

              </div>
            
          
            </body>
          </html>
        )
      }}
    </LanguageProvider>
  )
}

export default LayoutComp