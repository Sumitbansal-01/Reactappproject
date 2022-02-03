import React from 'react';

export default function PerRow(props) {
  return (
    <div className="card mb-5 bg-light" style={{ 'boxShadow': '6px 6px 8px black, 0px 0px 4px black inset' }}>
      <div className="card-body ">
        <h5 className="card-title">{props.row.id}</h5>
        <p className="card-text">{props.row.desc}</p>
      </div>
    </div>)
    ;
}
