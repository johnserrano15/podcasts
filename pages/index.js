export default class extends React.Component {
  render() {
    return <div className='container'>
      <h2>Hola John Serrano</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ratione delectus placeat ipsa voluptatibus nobis perspiciatis temporibus, aliquid earum excepturi voluptatum laborum repudiandae recusandae quae provident accusamus facilis officiis illum.</p>
      <img src="/static/arquitecto-front-end.jpg" alt="prueba"/>
      <style jsx>{`
        h2 {
          color: red;
        }
        .container :global(p) {
          margin: 0;
          color: grey;
          font-size: 18px;
        }
        img {
          max-width: 50%;
          display: block;
        }
      `}</style>
    </div>
  }
}
