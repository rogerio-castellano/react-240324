interface Props {
  add: () => void;
  clear: () => void;
  removeLast: () => void;
  replaceMiddle: () => void;
  empty: boolean;
}

export default function Crud({
  add,
  clear,
  removeLast,
  replaceMiddle,
  empty,
}: Props) {
  return (
    <>
      <button className="btn btn-primary me-2" onClick={add}>
        Add
      </button>
      <button className="btn btn-primary me-2" onClick={clear} disabled={empty}>
        Clear
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={removeLast}
        disabled={empty}
      >
        Remove last
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={replaceMiddle}
        disabled={empty}
      >
        Replace middle
      </button>
    </>
  );
}
