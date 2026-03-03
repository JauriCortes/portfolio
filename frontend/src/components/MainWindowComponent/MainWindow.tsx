import { useState } from "react";
import Icon from "../IconComponent/Icon"
import Salute from "../SaluteComponent/Salute"

import './MainWindow.css'

import { Smile, FolderGit2, MailPlus, Info } from 'lucide-react';
import FloatingWindow from "../FloatingWindowComponent/FloatingWindow";
import BioContent from "../BioContent/BioContent";
import ProjectsContent from "../ProjectsContent/ProjectsContent";
import ContactContent from "../ContanctContent/ContactContent";
import AboutContent from "../AboutContent/AboutContent";

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
                    <Icon onClick={()=>{closeWindow(); setActiveTab('Bio')}} label="Bio" icon={ Smile }/>
                    <Icon onClick={()=>{closeWindow(); setActiveTab('Projects')}} label="Projects" icon={ FolderGit2 }/>
                    <Icon onClick={()=>{closeWindow(); setActiveTab('Contacts')}} label="Contact" icon={ MailPlus }/>
                    <Icon onClick={()=>{closeWindow(); setActiveTab('About')}} label="About" icon={ Info }/>
                </div>
            </div>

            {activeTab && (
                <FloatingWindow title={activeTab} onClose={() => closeWindow()}>

                    {activeTab === 'Bio' && <BioContent/>}
                    {activeTab === 'Projects' && <ProjectsContent/>}
                    {activeTab === 'Contacts' && <ContactContent/>}
                    {activeTab === 'About' && <AboutContent/>}
                    
                </FloatingWindow>
                
            )}
        </div>

    );
}

export default MainWindow