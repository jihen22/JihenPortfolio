// friends
export const friendsHeadLine = "Jihen's Network"
export const friendsIntro = "Talented developers and innovators I collaborate with."


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'Corey Chiu - Portfolio Template Creator',
    description: 'Creator of this amazing portfolio template',
    link: { href: 'https://coreychiu.com' },
  },
]