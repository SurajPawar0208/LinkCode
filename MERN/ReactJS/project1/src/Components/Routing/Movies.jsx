import React from 'react'

const movies = [
  { title: 'Extraction', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3a452568-fe9e-5237-ace2-4d46b97ac63f/19fff8e5-c8d2-5bcc-b34c-43e2ef28b80a.jpg' },
  { title: 'Red Notice', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/06d437b6-82b7-5e8b-8615-8fe3f978caec/19fff8e5-c8d2-5bcc-b34c-43e2ef28b80a.jpg' },
  { title: 'The Irishman', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/2e0d5488-f998-5ca0-973f-3be65ed143c0/01a84265-e09c-5682-92ce-681c89a1afe2.jpg' },
  { title: 'Bird Box', img: 'https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6e09e30b4579f045a0daf9a4143adc64bfb9dea315a4ebc208711c605edad79ba7a943f7174e1311a8a3332b088fa74bdc98a1724eee8e94e7a56af2af08d5414f' },
  { title: '6 Underground', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/ae306121-ef94-5c38-80a6-d03087ff5756/1a7f60a4-ee79-56d6-a2e1-8d5829aba985.jpg' },
  { title: 'Enola Holmes', img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/e795b042-bbfc-52a7-a9a2-eb99a140e9d9/53204acd-0c0e-54e4-a233-957b997cc557.jpg' },
];

const Movies = () => {
  return (
    <div style={{background:'#111', minHeight:'100vh', paddingTop:100, paddingLeft:60, paddingRight:60}}>
      <h1 style={{fontSize:'2.5rem', marginBottom:30}}>Movies</h1>
      <div style={{display:'flex', flexWrap:'wrap', gap:32}}>
        {movies.map((movie, i) => (
          <div key={i} style={{width:180, background:'#222', borderRadius:8, overflow:'hidden', boxShadow:'0 2px 8px #0007'}}>
            <img src={movie.img} alt={movie.title} style={{width:'100%', height:260, objectFit:'cover'}} />
            <div style={{padding:'10px 12px', color:'#fff', fontWeight:600, fontSize:'1.1rem'}}>{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
