import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <div style={style}>
      <Spinner animation="border" role="status" >
            <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;