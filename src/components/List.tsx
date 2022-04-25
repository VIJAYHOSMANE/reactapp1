const listofitems=[
    {
      title:"Cognitive clouds",
      url:"https://www.cognitiveclouds.com/",
      objectId:1,
    }
  ];
  const List=() => {
    return (
      <div>
        <ul>
        <li>{listofitems[0].title}</li>
        <li>{listofitems[0].url}</li>
        </ul>
      </div>
    );
  };
  
  export default List;
  