import './Publi.css';

function PubItem({titulo , descricao}) {
  return (
    <div className="postBlog">
        <h3 className="postBlog__title">{titulo}</h3>
        <p className="postBlog__description">{descricao}</p>
    </div>
  );
}

export default PubItem;