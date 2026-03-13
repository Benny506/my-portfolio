import React from "react";
import CodeSnippets from "../../codeSnippets/CodeSnippets";

const showCase = [
    {
        Snippet: () => <CodeSnippets language={'reactNative'} className={2} />
    },
    {
        Snippet: () => <CodeSnippets language={'nodeExpress'} className={2} />
    },
    {
        Snippet: () => <CodeSnippets language={'reactJS'} className={2} />
    },
    {
        Snippet: () => <CodeSnippets language={'reactHooks'} className={2} />
    },
    {
        Snippet: () => <CodeSnippets language={'reactNative'} className={2} />
    },
]


export default function CodeShowcase(){

    const displayShowcase = showCase.map((item, i) => {
        const { Snippet } = item

        return (
            <div
                key={i}
                className="mb-4"
            >
                <Snippet />
            </div>
        )
    })

    return (
        <div 
            style={{ maxHeight: '80vh', minHeight: '80vh' }}
            className="w-100 h-100 d-flex flex-column justify-content-between"
        >
            <div style={{ overflowY: 'scroll'}} className="mt-2">
                <div className="px-4 py-0">
                    { displayShowcase }
                </div>
            </div>            
        </div>
    )
}