import React from 'react'

const featured = {
  title: 'Stranger Things',
  desc: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
  img: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/640bb4cb-6d54-5b3f-9aec-8b114c56062f/943be709-ec94-5bb2-b9dd-60c5e75bb787.jpg'
};

const Home = () => {
  return (
    <div style={{background:'#111', minHeight:'100vh', paddingTop:80}}>
      <section style={{
        backgroundImage: `url(${featured.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '120px 60px 60px 60px',
        borderRadius: '0 0 40px 40px',
        boxShadow: '0 8px 32px #000a',
        marginBottom: 40
      }}>
        <h1 style={{fontSize:'3rem', fontWeight:800, marginBottom:20}}>{featured.title}</h1>
        <p style={{fontSize:'1.3rem', maxWidth:600, marginBottom:30}}>{featured.desc}</p>
        <button style={{background:'#e50914', color:'#fff', fontWeight:700, fontSize:'1.1rem', border:'none', borderRadius:6, padding:'12px 32px', marginRight:20, cursor:'pointer'}}>Play</button>
        <button style={{background:'#333', color:'#fff', fontWeight:700, fontSize:'1.1rem', border:'none', borderRadius:6, padding:'12px 32px', cursor:'pointer'}}>More Info</button>
      </section>
      <div style={{padding:'0 60px'}}>
        <h2 style={{margin:'40px 0 20px', fontSize:'2rem'}}>Popular on Netflix</h2>
        <div style={{display:'flex', gap:24, overflowX:'auto', paddingBottom:20}}>
          {[1,2,3,4,5,6,7].map(i => (
            <div key={i} style={{minWidth:180, height:100, background:'#222', borderRadius:8, backgroundImage:`url(https://picsum.photos/300/100?random=${i})`, backgroundSize:'cover', backgroundPosition:'center'}}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
