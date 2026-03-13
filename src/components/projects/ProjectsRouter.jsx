import React from "react";
import { Routes, Route } from 'react-router-dom'
import AllProjects from "./screens/AllProjects";
import SingleProject from "./screens/SingleProject";


export default function ProjectsRouter({ onShowOffCanvasNav }){
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <AllProjects onShowOffCanvasNav={onShowOffCanvasNav} />
                } 
            />

            <Route 
                path="/single-project/:name" 
                element={
                    <SingleProject onShowOffCanvasNav={onShowOffCanvasNav} />
                } 
            />
        </Routes>
    )
}