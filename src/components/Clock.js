import '../App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faUndoAlt, faUndo } from '@fortawesome/free-solid-svg-icons';


const Clock = () => {
    return (
        <div className="clock-wrapper">
            <div className="clock-interface">Clock</div>
            <div className="clock-buttons-wrapper">
                <button>
                    <FontAwesomeIcon icon={faPlay}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faPause}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faUndoAlt} />
                </button>
            </div>
        </div>
    )
}

export default Clock;