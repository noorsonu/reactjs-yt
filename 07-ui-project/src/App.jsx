import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661641368227-d90efe7d056e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmZlc3Npb25hbCUyMHdvcmslMjBpbiUyMGNvbXB1dGVyJTIwd29ya3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1626970851408-f9be7f5ab242?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZmZXNzaW9uYWwlMjB3b3JrJTIwaW4lMjBjb21wdXRlciUyMHdvcmt8ZW58MHwxfDB8fHww&auto=format&fit=crop&q=60&w=700',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1595074475099-633660478a7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZmZXNzaW9uYWwlMjB3b3JrJTIwaW4lMjBjb21wdXRlciUyMHdvcmt8ZW58MHwxfDB8fHww&auto=format&fit=crop&q=60&w=700',
      intro: '',
      tag: 'Underbanked'
    },
  ]

  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  )
}

export default App