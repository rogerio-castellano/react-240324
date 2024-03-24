export default function Card(entity: any) {
  return (
    <>
      {/* <div className="card w-25 p-3" style={{ width: "18 rem" }}> */}
      <div className="card">
        <img
          src={entity.entity.picture.large}
          alt={entity.entity.id.value}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            {entity.entity.name.title} {entity.entity.name.first}{" "}
            {entity.entity.name.last}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            View profile
          </a>
        </div>
      </div>
    </>
  );
}
