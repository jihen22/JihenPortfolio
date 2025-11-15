// contact information
export type ContactMethodType = {
  name: string
  value: string
  icon: string
  href?: string
  type: 'email' | 'phone' | 'location' | 'social' | 'website'
}

export const contactHeadLine = "Get In Touch"
export const contactIntro = "I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels below."

export const contactMethods: Array<ContactMethodType> = [
  {
    name: 'Email',
    value: 'jihenmessaoud992@gmail.com',
    icon: 'mail',
    href: 'mailto:jihenmessaoud992@gmail.com',
    type: 'email'
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/jihenme',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/jihenme',
    type: 'social'
  },
  {
    name: 'GitHub',
    value: 'github.com/jihen22',
    icon: 'github',
    href: 'https://github.com/jihen22',
    type: 'social'
  },
  {
    name: 'Location',
    value: 'Gafsa, Tunisia',
    icon: 'map-pin',
    type: 'location'
  }
]

export const contactFormConfig = {
  enabled: true,
  submitButtonText: 'Send Message',
  successMessage: 'Thank you for your message! I\'ll get back to you soon.',
  errorMessage: 'There was an error sending your message. Please try again.'
}

