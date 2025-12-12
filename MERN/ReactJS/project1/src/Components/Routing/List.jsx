const Row = ({ title }) => {
  const items = new Array(4).fill(0);
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {items.map((_, i) => (
          <div key={i} className="poster" />
        ))}
      </div>
    </section>
  );
};

export default function List() {
  return <>
  <div className="main">{(
      <div className="content">
        <Row title="Trending Now" />
        <Row title="Top Picks for You" />
        <Row title="Watched" />
        <Row title="New Releases" />
      </div>
  )}
  </div>
 
  </>
}