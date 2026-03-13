import React from "react";
import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./screens/PersonalInfo";
import MyStacks from "./screens/MyStacks";
import Education from "./screens/Education";


export default function AboutRouter({ onShowOffCanvasNav }){
    return (
        <Routes>
            <Route 
                path='/'
                element={ <PersonalInfo onShowOffCanvasNav={onShowOffCanvasNav} /> }
            />

            <Route
                path="/my-stacks"
                element={ <MyStacks onShowOffCanvasNav={onShowOffCanvasNav} /> }
            />

            <Route
                path="/high-school-education"
                element={ <Education type="highSchool" onShowOffCanvasNav={onShowOffCanvasNav} /> }
            />            

            <Route
                path="/college-education"
                element={ <Education type="college" onShowOffCanvasNav={onShowOffCanvasNav} /> }
            />            
        </Routes>
    )
}