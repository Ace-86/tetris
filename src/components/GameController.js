import "./styles/GameController.css";

const GameController = ({
    board,
    GameStats,
    player,
    setGameOver,
    setPlayer
}) => {
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);
        if (code === Action.Quit) {
        setGameOver(true);
        }
    };
    
    const onKeyDown = ({ code }) => {
        console.log(`onKeyDown ${code}`);
    };

    return (
        <input 
        className="GameController"
        type="text"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        autoFocus
        />
    );
};



export default GameController