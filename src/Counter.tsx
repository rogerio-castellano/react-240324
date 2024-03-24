interface Props {
  entityCount: number;
}

export default function Counter({ entityCount }: Props) {
  return <>{entityCount > 0 && <p>Count {entityCount}</p>}</>;
}
