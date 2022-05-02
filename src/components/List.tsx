import "./List.css";

const List = ({ listOfItems }: any) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Url</th>
            <th>Author</th>
            <th>Points</th>
            <th>ObjectID</th>
          </tr>
        </thead>
        <tbody>
          {listOfItems.map((item: any) => (
            <tr key={item.objectId}>
              <td>{item.title}</td>
              <td>
                <a href={item.url}>{item.url}</a>
              </td>
              <td>{item.author}</td>
              <td>{item.points}</td>
              <td>{item.objectId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
