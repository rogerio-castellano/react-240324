import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Title({ title, children }: Props) {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Users</h1>
        <p className="lead">{children}</p>
      </div>
    </>
  );
}
