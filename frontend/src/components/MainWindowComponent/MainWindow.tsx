import { useState } from "react";
import Icon from "../IconComponent/Icon"
import Salute from "../SaluteComponent/Salute"

import './MainWindow.css'

import { Smile, FolderGit2, MailPlus, Info } from 'lucide-react';
import VentanaWrapper from "../WindowWraperComponent/WindowWraper";

function MainWindow() {

    const [activeTab, setActiveTab] = useState<string | null>(null);
    const closeWindow = () => setActiveTab(null);

    return(
        <div className="main-window">
            <div className="titlebar">
                Home
            </div>
            <div className="window-body">
                <Salute/>
                <div className="icons-grid">
                    <Icon onClick={()=>setActiveTab('Bio')} label="Bio" icon={ Smile }/>
                    <Icon onClick={()=>setActiveTab('Projects')} label="Projects" icon={ FolderGit2 }/>
                    <Icon onClick={()=>setActiveTab('Contacts')} label="Contact" icon={ MailPlus }/>
                    <Icon onClick={()=>setActiveTab('About')} label="About" icon={ Info }/>
                </div>
            </div>

            {activeTab && (
                <VentanaWrapper title={activeTab} onClose={() => closeWindow()}>

                    {activeTab === 'Bio' && <p>bio</p>}
                    {activeTab === 'Projects' && <p>project</p>}
                    {activeTab === 'Contacts' && <p>contacts</p>}
                    {activeTab === 'About' && <p>about</p>}
                    
                </VentanaWrapper>
                
            )}
        </div>

    );
}

export default MainWindow