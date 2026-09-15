import React, { useEffect, useState } from "react";

function Crud() {
  const [data, setData] = useState([]);
  const apiurl = "https://6a87de9b7b483fa21fe86a76.mockapi.io/api/v1/student";

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <>
      <h2>Student List</h2>
      <div className="container">
        <div className="row">
          {data.map((stu) => {
            return (
              <div className="col-3" key={stu.id}>
                <div className="card">
                  <img src={stu.img} className="card-img-top" alt="...not found" />
                  <div className="card-body">
                    <h5 className="card-title">{stu.name}</h5>
                    
                    <a href="#" className="btn btn-primary">
                     More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Crud;