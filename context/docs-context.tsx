import React, { useRef } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

interface IDocsContext {
	challenges: React.MutableRefObject<any>;
	solution: React.MutableRefObject<any>;
	getInvolved: React.MutableRefObject<any>;
}

export const DocsContext = createContext({} as IDocsContext)

const DocsContextProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const challenges = useRef(null)
    const solution = useRef(null)
    const getInvolved = useRef(null)
    return (
        <DocsContext.Provider value={{challenges, solution, getInvolved}}>
            {children}
        </DocsContext.Provider>
    )
}

function useDocsContext() {
    const context = useContext(DocsContext)
    return context;
}

export {useDocsContext, DocsContextProvider}