import React from "react";
import Link from "next/link";

const Teste = () => {
  return (
    <div>
      <Link href="/list">
        <a>list</a>
      </Link>
      <Link href="/login">
        <a>login</a>
      </Link>
    </div>
  );
};

export default Teste;
