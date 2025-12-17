import React from 'react'

const shows = [
  { title: 'Stranger Things', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/15a05c45-e11e-5189-bc4e-bdad3aac81d4/919a544c-f352-5009-8768-bee8433bd3be.jpg' },
  { title: 'The Witcher', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/66a2796d-95d6-5889-9b1c-3c8ff5400616/01a84265-e09c-5682-92ce-681c89a1afe2.jpg' },
  { title: 'Money Heist', img: 'https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6eb75bc591cfc22ff9fe65580fd00444986059dd76ac87374b97f0413adfbf7b96ed0b3e022fbae0e300bf4630a1c21f0e36eac5af13cd7fd1d279bb0e99d9f97b' },
  { title: 'Dark', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/f1813a91-c548-5cff-86b1-ba04aa8ce18c/19fff8e5-c8d2-5bcc-b34c-43e2ef28b80a.jpg' },
  { title: 'Narcos', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/27ee5488-b661-5c04-bb31-a138a4a6863f/42312781-0d1c-5101-a394-b7bb21d281a3.jpg' },
  { title: 'The Crown', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/29998bfe-df3b-52d2-9ea4-189bc9b42437/42312781-0d1c-5101-a394-b7bb21d281a3.jpg' },
];

const TvShows = () => {
  return (
    <div style={{background:'#111', minHeight:'100vh', paddingTop:100, paddingLeft:60, paddingRight:60}}>
      <h1 style={{fontSize:'2.5rem', marginBottom:30}}>TV Shows</h1>
      <div style={{display:'flex', flexWrap:'wrap', gap:32}}>
        {shows.map((show, i) => (
          <div key={i} style={{width:180, background:'#222', borderRadius:8, overflow:'hidden', boxShadow:'0 2px 8px #0007'}}>
            <img src={show.img} alt={show.title} style={{width:'100%', height:260, objectFit:'cover'}} />
            <div style={{padding:'10px 12px', color:'#fff', fontWeight:600, fontSize:'1.1rem'}}>{show.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TvShows
