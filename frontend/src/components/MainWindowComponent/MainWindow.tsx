import Icon from "../IconComponent/Icon"
import Salute from "../SaluteComponent/Salute"

import './MainWindow.css'

import { Smile, FolderGit2, MailPlus, Info } from 'lucide-react';

function MainWindow() {
    return(
        <div className="main-window">
            <div className="titlebar">
                Home
            </div>
            <div className="window-body">
                <Salute/>
                <div className="icons-grid">
                    <Icon label="Bio" icon={ Smile }/>
                    <Icon label="Projects" icon={ FolderGit2 }/>
                    <Icon label="Contact" icon={ MailPlus }/>
                    <Icon label="About" icon={ Info }/>
                </div>
            </div>
        </div>
    )
}

export default MainWindow