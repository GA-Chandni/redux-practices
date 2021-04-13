import React from "react";

export default function ReduxMain(props) {

  //simple trick store the props in datas
  const datas=props.data;
  const name=datas.name;
  const lastn=datas.lastn;
//   console.log(name);

  return (
    <div>
      <h3>
          hey {name} and lastname is {lastn}
      </h3>
    </div>
  );
}
