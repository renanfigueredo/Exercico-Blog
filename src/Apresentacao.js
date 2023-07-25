import './Apresentacao.css';

function Apresentacao({ img, nome, descricao }) {
    return (
        <div className="quemSouEu">
            <img className="quemSouEu__minhaImagem" src={img} alt="Carrinho" ></img>
            <section className="quemSouEu__descricao">
                <h2 className="quemSouEu__descricao--Destaque">{nome}</h2>
                <p>{descricao}</p>
            </section>
        </div>
    );
}

export default Apresentacao;
