'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(t.contact.success)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-background transition-all duration-700 ${inView ? 'fade-in-up' : 'opacity-0'
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-primary">{language === 'ar' ? 'تواصل ' : 'Contact '}</span>
            <span className="text-foreground">{language === 'ar' ? 'معنا' : 'Us'}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <div
            className={`relative transition-all duration-700 ${inView ? 'slide-in-right' : 'opacity-0'}`}
          >

            <img src="/bridge-concrete-drilling.jpg"
              alt=""
              className="rounded-2xl shadow-2xl shadow-primary/20 glow-box" />
          </div>
          {/* Contact Info */}
          {/* <div className="space-y-8 h-fit bg-amber-900"> */}
          <div
            ref={ref}
            className={`space-y-8 transition-all duration-700 ${inView ? 'fade-in-up' : 'opacity-0'}`}
          >
            <div className="flex gap-7">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{t.contact.phone}</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+966565261896">00966565261896</a>
                </p>
              </div>
            </div>

            <div className="flex gap-7">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">
                  <a
                    href="https://wa.me/966565261896"
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-green-600 hover:text-green-700"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.551 4.17 1.595 5.982L0 24l6.26-1.64C8.21 23.454 10.09 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.742 0-3.445-.46-4.94-1.333l-.355-.207-3.72.975.996-3.63-.23-.374A9.944 9.944 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.01-7.533c-.273-.137-1.614-.796-1.863-.887-.25-.091-.433-.137-.616.137-.182.273-.708.887-.868 1.07-.159.182-.318.205-.591.068-.273-.137-1.154-.425-2.197-1.356-.812-.723-1.361-1.616-1.52-1.889-.159-.273-.017-.421.12-.558.123-.122.273-.318.41-.477.137-.159.182-.273.273-.455.091-.182.046-.342-.023-.479-.068-.137-.616-1.489-.845-2.041-.223-.535-.451-.462-.616-.47l-.527-.01c-.182 0-.477.068-.727.342-.25.273-.955.933-.955 2.27 0 1.337.977 2.627 1.113 2.809.137.182 1.923 2.936 4.67 4.116.653.281 1.162.449 1.559.575.655.208 1.25.179 1.72.109.525-.078 1.614-.66 1.842-1.298.228-.637.228-1.183.159-1.298-.068-.114-.25-.182-.523-.319z" />
                    </svg>
                  </a>
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{t.contact.whatsup}</h3>
                <p className="text-muted-foreground">
                  <a href="https://wa.me/966565261896"
                    target="_blank"
                    rel="noopener noreferrer">00966565261896</a>
                </p>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex gap-7">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <a
                  href="https://www.facebook.com/share/1Fp8fSVnEY/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-2xl"
                >
                  {/* Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{t.contact.facebook}</h3>
                <p className="text-muted-foreground">
                  <a href="https://www.facebook.com/share/1Fp8fSVnEY/" target="_blank" rel="noopener noreferrer">facebook</a>
                </p>
              </div>
            </div>

            {/* TikTok */}
            <div className="flex gap-7">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <a
                  href="https://www.tiktok.com/@dymi86a02i6j?_r=1&_t=ZS-91U0DFQaB4E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-800 text-2xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.895 0h4.58c.016.304.033.61.06.914.117 1.37.555 2.586 1.39 3.68.757.993 1.72 1.72 2.87 2.217.676.292 1.38.484 2.105.572v4.63c-1.266-.04-2.49-.27-3.668-.748a10.82 10.82 0 0 1-1.658-.854c-.22-.13-.435-.274-.672-.428l-.01 6.63c-.02 1.31-.273 2.55-.83 3.72a7.71 7.71 0 0 1-5.14 4.18c-1.315.33-2.635.37-3.96.1a7.65 7.65 0 0 1-3.37-1.53A7.76 7.76 0 0 1 0 17.313c-.01-1.12.22-2.2.66-3.222a7.74 7.74 0 0 1 6.23-4.57c.447-.06.895-.08 1.342-.07v4.72c-.23-.03-.45-.07-.68-.07a3 3 0 0 0-2.82 1.93c-.1.25-.16.51-.18.78a2.99 2.99 0 0 0 1.39 2.91 2.93 2.93 0 0 0 2.24.41 3.03 3.03 0 0 0 2.43-2.51c.03-.28.04-.57.04-.86l.01-13.96z" />
                  </svg>
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{t.contact.tiktok}</h3>
                <p className="text-muted-foreground">
                  <a href="https://www.tiktok.com/@dymi86a02i6j?_r=1&_t=ZS-91U0DFQaB4E" target="_blank" rel="noopener noreferrer">tiktok</a>
                </p>
              </div>
            </div>

            {/* Snapchat */}
            <div className="flex gap-7">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <a
                  href="https://www.snapchat.com/add/bw_rwfyd2024?share_id=V6SWdk5YxGc&locale=ar-SA-u-nu-latn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-600 text-2xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 0c2.1 0 3.87.74 5.32 2.22C18.8 3.68 19.5 5.5 19.5 7.7c0 1.04-.15 1.98-.46 2.8-.31.82-.71 1.6-1.21 2.33-.5.73-.75 1.38-.75 1.95 0 .23.1.46.31.69.2.23.52.42.95.58.69.25 1.43.44 2.22.58.8.14 1.2.52 1.2 1.16 0 .33-.13.62-.4.87-.27.25-.6.37-1 .37-.27 0-.66-.1-1.2-.3-.53-.2-.98-.3-1.35-.3-.31 0-.61.07-.9.22a5.41 5.41 0 0 1-1.35.45c-.4.1-.84.16-1.33.16-.43 0-.85-.07-1.25-.22-.4-.15-.76-.37-1.1-.67-.33.3-.7.52-1.1.67-.4.15-.82.22-1.25.22-.49 0-.93-.05-1.33-.16-.4-.1-.92-.26-1.35-.45-.29-.15-.59-.22-.9-.22-.37 0-.82.1-1.35.3-.54.2-.93.3-1.2.3-.4 0-.73-.12-1-.37-.27-.25-.4-.54-.4-.87 0-.64.4-1.02 1.2-1.16.79-.14 1.53-.33 2.22-.58.43-.16.75-.35.95-.58.21-.23.31-.46.31-.69 0-.57-.25-1.22-.75-1.95-.5-.73-.9-1.51-1.21-2.33-.31-.82-.46-1.76-.46-2.8 0-2.2.7-4.02 2.14-5.48C8.17.74 9.93 0 12.04 0z" />
                  </svg>
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{t.contact.snapshat}</h3>
                <p className="text-muted-foreground">
                  <a href="https://www.snapchat.com/add/bw_rwfyd2024?share_id=V6SWdk5YxGc&locale=ar-SA-u-nu-latn" target="_blank" rel="noopener noreferrer">snapchat</a>
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{t.contact.address}</h3>
                <p className="text-muted-foreground">
                  {language === 'ar' ? ' المملكة العربية السعودية' : 'Saudi Arabia'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}
