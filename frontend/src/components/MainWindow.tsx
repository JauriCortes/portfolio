import Salute from "./Salute"

function MainWindow() {
    return(
        <div className="main-window">
            <div className="titlebar">
                Home
            </div>
            <div className="window-body">
                <Salute/>
            </div>
        </div>
    )
}

export default MainWindow