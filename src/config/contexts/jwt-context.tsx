import { createContext, ReactNode, useContext, useReducer } from 'react';
enum ActionsJWT {
    SET,
    GET,
    DELETE
}

interface Action {
    type: ActionsJWT,
    jwt?: string
}

type State = {
    jwt?: string,
    isAuth: boolean
}

type ProviderProps = {
    children: ReactNode
}

type Dispatch = (action: Action) => void;

const JwtStateContext = createContext<State | undefined>(undefined)
const JwtDispatchContext = createContext<Dispatch | undefined>(undefined)

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionsJWT.SET: {
            const { jwt } = action;
            if (jwt === undefined) throw new Error("in SET action jwt must be provided");
            window.localStorage.setItem('token', jwt as string);
            return { ...state, jwt, isAuth: true }
        }
        case ActionsJWT.DELETE: {
            window.localStorage.removeItem('token')
            return { jwt: undefined, isAuth: false }
        }
        default: {
            throw new Error('no type to action has been passed')
        }
    }

}

export const JwtProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, { jwt: '', isAuth: false });
    return (
        <JwtStateContext.Provider value={state}>
            <JwtDispatchContext.Provider value={dispatch}>
                {children}
            </JwtDispatchContext.Provider>
        </JwtStateContext.Provider>
    )
}

const useStateJWT = () => {
    const context = useContext(JwtStateContext)
    if (context === undefined) throw new Error("useStateJWT must be within JwtProvider")
    return context
}
const useDispatchJWT = () => {
    const context = useContext(JwtDispatchContext)
    if (context === undefined) throw new Error("JwtDispatchJWT must be within JwtProvider")
    return context
}

const useJwt = (): [State, Dispatch] => [useStateJWT(), useDispatchJWT()]