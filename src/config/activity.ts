// activity
export const activityHeadLine = "Activity I share on LinkedIn"
export const activityIntro = "Insights on AI, Cloud Architecture, and Full-Stack Development"

export const tweetIds = [
  // Add your tweet IDs here if you have a Twitter/X account
  // Format: 'tweet_id_number'
]

// LinkedIn Posts
// Format: LinkedIn embed URLs (from "Embed this post" option)
// These are the embed URLs that display the actual post content
export const linkedinPostIds = [
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7394688450882510849',
    postUrl: 'https://www.linkedin.com/posts/jihenme_7394688450882510849',
    width: 504,
    height: 1656
  },
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7393759819305910272?collapsed=1',
    postUrl: 'https://www.linkedin.com/posts/jihenme_7393759819305910272',
    width: 504,
    height: 542
  },
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7383890601857003520?collapsed=1',
    postUrl: 'https://www.linkedin.com/posts/jihenme_7383890601857003520',
    width: 504,
    height: 669
  },
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7329141000839364608',
    postUrl: 'https://www.linkedin.com/posts/jihenme_7329141000839364608',
    width: 504,
    height: 714
  },
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7262181182551846912',
    postUrl: 'https://www.linkedin.com/posts/jihenme_7262181182551846912',
    width: 504,
    height: 792
  },
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7243947544513310721?collapsed=1',
    postUrl: 'https://www.linkedin.com/posts/jihenme_7243947544513310721',
    width: 504,
    height: 664
  },
  {
    url: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7240703623410728960?collapsed=1',
    postUrl: 'https://www.linkedin.com/posts/jihenme_7240703623410728960',
    width: 504,
    height: 695
  },
]

export type LinkedInPostType = {
  url: string
  postUrl: string
  width: number
  height: number
}

