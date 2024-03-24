import Card from "./Card";

interface Props {
  entities: any[];
}

export default function List({ entities }: Props) {
  return (
    <>
      <div className="container">
        <div className="row">
          {entities.map((item, index) => (
            <>
              <div className="col-3">
                <Card entity={item} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
