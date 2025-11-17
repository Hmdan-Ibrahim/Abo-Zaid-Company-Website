'use client'

import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const t = translations[language]

  const footerContent = {
    ar: {
      about: 'شركة ابو زيد',
      aboutDesc: 'متخصصون في قص وتخريم جميع أنواع الخرسانة بأعلى معايير الجودة',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      contact: 'تواصل',
      copyright: `© ${currentYear} شركة ابو زيد. جميع الحقوق محفوظة.`,
      servicesList: ['قص الخرسانة', 'تخريم الخرسانة', 'الصيانة'],
      location: 'السعودية',
      socialLinks: {
        facebook: 'Facebook',
        tiktok: 'Tiktok',
        // instagram: 'Instagram'
      }
    },
    en: {
      about: 'Abu Zaid Company',
      aboutDesc: 'Specialists in concrete cutting and drilling with the highest quality standards',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      contact: 'Contact',
      copyright: `© ${currentYear} Abu Zaid Company. All rights reserved.`,
      servicesList: ['Concrete Cutting', 'Concrete Drilling', 'Maintenance'],
      location: 'Mecca, Saudi Arabia',
      socialLinks: {
        facebook: 'Facebook',
        tiktok: 'Tiktok',
        // instagram: 'Instagram'
      }
    }
  }

  const content = footerContent[language]

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{content.about}</h3>
            <p className="text-muted-foreground text-sm">
              {content.aboutDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{content.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.about}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{content.services}</h3>
            <ul className="space-y-2 text-sm">
              {content.servicesList.map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{content.contact}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+966565261896">📞 00966565261896</a></li>
              <li><a
                href="https://wa.me/966565261896"
                target="_blank"
                rel="noopener noreferrer"
                className='flex gap-2 items-center'
              >
                <svg
                  className="text-green-600 hover:text-green-700"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.551 4.17 1.595 5.982L0 24l6.26-1.64C8.21 23.454 10.09 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.742 0-3.445-.46-4.94-1.333l-.355-.207-3.72.975.996-3.63-.23-.374A9.944 9.944 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.01-7.533c-.273-.137-1.614-.796-1.863-.887-.25-.091-.433-.137-.616.137-.182.273-.708.887-.868 1.07-.159.182-.318.205-.591.068-.273-.137-1.154-.425-2.197-1.356-.812-.723-1.361-1.616-1.52-1.889-.159-.273-.017-.421.12-.558.123-.122.273-.318.41-.477.137-.159.182-.273.273-.455.091-.182.046-.342-.023-.479-.068-.137-.616-1.489-.845-2.041-.223-.535-.451-.462-.616-.47l-.527-.01c-.182 0-.477.068-.727.342-.25.273-.955.933-.955 2.27 0 1.337.977 2.627 1.113 2.809.137.182 1.923 2.936 4.67 4.116.653.281 1.162.449 1.559.575.655.208 1.25.179 1.72.109.525-.078 1.614-.66 1.842-1.298.228-.637.228-1.183.159-1.298-.068-.114-.25-.182-.523-.319z" />
                </svg>
                {t.contact.whatsup}
              </a>
              </li>
              <li>📍 {content.location}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {content.copyright}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="www.facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
              {content.socialLinks.facebook}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {content.socialLinks.tiktok}
            </a>
            {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {content.socialLinks.instagram}
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
