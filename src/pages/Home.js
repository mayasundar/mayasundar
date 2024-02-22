import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
import "../index.css";

export default function Home() {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <>
            <Navbar></Navbar>
            <div className="container clearfix">
                <Panel activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </>
    );
}
