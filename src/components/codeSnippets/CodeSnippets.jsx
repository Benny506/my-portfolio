import './css/codeSnippet.css'


export default function CodeSnippets({ language, className }){
    return (
        language == 'reactNative'
        ?
            <div className={`${className == 2 ? 'code-snippet-container-2' : 'code-snippet-container'} rounded-3 p-4`}>
                <p className='m-0 p-0 small-txt mb-0'>
                    <span className='txt-A020F0'>import</span> <span className='txt-ADD8E6'>React</span> <span className='txt-A020F0'>from</span> <span className='txt-C9C901'>'react'</span>
                </p>
                <p className='m-0 p-0 small-txt mb-4'>
                    <span className='txt-A020F0'>import</span> <span className='txt-ADD8E6'>{'{'} View, Text, StyleSheet {'}'}</span> <span className='txt-A020F0'>from</span> <span className='txt-C9C901'>'react-native'</span>
                </p>
                <p className='m-0 p-0 mb-0 small-txt'>
                    <span className='txt-A020F0'>export</span> <span className='txt-A020F0'>default</span> <span className='txt-4D5BCE'>function</span> <span className='txt-C0C083'>Home</span><span className='txt-C9C901'>{'(){'}</span>
                </p>
                <p className='m-0 p-0 small-txt px-4 mb-0'>
                    <span className='txt-A020F0'>return {'('}</span>
                </p>
                <p className='px-4 mb-0'>
                    <p className='m-0 p-0 small-txt px-4'>
                        <span className='txt-6C6C6D'>{'<'}</span><span className='txt-4D5BCE'>View</span><span className='txt-6C6C6D'>{'>'}</span>
                    </p>
                </p>
                <p className='px-4 mb-0'>
                    <p className='px-4 mb-0'>
                        <p className='px-4 m-0 p-0 small-txt'>
                            <span className='txt-6C6C6D'>{'<'}</span><span className='txt-4D5BCE'>Text</span><span className='txt-6C6C6D'>{'>'}</span> <span className='txt-FFF'>HelloWorld!</span> <span className='txt-6C6C6D'>{'</'}</span><span className='txt-4D5BCE'>Text</span><span className='txt-6C6C6D'>{'>'}</span>
                        </p>
                    </p>
                </p>
                <p className='px-4 mb-0'>
                    <p className='px-4 mb-0 small-txt'>
                        <span className='txt-6C6C6D'>{'</'}</span><span className='txt-4D5BCE'>View</span><span className='txt-6C6C6D'>{'>'}</span>
                    </p>
                </p>
                <p className='px-4 small-txt mb-0'>
                    <span className='txt-A020F0'>{')'}</span>
                </p>
                <p className='small-txt mb-0'>
                    <span className='txt-C9C901'>{'}'}</span>
                </p>
                <p className='small-txt mb-0 d-flex justify-content-end'>
                    <span className='txt-C0C083'>-React Native</span>
                </p>
            </div>
        :
        language == 'nodeExpress' 
        ?
            <div className={`${className == 2 ? 'code-snippet-container-2' : 'code-snippet-container'} rounded-3 p-4`}>
                <p className='m-0 p-0 small-txt mb-0'>
                    <span className='txt-43D9AD'>exports</span><span className='txt-FFF'>.</span><span className='txt-D6E225'>myRoute</span> <span className='txt-FFF'>=</span> <span className='txt-4D5BCE'>async</span> <span className='txt-C9C901'>{'('}</span><span className='txt-ADD8E6'>req</span><span className='txt-FFF'>,</span> <span className='txt-ADD8E6'>res</span><span className='txt-C9C901'>{')'}</span> <span className='txt-4D5BCE'>{'=>'}</span> <span className='txt-C9C901'>{'{'}</span>
                </p> 
                <p className='mb-0 px-4'>
                    <p className='small-txt mb-0'>
                        <span className='txt-4D5BCE'>const</span> <span className='txt-4D5BCE'>{'{'}</span> <span className='txt-ADD8E6'>{'db'}</span> <span className='txt-4D5BCE'>{'}'}</span> <span className='txt-FFF'>=</span> <span className='txt-ADD8E6'>req</span>
                    </p>
                </p>               
                <p className='mb-2 px-4'>
                    <p className='small-txt mb-0'>
                        <span className='txt-4D5BCE'>const</span> <span className='txt-ADD8E6'>user</span> <span className='txt-FFF'>=</span> <span className='txt-A020F0'>await</span> <span className='txt-ADD8E6'>db</span><span className='txt-FFF'>.</span><span className='txt-C0C083'>select</span><span className='txt-D6E225'>{'('}</span><span className='txt-E99287'>'*'</span><span className='txt-D6E225'>{')'}</span><span className='txt-FFF'>.</span><span className='txt-C0C083'>from</span><span className='txt-D6E225'>{'('}</span><span className='txt-E99287'>'users'</span><span className='txt-D6E225'>{')'}</span>
                    </p>
                </p>
                <p className='mb-0 px-4'>
                    <p className='small-txt mb-0'>
                        <span className='txt-A020F0'>if</span><span className='txt-D6E225'>{'('}</span><span className='txt-ADD8E6'>user</span><span className='txt-D6E225'>{')'}</span> <span className='txt-A020F0'>{'{'}</span>
                    </p>
                </p>
                <p className='mb-0 px-4'>
                    <p className='mb-0 px-4'>
                        <p className='mb-0 small-txt'>
                            <span className='txt-A020F0'>return</span> <span className='txt-ADD8E6'>res</span><span className='txt-FFF'>.</span><span className='txt-C0C083'>json</span><span className='txt-C9C901'>{'('}</span><span className='txt-A020F0'>{'{'}</span>
                        </p>
                    </p>
                </p>
                <p className='mb-0 px-4'>
                    <p className='mb-0 px-4'>
                        <p className='mb-0 px-4'>                        
                            <p className='small-txt mb-0'>
                                <span className='txt-ADD8E6'>message:</span> <span className='txt-E99287'>"Successfully retrieved user"</span><span className='txt-FFF'>,</span>
                            </p>
                        </p>
                    </p>
                </p>
                <p className='mb-0 px-4'>
                    <p className='mb-0 px-4'>
                        <p className='mb-0 px-4'>                        
                            <p className='small-txt mb-0'>
                                <span className='txt-ADD8E6'>data:</span> <span className='txt-4D5BCE'>user</span><span className='txt-FFF'></span>
                            </p>
                        </p>
                    </p>
                </p>                
                <p className='mb-0 px-4'>
                    <p className='mb-0 px-4'>
                        <p className='mb-0 small-txt'>
                            <span className='txt-A020F0'>{'}'}</span>
                        </p>
                    </p>
                </p>
                <p className='mb-0 px-4'>
                    <p className='mb-0 small-txt'>
                        <span className='txt-A020F0'>{'}'}</span>
                    </p>
                </p> 
                <p className='mb-0 small-txt'>
                    <span className='txt-C9C901'>{'}'}</span>
                </p>
                <p className='small-txt mb-0 d-flex justify-content-end'>
                    <span className='txt-C0C083'>-Node JS Express</span>
                </p>
            </div>
        :
        language == 'reactJS'
        ?
            <div className={`${className == 2 ? 'code-snippet-container-2' : 'code-snippet-container'} rounded-3 p-4`}>
                <p className='m-0 p-0 small-txt mb-4'>
                    <span className='txt-A020F0'>import</span> <span className='txt-ADD8E6'>React, {'{'} useState {'}'}</span> <span className='txt-A020F0'>from</span> <span className='txt-C9C901'>'react'</span>
                </p>
                <p className='m-0 p-0 mb-0 small-txt'>
                    <span className='txt-A020F0'>export</span> <span className='txt-A020F0'>default</span> <span className='txt-4D5BCE'>function</span> <span className='txt-C0C083'>App</span><span className='txt-C9C901'>{'(){'}</span>
                </p>
                <p className='m-0 p-0 mb-0 small-txt'>
                    <span className='txt-4D5BCE'>const</span> <span className='txt-A020F0'>{'['}</span><span className='txt-4D5BCE'>name</span><span className='txt-FFF'>,</span> <span className='txt-C0C083'>setName</span><span className='txt-A020F0'>{']'}</span> <span className='txt-FFF'>=</span> <span className='txt-C0C083'>useState</span><span className='txt-A020F0'>{'('}</span><span className='txt-E99287'>"Benjamin"</span><span className='txt-A020F0'>{')'}</span>
                </p>
                <p className='m-0 p-0 small-txt px-4 mb-0'>
                    <span className='txt-A020F0'>return {'('}</span>
                </p>
                <p className='px-4 mb-0'>
                    <p className='m-0 p-0 small-txt px-4'>
                        <span className='txt-6C6C6D'>{'<'}</span><span className='txt-4D5BCE'>div</span><span className='txt-6C6C6D'>{'>'}</span>
                    </p>
                </p>
                <p className='px-4 mb-0'>
                    <p className='px-4 mb-0'>
                        <p className='px-4 m-0 p-0 small-txt'>
                            <span className='txt-6C6C6D'>{'<'}</span><span className='txt-4D5BCE'>p</span><span className='txt-6C6C6D'>{'>'}</span> <span className='txt-FFF'>My name is <span className='txt-4D5BCE'>{'{'}</span> <span className='txt-FFF'>name</span> <span className='txt-4D5BCE'>{'}'}</span></span> <span className='txt-6C6C6D'>{'</'}</span><span className='txt-4D5BCE'>p</span><span className='txt-6C6C6D'>{'>'}</span>
                        </p>
                    </p>
                </p>
                <p className='px-4 mb-0'>
                    <p className='px-4 mb-0 small-txt'>
                        <span className='txt-6C6C6D'>{'</'}</span><span className='txt-4D5BCE'>p</span><span className='txt-6C6C6D'>{'>'}</span>
                    </p>
                </p>
                <p className='px-4 small-txt mb-0'>
                    <span className='txt-A020F0'>{')'}</span>
                </p>
                <p className='small-txt mb-0'>
                    <span className='txt-C9C901'>{'}'}</span>
                </p>
                <p className='small-txt mb-0 d-flex justify-content-end'>
                    <span className='txt-C0C083'>-React JS</span>
                </p>
            </div> 
        :
        language == 'reactHooks' &&
            <div className={`${className == 2 ? 'code-snippet-container-2' : 'code-snippet-container'} rounded-3 p-4`}>
                <p className='m-0 p-0 small-txt mb-4'>
                    <span className='txt-A020F0'>import</span> <span className='txt-ADD8E6'>React, {'{'} useState, useEffect {'}'}</span> <span className='txt-A020F0'>from</span> <span className='txt-C9C901'>'react'</span>
                </p>   
                <p className='m-0 p-0 mb-2 small-txt'>
                    <span className='txt-4D5BCE'>const</span> <span className='txt-A020F0'>{'['}</span><span className='txt-4D5BCE'>count</span><span className='txt-FFF'>,</span> <span className='txt-C0C083'>setCount</span><span className='txt-A020F0'>{']'}</span> <span className='txt-FFF'>=</span> <span className='txt-C0C083'>useState</span><span className='txt-A020F0'>{'('}</span><span className='txt-C0C083'>0</span><span className='txt-A020F0'>{')'}</span>
                </p>  
                <p className='m-0 p-0 mb-0 small-txt'>
                    <span className='txt-C0C083'>useEffect</span><span className='txt-A020F0'>{'('}</span><span className='txt-4D5BCE'>{'() => {'}</span>
                </p> 
                <p className='m-0 p-0 px-4'>
                    <p className='small-txt m-0 p-0'>
                        <span className='txt-A020F0'>if</span><span className='txt-C0C083'>{'('}</span><span className='txt-4D5BCE'>count</span> <span className='txt-FFF'>{'<'}</span> <span className='txt-D6E225'>10</span><span className='txt-C0C083'>{')'}</span><span className='txt-C0C083'>{'{'}</span>
                    </p>
                </p>                        
                <p className='m-0 p-0 px-4 mb-2'>
                    <p className='m-0 p-0 px-4'>
                        <p className='small-txt m-0 p-0'>
                            <span className='txt-218365'>// Incrementing count till it gets to 10 <br />// with react hooks</span>
                        </p>
                    </p>
                </p>
                <p className='m-0 p-0 px-4'>
                    <p className='m-0 p-0 px-4'>
                        <p className='small-txt m-0 p-0'>
                            <span className='txt-C0C083'>setCount</span><span className='txt-A020F0'>{'('}</span><span className='txt-4D5BCE'>prevCount</span> <span className='txt-FFF'>{'=>'}</span> <span className='txt-4D5BCE'>prevCount</span> <span className='txt-FFF'>+</span> <span className='txt-C0C083'>1</span><span className='txt-A020F0'>{')'}</span>
                        </p>
                    </p>
                </p>
                <p className='m-0 p-0 px-4'>
                    <p className='m-0 p-0 small-txt'>
                        <span className='txt-C0C083'>{'}'}</span>
                    </p>
                </p>
                <p className='m-0 p-0 small-txt mb-0'>
                    <span className='txt-4D5BCE'>{'}'}</span><span className='txt-FFF'>,</span> <span className='txt-4D5BCE'>{'['}</span><span className='txt-ADD8E6'>count</span><span className='txt-4D5BCE'>{']'}</span><span className='txt-A020F0'>{')'}</span>
                </p>    
                <p className='small-txt mb-0 d-flex justify-content-end'>
                    <span className='txt-C0C083'>-React JS Hooks</span>
                </p>               
            </div>   
    )
}