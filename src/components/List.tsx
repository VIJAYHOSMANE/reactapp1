import "./List.css"
const listofitems=[
    {
      title:"Cognitive clouds",
      url:"https://www.cognitiveclouds.com/",
      objectId:1,
      author:"vijay",
      created_at:"27-10-2022",
      points:2000,
    },
    {
      created_at: "2020-10-23T19:26:35.000Z",
      title: "YouTube-dl has received a DMCA takedown from RIAA",
      url: "https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md",
      author: "phantop",
      points: 4240,
      objectId:2,
    },
    {
      created_at: "2017-02-19T21:16:33.000Z",
      title: "Reflecting on one very, very strange year at Uber",
      url: "https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber",
      author: "grey-area",
      points: 4107,
      objectId:3,
    },
    {
      created_at: "2020-01-21T15:38:22.000Z",
      title: "Every Google result now looks like an ad",
      url: "https://twitter.com/craigmod/status/1219644556003565568",
      author: "cmod",
      points: 3592,
      objectId:4,
    },
  ];
  const List=() => {
    return (
      <div>
        <table>
          <tr>
            <th>Title</th>
            <th>Url</th>
            <th>Author</th>
            <th>Points</th>
            <th>ObjectID</th>
          </tr>
        
        
        {listofitems.map((item:any) =>(
          <tr>
            <td>{item.title}</td>
            <td> 
              <a href={item.url}>{item.url}</a>
            </td>
            <td>{item.author}</td>
            <td>{item.points}</td>
            <td>{item.objectId}</td>
          </tr>
        ))}
        </table>
      </div>
    );
  };
  
  export default List;
  