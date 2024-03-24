interface Props {
  add: () => void;
  clear: () => void;
  removeLast: () => void;
  empty: boolean;
}

export default function Crud({ add, clear, removeLast, empty }: Props) {
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
    </>
  );
}
