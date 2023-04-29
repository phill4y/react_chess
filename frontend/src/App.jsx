import ChessBoard from "./components/ChessBoard";
// import ChessProvider from "./classes/ChessProvider";
// import { ChessContext } from "./classes/ChessProvider";

function App() {
  return (
    <div>
      {/* <ChessProvider> */}
        <div className="app-container">
          <div className="content-container">
            {/* <ChessContext.Consumer>{(context) => <ChessBoard context={context} />}</ChessContext.Consumer> */}
             <ChessBoard/>
          </div>
        </div>
      {/* </ChessProvider> */}
    </div>
  );
}

export default App;
